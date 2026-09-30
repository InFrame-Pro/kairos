'use client';

// Panel de iglesias (kairoslat.com/iglesia)
// El equipo de cada canal entra con su correo, publica prédicas (audio o
// link), bosquejos y avisos, y modera comentarios. Todo lo protege RLS en
// Supabase: aquí solo se ve y se edita lo que tu cuenta puede tocar.

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';

type Kind = 'predica' | 'bosquejo' | 'aviso';
type Channel = {
  id: string; slug: string; name: string; city: string | null; description: string | null;
  avatar_url: string | null; verified: boolean; follower_count: number; my_role: 'owner' | 'editor' | null;
};
type Post = {
  id: string; kind: Kind; title: string | null; body: string | null; passage: string | null;
  audio_path: string | null; audio_url: string | null; duration_sec: number | null; comments_enabled: boolean;
  created_at: string; amen_count: number; heart_count: number; comment_count: number;
};
type Comment = { id: string; user_id: string; author_name: string; body: string; hidden: boolean; created_at: string };
type Report = {
  id: string; post_id: string; post_title: string | null; comment_id: string | null; comment_body: string | null;
  comment_author: string | null; comment_hidden: boolean | null; reason: string | null; created_at: string;
};
type Msg = { kind: 'ok' | 'err'; text: string } | null;

const KIND_LABEL: Record<Kind, string> = { predica: 'Prédica', bosquejo: 'Bosquejo', aviso: 'Aviso' };
const MAX_MB = 50;

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-MX', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
const initials = (name: string) =>
  name.split(/\s+/).filter((w) => /^[A-ZÁÉÍÓÚÑ]/.test(w)).slice(0, 2).map((w) => w[0]).join('');

export default function PanelIglesia() {
  const supabase = useMemo(() => createClient(), []);
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, [supabase]);

  return (
    <div className="px-wrap">
      <header className="px-top">
        <a className="px-brand" href="/">KAIRÓS · <b>IGLESIAS</b></a>
        {session && (
          <button className="px-btn ghost sm" onClick={() => supabase.auth.signOut()}>Cerrar sesión</button>
        )}
      </header>
      {!ready ? null : session ? <Dashboard session={session} /> : <Login />}
    </div>
  );
}

// ---------- Entrar con código por correo -----------------------------------

