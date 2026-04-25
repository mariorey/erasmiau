"use client"

import { tinaField } from "tinacms/dist/react"
import type { TestimonialsSection } from "@/types/content"
import { BlockRenderer } from "../BlockRenderer"

interface Props extends TestimonialsSection {
  tinaRaw?: any
}

export function TestimonialsLayout({ title, testimonials, tinaRaw }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {title && (
        <h2 className="text-3xl font-bold text-gray-800 text-center" data-tina-field={tinaRaw ? tinaField(tinaRaw, "title") : undefined}>{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {testimonials.map((t, i) => (
          <BlockRenderer key={i} block={t} tinaRaw={tinaRaw?.testimonials?.[i]} />
        ))}
      </div>
    </div>
  )
}
