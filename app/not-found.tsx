// app/not-found.tsx
// 404 con humor: el 0 es una ovejita que se perdió (Lucas 15).
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

const css = `
.nf{min-height:100vh;background:radial-gradient(90% 70% at 50% 0%,#2A1F16,#14100D 70%);color:#F0E6CC;
  display:flex;align-items:center;justify-content:center;padding:48px 20px;overflow:hidden;
  font-family:'Inter Tight',system-ui,sans-serif;text-align:center}
.nf-in{max-width:560px;width:100%}
.nf-k{font-family:'Cinzel',serif;letter-spacing:.32em;font-size:12px;color:#E8B45A;margin:0}
.nf-num{display:flex;align-items:center;justify-content:center;gap:clamp(4px,2vw,14px);margin:26px 0 10px;
  font-family:'Fraunces',serif;font-weight:300;font-size:clamp(110px,26vw,190px);line-height:1;color:#F0E6CC}
.nf-num span{display:inline-block;animation:nf-pop .9s cubic-bezier(.2,.8,.2,1) both}
.nf-num span:last-child{animation-delay:.12s}
.nf-zero{width:clamp(96px,22vw,160px);height:clamp(96px,22vw,160px);position:relative}
.nf-zero .ring{position:absolute;inset:6%;border:2px dashed rgba(232,180,90,.35);border-radius:50%;animation:nf-spin 18s linear infinite}
.nf-sheep{position:absolute;inset:0;animation:nf-wander 7s ease-in-out infinite}
.nf-sheep svg{width:100%;height:100%;overflow:visible}
.nf-bob{animation:nf-bob .5s ease-in-out infinite alternate;transform-origin:50% 80%}
.nf-leg{animation:nf-step .25s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:50% 0}
.nf-leg.b{animation-delay:.125s}
.nf-head{animation:nf-look 3.5s ease-in-out infinite;transform-box:fill-box;transform-origin:80% 60%}
.nf-q{animation:nf-q 3.5s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}
.nf-h{font-family:'Fraunces',serif;font-weight:400;font-size:clamp(28px,5vw,40px);line-height:1.15;margin:18px 0 10px;
  animation:nf-up .8s .25s cubic-bezier(.2,.8,.2,1) both}
.nf-h em{color:#E8B45A;font-style:italic;font-weight:300}
.nf-p{color:#A89876;font-size:17px;line-height:1.55;margin:0 auto;max-width:440px;animation:nf-up .8s .35s cubic-bezier(.2,.8,.2,1) both}
.nf-a{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:30px;animation:nf-up .8s .55s cubic-bezier(.2,.8,.2,1) both}
.nf-btn{display:inline-flex;align-items:center;gap:8px;height:50px;padding:0 26px;border-radius:99px;font-size:16px;text-decoration:none;
  transition:transform .3s cubic-bezier(.2,.8,.2,1),background .3s}
.nf-btn:hover{transform:translateY(-2px)}
.nf-btn.main{background:#E8B45A;color:#14100D;font-weight:500}
.nf-btn.main:hover{background:#F2C572}
.nf-btn.ghost{border:1px solid rgba(240,230,204,.2);color:#F0E6CC}
.nf-grass{position:fixed;left:0;right:0;bottom:0;height:70px;pointer-events:none;opacity:.5;
  background:radial-gradient(14px 26px at 10% 100%,#3A4A2A 60%,transparent 62%),radial-gradient(10px 20px at 13% 100%,#2E3C22 60%,transparent 62%),
  radial-gradient(12px 24px at 47% 100%,#3A4A2A 60%,transparent 62%),radial-gradient(9px 18px at 51% 100%,#2E3C22 60%,transparent 62%),
  radial-gradient(14px 28px at 86% 100%,#3A4A2A 60%,transparent 62%),radial-gradient(10px 18px at 90% 100%,#2E3C22 60%,transparent 62%)}
@keyframes nf-pop{from{opacity:0;transform:translateY(30px) scale(.9)}to{opacity:1;transform:none}}
@keyframes nf-up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes nf-spin{to{transform:rotate(360deg)}}
@keyframes nf-bob{from{transform:translateY(0)}to{transform:translateY(-4%)}}
@keyframes nf-step{from{transform:rotate(-14deg)}to{transform:rotate(14deg)}}
@keyframes nf-wander{0%{transform:translateX(-14%) scaleX(1)}45%{transform:translateX(14%) scaleX(1)}50%{transform:translateX(14%) scaleX(-1)}
  95%{transform:translateX(-14%) scaleX(-1)}100%{transform:translateX(-14%) scaleX(1)}}
@keyframes nf-look{0%,40%,100%{transform:rotate(0)}50%,70%{transform:rotate(-12deg)}}
@keyframes nf-q{0%,45%,80%,100%{opacity:0;transform:translateY(6px) scale(.6)}55%,72%{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.nf *{animation:none!important}}
`;

