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
      lastUpdated="30 de septiembre de 2026"
    >
      <section>
        <h2>1. Aceptación de los términos</h2>
        <p>
          Estos términos rigen tu uso de Kairós: el sitio kairoslat.com, la
          lista de espera, la aplicación para iPhone y Android y el panel para
          iglesias. Al usar cualquier parte del servicio, crear una cuenta,
          comentar o publicar, aceptas estas condiciones y nuestro{' '}
          <a href="/privacidad">aviso de privacidad</a>. Si no estás de
          acuerdo con alguna, no continúes usando el servicio.
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
          Kairós es una aplicación bíblica pensada especialmente para jóvenes
          latinoamericanos. Incluye lectura de la Biblia en varias versiones,
          subrayados y guardados, planes de lectura, recordatorios, imágenes
          para compartir versículos y canales donde las iglesias publican
          prédicas, bosquejos y avisos.
        </p>

        <h3>3.2 Gratuidad</h3>
        <p>
          <strong>La versión esencial de Kairós es gratuita para siempre</strong>{' '}
          y no tiene anuncios. No queremos que el dinero sea un obstáculo entre
          nadie y la Palabra. En el futuro podríamos ofrecer funciones
          opcionales, pero lo central siempre estará disponible sin costo.
        </p>

        <h3>3.3 Donativos</h3>
        <p>
          Puedes apoyar el proyecto con donativos voluntarios desde el sitio.
          Mientras Kairós se constituye como asociación civil, los donativos
          los recibe su fundador y se destinan a sostener el proyecto.{' '}
          <strong>Por ahora no son deducibles de impuestos</strong> y, al ser
          voluntarios, no son reembolsables salvo error en el cobro.
        </p>
      </section>

      <section>
        <h2>4. Tu cuenta</h2>
        <p>
          Puedes usar la app sin cuenta; tus datos se quedan en tu teléfono.
          Si creas una cuenta (con tu correo, Google o Apple), te pedimos:
        </p>
        <ul>
          <li>Usar datos verdaderos y un correo que sea tuyo.</li>
          <li>Cuidar el acceso a tu cuenta y avisarnos si alguien más la usa.</li>
          <li>No crear cuentas para suplantar a otras personas o iglesias.</li>
        </ul>
        <p>
          Puedes borrar tu cuenta cuando quieras desde la app, en Perfil. Al
          hacerlo eliminamos tus datos como se describe en el aviso de
          privacidad.
        </p>
      </section>

      <section>
        <h2>5. Comentarios y contenido de la comunidad</h2>

        <h3>5.1 Cero tolerancia al contenido inapropiado</h3>
        <p>
          Kairós es un espacio para edificar. Al comentar o publicar, te
          comprometes a no compartir contenido que:
        </p>
        <ul>
          <li>Sea ofensivo, humillante, violento, sexual o discriminatorio.</li>
          <li>Acose, amenace o exponga datos personales de otra persona.</li>
          <li>Sea spam, publicidad, estafas o enlaces engañosos.</li>
          <li>Infrinja derechos de autor o suplante a alguien.</li>
          <li>Promueva actividades ilegales o dañinas.</li>
        </ul>
        <p>
          <strong>No toleramos este tipo de contenido ni a quien lo publica.</strong>
        </p>

        <h3>5.2 Reportar y bloquear</h3>
        <p>
          En cada comentario y publicación puedes <strong>reportar</strong>{' '}
          contenido inapropiado y <strong>bloquear</strong> a un usuario para
          dejar de ver lo que publica. Los reportes llegan al equipo de la
          iglesia y al equipo de Kairós. Revisamos los reportes y actuamos{' '}
          <strong>en menos de 24 horas</strong>: quitamos el contenido que
          incumpla estas reglas y, cuando corresponde, suspendemos o eliminamos
          la cuenta de quien lo publicó.
        </p>

        <h3>5.3 Tu contenido</h3>
        <p>
          Lo que publicas sigue siendo tuyo. Nos das permiso de mostrarlo
          dentro de Kairós mientras esté publicado. Puedes borrar tus
          comentarios en cualquier momento.
        </p>
      </section>

      <section>
        <h2>6. Canales de iglesias</h2>
        <p>
          Las iglesias que tienen un canal en Kairós y las personas de su
          equipo que publican en él:
        </p>
        <ul>
          <li>
            Declaran representar a esa iglesia y contar con su autorización.
          </li>
          <li>
            Son responsables de lo que publican (prédicas, bosquejos, avisos,
            imágenes y audios) y de tener los derechos para compartirlo.
          </li>
          <li>
            Se comprometen a moderar los comentarios de su canal y atender los
            reportes que reciban.
          </li>
        </ul>
        <p>
          Kairós puede quitar contenido o suspender un canal que incumpla
          estos términos.
        </p>
      </section>

      <section>
        <h2>7. Uso apropiado</h2>
        <p>Además de lo anterior, te pedimos no:</p>
        <ul>
          <li>
            Intentar vulnerar la seguridad del servicio o hacer ingeniería
            inversa del código.
          </li>
          <li>Usar bots o automatizar el uso del servicio sin permiso.</li>
          <li>Suscribir correos que no sean tuyos a la lista de espera.</li>
        </ul>
        <p>
          Si detectamos abuso, podemos suspender o eliminar la cuenta
          involucrada sin previo aviso.
        </p>
      </section>

      <section>
        <h2>8. Propiedad intelectual</h2>

        <h3>8.1 Kairós</h3>
        <p>
          El diseño, código, textos, marca, logotipos e imágenes propias de
          Kairós son propiedad de{' '}
          <strong>Fernando Matías García González</strong> y, una vez
          constituida, de la asociación civil. Están protegidos por las leyes
          de propiedad intelectual mexicanas e internacionales.
        </p>

        <h3>8.2 Textos bíblicos</h3>
        <p>
          La Reina-Valera 1909 es de dominio público. Otras versiones se
          muestran con autorización de sus titulares o a través de servicios
          como YouVersion, y conservan sus derechos y avisos de copyright.
          No puedes copiarlas masivamente ni redistribuirlas fuera de lo que
          permite cada licencia.
        </p>

        <h3>8.3 Uso permitido</h3>
        <p>
          Puedes compartir versículos, imágenes creadas en la app, capturas de
          pantalla y el mensaje del proyecto en redes sociales y con conocidos.
          De hecho, agradecemos que lo hagas.
        </p>
      </section>

      <section>
        <h2>9. Limitación de responsabilidad</h2>

        <h3>9.1 Servicio &ldquo;como es&rdquo;</h3>
        <p>
          Kairós se ofrece &ldquo;como es&rdquo;. Hacemos nuestro mejor
          esfuerzo por mantener el servicio funcionando bien, seguro y
          disponible, pero no garantizamos que esté siempre libre de errores o
          interrupciones.
        </p>

        <h3>9.2 Contenido de terceros</h3>
        <p>
          Las publicaciones de las iglesias y los comentarios de los usuarios
          son responsabilidad de quien los publica, no de Kairós.
        </p>

        <h3>9.3 Alcance de la limitación</h3>
        <p>
          En la medida máxima permitida por la ley,{' '}
          <strong>Fernando Matías García González</strong> (y una vez
          constituida, la asociación civil) no será responsable por daños
          indirectos, incidentales o consecuentes derivados del uso o la
          imposibilidad de uso del servicio.
        </p>
      </section>

      <section>
        <h2>10. Contenido devocional</h2>
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
        <h2>11. Menores de edad</h2>
        <p>
          Kairós es un espacio abierto a personas de todas las edades. Si eres
          menor de 18, te pedimos usar el servicio con el conocimiento de tu
          papá, mamá o tutor legal. Al crear una cuenta o comentar,
          manifiestas contar con su conocimiento y consentimiento cuando
          aplique.
        </p>
      </section>

      <section>
        <h2>12. Modificaciones</h2>
        <p>
          Podemos actualizar estos términos ocasionalmente. La versión vigente
          siempre estará publicada aquí, con la fecha de última actualización
          visible arriba. Si hacemos cambios importantes, te avisaremos en la
          app o por correo antes de que entren en vigor.
        </p>
      </section>

      <section>
        <h2>13. Ley aplicable y jurisdicción</h2>
        <p>
          Estos términos se rigen por las leyes de los Estados Unidos
          Mexicanos. Para cualquier controversia relacionada con el servicio,
          las partes se someten a la jurisdicción de los tribunales
          competentes de Cancún, Quintana Roo, México, renunciando a
          cualquier otro fuero que pudiera corresponderles.
        </p>
      </section>

      <section>
        <h2>14. Contacto</h2>
        <p>
          Para cualquier pregunta, reporte o queja sobre estos términos,
          escríbenos a{' '}
          <a href="mailto:hola@kairoslat.com">
            hola@kairoslat.com
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
