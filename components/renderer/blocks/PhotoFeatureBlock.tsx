import Image from "next/image"
import type { PhotoFeatureBlock as T } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

export function PhotoFeatureBlock({ mainImage, thumbs, tf }: T & { tf?: TinaFieldFor }) {
  return (
    <div className="flex flex-col gap-2" data-tina-field={tf?.("mainImage")}>
      {mainImage?.src && (
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={mainImage.src}
            alt={mainImage.alt ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
      )}
      {thumbs && thumbs.length > 0 && (
        <div className="grid grid-cols-3 gap-2" data-tina-field={tf?.("thumbs")}>
          {thumbs.slice(0, 3).map((img, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={img.src}
                alt={img.alt ?? ""}
                fill
                sizes="(max-width: 768px) 33vw, 20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
