// Sending project: BACK TO THE ROOTS (YE) — Đakovo, Croatia
import type { PageContent } from "@/types/content"

const B = "/images/projects/sending/back-to-the-roots"

// Explicit map: number → full path with real extension
// (Placeholders — drop the real files into public/images/projects/sending/back-to-the-roots/
//  and adjust the extensions if they differ.)
const p: Record<number, string> = {
  // Participant portraits
  1: `${B}/belen.jpg`,
  2: `${B}/sara.jpg`,
  3: `${B}/carmen.png`,
  4: `${B}/paula.jpg`,
  5: `${B}/diego.jpg`,
  6: `${B}/rafa.jpg`,
  7: `${B}/noelia.jpg`,
  8: `${B}/luna.jpg`,
  9: `${B}/miguel.jpg`,
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
}

// Helper to build "heading + name + photo" row with alternating side.
function participantRow(
  nameHeading: string,
  photoSrc: string,
  alt: string,
  photoOnRight: boolean,
) {
  const textCol = [
    { type: "heading", level: 1, text: "My experience" } as const,
    { type: "heading", level: 3, text: nameHeading } as const,
  ]
  const imgCol = [
    { type: "image", src: photoSrc, alt, aspectRatio: "1/1", rounded: "full" } as const,
  ]
  return {
    layout: "columns" as const,
    distribution: "50/50" as const,
    verticalAlign: "center" as const,
    background: "white" as const,
    paddingY: "lg" as const,
    maxWidth: "lg" as const,
    columns: (photoOnRight ? [textCol, imgCol] : [imgCol, textCol]) as [
      typeof textCol,
      typeof imgCol,
    ],
  }
}

