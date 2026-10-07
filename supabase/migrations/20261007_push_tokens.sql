-- =====================================================================
-- Notificaciones push: un token por teléfono.
-- Cada persona solo puede escribir y borrar los suyos; nadie los lee desde
-- la app. El servidor (service role) los usa para avisar cuando una
-- iglesia que sigues publica.
-- =====================================================================

create table if not exists public.push_tokens (
  token text primary key check (char_length(token) <= 200),
  user_id uuid not null references auth.users on delete cascade,
  platform text check (platform in ('ios', 'android')),
  updated_at timestamptz not null default now()
);
create index if not exists push_tokens_user_idx on public.push_tokens (user_id);

alter table public.push_tokens enable row level security;

-- Guardar o mover el token de este teléfono a la cuenta con sesión.
create or replace function public.register_push_token(p_token text, p_platform text)
returns void
language sql security definer set search_path = public as $$
  insert into push_tokens (token, user_id, platform, updated_at)
  select p_token, auth.uid(), p_platform, now()
  where auth.uid() is not null
  on conflict (token) do update
    set user_id = excluded.user_id, platform = excluded.platform, updated_at = now();
$$;

-- Al cerrar sesión: este teléfono deja de recibir avisos de la cuenta.
create or replace function public.unregister_push_token(p_token text)
returns void
language sql security definer set search_path = public as $$
  delete from push_tokens where token = p_token and user_id = auth.uid();
$$;

revoke all on public.push_tokens from anon, authenticated;
revoke all on function public.register_push_token(text, text) from public, anon;
revoke all on function public.unregister_push_token(text) from public, anon;
grant execute on function public.register_push_token(text, text) to authenticated;
grant execute on function public.unregister_push_token(text) to authenticated;

-- Preferencia: silenciar un canal sin dejar de seguirlo (para después).
alter table public.channel_follows add column if not exists notify boolean not null default true;
