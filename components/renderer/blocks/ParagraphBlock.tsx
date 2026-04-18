import type { ParagraphBlock as ParagraphBlockType } from "@/types/content"

const sizeMap: Record<string, string> = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg md:text-xl",
  xl: "text-xl md:text-2xl",
}

const alignMap: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
}

export function ParagraphBlock({ text, italic, size = "base", align = "left" }: ParagraphBlockType) {
  const italicCls = italic ? "italic" : ""
  return (
    <p className={`text-gray-600 ${sizeMap[size]} ${alignMap[align]} ${italicCls} leading-relaxed`}>
      {text}
    </p>
  )
}
