import type { Block } from "@/types/content"
import { HeadingBlock } from "./blocks/HeadingBlock"
import { ParagraphBlock } from "./blocks/ParagraphBlock"
import { ImageBlock } from "./blocks/ImageBlock"
import { ImageGroupBlock } from "./blocks/ImageGroupBlock"
import { VideoEmbedBlock } from "./blocks/VideoEmbedBlock"
import { ListBlock } from "./blocks/ListBlock"
import { TestimonialCard } from "./blocks/TestimonialCard"
import { GalleryBlock } from "./blocks/GalleryBlock"
import { DayReportBlock } from "./blocks/DayReportBlock"
import { OutcomeBlock } from "./blocks/OutcomeBlock"
import { SpacerBlock } from "./blocks/SpacerBlock"
import { PartnerCard } from "./blocks/PartnerCard"

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "heading":     return <HeadingBlock {...block} />
    case "paragraph":  return <ParagraphBlock {...block} />
    case "image":      return <ImageBlock {...block} />
    case "imageGroup": return <ImageGroupBlock {...block} />
    case "video":      return <VideoEmbedBlock {...block} />
    case "list":       return <ListBlock {...block} />
    case "testimonial":return <TestimonialCard {...block} />
    case "gallery":    return <GalleryBlock {...block} />
    case "dayReport":  return <DayReportBlock {...block} />
    case "outcome":    return <OutcomeBlock {...block} />
    case "spacer":     return <SpacerBlock {...block} />
    case "partner":    return <PartnerCard {...block} />
  }
}
