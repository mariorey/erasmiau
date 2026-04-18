import Image from "next/image"
import type { GallerySection } from "@/types/content"

const colMap: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
  5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
}

export function GalleryLayout({ title, images, columns = 3 }: GallerySection) {
  return (
    <div className="flex flex-col gap-6">
      {title && (
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      )}
      <div className={`grid ${colMap[columns]} gap-3`}>
        {images.map((img, i) => (
          <div key={i} className="aspect-square relative overflow-hidden rounded-xl">
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
