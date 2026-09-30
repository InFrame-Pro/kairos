-- =====================================================================
-- Canales de iglesias
-- Las iglesias publican prédicas (audio subido o link), bosquejos y
-- avisos. Los usuarios siguen canales, reaccionan (Amén / ❤) y comentan.
-- Quién sigue qué canal y quién reaccionó es privado: solo se exponen
-- conteos (seguir una iglesia revela creencias, un dato sensible).
-- =====================================================================

-- ---------- Tablas ----------------------------------------------------

create table if not exists public.channels (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9-]{3,40}$'),
  name text not null check (char_length(name) between 2 and 80),
  city text check (char_length(city) <= 80),
  description text check (char_length(description) <= 500),
  avatar_url text,
  cover_url text,
  verified boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.channel_members (
  channel_id uuid not null references public.channels on delete cascade,
  user_id uuid not null references auth.users on delete cascade,
  role text not null check (role in ('owner', 'editor')),
  created_at timestamptz not null default now(),
  primary key (channel_id, user_id)
);

create table if not exists public.channel_follows (
  channel_id uuid not null references public.channels on delete cascade,
  user_id uuid not null references auth.users on delete cascade,
  created_at timestamptz not null default now(),
  primary key (channel_id, user_id)
);

create table if not exists public.channel_posts (
  id uuid primary key default gen_random_uuid(),
  channel_id uuid not null references public.channels on delete cascade,
  author_id uuid references auth.users on delete set null,
  kind text not null check (kind in ('predica', 'bosquejo', 'aviso')),
  title text check (char_length(title) <= 140),
  body text check (char_length(body) <= 8000),
  passage text check (char_length(passage) <= 80),
  audio_path text check (char_length(audio_path) <= 300),
  audio_url text check (audio_url ~ '^https://' and char_length(audio_url) <= 500),
  duration_sec int check (duration_sec between 0 and 36000),
  comments_enabled boolean not null default true,
  created_at timestamptz not null default now(),
  deleted_at timestamptz
);
create index if not exists channel_posts_feed_idx on public.channel_posts (channel_id, created_at desc);

create table if not exists public.post_reactions (
  post_id uuid not null references public.channel_posts on delete cascade,
  user_id uuid not null references auth.users on delete cascade,
  kind text not null check (kind in ('amen', 'corazon')),
  created_at timestamptz not null default now(),
  primary key (post_id, user_id, kind)
);

create table if not exists public.post_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.channel_posts on delete cascade,
  user_id uuid not null references auth.users on delete cascade,
  author_name text not null,
  body text not null check (char_length(trim(body)) between 1 and 1000),
  hidden boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists post_comments_post_idx on public.post_comments (post_id, created_at);

create table if not exists public.content_reports (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.channel_posts on delete cascade,
  comment_id uuid references public.post_comments on delete cascade,
  reporter_id uuid not null references auth.users on delete cascade,
  reason text check (char_length(reason) <= 300),
  resolved boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.user_blocks (
  blocker_id uuid not null references auth.users on delete cascade,
  blocked_id uuid not null references auth.users on delete cascade,
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_id),
  check (blocker_id <> blocked_id)
);

-- ---------- Funciones de apoyo (evitan recursión en RLS) --------------

create or replace function public.is_channel_member(p_channel uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from channel_members where channel_id = p_channel and user_id = auth.uid());
$$;

create or replace function public.is_channel_owner(p_channel uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from channel_members where channel_id = p_channel and user_id = auth.uid() and role = 'owner');
$$;

create or replace function public.post_channel(p_post uuid)
returns uuid language sql stable security definer set search_path = public as $$
  select channel_id from channel_posts where id = p_post;
$$;

create or replace function public.can_comment(p_post uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from channel_posts where id = p_post and deleted_at is null and comments_enabled);
$$;

-- El autor siempre es quien publica; el nombre visible sale de su perfil.
create or replace function public.set_post_author()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  new.author_id := auth.uid();
  return new;
end $$;

create or replace function public.set_comment_author()
returns trigger language plpgsql security definer set search_path = public as $$
declare v_name text;
begin
  new.user_id := auth.uid();
  select nullif(trim(name), '') into v_name from app_profiles where user_id = auth.uid();
  new.author_name := coalesce(v_name, 'Alguien de la comunidad');
  new.hidden := false;
  new.body := trim(new.body);
  return new;
end $$;

drop trigger if exists channel_posts_author on public.channel_posts;
create trigger channel_posts_author before insert on public.channel_posts
  for each row execute function public.set_post_author();

drop trigger if exists post_comments_author on public.post_comments;
create trigger post_comments_author before insert on public.post_comments
  for each row execute function public.set_comment_author();

-- ---------- RLS -------------------------------------------------------

alter table public.channels enable row level security;
alter table public.channel_members enable row level security;
alter table public.channel_follows enable row level security;
alter table public.channel_posts enable row level security;
alter table public.post_reactions enable row level security;
alter table public.post_comments enable row level security;
alter table public.content_reports enable row level security;
alter table public.user_blocks enable row level security;

