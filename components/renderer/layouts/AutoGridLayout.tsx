"use client"

import { tinaField } from "tinacms/dist/react"
import type { AutoGridSection } from "@/types/content"
import { BlockRenderer } from "../BlockRenderer"

const countCls: Record<number, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
  5: "grid-cols-2 md:grid-cols-5",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
}

interface Props extends AutoGridSection {
  tinaRaw?: any
}

export function AutoGridLayout({ count, items, title, subtitle, titleColor = "default", tinaRaw }: Props) {
  const titleCls = titleColor === "brand" ? "text-[#E8003A]" : "text-gray-800"

  return (
    <div className="flex flex-col gap-8">
      {title && (
        <div>
          <h2 className={`text-3xl font-bold ${titleCls}`} data-tina-field={tinaRaw ? tinaField(tinaRaw, "title") : undefined}>{title}</h2>
          {subtitle && <p className="text-gray-500 mt-2" data-tina-field={tinaRaw ? tinaField(tinaRaw, "subtitle") : undefined}>{subtitle}</p>}
        </div>
      )}
      <div className={`grid ${countCls[count]} gap-8`}>
        {items.map((block, i) => (
          <BlockRenderer key={i} block={block} tinaRaw={tinaRaw?.items?.[i]} />
        ))}
      </div>
    </div>
  )
}