function Login() {
  const supabase = useMemo(() => createClient(), []);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<Msg>(null);

  const send = async () => {
    setBusy(true); setMsg(null);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=/iglesia` },
    });
    setBusy(false);
    if (error) setMsg({ kind: 'err', text: 'No pudimos mandar el código. Espera un minuto e inténtalo otra vez.' });
    else setSent(true);
  };
  const verify = async () => {
    setBusy(true); setMsg(null);
    const { error } = await supabase.auth.verifyOtp({ email: email.trim().toLowerCase(), token: code.trim(), type: 'email' });
    setBusy(false);
    if (error) setMsg({ kind: 'err', text: 'Ese código no es válido o ya venció.' });
  };

  return (
    <div style={{ maxWidth: 440, margin: '8vh auto 0' }}>
      <div className="px-k">Para pastores y líderes</div>
      <h1>El canal de <em>tu iglesia</em>.</h1>
      <p className="px-sub">Entra con el correo de tu cuenta de Kairós. Te mandamos un código.</p>
      <div className="px-card" style={{ marginTop: 22 }}>
        {!sent ? (
          <form onSubmit={(e) => { e.preventDefault(); send(); }}>
            <label>Correo</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@correo.com" autoComplete="email" />
            <button className="px-btn" style={{ width: '100%', marginTop: 16 }} disabled={busy}>{busy ? 'Enviando…' : 'Enviar código'}</button>
          </form>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); verify(); }}>
            <p className="px-sub">Revisa <b style={{ color: 'var(--c)' }}>{email}</b> y escribe el código.</p>
            <input className="px-code" type="text" inputMode="numeric" autoComplete="one-time-code" value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="000000" />
            <button className="px-btn" style={{ width: '100%', marginTop: 16 }} disabled={busy || code.length < 6}>{busy ? 'Entrando…' : 'Entrar'}</button>
            <button type="button" className="px-btn ghost sm" style={{ marginTop: 12 }} onClick={() => { setSent(false); setCode(''); }}>Cambiar correo</button>
          </form>
        )}
        {msg && <div className={`px-msg ${msg.kind}`}>{msg.text}</div>}
      </div>
    </div>
  );
}

// ---------- Panel -----------------------------------------------------------

function Dashboard({ session }: { session: Session }) {
  const supabase = useMemo(() => createClient(), []);
  const [channels, setChannels] = useState<Channel[] | null>(null);
  const [current, setCurrent] = useState<string | null>(null);
  const [tab, setTab] = useState<'publicar' | 'publicaciones' | 'reportes' | 'canal'>('publicar');
  const [reportCount, setReportCount] = useState(0);

  const loadChannels = useCallback(async () => {
    const { data } = await supabase.rpc('channels_list');
    const mine = ((data ?? []) as Channel[]).filter((c) => c.my_role);
    setChannels(mine);
    setCurrent((cur) => cur ?? mine[0]?.id ?? null);
  }, [supabase]);

  useEffect(() => { loadChannels(); }, [loadChannels]);

  const channel = channels?.find((c) => c.id === current) ?? null;

  useEffect(() => {
    if (!channel) return;
    supabase.rpc('channel_reports', { p_channel: channel.id }).then(({ data }) => setReportCount((data ?? []).length));
  }, [supabase, channel, tab]);

  if (!channels) return <p className="px-sub">Cargando…</p>;
  if (!channel) {
    return (
      <div className="px-card px-center" style={{ maxWidth: 520, margin: '8vh auto 0' }}>
        <h2>Tu cuenta todavía no administra un canal</h2>
        <p className="px-sub">
          Entraste como {session.user.email}. Si tu iglesia quiere su canal, pídelo en{' '}
          <a href="/#iglesias">kairoslat.com</a> y te damos acceso.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="px-row" style={{ gap: 16 }}>
        {channel.avatar_url
          ? <img className="px-avatar" src={channel.avatar_url} alt="" />
          : <div className="px-avatar">{initials(channel.name)}</div>}
        <div className="px-grow">
          <div className="px-k">{channel.my_role === 'owner' ? 'Administras' : 'Publicas en'}</div>
          <h1 style={{ margin: '4px 0 2px' }}>{channel.name}</h1>
          <div className="px-meta">{channel.follower_count} {channel.follower_count === 1 ? 'seguidor' : 'seguidores'}{channel.city ? ` · ${channel.city}` : ''}</div>
        </div>
        {channels.length > 1 && (
          <select value={channel.id} onChange={(e) => setCurrent(e.target.value)} style={{ width: 'auto' }}>
            {channels.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        )}
      </div>

      <nav className="px-tabs">
        {([['publicar', 'Publicar'], ['publicaciones', 'Publicaciones'], ['reportes', 'Reportes'], ['canal', 'Canal y equipo']] as const).map(([id, label]) => (
          <button key={id} className={`px-tab ${tab === id ? 'on' : ''}`} onClick={() => setTab(id)}>
            {label}{id === 'reportes' && reportCount > 0 && <span className="n">{reportCount}</span>}
          </button>
        ))}
      </nav>

      {tab === 'publicar' && <Publish channel={channel} onDone={() => setTab('publicaciones')} />}
      {tab === 'publicaciones' && <Posts channel={channel} />}
      {tab === 'reportes' && <Reports channel={channel} onChange={setReportCount} />}
      {tab === 'canal' && <ChannelSettings channel={channel} onSaved={loadChannels} />}
    </>
  );
}

// ---------- Publicar ---------------------------------------------------------

function Publish({ channel, onDone }: { channel: Channel; onDone: () => void }) {
  const supabase = useMemo(() => createClient(), []);
  const [kind, setKind] = useState<Kind>('predica');
  const [title, setTitle] = useState('');
  const [passage, setPassage] = useState('');
  const [body, setBody] = useState('');
  const [source, setSource] = useState<'archivo' | 'link'>('archivo');
  const [file, setFile] = useState<File | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [link, setLink] = useState('');
  const [comments, setComments] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState<Msg>(null);

  const chooseFile = (f: File | null) => {
    setMsg(null); setDuration(null);
    if (!f) return setFile(null);
    if (f.size > MAX_MB * 1048576) {
      setFile(null);
      return setMsg({ kind: 'err', text: `El audio pesa ${(f.size / 1048576).toFixed(0)} MB y el máximo es ${MAX_MB} MB. Expórtalo en MP3 a 64 kbps mono: 40 minutos pesan unos 19 MB.` });
    }
    setFile(f);
    // Leemos la duración en el navegador para mostrarla en la app.
    const a = new Audio();
    a.preload = 'metadata';
    a.src = URL.createObjectURL(f);
    a.onloadedmetadata = () => { if (isFinite(a.duration)) setDuration(Math.round(a.duration)); URL.revokeObjectURL(a.src); };
  };

  const problem = (() => {
    if (kind === 'aviso' && !body.trim()) return 'Escribe el aviso.';
    if (kind === 'bosquejo' && (!title.trim() || !body.trim())) return 'El bosquejo necesita título y puntos.';
    if (kind === 'predica') {
      if (!title.trim()) return 'Ponle título a la prédica.';
      if (source === 'archivo' && !file) return 'Elige el audio de la prédica.';
      if (source === 'link' && !/^https:\/\/\S+$/.test(link.trim())) return 'Pega un enlace que empiece con https://';
    }
    return null;
  })();

  const submit = async () => {
    if (problem || busy) return;
    setMsg(null);
    try {
      let audio_path: string | null = null;
      if (kind === 'predica' && source === 'archivo' && file) {
        setBusy('Subiendo audio… puede tardar un par de minutos');
        const ext = (file.name.split('.').pop() || 'mp3').toLowerCase().replace(/[^a-z0-9]/g, '');
        audio_path = `${channel.id}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
        const { error } = await supabase.storage.from('sermons').upload(audio_path, file, { contentType: file.type || 'audio/mpeg' });
        if (error) throw error;
      }
      setBusy('Publicando…');
      const clean = (s: string) => (s.trim() ? s.trim() : null);
      const { error } = await supabase.from('channel_posts').insert({
        channel_id: channel.id, kind,
        title: kind === 'aviso' ? null : clean(title),
        passage: kind === 'aviso' ? null : clean(passage),
        body: clean(body),
        audio_path,
        audio_url: kind === 'predica' && source === 'link' ? link.trim() : null,
        duration_sec: audio_path ? duration : null,
        comments_enabled: comments,
      });
      if (error) throw error;
      setTitle(''); setPassage(''); setBody(''); setFile(null); setLink(''); setDuration(null);
      setMsg({ kind: 'ok', text: '¡Publicado! Ya aparece en la app para quienes siguen tu canal.' });
      setTimeout(onDone, 1200);
    } catch (e) {
      setMsg({ kind: 'err', text: `No se pudo publicar: ${e instanceof Error ? e.message : 'inténtalo otra vez'}.` });
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="px-card">
      <div className="px-seg">
        {(['predica', 'bosquejo', 'aviso'] as Kind[]).map((k) => (
          <button key={k} className={kind === k ? 'on' : ''} onClick={() => setKind(k)}>{KIND_LABEL[k]}</button>
        ))}
      </div>

      {kind !== 'aviso' && (
        <div className="px-row" style={{ alignItems: 'flex-start' }}>
          <div className="px-grow" style={{ flexBasis: 320 }}>
            <label>Título</label>
            <input type="text" maxLength={140} value={title} onChange={(e) => setTitle(e.target.value)} placeholder={kind === 'predica' ? 'Esperar en el tiempo de Dios' : 'Tema del bosquejo'} />
          </div>
          <div style={{ flexBasis: 220, flexGrow: 1 }}>
            <label>Pasaje (opcional)</label>
            <input type="text" maxLength={80} value={passage} onChange={(e) => setPassage(e.target.value)} placeholder="Habacuc 2:1-4" />
          </div>
        </div>
      )}

      {kind === 'predica' && (
        <>
          <label>Audio</label>
          <div className="px-seg" style={{ marginBottom: 12 }}>
            <button className={source === 'archivo' ? 'on' : ''} onClick={() => setSource('archivo')}>Subir audio</button>
            <button className={source === 'link' ? 'on' : ''} onClick={() => setSource('link')}>Link de YouTube o Spotify</button>
          </div>
          {source === 'archivo' ? (
            <label className="px-drop" style={{ textTransform: 'none', letterSpacing: 0, fontFamily: 'inherit', fontSize: 15, margin: 0 }}>
              <input type="file" accept="audio/*" hidden onChange={(e) => chooseFile(e.target.files?.[0] ?? null)} />
              <span style={{ fontSize: 22 }}>{file ? '🎧' : '⬆'}</span>
              <span className="px-grow">
                <span style={{ color: 'var(--c)', display: 'block' }}>{file ? file.name : 'Elegir archivo de audio'}</span>
                <span className="px-meta">
                  {file ? `${(file.size / 1048576).toFixed(1)} MB${duration ? ` · ${Math.floor(duration / 60)} min` : ''}` : `MP3 o M4A, máximo ${MAX_MB} MB`}
                </span>
              </span>
            </label>
          ) : (
            <input type="url" value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://youtube.com/watch?v=… o https://open.spotify.com/episode/…" />
          )}
        </>
      )}

      <label>{kind === 'aviso' ? 'Aviso' : kind === 'bosquejo' ? 'Puntos del bosquejo' : 'Notas o bosquejo (opcional)'}</label>
      <textarea maxLength={8000} value={body} onChange={(e) => setBody(e.target.value)}
        placeholder={kind === 'aviso' ? 'Este viernes nos vemos a las 7:30 pm. ¡Trae a un amigo!' : '1. Dios habla en la espera\n2. La visión tiene su tiempo\n3. El justo por su fe vivirá'} />

      <label className="px-check" style={{ textTransform: 'none', letterSpacing: 0, fontFamily: 'inherit', fontSize: 15 }}>
        <input type="checkbox" checked={comments} onChange={(e) => setComments(e.target.checked)} /> Permitir comentarios
      </label>

      <div className="px-row" style={{ marginTop: 20 }}>
        <button className="px-btn" onClick={submit} disabled={!!problem || !!busy}>{busy ?? 'Publicar'}</button>
        {problem && !busy && <span className="px-meta">{problem}</span>}
      </div>
      {msg && <div className={`px-msg ${msg.kind}`}>{msg.text}</div>}
    </div>
  );
}

