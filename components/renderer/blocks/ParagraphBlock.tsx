import type { ParagraphBlock as ParagraphBlockType } from "@/types/content"

export function ParagraphBlock({ text }: ParagraphBlockType) {
  return (
    <p className="text-gray-600 text-base leading-relaxed">{text}</p>
  )
}
