// Example 1: Structured page with daily reports (hosting project)
import type { PageContent } from "@/types/content"

const content: PageContent = {
  title: "The Rhythm of the Life (YE)",
  subtitle: "03-12 October 2023 · Puente Genil, Spain",
  heroImage: "/images/projects/hosting/hosting-1-cover.jpg",
  sections: [
    // 1. Intro: 60/40 text + image
    {
      layout: "columns",
      distribution: "60/40",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "heading", level: 2, text: "About the project" },
          {
            type: "paragraph",
            text: '"The Rhythm of the Life" is a European Youth Exchange that seeks to develop environmental awareness in a diverse group of young people of different nationalities through music as the main tool.',
          },
          {
            type: "paragraph",
            text: "During 10 days, 30 young people from 6 different countries gathered in Puente Genil to create music together, share their cultures, and build a common vision for a greener Europe.",
          },
          {
            type: "list",
            style: "bullet",
            items: [
              "30 participants from 6 countries",
              "10 days of activities and workshops",
              "Environmental awareness through music",
              "Partners from Italy, Poland, Greece, Romania and Portugal",
            ],
          },
        ],
        [
          {
            type: "image",
            src: "/images/projects/hosting/hosting-1-cover.jpg",
            alt: "Participants of The Rhythm of the Life project",
            aspectRatio: "4/3",
            rounded: true,
          },
        ],
      ],
    },

    // 2. Gallery
    {
      layout: "gallery",
      background: "light",
      paddingY: "lg",
      maxWidth: "xl",
      title: "Project Gallery",
      columns: 4,
      images: [
        { src: "/images/projects/hosting/hosting-1-cover.jpg", alt: "Group photo" },
        { src: "/images/projects/hosting/hosting-2-cover.jpg", alt: "Workshop session" },
        { src: "/images/projects/hosting/hosting-1-cover.jpg", alt: "Music session" },
        { src: "/images/projects/hosting/hosting-2-cover.jpg", alt: "Evening activity" },
        { src: "/images/projects/hosting/hosting-1-cover.jpg", alt: "Nature walk" },
        { src: "/images/projects/hosting/hosting-2-cover.jpg", alt: "Final concert" },
        { src: "/images/projects/hosting/hosting-1-cover.jpg", alt: "Team building" },
        { src: "/images/projects/hosting/hosting-2-cover.jpg", alt: "Closing ceremony" },
      ],
    },

    // 3. Daily reports (repeater)
    {
      layout: "repeater",
      background: "white",
      paddingY: "lg",
      maxWidth: "md",
      title: "Daily Reports",
      items: [
        {
          type: "dayReport",
          day: 1,
          title: "Arrival & Welcome",
          text: "Participants arrived from all 6 countries and gathered at the youth center for an energetic icebreaker evening. The program kicked off with a welcome dinner featuring local food, traditional music, and an introduction to the project goals.",
          images: [
            { src: "/images/projects/hosting/hosting-1-cover.jpg", alt: "Welcome dinner" },
            { src: "/images/projects/hosting/hosting-2-cover.jpg", alt: "Icebreaker games" },
          ],
        },
        {
          type: "dayReport",
          day: 2,
          title: "Music & Environment Workshop",
          text: "Morning session explored the connection between music and nature. Participants listened to field recordings of natural environments and experimented with creating soundscapes using organic materials — stones, leaves, wind, water.",
          images: [
            { src: "/images/projects/hosting/hosting-1-cover.jpg", alt: "Workshop session" },
          ],
        },
        {
          type: "dayReport",
          day: 3,
          title: "Nature Walk & Composition",
          text: "A guided nature walk through the countryside surrounding Puente Genil, collecting sounds and inspiration. In the afternoon, groups began composing original pieces that reflected their environmental experiences.",
        },
        {
          type: "dayReport",
          day: 4,
          title: "Cultural Exchange Evening",
          text: "Each national group presented traditional music and environmental traditions from their country. The evening ended with a spontaneous jam session that mixed all six musical traditions into one unforgettable performance.",
          images: [
            { src: "/images/projects/hosting/hosting-1-cover.jpg", alt: "Cultural night" },
            { src: "/images/projects/hosting/hosting-2-cover.jpg", alt: "Performances" },
            { src: "/images/projects/hosting/hosting-1-cover.jpg", alt: "Jam session" },
          ],
        },
        {
          type: "dayReport",
          day: "Final Day",
          title: "The Grand Concert",
          text: 'The project culminated in a public concert in the main square of Puente Genil. All groups performed their original compositions inspired by the environment. Over 200 local residents attended, making "The Rhythm of the Life" an unforgettable closing ceremony.',
          images: [
            { src: "/images/projects/hosting/hosting-1-cover.jpg", alt: "Grand concert" },
            { src: "/images/projects/hosting/hosting-2-cover.jpg", alt: "Audience" },
          ],
        },
      ],
    },
  ],
}

export default content
