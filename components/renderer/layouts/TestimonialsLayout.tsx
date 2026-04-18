import type { TestimonialsSection } from "@/types/content"
import { BlockRenderer } from "../BlockRenderer"

export function TestimonialsLayout({ title, testimonials }: TestimonialsSection) {
  return (
    <div className="flex flex-col gap-8">
      {title && (
        <h2 className="text-3xl font-bold text-gray-800 text-center">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <BlockRenderer key={i} block={t} />
        ))}
      </div>
    </div>
  )
}
