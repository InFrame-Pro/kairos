// app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kairós — El momento exacto es ahora';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Colores de tu paleta oscura (los del viewport dark theme)
const INK = '#14100D';
const CREAM_SOFT = '#F0E6CC';
const AMBER = '#C9954A';
const INK_SOFT = '#8A8478';

export default async function Image() {
  // Descargamos Cinzel + Fraunces desde Google Fonts para el edge runtime
  const [cinzel, fraunces] = await Promise.all([
    fetch(
      'https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap'
    )
      .then((r) => r.text())
      .then((css) => css.match(/src: url\((.+?)\)/)?.[1] ?? '')
      .then((url) => (url ? fetch(url).then((r) => r.arrayBuffer()) : null)),
    fetch(
      'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,144,400;1,144,400&display=swap'
    )
      .then((r) => r.text())
      .then((css) => css.match(/src: url\((.+?)\)/)?.[1] ?? '')
      .then((url) => (url ? fetch(url).then((r) => r.arrayBuffer()) : null)),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: INK,
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Glow amber en el fondo */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '900px',
            height: '900px',
            background:
              'radial-gradient(circle, rgba(201,149,74,0.20) 0%, rgba(201,149,74,0.06) 40%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(40px)',
            display: 'flex',
          }}
        />

        {/* καιρός */}
        <div
          style={{
            fontFamily: 'Cinzel',
            fontSize: '56px',
            color: AMBER,
            letterSpacing: '0.02em',
            marginBottom: '16px',
            zIndex: 1,
            display: 'flex',
          }}
        >
          καιρός
        </div>

        {/* Subtítulo griego */}
        <div
          style={{
            fontFamily: 'Fraunces',
            fontStyle: 'italic',
            fontSize: '22px',
            color: INK_SOFT,
            marginBottom: '60px',
            zIndex: 1,
            display: 'flex',
          }}
        >
          — el momento exacto, en griego
        </div>

        {/* Headline principal */}
        <div
          style={{
            fontFamily: 'Fraunces',
            color: CREAM_SOFT,
            lineHeight: 1.0,
            textAlign: 'center',
            letterSpacing: '-0.02em',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '108px' }}>El momento exacto</span>
          <span style={{ fontSize: '108px', marginTop: '8px', display: 'flex' }}>
            <span>es&nbsp;</span>
            <span style={{ fontStyle: 'italic', color: AMBER }}>ahora</span>
            <span>.</span>
          </span>
        </div>

        {/* Footer con descripción */}
        <div
          style={{
            fontFamily: 'Fraunces',
            fontSize: '26px',
            color: INK_SOFT,
            marginTop: '60px',
            textAlign: 'center',
            zIndex: 1,
            display: 'flex',
          }}
        >
          Una app bíblica hecha con cariño, gratis para siempre.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        ...(cinzel
          ? [{ name: 'Cinzel', data: cinzel, weight: 500 as const, style: 'normal' as const }]
          : []),
        ...(fraunces
          ? [{ name: 'Fraunces', data: fraunces, weight: 400 as const, style: 'normal' as const }]
          : []),
      ],
    }
  );
}