-- canales: públicos; solo el dueño edita su información
create policy "channels: todos leen" on public.channels for select using (true);
create policy "channels: dueño edita" on public.channels for update to authenticated
  using (public.is_channel_owner(id)) with check (public.is_channel_owner(id));
-- El dueño solo cambia foto, portada, ciudad y descripción; nombre, slug y
-- verificación los maneja Kairós.
revoke update on public.channels from anon, authenticated;
grant update (city, description, avatar_url, cover_url) on public.channels to authenticated;

-- miembros: cada quien ve su membresía; el dueño ve a su equipo
create policy "members: ver" on public.channel_members for select to authenticated
  using (user_id = auth.uid() or public.is_channel_owner(channel_id));
create policy "members: dueño quita" on public.channel_members for delete to authenticated
  using (public.is_channel_owner(channel_id) and user_id <> auth.uid());

-- seguir: privado, cada quien lo suyo
create policy "follows: ver propios" on public.channel_follows for select to authenticated using (user_id = auth.uid());
create policy "follows: seguir" on public.channel_follows for insert to authenticated with check (user_id = auth.uid());
create policy "follows: dejar de seguir" on public.channel_follows for delete to authenticated using (user_id = auth.uid());

-- publicaciones: públicas; el equipo del canal publica, edita y borra
create policy "posts: leer" on public.channel_posts for select
  using (deleted_at is null or public.is_channel_member(channel_id));
create policy "posts: publicar" on public.channel_posts for insert to authenticated
  with check (public.is_channel_member(channel_id));
create policy "posts: editar" on public.channel_posts for update to authenticated
  using (public.is_channel_member(channel_id)) with check (public.is_channel_member(channel_id));
-- El equipo no puede cambiar el autor ni mover posts de canal.
revoke update on public.channel_posts from anon, authenticated;
grant update (title, body, passage, audio_path, audio_url, duration_sec, comments_enabled, deleted_at) on public.channel_posts to authenticated;
create policy "posts: borrar" on public.channel_posts for delete to authenticated
  using (public.is_channel_member(channel_id));

-- reacciones: privadas (se exponen solo conteos por función)
create policy "reactions: ver propias" on public.post_reactions for select to authenticated using (user_id = auth.uid());
create policy "reactions: reaccionar" on public.post_reactions for insert to authenticated
  with check (user_id = auth.uid() and exists (select 1 from public.channel_posts p where p.id = post_id and p.deleted_at is null));
create policy "reactions: quitar" on public.post_reactions for delete to authenticated using (user_id = auth.uid());

-- comentarios: visibles salvo ocultos o de alguien que bloqueaste
create policy "comments: leer" on public.post_comments for select using (
  user_id = auth.uid()
  or public.is_channel_member(public.post_channel(post_id))
  or (not hidden and not exists (
        select 1 from public.user_blocks b where b.blocker_id = auth.uid() and b.blocked_id = post_comments.user_id))
);
create policy "comments: comentar" on public.post_comments for insert to authenticated
  with check (user_id = auth.uid() and public.can_comment(post_id));
create policy "comments: borrar propio o moderar" on public.post_comments for delete to authenticated
  using (user_id = auth.uid() or public.is_channel_member(public.post_channel(post_id)));
create policy "comments: ocultar (equipo del canal)" on public.post_comments for update to authenticated
  using (public.is_channel_member(public.post_channel(post_id)))
  with check (public.is_channel_member(public.post_channel(post_id)));
-- El equipo solo puede cambiar "hidden", nunca el texto de otro.
revoke update on public.post_comments from anon, authenticated;
grant update (hidden) on public.post_comments to authenticated;

-- reportes: cualquiera con cuenta reporta; el equipo del canal los ve y resuelve
create policy "reports: reportar" on public.content_reports for insert to authenticated
  with check (reporter_id = auth.uid());
create policy "reports: equipo ve" on public.content_reports for select to authenticated
  using (public.is_channel_member(public.post_channel(post_id)));
create policy "reports: equipo resuelve" on public.content_reports for update to authenticated
  using (public.is_channel_member(public.post_channel(post_id)))
  with check (public.is_channel_member(public.post_channel(post_id)));
revoke update on public.content_reports from anon, authenticated;
grant update (resolved) on public.content_reports to authenticated;

-- bloqueos: cada quien los suyos
create policy "blocks: ver" on public.user_blocks for select to authenticated using (blocker_id = auth.uid());
create policy "blocks: bloquear" on public.user_blocks for insert to authenticated with check (blocker_id = auth.uid());
create policy "blocks: desbloquear" on public.user_blocks for delete to authenticated using (blocker_id = auth.uid());

-- ---------- Funciones para la app y el panel --------------------------

-- Lista de canales con número de seguidores y si ya lo sigues.
create or replace function public.channels_list()
returns table (id uuid, slug text, name text, city text, description text, avatar_url text, cover_url text,
               verified boolean, follower_count int, following boolean, my_role text)
