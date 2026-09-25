// Marcado de la landing. Se genera a partir de landing-v2/index.html.
export const MARKUP = `
<div class="progress" id="progress"></div>

<!-- ============ NAV ============ -->
<header class="nav" id="nav">
  <div class="nav-in">
    <a href="#top" class="brand" aria-label="Kairós">
      <img class="logo cream" src="/landing/logo-crema.png" alt="Kairós" />
      <img class="logo dark" src="/landing/logo-negro.png" alt="" aria-hidden="true" />
    </a>
    <ul>
      <li><a href="#app">La app</a></li>
      <li><a href="#llama">La Llama</a></li>
      <li><a href="#viene">Lo que viene</a></li>
      <li><a href="#iglesias">Iglesias</a></li>
    </ul>
    <a class="pill" href="#beta">Únete a la beta</a>
  </div>
</header>

<main>
<!-- ============ HERO ============ -->
<section class="hero" id="top" data-theme="dark">
  <div class="stick">
    <div class="bg" id="heroBg"></div>
    <div class="veil" id="heroVeil"></div>
    <div class="sun"></div>
    <div class="content" id="heroContent">
      <div class="mk"><span class="greek" style="--d:.15s">καιρός</span></div>
      <div class="gloss rv" style="--d:.5s">— el momento exacto, en griego</div>
      <h1 class="h-xl">
        <span class="mk"><span style="--d:.35s">El momento exacto</span></span><br />
        <span class="mk"><span style="--d:.5s">es <em class="a">ahora</em>.</span></span>
      </h1>
      <p class="lead rv" style="--d:.8s">Una app bíblica hecha con cariño, <b>gratis para siempre</b>.</p>
      <div class="rv" style="--d:1s">
        <form class="form" data-form="waitlist"><input type="hidden" name="source" value="hero" /><input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" />
          <input type="email" name="email" autocomplete="email" required placeholder="tu correo" aria-label="Tu correo" />
          <button type="submit">Avísame cuando salga</button>
          <div class="ok">✦ Listo. Te escribimos cuando abramos la beta.</div>
        </form>
        <div class="stores"><span class="st-l">Próximamente en</span><span class="store"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.37 12.8c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.41 1.2-2.47-.03-.01-2.3-.88-2.32-3.52zM14.2 6.33c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.08 1.96-.49 2.56-1.21z"/></svg>App Store</span><span class="store"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M5 3.5v17l14-8.5z"/><path d="M5 3.5l9.5 9.5M5 20.5l9.5-8.5" opacity=".55"/></svg>Google Play</span></div>
      </div>
    </div>
    <div class="scroll-cue"><span>Desliza</span><i></i></div>
  </div>
</section>

<!-- ============ PALABRA ============ -->
<section class="words" id="words" data-theme="dark">
  <div class="stick">
    <div>
      <p class="big" id="wordsText">Todo lo hizo hermoso en su tiempo.</p>
      <p class="ref" id="wordsRef">ECLESIASTÉS 3:11</p>
    </div>
  </div>
</section>

<!-- ============ PILARES ============ -->
<section class="lt sec" id="que-es" data-theme="light">
  <div class="wrap">
    <div class="sec-head">
      <span class="kicker rv">Lo que vas a encontrar</span>
      <h2 class="h-l rv" style="--d:.1s">Tres cosas, <em class="a">hechas con cariño</em>.</h2>
      <p class="lead rv" style="--d:.2s">Nada extra, nada de relleno.</p>
    </div>
    <div class="cards">
      <article class="card rv" data-tilt style="--d:.05s">
        <div class="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4z"/><path d="M20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8V4z"/></svg></div>
        <h3>Lectura</h3>
        <p>Varias traducciones de la Biblia, planes guiados y modo oscuro. Lee a tu ritmo, con la letra y el papel que te acomoden.</p>
      </article>
      <article class="card rv" data-tilt style="--d:.15s">
        <span class="tag">Pronto</span>
        <div class="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></svg></div>
        <h3>Reflexión</h3>
        <p>Pregunta lo que sea —dudas, miedos, versículos confusos— y recibe respuestas honestas supervisadas por pastores.</p>
      </article>
      <article class="card rv" data-tilt style="--d:.25s">
        <span class="tag">Pronto</span>
        <div class="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h3>Amigos</h3>
        <p>Una red pequeña de personas cercanas que te acompañan. Sin rankings, sin competencia.</p>
      </article>
    </div>
  </div>
</section>

<!-- ============ SHOWCASE ============ -->
<section class="show" id="app" data-theme="dark">
  <div class="stick">
    <div class="glow" id="showGlow"></div>
    <div class="sgrid">
      <div class="steps" id="steps">
        <div class="step" data-step="0"><div class="num">01 · LEER</div><h3>La Palabra,<br/><em class="a">sin ruido</em>.</h3><p>Una lectura limpia, pensada para concentrarte. Sin anuncios, sin distracciones: solo tú y el texto.</p></div>
        <div class="step" data-step="1"><div class="num">02 · SUBRAYAR</div><h3>Guarda lo que<br/><em class="a">te habló</em>.</h3><p>Toca un versículo y dale un color suave. Todo lo que subrayas queda en tus marcadores para volver cuando lo necesites.</p></div>
        <div class="step" data-step="2"><div class="num">03 · BUSCAR</div><h3>Encuentra cualquier<br/><em class="a">versículo</em>.</h3><p>Escribe una palabra o una cita como «Juan 3:16» y llega directo. Busca en toda la Biblia, sin conexión.</p></div>
        <div class="step" data-step="3"><div class="num">04 · CRECER</div><h3>Planes que te<br/><em class="a">acompañan</em>.</h3><p>Lecturas cortas para temporadas reales: ansiedad, gratitud, empezar de nuevo. Un recordatorio diario, a la hora que tú elijas.</p></div>
        <div class="step" data-step="4"><div class="num">05 · COMPARTIR</div><h3>Compártelo<br/><em class="a">con una foto</em>.</h3><p>Convierte un versículo en una imagen lista para tus historias, con fotos elegidas con cuidado.</p></div>
      </div>
      <div class="tabs" id="tabs"><button>Leer</button><button>Subrayar</button><button>Buscar</button><button>Planes</button><button>Compartir</button></div>
      <div class="phone-slot">
        <div class="phone">
          <div class="screen">
            <div class="island"></div>
            <div class="sb"><span>9:41</span><span><svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><path d="M8 2.2c2.1 0 4 .8 5.4 2.1l1.1-1.1A9.3 9.3 0 0 0 8 .6 9.3 9.3 0 0 0 1.5 3.2l1.1 1.1A7.7 7.7 0 0 1 8 2.2zm0 3.1c1.2 0 2.4.5 3.2 1.3l1.1-1.1A6.2 6.2 0 0 0 8 3.7a6.2 6.2 0 0 0-4.3 1.8l1.1 1.1A4.6 4.6 0 0 1 8 5.3zm0 3.1c.4 0 .8.2 1.1.4L8 10 6.9 8.8c.3-.2.7-.4 1.1-.4z"/></svg><svg width="24" height="11" viewBox="0 0 24 11"><rect x=".5" y=".5" width="20" height="10" rx="3" fill="none" stroke="currentColor" opacity=".5"/><rect x="2" y="2" width="16" height="7" rx="1.6" fill="currentColor"/><rect x="21.5" y="3.5" width="1.6" height="4" rx=".8" fill="currentColor" opacity=".5"/></svg></span></div>

            <!-- 0 · leer -->
            <div class="scr" data-scr="0">
              <div class="kk">RV 1909</div>
              <h4>Juan 1</h4>
              <div class="reader"><sup>1</sup>En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios. <sup>2</sup>Este era en el principio con Dios. <sup>3</sup>Todas las cosas por él fueron hechas; y sin él nada de lo que es hecho, fue hecho. <sup>4</sup>En él estaba la vida, y la vida era la luz de los hombres. <sup>5</sup>Y la luz en las tinieblas resplandece; mas las tinieblas no la comprendieron.</div>
              <div class="tabbar">
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>INICIO</span>
                <span class="on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4zM20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8V4z"/></svg>BIBLIA</span>
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 3h12v18l-6-4-6 4z"/></svg>MARCAS</span>
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>PERFIL</span>
              </div>
            </div>

            <!-- 1 · subrayar -->
            <div class="scr" data-scr="1">
              <div class="kk">RV 1909</div>
              <h4>Juan 1</h4>
              <div class="reader"><sup>3</sup>Todas las cosas por él fueron hechas; y sin él nada de lo que es hecho, fue hecho. <sup>4</sup><span class="hl">En él estaba la vida, y la vida era la luz de los hombres.</span> <sup>5</sup><span class="hl miel">Y la luz en las tinieblas resplandece;</span> mas las tinieblas no la comprendieron.</div>
              <div class="palette"><small>JUAN 1:4 · SUBRAYAR</small><div><b class="sel" style="background:#F2917B"></b><b style="background:#F5B888"></b><b style="background:#EBCB72"></b><b style="background:#A5CB9C"></b><b style="background:#9DC3E0"></b><b style="background:#BFA9DE"></b></div></div>
            </div>

            <!-- 2 · buscar -->
            <div class="scr" data-scr="2">
              <div class="kk">BUSCAR</div>
              <h4>¿Qué buscas?</h4>
              <div class="search"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><span id="typed"></span><span class="caret"></span></div>
              <div class="chips"><span class="on">Toda</span><span>Antiguo</span><span>Nuevo</span></div>
              <div class="res"><small>JUAN 8:12</small><p>Yo soy la <mark>luz</mark> del mundo: el que me sigue, no andará en tinieblas…</p></div>
              <div class="res"><small>SALMOS 27:1</small><p>Jehová es mi <mark>luz</mark> y mi salvación: ¿de quién temeré?</p></div>
              <div class="res"><small>MATEO 5:14</small><p>Vosotros sois la <mark>luz</mark> del mundo…</p></div>
              <div class="res"><small>1 JUAN 1:5</small><p>Que Dios es <mark>luz</mark>, y en él no hay ningunas tinieblas.</p></div>
            </div>

            <!-- 3 · planes -->
            <div class="scr" data-scr="3">
              <div class="kk">PLANES</div>
              <h4>Tu plan</h4>
              <div class="plan">
                <div class="ph"></div>
                <div class="pb"><b>Salmos para la ansiedad</b><small>7 días · 5 minutos al día</small>
                  <div class="pring"><svg viewBox="0 0 40 40"><circle class="t" cx="20" cy="20" r="18"/><circle class="v" cx="20" cy="20" r="18"/></svg><em>Día 4 de 7<br/><span style="color:var(--txt-dark-soft)">Salmo 46</span></em></div>
                </div>
              </div>
              <div class="days"><i class="d" style="--i:0">L</i><i class="d" style="--i:1">M</i><i class="d" style="--i:2">M</i><i class="d" style="--i:3">J</i><i style="--i:4">V</i><i style="--i:5">S</i><i style="--i:6">D</i></div>
            </div>

            <!-- 4 · compartir -->
            <div class="scr share-scr" data-scr="4">
              <div class="share"><img class="wm" src="/landing/logo-crema.png" alt="" /><p>Nuevas son cada mañana; grande es tu fidelidad.</p><small>LAMENTACIONES 3:23</small></div>
              <div class="share-btns"><span>Compartir</span><span>Cambiar foto</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dots" id="dots"><i></i><i></i><i></i><i></i><i></i></div>
  </div>
</section>

<!-- ============ HAZLA TUYA ============ -->
<section class="lt sec" data-theme="light">
  <div class="wrap custom">
    <div>
      <span class="kicker rv">Hazla tuya</span>
      <h2 class="h-l rv" style="--d:.1s;margin-top:22px">Tu papel,<br/>tu letra, <em class="a">tu tiempo</em>.</h2>
      <p class="lead rv" style="--d:.2s;margin-top:20px">Ocho papeles, cuatro tipografías y el tamaño exacto para tus ojos. Pruébalo aquí mismo.</p>
      <div class="ctrl rv" style="--d:.3s">
        <div>
          <label>Papel</label>
          <div class="papers" id="papers">
            <button data-p="tinta" class="on" style="background:#14100D" aria-label="Tinta"><span>Tinta</span></button>
            <button data-p="grafito" style="background:#2A2A2C" aria-label="Grafito"><span>Grafito</span></button>
            <button data-p="crema" style="background:#F0E6CC" aria-label="Crema"><span>Crema</span></button>
            <button data-p="arena" style="background:#F6F0EB" aria-label="Arena"><span>Arena</span></button>
            <button data-p="blanco" style="background:#FFFFFF" aria-label="Blanco"><span>Blanco</span></button>
          </div>
        </div>
        <div style="margin-top:18px">
          <label>Tipografía</label>
          <div class="seg" id="fonts">
            <i class="knob"></i>
            <button data-f="'EB Garamond',serif" class="on" style="font-family:'EB Garamond',serif">Garamond</button>
            <button data-f="'Fraunces',serif" style="font-family:'Fraunces',serif">Fraunces</button>
            <button data-f="'Literata',serif" style="font-family:'Literata',serif">Literata</button>
            <button data-f="'Inter Tight',sans-serif" style="font-family:'Inter Tight',sans-serif">Inter</button>
          </div>
        </div>
        <div>
          <label>Tamaño</label>
          <div class="range"><span style="font-size:14px">A</span><input id="size" type="range" min="17" max="32" value="24" /><span style="font-size:24px">A</span></div>
        </div>
      </div>
    </div>
    <div class="rv" style="--d:.2s">
      <div class="page" id="page">
        <div class="kk">SALMOS · RV 1909</div>
        <h5>Salmo 23</h5>
        <div class="body"><sup>1</sup>Jehová es mi pastor; nada me faltará. <sup>2</sup>En lugares de delicados pastos me hará yacer: junto a aguas de reposo me pastoreará. <sup>3</sup>Confortará mi alma; guiaráme por sendas de justicia por amor de su nombre.</div>
        <div class="meta" id="pageMeta">Tinta · Garamond · 24 pt</div>
      </div>
    </div>
  </div>
</section>

<!-- ============ LA LLAMA ============ -->
<section class="sec" id="llama" data-theme="dark" style="background:var(--tinta)">
  <div class="wrap llama">
    <div>
      <span class="kicker rv">La Llama</span>
      <h2 class="h-l rv" style="--d:.1s;margin-top:22px">No buscamos <span style="opacity:.5">perfección</span>. Buscamos un <em class="a">corazón dispuesto</em>.</h2>
      <p class="lead rv" style="--d:.2s;margin-top:24px">Cada día que abres la Palabra, tu llama crece. Tienes dos días de gracia al mes, y si rompes tu racha, no pasa nada: empezamos de nuevo.</p>
      <div class="quote rv" style="--d:.3s"><p>“No nos cansemos, pues, de hacer bien; que a su tiempo segaremos.”</p><small>GÁLATAS 6:9</small></div>
    </div>
    <div class="flame-card rv" id="flameCard" style="--d:.15s">
      <div class="flame"><span class="f1"></span><span class="f2"></span><span class="f3"></span></div>
      <div class="count" data-count="21">0</div>
      <div class="count-l">DÍAS SEGUIDOS</div>
      <div class="streak" id="streak"></div>
      <div class="legend"><span><b style="background:linear-gradient(#FFD06A,#C97A2C)"></b>Leíste</span><span><b style="box-shadow:inset 0 0 0 1.5px rgba(232,180,90,.7)"></b>Día de gracia</span></div>
    </div>
  </div>
</section>

<!-- ============ LO QUE VIENE ============ -->
<section class="sec viene" id="viene" data-theme="dark">
  <div class="wrap">
    <div class="sec-head">
      <span class="kicker rv">Lo que viene</span>
      <h2 class="h-l rv" style="--d:.1s">Más que una app <em class="a">de Biblia</em>.</h2>
      <p class="lead rv" style="--d:.2s">No solo para leer: un lugar donde tu iglesia y tu comunidad se encuentran. Toca cada idea para verla.</p>
    </div>
    <div class="feat rv" style="--d:.15s">
      <div class="fmenu" id="fmenu">
        <button class="fitem"><span class="fi-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></svg></span><span class="fi-t"><b>Pregúntale a Kairós</b><span class="fi-d"><span>Un chat para tus dudas de fe, a cualquier hora. Responde con la Biblia en la mano, y las respuestas las revisan pastores.</span></span></span><i class="fi-bar"></i></button>
        <button class="fitem"><span class="fi-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></span><span class="fi-t"><b>Tu comunidad</b><span class="fi-d"><span>Un feed para tu gente, no para likes: comparte lo que leíste, una reflexión o una petición de oración. Tus amigos oran contigo, comentan y te mandan versículos.</span></span></span><i class="fi-bar"></i></button>
        <button class="fitem"><span class="fi-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V4M4 4h13l-2 4 2 4H4"/></svg></span><span class="fi-t"><b>Misiones</b><span class="fi-d"><span>Retos con principio y fin para hacer en grupo: un evangelio en 14 días, 30 días orando por tu familia. Todos ven la misma barra.</span></span></span><i class="fi-bar"></i></button>
        <button class="fitem"><span class="fi-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6M9 5h6M5 22V12l7-4 7 4v10M9 22v-5h6v5"/></svg></span><span class="fi-t"><b>Canales de iglesias</b><span class="fi-d"><span>Sigue a tu iglesia y a otras. Comparten sus prédicas en audio, bosquejos y avisos, como un canal de WhatsApp, y tú reaccionas, comentas y lo compartes.</span></span></span><i class="fi-bar"></i></button>
        <button class="fitem"><span class="fi-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5s1.3 1.8 3.5 1.8 3.5-1.8 3.5-1.8M9 9.5h.01M15 9.5h.01"/></svg></span><span class="fi-t"><b>¿Cómo llegas hoy?</b><span class="fi-d"><span>Dinos cómo te sientes y recibe un versículo y un plan corto para ese momento: ansiedad, cansancio, soledad, gratitud.</span></span></span><i class="fi-bar"></i></button>
        <button class="fitem"><span class="fi-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"/></svg></span><span class="fi-t"><b>Memoriza</b><span class="fi-d"><span>Aprende versículos de memoria jugando: completa las palabras que faltan, un poco cada día, y guárdalos en el corazón.</span></span></span><i class="fi-bar"></i></button>
      </div>

      <p class="fdesc" id="fdesc"></p>
      <div class="fphone">
        <div class="phone">
          <div class="screen">
            <div class="island"></div>
            <div class="sb"><span>9:41</span><span><svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><path d="M8 2.2c2.1 0 4 .8 5.4 2.1l1.1-1.1A9.3 9.3 0 0 0 8 .6 9.3 9.3 0 0 0 1.5 3.2l1.1 1.1A7.7 7.7 0 0 1 8 2.2zm0 3.1c1.2 0 2.4.5 3.2 1.3l1.1-1.1A6.2 6.2 0 0 0 8 3.7a6.2 6.2 0 0 0-4.3 1.8l1.1 1.1A4.6 4.6 0 0 1 8 5.3zm0 3.1c.4 0 .8.2 1.1.4L8 10 6.9 8.8c.3-.2.7-.4 1.1-.4z"/></svg><svg width="24" height="11" viewBox="0 0 24 11"><rect x=".5" y=".5" width="20" height="10" rx="3" fill="none" stroke="currentColor" opacity=".5"/><rect x="2" y="2" width="16" height="7" rx="1.6" fill="currentColor"/></svg></span></div>

            <!-- 0 · pregunta -->
            <div class="fs" data-f="0">
              <div class="kk">PREGUNTA</div>
              <div class="chat">
                <div class="msg me">¿Cómo sé si Dios me escucha cuando oro?</div>
                <div class="msg bot"><span class="dotty"><i></i><i></i><i></i></span><span class="txt">Es una pregunta muy honesta. La Biblia promete que Dios está cerca de quien le busca de verdad:</span><span class="vchip">“Cercano está Jehová a todos los que le invocan.”<b>SALMO 145:18</b></span></div>
                <div class="rev">✓ Respuestas revisadas por pastores</div>
              </div>
              <div class="cin"><span>Escribe tu pregunta…</span><i>↑</i></div>
            </div>

            <!-- 1 · comunidad -->
            <div class="fs" data-f="1">
              <div class="kk">COMUNIDAD</div>
              <div class="feed">
                <div class="post">
                  <div class="ph-head"><span class="av" style="background:#F2917B">A</span><div><b>Ale</b><small>compartió un versículo · 1 h</small></div></div>
                  <div class="vimg"><p>En tu mano están mis tiempos.</p><small>SALMO 31:15</small></div>
                  <p class="cap">Hoy lo necesitaba. Gracias por mandármelo, Mari 🤍</p>
                  <div class="react"><button class="rx" data-n="24"><span>♡</span> <em>24</em></button><span>💬 5</span></div>
                </div>
                <div class="preq">
                  <div class="ph-head"><span class="av" style="background:#9DC3E0">D</span><div><b>Dani</b><small>pidió oración · 12 min</small></div></div>
                  <p>Mañana tengo la entrevista de trabajo. ¿Me acompañan en oración?</p>
                  <button class="pbtn" id="fpray">Orar con Dani</button>
                  <div class="pnote" id="fpnote">Dani va a saber que oraste por ella ✦</div>
                </div>
              </div>
            </div>

            <!-- 2 · misiones -->
            <div class="fs" data-f="2">
              <div class="kk">MISIONES</div>
              <h4>Marcos en 14 días</h4>
              <div class="mcard">
                <div class="mrow"><b>Día 9</b><span>de 14</span></div>
                <div class="mbar"><i></i></div>
                <div class="mfaces"><span class="av" style="background:#F2917B">A</span><span class="av" style="background:#EBCB72">L</span><span class="av" style="background:#A5CB9C">J</span><span class="av" style="background:#BFA9DE">M</span><small>7 leyendo juntos</small></div>
              </div>
              <div class="todo">
                <small>HOY</small>
                <label><i class="ck on"></i>Marcos 9</label>
                <label><i class="ck"></i>Orar por tu círculo</label>
                <label><i class="ck"></i>Compartir lo que aprendiste</label>
              </div>
            </div>

            <!-- 3 · canal de iglesia -->
            <div class="fs" data-f="3">
              <div class="kk">CANAL</div>
              <div class="chan">
                <span class="chan-av">CV</span>
                <div><b>Cita con la Vida</b><small>Canal de tu iglesia</small></div>
                <button class="follow" id="follow">Seguir</button>
              </div>
              <div class="feed">
                <div class="post">
                  <small class="when">DOMINGO · PRÉDICA</small>
                  <b class="ptitle">Esperar en el tiempo de Dios</b>
                  <div class="audio" id="audio"><button class="play" aria-label="Reproducir"><svg viewBox="0 0 24 24" class="i-play"><path d="M8 5v14l11-7z" fill="currentColor"/></svg><svg viewBox="0 0 24 24" class="i-pause"><path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor"/></svg></button><div class="wave"><i style="--h:71%;--k:0"></i><i style="--h:39%;--k:1"></i><i style="--h:29%;--k:2"></i><i style="--h:52%;--k:3"></i><i style="--h:52%;--k:4"></i><i style="--h:54%;--k:5"></i><i style="--h:95%;--k:6"></i><i style="--h:63%;--k:7"></i><i style="--h:51%;--k:8"></i><i style="--h:81%;--k:9"></i><i style="--h:95%;--k:10"></i><i style="--h:79%;--k:11"></i><i style="--h:82%;--k:12"></i><i style="--h:55%;--k:13"></i><i style="--h:35%;--k:14"></i><i style="--h:48%;--k:15"></i><i style="--h:68%;--k:16"></i><i style="--h:88%;--k:17"></i><i style="--h:45%;--k:18"></i><i style="--h:27%;--k:19"></i><i style="--h:41%;--k:20"></i><i style="--h:43%;--k:21"></i><i style="--h:39%;--k:22"></i><i style="--h:59%;--k:23"></i><i style="--h:71%;--k:24"></i><i style="--h:70%;--k:25"></i><i style="--h:47%;--k:26"></i><i style="--h:83%;--k:27"></i><i style="--h:36%;--k:28"></i><i style="--h:92%;--k:29"></i></div><span class="dur">38:12</span></div>
                  <div class="react"><button class="rx" data-n="214"><span>🙏</span> <em>214</em> Amén</button><span>💬 32</span></div>
                </div>
                <div class="post doc">
                  <small class="when">BOSQUEJO · HABACUC 2:1-4</small>
                  <ol><li>Dios habla en la espera</li><li>La visión tiene su tiempo</li><li>El justo por su fe vivirá</li></ol>
                  <span class="dl">Guardar bosquejo ↓</span>
                </div>
                <div class="post note">
                  <small class="when">AVISO · JÓVENES</small>
                  <p>Este viernes nos vemos a las 7:30 pm. ¡Trae a un amigo! 🔥</p>
                </div>
              </div>
            </div>

            <!-- 4 · cómo estás -->
            <div class="fs" data-f="4">
              <div class="kk">¿CÓMO LLEGAS HOY?</div>
              <h4>Me siento…</h4>
              <div class="moods" id="moods">
                <button class="on" data-m="0">Ansioso</button><button data-m="1">Cansado</button><button data-m="2">Solo</button><button data-m="3">Con miedo</button><button data-m="4">Confundido</button><button data-m="5">Agradecido</button>
              </div>
              <div class="mres" id="mres"><p></p><small></small><em>Plan de 3 días para ti →</em></div>
            </div>

            <!-- 5 · memoriza -->
            <div class="fs" data-f="5">
              <div class="kk">MEMORIZA</div>
              <h4>Filipenses 4:13</h4>
              <div class="blank" id="blank">Todo lo <span class="gap" data-a="puedo"></span> en Cristo que me <span class="gap" data-a="fortalece"></span>.</div>
              <div class="words-pick" id="pick"><button>fortalece</button><button>hago</button><button>puedo</button><button>sostiene</button></div>
              <div class="memo-ok" id="memoOk">✦ ¡Lo tienes! Versículo guardado.</div>
              <div class="memo-prog"><i class="on"></i><i class="on"></i><i class="on"></i><i></i><i></i><i></i><i></i><small>3 de 7 esta semana</small></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ PARA IGLESIAS ============ -->
<section class="lt sec iglesias" id="iglesias" data-theme="light">
  <div class="wrap">
    <div class="cc rv">
      <div class="cc-photo"></div>
      <div class="cc-body">
        <span class="kicker">Para pastores y líderes</span>
        <h2 class="h-m">¿Tu iglesia quiere su <em class="a">canal</em> en Kairós?</h2>
        <p class="cc-lead">Comparte tus prédicas en audio, bosquejos y avisos con tus jóvenes, en el mismo lugar donde leen la Biblia. Estamos buscando iglesias piloto en Latinoamérica.</p>
        <ul class="cc-list"><li>Gratis para iglesias</li><li>Tú decides qué se publica</li><li>Te ayudamos a empezar</li></ul>
        <form class="cform" data-form="iglesia"><input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" />
          <input name="church" required placeholder="Nombre de la iglesia" aria-label="Nombre de la iglesia" />
          <input name="city" required placeholder="Ciudad y país" aria-label="Ciudad y país" />
          <input name="contact" required placeholder="Tu nombre y rol" aria-label="Tu nombre y rol" />
          <input name="email" required type="email" autocomplete="email" placeholder="Correo de contacto" aria-label="Correo de contacto" />
          <button type="submit">Quiero un canal para mi iglesia</button>
          <div class="ok">✦ Gracias. Te escribimos pronto para platicar.</div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ============ COMUNIDAD ============ -->
<section class="lt sec" id="comunidad" data-theme="light">
  <div class="wrap">
    <div class="sec-head" style="margin-bottom:56px">
      <span class="kicker rv">Nuestra promesa</span>
      <h2 class="h-l rv" style="--d:.1s">Hecha en <em class="a">comunidad</em>.</h2>
    </div>
    <div class="bento2">
      <div class="tile stat rv" style="--d:.05s"><span class="big"><em>$0</em></span><small>Gratis para siempre.</small></div>
      <div class="tile dark stat rv" style="--d:.1s"><span class="big">0</span><small>Anuncios. Nunca.</small></div>
      <div class="tile stat rv" style="--d:.15s"><span class="big"><em>31k</em></span><small>Versículos en tu mano.</small></div>
      <div class="tile b-f rv" style="--d:.2s"><div class="ph"></div><div><span class="kicker">Sin fines de lucro</span><h3 style="font-size:26px">Lo construimos contigo.</h3><p>Kairós nace como asociación civil. No hay nada que venderte: solo queremos que abras la Palabra.</p></div></div>
    </div>
  </div>
</section>

<!-- ============ PREGUNTAS ============ -->
<section class="sec" id="faq" data-theme="dark" style="background:var(--tinta)">
  <div class="wrap faq">
    <div>
      <span class="kicker rv">Preguntas</span>
      <h2 class="h-l rv" style="--d:.1s;margin-top:22px">Lo que <em class="a">nos preguntan</em>.</h2>
      <p class="lead rv" style="--d:.2s;margin-top:20px">¿Te quedó otra duda? Escríbenos a <a href="mailto:hola@kairoslat.com" class="ln-a">hola@kairoslat.com</a>.</p>
    </div>
    <div class="qa" id="qa">
      <div class="q rv"><button>¿De verdad es gratis?<i></i></button><div class="a"><div><p>Sí. Kairós es gratis para siempre y sin anuncios. No hay suscripciones ni versión premium: nace como un proyecto sin fines de lucro.</p></div></div></div>
      <div class="q rv" style="--d:.05s"><button>¿Quién está detrás?<i></i></button><div class="a"><div><p>Lo empezamos en Cancún, México, jóvenes que amamos la Palabra y la tecnología. Lo construimos junto con iglesias y con quienes se suman a la beta.</p></div></div></div>
      <div class="q rv" style="--d:.1s"><button>¿Qué versiones de la Biblia tiene?<i></i></button><div class="a"><div><p>Hoy puedes leer la Reina-Valera 1909 y la Palabra de Dios para Todos. Estamos gestionando las licencias de más versiones, como NVI, RVR1960, NTV, DHH y TLA.</p></div></div></div>
      <div class="q rv" style="--d:.15s"><button>¿Qué pasa con mis datos?<i></i></button><div class="a"><div><p>Puedes usar Kairós sin cuenta. Si creas una, solo guardamos lo necesario para respaldar tu racha, subrayados y planes. Nadie más ve lo que subrayas, y puedes borrar tu cuenta desde la app cuando quieras.</p></div></div></div>
      <div class="q rv" style="--d:.2s"><button>¿Cuándo sale?<i></i></button><div class="a"><div><p>Estamos en pruebas. Primero abriremos una beta para los primeros 500 inscritos en iPhone y Android. Anótate y te avisamos.</p></div></div></div>
      <div class="q rv" style="--d:.25s"><button>¿Mi iglesia puede tener su canal?<i></i></button><div class="a"><div><p>Sí. Estamos buscando iglesias piloto para abrir los primeros canales. Déjanos sus datos en la sección <a href="#iglesias" class="ln-a">Para pastores y líderes</a>.</p></div></div></div>
    </div>
  </div>
</section>

<!-- ============ PROMESA ============ -->
<section class="promise" id="promise" data-theme="dark">
  <div class="stick">
    <div class="frame" id="pFrame"><img id="pImg" src="/landing/william-veitch-doa9rgxy4nm-unsplash.jpg" alt="" /></div>
    <div class="txt">
      <p class="l1">No importa cuánto tiempo haya pasado.</p>
      <p class="l2">Hoy es el momento perfecto para iniciar.</p>
    </div>
  </div>
</section>

<!-- ============ CTA ============ -->
<section class="cta" id="beta" data-theme="dark">
  <div class="wrap">
    <span class="kicker rv" style="position:relative">Beta</span>
    <h2 class="h-l rv" style="--d:.1s">Súbete a <em class="a">la beta</em>.</h2>
    <p class="lead rv" style="--d:.2s">Estamos invitando a los primeros 500. Acceso anticipado y voz directa en lo que vamos construyendo.</p>
    <div class="rv" style="--d:.3s">
      <form class="form" data-form="waitlist"><input type="hidden" name="source" value="cta" /><input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <input type="email" name="email" autocomplete="email" required placeholder="tu correo" aria-label="Tu correo" />
        <button type="submit">Quiero entrar</button>
        <div class="ok">✦ Estás dentro. Revisa tu correo.</div>
      </form>
    </div>
    <div class="perks rv" style="--d:.4s"><span>Gratis para siempre</span><span>Sin anuncios</span><span>Hecha en Latinoamérica, en comunidad</span></div>
    <div class="rv" style="--d:.5s"><div class="stores"><span class="st-l">Próximamente en</span><span class="store"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.37 12.8c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.41 1.2-2.47-.03-.01-2.3-.88-2.32-3.52zM14.2 6.33c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.08 1.96-.49 2.56-1.21z"/></svg>App Store</span><span class="store"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M5 3.5v17l14-8.5z"/><path d="M5 3.5l9.5 9.5M5 20.5l9.5-8.5" opacity=".55"/></svg>Google Play</span></div></div>
  </div>
</section>
</main>

<footer>
  <div class="wrap">
    <div class="row">
      <div><img src="/landing/logo-crema.png" alt="Kairós" /><div>Una app bíblica para tu generación.</div></div>
      <nav><a href="/nosotros">Nosotros</a><a href="/terminos">Términos</a><a href="/privacidad">Privacidad</a><a href="mailto:hola@kairoslat.com">Contacto</a></nav>
    </div>
    <div class="fine"><span>© 2026 Kairós A.C.</span><span>Textos bíblicos: Reina-Valera 1909 (dominio público).</span></div>
  </div>
</footer>
`;
