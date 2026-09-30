// app/privacidad/page.tsx
import type { Metadata } from 'next';
import { LegalLayout } from '@/components/legal-layout';

export const metadata: Metadata = {
  title: 'Aviso de privacidad',
  description:
    'Cómo cuidamos tus datos en Kairós, en el sitio y en la app. Con transparencia y en tu idioma.',
};

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Aviso de privacidad." lastUpdated="30 de septiembre de 2026">
      <section>
        <h2>1. Responsable de tus datos</h2>

        <h3>1.1 Identidad del responsable</h3>
        <p>
          <strong>Fernando Matías García González</strong>, persona física con
          residencia en Cancún, Quintana Roo, México, es el responsable actual
          del tratamiento de tus datos personales en el sitio kairoslat.com y
          en la app Kairós.
        </p>

        <h3>1.2 Constitución como A.C.</h3>
        <p>
          Kairós se encuentra en <em>proceso de constitución</em> como
          Asociación Civil sin fines de lucro. Una vez formalizada, este aviso
          se actualizará para reflejar el nuevo responsable, con fecha visible
          del cambio.
        </p>

        <h3>1.3 Contacto</h3>
        <p>
          Para cualquier tema relacionado con tus datos, escríbenos a{' '}
          <a href="mailto:hola@kairoslat.com">hola@kairoslat.com</a>.
          Respondemos personalmente en máximo 20 días hábiles.
        </p>
      </section>

      <section>
        <h2>2. Datos que recopilamos</h2>

        <h3>2.1 En el sitio web</h3>
        <ul>
          <li>
            <strong>Lista de espera:</strong> tu correo, desde qué parte del
            sitio te registraste y, si llegaste por una campaña, su referencia
            (UTM).
          </li>
          <li>
            <strong>Solicitudes de iglesias:</strong> nombre de la iglesia,
            ciudad y país, nombre y rol de quien escribe, y correo de contacto.
          </li>
          <li>
            <strong>Datos técnicos:</strong> un hash irreversible de tu IP (no
            la IP en sí) y un resumen de tu navegador, solo para proteger los
            formularios contra spam, y métricas agregadas de visitas.
          </li>
        </ul>

        <h3>2.2 En la app, sin cuenta</h3>
        <p>
          Puedes usar Kairós sin crear cuenta. En ese caso, lo que haces en la
          app se guarda <strong>solo en tu teléfono</strong> y no lo recibimos:
          el nombre con el que te saludamos (si lo escribes), dónde te quedaste
          leyendo, tus subrayados y marcadores, tu racha, el progreso de tus
          planes, tus ajustes de lectura y la hora de tu recordatorio. Los
          recordatorios son notificaciones locales de tu teléfono.
        </p>

        <h3>2.3 En la app, con cuenta</h3>
        <p>La cuenta es opcional. Si decides crearla, guardamos:</p>
        <ul>
          <li>
            <strong>Datos de acceso:</strong> tu correo. Si entras con Google,
            también el nombre y la foto de tu perfil de Google que Google nos
            comparte.
          </li>
          <li>
            <strong>Tu progreso</strong>, para respaldarlo y que no lo pierdas
            al cambiar de teléfono: el nombre que escribiste, tus subrayados
            (con el texto del versículo y su color), los días en que leíste,
            el progreso de tus planes y tus ajustes de lectura.
          </li>
        </ul>

        <h3>2.4 Un dato que tratamos con especial cuidado</h3>
        <p>
          Usar una app bíblica puede revelar tu interés en la fe cristiana, y
          la ley mexicana considera las creencias religiosas un{' '}
          <strong>dato sensible</strong>. Por eso: solo lo tratamos si tú
          decides usar Kairós o crear una cuenta, nunca lo compartimos para
          publicidad, y puedes borrar todo cuando quieras (sección 5). Al crear
          tu cuenta nos das tu consentimiento expreso para este tratamiento.
        </p>

        <h3>2.5 Lo que no recopilamos</h3>
        <p>
          No pedimos teléfono, ubicación, contactos, fotos, edad ni
          denominación religiosa. No usamos rastreo publicitario ni seguimos lo
          que haces en otras apps o sitios.
        </p>
      </section>

      <section>
        <h2>3. Para qué usamos tus datos</h2>

        <h3>3.1 Finalidades primarias</h3>
        <ul>
          <li>Darte acceso a tu cuenta y respaldar tu progreso.</li>
          <li>Enviarte el código para iniciar sesión.</li>
          <li>Avisarte cuando abramos la beta o lancemos la app.</li>
          <li>Contactar a las iglesias que pidieron su canal.</li>
          <li>Prevenir abuso, fraude y spam.</li>
        </ul>

        <h3>3.2 Finalidades secundarias</h3>
        <ul>
          <li>
            Enviarte novedades del proyecto (1–2 correos al mes). Puedes
            pedirnos dejar de recibirlas en cualquier momento.
          </li>
          <li>Entender, con métricas agregadas, qué partes del sitio sirven.</li>
        </ul>

        <h3>3.3 Lo que nunca haremos</h3>
        <p>
          <strong>Nunca</strong> venderemos, alquilaremos ni compartiremos tus
          datos con terceros para fines publicitarios. Kairós no tiene
          anuncios.
        </p>
      </section>

      <section>
        <h2>4. Proveedores tecnológicos</h2>
        <p>
          Nos apoyamos en proveedores que procesan datos por nosotros bajo
          obligaciones de protección:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> (Estados Unidos): base de datos, cuentas
            e inicio de sesión.
          </li>
          <li>
            <strong>Resend</strong> (Estados Unidos): envío de correos, como el
            código para entrar.
          </li>
          <li>
            <strong>Google</strong>: solo si eliges entrar con tu cuenta de
            Google.
          </li>
          <li>
            <strong>YouVersion</strong> (Estados Unidos): nos entrega el texto
            de algunas versiones de la Biblia. Le pedimos pasajes, no le
            enviamos datos tuyos.
          </li>
          <li>
            <strong>Vercel</strong> (Estados Unidos): hospedaje del sitio.
          </li>
          <li>
            <strong>PostHog</strong> (Estados Unidos / Unión Europea): métricas
            agregadas del sitio web.
          </li>
        </ul>
        <p>
          Estas transferencias son necesarias para que el servicio funcione.
          Al usar Kairós, las autorizas.
        </p>
      </section>

      <section>
        <h2>5. Cuánto tiempo guardamos tus datos</h2>
        <ul>
          <li>
            <strong>Cuenta:</strong> mientras la tengas. Puedes borrarla desde
            la app en <em>Perfil → Borrar mi cuenta</em>; se eliminan de
            inmediato tu cuenta, subrayados, días de lectura y planes.
          </li>
          <li>
            <strong>En tu teléfono:</strong> hasta que cierres sesión o
            desinstales la app.
          </li>
          <li>
            <strong>Lista de espera y solicitudes de iglesias:</strong>{' '}
            mientras siga vigente tu interés. Si pides borrarlos, lo hacemos en
            máximo 30 días naturales.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Tus derechos ARCO</h2>

        <h3>6.1 Tus derechos</h3>
        <p>Tienes derecho en todo momento a:</p>
        <ul>
          <li><strong>Acceder</strong> a los datos que tenemos sobre ti.</li>
          <li><strong>Rectificar</strong> los que sean inexactos.</li>
          <li><strong>Cancelar</strong> tu información.</li>
          <li><strong>Oponerte</strong> a usos específicos, como las novedades por correo.</li>
        </ul>
        <p>También puedes revocar tu consentimiento en cualquier momento.</p>

        <h3>6.2 Cómo ejercerlos</h3>
        <p>
          Escríbenos a{' '}
          <a href="mailto:hola@kairoslat.com">hola@kairoslat.com</a> con el
          asunto <em>&ldquo;Derechos ARCO&rdquo;</em>. Respondemos en máximo 20
          días hábiles, sin costo.
        </p>
      </section>

      <section>
        <h2>7. Menores de edad</h2>
        <p>
          Kairós es para todas las edades y se puede usar sin cuenta. Si eres
          menor de edad, crea tu cuenta con el conocimiento de tu papá, mamá o
          tutor. Si eres padre, madre o tutor y quieres que borremos los datos
          de un menor a tu cargo, escríbenos y lo hacemos de inmediato.
        </p>
      </section>

      <section>
        <h2>8. Seguridad</h2>
        <p>
          Protegemos tus datos con cifrado en tránsito (HTTPS/TLS), reglas que
          impiden que un usuario vea los datos de otro, acceso restringido a la
          base de datos y hashing de identificadores técnicos. Ningún sistema
          es infalible, pero hacemos todo lo posible para cuidar lo que nos
          confías.
        </p>
      </section>

      <section>
        <h2>9. Cambios a este aviso</h2>
        <p>
          Si actualizamos este aviso (por ejemplo, al constituir la A.C. o al
          sumar funciones como comunidad o canales de iglesias en la app),
          publicaremos aquí la versión más reciente con su fecha. Los cambios
          importantes te los avisaremos por correo o en la app.
        </p>
      </section>

      <section>
        <h2>10. Autoridad</h2>
        <p>
          Si consideras que tus derechos no han sido respetados, puedes acudir
          a la autoridad mexicana de protección de datos personales. Desde
          2025, sus funciones para particulares las ejerce la Secretaría
          Anticorrupción y Buen Gobierno.
        </p>
      </section>

      <p className="legal-outro">
        Gracias por confiarnos tu camino. Lo cuidamos como quisiéramos que
        cuidaran el nuestro.
      </p>
    </LegalLayout>
  );
}
