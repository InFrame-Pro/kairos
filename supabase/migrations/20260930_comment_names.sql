-- Nombre en los comentarios: primero el nombre que escribiste en Kairós;
-- si no hay, el de tu cuenta de Google; si tampoco, "Alguien de la comunidad".
create or replace function public.set_comment_author()
returns trigger language plpgsql security definer set search_path = public as $$
declare v_name text;
begin
  new.user_id := auth.uid();
  select nullif(trim(name), '') into v_name from app_profiles where user_id = auth.uid();
  if v_name is null then
    select nullif(trim(coalesce(raw_user_meta_data ->> 'full_name', raw_user_meta_data ->> 'name')), '')
      into v_name from auth.users where id = auth.uid();
  end if;
  new.author_name := coalesce(v_name, 'Alguien de la comunidad');
  new.hidden := false;
  new.body := trim(new.body);
  return new;
end $$;
