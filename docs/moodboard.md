# Kairós — Rediseño Manuscrito Medieval
## Moodboard, sistema visual y roadmap

---

## 1. La visión, en una frase

**"Un manuscrito iluminado del siglo XXI: la calidez del pergamino con la claridad del diseño contemporáneo."**

Kairós debe sentirse como abrir un libro antiguo que sabe hablar el idioma de hoy. Nada de imitación medieval literal (fake gótico, arcos oscuros), tampoco tech-corporativo (glow radial, headline gigante centrado, gradientes AI). El punto medio: **sobriedad benedictina + un toque de calidez humana + espacio en blanco generoso**.

---

## 2. Referencias visuales

### Manuscritos históricos (para inspiración de composición y detalles)

**Book of Kells (Irlanda, siglo IX)**
- Iniciales iluminadas complejas con marginalia zoomórfica
- Uso maestro del color: rojo bermellón, azul lapislázuli, oro
- Nos interesa: cómo cada página tiene un ancla visual sin caos
- Ver: https://digitalcollections.tcd.ie/collections/ks65hc20t

**Très Riches Heures du Duc de Berry (Francia, s. XV)**
- Miniaturas con paisajes iluminados
- Márgenes decorados sin ahogar el texto
- Nos interesa: la jerarquía tipografía > miniatura > marginalia

**Codex Amiatinus (Northumbria, s. VIII)**
- Sobriedad benedictina, mucho blanco, tinta bruñida
- Nos interesa: la respiración del texto, la mayúscula inicial monumental

**Biblias glosadas medievales**
- Texto principal + comentarios laterales (glosa)
- Marginalia con manitas indicando pasajes
- Nos interesa: la conversación visual entre texto central y márgenes

### Referencias contemporáneas (para inspiración de aplicación al hoy)

**Common Prayer (Shane Claiborne)** — devocionarios modernos con tipografía cálida
**Sacred Ordinary Days** — agenda-devocional con estética honesta y usable
**The Homily** — Substack cristiano con tipografía Playfair y márgenes generosos
**MB Type / Kilotype** — foundries que hacen fuentes con calidez histórica
**Are.na** de Craig Mod — encaje entre libros antiguos y tipografía web
**Recomendación de deep dive:** buscar en Pinterest "medieval bible manuscript spread" y "typographic hierarchy renaissance book"

### Anti-referencias (lo que NO queremos)

- **Nada de fake gótico** (letras Blackletter dramáticas, arcos ojivales, murciélagos)
- **Nada de "cristian branding" corporativo** (Hillsong, Elevation, sanserif genérica azul-blanca)
- **Nada de emojis** en el sitio (ya acordado)
- **Nada de glow radial AI** (lo que ya estamos matando)
- **Nada de gradientes** genéricos
- **Nada de photos stock genéricas** de gente feliz mirando al cielo

---

## 3. Paleta de color ampliada

### Colores actuales (mantener)
- `--ink: #14100D` — negro tinta, fondo dark theme
- `--cream-soft: #F0E6CC` — pergamino claro, fondo light theme
- `--amber: #C9954A` — dorado principal, acentos
- `--amber-deep: #B07E33` — dorado profundo, hover
- `--ink-soft: #8A8478` — gris tibio, secundario
- `--ink-line: #E5DBC1` — líneas divisorias

### Colores nuevos (agregar)

- `--vermilion: #A32E1F` — rojo bermellón medieval, para iniciales iluminadas
- `--lapis: #2B4B7A` — azul lapislázuli, acentos raros y muy puntuales
- `--gold-leaf: #D4A648` — oro más brillante para iluminaciones especiales
- `--parchment-warm: #EDDDB4` — pergamino más cálido para texturas
- `--parchment-shadow: #C9B78E` — sombra del pergamino, para profundidad
- `--ink-brown: #3A2817` — tinta café antigua, alternativa al negro

