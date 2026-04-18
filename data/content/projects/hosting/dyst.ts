import type { PageContent } from "@/types/content"

const B = "/images/projects/hosting/dyst"

// Explicit map: number → full path with real extension
const p: Record<number, string> = {
  // Partner flags
  1:  `${B}/1.png`,   // Cyprus
  2:  `${B}/2.png`,   // Albania
  3:  `${B}/3.png`,   // Armenia
  4:  `${B}/4.png`,   // Bulgaria
  5:  `${B}/5.png`,   // Croatia
  6:  `${B}/6.jpg`,   // Greece
  7:  `${B}/7.jpg`,   // Italy
  8:  `${B}/8.png`,   // Portugal
  9:  `${B}/9.png`,   // Romania
  10: `${B}/10.png`,  // Spain
  // Daily report photos
  11: `${B}/11.jpg`,  // Day 1
  12: `${B}/12.jpg`,  // Day 2
  13: `${B}/13.jpg`,  // Day 3
  14: `${B}/14.jpg`,  // Day 4
  15: `${B}/15.jpg`,  // Day 5
  16: `${B}/16.jpg`,  // Day 6
  17: `${B}/17.jpg`,  // Day 7
  18: `${B}/18.jpg`,  // Day 8
  // Gallery (11 photos)
  19: `${B}/19.jpg`,
  20: `${B}/20.jpg`,
  21: `${B}/21.jpg`,
  22: `${B}/22.jpg`,
  23: `${B}/23.jpg`,
  24: `${B}/24.jpg`,
  25: `${B}/25.jpg`,
  26: `${B}/26.jpg`,
  27: `${B}/27.jpg`,
  28: `${B}/28.jpg`,
  29: `${B}/29.jpg`,
  30: `${B}/30.jpg`,
}