function Sheep() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      {/* signo de pregunta: ¿dónde estoy? */}
      <g className="nf-q">
        <text x="92" y="30" fontSize="26" fill="#E8B45A" fontFamily="Georgia, serif">?</text>
      </g>
      <g className="nf-bob">
        {/* patas */}
        <g fill="#6B5240">
          <rect className="nf-leg" x="40" y="74" width="6" height="22" rx="3" />
          <rect className="nf-leg b" x="52" y="76" width="6" height="20" rx="3" />
          <rect className="nf-leg b" x="66" y="76" width="6" height="20" rx="3" />
          <rect className="nf-leg" x="78" y="74" width="6" height="22" rx="3" />
        </g>
        {/* lana */}
        <g fill="#F6EEDB">
          <circle cx="44" cy="62" r="15" />
          <circle cx="58" cy="54" r="17" />
          <circle cx="74" cy="56" r="16" />
          <circle cx="84" cy="66" r="13" />
          <circle cx="62" cy="70" r="16" />
          <circle cx="46" cy="72" r="12" />
          <circle cx="76" cy="74" r="12" />
        </g>
        <g fill="none" stroke="#E2D3B0" strokeWidth="1.2">
          <path d="M50 58c3-3 7-3 10 0" />
          <path d="M66 64c3-3 7-3 10 0" />
          <path d="M54 72c3-3 7-3 10 0" />
        </g>
        {/* cabeza */}
        <g className="nf-head">
          <ellipse cx="96" cy="60" rx="12" ry="14" fill="#2A211A" />
          <ellipse cx="86" cy="52" rx="7" ry="4" fill="#2A211A" transform="rotate(-25 86 52)" />
          <circle cx="94" cy="47" r="6" fill="#F6EEDB" />
          <circle cx="100" cy="46" r="5" fill="#F6EEDB" />
          <circle cx="93" cy="60" r="2.4" fill="#F6EEDB" />
          <circle cx="93.6" cy="60.4" r="1.2" fill="#14100D" />
          <circle cx="101" cy="60" r="2.4" fill="#F6EEDB" />
          <circle cx="101.6" cy="60.4" r="1.2" fill="#14100D" />
          <path d="M95 68c1.5 1.4 3.5 1.4 5 0" stroke="#F6EEDB" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>
        {/* colita */}
        <circle cx="30" cy="62" r="5" fill="#F6EEDB" />
      </g>
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="nf">
      <style>{css}</style>
      <div className="nf-in">
        <p className="nf-k">KAIRÓS · ERROR 404</p>
        <div className="nf-num" aria-label="404">
          <span>4</span>
          <div className="nf-zero">
            <div className="ring" />
            <div className="nf-sheep">
              <Sheep />
            </div>
          </div>
          <span>4</span>
        </div>
        <h1 className="nf-h">
          Esta página se fue como <em>la oveja perdida</em>.
        </h1>
        <p className="nf-p">
          La buscamos entre las noventa y nueve y no aparece. Tal vez el enlace cambió o se escribió mal.
        </p>
        <div className="nf-a">
          <Link href="/" className="nf-btn main">
            Volver al inicio
          </Link>
          <a href="mailto:hola@kairoslat.com?subject=Enlace%20roto%20en%20Kair%C3%B3s" className="nf-btn ghost">
            Reportar
          </a>
        </div>
      </div>
      <div className="nf-grass" />
    </main>
  );
}