**Regla de uso:**
- Vermilion y lapis solo para **iniciales iluminadas y ornamentos**, nunca para texto de párrafo
- Amber sigue siendo el color de acento principal (CTAs, links)
- Gold-leaf solo para momentos especiales (versículo destacado, cierre de sección importante)

---

## 4. Sistema tipográfico

### Tipografías actuales (mantener)
- **Fraunces** — display, headlines, cuerpo devocional
- **Cinzel** — small caps, títulos de sección estilo "PRODUCTO / PROYECTO / LEGAL"
- **Cardo** — griego (καιρός) y detalles clásicos
- **Inter Tight** — UI, botones, texto funcional

### Tipografía nueva (agregar)

**EB Garamond** (Google Fonts, gratis)
- Para texto largo de lectura (Aviso de privacidad, Términos, Nosotros, blog futuro, contenido devocional)
- Es la digitalización libre del Garamond, tipografía humanista de 1541
- Más humana y menos "web" que Fraunces para lectura larga
- La usaremos como **tipografía secundaria de cuerpo** en páginas de lectura

**Regla de uso:**
- **Fraunces** para: hero, headlines grandes, títulos de sección grandes
- **Garamond** para: cuerpo de texto largo, artículos, legales
- **Cinzel** para: small caps de encabezados de columna, subtítulos técnicos
- **Cardo** para: pasajes griegos, ornamentos clásicos
- **Inter Tight** para: botones, forms, tags, meta info

---

## 5. Componentes visuales nuevos

### 5.1 Inicial iluminada (Drop cap)
La primera letra de secciones importantes se renderiza como **inicial iluminada**:
- Cuadrada, ocupa 3-4 líneas de alto
- Fondo `--vermilion` con letra `--cream-soft` (rojo con letra clara)
- O al revés: fondo `--parchment-warm` con letra `--vermilion` outline
- Filete decorativo alrededor (línea sutil de 1px en gold-leaf)
- Usar máximo 1 por sección para que no pierda impacto

### 5.2 Marginalia
Comentarios laterales al texto principal:
- Tipografía Cardo itálica, tamaño más chico
- Alineados en el margen izquierdo o derecho
- Un guión largo (—) antes del texto
- Color `--ink-soft`
- Ejemplo: "— del griego κοινωνία, comunión"

### 5.3 Manita indicadora ☞
- SVG de una manita apuntando (estilo grabado del siglo XV)
- Al inicio de un versículo destacado o llamada a la acción textual
- Color `--ink-brown` o `--vermilion`
- Tamaño: 24-32px

### 5.4 Filete decorativo
- Línea divisoria estilo devocional para separar bloques
- Compuesta de: línea corta + pequeño rombo central + línea corta
- SVG en `--ink-line` con centro `--amber`
- Usa entre secciones grandes en lugar de border-top plano

### 5.5 Texturas de pergamino
- Fondo del sitio con textura muy sutil de papel (2-4% de opacidad)
- Al hacer scroll, ligero paralaje
- **Aquí necesitamos tus escaneos:** de un pergamino real, o de páginas de libros viejos con textura

### 5.6 Filigranas / Bordes ornamentales
- Para el hero y secciones destacadas: filete decorativo estilo victoriano/medieval
- SVG minimalista (no caótico)
- Colores: `--amber` outline, `--parchment-shadow` sombra

---

## 6. Composición y layout

### Antes vs Después

**Landing actual (AI-powered look):**
- Todo centrado
- Headline gigante centrado
- Glow radial detrás
- Form al centro
- Simetría perfecta = sensación robótica

**Landing rediseñada (manuscript-inspired):**
- Layout asimétrico controlado (texto a la izquierda, ilustración a la derecha)
- Márgenes generosos con marginalia
- Un ancla visual por sección (no headline gigante, sino escena compuesta)
- Inicial iluminada como punto de entrada
- Sensación de "página de códice", no de "landing page"

### Grid propuesto
- 12 columnas
- Columna central de contenido: 6-8 cols
- Márgenes con marginalia: 1-2 cols cada lado
- Espacio en blanco (whitespace) generoso