const content: PageContent = {
  title: "Developing Youth Skills through Theatre",
  subtitle: "Training Course in Puente Genil, Spain (7-14 November 2023)",
  heroImage: "/images/projects/hosting/hosting-2-cover.jpg",
  sections: [
    // ── 1. Description ────────────────────────────────────────────────────────
    {
      layout: "single",
      background: "white",
      paddingY: "lg",
      maxWidth: "md",
      blocks: [
        { type: "heading", level: 2, text: "Description of the Project" },
        {
          type: "paragraph",
          text: "The DYST (Developing Youth Skills Through Theatre) project seeks to address the need to develop skills and social competences in youth workers and technicians. Youth workers are professionals who works with all types of youth and develops programs and services for them. The job of a youth worker is to help young people to develop their skills and competencies so that they can be successful in their personal and professional lives. Through this project it will be intended to provide tools and resources to reach that table through theater.",
        },
        {
          type: "paragraph",
          text: "We focus this project on those youth workers who work with young people with few opportunities and at risk of social exclusion. The project will provide a unique opportunity to develop valuable skills through hands-on activities and learning experiences in Puente Genil, a small town south of Córdoba, Spain.",
        },
        {
          type: "paragraph",
          text: "The main methodology will be non-formal education linked to theatre. The project aims to improve communication skills, work in team and self-confidence of the participants, which will help them to be successful in their work with young people.",
        },
      ],
    },

    // ── 2. Partner organisations (10 partners → 5-column, 2 rows) ─────────────
    {
      layout: "autoGrid",
      count: 5,
      background: "light",
      paddingY: "lg",
      maxWidth: "xl",
      items: [
        { type: "partner", country: "Cyprus",   flag: p[1],  organizations: ["NECI"] },
        { type: "partner", country: "Albania",  flag: p[2],  organizations: ["Perspektiva"] },
        { type: "partner", country: "Armenia",  flag: p[3],  organizations: ["ABCD"] },
        { type: "partner", country: "Bulgaria", flag: p[4],  organizations: ["Re-Act"] },
        { type: "partner", country: "Croatia",  flag: p[5],  organizations: ["EUTOPIA"] },
        { type: "partner", country: "Greece",   flag: p[6],  organizations: ["EKO"] },
        { type: "partner", country: "Italy",    flag: p[7],  organizations: ["M.Y. CULTURE"] },
        { type: "partner", country: "Portugal", flag: p[8],  organizations: ["Experimentaculo"] },
        { type: "partner", country: "Romania",  flag: p[9],  organizations: ["ATIC"] },
        { type: "partner", country: "Spain",    flag: p[10], organizations: ["Erasmiau"] },
      ],
    },

    // ── 3. Daily Report – 2-column photo-first grid ───────────────────────────
    {
      layout: "autoGrid",
      count: 2,
      background: "white",
      paddingY: "lg",
      maxWidth: "xl",
      title: "Daily Report",
      titleColor: "brand",
      subtitle: "Here you can find a little brief description of the activities of everyday made by the participants.",
      items: [
        {
          type: "dayReport",
          titleStyle: "header",
          day: 1,
          title: "Welcome & Ice Breakers",
          images: [{ src: p[11], alt: "Day 1 – Welcome & Ice Breakers" }],
          text: `First day of the project! So much good vibes in our beautiful place: la Resi ☀️

In the morning we started to know eachother better with some games: we talked about ourselves, and we answer funny questions. We also got to know the hostal rules and we propose some dynamics for the whole experience like "Bora Bora", "Bee on time" or "Churritos".

After the coffee break, we did the "Impossible Mission" which was a group building activity that finally became POSSIBLE!! ⚡

In the afternoon we started with other group building activity in which we needed to build a Lego toy but only speaking in our mother language. We discovered that language is not a barrier! 🌎

We conclude the afternoon session with an activity in couples in which we could work the trust of the partner. It was amazing and we created incredible interviews! After that, we presented the secret friend game and explain some logistical aspects about the accomodation!!

After dinner, we discovered Puente Genil accompanied by some mysterious characters... 🎭`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 2,
          title: "Intercultural Day",
          images: [{ src: p[12], alt: "Day 2 – Intercultural Day" }],
          text: `Today was a day filled with exciting activities at our Training Course, and we're thrilled to share our experiences! Here's a glimpse of what we've been up to:

☀️ Morning Energizers: We kicked off the day with high-energy morning energizers that got everyone pumped up and ready for the day ahead. Laughter and team spirit were the perfect ingredients to start the day on a positive note.

🌍 NGO Fair: In the morning, we participated in a unique activity called the "NGO Fair." We embraced our creativity by crafting eye-catching costumes from paper and took this opportunity to showcase the values of our sending organization. It was an artistic way to express our commitment to making a positive impact on the world.

🎭 Theatre Workshop: During the afternoon, we delved into the world of theatre. We worked in small groups, each representing different profiles of participants we may encounter in our projects. This activity not only helped us improve our communication skills but also gave us valuable insights into effective teamwork and problem-solving.`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 3,
          title: "Body Expression Sessions",
          images: [{ src: p[13], alt: "Day 3 – Body Expression Sessions" }],
          text: `☀️ Morning at Centro Sens: Our morning started with a visit to the enchanting dance academy like no other. Here, the talented teacher and artist, Rocio, led us through a workshop on body expression through the five senses and our deep connection with music. It was a transformative experience that opened our minds and hearts to the beauty of dance and self-expression.

🎭 Afternoon Theatre Dynamics: In the afternoon, we delved into the world of theatre, where we explored the art of connection on stage. Through warm-up exercises, we honed our skills in synchronizing our movements and emotions in a theatrical scene. These activities not only fostered creativity but also strengthened the bonds within our group, reinforcing the idea that in theatre, just like in life, connections are essential ❤️`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 4,
          title: "Discover Córdoba",
          images: [{ src: p[14], alt: "Day 4 – Discover Córdoba" }],
          text: `☀️ Morning Adventure: Our day kicked off with an early breakfast featuring delicious churros, fueling us for the exciting day ahead. We hopped on a bus bound for Cordoba, where our first stop was the Instituto Andaluz de la Juventud. Here, we gained insights into the youth activities in Córdoba. Then, we had a guided tour by the organisation team that transported us through the rich historical places of Cordoba.

🏰 Afternoon Exploration: The afternoon unfolded with free time to explore the beautiful streets of Córdoba. We immersed ourselves in the city's unique atmosphere, creating memories that will last a lifetime.`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 5,
          title: "Interactions between actors",
          images: [{ src: p[15], alt: "Day 5 – Interactions between actors" }],
          text: `☀️ Morning vibe: Our morning kicked off with energizers, setting a vibrant tone for the day. In the spirit of teamwork, we all cleaned our space, creating an environment that reflects our collective commitment to cleanliness and positivity. The morning session centered around theatrical exploration, delving into the intricacies of expressing emotions on stage. The morning became a journey of self-discovery, highlighting how emotions play a crucial role in our interactions and performances. Laughter echoed through the room as we embraced the joy of theatrical expression.

🌆 Afternoon Reflections: The afternoon brought a thought-provoking activity called "Abigail," where we delved into reflection and the perception of storytelling. Engaging in meaningful conversations, we shared insights and deepened our understanding of different perspectives. The day concluded with an informative discussion on the reimbursement process, followed by the kickoff of the playful "Kiss Killer" game, a thrilling adventure that will keep us entertained till the training course finishes!`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 6,
          title: "Change the Story",
          images: [{ src: p[16], alt: "Day 6 – Change the Story" }],
          text: `☀️🌙 Theatrical Creation: From morning until evening, our focus was on the enchanting world of theater. We immersed ourselves in the task of recreating classic tales, envisioning how they would unfold in today's society. The result? A vibrant showcase of modern adaptations that reflected our collective creativity and insight into the dynamics of contemporary life. The process was not only fun but also a valuable exploration of storytelling and the power of reinterpretation.

🌌 Evening Board Game: As the sun set, we transitioned into a cozy and enjoyable evening filled with board games. Gathering together, we shared laughter, friendly competition, and the joy of camaraderie. Board games provided the perfect opportunity to unwind, relax, and strengthen the bonds forged throughout the day ⚡`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 7,
          title: "Youth in Action",
          images: [{ src: p[17], alt: "Day 7 – Youth in Action" }],
          text: `🎬 "Youth in Action" Exploration: Throughout the day, we immersed ourselves in the "Youth in Action" initiative, a hands-on experience that brought out the best in our collaborative spirit. Working in groups, we dove into the realms of video creation, memes, interviews, reports, and poster design. These diverse mediums became our tools for effectively disseminating the valuable work undertaken during the training ⚡

☀️ Youth in Action morning: The morning was dedicated to putting the finishing touches on the creative outputs of our "Youth in Action" initiative. From videos to memes, interviews, reports, and posters, our collaborative efforts came to fruition, showcasing the diverse talents within our group.

🇪🇺 YouthPass Ceremony: In the afternoon, we gathered for the presentation of our Youthpass certificates, tangible proof of our commitment and participation in the Training Course that we can also write in our CV. When the sunset comes, we had the best opportunity to say beautiful words to eachother and give warm hugs to everyone!

🍔 Farewell Dinner: As night fell, we ventured to the charming Nolitos Burger for our Farewell Dinner. In a cozy atmosphere, we watched the results of "Youth in Action" activity. The evening was a perfect blend of joy, happiness and delicious food, creating lasting memories that will be cherished by all of us! ❤️`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 8,
          title: "Closing Day",
          images: [{ src: p[18], alt: "Day 8 – Closing Day" }],
          text: `The final morning of our Training Course. After breakfast, participants gathered one last time, exchanged contacts, and began their journeys back home. 8 days, 10 countries, and countless memories — see you in the next Erasmus+ adventure! 👋`,
        },
      ],
    },

    // ── 4. Photo Album (11 photos) ────────────────────────────────────────────
    {
      layout: "gallery",
      background: "light",
      paddingY: "lg",
      maxWidth: "xl",
      title: "Photo Album",
      subtitle: "Some photos of the project!",
      columns: 4,
      images: [
        { src: p[19], alt: "Photo 1" },
        { src: p[20], alt: "Photo 2" },
        { src: p[21], alt: "Photo 3" },
        { src: p[22], alt: "Photo 4" },
        { src: p[23], alt: "Photo 5" },
        { src: p[24], alt: "Photo 6" },
        { src: p[25], alt: "Photo 7" },
        { src: p[26], alt: "Photo 8" },
        { src: p[27], alt: "Photo 9" },
        { src: p[28], alt: "Photo 10" },
        { src: p[29], alt: "Photo 11" },
        { src: p[30], alt: "Photo 12" },
      ],
    },
  ],
}

export default content