const content: PageContent = {
  title: "BACK TO THE ROOTS",
  subtitle: "Youth Exchange in Croatia (6-15 September 2024)",
  heroImage: "/images/projects/sending/sending-8-cover.jpg",
  sections: [
    // ── 1. Belén (text left, photo right) ────────────────────────────────────
    participantRow("Belén Ruiz", p[1], "Belén Ruiz", true),
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
          text: "I can't believe I'm writing this right now because it seems like yesterday when we arrived at Đakovo, Croatia and we all introduced ourselves there. This instills how my experience has been there, because it is clear that all good things fly.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "I decided to put my name down on this Erasmus+ Project because I thought it was the perfect way to widen my horizons, to develop my skills and my English level while I will have a great time. Once I have lived my experience, I can assure you this experience have passed and overcome my expectations.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "I have laughted, cried, danced, sung… but, especially, I have met wonderful people with the same interests like me. That's why, above all the knowledge I've acquired, I've achived a myriad of memories, experiences, talks, lessons and friendships that I will always keep in my heart.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "So I say goodbye really grateful for the privilege that I've lived. I'm looking forward to repeat, to meet again with my Serbia, Rumania and Croatia's friends and to make more friends another time. See you soon!!!",
        },
      ],
    },

    // ── 2. Sara (photo left) ─────────────────────────────────────────────────
    participantRow("Sara Marín", p[2], "Sara Marín", false),
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
          text: "Participating in the Erasmus+ project \"Back to the Roots\" in Dakovo, Croatia was an experience to explore the relationship between humans and nature through outdoor activities and sustainability workshops. In addition, it was also an opportunity to meet people from Serbia, Spain, Romania and Croatia. Together we made a good team. My time was full of learning and laughter. Many thanks to the Erasmiau association for this adventure, since it was my first project.",
        },
      ],
    },

    // ── 3. Carmen (text left) ────────────────────────────────────────────────
    participantRow("Carmen Díaz", p[3], "Carmen Díaz", true),
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
          text: "I just don't know how to begin describing the craziest trip i've even done in just few lines, a trip that has left me feeling completely happy.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "I would like to start talking about Đakovo, a magical city and the perfect destination for the project's goal; environmental awareness. I enjoyed unique activities, walks along the forest, the incredible background…",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "But what i underline most from this experience are people. Serbians, Croatians, Romanians and Spaniard, different people who came together and formed a big family. What can I say, from them I take away the moments we spent at home all together, the late-night conversations, and the group activities… just thinking about it makes me smile.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "I can only be gratefull for this opportunity, these types of experiences are meant to be lived, and I hope to do it again soon!",
        },
      ],
    },

    // ── 4. Paula (photo left) ────────────────────────────────────────────────
    participantRow("Paula Borrego", p[4], "Paula Borrego", false),
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
          text: "My experience during Erasmus in Đakovo was truly unforgettable. From the very first day, living with people from Croatia, Serbia, and Romania made every moment enriching, both culturally and personally. Sharing day-to-day life with individuals from these countries allowed me to discover their customs, learn a bit of their languages, and enjoy a diversity I had never experienced before.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "The food was undoubtedly one of the highlights. Every dish I tried was a blend of authentic, traditional flavors, from Croatian stews to Serbian and Romanian specialties that we all shared. The staff, always attentive and willing to help, made us feel at home from the very beginning, always with a smile and kindness.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "The accommodation was another highlight. We stayed in a cozy and comfortable place, surrounded by nature, which created a relaxed atmosphere, perfect for unwinding. Additionally, the outdoor activities were incredible. From hiking through nearby fields and hills to more adventurous activities, everything was organized to ensure we could fully enjoy the natural beauty of Đakovo. Without a doubt, it was an experience that left me with great friends, unforgettable memories, and a deep connection with the region and its people.",
        },
      ],
    },

    // ── 5. Diego (text left) ─────────────────────────────────────────────────
    participantRow("Diego Rey", p[5], "Diego Rey", true),
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
          text: "Participating in the Erasmus exchange in Đakovo, Croatia, as part of the \"Back to the Roots\" project was an incredibly enriching experience focused on ecology and sustainability. Đakovo, with its rich history and beautiful natural surroundings, provided the perfect setting to explore the relationship between environmental conservation and community life.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "The project featured a mix of workshops, discussions, and hands-on activities aimed at raising awareness about sustainable living. We engaged in practical tasks like tree planting and visited local farms to learn about organic farming and biodiversity. These experiences highlighted the importance of reconnecting with nature and making conscious choices that positively impact the environment.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "One of the most rewarding aspects was the diverse group of participants. Coming from various countries, we exchanged ideas and perspectives on environmental challenges while forming a close-knit community. The shared goal of promoting ecological awareness brought us together and led to insightful conversations and meaningful collaborations.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "Beyond the educational component, the cultural immersion in Đakovo was a highlight. The town's commitment to sustainability was evident in its traditions and daily life. The warm hospitality of the locals, the chance to taste traditional Croatian cuisine, and the opportunity to participate in cultural events made the experience even more special.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "\"Back to the Roots\" not only deepened my understanding of ecological issues but also inspired me to adopt more sustainable practices in my own life. The knowledge, connections, and memories I gained during this Erasmus exchange have had a lasting impact, both personally and environmentally.",
        },
      ],
    },

    // ── 6. Rafa (photo left) ─────────────────────────────────────────────────
    participantRow("Rafa Torres", p[6], "Rafa Torres", false),
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
          text: "Once the trip is over and analyzing everything that has happened during these 9 days, it is very difficult to explain my feeling of gratitude to my colleagues and trainers of the back to the roots project. When I was notified that I had entered this project, I never imagined that I was going to live an experience that marked me so much. As for the activities carried out in the project have been incredible, my favorite was undoubtedly the theater that we do by group in relation to the environment, some others I would have liked to have been more dynamic but everything cannot be perfect. I still remember the first day, the presentation day in which we were all nervous in a circle and little by little through a game we introduced ourselves and later talking to each other, despite the fact that my level of English is quite fair this experience has made me realize how important languages are and the doors they open to meet other people.",
        },
      ],
    },

    // ── 7. Noelia (text left) ────────────────────────────────────────────────
    participantRow("Noelia Quero", p[7], "Noelia Quero", true),
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
          text: "The project in Croatia was my first activitie out of Spain, and I think it has changed mi point of view of life, it was a crazy experience in all the ways it could be, I am so thankful with every single person that has been there and participated to help this to be the perfect experience for us.",
        },
      ],
    },

    // ── 8. Luna (photo left) ─────────────────────────────────────────────────
    participantRow("Luna Roa", p[8], "Luna Roa", false),
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
          text: "My experience in Dakovo, Croatia, during the \"Back to the roots\" project was unforgettable. I really enjoyed all the activities but the best part of the project was the communication in English and the friends that I could meet. In those 9 days we had the chance to know about the cultures of the countries (Croatia, Serbia, Rumania), also the music, the gastronomy, the lifestyle… The first day when I arrived I felt so impressed with the big and comfortable apartment where I was going to spend the best 9 days of my life. The schedule was different than in Spain but was perfect for me. Other fact is the variety of activities from watching documentaries, trying different food and walk around the city to spending the hole day in the woods. The freedom that I felt in the nature was a new feeling for me. I have learned that the language and the differences would never be an impediment to have a comfortable coexistence, actually these variance is the door of the knowledge. I'm sure that all of us could improve our English and our communication skills in a big way. To sum up, the erasmus around Europe is the best experience that everyone can ever have, in the cultural way as in the opening mind way. I'm pretty glad to had the chance to participated in the Erasmus+ project and now I'm looking forward to traveling around the world and exploring other cultures.",
        },
      ],
    },

    // ── 9. Miguel (text left) ────────────────────────────────────────────────
    participantRow("Miguel Santos", p[9], "Miguel Santos", true),
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
          text: "Joining the Erasmus+ \"Back to the Roots\" project in Dakovo, Croatia was so much fun! I got to learn about how people and nature are connected through outdoor games and cool workshops on how to take care of the environment. It was really interesting, and I learned a lot about how we can help protect nature.",
        },
        {
          type: "paragraph",
          italic: true,
          size: "lg",
          text: "One of the best parts was meeting new friends from Serbia, Spain, Romania, and Croatia. We all worked together as a team, and even though we came from different countries, we had a lot of fun. We laughed, learned, and played together, and it made the experience even better.",
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
      subtitle: "Some photos of the project in Croatia!",
      columns: 3,
      images: [
        { src: p[10], alt: "Croatia — moment 1" },
        { src: p[11], alt: "Croatia — moment 2" },
        { src: p[12], alt: "Croatia — moment 3" },
        { src: p[13], alt: "Croatia — moment 4" },
        { src: p[14], alt: "Croatia — moment 5" },
        { src: p[15], alt: "Croatia — moment 6" },
        { src: p[16], alt: "Croatia — moment 7" },
        { src: p[17], alt: "Croatia — moment 8" },
        { src: p[18], alt: "Croatia — moment 9" },
        { src: p[19], alt: "Croatia — moment 10" },
        { src: p[20], alt: "Croatia — moment 11" },
        { src: p[21], alt: "Croatia — moment 12" },
      ],
    },
  ],
}

export default content
