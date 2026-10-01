// src/escenas/bb/copy.ts
// Copy del caso bb. en los dos idiomas. Las escenas leen de acá; no hay
// texto suelto en los .astro. Los textos del producto recreado (home,
// Unpack, pantalla de crisis) quedan en inglés en ambos idiomas: es lo
// que muestra el producto (lib/copy.ts de juansebarrio/bb).

export type Lang = 'es' | 'en';

export const COPY = {
  es: {
    meta: {
      title: 'bb. — Caso JS80',
      description:
        'Caso bb.: una herramienta de reflexión con IA para gente que vive entre culturas. La voz del modelo diseñada con una prueba detrás de cada decisión.',
      volver: 'volver',
      rail: 'Índice de escenas',
      escena: 'Escena',
    },
    e1: {
      aria: 'Portada',
      eyebrow: 'Caso · JS80',
      brand: 'well adjusted, bb.',
      h1: ['ChatGPT te da una respuesta.', 'bb. entiende', 'por qué es'],
      h1Accent: 'complicado.',
      attribution: 'la línea es de Wided, que lo fundó',
      nudge: 'bajá',
    },
    e2: {
      aria: 'Qué es bb.',
      h2: 'Una herramienta de reflexión con IA para gente que vive entre culturas.',
      rows: [
        'Hijos de inmigrantes, parejas interculturales, gente de la diáspora que carga con expectativas familiares que no entran en el molde occidental.',
        'Se entra desde el teléfono, sin cuenta, y se escribe lo que pasó.',
        'bb. devuelve un Unpack: una lectura de 180 a 320 palabras que abre con la intuición de fondo y desarrolla solo lo que esa situación pide, con un humor seco que se ríe del sistema familiar, nunca de la persona.',
        'Siete modos para seguir, o escribir libre. La conversación se cierra sola a las pocas respuestas: bb. no es un chat abierto.',
      ],
      note: 'Funciona en cinco idiomas. Es el producto de Wided, que se está reentrenando como psicoterapeuta y lo piensa como su próxima carrera.',
    },
    e3: {
      aria: 'La tesis',
      words: ['En', 'bb.,', 'casi', 'todo', 'el', 'valor', 'está', 'en', 'cómo', 'se', 'comporta', 'el'],
      accent: 'modelo.',
      copy: 'Ese comportamiento se diseñó con el mismo rigor que una pantalla. Hay una prueba detrás de cada decisión.',
    },
    e4: {
      aria: 'El encargo',
      eyebrow: 'El encargo',
      h2: 'Wided llegó con casi todo el pensamiento de producto escrito.',
      copy: 'Marca y posicionamiento, un spec de 24 secciones con el copy, la voz y hasta las frases prohibidas, y un handoff técnico con alcance, criterios de aceptación y milestones.',
      secondary:
        'Pedía menos de lo que habíamos propuesto: sin base de datos, sin cuentas, sin historial y sin pagos en el MVP. Dejamos de lado el discovery cotizado y tomamos el build a precio fijo contra ese spec: tres milestones, tres semanas.',
      quote: '“Complexity is not a deliverable.”',
      quoteBy: 'Wided',
      note: 'Una contradicción marcada desde el inicio: sin cuentas, la cuota de tres Unpacks gratis por mes no se puede hacer cumplir.',
    },
    e5: {
      aria: 'La voz',
      eyebrow: 'La voz',
      h2: 'La voz se resolvió antes que las pantallas.',
      copy: 'bb. compite con abrir ChatGPT gratis. La diferencia se tiene que notar en la primera respuesta.',
      panelTag: 'el prompt · tres versiones',
      scenarios: 'escenarios · día uno', // precedido por el contador 9
      v1: { tag: 'v1 · día uno', metric: '8,5 / 10', text: 'Armada con las instrucciones del spec. Probada contra nueve escenarios; tres lecturas a Wided.' },
      chipsLabel: 'lo que pidió Wided',
      chips: ['menos largo', 'más filo', 'abrir directo con la intuición'],
      v2: { tag: 'v2', metric: '500–670 → 220–270 palabras', text: 'Menos largo, más filo. Abre con la intuición.' },
      v3: { tag: 'v3 · escrita por Wided', text: 'Sacó los títulos fijos y le permitió a bb. no estar de acuerdo con cómo la persona cuenta lo que le pasa.' },
      remate: 'Desde acá, cada problema se midió antes de arreglarlo.',
      unpackCaption: 'Un Unpack del set de pruebas. Abre con la intuición de fondo y recién después desarrolla.',
    },
    e6: {
      aria: 'Medido',
      eyebrow: 'Medido',
      h2: 'Cada problema se midió antes de arreglarlo.',
      copy: 'Un tester hostil rechazó una lectura y bb. le dio la razón. En las pruebas cedía en las 24 conversaciones, así que sumamos un clasificador que, antes de responder, distingue si la persona trae un dato nuevo o solo rechaza.',
      stats: [
        { label: 'cierra con una pregunta', before: '16', after: '0', count: null, text: 'de 20 conversaciones. Una regla de cierre.' },
        { label: 'sostiene su lectura', before: '0', after: '23', count: 23, text: 'de 24 ante la segunda objeción. Un clasificador antes de responder.' },
        { label: 'largo de la respuesta', before: '500–670', after: '220–270', count: null, text: 'palabras por respuesta, desde la segunda versión del prompt.' },
      ],
      note: 'El problema abierto: a la tercera objeción todavía cede.',
    },
    e7: {
      aria: 'Seguridad',
      eyebrow: 'Seguridad',
      h2: 'En un producto sobre familia, «mi vieja me va a matar» se escribe todo el tiempo.',
      copy: 'Cada mensaje pasa por la moderación de OpenAI antes de que bb. responda. Hay tres caminos.',
      paths: [
        { tag: 'riesgo alto', text: 'bb. no genera nada. Muestra un texto fijo con recursos de ayuda por país.', accent: true },
        { tag: 'riesgo medio', text: 'Responde sin humor y con más cuidado.', accent: false },
        { tag: 'sin riesgo', text: 'Sigue normal.', accent: false },
      ],
      crisisTag: 'pantalla de crisis · recursos por país',
      crisisNote: 'Los ojos se cierran en la pantalla de crisis. No se genera texto: se muestra uno fijo.',
      claves: [
        { title: 'Umbrales por categoría', text: 'La hipérbole familiar puntúa altísimo en violencia en los cinco idiomas. La violencia nunca dispara la pantalla de crisis.' },
        { title: 'Errar hacia el cuidado', text: 'Para autolesión, Wided eligió errar hacia el cuidado.' },
        { title: 'de 21', text: 'La matriz de pruebas pasa completa. No se guarda nada de lo que la gente escribe.' }, // precedido por el contador 21
      ],
      note: 'El punto flojo conocido: el control coercitivo contado sin lenguaje violento casi no puntúa y hoy depende solo del prompt.',
    },
    e8: {
      aria: 'La capa cultural',
      eyebrow: 'La capa cultural',
      h2: 'Para Wided, bb. todavía leía todo desde un lugar demasiado anglo y occidental.',
      copy: 'Lo comparó con ChatGPT y le pareció eso. La primera idea fue cargarle libros enteros, y la frenamos: el modelo no aprende de lo que le pasás, hay derechos de autor y los manuales de counseling son justamente marcos occidentales. Ella tampoco quiso escribirla sola: la mirada de una persona no alcanza para una cultura. Quedó un método.',
      rows: [
        'Wided busca ensayos en primera persona, escritos desde adentro de una familia o comunidad.',
        'Cada uno se destila con las mismas once preguntas: cómo se muestra el amor sin decirlo, qué se deben las generaciones, qué hizo la migración.',
        'El resumen corto, con palabras propias, entra al prompt con reglas contra el estereotipo.',
      ],
      rulesLabel: 'las reglas',
      rules: ['No deducir el origen de nadie por su nombre', 'Nunca decir «en tu cultura»', 'Patrón, no ley', 'Sin señal clara en el texto, no se usa'],
      statLabel: 'en producción',
      statUnit: 'voces', // precedido por el contador 12
      statText: 'Familias del Magreb, Siria, África occidental, Latinoamérica y el sur de Asia.',
      statNote: 'Una prueba ciega de dieciséis situaciones, con y sin capa, espera que Wided marque cuál entiende mejor.',
    },
    e9: {
      aria: 'Lo visual',
      eyebrow: 'Lo visual',
      h2: 'Wided no dio paleta. Dio adjetivos y prohibiciones.',
      copy: 'De las cuatro direcciones que exploramos salió un riesgo: leyó el núcleo iridiscente de JS80, que estaba en nuestros PDFs, como si fuera la marca de bb. Había que separar la cara del producto de la del estudio. Cuando vio el prototipo andando, verde profundo con una tarjeta de papel, lo eligió en el acto.',
      quote: '“BB IS GORGEOUS”',
      quoteBy: 'Wided, al ver el prototipo',
      claves: [
        { title: 'La marca', text: 'Dos b minúsculas con pupilas que miran, parpadean, guiñan al copiar y se cierran en la pantalla de crisis.' },
        { title: 'La home', text: 'El campo de texto es el protagonista.' },
        { title: 'La lectura', text: 'Cita arriba lo que escribió la persona y aparece de a un párrafo, sin auto-scroll: los primeros usuarios dijeron que las palabras se movían mientras bb. escribía.' },
      ],
    },
    e10: {
      aria: 'Cómo está hecho',
      eyebrow: 'Cómo está hecho',
      h2: 'La conversación vive en el teléfono de la persona y no se guarda en ningún lado.',
      copy: 'Una sola aplicación. El modelo se llama siempre desde el servidor, así que la clave nunca llega al navegador. El gasto se controla con límites por dispositivo y por IP, y un presupuesto mensual con alerta.',
      stats: [
        { value: '0,5 ¢', count: null, prefix: '', suffix: '', text: 'por respuesta, en dólares.' },
        { value: '8', count: 8, prefix: '', suffix: ' de 10', text: 'llamadas aprovechan el prompt en caché.' },
        { value: '100', count: 100, prefix: '< USD ', suffix: '', text: 'por mes para un beta de cien personas.' },
      ],
    },
    e11: {
      aria: 'La entrega',
      eyebrow: 'La entrega',
      h2: 'El plan era de tres semanas. El beta quedó funcionando en cinco días.',
      timeline: [
        { date: 'lun 14 sep', text: 'Arranca el build.' },
        { date: 'vie 18 sep', text: 'Beta completo.' },
        { date: 'sáb 19 sep', text: 'En vivo en welladjustedbb.com.' },
        { date: '≈ 23 sep', text: 'Wided empieza a compartirlo.' },
      ],
      copy: 'Pagó los tres milestones y encargó una segunda etapa, ya entregada: analítica que no registra lo que la gente escribe, captura de emails y un brand sheet. Las cuentas quedan a nuestro nombre mientras trabajemos juntos y se transfieren sin costo el día que lo pida.',
      usersLabel: 'los primeros usuarios',
      usersText: 'Las primeras dos respuestas de la encuesta coinciden en que bb. entiende lo complicado y no suena culturalmente errado. Una persona en pareja intercultural dijo que le encontró un ángulo que ChatGPT nunca le había dado.',
      usersNote: 'La duda es el precio, que comparan con lo que ya pagan por ChatGPT. Wided quiere responderla con los primeros cincuenta a cien usuarios antes de construir cuentas y cobros.',
    },
    e12: {
      aria: 'Cierre',
      h2: 'bb. entiende lo complicado.',
      status: [
        { text: 'BETA EN PRODUCCIÓN · WELLADJUSTEDBB.COM', dot: 'live' },
        { text: 'SEGUNDA ETAPA ENTREGADA', dot: 'moss' },
        { text: 'AGENTE DE VOZ FUNCIONANDO EN INGLÉS · EN EXPANSIÓN A OTROS IDIOMAS', dot: 'moss' },
        { text: 'CUENTAS Y COBROS · DESPUÉS DE LOS PRIMEROS 50 A 100 USUARIOS', dot: 'amber' },
      ],
      voice: 'Con el agente de voz, construido sobre ElevenLabs, se puede hablar con bb. en lugar de escribirle. Tiene un tono humano y comparte con el texto la capa cultural y el diseño de seguridad.',
      cta: 'Ver bb. funcionando',
      footer: 'JS80 · Estudio de soluciones digitales',
    },
  },

  en: {
    meta: {
      title: 'bb. — A JS80 case',
      description:
        'bb. case study: an AI reflection tool for people who live between cultures. The model’s voice designed with a test behind every decision.',
      volver: 'back',
      rail: 'Scene index',
      escena: 'Scene',
    },
    e1: {
      aria: 'Cover',
      eyebrow: 'Case · JS80',
      brand: 'well adjusted, bb.',
      h1: ['ChatGPT gives you an answer.', 'bb. gets', 'why it’s'],
      h1Accent: 'complicated.',
      attribution: 'the line is Wided’s, who founded it',
      nudge: 'scroll',
    },
    e2: {
      aria: 'What bb. is',
      h2: 'An AI reflection tool for people who live between cultures.',
      rows: [
        'Children of immigrants, intercultural couples, people in the diaspora carrying family expectations that don’t fit the Western mold.',
        'You open it on your phone, no account, and write what happened.',
        'bb. returns an Unpack: a 180-to-320-word reading that opens with the underlying intuition and develops only what that situation calls for, with a dry humor that laughs at the family system, never at the person.',
        'Seven ways to keep going, or free writing. The conversation closes itself after a few replies: bb. is not an open-ended chat.',
      ],
      note: 'It works in five languages. It is Wided’s product; she is retraining as a psychotherapist and sees it as her next career.',
    },
    e3: {
      aria: 'The thesis',
      words: ['In', 'bb.,', 'almost', 'all', 'the', 'value', 'is', 'in', 'how', 'the', 'model'],
      accent: 'behaves.',
      copy: 'That behavior was designed with the same rigor as a screen. There is a test behind every decision.',
    },
    e4: {
      aria: 'The brief',
      eyebrow: 'The brief',
      h2: 'Wided arrived with almost all the product thinking already written.',
      copy: 'Brand and positioning, a 24-section spec with the copy, the voice and even the forbidden phrases, and a technical handoff with scope, acceptance criteria and milestones.',
      secondary:
        'It asked for less than we had proposed: no database, no accounts, no history and no payments in the MVP. We set aside the discovery we had quoted and took the build at a fixed price against that spec: three milestones, three weeks.',
      quote: '“Complexity is not a deliverable.”',
      quoteBy: 'Wided',
      note: 'One contradiction flagged from the start: without accounts, the quota of three free Unpacks a month can’t be enforced.',
    },
    e5: {
      aria: 'The voice',
      eyebrow: 'The voice',
      h2: 'The voice was settled before the screens.',
      copy: 'bb. competes with opening ChatGPT for free. The difference has to show in the first answer.',
      panelTag: 'the prompt · three versions',
      scenarios: 'scenarios · day one',
      v1: { tag: 'v1 · day one', metric: '8.5 / 10', text: 'Built from the spec’s instructions. Tested against nine scenarios; three readings sent to Wided.' },
      chipsLabel: 'what Wided asked for',
      chips: ['shorter', 'sharper', 'open straight with the intuition'],
      v2: { tag: 'v2', metric: '500–670 → 220–270 words', text: 'Shorter, sharper. Opens with the intuition.' },
      v3: { tag: 'v3 · written by Wided', text: 'Removed the fixed headings and allowed bb. to disagree with how the person tells what happened to them.' },
      remate: 'From here on, every problem was measured before it was fixed.',
      unpackCaption: 'An Unpack from the test set. It opens with the underlying intuition and only then develops.',
    },
    e6: {
      aria: 'Measured',
      eyebrow: 'Measured',
      h2: 'Every problem was measured before it was fixed.',
      copy: 'A hostile tester rejected a reading and bb. conceded. In testing it gave in across all 24 conversations, so we added a classifier that, before answering, tells whether the person brings new information or is only pushing back.',
      stats: [
        { label: 'closes with a question', before: '16', after: '0', count: null, text: 'out of 20 conversations. One closing rule.' },
        { label: 'holds its reading', before: '0', after: '23', count: 23, text: 'out of 24 at the second objection. A classifier before answering.' },
        { label: 'response length', before: '500–670', after: '220–270', count: null, text: 'words per response, from the second version of the prompt on.' },
      ],
      note: 'The open problem: at the third objection it still gives in.',
    },
    e7: {
      aria: 'Safety',
      eyebrow: 'Safety',
      h2: 'In a product about family, “my mom is going to kill me” gets written all the time.',
      copy: 'Every message goes through OpenAI moderation before bb. answers. There are three paths.',
      paths: [
        { tag: 'high risk', text: 'bb. generates nothing. It shows a fixed text with help resources by country.', accent: true },
        { tag: 'medium risk', text: 'It answers without humor and with more care.', accent: false },
        { tag: 'no risk', text: 'It proceeds as usual.', accent: false },
      ],
      crisisTag: 'crisis screen · resources by country',
      crisisNote: 'The eyes close on the crisis screen. No text is generated: a fixed one is shown.',
      claves: [
        { title: 'Thresholds by category', text: 'Family hyperbole scores very high on violence in all five languages. Violence never triggers the crisis screen.' },
        { title: 'Err toward care', text: 'For self-harm, Wided chose to err toward care.' },
        { title: 'of 21', text: 'The test matrix passes in full. Nothing people write is stored.' },
      ],
      note: 'The known weak spot: coercive control told without violent language barely scores, and today relies on the prompt alone.',
    },
    e8: {
      aria: 'The cultural layer',
      eyebrow: 'The cultural layer',
      h2: 'To Wided, bb. still read everything from a place that was too Anglo and Western.',
      copy: 'She compared it with ChatGPT and that is how it felt. The first idea was to feed it entire books, and we stopped it: the model doesn’t learn from what you pass it, there is copyright, and counseling manuals are precisely Western frameworks. She didn’t want to write it alone either: one person’s view isn’t enough for a culture. What remained was a method.',
      rows: [
        'Wided looks for first-person essays, written from inside a family or community.',
        'Each one is distilled with the same eleven questions: how love is shown without saying it, what generations owe each other, what migration did.',
        'The short summary, in its own words, goes into the prompt with rules against stereotype.',
      ],
      rulesLabel: 'the rules',
      rules: ['Never infer anyone’s origin from their name', 'Never say “in your culture”', 'Pattern, not law', 'No clear signal in the text, not used'],
      statLabel: 'in production',
      statUnit: 'voices',
      statText: 'Families from the Maghreb, Syria, West Africa, Latin America and South Asia.',
      statNote: 'A blind test of sixteen situations, with and without the layer, is waiting for Wided to mark which one understands better.',
    },
    e9: {
      aria: 'The visuals',
      eyebrow: 'The visuals',
      h2: 'Wided gave no palette. She gave adjectives and prohibitions.',
      copy: 'Out of the four directions we explored came a risk: she read JS80’s iridescent core, which was in our PDFs, as if it were bb.’s brand. The product’s face had to be separated from the studio’s. When she saw the prototype running, deep green with a paper card, she picked it on the spot.',
      quote: '“BB IS GORGEOUS”',
      quoteBy: 'Wided, on seeing the prototype',
      claves: [
        { title: 'The mark', text: 'Two lowercase b’s with pupils that look around, blink, wink when you copy and close on the crisis screen.' },
        { title: 'The home', text: 'The text field is the protagonist.' },
        { title: 'The reading', text: 'It quotes what the person wrote at the top and appears one paragraph at a time, with no auto-scroll: the first users said the words moved while bb. was writing.' },
      ],
    },
    e10: {
      aria: 'How it’s built',
      eyebrow: 'How it’s built',
      h2: 'The conversation lives on the person’s phone and is never stored anywhere.',
      copy: 'A single application. The model is always called from the server, so the key never reaches the browser. Spend is controlled with per-device and per-IP limits, and a monthly budget with an alert.',
      stats: [
        { value: '0.5 ¢', count: null, prefix: '', suffix: '', text: 'per response, in US dollars.' },
        { value: '8', count: 8, prefix: '', suffix: ' of 10', text: 'calls hit the cached prompt.' },
        { value: '100', count: 100, prefix: '< USD ', suffix: '', text: 'a month for a hundred-person beta.' },
      ],
    },
    e11: {
      aria: 'Delivery',
      eyebrow: 'Delivery',
      h2: 'The plan was three weeks. The beta was up and running in five days.',
      timeline: [
        { date: 'Mon Sep 14', text: 'The build starts.' },
        { date: 'Fri Sep 18', text: 'Beta complete.' },
        { date: 'Sat Sep 19', text: 'Live at welladjustedbb.com.' },
        { date: '≈ Sep 23', text: 'Wided starts sharing it.' },
      ],
      copy: 'She paid the three milestones and commissioned a second stage, already delivered: analytics that don’t log what people write, email capture and a brand sheet. The accounts stay in our name while we work together and transfer at no cost the day she asks.',
      usersLabel: 'the first users',
      usersText: 'The first two survey responses agree that bb. understands what is complicated and doesn’t sound culturally off. One person in an intercultural relationship said it found an angle ChatGPT had never given them.',
      usersNote: 'The doubt is price, which they compare with what they already pay for ChatGPT. Wided wants to answer it with the first fifty to a hundred users before building accounts and billing.',
    },
    e12: {
      aria: 'Closing',
      h2: 'bb. gets why it’s complicated.',
      status: [
        { text: 'BETA IN PRODUCTION · WELLADJUSTEDBB.COM', dot: 'live' },
        { text: 'SECOND STAGE DELIVERED', dot: 'moss' },
        { text: 'VOICE AGENT LIVE IN ENGLISH · EXPANDING TO OTHER LANGUAGES', dot: 'moss' },
        { text: 'ACCOUNTS AND BILLING · AFTER THE FIRST 50 TO 100 USERS', dot: 'amber' },
      ],
      voice: 'With the voice agent, built on ElevenLabs, you can talk to bb. instead of typing. It has a human tone and shares the cultural layer and the safety design with the text.',
      cta: 'See bb. live',
      footer: 'JS80 · Digital solutions studio',
    },
  },
} as const;

// Producto recreado (igual en ambos idiomas; verbatim de lib/copy.ts y unpacks/unpack-01.md).
export const PRODUCT = {
  hero: 'bb. gets why it’s complicated.',
  support: 'For the stuff that needs more context than “set a boundary.”',
  example: 'My mother said something and I can’t tell if I’m overreacting.',
  tell: 'Tell bb. what happened.',
  cta: 'Unpack this',
  privacyNote: 'You can change names or remove identifying details before pasting anything here.',
  unpackUser: 'How do I say no to my mother without making this into a rejection of her?',
  unpackLead:
    'The request may be small; the real negotiation is whether you’re allowed to be a separate person without it being filed as a relationship incident.',
  unpackP:
    'One possibility is that your mother experiences closeness through access, agreement, or being needed. Another is that you’ve learned her disappointment has consequences—guilt, tension, a lecture, a cold spell—so “no” feels much larger than one answer.',
} as const;

export const SITIO_URL = 'https://welladjustedbb.com';
