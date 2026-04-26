import { buildOgImage, OG_SIZE } from "@/lib/og"
import { getProjectBySlug } from "@/lib/getProjects"
import { getCategoryBySlug } from "@/data/projects"

export const alt = "Erasmiau – Proyecto"
export const size = OG_SIZE
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category: categorySlug, slug } = await params
  const project = getProjectBySlug(categorySlug, slug)
  const category = getCategoryBySlug(categorySlug)
  const title = project?.title ?? slug
  const subtitle = category?.label ?? undefined
  return buildOgImage(title, subtitle, project?.image || undefined)
}
