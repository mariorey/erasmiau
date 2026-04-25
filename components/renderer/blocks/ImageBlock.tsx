import Image from "next/image"
import type { ImageBlock as T } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

const aspectMap: Record<string, string> = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
}

export function ImageBlock({ src, alt = "", caption, aspectRatio = "auto", rounded, priority, tf }: T & { tf?: TinaFieldFor }) {
  const aspectCls = aspectRatio !== "auto" ? aspectMap[aspectRatio] : ""
  const roundedCls = rounded === "full" ? "rounded-full" : rounded ? "rounded-2xl" : ""

  return (
    <figure className="w-full" data-tina-field={tf?.("src")}>
      <div className={`relative w-full overflow-hidden ${aspectCls} ${roundedCls}`}>
        {aspectRatio === "auto" ? (
          <Image src={src} alt={alt} width={900} height={600} className="w-full h-auto" priority={priority} />
        ) : (
          <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px" className="object-cover" priority={priority} />
        )}
      </div>
      {caption && (
        <figcaption className="text-sm text-gray-500 text-center mt-2" data-tina-field={tf?.("caption")}>{caption}</figcaption>
      )}
    </figure>
  )
}
