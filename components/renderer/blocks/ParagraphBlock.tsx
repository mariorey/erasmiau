import type { ParagraphBlock as T } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

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

export function ParagraphBlock({ text, italic, size = "base", align = "left", tf }: T & { tf?: TinaFieldFor }) {
  return (
    <p
      className={`text-gray-600 ${sizeMap[size]} ${alignMap[align]} ${italic ? "italic" : ""} leading-relaxed`}
      data-tina-field={tf?.("text")}
    >
      {text}
    </p>
  )
}
