// app/privacidad/page.tsx
import type { Metadata } from 'next';
import { LegalLayout } from '@/components/legal-layout';

export const metadata: Metadata = {
  title: 'Aviso de privacidad',
  description:
    'Cómo cuidamos tus datos en Kairós. Con transparencia y en tu idioma.',
};

export default function PrivacidadPage() {
  return (
    <LegalLayout
      title="Aviso de privacidad."
      lastUpdated="7 de julio de 2026"
    >
      <section>
        <h2>1. Responsable de tus datos</h2>

        <h3>1.1 Identidad del responsable</h3>
        <p>
          <strong>Fernando Matías García González</strong>, persona física con
          residencia en Cancún, Quintana Roo, México, es el responsable actual
          del tratamiento de tus datos personales.
        </p>

        <h3>1.2 Constitución como A.C.</h3>
        <p>
          Kairós se encuentra en <em>proceso de constitución</em> como
          Asociación Civil sin fines de lucro. Una vez formalizada, este aviso
          se actualizará para reflejar el nuevo responsable, con fecha visible
          del cambio. Mientras tanto, la responsabilidad legal la asume
          directamente Fernando Matías García González.
        </p>

        <h3>1.3 Contacto</h3>
        <p>
          Para cualquier tema relacionado con tus datos, escríbenos a{' '}
          <a href="mailto:fernandomgarcia373@gmail.com">
            fernandomgarcia373@gmail.com
          </a>
          . Respondemos personalmente en máximo 20 días hábiles, como marca la
          ley.
        </p>
      </section>

      <section>
        <h2>2. Datos que recopilamos</h2>

        <h3>2.1 Etapa actual (lista de espera)</h3>
        <p>Hoy solo guardamos:</p>
        <ul>
          <li>
            <strong>Tu correo electrónico.</strong> Para avisarte cuando Kairós
            esté listo y compartirte novedades importantes del desarrollo.
          </li>
          <li>
            <strong>Origen del registro.</strong> Desde qué sección del sitio
            te suscribiste (hero, cierre, etc.), para entender qué mensajes
            conectan mejor.
          </li>
          <li>
            <strong>Parámetros de campaña (UTMs).</strong> Si llegaste desde
            una red social o campaña, guardamos esa referencia.
          </li>
          <li>
            <strong>Datos técnicos anónimos.</strong> Un hash irreversible de
            tu IP (no la IP en sí) y una versión resumida de tu navegador,
            únicamente para proteger el formulario contra spam y bots.
          </li>
        </ul>

        <h3>2.2 Datos que no recopilamos</h3>
        <p>
          <strong>No pedimos</strong> nombre, teléfono, ubicación precisa,
          edad, denominación religiosa ni ningún dato sensible. Cuando lancemos
          la app y necesitemos más información, este aviso se actualizará
          antes de solicitarte cualquier dato adicional.
        </p>
      </section>

      <section>
        <h2>3. Uso de tus datos</h2>

        <h3>3.1 Finalidades primarias</h3>
        <p>Usamos tus datos exclusivamente para:</p>
        <ul>
          <li>Avisarte cuando Kairós esté disponible.</li>
          <li>
            Enviarte novedades relevantes del proyecto (1–2 correos por mes en
            esta etapa).
          </li>
          <li>
            Entender qué mensajes conectan mejor, mediante métricas agregadas
            y anónimas.
          </li>
          <li>Prevenir abuso, fraude y spam en nuestro formulario.</li>
        </ul>

        <h3>3.2 Lo que nunca haremos</h3>
        <p>
          <strong>Nunca</strong> venderemos, alquilaremos ni compartiremos tus
          datos con terceros para fines publicitarios. Nunca.
        </p>
      </section>

      <section>
        <h2>4. Proveedores tecnológicos</h2>

        <h3>4.1 Con quién compartimos</h3>
        <p>
          Para operar el servicio nos apoyamos en proveedores tecnológicos que
          almacenan y procesan datos por nosotros bajo obligaciones
          contractuales de protección:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> (Estados Unidos): almacenamiento seguro
            de la lista de espera.
          </li>
          <li>
            <strong>Vercel</strong> (Estados Unidos): infraestructura de
            hosting.
          </li>
          <li>
            <strong>PostHog</strong> (Estados Unidos / Unión Europea): análisis
            de uso agregado y anónimo.
          </li>
        </ul>

        <h3>4.2 Transferencia internacional</h3>
        <p>
          Todos estos proveedores cuentan con certificaciones reconocidas
          (SOC 2, GDPR) y solo procesan datos siguiendo nuestras instrucciones.
          Al usar Kairós, autorizas esta transferencia internacional necesaria
          para el funcionamiento del servicio.
        </p>
      </section>

      <section>
        <h2>5. Retención</h2>
        <p>
          Guardamos tu correo mientras siga vigente tu interés en Kairós. Si
          te desuscribes o pides borrar tus datos, lo hacemos en máximo 30
          días naturales.
        </p>
      </section>

      <section>
        <h2>6. Derechos ARCO</h2>

        <h3>6.1 Tus derechos</h3>
        <p>
          Según la LFPDPPP, tienes derecho en todo momento a:
        </p>
        <ul>
          <li>
            <strong>Acceder</strong> a los datos que tenemos sobre ti.
          </li>
          <li>
            <strong>Rectificar</strong> los que sean inexactos o incompletos.
          </li>
          <li>
            <strong>Cancelar</strong> tu información de nuestras bases.
          </li>
          <li>
            <strong>Oponerte</strong> al uso que hagamos de tus datos para
            fines específicos.
          </li>
        </ul>

        <h3>6.2 Cómo ejercerlos</h3>
        <p>
          Escríbenos a{' '}
          <a href="mailto:fernandomgarcia373@gmail.com">
            fernandomgarcia373@gmail.com
          </a>{' '}
          con el asunto <em>&ldquo;Derechos ARCO&rdquo;</em>. Respondemos en
          máximo 20 días hábiles, sin costo alguno.
        </p>
      </section>

      <section>
        <h2>7. Menores de edad</h2>

        <h3>7.1 Recomendación general</h3>
        <p>
          Kairós está pensada para personas de todas las edades interesadas en
          la fe cristiana. Si eres menor de 18 años, te recomendamos unirte
          con el conocimiento de tu papá, mamá o tutor legal. En esta etapa
          solo pedimos correo, pero cuando la app requiera más datos,
          solicitaremos consentimiento parental explícito para menores de 15.
        </p>

        <h3>7.2 Padres y tutores</h3>
        <p>
          Si te preocupa que un menor a tu cargo se haya registrado sin tu
          conocimiento, escríbenos y borraremos sus datos de inmediato.
        </p>
      </section>

      <section>
        <h2>8. Seguridad</h2>
        <p>
          Aplicamos medidas técnicas razonables para proteger tus datos:
          cifrado en tránsito (HTTPS/TLS), acceso restringido a la base de
          datos, hashing de identificadores sensibles y prácticas de
          desarrollo seguro. Ningún sistema es infalible, pero hacemos todo lo
          humanamente posible para cuidar lo que nos confías.
        </p>
      </section>

      <section>
        <h2>9. Cambios a este aviso</h2>
        <p>
          Si actualizamos este aviso (por ejemplo, cuando constituyamos la
          A.C. o lancemos la app), publicaremos la versión más reciente aquí,
          con fecha visible en la parte superior. Los cambios importantes te
          los notificaremos por correo.
        </p>
      </section>

      <section>
        <h2>10. Autoridad</h2>
        <p>
          Si consideras que tus derechos no han sido respetados, puedes acudir
          al Instituto Nacional de Transparencia, Acceso a la Información y
          Protección de Datos Personales (INAI):{' '}
          <a
            href="https://home.inai.org.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            home.inai.org.mx
          </a>
          .
        </p>
      </section>

      <p className="legal-outro">
        Gracias por confiarnos tu correo. Lo cuidamos como quisiéramos que
        cuidaran el nuestro.
      </p>
    </LegalLayout>
  );
}
