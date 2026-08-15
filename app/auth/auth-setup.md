# Setup de Auth con Google y Apple en Supabase

Este documento explica cómo configurar los proveedores OAuth (Google y Apple)
en tu proyecto Supabase para que el auth de Kairós funcione.

## Prerequisitos

- Proyecto Supabase creado (ya lo tienes)
- Migraciones 0002 y 0003 aplicadas
- Package `@supabase/ssr` instalado (comando abajo)

---

## Paso 1 — Instalar dependencias

```bash
pnpm add @supabase/ssr
```

Ya tenías `@supabase/supabase-js` para la Server Action del waitlist. Ahora
agregamos el paquete SSR que maneja cookies automáticamente en Next.js.

---

## Paso 2 — Configurar Google OAuth

### 2.1 En Google Cloud Console

1. Ve a https://console.cloud.google.com/
2. Crea un proyecto nuevo llamado "Kairós" (o usa uno existente)
3. En el menú lateral: **APIs & Services → Credentials**
4. Click **+ CREATE CREDENTIALS → OAuth client ID**
5. Si te pide configurar OAuth consent screen primero:
   - User Type: **External**
   - App name: **Kairós**
   - User support email: `fernandomgarcia373@gmail.com`
   - Developer contact: `fernandomgarcia373@gmail.com`
   - Scopes: agrega `email`, `profile`, `openid`
   - Test users: agrega tu correo mientras esté en modo test

6. Volviendo a crear el OAuth client ID:
   - Application type: **Web application**
   - Name: **Kairós Web**
   - Authorized JavaScript origins:
     - `http://localhost:3000`
     - Tu URL de Vercel actual (ej: `https://kairos-xyz.vercel.app`)
     - `https://kairos.lat` (cuando lo tengas)
   - Authorized redirect URIs:
     - `https://<tu-proyecto>.supabase.co/auth/v1/callback`
     - (Sustituye `<tu-proyecto>` con el nombre de tu proyecto Supabase)

7. Click **Create**. Guarda:
   - **Client ID** (algo como `123456-abcdef.apps.googleusercontent.com`)
   - **Client Secret** (algo como `GOCSPX-...`)

### 2.2 En Supabase Dashboard

1. Ve a tu proyecto Kairós → **Authentication → Providers**
2. Encuentra **Google** y click en él
3. Toggle **Enable Google provider**
4. Pega el **Client ID** y **Client Secret** de Google Cloud
5. **Save**

Copia también la **Callback URL** que te muestra Supabase — la necesitas
para verificar que la agregaste correctamente arriba en Google Cloud.

---

## Paso 3 — Configurar Apple OAuth

⚠️ **Advertencia:** Apple Sign In requiere Apple Developer Program (**USD $99/año**).
Si aún no lo tienes, puedes lanzar el MVP solo con Google y agregar Apple después
cuando obtengas el developer account (necesario también para publicar app iOS).

### 3.1 En Apple Developer

1. Ve a https://developer.apple.com/
2. En **Certificates, Identifiers & Profiles**:
   - Crea un **App ID** para Kairós
   - Habilita **Sign In with Apple** en las capabilities
   - Crea un **Services ID** (esto es lo que usarás para web auth)
   - Configura los dominios y return URLs

3. Genera una **Key**:
   - Sign In with Apple habilitada
   - Descarga el archivo `.p8` (una sola vez — guárdalo bien)

4. Necesitarás:
   - **Team ID** (arriba a la derecha de tu cuenta)
   - **Services ID** (el que creaste)
   - **Key ID** (de la key generada)
   - Contenido del archivo `.p8`

### 3.2 En Supabase Dashboard

1. **Authentication → Providers → Apple**
2. Toggle **Enable**
3. Pega Team ID, Services ID, Key ID
4. Pega el contenido del archivo .p8 en Secret Key
5. **Save**

---

## Paso 4 — Configurar Site URL y Redirect URLs en Supabase

1. **Authentication → URL Configuration**
2. **Site URL**: tu URL de producción (ej: `https://kairos.lat` o tu URL de Vercel)
3. **Redirect URLs** (agrégalas todas):
   - `http://localhost:3000/**`
   - `https://<tu-url-vercel>.vercel.app/**`
   - `https://kairos.lat/**` (cuando lo tengas)

---

## Paso 5 — Variables de entorno

En `.env.local` verifica que ya tengas:

```
NEXT_PUBLIC_SUPABASE_URL=https://<tu-proyecto>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_...
```

En Vercel → Environment Variables asegúrate de tener las mismas.

**No necesitas** agregar credenciales de Google/Apple en Next.js — todo el flujo
OAuth pasa por Supabase, no por tu servidor.

---

## Paso 6 — Test local

Con `pnpm dev` corriendo, en la consola del navegador prueba:

```javascript
const { createClient } = await import('/lib/supabase/client');
const supabase = createClient();

// Iniciar sesión con Google
await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: { redirectTo: 'http://localhost:3000/auth/callback' }
});
```

Debe redirigirte a la pantalla de login de Google → autorizas → vuelves al
sitio autenticado.

Para verificar la sesión:

```javascript
const { data: { user } } = await supabase.auth.getUser();
console.log(user);
```

Debe mostrar un objeto con tu email y metadata de Google.

---

## Notas importantes

### Sobre Apple

Si vas a lanzar la app en iOS (que es tu caso), **Apple exige** que si ofreces
otros métodos de auth (Google, email, etc.), también ofrezcas Sign In with Apple.
Sin esto rechazan la app en la revisión.

Por eso el plan es:
1. **MVP web actual**: solo Google (más rápido de configurar)
2. **Antes de submit a App Store**: obtener Apple Developer Program y agregar
   Sign In with Apple

### Sobre el trigger de profiles

La migración 0002 incluye un trigger que crea automáticamente una fila en
`profiles` cada vez que un usuario nuevo se registra en `auth.users`. Esto
significa que después de auth con Google, ya tienes un profile listo con
`display_name` y `avatar_url` extraídos del perfil de Google.

### Sobre RLS

Todas las tablas tienen Row Level Security habilitado. Esto significa que:
- Los perfiles son públicos de leer (para mostrar autores en el futuro)
- Solo el dueño puede modificar su perfil
- Las tablas bíblicas son públicas de leer

Cuando agreguemos marcadores, notas, planes de lectura, cada una tendrá su
propia policy RLS estricta.
