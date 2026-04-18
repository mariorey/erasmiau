// Sending project: Digital Tools and Media literacy (APV) — Paralimni, Cyprus
import type { PageContent } from "@/types/content"

const B = "/images/projects/sending/digital-tools-apv"

// Explicit map: number → full path with real extension
// (Placeholders — drop the real files into public/images/projects/sending/digital-tools-apv/
//  and adjust the extensions if they differ.)
const p: Record<number, string> = {
  // Project cover photo (shown next to the project title, APV style)
  1: `${B}/apv-cover.jpg`,
  // Gallery
  2: `${B}/1.jpg`,
  3: `${B}/2.jpg`,
  4: `${B}/3.jpg`,
  5: `${B}/4.jpg`,
  6: `${B}/5.jpg`,
  7: `${B}/6.jpg`,
  8: `${B}/7.jpg`,
}

const content: PageContent = {
  title: "Digital Tools and Media literacy",
  subtitle: "APV in Cyprus (16-19 February 2024)",
  heroImage: p[2],
  sections: [
    // ── Intro block: project title + cover photo (APV style, mirrors the
    //    "participant name + photo" row used in YE/TC projects) ──────────────
    {
      layout: "columns",
      distribution: "50/50",
      verticalAlign: "center",
      background: "white",
      paddingY: "lg",
      maxWidth: "lg",
      columns: [
        [
          { type: "heading", level: 1, text: "APV" },
          { type: "heading", level: 3, text: "Digital Tools and Media literacy" },
        ],
        [
          {
            type: "image",
            src: p[1],
            alt: "Digital Tools and Media literacy APV — Cyprus",
            aspectRatio: "1/1",
            rounded: "full",
          },
        ],
      ],
    },

    // ── Description paragraphs (NOT italic, as requested) ───────────────────
    {
      layout: "single",
      background: "white",
      paddingY: "sm",
      maxWidth: "lg",
      blocks: [
        {
          type: "paragraph",
          size: "lg",
          text: "From February 16th to 19th, a crucial preparatory visit took place in Paralimni, Cyprus, setting the stage for an upcoming training course titled \"Digital Tools and Media Literacy.\" Representatives from each participating country converged to discuss and deliberate various aspects of the forthcoming training, scheduled to be held from April 5th to 13th.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "The preparatory visit served as a platform for fruitful discussions on essential elements of the training course. Among the topics deliberated were the planned activities, their scheduling, proposals for disseminating the project, and the sharing of best practices related to utilizing digital resources in youth work. Each participating association contributed individual insights and ideas to enrich the program.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "The discussions were characterized by a spirit of collaboration and innovation, with participants sharing experiences and offering diverse perspectives on how to effectively integrate digital tools and media literacy into youth development initiatives. The exchange of ideas not only enhanced the quality of the upcoming training but also fostered a sense of camaraderie among the participating organizations.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "One of the highlights of the preparatory visit was the emphasis on exploring innovative approaches to engage youth in meaningful learning experiences through digital media. Participants exchanged insights into emerging trends and effective strategies for leveraging digital platforms to address the needs and interests of young people in diverse cultural contexts.",
        },
        {
          type: "paragraph",
          size: "lg",
          text: "As the preparatory visit drew to a close, participants expressed their appreciation to the host organization, NECI Cyprus, for their warm hospitality and excellent arrangements throughout the event. The professionalism and dedication of the NECI team contributed significantly to the success of the preparatory visit, setting a positive tone for the upcoming training course.",
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
      subtitle: "Some photos of the APV in Cyprus!",
      columns: 3,
      images: [
        { src: p[2], alt: "Cyprus APV — moment 1" },
        { src: p[3], alt: "Cyprus APV — moment 2" },
        { src: p[4], alt: "Cyprus APV — moment 3" },
        { src: p[5], alt: "Cyprus APV — moment 4" },
        { src: p[6], alt: "Cyprus APV — moment 5" },
        { src: p[7], alt: "Cyprus APV — moment 6" },
        { src: p[8], alt: "Cyprus APV — moment 7" },
      ],
    },
  ],
}

export default content
