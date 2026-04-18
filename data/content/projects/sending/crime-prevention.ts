// Sending project: Crime Prevention in Youth (YE) — Larnaca, Cyprus
import type { PageContent } from "@/types/content"

const B = "/images/projects/sending/crime-prevention"

// Explicit map: number → full path with real extension
// (Placeholders — drop the real files into public/images/projects/sending/crime-prevention/
//  and adjust the extensions if they differ.)
const p: Record<number, string> = {
  // Project cover shown next to the title (YE style, mirrors APV layout)
  1: `${B}/ye-cover.jpg`,
  // Participants (Our Participants grid — 3 + 2)
  2: `${B}/esperanza.jpg`,
  3: `${B}/pili.jpg`,
  4: `${B}/juanjo.jpg`,
  5: `${B}/mario.jpg`,
  6: `${B}/juanje.jpg`,
  // Dissemination photos (3)
  7: `${B}/dissemination-1.jpg`,
  8: `${B}/dissemination-2.jpg`,
  9: `${B}/dissemination-3.jpg`,
  // Gallery
  10: `${B}/1.jpg`,
  11: `${B}/2.jpg`,
  12: `${B}/3.jpg`,
  13: `${B}/4.jpg`,
  14: `${B}/5.jpg`,
  15: `${B}/6.jpg`,
  16: `${B}/7.jpg`,
  17: `${B}/8.jpg`,
  18: `${B}/9.jpg`,
  19: `${B}/10.jpg`,
  20: `${B}/11.jpg`,
  21: `${B}/12.jpg`,
  22: `${B}/13.jpg`,
}

const content: PageContent = {
  title: "Crime Prevention in Youth",
  subtitle: "YE in Cyprus (23-31 October 2024)",
  heroImage: "/images/projects/sending/sending-9-cover.jpg",
  sections: [
    // ── Intro block: project title + cover photo (YE style) ──────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "heading", level: 1, text: "YE" },
          { type: "heading", level: 3, text: "Crime Prevention in Youth" },
        ],
        [
          {
            type: "image",
            src: p[1],
            alt: "Crime Prevention in Youth YE — Cyprus",
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
          text: "The experience we had in this project about Crime Prevention was far more fascinating and enjoyable than we ever imagined. Through the lens of youth work, we returned home with our energy restored and our minds enriched with valuable knowledge. Our journey was filled with numerous resources and insightful activities, expertly guided by our facilitators, Kyriakos, Inga, and Natasa. Their constant support, along with their exemplary teamwork and genuine collaboration, left a lasting impression on all of us. They showed us how friendship and open communication can elevate the spirit of a project.",
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
          text: "In the project, we engaged in a variety of interactive and educational activities focused on crime prevention. We participated in workshops and discussions that explored the different aspects of crime in our home countries, examining both the causes and the potential solutions. With the guidance of our facilitators, we developed a deeper understanding of how crime impacts our communities and learned practical strategies to address these challenges through youth work.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "We also worked in diverse teams to create collaborative projects, sharing our unique cultural perspectives and experiences. These activities helped us foster teamwork, communication, and problem-solving skills. Additionally, we took part in creative sessions that included role-playing, simulations, and group challenges that highlighted the importance of unity and collaboration in addressing complex issues.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "Overall, we built connections across cultures, gained new resources for crime prevention, and experienced the power of working together to make a positive difference in society.",
        },
      ],
    },

    // ── Our Participants (3+2 grid via 3-column autoGrid) ────────────────────
    {
      layout: "autoGrid",
      count: 3,
      background: "light",
      paddingY: "lg",
      maxWidth: "lg",
      title: "Our Participants: Esperanza, Pili, Juanjo, Mario & Juanje",
      items: [
        {
          type: "image",
          src: p[2],
          alt: "Esperanza",
          caption: "Esperanza",
          aspectRatio: "1/1",
          rounded: "full",
        },
        {
          type: "image",
          src: p[3],
          alt: "Pili",
          caption: "Pili",
          aspectRatio: "1/1",
          rounded: "full",
        },
        {
          type: "image",
          src: p[4],
          alt: "Juanjo",
          caption: "Juanjo",
          aspectRatio: "1/1",
          rounded: "full",
        },
        {
          type: "image",
          src: p[5],
          alt: "Mario",
          caption: "Mario",
          aspectRatio: "1/1",
          rounded: "full",
        },
        {
          type: "image",
          src: p[6],
          alt: "Juanje",
          caption: "Juanje",
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
          text: "On November 16th, we held a dissemination event during the \"Youth Work in Córdoba\" meeting. Youth technicians, youth workers, and members of various associations gathered to listen to our presentation about the impactful experience we had in the Crime Prevention project in Cyprus. We shared our insights, the knowledge we gained, and the skills we developed throughout the project.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "We detailed how the workshops, activities, and cultural exchanges contributed to our understanding of crime prevention and youth collaboration. The audience was engaged and interested in how our experiences could inspire similar initiatives and practices in their own youth work. It was a meaningful opportunity to spread awareness and discuss the positive outcomes of international youth cooperation.",
        },
        // Three images from the dissemination event
        {
          type: "imageGroup",
          columns: 3,
          images: [
            { src: p[7], alt: "Dissemination event — 1" },
            { src: p[8], alt: "Dissemination event — 2" },
            { src: p[9], alt: "Dissemination event — 3" },
          ],
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
      subtitle: "Some photos of the YE in Cyprus!",
      columns: 3,
      images: [
        { src: p[10], alt: "Cyprus YE — moment 1" },
        { src: p[11], alt: "Cyprus YE — moment 2" },
        { src: p[12], alt: "Cyprus YE — moment 3" },
        { src: p[13], alt: "Cyprus YE — moment 4" },
        { src: p[14], alt: "Cyprus YE — moment 5" },
        { src: p[15], alt: "Cyprus YE — moment 6" },
        { src: p[16], alt: "Cyprus YE — moment 7" },
        { src: p[17], alt: "Cyprus YE — moment 8" },
      ],
    },
  ],
}

export default content
