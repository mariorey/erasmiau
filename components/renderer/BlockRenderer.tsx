"use client"

import { tinaField } from "tinacms/dist/react"
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

export type TinaFieldFor = (field: string) => string | undefined

export function BlockRenderer({ block, tinaRaw }: { block: Block; tinaRaw?: any }) {
  const tf: TinaFieldFor | undefined = tinaRaw
    ? (field) => tinaField(tinaRaw, field) || undefined
    : undefined

  switch (block.type) {
    case "heading":     return <HeadingBlock {...block} tf={tf} />
    case "paragraph":  return <ParagraphBlock {...block} tf={tf} />
    case "image":      return <ImageBlock {...block} tf={tf} />
    case "imageGroup": return <ImageGroupBlock {...block} tf={tf} />
    case "video":      return <VideoEmbedBlock {...block} tf={tf} />
    case "list":       return <ListBlock {...block} tf={tf} />
    case "testimonial":return <TestimonialCard {...block} tf={tf} />
    case "gallery":    return <GalleryBlock {...block} tf={tf} />
    case "dayReport":  return <DayReportBlock {...block} tf={tf} />
    case "outcome":    return <OutcomeBlock {...block} tf={tf} />
    case "spacer":     return <SpacerBlock {...block} tf={tf} />
    case "partner":    return <PartnerCard {...block} tf={tf} />
  }
}
