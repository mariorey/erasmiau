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
import { QuoteBlock } from "./blocks/QuoteBlock"
import { SpacerBlock } from "./blocks/SpacerBlock"
import { PartnerCard } from "./blocks/PartnerCard"
import { ParticipantBlock } from "./blocks/ParticipantBlock"
import { PhotoFeatureBlock } from "./blocks/PhotoFeatureBlock"
import { LinkGridBlock } from "./blocks/LinkGridBlock"
import { ButtonBlock } from "./blocks/ButtonBlock"

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
    case "quote":    return <QuoteBlock {...block} tf={tf} />
    case "spacer":     return <SpacerBlock {...block} tf={tf} />
    case "partner":     return <PartnerCard {...block} tf={tf} />
    case "participant":   return <ParticipantBlock {...block} tf={tf} />
    case "photoFeature": return <PhotoFeatureBlock {...block} tf={tf} />
    case "linkGrid":     return <LinkGridBlock {...block} tf={tf} />
    case "button":       return <ButtonBlock {...block} tf={tf} />
  }
}
