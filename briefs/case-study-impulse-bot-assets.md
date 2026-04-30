# Case Study: Impulse Bot — Assets & Visual System
**Complemento del brief — pegar al lado de `case-study-impulse-bot.md`**

> Este archivo documenta los assets visuales del proyecto. Va junto al brief principal en `briefs/`. Las imágenes/PDFs deberían moverse a `public/case-studies/impulse-bot/` siguiendo la estructura sugerida abajo.

---

## 0. Resumen narrativo (importante para Claude Code)

El chatbot tiene un **sistema visual propio** centrado en dos personajes mascota: **Indetectable** (azul) e **Intransmisible** (rojo). No son decoración — son la traducción visual del slogan global de salud pública **U=U (Undetectable = Untransmittable)**: si una persona con VIH tiene carga viral indetectable gracias a tratamiento antirretroviral, el virus es **intransmisible por vía sexual**. Es uno de los mensajes más importantes en prevención del VIH de los últimos 15 años, y suele comunicarse en lenguaje médico denso. Convertirlo en dos personajes amigables que se abrazan, saltan y aparecen en WhatsApp es la pieza clave del enfoque "no clínico" del proyecto.

**Implicancia para la página:** este caso de estudio merece una sección dedicada al sistema visual, no solo capturas sueltas. Es lo que diferencia visualmente a este case del resto del portfolio.

---

## 1. Inventario de archivos entregados

| # | Archivo entregado | Tipo | Qué es |
|---|---|---|---|
| 1 | `dashboard_ong.png` | PNG | Captura del **flujo conversacional completo** del bot, en la herramienta de construcción. Muestra nodos, ramas, mensajes, opciones de teclado. |
| 2 | `chatbot_Personajes.pdf` | PDF (5 páginas) | **Manual de personajes** completo: portada, explicación del concepto U=U, hojas de expresiones de cada personaje, poses en duo. |
| 3 | `chatbot_impulse_portada.jpeg` | JPEG | **Portada / hero**: ambos personajes abrazados con título "INDETECTABLE & INTRANSMISIBLE" sobre fondo naranja-rosa. |
| 4 | `chatbot_impulse_pj1.jpeg` | JPEG | Personaje **Indetectable** (azul) — pose neutral / cara seria. |
| 5 | `chatbot_impulse_pj2.jpeg` | JPEG | Personaje **Intransmisible** (rojo) — pose saludando. |
| 6 | `chatbot_impulse_pj1_y_pj2.jpeg` | JPEG | **Duo en acción**: ambos personajes saltando con los brazos en alto. Muy buen asset para cierre o transición. |

---

## 2. Dónde guardar cada archivo en el proyecto Astro

Estructura recomendada (Astro sirve los archivos de `public/` directamente):

```
portfolio/
└── public/
    └── case-studies/
        └── impulse-bot/
            ├── flow-chart.png                    ← desde dashboard_ong.png
            ├── manual-personajes.pdf             ← desde chatbot_Personajes.pdf
            ├── characters/
            │   ├── duo-cover.jpg                 ← desde chatbot_impulse_portada.jpeg
            │   ├── indetectable-blue.jpg         ← desde chatbot_impulse_pj1.jpeg
            │   ├── intransmisible-red.jpg        ← desde chatbot_impulse_pj2.jpeg
            │   └── duo-jumping.jpg               ← desde chatbot_impulse_pj1_y_pj2.jpeg
            └── dashboard-metrics.png             ← (la captura del dashboard de métricas que ya tenías del brief original)
```

**Nota sobre los nombres:** renombré los archivos a kebab-case en inglés. Es más estándar para proyectos web y Claude Code los va a poder referenciar más fácil.

---

## 3. Detalle por asset y cómo usarlo

### 3.1. `flow-chart.png` (el dashboard del bot)

**Qué muestra:** el árbol completo de decisiones del chatbot. Se ven los nodos `Starting point`, `Global Keywords`, los keyword options con opciones tipo "¿Qué es Impulse?", "¿Qué es AHF?", "Información sobre testeos", "MARCHA 2025!", flujos de PrEP / PEP / preservativos / asesoría legal, manejo de opt-in/opt-out, mensajes de bienvenida y cierre, y derivación humana.

**Por qué es importante:** es la **prueba de la complejidad real** del diseño conversacional. Sin esto, el caso suena chico ("hicimos un bot de WhatsApp"). Con esto, se ve que hay sistema, ramas pensadas, fallbacks, manejo de estados.

