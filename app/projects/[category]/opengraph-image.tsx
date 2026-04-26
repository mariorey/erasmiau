import { buildOgImage, OG_SIZE } from "@/lib/og"
import { getCategoryBySlug } from "@/data/projects"

export const alt = "Erasmiau – Proyectos"
export const size = OG_SIZE
export const contentType = "image/png"

export default function Image({ params }: { params: { category: string } }) {
  const category = getCategoryBySlug(params.category)
  const title = category?.label ?? params.category
  return buildOgImage(title, "Proyectos Erasmiau")
}
