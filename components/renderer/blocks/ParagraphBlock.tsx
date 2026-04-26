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

// 🔥 Parser de **bold**
function renderBold(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
          <strong key={i} className="font-semibold text-gray-800">
            {part.slice(2, -2)}
          </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export function ParagraphBlock({
                                 text,
                                 italic,
                                 size = "base",
                                 align = "left",
                                 tf,
                               }: T & { tf?: TinaFieldFor }) {
  const cls = `text-gray-600 ${sizeMap[size]} ${alignMap[align]} ${
      italic ? "italic" : ""
  } leading-relaxed`

  // Split paragraphs
  const chunks = text.split(/\n\n+/).filter(Boolean)

  if (chunks.length <= 1) {
    return (
        <p className={cls} data-tina-field={tf?.("text")}>
          {text.split("\n").map((line, i, arr) => (
              <span key={i}>
            {renderBold(line)}
                {i < arr.length - 1 && <br />}
          </span>
          ))}
        </p>
    )
  }

  return (
      <div className="flex flex-col gap-4" data-tina-field={tf?.("text")}>
        {chunks.map((chunk, i) => (
            <p key={i} className={cls}>
              {chunk.split("\n").map((line, j, arr) => (
                  <span key={j}>
              {renderBold(line)}
                    {j < arr.length - 1 && <br />}
            </span>
              ))}
            </p>
        ))}
      </div>
  )
}