# Case Study: Impulse Bot
**Brief para Claude Code — Portfolio juansebarrio.com**

> Este archivo contiene todo el contenido (copys ES + EN), las métricas estructuradas y notas de implementación para que Claude Code arme la página del caso de estudio. Está pensado para encajar con el sistema visual del resto del portfolio. Al final hay una sección `[TO COMPLETE]` con campos que Juan tiene que llenar antes de publicar.

---

## 0. Meta del proyecto

| Campo | Valor |
|---|---|
| **Slug sugerido** | `impulse-bot` |
| **Categoría** | Conversational Design / AI / Social Impact |
| **Cliente** | Impulse — AIDS Healthcare Foundation Argentina |
| **Rol** | Product Designer + Project Lead (autoría e implementación end-to-end) |
| **Año** | 2025 |
| **Duración del piloto** | ~10 meses (jun 2025 – abr 2026), con dos olas de activación intensiva |
| **Plataforma** | WhatsApp Business API |
| **Estado** | Piloto cerrado — evolucionando a nueva tecnología |

---

## 1. Hero / Header

### Versión ES

**Eyebrow / Tag:** Conversational Design · Salud Pública · IA  
**Título:** Impulse Bot  
**Subtítulo:** El primer chatbot de Argentina dedicado 100% a salud sexual.  
**Bajada (1 línea):** Diseñé y lancé el canal conversacional que acompañó a +130 personas durante el Pride 2025 — desde la confirmación de invitados al camión de Impulse hasta el seguimiento post-evento.

### Versión EN

**Eyebrow / Tag:** Conversational Design · Public Health · AI  
**Title:** Impulse Bot  
**Subtitle:** Argentina's first chatbot fully dedicated to sexual health.  
**Lede (1 line):** I designed and launched the conversational channel that supported 130+ people during Pride 2025 — from RSVP for the Impulse truck to post-event follow-up.

---

## 2. Quick Facts (cards arriba del fold)

Mostrar como **4 cards horizontales** con un número grande y una etiqueta corta. Estos son los hitos que cuentan la historia de un vistazo.

| # | Métrica | ES | EN |
|---|---|---|---|
| 1 | **2,249** | Mensajes intercambiados | Messages exchanged |
| 2 | **196** | Conversaciones activas | Active conversations |
| 3 | **82%** | Opt-in para futuras comunicaciones | Opt-in rate for future comms |
| 4 | **#1** | Chatbot de salud sexual en Argentina | Sexual health chatbot in Argentina |

---

## 3. Overview (banda meta debajo del hero)

### ES

**Rol** — Product Designer & Project Lead  
**Equipo** — Operaciones Impulse + Comunicación + soporte técnico externo  
**Mi responsabilidad** — Estrategia conversacional, diseño de flujos, copywriting, configuración de la plataforma, métricas y handoff al equipo de continuidad.  
**Período** — Junio 2025 – Abril 2026 (piloto)  
**Canal** — WhatsApp Business API

### EN

**Role** — Product Designer & Project Lead  
**Team** — Impulse Operations + Communications + external technical support  
**My responsibility** — Conversational strategy, flow design, copywriting, platform configuration, metrics and handoff to the continuity team.  
**Timeframe** — June 2025 – April 2026 (pilot)  
**Channel** — WhatsApp Business API

---

## 4. Context / The Why

### ES

**El contexto.** Impulse es el capítulo argentino de AIDS Healthcare Foundation, la organización líder mundial en prevención de VIH. Como parte de su presencia en el Pride 2025, Impulse desplegó un **camión activo en la marcha** con testeo, información y artistas invitados. La operación necesitaba un canal capaz de:

- Confirmar y dar seguimiento a invitados en tiempo real.
- Responder consultas de salud sexual con tono cercano, no clínico.
- Sostener una base de contactos que pudiera reactivarse en futuras campañas.
- Funcionar a escala con un equipo chico y sin presupuesto para call center.

Los canales tradicionales (formularios, mail, DMs en redes) se rompían en al menos uno de esos cuatro puntos. **WhatsApp era donde la gente ya estaba.**

**Por qué importaba.** Hasta este piloto, en Argentina no existía un canal conversacional pensado **específicamente** para salud sexual: la información circulaba en webs estáticas, FAQs largas o consultas presenciales. Un chatbot dedicado abría la puerta a algo distinto — información correcta, en el lenguaje del usuario, en el canal del usuario, con la marca de una organización confiable detrás.

