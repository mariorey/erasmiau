import { buildOgImage, OG_SIZE } from "@/lib/og"
import { getProjectBySlug } from "@/lib/getProjects"
import { getCategoryBySlug } from "@/data/projects"

export const alt = "Erasmiau – Proyecto"
export const size = OG_SIZE
export const contentType = "image/png"

export default function Image({ params }: { params: { category: string; slug: string } }) {
  const project = getProjectBySlug(params.category, params.slug)
  const category = getCategoryBySlug(params.category)
  const title = project?.title ?? params.slug
  const subtitle = category?.label ?? undefined
  return buildOgImage(title, subtitle)
}
