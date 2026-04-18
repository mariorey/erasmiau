// Sending project: Ain't that funny (YE) — Ponte de Lima, Portugal
import type { PageContent } from "@/types/content"

const B = "/images/projects/sending/aint-that-funny"

// Explicit map: number → full path with real extension
// (Placeholders — drop the real files into public/images/projects/sending/aint-that-funny/
//  and adjust the extensions if they differ.)
const p: Record<number, string> = {
  // Participant portraits
  1: `${B}/marivi.jpg`,
  2: `${B}/elena.jpg`,
  3: `${B}/nerea.jpg`,
  4: `${B}/miguel.jpg`,
  5: `${B}/alberto.jpg`,
  6: `${B}/juanje.jpg`,
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
  17: `${B}/11.jpg`,
  18: `${B}/12.jpg`,
}

const content: PageContent = {
  title: "AIN'T THAT FUNNY",
  subtitle: "Youth Exchange in Portugal (29 February - 8 March 2024)",
  heroImage: "/images/projects/sending/sending-4-cover.jpg",
  sections: [
    // ── Experience 1: Marivi (text left, photo right) ────────────────────────
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
          { type: "heading", level: 3, text: "Marivi Campos" },
        ],
        [
          { type: "image", src: p[1], alt: "Marivi Campos", aspectRatio: "1/1", rounded: "full" },
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
          text: "Once again, I am left speechless by the experience of an Erasmus+ project. This time, I participated in the \"Ain't that funny\" project in a small Portuguese town, where I met people from Croatia, Greece, Spain, Bulgaria, Estonia, and Romania, 🇪🇸🇵🇹🇭🇷🇬🇷🇪🇪🇷🇴 all united by humor and interculturality. The project not only consisted of workshops and activities about humor in different cultures but also of exploring the streets of Ponte de Lima like true humor adventurers. This project, which stands out for its focus on non-formal education, allowed us to learn in a participatory and experiential way, developing social and intercultural skills. My experience was a rollercoaster of emotions, laughter, and learning, which I would definitely repeat. I want to thank the Erasmiau association for enriching my life with this project and for every shared experience. Until the next adventure!",
        },
      ],
    },

    // ── Experience 2: Elena (photo left, text right) ─────────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "image", src: p[2], alt: "Elena Rodriguez", aspectRatio: "1/1", rounded: "full" },
        ],
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "Elena Rodriguez" },
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
          text: "My experience in Ponte de Lima during the \"It's Not That Funny\" exchange, funded by Erasmus+, was truly unforgettable. For nine days, I had the opportunity to immerse myself in the rich Portuguese culture while sharing unforgettable moments with people from different corners of Europe. From the moment I arrived, I was greeted with warm hospitality and a welcoming atmosphere that made me feel at home. During the exchange, we participated in a wide range of activities including creative workshops, intercultural learning sessions and excursions. Every day was full of new experiences and discoveries, from exploring the charming old town to sampling the delicious local cuisine. What made this experience even more special were the friendships I forged. Through collaboration on projects and daily coexistence, we established links that transcended linguistic and cultural barriers. Shared laughter and moments of camaraderie were at the heart of this exchange, creating memories that I will cherish forever. Furthermore, the exchange gave me the opportunity to improve my language skills and intercultural understanding, by interacting with people from different countries and sharing our unique perspectives on the world around us. In short, the \"It's Not That Funny\" exchange at Ponte de Lima was an enriching experience that not only expanded my personal and cultural horizons, but also left me with unforgettable memories and lasting friendships. I am grateful to have had the opportunity to participate in this Erasmus+ funded program and hope to continue exploring the world and building meaningful connections in the future.",
        },
      ],
    },

    // ── Experience 3: Nerea (text left, photo right) ─────────────────────────
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
          { type: "heading", level: 3, text: "Nerea Sánchez" },
        ],
        [
          { type: "image", src: p[3], alt: "Nerea Sánchez", aspectRatio: "1/1", rounded: "full" },
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
          text: "Ah, let me tell you about my unforgettable journey with Erasmus+ in Ponto de Lima! These past 11 days have been an absolute whirlwind of cultural immersion and joy. Thanks to Erasmus+ and @erasmiau, I found myself surrounded by the most amazing individuals, each contributing to my personal growth in their own unique way.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "From the moment I arrived, I was greeted with warmth and hospitality from my newfound friends representing Romania, Croatia, Estonia, Greece, Spain, Bulgaria, and of course, Portugal. Together, we embarked on a journey of exploration, learning, and laughter.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "Every interaction, whether it was sharing stories over meals or discovering the hidden gems of Ponto de Lima, left me feeling culturally enriched and more open-minded than ever before. The diversity of perspectives and experiences within our group sparked fascinating conversations and broadened my understanding of the world.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "But amidst all the learning and cultural exchange, there was no shortage of laughter and fun. Whether it was inside jokes, hilarious mishaps, or spontaneous adventures, we shared countless moments of joy that will stay with me forever.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "As we bid farewell for now, I can't help but feel grateful for the bonds we've formed and the memories we've created together. To my dear friends from across Europe, thank you for the laughter, the lessons, and the love. Until we meet again, my heart is full, and the memories of our time in Ponto de Lima will always bring a smile to my face.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "And to answer your question, YE, ain't that funny? It sure is, and I wouldn't have it any other way.",
        },
      ],
    },

    // ── Experience 4: Miguel (photo left, text right) ────────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "image", src: p[4], alt: "Miguel Santos", aspectRatio: "1/1", rounded: "full" },
        ],
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "Miguel Santos" },
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
          text: "Participating in the \"Ain't that funny\" Erasmus+ project in a quaint Portuguese town was an absolutely speechless experience. Meeting people from Croatia, Greece, Spain, Bulgaria, Estonia, and Romania, all bonded by humor and intercultural exchange, was truly enlightening. The project went beyond just workshops on humor across cultures; it was about becoming humor adventurers in Ponte de Lima's streets. This non-formal education initiative was an immersive journey, fostering social and intercultural skills through participatory learning. My time was filled with laughter, learning, and a spectrum of emotions, making it an experience I'd eagerly relive. Many thanks to Erasmiau association for this enriching adventure and every moment shared. Looking forward to the next one!",
        },
      ],
    },

    // ── Experience 5: Alberto (text left, photo right) ───────────────────────
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
          { type: "heading", level: 3, text: "Alberto Cosano" },
        ],
        [
          { type: "image", src: p[5], alt: "Alberto Cosano", aspectRatio: "1/1", rounded: "full" },
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
          text: "Once again, I find myself immersed in the world of youth exchanges, and once again, it's in the breathtaking setting of Ponte de Lima. This time, the focus of our project was exploring the realms of humor and comedy in today's world, delving into their boundaries and nuances. Through engaging workshops and activities, we not only had a blast but also delved deep into understanding the intricacies of humor and its cultural variations.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "One of the most rewarding aspects of this experience was the opportunity to connect with fellow participants from diverse backgrounds. Each interaction was a chance to broaden my horizons, exchange perspectives, and forge meaningful connections that I'll cherish long after this journey ends. Whether sharing anecdotes, exchanging jokes, or simply engaging in lively discussions, every moment spent with my newfound friends added richness to this unforgettable experience.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "I'm deeply grateful to the organizers and my fellow participants for making this journey possible and for infusing it with such warmth and camaraderie. Their support, laughter, and shared enthusiasm have truly made this experience one to remember. As I bid farewell to Ponte de Lima, I do so with a heart full of gratitude and a sense of anticipation for the next adventure. Here's to the memories made and the friendships forged – until we meet again!",
        },
      ],
    },

    // ── Experience 6: Juanje (photo left, text right) ────────────────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "image", src: p[6], alt: "Juanje Rey", aspectRatio: "1/1", rounded: "full" },
        ],
        [
          { type: "heading", level: 1, text: "My experience" },
          { type: "heading", level: 3, text: "Juanje Rey" },
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
          text: "As I sit here reflecting on my experience in the Erasmus+ project in Portugal, I'm flooded with a whirlwind of emotions. It's hard to put into words just how transformative and enriching this journey has been. From the moment I stepped foot in Ponte de Lima on the 29th of February until our departure on the 8th of March, every moment was filled with laughter, learning, and profound connections.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "The theme of our youth exchange, humor, served as the cornerstone of our activities and discussions. Through engaging workshops and interactive sessions, we delved deep into the essence of humor, exploring its diverse manifestations across cultures and dissecting what makes a joke truly universal. From spontaneous bursts of laughter to thought-provoking conversations, each day brought with it a deeper understanding of the power of humor to bridge divides and foster empathy.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "But beyond the intellectual exploration, it was the bonds formed with fellow participants from seven different countries that truly made this experience unforgettable. Sharing meals, swapping stories, and collaborating on projects, we transcended linguistic and cultural barriers to form a tight-knit community bound by a shared sense of camaraderie and curiosity.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "I'll never forget the late-night conversations under the starry Portuguese sky, the impromptu stand-up comedy performances that had us in stitches, or the moments of vulnerability and authenticity that brought us closer together. Each interaction was a reminder of the beauty of diversity and the strength that lies in unity.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "As I bid farewell to Ponte de Lima and my newfound friends, I carry with me a heart full of gratitude and memories that will last a lifetime. This Erasmus+ project has not only expanded my horizons but has also reaffirmed my belief in the transformative power of youth exchange programs. And as I look towards the future, I am filled with hope, knowing that the bonds forged in Portugal will continue to inspire and sustain me wherever life may lead.",
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
      ],
    },
  ],
}

export default content
