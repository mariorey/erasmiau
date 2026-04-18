import type { VideoBlock as VideoBlockType } from "@/types/content"

export function VideoEmbedBlock({ platform, id, title }: VideoBlockType) {
  const src =
    platform === "youtube"
      ? `https://www.youtube.com/embed/${id}`
      : `https://www.instagram.com/p/${id}/embed`

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100">
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
