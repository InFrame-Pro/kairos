# Kairós

App bíblica gratuita hecha con cariño.
καιρός — el momento exacto.

## Stack

- Next.js 16 (App Router + Turbopack)
- TypeScript strict
- Tailwind CSS
- Supabase (Postgres + Auth + Realtime)
- PostHog (analytics)
- Resend (emails transaccionales)

## Setup local

Requiere Node 20+ y pnpm.

\`\`\`bash
pnpm install
cp .env.example .env.local
# Editar .env.local con tus credenciales
pnpm dev
\`\`\`

## Estructura

\`\`\`
app/              rutas y páginas (Next.js App Router)
components/       componentes React reutilizables
  ui/             primitivos (botones, inputs)
  sections/       secciones grandes (Hero, Amigos, etc)
  mockups/        mockups visuales de features
lib/              lógica de negocio
  supabase/       clientes y queries
  analytics/      wrapper de PostHog
  utils/          helpers
public/           assets estáticos
  logo/           variantes del logo
types/            TypeScript types compartidos
\`\`\`

## Licencia

MIT — hecho con cariño.
