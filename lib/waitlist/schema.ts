// src/lib/waitlist/schema.ts
import { z } from "zod";

export const waitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, "Correo demasiado corto")
    .max(254, "Correo demasiado largo")
    .email("Escríbelo así: nombre@correo.com"),
  source: z.string().max(64).optional(),
  utm_source: z.string().max(64).optional(),
  utm_medium: z.string().max(64).optional(),
  utm_campaign: z.string().max(64).optional(),
  // honeypot
  website: z.string().max(0).optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;