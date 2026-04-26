import { buildOgImage, OG_SIZE } from "@/lib/og"
import { getCategoryBySlug } from "@/data/projects"

export const alt = "Erasmiau – Proyectos"
export const size = OG_SIZE
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)
  const title = category?.label ?? categorySlug
  return buildOgImage(title, "Proyectos Erasmiau")
}
