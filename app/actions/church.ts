// app/actions/church.ts
// Solicitudes de iglesias que quieren su canal en Kairós.
"use server";

import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const schema = z.object({
  church: z.string().trim().min(2, "Escribe el nombre de la iglesia").max(120),
  city: z.string().trim().min(2, "Escribe la ciudad y el país").max(120),
  contact: z.string().trim().min(2, "Escribe tu nombre y rol").max(120),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .max(254)
    .email("Escríbelo así: nombre@correo.com"),
  // honeypot
  website: z.string().max(0).optional(),
});

export type ChurchState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function requestChurchChannel(formData: FormData): Promise<ChurchState> {
  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Revisa el formulario" };
  }
  const { church, city, contact, email } = parsed.data;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
  const { error } = await supabase.from("church_requests").insert({ church, city, contact, email });
  if (error) return { status: "error", message: "No pudimos enviarlo. Intenta de nuevo." };
  return { status: "success" };
}
