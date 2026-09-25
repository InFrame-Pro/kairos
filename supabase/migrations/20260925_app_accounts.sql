-- supabase/migrations/20260925_app_accounts.sql
--
-- Cuentas de la app Kairós. Cada usuario ve y edita solo lo suyo (RLS).
-- La app guarda todo primero en el teléfono y sincroniza estas tablas.

-- Perfil y ajustes que viajan con la cuenta ----------------------------------
create table if not exists public.app_profiles (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  name        text not null default '',
  -- versión, papel, tipografía, posición de lectura…
  settings    jsonb not null default '{}'::jsonb,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Días en que terminó al menos un capítulo (La Llama) -------------------------
create table if not exists public.app_reading_days (
  user_id  uuid not null references auth.users (id) on delete cascade,
  day      date not null,
  primary key (user_id, day)
);

-- Subrayados / marcadores ------------------------------------------------------
create table if not exists public.app_highlights (
  user_id     uuid not null references auth.users (id) on delete cascade,
  -- id generado en el teléfono
  id          text not null,
  book        smallint not null check (book between 1 and 66),
  chapter     smallint not null check (chapter between 1 and 150),
  verses      smallint[] not null,
  text        text not null default '',
  color       text not null default 'coral',
  created_at  timestamptz not null default now(),
  primary key (user_id, id)
);

-- Avance de planes de lectura --------------------------------------------------
create table if not exists public.app_plan_progress (
  user_id     uuid not null references auth.users (id) on delete cascade,
  plan_id     text not null,
  -- lecturas terminadas como "día|libro:capítulo"
  done        text[] not null default '{}',
  active      boolean not null default false,
  started_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  primary key (user_id, plan_id)
);

-- Seguridad: cada quien lo suyo -----------------------------------------------
alter table public.app_profiles      enable row level security;
alter table public.app_reading_days  enable row level security;
alter table public.app_highlights    enable row level security;
alter table public.app_plan_progress enable row level security;

create policy "perfil propio" on public.app_profiles
  for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "días propios" on public.app_reading_days
  for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "subrayados propios" on public.app_highlights
  for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "planes propios" on public.app_plan_progress
  for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Borrar la cuenta desde la app (Apple lo exige) ------------------------------
-- Borra al usuario de auth; las tablas de arriba se van en cascada.
create or replace function public.delete_my_account()
returns void
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  if auth.uid() is null then
    raise exception 'no autenticado';
  end if;
  delete from auth.users where id = auth.uid();
end;
$$;

revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
