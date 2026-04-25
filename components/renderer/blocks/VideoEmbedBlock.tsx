import type { VideoBlock as T } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

export function VideoEmbedBlock({ platform, id, title, tf }: T & { tf?: TinaFieldFor }) {
  const src =
    platform === "youtube"
      ? `https://www.youtube.com/embed/${id}`
      : `https://www.instagram.com/p/${id}/embed`

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100" data-tina-field={tf?.("id")}>
      <iframe
        src={src}
        title={title ?? "Embedded video"}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