// ---------- Publicaciones y comentarios --------------------------------------

function Posts({ channel }: { channel: Channel }) {
  const supabase = useMemo(() => createClient(), []);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  const load = useCallback(async () => {
    const { data } = await supabase.rpc('channel_feed', { p_channel: channel.id, p_limit: 50 });
    setPosts((data ?? []) as Post[]);
  }, [supabase, channel.id]);
  useEffect(() => { load(); }, [load]);

  const remove = async (p: Post) => {
    if (!confirm(`¿Borrar "${p.title || KIND_LABEL[p.kind]}"? Dejará de verse en la app.`)) return;
    await supabase.from('channel_posts').update({ deleted_at: new Date().toISOString() }).eq('id', p.id);
    if (p.audio_path) await supabase.storage.from('sermons').remove([p.audio_path]);
    load();
  };
  const toggleComments = async (p: Post) => {
    await supabase.from('channel_posts').update({ comments_enabled: !p.comments_enabled }).eq('id', p.id);
    load();
  };

  if (!posts) return <p className="px-sub">Cargando…</p>;
  if (!posts.length) return <div className="px-card px-sub">Todavía no has publicado. Empieza en la pestaña Publicar.</div>;

  return (
    <div className="px-card">
      {posts.map((p) => (
        <div key={p.id} className="px-post">
          <div className="px-k">{KIND_LABEL[p.kind]}{p.passage ? ` · ${p.passage}` : ''}</div>
          {p.title && <h3>{p.title}</h3>}
          {p.body && <p className="px-sub" style={{ margin: '4px 0 8px', whiteSpace: 'pre-line' }}>{p.body.length > 240 ? `${p.body.slice(0, 240)}…` : p.body}</p>}
          <div className="px-meta">
            {fmtDate(p.created_at)} · 🙏 {p.amen_count} · ❤ {p.heart_count} · 💬 {p.comment_count}
            {p.audio_path ? ' · audio subido' : p.audio_url ? ' · link externo' : ''}
            {!p.comments_enabled ? ' · comentarios cerrados' : ''}
          </div>
          <div className="px-row" style={{ marginTop: 10 }}>
            <button className="px-btn ghost sm" onClick={() => setOpen(open === p.id ? null : p.id)}>{open === p.id ? 'Ocultar comentarios' : 'Ver comentarios'}</button>
            <button className="px-btn ghost sm" onClick={() => toggleComments(p)}>{p.comments_enabled ? 'Cerrar comentarios' : 'Abrir comentarios'}</button>
            <button className="px-btn danger sm" onClick={() => remove(p)}>Borrar</button>
          </div>
          {open === p.id && <Comments postId={p.id} />}
        </div>
      ))}
    </div>
  );
}