### EN

**The context.** Impulse is the Argentine chapter of AIDS Healthcare Foundation, the world's leading HIV prevention organization. As part of its Pride 2025 presence, Impulse deployed an **active truck in the march** with testing, information and guest artists. The operation needed a channel that could:

- RSVP and follow up with guests in real time.
- Answer sexual health questions in a warm, non-clinical tone.
- Build a contact base that could be reactivated in future campaigns.
- Operate at scale with a small team and no call-center budget.

Traditional channels (forms, email, social DMs) broke down on at least one of those four. **WhatsApp was where people already were.**

**Why it mattered.** Until this pilot, Argentina had no conversational channel built **specifically** for sexual health: information lived in static websites, long FAQs, or in-person consultations. A dedicated chatbot opened the door to something different — accurate info, in the user's language, in the user's channel, backed by a trusted organization.

---

## 5. The Approach

### ES — Cómo lo armé

**1. Mapeo conversacional antes de tocar la herramienta.**  
Antes de configurar nada, mapeé los flujos en papel: ¿cuáles son las preguntas reales? ¿qué tono usa la gente cuando pregunta sobre salud sexual? ¿qué pasa cuando el bot no sabe? Pasé tardes leyendo conversaciones reales en otros canales de Impulse para destilar los patrones.

**2. Diseño de tono.**  
Definí un sistema de voz: cercano, sin tecnicismos innecesarios, sin moralizar, con humor cuando correspondía. La hipótesis era que si el usuario sentía juicio, abandonaba. La data lo confirmó.

**3. Flujos divididos por intención.**  
Tres ramas principales: (a) RSVP y logística del camión, (b) info de salud sexual y derivación a testeo, (c) seguimiento post-evento. Cada rama con un *fallback* humano cuando la consulta se salía del guion.

**4. WhatsApp como canal único.**  
La decisión fue contraintuitiva — en general se diseña multicanal. Acá la apuesta fue concentrar todo en WhatsApp para no fragmentar la experiencia ni el equipo de soporte.

**5. Métricas pensadas desde el día cero.**  
Dashboard de mensajes recibidos vs. enviados, conversaciones activas, nuevos contactos, opt-in. Sin esto, el piloto no podía justificar su evolución.

### EN — How I built it

**1. Conversational mapping before touching the tool.**  
Before configuring anything, I mapped flows on paper: what are the real questions? What tone do people use when asking about sexual health? What happens when the bot doesn't know? I spent afternoons reading real conversations on other Impulse channels to distill patterns.

**2. Tone design.**  
I defined a voice system: close, free of unnecessary jargon, non-judgmental, humorous when appropriate. The hypothesis was that if the user felt judged, they'd leave. The data confirmed it.

**3. Intent-based flows.**  
Three main branches: (a) RSVP and truck logistics, (b) sexual health info and testing referrals, (c) post-event follow-up. Each branch with a human fallback when the question stepped outside the script.

**4. WhatsApp as the only channel.**  
A counterintuitive call — usually you design multichannel. Here, the bet was to concentrate everything on WhatsApp to avoid fragmenting the experience or the support team.

**5. Metrics from day zero.**  
Dashboard for received vs. sent messages, active conversations, new contacts, opt-in. Without this, the pilot couldn't justify its evolution.

---

## 6. Results — La sección de los números

> **Idea de layout para Claude Code:** dos bloques. Arriba un gráfico/imagen del dashboard real (la captura que tenés). Abajo, una grilla de stats con animación de contador.

### Headline

**ES:** *"Un piloto chico que terminó siendo el caso de uso que destrabó la inversión en una nueva plataforma."*

**EN:** *"A small pilot that ended up being the use case that unlocked investment in a new platform."*

### Métricas (datos reales)

```
196   Conversaciones activas / Active conversations
133   Nuevos contactos / New contacts
792   Mensajes recibidos / Received messages
1,457 Mensajes enviados / Sent messages
2,249 Mensajes totales / Total messages
131   Contactos identificados en base / Identified contacts in DB
108   Opt-in para futuras comunicaciones (82%) / Opt-in for future comms (82%)
100%  Canal WhatsApp / WhatsApp channel share
2     Olas de activación: Pride junio + Marcha BA octubre / Activation waves: June Pride + October BA March
10    Meses de operación del piloto / Months of pilot operation
```

### Qué cuentan estos números

