export interface IppPublication {
  slug: string
  title: string
  description: string
  dates: string
  image: string
}

export const ippPublications: IppPublication[] = [
  {
    slug: "project-ipp-started",
    title: "Project IPP Started!",
    description: "Follow us in the Starting of this new adventure :D",
    dates: "February 2025",
    image: "/images/ipp/ipp-1-cover.png",
  },
  {
    slug: "tnm-cyprus",
    title: "TNM Cyprus March 2025",
    description: "Mobility to Cyprus 18-21 March",
    dates: "March 2025",
    image: "/images/ipp/ipp-2-cover.jpg",
  },
  {
    slug: "introducing-par",
    title: "Introducing PAR",
    description: "Follow the journey!",
    dates: "",
    image: "/images/ipp/ipp-3-cover.jpg",
  },
  {
    slug: "par-results",
    title: "PAR Results",
    description: "Share the research.",
    dates: "",
    image: "/images/ipp/ipp-4-cover.jpg",
  },
  {
    slug: "par-final-event",
    title: "PAR Final Event",
    description: "Check what we did?",
    dates: "",
    image: "/images/ipp/ipp-5-cover.jpg",
  },
  {
    slug: "bridge-of-peace",
    title: "Bridge of Peace Mobility",
    description: "Discover the adventure of Elisa, Rosi & Celia",
    dates: "October 2025",
    image: "/images/ipp/ipp-6-cover.png",
  },
  {
    slug: "start-escape-rooms",
    title: "Start of Escape Rooms creation",
    description: "Follow us on our start of the journey!",
    dates: "",
    image: "/images/ipp/ipp-7-cover.jpg",
  },
  {
    slug: "great-escape",
    title: "The Great Escape Adventure",
    description: "Check what are we up to!",
    dates: "December 2025",
    image: "/images/ipp/ipp-8-cover.jpg",
  },
  {
    slug: "escape-rooms-progress",
    title: "Escape Rooms Progress",
    description: "Would you dare to play?",
    dates: "January 2026",
    image: "/images/ipp/ipp-9-cover.jpg",
  },
]

export function getIppPublicationBySlug(slug: string): IppPublication | undefined {
  return ippPublications.find((p) => p.slug === slug)
}
