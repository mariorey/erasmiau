// Example 3: Irregular layout — mixed columns, images, video, testimonial inline
import type { PageContent } from "@/types/content"

const content: PageContent = {
  title: "Europe 4 ALL (Inclusion for DiscoverEU)",
  subtitle: "DiscoverEU · Alejandro, Diego, Marivi, Olivia & Patri",
  heroImage: "/images/projects/interrail/interrail-1-cover.jpg",
  sections: [
    // 1. Full-width narrative intro
    {
      layout: "single",
      background: "white",
      paddingY: "lg",
      maxWidth: "md",
      blocks: [
        { type: "heading", level: 1, text: "Europe 4 ALL" },
        {
          type: "paragraph",
          text: "Five young people from Puente Genil set off on a 3-week Interrail adventure across Europe with a special mission: to prove that young people with fewer opportunities can experience Europe too.",
        },
        {
          type: "paragraph",
          text: "Alejandro, Diego, Marivi, Olivia, and Patri traveled through 7 countries, visited 15 cities, and documented every moment to inspire other young people from their community.",
        },
      ],
    },

    // 2. Irregular: 60/40 — big image left, route list + 3 small images right
    {
      layout: "columns",
      distribution: "60/40",
      verticalAlign: "top",
      background: "white",
      paddingY: "md",
      maxWidth: "xl",
      columns: [
        [
          {
            type: "image",
            src: "/images/projects/interrail/interrail-1-cover.jpg",
            alt: "The group at their first stop",
            aspectRatio: "4/3",
            rounded: true,
          },
        ],
        [
          { type: "heading", level: 3, text: "The Route" },
          {
            type: "list",
            style: "bullet",
            items: [
              "Madrid → Paris (TGV)",
              "Paris → Amsterdam",
              "Amsterdam → Berlin",
              "Berlin → Prague",
              "Prague → Vienna",
              "Vienna → Budapest",
              "Budapest → Barcelona → Home",
            ],
          },
          { type: "spacer", size: "sm" },
          {
            type: "imageGroup",
            columns: 3,
            images: [
              { src: "/images/projects/interrail/interrail-2-cover.jpg", alt: "Paris" },
              { src: "/images/projects/interrail/interrail-1-cover.jpg", alt: "Amsterdam" },
              { src: "/images/projects/interrail/interrail-2-cover.jpg", alt: "Berlin" },
            ],
          },
        ],
      ],
    },

    // 3. 4-column alternating: image, text, image, text
    {
      layout: "grid",
      count: 4,
      background: "light",
      paddingY: "lg",
      maxWidth: "xl",
      columns: [
        [
          {
            type: "image",
            src: "/images/projects/interrail/interrail-1-cover.jpg",
            alt: "Paris",
            aspectRatio: "3/4",
            rounded: true,
          },
        ],
        [
          { type: "heading", level: 3, text: "Paris" },
          {
            type: "paragraph",
            text: "3 days in the City of Light. Louvre, Eiffel Tower, and a traditional dinner with a local host family who spoke no Spanish — but shared everything.",
          },
        ],
        [
          {
            type: "image",
            src: "/images/projects/interrail/interrail-2-cover.jpg",
            alt: "Amsterdam",
            aspectRatio: "3/4",
            rounded: true,
          },
        ],
        [
          { type: "heading", level: 3, text: "Amsterdam" },
          {
            type: "paragraph",
            text: "2 days cycling through the canals. The group met a local youth organisation and spent an afternoon volunteering in a community garden.",
          },
        ],
      ],
    },

    // 4. Video section — single column with video embed
    {
      layout: "single",
      background: "white",
      paddingY: "lg",
      maxWidth: "md",
      blocks: [
        { type: "heading", level: 2, text: "Watch our story" },
        {
          type: "paragraph",
          text: "Alejandro and Diego documented the entire trip. Here is the short film they created to share with their community back in Puente Genil:",
        },
        {
          type: "video",
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "Europe 4 ALL — Interrail Documentary",
        },
      ],
    },

    // 5. Gallery
    {
      layout: "gallery",
      background: "light",
      paddingY: "lg",
      maxWidth: "xl",
      title: "3 weeks · 7 countries · 15 cities",
      columns: 4,
      images: [
        { src: "/images/projects/interrail/interrail-1-cover.jpg", alt: "Paris" },
        { src: "/images/projects/interrail/interrail-2-cover.jpg", alt: "Amsterdam" },
        { src: "/images/projects/interrail/interrail-1-cover.jpg", alt: "Berlin" },
        { src: "/images/projects/interrail/interrail-2-cover.jpg", alt: "Prague" },
        { src: "/images/projects/interrail/interrail-1-cover.jpg", alt: "Vienna" },
        { src: "/images/projects/interrail/interrail-2-cover.jpg", alt: "Budapest" },
        { src: "/images/projects/interrail/interrail-1-cover.jpg", alt: "Barcelona" },
        { src: "/images/projects/interrail/interrail-2-cover.jpg", alt: "Group photo" },
      ],
    },

    // 6. Closing: 50/50 narrative + image + inline testimonial
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "heading", level: 2, text: "Why this project matters" },
          {
            type: "paragraph",
            text: "Many young people from smaller towns like Puente Genil never get the chance to experience Europe first-hand. The DiscoverEU Inclusion strand exists precisely to change that.",
          },
          {
            type: "paragraph",
            text: 'For Alejandro, who has a visual impairment, this was his first international trip. "I always thought Europe was for other people," he said. "Now I know it\'s for me too."',
          },
          {
            type: "paragraph",
            text: "Since returning, the group has given presentations at 3 local schools, inspiring over 200 students to apply for their own DiscoverEU passes.",
          },
        ],
        [
          {
            type: "image",
            src: "/images/projects/interrail/interrail-2-cover.jpg",
            alt: "Group returning home",
            aspectRatio: "4/3",
            rounded: true,
          },
          { type: "spacer", size: "sm" },
          {
            type: "testimonial",
            name: "Alejandro",
            country: "Spain",
            text: "I always thought Europe was for other people. Now I know it's for me too.",
          },
        ],
      ],
    },
  ],
}

export default content