---

## 7. Roadmap de migración

### Fase 1 — Fundación (esta semana)
- [ ] Agregar EB Garamond y variables CSS nuevas
- [ ] Crear componentes base: `<DropCap>`, `<Marginalia>`, `<PointingHand>`, `<Filigree>`
- [ ] Aplicar cambios en páginas legales (más fáciles, texto puro) para probar el sistema

### Fase 2 — Landing (próxima semana)
- [ ] Rediseñar Hero: quitar glow, hacer layout asimétrico, agregar inicial iluminada
- [ ] Rediseñar sección "Amigos"
- [ ] Rediseñar sección "Misiones"
- [ ] Rediseñar sección "La Llama"
- [ ] Rediseñar sección "Tradiciones"
- [ ] Rediseñar Final CTA
- [ ] Rediseñar Nav

### Fase 3 — Ilustraciones y fotos (paralelo)
- [ ] Tú produces: fotos de velas reales, biblias, manos escribiendo, paisajes de Cancún
- [ ] Tú escaneas: texturas de papel, pergamino, tintas
- [ ] Yo integro: cada imagen la procesamos y colocamos con blend modes correctos
- [ ] Contratar o crear ilustraciones a mano (línea suelta, tinta) para los momentos que necesiten toque humano

### Fase 4 — Pulido (después)
- [ ] Micro-animaciones sutiles (una vela que parpadea muy suave, texto que aparece letra por letra en algunos casos)
- [ ] OG image rediseñada con el nuevo sistema
- [ ] Favicon con la nueva estética

---

## 8. Qué material necesito de ti

### Prioridad alta (esta semana)
- **1-2 texturas de pergamino / papel viejo** — escaneadas a alta resolución (300 dpi mínimo)
- **1 foto de una vela real** — tuya, con encuadre íntimo, luz cálida
- **1 foto de una biblia abierta** — sin denominación visible, encuadre cercano a las páginas

### Prioridad media (próximas 2 semanas)
- **Fotos de tus manos escribiendo/subrayando** — estilo devocional
- **1 foto del mar de Cancún al amanecer** — el "καιρός" del inicio del día
- **1 foto de arquitectura sagrada** que te guste (una capilla, un vitral, un detalle)

### Prioridad baja (backlog)
- Colección de referencias de manuscritos que te gusten (screenshots o links)
- Ilustraciones a línea si tienes algún artista amigo que las pueda hacer

### Formato para enviármelas
- Arrastrarlas al chat directamente
- Nombrarlas descriptivamente: `vela-01.jpg`, `pergamino-textura-01.jpg`
- Si tienes preferencia de dónde va cada una, dímelo. Si no, yo propongo ubicación.

---

## 9. Referencias externas para inspirarte

**Cuentas de IG / X para seguir para inspiración:**
- @sacredordinarydays
- @wordonfire
- @typewolf (referencia tipográfica general)
- @manuscriptdiary (manuscritos históricos)

**Libros para hojear:**
- "The Art of the Book" — Colin Franklin
- "Bibliophilia" — Michael Bhaskar
- "Illuminated Manuscripts" — Christopher De Hamel

**Pinterest boards para explorar:**
- Buscar: "medieval manuscript book design"
- Buscar: "renaissance printing typography"
- Buscar: "devotional book layout modern"

---

## 10. Filosofía de diseño

Cada decisión visual en Kairós debe pasar estos filtros:

1. **¿Se siente hecho por una persona, no por un algoritmo?**
2. **¿Respira, o está saturado?**
3. **¿Es específico de Kairós, o podría ser cualquier startup?**
4. **¿Un joven cristiano de 22 años sentiría orgullo de compartirlo?**
5. **¿Un abuelo devoto lo entendería sin explicación?**

Si un elemento no pasa los 5 filtros, se rediseña o se quita.

---

*Última actualización del moodboard: 7 de julio de 2026*
