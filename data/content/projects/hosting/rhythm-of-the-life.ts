import type { PageContent } from "@/types/content"

// Photo naming convention (user uploads to /images/projects/hosting/):
//   rhythm-of-the-life-1.jpeg  – Georgia flag
//   rhythm-of-the-life-2.jpeg  – Greece flag
//   rhythm-of-the-life-3.jpeg  – Lithuania flag
//   rhythm-of-the-life-4.jpeg  – Macedonia flag
//   rhythm-of-the-life-5.jpeg  – Spain flag
//   rhythm-of-the-life-6.jpeg  – Ukraine flag
//   rhythm-of-the-life-7.jpeg  – Day 1 photo
//   rhythm-of-the-life-8.jpeg  – Day 2 photo
//   rhythm-of-the-life-9.jpeg  – Day 3 photo
//   rhythm-of-the-life-10.jpeg – Day 4 photo
//   rhythm-of-the-life-11.jpeg – Day 5 photo
//   rhythm-of-the-life-12.jpeg – Day 6 photo
//   rhythm-of-the-life-13.jpeg – Day 7 photo
//   rhythm-of-the-life-14.jpeg – Day 8 photo
//   rhythm-of-the-life-15.jpeg – Day 9 photo
//   rhythm-of-the-life-16.jpeg … rhythm-of-the-life-31.jpeg – Gallery (4×4 = 16 photos)

const BASE = "/images/projects/hosting"
const p = (n: number) => `${BASE}/rhythm-of-the-life-${n}.jpeg`

