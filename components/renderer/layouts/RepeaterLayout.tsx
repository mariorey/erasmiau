"use client"

import { tinaField } from "tinacms/dist/react"
import type { RepeaterSection } from "@/types/content"
import { BlockRenderer } from "../BlockRenderer"

interface Props extends RepeaterSection {
  tinaRaw?: any
}

export function RepeaterLayout({ title, items, tinaRaw }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {title && (
        <h2 className="text-3xl font-bold text-gray-800" data-tina-field={tinaRaw ? tinaField(tinaRaw, "title") : undefined}>{title}</h2>
      )}
      <div className="flex flex-col divide-y divide-gray-100">
        {items.map((item, i) => (
          <div key={i} className={i > 0 ? "pt-8 mt-0" : ""}>
            <BlockRenderer block={item} tinaRaw={tinaRaw?.items?.[i]} />
          </div>
        ))}
      </div>
    </div>
  )
}