**Cómo usarlo en la página:**
- Sección sugerida: **"The Approach" (sección 5 del brief)**, después del punto 1 ("Mapeo conversacional").
- Tratamiento: imagen ancha (full-bleed o 90% del ancho del contenedor), con caption corto.
- **Recomendación fuerte:** que sea **clickeable / con lightbox o zoom**, porque a tamaño normal no se leen los nodos. Si Claude Code puede implementar un viewer con zoom (o simplemente abrir la imagen full-screen al click), mejor.
- Caption sugerido (ES): *"El árbol completo del bot: tres ramas principales, manejo de keywords globales y derivación humana en cada punto de fuga."*
- Caption sugerido (EN): *"The bot's full decision tree: three main branches, global keyword handling, and human handoff at every escape point."*

### 3.2. `manual-personajes.pdf` (el manual de personajes)

**Qué muestra:** las 5 páginas del manual interno: portada, explicación de la metáfora U=U con texto, y tres hojas de expresiones (Indetectable solo, Intransmisible solo, ambos juntos).

**Cómo usarlo:**
- **No embeber el PDF directamente** — pesa más y rompe el flow de lectura.
- Mejor: **link de descarga** ("Descargar el manual de personajes") en la sección de sistema visual, para quien quiera ver más.
- Servir desde `/case-studies/impulse-bot/manual-personajes.pdf`.

### 3.3. `duo-cover.jpg` (la portada con ambos personajes)

**Qué muestra:** ambos personajes abrazados, título "INDETECTABLE & INTRANSMISIBLE" en grande, fondo gradient naranja-rosa.

**Cómo usarlo:**
- **Esta es la imagen hero del caso de estudio.** Reemplaza cualquier hero genérico que tenga el portfolio para este case.
- Si el resto de los cases del portfolio tienen un thumbnail/cover en la grilla principal, **usar esta** también ahí.
- Tratamiento: full-width arriba del título, o como background con overlay si el sistema del portfolio lo pide.

### 3.4. `indetectable-blue.jpg` y `intransmisible-red.jpg`

**Qué muestran:** cada personaje individual.

**Cómo usarlos:**
- En la sección nueva **"Visual System / Sistema visual"** (ver sección 4 abajo).
- Tratamiento: dos columnas, uno al lado del otro, con sus nombres y una breve explicación.
- Idealmente con **transparent background** — si los JPGs vienen con fondo blanco, vale la pena hacer una versión PNG con fondo transparente. Si Claude Code puede sugerir el procesamiento, mejor.

### 3.5. `duo-jumping.jpg` (los dos saltando)

**Qué muestra:** los personajes en pose celebratoria, brazos arriba.

**Cómo usarlo:**
- **Asset de cierre.** Ideal para la sección **"What's next"** (sección 8 del brief) o como separador antes del footer.
- Funciona como ilustración de "logro / proyecto exitoso" sin ser cursi.

---

## 4. Nueva sección a agregar al case study: "Visual System"

Esta sección **no estaba en el brief original** porque no tenía estos assets. **Hay que agregarla.** Va entre la sección 5 (Approach) y la 6 (Results).

### Versión ES

**Título:** Sistema visual: hacer humanos a "Indetectable" e "Intransmisible"

**Copy:**

> Para que un chatbot de salud sexual funcione, primero hay que desarmar el lenguaje de la salud pública. La gente no entra a una conversación con la palabra *"undetectable viral load"* en la cabeza — entra con dudas, vergüenzas, urgencias.
>
> El sistema visual del bot se construyó alrededor de **dos personajes que personifican el slogan global U=U (Undetectable = Untransmittable)**: si una persona con VIH tiene carga viral indetectable gracias a su tratamiento, el virus es intransmisible por vía sexual. Es uno de los mensajes más potentes de la prevención moderna, y casi siempre se comunica en lenguaje médico.
>
> **Indetectable** (azul) llegó primero. **Intransmisible** (rojo) seis meses después — el tiempo real que el tratamiento necesita para volverse intransmisible. Son gemelos. Se abrazan. Saltan. Tienen miedo, dudan, celebran. Aparecen en WhatsApp y rompen la idea de que hablar de VIH tiene que ser solemne.

> *"Los gemelos no son un sticker pack. Son una decisión de producto: si la marca no asusta, la conversación sigue."*

### Versión EN

**Title:** Visual system: making "Undetectable" and "Untransmittable" human

**Copy:**