language sql stable security definer set search_path = public as $$
  select c.id, c.slug, c.name, c.city, c.description, c.avatar_url, c.cover_url, c.verified,
    (select count(*) from channel_follows f where f.channel_id = c.id)::int,
    exists (select 1 from channel_follows f where f.channel_id = c.id and f.user_id = auth.uid()),
    (select m.role from channel_members m where m.channel_id = c.id and m.user_id = auth.uid())
  from channels c
  order by c.verified desc, c.name;
$$;

-- Publicaciones: de un canal, de un post, o de los canales que sigues.
create or replace function public.channel_feed(
  p_channel uuid default null, p_post uuid default null, p_before timestamptz default null, p_limit int default 20)
returns table (id uuid, channel_id uuid, channel_slug text, channel_name text, channel_avatar text,
               kind text, title text, body text, passage text, audio_path text, audio_url text,
               duration_sec int, comments_enabled boolean, created_at timestamptz,
               amen_count int, heart_count int, comment_count int, my_amen boolean, my_heart boolean)
language sql stable security definer set search_path = public as $$
  select p.id, p.channel_id, c.slug, c.name, c.avatar_url,
    p.kind, p.title, p.body, p.passage, p.audio_path, p.audio_url,
    p.duration_sec, p.comments_enabled, p.created_at,
    (select count(*) from post_reactions r where r.post_id = p.id and r.kind = 'amen')::int,
    (select count(*) from post_reactions r where r.post_id = p.id and r.kind = 'corazon')::int,
    (select count(*) from post_comments m where m.post_id = p.id and not m.hidden)::int,
    exists (select 1 from post_reactions r where r.post_id = p.id and r.user_id = auth.uid() and r.kind = 'amen'),
    exists (select 1 from post_reactions r where r.post_id = p.id and r.user_id = auth.uid() and r.kind = 'corazon')
  from channel_posts p
  join channels c on c.id = p.channel_id
  where p.deleted_at is null
    and case
      when p_post is not null then p.id = p_post
      when p_channel is not null then p.channel_id = p_channel
      else p.channel_id in (select f.channel_id from channel_follows f where f.user_id = auth.uid())
    end
    and (p_before is null or p.created_at < p_before)
  order by p.created_at desc
  limit least(greatest(coalesce(p_limit, 20), 1), 50);
$$;

-- El dueño agrega a alguien de su equipo por correo (debe tener cuenta en Kairós).
create or replace function public.add_channel_editor(p_channel uuid, p_email text)
returns text language plpgsql security definer set search_path = public as $$
declare v_user uuid;
begin
  if not public.is_channel_owner(p_channel) then
    raise exception 'Solo el dueño del canal puede agregar personas';
  end if;
  select id into v_user from auth.users where lower(email) = lower(trim(p_email));
  if v_user is null then
    return 'no_account';
  end if;
  insert into channel_members (channel_id, user_id, role) values (p_channel, v_user, 'editor')
    on conflict (channel_id, user_id) do nothing;
  return 'ok';
end $$;

-- Reportes del canal, con el texto del comentario, para moderar.
create or replace function public.channel_reports(p_channel uuid)
returns table (id uuid, post_id uuid, post_title text, comment_id uuid, comment_body text,
               comment_author text, comment_hidden boolean, reason text, created_at timestamptz)
language sql stable security definer set search_path = public as $$
  select r.id, r.post_id, p.title, r.comment_id, m.body, m.author_name, m.hidden, r.reason, r.created_at
  from content_reports r
  join channel_posts p on p.id = r.post_id
  left join post_comments m on m.id = r.comment_id
  where p.channel_id = p_channel and not r.resolved and public.is_channel_member(p_channel)
  order by r.created_at desc;
$$;

revoke all on function public.add_channel_editor(uuid, text) from public, anon;
grant execute on function public.channels_list() to anon, authenticated;
grant execute on function public.channel_feed(uuid, uuid, timestamptz, int) to anon, authenticated;
grant execute on function public.add_channel_editor(uuid, text) to authenticated;
grant execute on function public.channel_reports(uuid) to authenticated;

-- ---------- Almacenamiento de audios --------------------------------
-- Bucket público de lectura. Solo el equipo del canal sube o borra, y
-- siempre dentro de una carpeta con el id de su canal: {channel_id}/archivo.mp3
-- El plan gratis de Supabase limita cada archivo a 50 MB.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('sermons', 'sermons', true, 52428800,
        array['audio/mpeg','audio/mp4','audio/x-m4a','audio/aac','audio/ogg','audio/webm','audio/wav','audio/x-wav',
              'image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

create or replace function public.path_channel_member(p_name text)
returns boolean language plpgsql stable security definer set search_path = public as $$
declare v_channel uuid;
begin
  begin
    v_channel := (storage.foldername(p_name))[1]::uuid;
  exception when others then
    return false;
  end;
  return public.is_channel_member(v_channel);
end $$;

drop policy if exists "sermons: equipo sube" on storage.objects;
create policy "sermons: equipo sube" on storage.objects for insert to authenticated
  with check (bucket_id = 'sermons' and public.path_channel_member(name));
drop policy if exists "sermons: equipo borra" on storage.objects;
create policy "sermons: equipo borra" on storage.objects for delete to authenticated
  using (bucket_id = 'sermons' and public.path_channel_member(name));
