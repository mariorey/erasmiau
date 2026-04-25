import Image from "next/image"
import type { GalleryBlock as T } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

const colMap: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
  5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
}

export function GalleryBlock({ images, columns = 3, tf }: T & { tf?: TinaFieldFor }) {
  return (
    <div className={`grid ${colMap[columns]} gap-3`} data-tina-field={tf?.("images")}>
      {images.map((img, i) => (
        <div key={i} className="aspect-square relative overflow-hidden rounded-xl">
          <Image src={img.src} alt={img.alt ?? ""} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
        </div>
      ))}
    </div>
  )
}
