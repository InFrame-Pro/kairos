-- Primer canal: Cita con la Vida. Correr DESPUÉS de 20260930_channels.sql.
-- El dueño es la cuenta de Kairós con este correo (tiene que haber entrado
-- al menos una vez a la app o al panel). Cambia el correo si hace falta.

insert into public.channels (slug, name, city, description, verified)
values ('cita-con-la-vida', 'Cita con la Vida', 'Cancún, Quintana Roo',
        'Prédicas, bosquejos y avisos de nuestra iglesia.', true)
on conflict (slug) do nothing;

insert into public.channel_members (channel_id, user_id, role)
select c.id, u.id, 'owner'
from public.channels c, auth.users u
where c.slug = 'cita-con-la-vida' and u.email = 'fernandomgarcia373@gmail.com'
on conflict (channel_id, user_id) do nothing;