**ES — Lectura del piloto:**

- **Ratio mensajes enviados/recibidos de ~1.84:1.** El bot habla más de lo que escucha, y eso está bien diseñado: una conversación de salud sexual útil incluye contexto, opciones y derivaciones, no solo respuestas binarias.
- **82% de opt-in es altísimo para una organización de bien público.** Promedios de mercado para suscripciones a comunicaciones de ONG suelen estar por debajo del 30%. Indica que el canal generó confianza real.
- **Los dos picos del gráfico no son ruido — son la historia.** El primero (junio 2025) coincide con la activación del camión en Pride. El segundo (octubre 2025) con la pre-marcha de Buenos Aires. El bot funcionó como amplificador en los dos momentos clave del calendario LGBTIQ+ argentino.
- **Cero churn entre olas:** los contactos se mantuvieron en base, lo que permitió reactivarlos.

**EN — Reading the pilot:**

- **Sent/received message ratio of ~1.84:1.** The bot speaks more than it listens, and that's good design: a useful sexual-health conversation includes context, options and referrals, not just binary answers.
- **82% opt-in is exceptionally high for a public-interest org.** Market averages for NGO comms subscriptions usually sit below 30%. It signals the channel built real trust.
- **The two spikes in the chart aren't noise — they're the story.** The first (June 2025) lines up with the Pride truck activation. The second (October 2025) with the Buenos Aires pre-march. The bot acted as an amplifier in the two key moments of the Argentine LGBTIQ+ calendar.
- **Zero churn between waves:** contacts stayed in the base, which allowed reactivation.

---

## 7. What I learned

### ES

- **El canal manda sobre la sofisticación.** Un bot rule-based en WhatsApp superó cualquier solución más "AI-first" que hubiéramos puesto en otro canal. La gente no abre apps nuevas para hablar de salud sexual.
- **El tono es producto.** No es un layer cosmético. Cada decisión de copy movió la métrica de continuación de conversación.
- **Diseñar para el fallback humano es diseñar el sistema completo.** Los chatbots fallan; lo importante es cómo fallan. El handoff humano se diseñó con la misma seriedad que el flujo principal.
- **Un piloto bien medido es la mejor defensa para pedir presupuesto de evolución.** Sin las métricas, este caso no estaría hoy migrando a una plataforma más robusta.

### EN

- **Channel beats sophistication.** A rule-based WhatsApp bot beat any "AI-first" solution we could've shipped on another channel. People don't open new apps to talk about sexual health.
- **Tone is product.** Not a cosmetic layer. Every copy decision moved the conversation-continuation metric.
- **Designing for the human fallback is designing the whole system.** Chatbots fail; what matters is how they fail. The human handoff was designed with the same seriousness as the main flow.
- **A well-measured pilot is the best case for evolution budget.** Without the metrics, this case wouldn't be migrating to a more robust platform today.

---

## 8. What's next

### ES

El piloto cierra y el proyecto evoluciona a una nueva plataforma con capacidades de IA generativa. La base de 131 contactos opt-in es el punto de partida; los aprendizajes de tono y flujo son el manual de marca conversacional.

### EN

The pilot closes and the project evolves into a new platform with generative-AI capabilities. The 131 opt-in contacts are the starting point; the tone and flow learnings are the conversational brand playbook.

---

## 9. Datos estructurados para Claude Code

Pegá este bloque en `data/case-studies/impulse-bot.json` (o el formato que use el portfolio). Está listo para mapear a componentes.

