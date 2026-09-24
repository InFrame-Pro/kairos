-- supabase/migrations/20260815_verse_backgrounds.sql
--
-- Catálogo de fondos para el verso del día.
-- Los archivos viven en Storage; esta tabla solo guarda la referencia
-- y los metadatos que la app necesita para pintar antes de descargar.

create table if not exists public.verse_backgrounds (
  id            uuid primary key default gen_random_uuid(),
  -- Ruta dentro del bucket, ej: 'fondos/mar-01.webp'
  storage_path  text not null unique,
  -- Color dominante en hex. Se pinta mientras la foto descarga,
  -- así nunca se ve un salto de fondo plano a imagen.
  tint          text not null default '#14100D',
  -- Para créditos o para recordar dónde se tomó.
  caption       text,
  -- Apagar una foto sin borrarla.
  active        boolean not null default true,
  created_at    timestamptz not null default now()
);

create index if not exists verse_backgrounds_active_idx
  on public.verse_backgrounds (active, created_at);

alter table public.verse_backgrounds enable row level security;

-- Cualquiera puede leer las activas. Nadie escribe desde el cliente:
-- las altas se hacen desde el dashboard o con la service key.
create policy "fondos activos son públicos"
  on public.verse_backgrounds
  for select
  using (active = true);
