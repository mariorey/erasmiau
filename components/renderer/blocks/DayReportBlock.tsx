import Image from "next/image"
import type { DayReportBlock as DayReportBlockType } from "@/types/content"

const imageGridCls: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
}

export function DayReportBlock({ day, title, text, images }: DayReportBlockType) {
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
      <p className="text-gray-600 leading-relaxed">{text}</p>
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