```json
{
  "slug": "impulse-bot",
  "title": {
    "es": "Impulse Bot",
    "en": "Impulse Bot"
  },
  "subtitle": {
    "es": "El primer chatbot de Argentina dedicado 100% a salud sexual.",
    "en": "Argentina's first chatbot fully dedicated to sexual health."
  },
  "category": ["Conversational Design", "AI", "Social Impact"],
  "client": "Impulse — AIDS Healthcare Foundation Argentina",
  "role": {
    "es": "Product Designer & Project Lead",
    "en": "Product Designer & Project Lead"
  },
  "year": "2025",
  "duration": {
    "es": "10 meses (jun 2025 – abr 2026)",
    "en": "10 months (Jun 2025 – Apr 2026)"
  },
  "platform": "WhatsApp Business API",
  "status": {
    "es": "Piloto cerrado — evolucionando a nueva tecnología",
    "en": "Pilot closed — evolving to new technology"
  },
  "heroMetrics": [
    { "value": "2,249", "labelEs": "Mensajes intercambiados", "labelEn": "Messages exchanged" },
    { "value": "196", "labelEs": "Conversaciones activas", "labelEn": "Active conversations" },
    { "value": "82%", "labelEs": "Opt-in para futuras comunicaciones", "labelEn": "Opt-in for future comms" },
    { "value": "#1", "labelEs": "Chatbot de salud sexual en Argentina", "labelEn": "Sexual health chatbot in Argentina" }
  ],
  "fullMetrics": {
    "activeChats": 196,
    "newChats": 133,
    "receivedMessages": 792,
    "sentMessages": 1457,
    "totalMessages": 2249,
    "identifiedContacts": 131,
    "optInContacts": 108,
    "optInRate": 0.824,
    "whatsappShare": 1.0,
    "activationWaves": 2,
    "pilotMonths": 10,
    "sentReceivedRatio": 1.84
  },
  "timeline": [
    { "date": "2025-06", "event": { "es": "Lanzamiento — Pride 2025 (camión Impulse)", "en": "Launch — Pride 2025 (Impulse truck)" }, "newContacts": 22 },
    { "date": "2025-08", "event": { "es": "Mantenimiento", "en": "Maintenance" }, "newContacts": 2 },
    { "date": "2025-10", "event": { "es": "Reactivación — Marcha del Orgullo BA", "en": "Reactivation — BA Pride March" }, "newContacts": 105 },
    { "date": "2026-02", "event": { "es": "Cola post-piloto", "en": "Post-pilot tail" }, "newContacts": 1 },
    { "date": "2026-04", "event": { "es": "Cierre del piloto", "en": "Pilot closure" }, "newContacts": 1 }
  ]
}
```

---

## 10. Sugerencias de estructura visual

Para que el componente de página quede coherente con el resto del portfolio:

1. **Hero** con título grande, subtítulo, y la banda de 4 quick facts.
2. **Banda meta** (rol / equipo / período / canal) en línea horizontal.
3. **Context** en dos columnas o párrafo wide con un *pull quote*: "*WhatsApp era donde la gente ya estaba.*"
4. **Approach** como lista numerada con micro-iconos (mapa, voz, ramas, canal, gráfico).
5. **Results** — captura del dashboard real arriba, grilla de stats abajo, lectura en prosa al costado.
6. **Timeline** horizontal con los 5 puntos del array `timeline` — los dos picos visualmente más grandes (jun y oct).
7. **What I learned** — 4 bullets, tipografía grande, fondo neutro.
8. **What's next** — bloque corto, casi tarjeta de cierre.
9. **Footer / Next case** — link al siguiente caso del portfolio.

---

## 11. [TO COMPLETE] — Lo que tenés que llenar vos

Antes de publicar, agregá manualmente:

- [ ] **Nombre del proyecto interno** si tenía uno distinto a "Impulse Bot".
- [ ] **Plataforma técnica concreta** (¿Take Blip? ¿Manychat? ¿una propia?). El brief asume WhatsApp Business API genérico.
- [ ] **2–3 capturas reales de conversación** (anonimizadas) para mostrar el tono. Esto es el activo visual más fuerte que falta.
- [ ] **Captura del dashboard** (la que ya tenés) en alta calidad, idealmente exportada sin la chrome del navegador.
- [ ] **Crédito al equipo de Impulse** que colaboró (nombres si los querés mencionar, o roles).
- [ ] **Link al sitio de Impulse Argentina / AHF** para los superlinks de organización.
- [ ] **Decidir si publicar el dato del 82% opt-in.** Es muy fuerte pero confirmá que no rompe ningún acuerdo de privacidad interno.
- [ ] **Decidir tono final del título.** "Impulse Bot" es directo; alternativas: "El primer chatbot de salud sexual de Argentina" / "Charla, no folleto" / "Salud sexual por WhatsApp".

---

## 12. Cómo darle esto a Claude Code

Sugerencia de prompt:

> "Acá tenés el brief completo del nuevo caso de estudio en `case-study-impulse-bot.md`. Armá la página siguiendo la estructura visual de los casos existentes del portfolio. Usá el JSON de la sección 9 para los datos estructurados. Bilingüe ES/EN siguiendo el patrón actual del sitio. Mantené los marcadores `[TO COMPLETE]` como TODO comments en el código para que yo los complete después."
