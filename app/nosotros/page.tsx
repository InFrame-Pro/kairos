// app/nosotros/page.tsx
import type { Metadata } from 'next';
import { LegalLayout } from '@/components/legal-layout';

export const metadata: Metadata = {
  title: 'Quiénes somos',
  description:
    'La historia detrás de Kairós. Un proyecto pequeño, hecho con cariño, desde Cancún.',
};

export default function NosotrosPage() {
  return (
    <LegalLayout
      title="Quiénes somos."
      intro="Un proyecto pequeño, hecho con cariño, desde el mar Caribe."
      lastUpdated="7 de julio de 2026"
    >
      <h2>El origen.</h2>
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

      <h2>Quién la construye.</h2>
      <p>
        Kairós es, por ahora, el trabajo de una sola persona:{' '}
        <strong>Matías García</strong>, desarrollador de software y creativo
        cristiano radicado en Cancún, México. Vengo de la fotografía y el
        video, y de un par de años construyendo productos digitales para
        distintos clientes. En algún punto del camino sentí que era momento
        de usar todo eso para algo que trascendiera lo comercial.
      </p>
      <p>
        Kairós es ese algo.
      </p>

      <h2>En qué etapa estamos.</h2>
      <p>
        El proyecto está en fase de pre-lanzamiento. Estamos:
      </p>
      <ul>
        <li>
          <strong>Construyendo la app.</strong> Diseño, funcionalidades base,
          contenido devocional inicial.
        </li>
        <li>
          <strong>Formalizando la Asociación Civil.</strong> Kairós se
          constituirá como A.C. sin fines de lucro en México, para que
          nunca sea una empresa que busque lucrar con la fe de nadie.
        </li>
        <li>
          <strong>Escuchando a la comunidad.</strong> La lista de espera
          existe justamente para eso: reunir a las primeras personas que
          nos ayudarán a decidir cómo se ve, cómo suena y cómo se siente
          Kairós.
        </li>
      </ul>

      <h2>Nuestras promesas.</h2>
      <p>Prometemos, hasta donde podamos y hasta donde nos alcance:</p>
      <ul>
        <li>
          <strong>Que la versión esencial siempre será gratis.</strong> Sin
          paywalls entre nadie y la Palabra.
        </li>
        <li>
          <strong>Que nunca venderemos tus datos.</strong> Ni ahora, ni
          cuando seamos más grandes, ni bajo presión de un inversionista.
          De hecho, no queremos ese tipo de inversionistas.
        </li>
        <li>
          <strong>Que respetaremos tu tradición.</strong> Kairós no
          pertenece a ninguna denominación en particular. Buscamos servir
          con humildad a católicos, protestantes, ortodoxos y a quienes
          apenas están explorando la fe.
        </li>
        <li>
          <strong>Que priorizaremos calidad sobre velocidad.</strong>{' '}
          Preferimos tardar más y hacer algo hermoso, a lanzar rápido y
          hacer algo mediocre.
        </li>
      </ul>

      <h2>Qué queremos construir.</h2>
      <p>
        Una app bíblica que se sienta como abrir un libro antiguo, no como
        deslizar un feed. Con lecturas diarias que respiren, planes que
        acompañen —no que presionen—, una comunidad discreta de amigos con
        los que puedas caminar en la fe, y un diseño que le devuelva a lo
        sagrado su lugar en lo cotidiano.
      </p>
      <p>
        Queremos que Kairós sea un espacio pequeño pero muy bien hecho.
      </p>

      <h2>Cómo puedes ayudar.</h2>
      <p>
        Si crees en esta visión y quieres acompañar el proyecto, puedes:
      </p>
      <ul>
        <li>
          <strong>Suscribirte al waitlist.</strong> Los primeros 500 tendrán
          acceso anticipado y voz directa en lo que vamos construyendo.
        </li>
        <li>
          <strong>Compartir el proyecto.</strong> Con amigos, en tu grupo de
          jóvenes, en tu comunidad de fe. Cada persona nueva importa.
        </li>
        <li>
          <strong>Escribirnos.</strong> Ideas, dudas, historias que quieras
          compartir. Leemos todo, respondemos personalmente cuando se puede.
        </li>
      </ul>

      <h2>Un versículo que nos acompaña.</h2>
      <p className="text-italic border-l-2 border-[var(--amber)]/40 py-1 pl-6">
        &ldquo;Todo tiene su tiempo, y todo lo que se quiere debajo del cielo
        tiene su hora.&rdquo;
        <br />
        <span className="mt-2 block text-[14px] not-italic text-[var(--ink-soft)] md:text-[15px]">
          — Eclesiastés 3:1
        </span>
      </p>

      <p className="mt-14 text-[var(--ink-soft)]">
        Gracias por estar aquí, leyendo esto. Que Dios te bendiga.
      </p>
    </LegalLayout>
  );
}