function Comments({ postId }: { postId: string }) {
  const supabase = useMemo(() => createClient(), []);
  const [list, setList] = useState<Comment[] | null>(null);
  const load = useCallback(async () => {
    const { data } = await supabase.from('post_comments').select('id, user_id, author_name, body, hidden, created_at').eq('post_id', postId).order('created_at');
    setList((data ?? []) as Comment[]);
  }, [supabase, postId]);
  useEffect(() => { load(); }, [load]);

  if (!list) return <p className="px-meta">Cargando…</p>;
  if (!list.length) return <p className="px-meta" style={{ marginTop: 10 }}>Sin comentarios.</p>;
  return (
    <div style={{ marginTop: 6 }}>
      {list.map((c) => (
        <div key={c.id} className={`px-comment ${c.hidden ? 'hidden' : ''}`}>
          <div className="px-row">
            <b className="px-grow" style={{ fontWeight: 600 }}>{c.author_name}</b>
            <span className="px-meta">{fmtDate(c.created_at)}</span>
          </div>
          <div style={{ margin: '4px 0 8px' }}>{c.body}</div>
          <div className="px-row">
            <button className="px-btn ghost sm" onClick={async () => { await supabase.from('post_comments').update({ hidden: !c.hidden }).eq('id', c.id); load(); }}>
              {c.hidden ? 'Mostrar' : 'Ocultar'}
            </button>
            <button className="px-btn danger sm" onClick={async () => { if (confirm('¿Borrar este comentario?')) { await supabase.from('post_comments').delete().eq('id', c.id); load(); } }}>Borrar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------- Reportes -----------------------------------------------------------

function Reports({ channel, onChange }: { channel: Channel; onChange: (n: number) => void }) {
  const supabase = useMemo(() => createClient(), []);
  const [list, setList] = useState<Report[] | null>(null);
  const load = useCallback(async () => {
    const { data } = await supabase.rpc('channel_reports', { p_channel: channel.id });
    const r = (data ?? []) as Report[];
    setList(r); onChange(r.length);
  }, [supabase, channel.id, onChange]);
  useEffect(() => { load(); }, [load]);

  const resolve = async (r: Report, action: 'ocultar' | 'borrar' | 'ignorar') => {
    if (r.comment_id && action === 'ocultar') await supabase.from('post_comments').update({ hidden: true }).eq('id', r.comment_id);
    if (r.comment_id && action === 'borrar') await supabase.from('post_comments').delete().eq('id', r.comment_id);
    if (!r.comment_id && action === 'borrar') await supabase.from('channel_posts').update({ deleted_at: new Date().toISOString() }).eq('id', r.post_id);
    await supabase.from('content_reports').update({ resolved: true }).eq('id', r.id);
    load();
  };

  if (!list) return <p className="px-sub">Cargando…</p>;
  if (!list.length) return <div className="px-card px-sub">No hay reportes pendientes. 🙌</div>;
  return (
    <div className="px-card">
      {list.map((r) => (
        <div key={r.id} className="px-post">
          <div className="px-k">{r.comment_id ? 'Comentario reportado' : 'Publicación reportada'} · {fmtDate(r.created_at)}</div>
          <p className="px-meta" style={{ margin: '6px 0' }}>En: {r.post_title || 'publicación sin título'}</p>
          {r.comment_id && (
            <div className="px-comment">
              <b style={{ fontWeight: 600 }}>{r.comment_author ?? 'Comentario borrado'}</b>
              <div>{r.comment_body}</div>
            </div>
          )}
          {r.reason && <p className="px-meta">Motivo: {r.reason}</p>}
          <div className="px-row" style={{ marginTop: 10 }}>
            {r.comment_id && <button className="px-btn ghost sm" onClick={() => resolve(r, 'ocultar')}>Ocultar comentario</button>}
            <button className="px-btn danger sm" onClick={() => resolve(r, 'borrar')}>{r.comment_id ? 'Borrar comentario' : 'Borrar publicación'}</button>
            <button className="px-btn ghost sm" onClick={() => resolve(r, 'ignorar')}>Está bien, ignorar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------- Canal y equipo -------------------------------------------------------

function ChannelSettings({ channel, onSaved }: { channel: Channel; onSaved: () => void }) {
  const supabase = useMemo(() => createClient(), []);
  const owner = channel.my_role === 'owner';
  const [city, setCity] = useState(channel.city ?? '');
  const [description, setDescription] = useState(channel.description ?? '');
  const [invite, setInvite] = useState('');
  const [msg, setMsg] = useState<Msg>(null);
  const [busy, setBusy] = useState(false);

  const save = async () => {
    setBusy(true); setMsg(null);
    const { error } = await supabase.from('channels').update({ city: city.trim() || null, description: description.trim() || null }).eq('id', channel.id);
    setBusy(false);
    setMsg(error ? { kind: 'err', text: 'No se pudo guardar.' } : { kind: 'ok', text: 'Guardado.' });
    if (!error) onSaved();
  };
  const uploadAvatar = async (f: File | null) => {
    if (!f) return;
    setBusy(true); setMsg(null);
    const path = `${channel.id}/avatar-${Date.now()}.${(f.name.split('.').pop() || 'jpg').toLowerCase()}`;
    const up = await supabase.storage.from('sermons').upload(path, f, { contentType: f.type });
    if (up.error) { setBusy(false); return setMsg({ kind: 'err', text: 'No se pudo subir la imagen (JPG o PNG, máximo 50 MB).' }); }
    const url = supabase.storage.from('sermons').getPublicUrl(path).data.publicUrl;
    const { error } = await supabase.from('channels').update({ avatar_url: url }).eq('id', channel.id);
    setBusy(false);
    setMsg(error ? { kind: 'err', text: 'No se pudo guardar la imagen.' } : { kind: 'ok', text: 'Imagen actualizada.' });
    if (!error) onSaved();
  };
  const addEditor = async () => {
    setBusy(true); setMsg(null);
    const { data, error } = await supabase.rpc('add_channel_editor', { p_channel: channel.id, p_email: invite });
    setBusy(false);
    if (error) return setMsg({ kind: 'err', text: error.message });
    if (data === 'no_account') return setMsg({ kind: 'err', text: 'Ese correo todavía no tiene cuenta en Kairós. Pídele que entre una vez a la app o a este panel y vuelve a intentarlo.' });
    setInvite('');
    setMsg({ kind: 'ok', text: 'Listo. Ya puede publicar en el canal.' });
  };

  if (!owner) {
    return <div className="px-card px-sub">Solo quien administra el canal puede cambiar sus datos y su equipo.</div>;
  }
  return (
    <div className="px-stack">
      <div className="px-card">
        <h2>Datos del canal</h2>
        <label>Imagen</label>
        <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(e) => uploadAvatar(e.target.files?.[0] ?? null)} />
        <label>Ciudad</label>
        <input type="text" maxLength={80} value={city} onChange={(e) => setCity(e.target.value)} placeholder="Cancún, Quintana Roo" />
        <label>Descripción</label>
        <textarea style={{ minHeight: 90 }} maxLength={500} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Quiénes somos y cuándo nos reunimos." />
        <button className="px-btn" style={{ marginTop: 16 }} onClick={save} disabled={busy}>Guardar</button>
      </div>
      <div className="px-card">
        <h2>Equipo</h2>
        <p className="px-sub">Agrega a quien te ayuda a publicar (pastor de jóvenes, equipo de medios). Necesita tener cuenta en Kairós.</p>
        <div className="px-row" style={{ marginTop: 12 }}>
          <input className="px-grow" type="email" value={invite} onChange={(e) => setInvite(e.target.value)} placeholder="correo@ejemplo.com" style={{ flex: 1 }} />
          <button className="px-btn" onClick={addEditor} disabled={busy || !invite.includes('@')}>Agregar</button>
        </div>
      </div>
      {msg && <div className={`px-msg ${msg.kind}`}>{msg.text}</div>}
    </div>
  );
}
