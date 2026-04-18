// =========== BLOCKS ===========

export interface HeadingBlock {
  type: "heading"
  level?: 1 | 2 | 3 | 4
  text: string
}

export interface ParagraphBlock {
  type: "paragraph"
  text: string
}

export interface ImageBlock {
  type: "image"
  src: string
  alt?: string
  caption?: string
  aspectRatio?: "auto" | "4/3" | "16/9" | "1/1" | "3/4"
  rounded?: boolean | "full"
  priority?: boolean
}

export interface ImageGroupBlock {
  type: "imageGroup"
  images: Array<{ src: string; alt?: string }>
  columns?: 2 | 3 | 4
}

export interface VideoBlock {
  type: "video"
  platform: "youtube" | "instagram"
  id: string
  title?: string
}

export interface ListBlock {
  type: "list"
  style?: "bullet" | "numbered"
  items: string[]
}

export interface TestimonialBlock {
  type: "testimonial"
  name: string
  role?: string
  country?: string
  text: string
  avatar?: string
}

export interface GalleryBlock {
  type: "gallery"
  images: Array<{ src: string; alt?: string }>
  columns?: 2 | 3 | 4 | 5
}

export interface DayReportBlock {
  type: "dayReport"
  day: string | number
  title?: string
  // Use \n\n between paragraphs for multi-paragraph days
  text: string
  images?: Array<{ src: string; alt?: string }>
  // "header": photo first, then red "Day X: Title" heading, then text paragraphs
  // "badge" (default): red badge label, then title, then text, then images below
  titleStyle?: "badge" | "header"
}

export interface PartnerBlock {
  type: "partner"
  country: string
  flag: string
  organizations: string[]
}

export interface OutcomeBlock {
  type: "outcome"
  number: number | string
  title: string
  description: string
}

export interface SpacerBlock {
  type: "spacer"
  size?: "sm" | "md" | "lg"
}

export type Block =
  | HeadingBlock
  | ParagraphBlock
  | ImageBlock
  | ImageGroupBlock
  | VideoBlock
  | ListBlock
  | TestimonialBlock
  | GalleryBlock
  | DayReportBlock
  | OutcomeBlock
  | SpacerBlock
  | PartnerBlock

// =========== SECTIONS ===========

export interface SectionBase {
  id?: string
  background?: "white" | "light" | "dark" | "brand"
  paddingY?: "none" | "sm" | "md" | "lg"
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full"
}

export interface SingleColumnSection extends SectionBase {
  layout: "single"
  blocks: Block[]
}

export interface TwoColumnSection extends SectionBase {
  layout: "columns"
  distribution?: "50/50" | "60/40" | "70/30" | "40/60" | "30/70"
  verticalAlign?: "top" | "center" | "bottom"
  gap?: "sm" | "md" | "lg"
  columns: [Block[], Block[]]
}

export interface MultiColumnSection extends SectionBase {
  layout: "grid"
  count: 3 | 4
  gap?: "sm" | "md" | "lg"
  columns: Block[][]
}

export interface TestimonialsSection extends SectionBase {
  layout: "testimonials"
  title?: string
  testimonials: TestimonialBlock[]
}

export interface GallerySection extends SectionBase {
  layout: "gallery"
  title?: string
  images: Array<{ src: string; alt?: string }>
  columns?: 2 | 3 | 4 | 5
}

export interface RepeaterSection extends SectionBase {
  layout: "repeater"
  title?: string
  items: Array<DayReportBlock | OutcomeBlock>
}

// Flat list of blocks placed automatically into an N-column CSS grid.
// Unlike MultiColumnSection, you don't assign blocks to specific columns —
// the grid places them left-to-right, top-to-bottom.
export interface AutoGridSection extends SectionBase {
  layout: "autoGrid"
  count: 2 | 3 | 4 | 6
  items: Block[]
  title?: string
  subtitle?: string
  titleColor?: "default" | "brand"
}

export type Section =
  | SingleColumnSection
  | TwoColumnSection
  | MultiColumnSection
  | TestimonialsSection
  | GallerySection
  | RepeaterSection
  | AutoGridSection

// =========== PAGE ===========

export interface PageContent {
  title: string
  subtitle?: string
  heroImage?: string
  sections: Section[]
}
