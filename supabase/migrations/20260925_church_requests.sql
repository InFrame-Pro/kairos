-- Iglesias que piden su canal desde la landing.
-- Solo el servidor (service role) escribe aquí; nadie más puede leer.
create table if not exists public.church_requests (
  id uuid primary key default gen_random_uuid(),
  church text not null,
  city text not null,
  contact text not null,
  email text not null,
  created_at timestamptz not null default now()
);

alter table public.church_requests enable row level security;
