// components/waitlist-form.tsx
"use client";

import { useActionState, useEffect, useState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";

const initial: WaitlistState = { status: "idle" };

type Props = {
  source?: string;
  ctaLabel?: string;
};

export function WaitlistForm({
  source = "hero",
  ctaLabel = "Avísame cuando salga",
}: Props) {
  const [state, formAction, isPending] = useActionState(joinWaitlist, initial);
  const [utm, setUtm] = useState({ utm_source: "", utm_medium: "", utm_campaign: "" });

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setUtm({
      utm_source: p.get("utm_source") ?? "",
      utm_medium: p.get("utm_medium") ?? "",
      utm_campaign: p.get("utm_campaign") ?? "",
    });
  }, []);

  if (state.status === "success") {
    return (
      <p
        className="mx-auto max-w-[480px] text-center text-[17px] leading-relaxed text-[var(--ink)] md:text-[19px]"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        Gracias. Te avisamos cuando encendamos la primera vela. 🕯️
      </p>
    );
  }

  return (
    <form
      action={formAction}
      className="mx-auto flex max-w-[480px] flex-col gap-2.5 md:flex-row md:gap-2"
    >
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="utm_source" value={utm.utm_source} />
      <input type="hidden" name="utm_medium" value={utm.utm_medium} />
      <input type="hidden" name="utm_campaign" value={utm.utm_campaign} />
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <input
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="tu correo"
        className="flex-1 rounded-md border border-[var(--ink-line)] bg-[var(--cream-soft)] px-[18px] py-4 text-[16px] text-[var(--ink)] placeholder:text-[var(--ink-soft)]/60 focus:border-[var(--amber)] focus:bg-[var(--card)] focus:outline-none md:px-5 md:py-[17px] md:text-[15px]"
      />
      <button
        type="submit"
        disabled={isPending}
        className="whitespace-nowrap rounded-md border-none bg-[var(--amber)] px-6 py-4 text-[14px] font-semibold text-[var(--cream-soft)] transition-all hover:-translate-y-px hover:bg-[var(--amber-deep)] disabled:opacity-70 md:px-[30px] md:py-[17px]"
      >
        {isPending ? "uniéndote…" : ctaLabel}
      </button>

      {state.status === "error" && (
        <p className="w-full text-center text-[13px] text-red-800 md:text-left">
          {state.message}
        </p>
      )}
    </form>
  );
}