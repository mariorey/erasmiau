// Sending project: Green Comp for Youth Workers (TC) — Kozani, Greece
import type { PageContent } from "@/types/content"

const B = "/images/projects/sending/greem-comp"

// Explicit map: number → full path with real extension
// (Placeholders — drop the real files into public/images/projects/sending/greem-comp/
//  and adjust the extensions if they differ.)
const p: Record<number, string> = {
  // Participant portraits
  1: `${B}/leyre.jpg`,
  2: `${B}/lourdes.jpg`,
  3: `${B}/miriam.jpg`,
  // Gallery
  4:  `${B}/1.jpg`,
  5:  `${B}/2.jpg`,
  6:  `${B}/3.jpg`,
  7:  `${B}/4.jpg`,
  8:  `${B}/5.jpg`,
  9:  `${B}/6.jpg`,
  10:  `${B}/7.jpg`,
  11:  `${B}/8.jpg`,
}

const content: PageContent = {
  title: "GREEN COMP FOR YOUTH WORKERS",
  subtitle: "Training Course in Kozani, Greece (14-21 September 2023)",
  heroImage: "/images/projects/sending/sending-1-cover.jpg",
  sections: [
    // ── Experience 1: Leyre (text left, photo right) ─────────────────────────
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
          { type: "heading", level: 3, text: "Leyre Muñoz" },
        ],
        [
          {
            type: "image",
            src: p[1],
            alt: "Leyre Muñoz",
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
          italic: true,
          size: "lg",
          text: "It has been a short experience but I have learned a lot. Now I know how to use many mindfullnes tools that will be useful in my daily life and also all those about sustainability that I can apply in my future workshops. I had a great time with the participants, I had a lot of fun, and I made friends with people I hope to see in the future. We did a lot of team work and one of the ones I liked the most was reusing a bottle to create a wallet. I think many of the things we learnt like active listening or mindfullnes communication are very important.",
        },
      ],
    },

    // ── Experience 2: Lourdes (photo left, text right) ───────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          {
            type: "image",
            src: p[2],
            alt: "Lourdes Galisteo",
            aspectRatio: "1/1",
            rounded: "full",
          },
        ],
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "Lourdes Galisteo" },
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
          text: "The experience was very intense and educational. Importance was given to issues such as sustainability, environment, take care of the nature, mindfulness… The participans were very friendly and energetic. The activities were very well organized and professional. Thanks to this experience I am more aware of what the planet currently needs. In addition, I will be able to hold workshops to raise people's awareness about the issue.",
        },
      ],
    },

    // ── Experience 3: Miriam (text left, photo right) ────────────────────────
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
          { type: "heading", level: 3, text: "Miriam Bascón" },
        ],
        [
          {
            type: "image",
            src: p[3],
            alt: "Miriam Bascón",
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
          italic: true,
          size: "lg",
          text: "The experience in Greece was very rewarding. The participants of the training courses learned a lot about mainfullness and greencomp. Sustainability and recycling was one of the most important factors of the project, since we must all contribute to the environment. The organization provided us with numerous resources and activities to increase our training on the subject. The people on this project were incredible, some friends who came back to Spain.",
        },
      ],
    },

    // ── Photo Album ───────────────────────────────────────────────────────────
    {
      layout: "gallery",
      background: "light",
      paddingY: "lg",
      maxWidth: "xl",
      title: "Galería",
      subtitle: "Some of the photos of the project in Greece!",
      columns: 3,
      images: [
        { src: p[4], alt: "Greece — moment 1" },
        { src: p[5], alt: "Greece — moment 2" },
        { src: p[6], alt: "Greece — moment 3" },
        { src: p[7], alt: "Greece — moment 4" },
        { src: p[8], alt: "Greece — moment 5" },
        { src: p[9], alt: "Greece — moment 6" },
        { src: p[10], alt: "Greece — moment 7" },
        { src: p[11], alt: "Greece — moment 8" },
      ],
    },
  ],
}

export default content
