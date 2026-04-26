import { buildOgImage, OG_SIZE } from "@/lib/og"

export const alt = "Erasmiau – Asociación Juvenil de Puente Genil"
export const size = OG_SIZE
export const contentType = "image/png"

export default function Image() {
  return buildOgImage(
    "Asociación Juvenil Erasmiau",
    "Proyectos Erasmus+ · Puente Genil, Córdoba",
  )
}
