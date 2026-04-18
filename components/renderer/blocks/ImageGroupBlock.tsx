import Image from "next/image"
import type { ImageGroupBlock as ImageGroupBlockType } from "@/types/content"

const colMap: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
}

export function ImageGroupBlock({ images, columns = 3 }: ImageGroupBlockType) {
  return (
    <div className={`grid ${colMap[columns]} gap-3`}>
      {images.map((img, i) => (
        <div key={i} className="aspect-[4/3] relative overflow-hidden rounded-lg">
          <Image
            src={img.src}
            alt={img.alt ?? ""}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}
