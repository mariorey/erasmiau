import { buildOgImage, OG_SIZE } from "@/lib/og"
import { getIppPublicationBySlug } from "@/data/ipp-publications"

export const alt = "Erasmiau – KA2: Inclusive Pathways to Peace"
export const size = OG_SIZE
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const pub = getIppPublicationBySlug(slug)
  const title = pub?.title ?? slug
  return buildOgImage(title, "KA2: Inclusive Pathways to Peace", pub?.image || undefined)
}
