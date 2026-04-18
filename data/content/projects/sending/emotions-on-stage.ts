// Sending project: EMOTIONS ON STAGE (YE) — Warsaw, Poland
import type { PageContent } from "@/types/content"

const B = "/images/projects/sending/emotions-on-stage"

// Explicit map: number → full path with real extension
// (Placeholders — drop the real files into public/images/projects/sending/emotions-on-stage/
//  and adjust the extensions if they differ.)
const p: Record<number, string> = {
  // Participant portraits
  1: `${B}/paola.jpg`,
  2: `${B}/david.jpg`,
  3: `${B}/patricia.jpg`,
  4: `${B}/saul.jpg`,
  5: `${B}/jose.jpg`,
  6: `${B}/lucia.jpg`,
  // Dissemination event photo
  7: `${B}/dissemination.jpg`,
  // Gallery
  8:  `${B}/1.jpg`,
  9:  `${B}/2.jpg`,
  10: `${B}/3.jpg`,
  11: `${B}/4.jpg`,
  12: `${B}/5.jpg`,
  13: `${B}/6.jpg`,
  14: `${B}/7.jpg`,
  15: `${B}/8.jpg`,
}

const content: PageContent = {
  title: "EMOTIONS ON STAGE",
  subtitle: "Youth Exchange in Warsaw (9-16 September 2024)",
  heroImage: "/images/projects/sending/sending-7-cover.jpg",
  sections: [
    // ── Experience 1: Paola (text left, photo right) ─────────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "Paola Moreno" },
        ],
        [
          { type: "image", src: p[1], alt: "Paola Moreno", aspectRatio: "1/1", rounded: "full" },
        ],
      ],
    },
    {
      layout: "single",
      background: "white",
      paddingY: "sm",
      maxWidth: "lg",
      blocks: [
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "I recently had the incredible opportunity to participate in a youth exchange program focused on theatre and acting in Warsaw. This project was an enriching experience that brought together young people from diverse backgrounds. The program was well-structured, allowing for practical skill-building and personal expression. The blend of artistic and cultural activities created a dynamic atmosphere that encouraged openness and creativity. Overall, this youth exchange project was a transformative experience. It provided invaluable skills in theatre while promoting intercultural dialogue and lasting friendships. Highly recommended for any young aspiring actor or anyone looking to broaden their horizons through the arts. Paola",
        },
      ],
    },

    // ── Experience 2: David (photo left, text right) ─────────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "image", src: p[2], alt: "David Membiela", aspectRatio: "1/1", rounded: "full" },
        ],
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "David Membiela" },
        ],
      ],
    },
    {
      layout: "single",
      background: "white",
      paddingY: "sm",
      maxWidth: "lg",
      blocks: [
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "From September 9th to 16th, I took part in the youth exchange program \"Emotions on Stage: Theatrical Competence Track.\" It was an amazing opportunity to improve our acting skills and dive into different theater styles, such as improvisation and musical theater. We even had the chance to create our own movie. I'm incredibly grateful to the host team and our leader for their excellent organization and for keeping the activities so engaging. This experience pushed me to step out of my comfort zone and try new things I never thought I'd enjoy.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "I also truly value the friendships I formed during this week—it went by way too fast. The participants came from Poland, Bulgaria, Macedonia, Greece, Spain, Lithuania, and Romania, and connecting with people from such diverse backgrounds was a unique and enriching part of the journey. It made me realize how much we can learn from each other beyond just theater.",
        },
      ],
    },

    // ── Experience 3: Patricia (text left, photo right) ──────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "Patricia González" },
        ],
        [
          { type: "image", src: p[3], alt: "Patricia González", aspectRatio: "1/1", rounded: "full" },
        ],
      ],
    },
    {
      layout: "single",
      background: "white",
      paddingY: "sm",
      maxWidth: "lg",
      blocks: [
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "Mi intercambio juvenil en Varsovia fue una experiencia que me permitió explorar mis emociones a través del teatro y conectar con personas de diferentes países a pesar de las barreras de la cultura y el lenguaje. Participé en actividades creativas, como improvisaciones y ejercicios de expresión corporal, pero lo que más me gustó fue la creación de una película en grupos, donde grabamos y editamos cortometrajes y se conseguia la diversión y aprendizaje al mismo tiempo. Todo el proceso me ayudó a conocerme mejor y a derribar esas barreras culturales que existian en mi al principio. Estoy muy emocionada por repetir esta experiencia de nuevo y que más gente pueda unirse a ella!",
        },
      ],
    },

    // ── Experience 4: Saúl (photo left, text right) ──────────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "image", src: p[4], alt: "Saúl Silos", aspectRatio: "1/1", rounded: "full" },
        ],
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "Saúl Silos" },
        ],
      ],
    },
    {
      layout: "single",
      background: "white",
      paddingY: "sm",
      maxWidth: "lg",
      blocks: [
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "During the second week of September, I had the opportunity to participate in an Erasmus+ project in Warsaw, focused on theatre. People from different countries came together to work on this initiative, and it was an amazing experience. We performed, learned important techniques like breathing control, voice projection, and how to work with emotions. Beyond that, I met incredible people who truly made the experience unforgettable. We explored the city of Warsaw and learned about the different cultures of the countries involved in the project. It was an incredible journey, and I highly recommend it to anyone interested in this kind of work!",
        },
      ],
    },

    // ── Experience 5: José (text left, photo right) ──────────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "José Sánchez" },
        ],
        [
          { type: "image", src: p[5], alt: "José Sánchez", aspectRatio: "1/1", rounded: "full" },
        ],
      ],
    },
    {
      layout: "single",
      background: "white",
      paddingY: "sm",
      maxWidth: "lg",
      blocks: [
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "Reflecting on my first Erasmus+ trip to Poland, I can't help but feel a mix of emotions. This journey has been profoundly transformative and enriching. From our departure from Málaga on September 9th to our return on September 16th, every moment was filled with laughter, learning, and new friendships.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "The theme of our exchange, \"Emotions on Stage\", was fascinating. Through workshops and interactive activities, we learned to use theater and body movement to express feelings and to employ our voices to convey emotions. From improvisations to body expression exercises, each day taught us something new about how theater can bring people together and foster empathy.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "The highlight was the friendships we made with participants from seven different countries. We shared meals, stories, and worked together on projects, overcoming language and cultural barriers to form a very close-knit group.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "I will never forget the late-night conversations under the starry Polish sky, the impromptu performances that made us laugh out loud, and the moments of vulnerability that brought us closer. Each interaction was a reminder of how wonderful diversity is and the strength of unity.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "As I say goodbye to Poland and my new friends, I carry with me a wealth of memories and a heart full of gratitude. This Erasmus+ project has not only broadened my horizons but also shown me how powerful youth exchange programs can be. Looking to the future, I am filled with hope knowing that the bonds we formed in Poland will continue to inspire and support me wherever I go.",
        },
      ],
    },

    // ── Experience 6: Lucía (photo left, text right) ─────────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "image", src: p[6], alt: "Lucía Rubio", aspectRatio: "1/1", rounded: "full" },
        ],
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "Lucía Rubio" },
        ],
      ],
    },
    {
      layout: "single",
      background: "white",
      paddingY: "sm",
      maxWidth: "lg",
      blocks: [
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "🌟🎭 ¡Qué experiencia tan inolvidable en #EmotionsOnStage en Varsovia! 🇵🇱✨ Este intercambio juvenil ha sido un viaje increíble lleno de momentos mágicos y aprendizajes profundos. He tenido la suerte de conocer a personas maravillosas de Grecia 🇬🇷, Rumanía 🇷🇴, Polonia 🇵🇱, Lituania 🇱🇹, Bulgaria 🇧🇬, Macedonia del Norte 🇲🇰 y, por supuesto, a mi increíble equipo de españoles 🇪🇸.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "Desde las risas compartidas hasta la mezcla de nuestras culturas y tradiciones, cada día ha sido una celebración de la diversidad y la creatividad. Hemos explorado nuestras habilidades teatrales, desde la expresión corporal y la improvisación hasta el manejo de herramientas digitales y redes sociales, ¡todo mientras fortalecíamos nuestro trabajo en equipo y compañerismo!",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "Cada momento, cada ensayo, y cada conversación ha dejado una huella imborrable en mi corazón. Este proyecto no solo nos ha permitido crecer como artistas, sino también como seres humanos. Estoy agradecido por cada experiencia y por cada persona con la que he compartido este viaje.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "¡Gracias a todos por hacer de esta experiencia algo tan especial! 🌍💫",
        },
      ],
    },

    // ── Evento de Diseminación ───────────────────────────────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "heading", level: 2, text: "Evento de Diseminación" },
        ],
        [
          { type: "image", src: p[7], alt: "Evento de Diseminación", aspectRatio: "4/3", rounded: true },
        ],
      ],
    },

    // ── Photo Album ───────────────────────────────────────────────────────────
    {
      layout: "gallery",
      background: "light",
      paddingY: "lg",
      maxWidth: "xl",
      title: "Photo Album",
      subtitle: "Some photos of the project in Poland!",
      columns: 3,
      images: [
        { src: p[8],  alt: "Poland — moment 1" },
        { src: p[9],  alt: "Poland — moment 2" },
        { src: p[10], alt: "Poland — moment 3" },
        { src: p[11], alt: "Poland — moment 4" },
        { src: p[12], alt: "Poland — moment 5" },
        { src: p[13], alt: "Poland — moment 6" },
        { src: p[14], alt: "Poland — moment 7" },
        { src: p[15], alt: "Poland — moment 8" },
      ],
    },
  ],
}

export default content
