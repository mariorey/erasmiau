// Sending project: Break the Silence (YE) — Ponte de Lima, Portugal
import type { PageContent } from "@/types/content"

const B = "/images/projects/sending/break-the-silence"

// Explicit map: number → full path with real extension
// (Placeholders — drop the real files into public/images/projects/sending/break-the-silence/
//  and adjust the extensions if they differ.)
const p: Record<number, string> = {
  // Participant portraits
  1: `${B}/emilio.jpg`,
  2: `${B}/emma.jpg`,
  3: `${B}/marco.jpg`,
  4: `${B}/maria.jpg`,
  5: `${B}/narai.jpg`,
  6: `${B}/angel.jpg`,
  // Gallery
  7:  `${B}/1.jpg`,
  8:  `${B}/2.jpg`,
  9:  `${B}/3.jpg`,
  10: `${B}/4.jpg`,
  11: `${B}/5.jpg`,
  12: `${B}/6.jpg`,
  13: `${B}/7.jpg`,
  14: `${B}/8.jpg`,
  15: `${B}/9.jpg`,
  16: `${B}/10.jpg`,
}

const content: PageContent = {
  title: "BREAK THE SILENCE",
  subtitle: "Youth Exchange in Portugal (10-17 November 2024)",
  heroImage: "/images/projects/sending/sending-10-cover.jpg",
  sections: [
    // ── Experience 1: Emilio (text left, photo right) ────────────────────────
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
          { type: "heading", level: 3, text: "Emilio Onorato" },
        ],
        [
          { type: "image", src: p[1], alt: "Emilio Onorato", aspectRatio: "1/1", rounded: "full" },
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
          text: "I was participant on the YE breaking the silence in Ponte the Lima (Portugal) I can say that I feel very gratefull to have participated on such an incredible event. I met amazing people who I will remember for rest of my life. In addition I learnt so many useful concepts regarding to the topic of domestic abuse that I was not that aware, now I can say that I will take part in a future.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "In conclusión it was such an interesting experience that I want to repeat as soon as possible!",
        },
      ],
    },

    // ── Experience 2: Emma (photo left, text right) ──────────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "image", src: p[2], alt: "Emma Reino", aspectRatio: "1/1", rounded: "full" },
        ],
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "Emma Reino" },
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
          text: "I attended an erasmus program from the 11th to the 17th of September in Ponte de Lima, Portugal, held by erasmus+.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "During this exchange, which theme was Breaking the Silence, we got into the topic of domestic violence and engaged in a variety of activities regarding the matter, such as understanding the different types of abuse, finding actual solutions to this issue, and in general becoming more aware of it.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "Throughout this time, I got to know people from all around Europe, and mostly, I had the opportunity to create new connections with them and understand their different points of view on all sorts of topics.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "Regarding the location, we stayed in this beautiful village where we got to explore its forests and lakes, where we later would spend a lot of our free time. All the food was really good and it was also local and typical.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "To summarize all this up, this experience has made me grow in many fields, being the main one the knowledge i've acquired regarding domestic violence, and all the others we as a community have shared with each other to get to know us and our culture better. I will forever be grateful to erasmus+ for letting me participate in this, and I will have in mind everything I have learned to carry with me in my life and most importantly I'll also carry with me all the new connections and people who have given me so much.",
        },
      ],
    },

    // ── Experience 3: Marco (text left, photo right) ─────────────────────────
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
          { type: "heading", level: 3, text: "Marco Bermúdez Lara" },
        ],
        [
          { type: "image", src: p[3], alt: "Marco Bermúdez Lara", aspectRatio: "1/1", rounded: "full" },
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
          text: "From November 10th to 17th, I had the opportunity to participate in the *Breaking the Silence* project, an Erasmus+ initiative focused on raising awareness about different types of domestic violence and promoting strategies to prevent them. During seven intense and enriching days, I shared this experience with young people from various European countries in the beautiful city of Ponte de Lima, Portugal.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "The project activities included interactive workshops, group dynamics, and open discussions that helped us understand the roots of domestic violence, identify its multiple forms (physical, emotional, economic, among others), and reflect on how we can contribute to eradicating it in our communities. We also had creative sessions where we used artistic tools such as theater, writing, and campaign design to express our ideas and spread messages of change.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "Beyond the educational moments, I thoroughly enjoyed the welcoming atmosphere of Ponte de Lima, its natural landscapes, and its rich culture. We had time to explore the old town, cross its iconic Roman bridge, and taste the delicious local cuisine. Interacting with participants from different cultures was another highlight that made this experience unique; I learned a lot from their perspectives and forged friendships that I hope will last a lifetime.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "In summary, *Breaking the Silence* was a transformative experience on both a personal and social level. I take away practical tools, new friends, and the motivation to continue working for a fairer and violence-free society. An unforgettable journey that left a deep mark on me!",
        },
      ],
    },

    // ── Experience 4: Maria (photo left, text right) ─────────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "image", src: p[4], alt: "Maria Berral", aspectRatio: "1/1", rounded: "full" },
        ],
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "Maria Berral" },
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
          text: "One more time, I'm going to talk about my experience in an erasmus exchange. This time I had the opportunity to participate in the 'Breaking the silence' project that has taken place in Ponte de Lima, a small city in Portugal. In this project people from Greece, Hungary, Poland, Portugal, Croatia and Spain has share information and opinion about the different types of violence. With different activities as discussions, plays or projects by groups we've learn how to prevent violence, how to identify a victim and an abuser. Apart of this, we've had time to discover a small town that is beautiful, it's surronded by nature. We also had a free day that we enjoyed visiting another portuguese city, Viana do Castelo. As always, I recomend to life this type of experience once in life, at least, because you'll know different cultures, you'll learn about a topic and you'll make important links just in a few days. But it's incredible how in just a week people from different countries can create strong relationships. You won't forget it!",
        },
      ],
    },

    // ── Experience 5: Narai (text left, photo right) — no experience text ────
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
          { type: "heading", level: 3, text: "Narai" },
        ],
        [
          { type: "image", src: p[5], alt: "Narai", aspectRatio: "1/1", rounded: "full" },
        ],
      ],
    },

    // ── Experience 6: Ángel (photo left, text right) — no experience text ───
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "image", src: p[6], alt: "Ángel", aspectRatio: "1/1", rounded: "full" },
        ],
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "Ángel" },
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
      subtitle: "Some photos of the project in Portugal!",
      columns: 3,
      images: [
        { src: p[7],  alt: "Portugal — moment 1" },
        { src: p[8],  alt: "Portugal — moment 2" },
        { src: p[9],  alt: "Portugal — moment 3" },
        { src: p[10], alt: "Portugal — moment 4" },
        { src: p[11], alt: "Portugal — moment 5" },
        { src: p[12], alt: "Portugal — moment 6" },
        { src: p[13], alt: "Portugal — moment 7" },
        { src: p[14], alt: "Portugal — moment 8" },
        { src: p[15], alt: "Portugal — moment 9" },
        { src: p[16], alt: "Portugal — moment 10" },
      ],
    },
  ],
}

export default content
