// src/app/actions/waitlist.ts
"use server";

import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { PostHog } from "posthog-node";
import { waitlistSchema } from "@/lib/waitlist/schema";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

const posthog = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
  flushAt: 1,
  flushInterval: 0,
});

const hash = (v: string) =>
  createHash("sha256").update(v + (process.env.HASH_SALT ?? "")).digest("hex");

const RATE_LIMIT_WINDOW_MIN = 10;
const RATE_LIMIT_MAX = 5;

export type WaitlistState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    h.get("x-real-ip") ??
    "unknown";
  const ua = h.get("user-agent") ?? "";
  const ipHash = hash(ip);

  // Honeypot + validación
  const parsed = waitlistSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Revisa el formulario",
    };
  }

  // Rate limit por IP
  const { data: rl } = await supabase
    .from("waitlist_rate_limits")
    .select("attempts, window_start")
    .eq("ip_hash", ipHash)
    .maybeSingle();

  const now = new Date();
  if (rl) {
    const started = new Date(rl.window_start);
    const minsAgo = (now.getTime() - started.getTime()) / 60000;
    if (minsAgo < RATE_LIMIT_WINDOW_MIN && rl.attempts >= RATE_LIMIT_MAX) {
      return {
        status: "error",
        message: "Muchos intentos. Prueba en unos minutos.",
      };
    }
    if (minsAgo >= RATE_LIMIT_WINDOW_MIN) {
      await supabase
        .from("waitlist_rate_limits")
        .update({ attempts: 1, window_start: now.toISOString() })
        .eq("ip_hash", ipHash);
    } else {
      await supabase
        .from("waitlist_rate_limits")
        .update({ attempts: rl.attempts + 1 })
        .eq("ip_hash", ipHash);
    }
  } else {
    await supabase
      .from("waitlist_rate_limits")
      .insert({ ip_hash: ipHash, attempts: 1, window_start: now.toISOString() });
  }

  const { email, source, utm_source, utm_medium, utm_campaign } = parsed.data;
  const emailHash = hash(email);

  const { error } = await supabase.from("waitlist").insert({
    email,
    email_hash: emailHash,
    source: source ?? "landing",
    utm_source,
    utm_medium,
    utm_campaign,
    user_agent: ua.slice(0, 512),
    ip_hash: ipHash,
  });

  // Duplicado = éxito silencioso (no filtramos si un correo ya está)
  if (error && error.code !== "23505") {
    return { status: "error", message: "No pudimos guardarte. Intenta de nuevo." };
  }

  posthog.capture({
    distinctId: emailHash,
    event: "waitlist_submitted",
    properties: {
      source: source ?? "landing",
      utm_source,
      utm_medium,
      utm_campaign,
      duplicate: error?.code === "23505",
    },
  });
  await posthog.shutdown();

  return { status: "success" };
}