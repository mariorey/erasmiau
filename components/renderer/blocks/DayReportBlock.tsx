import Image from "next/image"
import type { DayReportBlock as DayReportBlockType } from "@/types/content"

const imageGridCls: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
}

export function DayReportBlock({ day, title, text, images, titleStyle = "badge" }: DayReportBlockType) {
  const paragraphs = text.split("\n\n").filter(Boolean)

  if (titleStyle === "header") {
    // Photo-first layout: image → red "Day X: Title" heading → text paragraphs
    const label = typeof day === "number" ? `Day ${day}` : day
    const heading = title ? `${label}: ${title}` : label

    return (
      <div className="flex flex-col gap-3">
        {images && images.length > 0 && (
          <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
            <Image
              src={images[0].src}
              alt={images[0].alt ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}
        <h3 className="text-lg font-bold text-[#E8003A] leading-snug">{heading}</h3>
        <div className="flex flex-col gap-2">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 text-sm leading-relaxed">{p}</p>
          ))}
        </div>
      </div>
    )
  }

  // Default badge layout: badge → title → text → images below
  const label = typeof day === "number" ? `Día ${day}` : day

  return (
    <div className="flex flex-col gap-3">
      <div>
        <span className="inline-block bg-[#E8003A] text-white text-sm font-bold px-3 py-1 rounded-md">
          {label}
        </span>
        {title && (
          <h3 className="text-lg font-semibold text-gray-800 mt-2">{title}</h3>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
        ))}
      </div>
      {images && images.length > 0 && (
        <div className={`grid ${imageGridCls[Math.min(images.length, 3)]} gap-2 mt-2`}>
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
      )}
    </div>
  )
}
