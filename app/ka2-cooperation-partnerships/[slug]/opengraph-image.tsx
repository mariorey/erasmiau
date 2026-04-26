import { buildOgImage, OG_SIZE } from "@/lib/og"
import { getIppPublicationBySlug } from "@/data/ipp-publications"

export const alt = "Erasmiau – KA2: Inclusive Pathways to Peace"
export const size = OG_SIZE
export const contentType = "image/png"

export default function Image({ params }: { params: { slug: string } }) {
  const pub = getIppPublicationBySlug(params.slug)
  const title = pub?.title ?? params.slug
  return buildOgImage(title, "KA2: Inclusive Pathways to Peace")
}