> For a sexual-health chatbot to work, you first have to dismantle the language of public health. People don't enter a conversation with the words *"undetectable viral load"* on their mind — they enter with doubts, shame, urgency.
>
> The bot's visual system was built around **two characters that personify the global U=U slogan (Undetectable = Untransmittable)**: when a person with HIV has an undetectable viral load thanks to treatment, the virus is sexually untransmittable. It's one of the most powerful messages in modern prevention, and it's almost always communicated in clinical language.
>
> **Undetectable** (blue) came first. **Untransmittable** (red) followed six months later — the real time that treatment needs to become untransmittable. They're twins. They hug, they jump, they're afraid, they doubt, they celebrate. They show up in WhatsApp and break the idea that talking about HIV has to be solemn.

> *"The twins aren't a sticker pack. They're a product decision: if the brand doesn't scare you, the conversation continues."*

### Layout sugerido para esta sección

```
[Section title]

[Copy, two-column or wide single column]

[Image grid:
 ┌────────────────┬────────────────┐
 │ indetectable-  │ intransmisible-│
 │ blue.jpg       │ red.jpg        │
 │ "Indetectable" │ "Intransmisible"│
 │ Caption ES/EN  │ Caption ES/EN  │
 └────────────────┴────────────────┘
]

[Pull quote in large type]

[Optional: link to download manual-personajes.pdf]
```

---

## 5. Asset attribution / créditos

⚠️ **Importante para verificar antes de publicar:** los personajes "Indetectable e Intransmisible" pueden ser creación gráfica de otra persona del equipo de Impulse, no necesariamente tuya. El caso de estudio debería:

- [ ] Aclarar qué hiciste vos (estrategia conversacional, flujos, copy, implementación, métricas) y qué hizo el equipo de diseño gráfico (los personajes).
- [ ] Si los personajes son de un/a ilustrador/a específico, mencionarle el crédito.
- [ ] Si son creación interna de Impulse / AHF, mencionar a la organización.

Sugerencia de crédito al pie de la sección visual:

> *"Sistema de personajes diseñado por [nombre / equipo de Impulse]. Integración conversacional y aplicación al producto: por mí."*

---

## 6. Prompt actualizado para Claude Code

Pegale a Claude Code esto (reemplaza al prompt anterior):

> Tengo dos archivos en `briefs/`:
> 1. `case-study-impulse-bot.md` — el brief principal con copys, métricas y estructura.
> 2. `case-study-impulse-bot-assets.md` — el inventario de assets visuales y cómo usarlos.
>
> Antes de tocar nada, leé ambos archivos completos y explorá cómo están armados los casos de estudio existentes en este portfolio Astro (estructura en `src/`, content collections si las usa, layouts, sistema de imágenes optimizadas con `astro:assets`, etc.).
>
> Después:
>
> 1. Movemé los assets que voy a poner en `briefs/assets-impulse/` (o donde te diga) a `public/case-studies/impulse-bot/` siguiendo la estructura de la sección 2 del archivo de assets, renombrándolos según corresponda.
> 2. Creá la página del caso "Impulse Bot" replicando el patrón visual de los casos existentes, **agregando la nueva sección "Visual System"** descrita en la sección 4 del archivo de assets (entre Approach y Results).
> 3. Usá el JSON de la sección 9 del brief principal para los datos estructurados.
> 4. Para `flow-chart.png` implementá un visor con zoom o lightbox al click — la imagen es muy detallada y a tamaño normal no se lee.
> 5. Usá `duo-cover.jpg` como hero/cover del caso (y como thumbnail en la grilla principal del portfolio si aplica).
> 6. Dejá los `[TO COMPLETE]` de la sección 11 del brief y los créditos pendientes (sección 5 del archivo de assets) como comentarios `TODO` en el código.
> 7. Mostrame el plan completo (qué archivos vas a crear, dónde, qué archivos vas a mover/renombrar) **antes** de tocar nada.

---

## 7. Checklist final antes de pasarle el prompt a Claude Code

- [ ] Mover los 6 archivos entregados a una carpeta accesible desde el proyecto. Sugerencia: crear `briefs/assets-impulse/` y meterlos ahí, así Claude Code los toma de un lugar conocido.
- [ ] Decidir el crédito de los personajes (ver sección 5).
- [ ] Confirmar que querés la sección "Visual System" en español + inglés (o solo uno).
- [ ] Tener a mano la captura del **dashboard de métricas** (la del primer mensaje, con los 196/133/792/1457/2249) — esa va separada y se llama `dashboard-metrics.png` en la estructura.
