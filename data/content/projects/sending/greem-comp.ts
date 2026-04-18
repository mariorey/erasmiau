// Example 2: Testimonials-based page (sending project)
import type { PageContent } from "@/types/content"

const content: PageContent = {
  title: "Green Comp for Youth Workers (TC)",
  subtitle: "14-21 September 2023 · Kozani, Greece",
  heroImage: "/images/projects/sending/sending-1-cover.jpg",
  sections: [
    // 1. Intro
    {
      layout: "single",
      background: "white",
      paddingY: "lg",
      maxWidth: "md",
      blocks: [
        { type: "heading", level: 2, text: "Green Comp for Youth Workers" },
        {
          type: "paragraph",
          text: "Three members of Erasmiau — Leyre, Lourdes and Miriam — traveled to Kozani, Greece, for this Training Course focused on developing green competences among youth workers across Europe.",
        },
        {
          type: "paragraph",
          text: "Over 8 days, 35 youth workers from 12 countries worked together to build practical skills for incorporating environmental education into their work with young people.",
        },
      ],
    },

    // 2. Two column: image + what we learned
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "light",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          {
            type: "image",
            src: "/images/projects/sending/sending-1-cover.jpg",
            alt: "Participants at Green Comp TC in Greece",
            aspectRatio: "4/3",
            rounded: true,
          },
        ],
        [
          { type: "heading", level: 3, text: "What did we learn?" },
          {
            type: "list",
            style: "numbered",
            items: [
              "How to design non-formal education activities around sustainability",
              "The GreenComp framework and its 12 competences",
              "Practical tools for environmental youth work",
              "How to facilitate eco-themed workshops for young people",
              "Cross-cultural approaches to environmental education",
            ],
          },
        ],
      ],
    },

    // 3. Testimonials
    {
      layout: "testimonials",
      background: "white",
      paddingY: "lg",
      maxWidth: "xl",
      title: "What our participants say",
      testimonials: [
        {
          type: "testimonial",
          name: "Leyre",
          role: "Youth worker",
          country: "Spain",
          text: "This training completely changed how I approach environmental topics with young people. The tools we learned are immediately applicable and the connections I made with other youth workers across Europe were invaluable.",
        },
        {
          type: "testimonial",
          name: "Lourdes",
          role: "Youth worker",
          country: "Spain",
          text: "Kozani is a beautiful place and the organising team created such a welcoming atmosphere. I came back full of ideas and energy to implement sustainability projects with our youth group.",
        },
        {
          type: "testimonial",
          name: "Miriam",
          role: "Youth worker",
          country: "Spain",
          text: "I was surprised by how practical and hands-on the workshops were. We didn't just talk about green topics — we actually practised creating activities, facilitating discussions, and measuring impact. Highly recommended.",
        },
      ],
    },

    // 4. Gallery
    {
      layout: "gallery",
      background: "light",
      paddingY: "lg",
      maxWidth: "xl",
      title: "Moments from Greece",
      columns: 3,
      images: [
        { src: "/images/projects/sending/sending-1-cover.jpg", alt: "Workshop" },
        { src: "/images/projects/sending/sending-2-cover.jpg", alt: "Team activities" },
        { src: "/images/projects/sending/sending-3-cover.jpg", alt: "Group work" },
        { src: "/images/projects/sending/sending-4-cover.jpg", alt: "Presentations" },
        { src: "/images/projects/sending/sending-1-cover.jpg", alt: "Evening activities" },
        { src: "/images/projects/sending/sending-2-cover.jpg", alt: "Final celebration" },
      ],
    },
  ],
}

export default content