const content: PageContent = {
  title: "The Rhythm of the Life (YE)",
  subtitle: "03-12 October 2023 · Puente Genil, Spain",
  heroImage: `${BASE}/hosting-1-cover.jpg`,
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
          text: '"The Rhythm of the life" is an European project that seeks to develop environmental awareness in a diverse group of young people of different nationalities through music as the main tool. This youth exchange is an unique opportunity for young people to explore music as a means to convey important messages about caring for the environment and sustainability. The general objective of "The Rhythm of the Life" is to promote environmental awareness and sensitivity towards caring for the environment among a diverse group of young people of different nationalities through music.',
        },
      ],
    },

    // ── 2. Partner organisations ──────────────────────────────────────────────
    {
      layout: "autoGrid",
      count: 6,
      background: "light",
      paddingY: "lg",
      maxWidth: "xl",
      items: [
        { type: "partner", country: "Georgia",   flag: p(1), organizations: ["Umbrella"] },
        { type: "partner", country: "Greece",    flag: p(2), organizations: ["Go-Alive"] },
        { type: "partner", country: "Lithuania", flag: p(3), organizations: ["Aidin", "Tikarta"] },
        { type: "partner", country: "Macedonia", flag: p(4), organizations: ["Platforma Skopje"] },
        { type: "partner", country: "Spain",     flag: p(5), organizations: ["Erasmiau"] },
        { type: "partner", country: "Ukraine",   flag: p(6), organizations: ["Pangeya"] },
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
          images: [{ src: p(7), alt: "Day 1 – Welcome & Ice Breakers" }],
          text: `In the morning we start meeting the group with some funny Ice Breakers and games to get to know each other!!! We also got to know the town and the rules. We conclude the morning presenting the official schedule and the main information about the programme ERASMUS+, the different opoortunities for youth inside the key actions, the ESC (European Solidarity Corps) and the Discover EU programme!!

In the afternoon we presented the secret friend game and explain some logistical aspects about the accomodation!! We finished the day doing a super awesome activity based on a Imposible Challenge that we finally achieved!

Before dinner, we had a leaders meeting in order to know the first impression of national groups and make sure they are feeling comfortable.

During the night we had the opportunity to know the city doing a night walk all together. Such a nice first day!!`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 2,
          title: "Intercultural Day",
          images: [{ src: p(8), alt: "Day 2 – Intercultural Day" }],
          text: `In the morning we had team building. We played with the concept of language barrier! We were constructing legos in group but we could only use our native language.

Later we had Trust Activities combined with a walk through the city. We achieve to see Genil river finally!

After lunch we had amazing theatrical performances about stereotypes. We try to analyze the stereotypes and get over them from the inside.

In the evening we had intercultural night, where we all shared our traditional gastronomy and had a great time!

Overall we had an amazing day and look forward for what tomorrow brings.`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 3,
          title: "Discover Córdoba",
          images: [{ src: p(9), alt: "Day 3 – Discover Córdoba" }],
          text: `Today we started with earlier breakfast due to our trip to Córdoba! We had breakfast at the hostel and we ate churros with chocolate! Delicious!

We travelled 40 minutes by bus to historically significant city in the Andalusia. Firstly we visited Instituto Andaluz de la Juventud, place for the youth of Córdoba. We had very nice tour in the offices and saw beautiful view from the terrase. After that, we had free time.

Córdoba offered us many beautiful churches, cute narrow streets and of course many shops and coffee shops. The most significance of the city is its diversity. We could see buildings from ancient Rome, catholic churches and also mosques in one city. The weather was warm and the whole day was filled with sun.`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 4,
          title: "ECOIntro",
          images: [{ src: p(10), alt: "Day 4 – ECOIntro" }],
          text: `In the first part of the day we started the session with a short walk in the park as we were divided in pairs and we were disscusing on the ecological statemnets that were shown to us by the facilitators. Also we made a video where we resumed what we think about the specific ecological issue.

Later on we were separated in groups and disucessed on various topics related to ecological issues. The group had moderaotrs and every participant had chance to contribute with their opinion.

We have concluded the day with general presentation and open discussion regarding the same topic.`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 5,
          title: "Roleplay to be GREEN",
          images: [{ src: p(11), alt: "Day 5 – Roleplay to be GREEN" }],
          text: `Today we decided to change the world! And We got Youth in Action Plan.

To achive the set goal, our group was devided into small teams to complete the following tasks: making 15 posters, 40 memes, 3 videos, interviews by journalists about actual ecological situation. For better understanding we've seen 2 videos made by previous project participants.

Started brainstorm for the best ideas!

After catching some good thoughts we went to the following activity "The Trial", where group of judges tried to investigate the case - Humanity vs. The Earth. After a heated arguments, it turned out to be difficult to make a verdict, but in the end, justice prevailed!`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 6,
          title: "Youth in Action",
          images: [{ src: p(12), alt: "Day 6 – Youth in Action" }],
          text: `Today we decided to meet at the conference room, where each team collaborated with great willingness and positive energy, in order to gather some data and documents related to Youth in action plan...

According to yesterday's instructions our group started to search, collect, edit and connect these data in a more practical way. Every team made their part. The journalists and the interviewers found the questionable content. The "video team" made their costumes with creativity and found the plot of their videos. The "poster people" made more posters in a fun atmosphere and the "meme team" created memes with great ingenuity and humor.

At the end of the day, as a secret event, we were entertained by a game, like the well known Squid Game.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod condimentum felis vitae efficitur. Sed vel dictum quam, at blandit leo.`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 7,
          title: "Cooperation",
          images: [{ src: p(13), alt: "Day 7 – Cooperation" }],
          text: `Today we were supposed to finish the preparation and record our movies. Couldn't say that was an easy part :)

Believe me or not, it was such a spectacle: people running, hurrying, preparing costumes, establishing equipment. I would love to relive it.

The evening event was an icing on the cake everyone was that passionately waiting for. We started with memes and had fun looking at cringe photos and captions. We continued with posters to raise ecological awareness and then long-awards movies appeared. Let's be honest, holding tears of joy was the most difficult part. I've never been that proud of myself and other participants. Movies didn't only help us gain knowledge about ecology and necessity to save the planet but also helped us overcome fear of camera and cooperation with other members of this Erasmus exchange.

I'm overexcited about today and I hope you were enjoying this post as well as I enjoyed this wonderful day and ceremony`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 8,
          title: "Discover Málaga",
          images: [{ src: p(14), alt: "Day 8 – Discover Málaga" }],
          text: `Today we start the morning earlier. We had breakfast in the hostel and then we took the bus to go to Malaga. It was a surprise that we didn't expect!

We spent the day knowing Malaga: we met the people, the museums and also the beach. The weather was awesome and it felt like summer doesn't finished yet. We receive so much energy from the Andalusian sun and we spend such a nice afternoon with all the participants!`,
        },
        {
          type: "dayReport",
          titleStyle: "header",
          day: 9,
          title: "Closing + See you later aligater",
          images: [{ src: p(15), alt: "Day 9 – Closing ceremony" }],
          text: `Last day of the project :( In this morning we had the opportunity to say the last words, we talked about the things we learned in the project and we said beautiful words to eachother. We also evaluated the accomodation, food, team, project and content.

In the afternoon we went to have dinner in other place. We had the pleasure to try delicious pizzas while talking with all the participants. After the dinner, we did the YouthPass Ceremony, it was such a magical moment. We all felt that we became a big family ❤️`,
        },
      ],
    },

    // ── 4. Photo Album ────────────────────────────────────────────────────────
    {
      layout: "gallery",
      background: "light",
      paddingY: "lg",
      maxWidth: "xl",
      title: "Photo Album",
      columns: 4,
      images: [
        { src: p(16), alt: "Photo 1" },
        { src: p(17), alt: "Photo 2" },
        { src: p(18), alt: "Photo 3" },
        { src: p(19), alt: "Photo 4" },
        { src: p(20), alt: "Photo 5" },
        { src: p(21), alt: "Photo 6" },
        { src: p(22), alt: "Photo 7" },
        { src: p(23), alt: "Photo 8" },
        { src: p(24), alt: "Photo 9" },
        { src: p(25), alt: "Photo 10" },
        { src: p(26), alt: "Photo 11" },
        { src: p(27), alt: "Photo 12" },
        { src: p(28), alt: "Photo 13" },
        { src: p(29), alt: "Photo 14" },
        { src: p(30), alt: "Photo 15" },
        { src: p(31), alt: "Photo 16" },
      ],
    },
  ],
}

export default content
