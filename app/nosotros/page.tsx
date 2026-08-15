// app/nosotros/page.tsx
import type { Metadata } from 'next';
import { LegalLayout } from '@/components/legal-layout';

export const metadata: Metadata = {
  title: 'Quiénes somos',
  description:
    'La historia detrás de Kairós. Un proyecto pequeño, hecho con cariño.',
};

// Clase reutilizable para los encabezados de sección
const sectionHeading =
  'mt-16 mb-6 border-b border-[var(--ink-line)] pb-4 text-[28px] leading-tight tracking-tight text-[var(--ink)] md:text-[36px]';

// Clase para subencabezados (dentro de una sección)
const subHeading =
  'mt-8 mb-3 text-[20px] leading-tight tracking-tight text-[var(--ink)] md:text-[24px]';

export default function NosotrosPage() {
  return (
    <LegalLayout
      title="Quiénes somos."
      intro="Un proyecto pequeño, hecho con cariño."
      lastUpdated="11 de julio de 2026"
    >
      <h2
        className={sectionHeading}
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 100',
          fontWeight: 400,
        }}
      >
        El origen
      </h2>
      <p>
        Kairós nace de una convicción sencilla: que la fe cristiana merece
        herramientas hechas con el mismo cuidado que Dios pone en cada uno
        de nosotros. No apps genéricas, no experiencias corporativas, no
        contenido reciclado. Algo que se sienta cercano, honesto, y hecho
        pensando en ti.
      </p>
      <p>
        En griego antiguo, <em>καιρός</em> (kairós) es el momento exacto. El
        instante en que algo debe ocurrir. No el tiempo lineal del reloj,
        sino ese tiempo cargado de sentido: el momento oportuno, el kairós
        de Dios. Ese es el espíritu que queremos que respire cada rincón de
        esta app.
      </p>

      <h2
        className={sectionHeading}
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 100',
          fontWeight: 400,
        }}
      >
        ¿Quién la construye?
      </h2>
      <p>
        Kairós es, por ahora, el trabajo de una sola persona:{' '}
        <strong>Fernando García</strong>, desarrollador de software y
        fotógrafo cristiano en Cancún, México. Vengo de la fotografía y
        llevo un par de meses construyendo productos digitales para
        distintos clientes. En algún punto del camino sentí que era momento
        de usar todo eso para algo que trascendiera lo comercial.
      </p>
      <p>Kairós es ese algo.</p>

      <h2
        className={sectionHeading}
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 100',
          fontWeight: 400,
        }}
      >
        En qué etapa estamos
      </h2>
      <p>El proyecto está en fase de pre-lanzamiento.</p>

      <h3
        className={subHeading}
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 36',
          fontWeight: 400,
        }}
      >
        Construyendo la app
      </h3>
      <p>
        Diseño, funcionalidades base, contenido devocional inicial.
      </p>

      <h3
        className={subHeading}
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 36',
          fontWeight: 400,
        }}
      >
        Formalizando la Asociación Civil
      </h3>
      <p>
        Kairós se constituirá como A.C. sin fines de lucro en México, para
        que nunca sea una empresa que busque lucrar con la fe de nadie.
      </p>

      <h3
        className={subHeading}
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 36',
          fontWeight: 400,
        }}
      >
        Escuchando a la comunidad
      </h3>
      <p>
        La lista de espera existe justamente para eso: reunir a las
        primeras personas que nos ayudarán a decidir cómo se ve, cómo suena
        y cómo se siente Kairós.
      </p>

      <h2
        className={sectionHeading}
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 100',
          fontWeight: 400,
        }}
      >
        Nuestras promesas
      </h2>
      <p>Prometemos, hasta donde podamos y nos alcance:</p>
      <ul>
        <li>
          <strong>Que la versión esencial siempre será gratis.</strong> Sin
          suscripciones ni pagos que se interpongan entre nadie y la
          Palabra.
        </li>
        <li>
          <strong>Que nunca venderemos tus datos.</strong> Ni ahora, ni
          cuando seamos más grandes, ni bajo presión de un inversionista.
          De hecho, no queremos ese tipo de inversionistas.
        </li>
        <li>
          <strong>Que priorizaremos calidad sobre velocidad.</strong>{' '}
          Preferimos tardar más y hacer algo hermoso, a lanzar rápido.
        </li>
      </ul>

      <h2
        className={sectionHeading}
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 100',
          fontWeight: 400,
        }}
      >
        ¿Qué queremos construir?
      </h2>
      <p>
        Una app bíblica que se sienta como abrir un libro antiguo, no como
        deslizar un feed. Con lecturas diarias que respiren, planes que
        acompañen —no que presionen—, una comunidad discreta de amigos con
        los que puedas caminar en la fe.
      </p>
      <p>Queremos que Kairós sea un espacio pequeño pero muy bien hecho.</p>

      <h2
        className={sectionHeading}
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 100',
          fontWeight: 400,
        }}
      >
        ¿Cómo puedes ayudar?
      </h2>
      <p>
        Si crees en esta visión y quieres acompañar el proyecto, puedes:
      </p>
      <ul>
        <li>
          <strong>Suscribirte a la lista de espera.</strong> Los primeros
          100 tendrán acceso anticipado y voz directa en lo que vamos
          construyendo.
        </li>
        <li>
          <strong>Compartir el proyecto.</strong> Con amigos, en tu grupo
          de jóvenes, en tu comunidad de fe. Cada persona nueva importa.
        </li>
        <li>
          <strong>Escribirnos.</strong> Ideas, dudas, historias que quieras
          compartir. Leemos todo, respondemos personalmente cuando se
          puede.
        </li>
      </ul>

      <h2
        className={sectionHeading}
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 100',
          fontWeight: 400,
        }}
      >
        Un versículo que nos acompaña
      </h2>
      <p
        className="border-l-2 border-[var(--amber)]/60 py-1 pl-6 italic"
        style={{ fontFamily: 'var(--font-fraunces)' }}
      >
        &ldquo;Todo tiene su tiempo, y todo lo que se quiere debajo del
        cielo tiene su hora.&rdquo;
        <br />
        <span className="mt-2 block text-[14px] not-italic text-[var(--ink-soft)] md:text-[15px]">
          — Eclesiastés 3:1
        </span>
      </p>

      <p className="mt-14 text-[var(--ink-soft)]">
        Gracias por estar aquí leyendo esto. Dios te bendiga.
      </p>
    </LegalLayout>
  );
}
