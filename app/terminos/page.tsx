// app/terminos/page.tsx
import type { Metadata } from 'next';
import { LegalLayout } from '@/components/legal-layout';

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description:
    'Las reglas del juego para usar Kairós. Claras, sin trampa y en tu idioma.',
};

export default function TerminosPage() {
  return (
    <LegalLayout
      title="Términos y condiciones."
      lastUpdated="7 de julio de 2026"
    >
      <section>
        <h2>1. Aceptación de los términos</h2>
        <p>
          Estos términos rigen tu uso de Kairós (el sitio, la lista de espera
          y —eventualmente— la aplicación). Al suscribirte al waitlist o usar
          cualquier parte del servicio, aceptas estas condiciones. Si no estás
          de acuerdo con alguna, no continúes usando el servicio.
        </p>
      </section>

      <section>
        <h2>2. Operador del servicio</h2>

        <h3>2.1 Responsable actual</h3>
        <p>
          Kairós es actualmente un proyecto operado por{' '}
          <strong>Fernando Matías García González</strong>, persona física con
          residencia en Cancún, Quintana Roo, México.
        </p>

        <h3>2.2 Constitución como A.C.</h3>
        <p>
          El proyecto está en proceso de constituirse como Asociación Civil
          sin fines de lucro. Cuando esta constitución se complete, estos
          términos se actualizarán para reflejar la nueva estructura legal.
        </p>
      </section>

      <section>
        <h2>3. Descripción del servicio</h2>

        <h3>3.1 Qué es Kairós</h3>
        <p>
          Kairós es una aplicación bíblica en desarrollo, pensada especialmente
          para jóvenes latinoamericanos que buscan conectar con la fe
          cristiana de manera cercana, honesta y sin complicaciones.
        </p>

        <h3>3.2 Gratuidad</h3>
        <p>
          <strong>La versión esencial de Kairós será gratuita para siempre.</strong>{' '}
          No queremos que el dinero sea un obstáculo entre nadie y la Palabra.
          En el futuro podríamos ofrecer funcionalidades opcionales de pago o
          donaciones voluntarias para sostener el proyecto, pero lo central
          siempre estará disponible sin costo.
        </p>
      </section>

      <section>
        <h2>4. Lista de espera</h2>
        <p>Al suscribirte al waitlist, aceptas que:</p>
        <ul>
          <li>Proporcionas un correo electrónico válido y propio.</li>
          <li>
            Podemos enviarte información sobre el lanzamiento y desarrollo de
            Kairós, con baja frecuencia y sin spam.
          </li>
          <li>
            Puedes cancelar tu suscripción en cualquier momento
            escribiéndonos.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Uso apropiado</h2>

        <h3>5.1 Buenas prácticas</h3>
        <p>Confiamos en que usarás Kairós con buenas intenciones. Te pedimos no:</p>
        <ul>
          <li>
            Suscribir correos que no sean tuyos o sin autorización de sus
            titulares.
          </li>
          <li>
            Intentar vulnerar la seguridad del sitio, romper el formulario o
            hacer ingeniería inversa del código.
          </li>
          <li>
            Usar el servicio para promover discurso de odio, discriminación o
            cualquier actividad ilegal.
          </li>
          <li>Suplantar la identidad de otras personas u organizaciones.</li>
        </ul>

        <h3>5.2 Consecuencias del abuso</h3>
        <p>
          Si detectamos abuso, podemos eliminar los datos del suscriptor
          infractor sin previo aviso.
        </p>
      </section>

      <section>
        <h2>6. Propiedad intelectual</h2>

        <h3>6.1 Contenido del sitio</h3>
        <p>
          Todo el contenido del sitio (diseño, código, textos, ilustraciones,
          marca, logotipos, imágenes) es propiedad de{' '}
          <strong>Fernando Matías García González</strong> y, una vez
          constituida, de <strong>Kairós A.C.</strong> Está protegido por las
          leyes de propiedad intelectual mexicanas e internacionales.
        </p>

        <h3>6.2 Textos bíblicos</h3>
        <p>
          Los textos bíblicos que eventualmente incluyamos en la app se
          publicarán con licencia clara y respetando los derechos de sus
          editores o titulares, según cada versión.
        </p>

        <h3>6.3 Uso permitido</h3>
        <p>
          Puedes compartir libremente el sitio, capturas de pantalla y el
          mensaje del proyecto en redes sociales y con conocidos. De hecho,
          agradecemos que lo hagas.
        </p>
      </section>

      <section>
        <h2>7. Limitación de responsabilidad</h2>

        <h3>7.1 Servicio &ldquo;como es&rdquo;</h3>
        <p>
          Kairós se ofrece &ldquo;como es&rdquo;. Hacemos nuestro mejor
          esfuerzo por mantener el servicio funcionando bien, seguro y
          disponible, pero no garantizamos que esté siempre libre de errores,
          interrupciones o vulnerabilidades. Usarás el servicio bajo tu propia
          responsabilidad.
        </p>

        <h3>7.2 Alcance de la limitación</h3>
        <p>
          En la medida máxima permitida por la ley,{' '}
          <strong>Fernando Matías García González</strong> (y una vez
          constituida, <strong>Kairós A.C.</strong>) no será responsable por
          daños indirectos, incidentales o consecuentes derivados del uso o la
          imposibilidad de uso del servicio.
        </p>
      </section>

      <section>
        <h2>8. Contenido devocional</h2>
        <p>
          Kairós comparte contenido bíblico y devocional con el mayor cuidado
          y respeto por la tradición cristiana. Sin embargo, entendemos que la
          fe es un camino profundamente personal. El contenido que ofrecemos
          <strong> no sustituye</strong> orientación pastoral, terapéutica,
          médica ni legal que puedas necesitar. Si estás pasando por un
          momento difícil, te animamos a buscar también apoyo profesional o
          de tu comunidad de fe.
        </p>
      </section>

      <section>
        <h2>9. Menores de edad</h2>
        <p>
          Kairós es un espacio abierto a personas de todas las edades. Si eres
          menor de 18, te pedimos usar el servicio con el conocimiento de tu
          papá, mamá o tutor legal. Al suscribirte, manifiestas contar con su
          conocimiento y consentimiento cuando aplique.
        </p>
      </section>

      <section>
        <h2>10. Modificaciones</h2>
        <p>
          Podemos actualizar estos términos ocasionalmente. La versión vigente
          siempre estará publicada aquí, con la fecha de última actualización
          visible arriba. Si hacemos cambios importantes, te avisaremos por
          correo antes de que entren en vigor.
        </p>
      </section>

      <section>
        <h2>11. Ley aplicable y jurisdicción</h2>
        <p>
          Estos términos se rigen por las leyes de los Estados Unidos
          Mexicanos. Para cualquier controversia relacionada con el servicio,
          las partes se someten a la jurisdicción de los tribunales
          competentes de Cancún, Quintana Roo, México, renunciando a
          cualquier otro fuero que pudiera corresponderles.
        </p>
      </section>

      <section>
        <h2>12. Contacto</h2>
        <p>
          Para cualquier pregunta, comentario o queja sobre estos términos,
          escríbenos a{' '}
          <a href="mailto:fernandomgarcia373@gmail.com">
            fernandomgarcia373@gmail.com
          </a>
          . Respondemos personalmente.
        </p>
      </section>

      <p className="legal-outro">
        Gracias por leer hasta aquí. Sabemos que estos textos rara vez se
        leen, pero decidimos escribirlos como si sí, porque queremos que la
        confianza sea mutua desde el inicio.
      </p>
    </LegalLayout>
  );
}
