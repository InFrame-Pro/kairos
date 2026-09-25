// @ts-nocheck
// Animaciones e interacciones de la landing. Se llama una vez montado el
// marcado y devuelve una función que limpia listeners, timers y observers.

export function initLanding(root, actions) {
  const ac = new AbortController();
  const sig = { signal: ac.signal };
  const observers = [];
  const timers = new Set();
  const IO = (cb, o) => { const x = new IntersectionObserver(cb, o); observers.push(x); return x; };
  const MO = cb => { const x = new MutationObserver(cb); observers.push(x); return x; };
  const SI = (fn, ms) => { const id = setInterval(fn, ms); timers.add(id); return id; };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const vh = () => window.innerHeight;
  // En celular nada se queda fijo: el scroll es normal y las animaciones
  // se disparan al aparecer. En computadora se conservan las secciones fijas.
  const small = matchMedia('(max-width: 899px)');
  let mobile = small.matches;

  // entrada del hero
  requestAnimationFrame(() => setTimeout(() => {
    root.classList.add('loaded');
    $$('#top .rv').forEach(el => el.classList.add('in'));
  }, 60));

  // reveal al entrar en pantalla
  const io = IO(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .18, rootMargin: '0px 0px -6% 0px' });
  $$('.rv').forEach(el => { if (!el.closest('#top')) io.observe(el); });

  // palabras que se encienden
  const wt = $('#wordsText');
  wt.innerHTML = wt.textContent.split(' ').map((w, i) => `<span class="w${/^(hermoso|su|tiempo)\b/.test(w) ? ' hot' : ''}" style="--i:${i}">${w}</span>`).join(' ');
  // el versículo y la foto de la promesa se animan una vez, al aparecer
  const once = IO(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); once.unobserve(e.target); }
  }), { threshold: .45 });
  once.observe($('#words')); once.observe($('#promise'));

  // progreso de una sección fija (0 → 1)
  const prog = el => { const r = el.getBoundingClientRect(); return clamp(-r.top / (r.height - vh())); };

  const cue = $('.scroll-cue');
  const show = $('#app'), steps = $$('.step'), scrs = $$('#app .scr'), dots = $$('#dots i');
  const tabsEl = $('#tabs'), tabs = $$('#tabs button');
  const nav = $('#nav'), bar = $('#progress');
  const themed = $$('[data-theme]');
  let current = -1;

  function onStep(i) {
    if (i === current) return;
    current = i;
    steps.forEach((s, k) => { s.classList.toggle('on', k === i); s.classList.toggle('past', k < i); });
    scrs.forEach((s, k) => s.classList.toggle('on', k === i));
    dots.forEach((d, k) => d.classList.toggle('on', k === i));
    tabs.forEach((t, k) => t.classList.toggle('on', k === i));
    if (i === 2) typeSearch();
  }

  let typing;
  function typeSearch() {
    const out = $('#typed'), txt = 'luz', res = $$('.scr[data-scr="2"] .res');
    clearInterval(typing); out.textContent = ''; res.forEach(r => r.classList.remove('in'));
    let n = 0;
    typing = SI(() => {
      out.textContent = txt.slice(0, ++n);
      if (n >= txt.length) {
        clearInterval(typing);
        res.forEach((r, k) => setTimeout(() => r.classList.add('in'), 250 + k * 140));
      }
    }, 220);
  }

  // ---- celular: el teléfono avanza solo; tocas una pestaña o deslizas ----
  let auto = null;
  function goStep(i) {
    current = -1; onStep((i + 5) % 5);
    const t = tabs[current];
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on'); // reinicia la barrita
    tabsEl.scrollTo({ left: t.offsetLeft - (tabsEl.clientWidth - t.offsetWidth) / 2, behavior: 'smooth' });
  }
  const play = () => { stop(); tabsEl.classList.remove('paused'); auto = SI(() => goStep(current + 1), 5000); };
  const stop = () => { clearInterval(auto); auto = null; };
  tabs.forEach((t, k) => t.addEventListener('click', () => { goStep(k); play(); }));
  let x0 = null;
  const phone = $('.phone');
  phone.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  phone.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) { goStep(current + (dx < 0 ? 1 : -1)); play(); }
  });
  IO(([e]) => {
    if (!mobile) return;
    if (e.isIntersecting) { if (current < 0) goStep(0); play(); }
    else { stop(); tabsEl.classList.add('paused'); }
  }, { threshold: .35 }).observe(show);

  function frame() {
    const y = scrollY;
    bar.style.transform = `scaleX(${clamp(y / (document.documentElement.scrollHeight - vh()))})`;
    nav.classList.toggle('scrolled', y > 30);
    const under = themed.find(s => { const r = s.getBoundingClientRect(); return r.top <= 30 && r.bottom > 30; });
    nav.classList.toggle('on-light', !!under && under.dataset.theme === 'light');

    cue.style.opacity = y > 60 ? 0 : 1;

    // teléfono fijo (solo computadora)
    if (!mobile) {
      const r = show.getBoundingClientRect();
      if (r.top < vh() && r.bottom > 0) onStep(Math.min(4, Math.floor(prog(show) * 5.0001)));
    }
  }
  let ticking = false;
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { frame(); ticking = false; }); } };
  addEventListener('scroll', onScroll, { passive: true, signal: ac.signal });
  addEventListener('resize', onScroll, sig);
  small.addEventListener('change', e => { mobile = e.matches; if (!mobile) stop(); current = -1; onScroll(); }, sig);
  frame();

  // tarjetas con inclinación 3D (solo con mouse)
  $$('[data-tilt]').forEach(c => {
    c.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      const b = c.getBoundingClientRect(), x = (e.clientX - b.left) / b.width, y = (e.clientY - b.top) / b.height;
      c.style.setProperty('--mx', x * 100 + '%'); c.style.setProperty('--my', y * 100 + '%');
      if (!reduce) c.style.transform = `rotateX(${(.5 - y) * 8}deg) rotateY(${(x - .5) * 10}deg) translateY(-4px)`;
    });
    c.addEventListener('pointerleave', () => { c.style.transform = ''; });
  });

  // personalizador
  const PAPERS = {
    tinta:   { bg: '#14100D', fg: '#F0E6CC', acc: '#E8B45A', sub: '#A89876', n: 'Tinta' },
    grafito: { bg: '#2A2A2C', fg: '#ECEAE6', acc: '#E8B45A', sub: '#9C9892', n: 'Grafito' },
    crema:   { bg: '#F0E6CC', fg: '#14100D', acc: '#956A28', sub: '#6E6255', n: 'Crema' },
    arena:   { bg: '#F6F0EB', fg: '#241E1A', acc: '#956A28', sub: '#6E6259', n: 'Arena' },
    blanco:  { bg: '#FFFFFF', fg: '#1A1714', acc: '#956A28', sub: '#6B6560', n: 'Blanco' },
  };
  const page = $('#page'), meta = $('#pageMeta'), size = $('#size');
  const st = { p: 'tinta', f: "'EB Garamond',serif", fn: 'Garamond', s: 24 };
  const paint = () => {
    const P = PAPERS[st.p];
    Object.entries({ bg: P.bg, fg: P.fg, acc: P.acc, sub: P.sub }).forEach(([k, v]) => page.style.setProperty('--' + k, v));
    page.style.setProperty('--rf', st.f); page.style.setProperty('--rs', st.s + 'px');
    size.style.setProperty('--p', ((st.s - 17) / 15 * 100) + '%');
    meta.textContent = `${P.n} · ${st.fn} · ${st.s} pt`;
  };
  $$('#papers button').forEach(b => b.onclick = () => { $$('#papers button').forEach(x => x.classList.remove('on')); b.classList.add('on'); st.p = b.dataset.p; paint(); });
  const seg = $('#fonts'), knob = $('.knob', seg);
  const moveKnob = b => { knob.style.left = b.offsetLeft + 'px'; knob.style.width = b.offsetWidth + 'px'; };
  $$('button', seg).forEach(b => b.onclick = () => { $$('button', seg).forEach(x => x.classList.remove('on')); b.classList.add('on'); st.f = b.dataset.f; st.fn = b.textContent; moveKnob(b); paint(); });
  size.oninput = () => { st.s = +size.value; paint(); };
  const placeKnob = () => moveKnob($('button.on', seg));
  document.fonts ? document.fonts.ready.then(placeKnob) : placeKnob();
  addEventListener('resize', placeKnob, sig);
  paint();

  // racha: 14 días, dos de gracia
  $('#streak').innerHTML = [...'dddddgddddddgd'].map((c, i) => `<i class="${c}" style="--i:${i}"></i>`).join('');

  // contadores
  const cio = IO(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, to = +el.dataset.count, t0 = performance.now(), dur = 1600;
    const tick = t => { const k = clamp((t - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick); cio.unobserve(el);
  }), { threshold: .6 });
  $$('[data-count]').forEach(el => cio.observe(el));

  // ---- Lo que viene: menú interactivo con teléfono ----
  const feat = $('.feat'), fitems = $$('#fmenu .fitem'), fscr = $$('.fs');
  let fi = -1, ftimer = null;
  function showFeat(i) {
    fi = (i + fitems.length) % fitems.length;
    fitems.forEach((b, k) => b.classList.toggle('on', k === fi));
    fscr.forEach((s, k) => s.classList.toggle('on', k === fi));
    const bar = $('.fi-bar', fitems[fi]); bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = '';
    const fd = $('#fdesc'); fd.textContent = $('.fi-d span', fitems[fi]).textContent;
    fd.classList.remove('swap'); void fd.offsetWidth; fd.classList.add('swap');
    const m = $('#fmenu'), t = fitems[fi];
    if (m.scrollWidth > m.clientWidth) m.scrollTo({ left: t.offsetLeft - (m.clientWidth - t.offsetWidth) / 2, behavior: 'smooth' });
  }
  const fplay = () => { clearInterval(ftimer); ftimer = SI(() => { if (!feat.classList.contains('hold')) showFeat(fi + 1); }, 7000); };
  fitems.forEach((b, k) => b.addEventListener('click', () => { showFeat(k); feat.classList.add('idle'); clearInterval(ftimer); }));
  // al tocar algo dentro del teléfono, se detiene el avance automático
  $('.fphone').addEventListener('pointerdown', () => { feat.classList.add('idle'); clearInterval(ftimer); });
  feat.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') feat.classList.add('hold'); });
  feat.addEventListener('pointerleave', () => feat.classList.remove('hold'));
  IO(([e]) => {
    if (e.isIntersecting) { if (fi < 0) showFeat(0); if (!feat.classList.contains('idle')) fplay(); }
    else clearInterval(ftimer);
  }, { threshold: .4 }).observe(feat);

  // reacciones (♡ y Amén), seguir canal y audio de la prédica
  $$('.rx').forEach(b => b.addEventListener('click', () => {
    const on = b.classList.toggle('on'), n = +b.dataset.n + (on ? 1 : 0);
    $('em', b).textContent = n.toLocaleString('es-MX');
    b.classList.remove('pop'); void b.offsetWidth; if (on) b.classList.add('pop');
  }));
  const follow = $('#follow');
  follow.addEventListener('click', () => { const on = follow.classList.toggle('on'); follow.textContent = on ? 'Siguiendo' : 'Seguir'; });
  const audio = $('#audio'), dur = $('.dur', audio);
  let secs = 0, clock;
  $('.play', audio).addEventListener('click', () => {
    const on = audio.classList.toggle('playing');
    clearInterval(clock);
    if (on) clock = SI(() => { secs++; dur.textContent = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}`; }, 1000);
  });

  // amigos: orar con Dani
  const fpray = $('#fpray'), fpnote = $('#fpnote');
  fpray.addEventListener('click', () => {
    const done = fpray.classList.toggle('done');
    fpray.textContent = done ? '✦ Oraste con Dani' : 'Orar con Dani';
    fpnote.classList.toggle('on', done);
  });

  // ¿cómo llegas hoy?
  const MOODS = [
    ['Por nada estéis afanosos; sino sean notorias vuestras peticiones delante de Dios…', 'FILIPENSES 4:6'],
    ['Venid a mí todos los que estáis trabajados y cargados, que yo os haré descansar.', 'MATEO 11:28'],
    ['Cercano está Jehová a los quebrantados de corazón.', 'SALMO 34:18'],
    ['No temas, que yo soy contigo; no desmayes, que yo soy tu Dios.', 'ISAÍAS 41:10'],
    ['Si alguno de vosotros tiene falta de sabiduría, demándela a Dios… y le será dada.', 'SANTIAGO 1:5'],
    ['Alabad a Jehová, porque es bueno; porque para siempre es su misericordia.', 'SALMO 107:1'],
  ];
  const mres = $('#mres'), moodBtns = $$('#moods button');
  const setMood = i => {
    moodBtns.forEach((b, k) => b.classList.toggle('on', k === i));
    $('p', mres).textContent = '“' + MOODS[i][0] + '”'; $('small', mres).textContent = MOODS[i][1];
    mres.classList.remove('swap'); void mres.offsetWidth; mres.classList.add('swap');
  };
  moodBtns.forEach((b, k) => b.addEventListener('click', () => setMood(k)));
  setMood(0);

  // memoriza: completa el versículo
  const gaps = $$('#blank .gap'), picks = $$('#pick button'), memoOk = $('#memoOk');
  picks.forEach(b => b.addEventListener('click', () => {
    const gap = gaps.find(g => !g.textContent);
    if (!gap) return;
    if (b.textContent === gap.dataset.a) {
      gap.textContent = b.textContent; b.classList.add('used');
      if (gaps.every(g => g.textContent)) memoOk.classList.add('on');
    } else { gap.classList.remove('bad'); void gap.offsetWidth; gap.classList.add('bad'); }
  }));
  // al volver a la pantalla de memorizar, se reinicia el juego
  MO(() => {
    if (!fscr[5].classList.contains('on')) { gaps.forEach(g => g.textContent = ''); picks.forEach(b => b.classList.remove('used')); memoOk.classList.remove('on'); }
  }).observe(fscr[5], { attributes: true, attributeFilter: ['class'] });

  // galería: en computadora corre sola; en celular se desliza con el dedo
  // preguntas: una abierta a la vez
  $$('#qa .q').forEach(q => $('button', q).addEventListener('click', () => {
    const open = !q.classList.contains('open');
    $$('#qa .q').forEach(x => x.classList.remove('open'));
    q.classList.toggle('open', open);
  }));
  $('#qa .q').classList.add('open');

  // formularios: lista de espera y solicitudes de iglesias
  const q = new URLSearchParams(location.search);
  const utm = ['utm_source', 'utm_medium', 'utm_campaign'].map(k => [k, q.get(k) ?? '']);
  $$('[data-form]').forEach(f => f.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = $('button[type=submit], button:not([type])', f);
    if (!btn || btn.disabled) return;
    const fd = new FormData(f);
    utm.forEach(([k, v]) => fd.set(k, v));
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = 'Enviando…';
    let err = f.nextElementSibling && f.nextElementSibling.classList.contains('form-err') ? f.nextElementSibling : null;
    try {
      const r = f.dataset.form === 'iglesia' ? await actions.church(fd) : await actions.waitlist({ status: 'idle' }, fd);
      if (r.status !== 'success') throw new Error(r.message);
      f.classList.add('done'); if (err) err.remove();
    } catch (x) {
      if (!err) { err = document.createElement('p'); err.className = 'form-err'; f.after(err); }
      err.textContent = (x && x.message) || 'No pudimos guardarte. Intenta de nuevo.';
    } finally { btn.disabled = false; btn.textContent = label; }
  }, sig));

  return () => {
    ac.abort();
    observers.forEach(o => o.disconnect());
    timers.forEach(id => clearInterval(id));
  };
}
