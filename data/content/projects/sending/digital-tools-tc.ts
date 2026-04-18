// Sending project: Digital Tools and Media literacy (TC) — Paralimni, Cyprus
import type { PageContent } from "@/types/content"

const B = "/images/projects/sending/digital-tools-tc"

// Explicit map: number → full path with real extension
// (Placeholders — drop the real files into public/images/projects/sending/digital-tools-tc/
//  and adjust the extensions if they differ.)
const p: Record<number, string> = {
  // Cover shown next to the project title (TC style, mirrors APV layout)
  1: `${B}/tc-cover.jpg`,
  // Participants (Our Participants grid)
  2: `${B}/juanje.jpg`,
  3: `${B}/natalia.jpg`,
  4: `${B}/manuel.jpg`,
  // Gallery
  5:  `${B}/1.jpg`,
  6:  `${B}/2.jpg`,
  7:  `${B}/3.jpg`,
  8:  `${B}/4.jpg`,
  9:  `${B}/5.jpg`,
  10: `${B}/6.jpg`,
  11: `${B}/7.jpg`,
  12: `${B}/8.jpg`,
  13:  `${B}/9.jpg`,
  14:  `${B}/10.jpg`,
  15: `${B}/11.jpg`,
  16: `${B}/12.jpg`,
  17: `${B}/13.jpg`,
}

const content: PageContent = {
  title: "Digital Tools and Media literacy",
  subtitle: "TC in Cyprus (5-13 April 2024)",
  heroImage: "/images/projects/sending/sending-6-cover.jpg",
  sections: [
    // ── Intro block: project title + cover photo (TC style) ──────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "heading", level: 1, text: "TC" },
          { type: "heading", level: 3, text: "Digital Tools and Media literacy" },
        ],
        [
          {
            type: "image",
            src: p[1],
            alt: "Digital Tools and Media literacy TC — Cyprus",
            aspectRatio: "1/1",
            rounded: "full",
          },
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
          size: "lg",
          text: "In the picturesque landscapes of Cyprus, an enlightening journey unfolded over the course of a training program tailored for 24 youth workers hailing from diverse corners of the globe. Set against the backdrop of digital tools and media literacy, this project encapsulated a transformative experience. Follow the Adventures of our group of Youth Workers: Natalia, Manuel & Juanje.",
        },
      ],
    },

    // ── What we did? ─────────────────────────────────────────────────────────
    {
      layout: "single",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      blocks: [
        { type: "heading", level: 2, text: "What we did?" },
        {
          type: "paragraph",
          size: "lg",
          text: "The first part of the project was dedicated to different dynamics and group building exercises that allow us to break the ice, know each other and start guessing the names of the participants. It was interesting to meet different people with such stories.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "The middle part of the project was dedicated to develope the topic through different workshops. The workshops were developed about different youth leaders and representators of the associations involved. Also we received to experts in AI and WordPress that bring us some professional outcomes.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "The last part was dedicated to generate some projects results and develope a workshop in a local educative centre that help us connect with the locals and start the see you later aligater process.",
        },
      ],
    },

    // ── Day by Day :D ────────────────────────────────────────────────────────
    {
      layout: "single",
      background: "light",
      paddingY: "lg",
      maxWidth: "lg",
      blocks: [
        { type: "heading", level: 2, text: "Day by Day :D" },
        {
          type: "paragraph",
          size: "lg",
          text: "Saturday the 6th was the first day, our first activity together this day was designed to get to know each other better, our names, nationalities and begin to create a good atmosphere in the group.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "On Sunday we went to see the archaeological museum and we were also able to see the city of Limassol, walk and eat in the sun in the port. A pleasure.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "On Monday we worked on different activities with the group from Romania and we also received a visit from an Artificial Intelligence professional. Very interesting.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "On Tuesday we started the day leading the Lithuania team and its activities and in the afternoon we had a talk and activity with a WordPress professional.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "Wednesday, we learned about the Canva application with the Macedonian group and did different activities with them.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "Thursday, we prepare the different activities for the last day (Friday) and think of fun dynamics to present to the children of the center.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "Friday, we visited the school where we did activities with primary school children and made a general summary of the week. It has been my favorite day of the week.",
        },
      ],
    },

    // ── Our Participants: Juanje, Natalia & Manuel (3 portraits grid) ────────
    {
      layout: "autoGrid",
      count: 3,
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      title: "Our Participants: Juanje, Natalia & Manuel",
      items: [
        {
          type: "image",
          src: p[2],
          alt: "Juanje",
          caption: "Juanje",
          aspectRatio: "1/1",
          rounded: "full",
        },
        {
          type: "image",
          src: p[3],
          alt: "Natalia",
          caption: "Natalia",
          aspectRatio: "1/1",
          rounded: "full",
        },
        {
          type: "image",
          src: p[4],
          alt: "Manuel",
          caption: "Manuel",
          aspectRatio: "1/1",
          rounded: "full",
        },
      ],
    },

    // ── Local Event for Dissemination ────────────────────────────────────────
    {
      layout: "single",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      blocks: [
        { type: "heading", level: 2, text: "Local Event for Dissemination" },
        {
          type: "paragraph",
          size: "lg",
          text: "On the Saturday morning of April 20th, we convened a dynamic group of young individuals ranging from ages 16 to 26 to share with them the enriching experiences garnered from our time in Cyprus. As we recounted the journey, it was heartening to witness their genuine curiosity and engagement, as they posed thought-provoking questions that reflected a keen interest in the project's intricacies. Many expressed gratitude for the very concept of mobility itself, recognizing it as a gateway to cultural exchange and personal growth. Intriguingly, a subset of these bright minds revealed a penchant for Information Technology, eagerly offering insights and suggesting innovative tools that could enhance similar projects in the future. Their enthusiasm and contributions underscored the invaluable potential for collaboration and knowledge-sharing among youth, highlighting the transformative power of initiatives like KA1 projects.",
        },
      ],
    },

    // ── Photo Album ───────────────────────────────────────────────────────────
    {
      layout: "gallery",
      background: "light",
      paddingY: "lg",
      maxWidth: "xl",
      title: "Photo Album",
      subtitle: "Some photos of the TC in Cyprus!",
      columns: 3,
      images: [
        { src: p[5],  alt: "Cyprus TC — moment 1" },
        { src: p[6],  alt: "Cyprus TC — moment 2" },
        { src: p[7],  alt: "Cyprus TC — moment 3" },
        { src: p[8],  alt: "Cyprus TC — moment 4" },
        { src: p[9],  alt: "Cyprus TC — moment 5" },
        { src: p[10], alt: "Cyprus TC — moment 6" },
        { src: p[11], alt: "Cyprus TC — moment 7" },
        { src: p[12], alt: "Cyprus TC — moment 8" },
      ],
    },
  ],
}

export default content
