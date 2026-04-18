import type { TwoColumnSection } from "@/types/content"
import { BlockRenderer } from "../BlockRenderer"

// Tailwind arbitrary values encode the fr ratio. These are static strings so
// Tailwind's scanner can detect them at build time.
const distributionCls: Record<string, string> = {
  "50/50": "md:grid-cols-2",
  "60/40": "md:grid-cols-[3fr_2fr]",
  "70/30": "md:grid-cols-[7fr_3fr]",
  "40/60": "md:grid-cols-[2fr_3fr]",
  "30/70": "md:grid-cols-[3fr_7fr]",
}

const alignCls: Record<string, string> = {
  top: "items-start",
  center: "items-center",
  bottom: "items-end",
}

const gapCls: Record<string, string> = {
  sm: "gap-6",
  md: "gap-10 md:gap-16",
  lg: "gap-12 md:gap-24",
}

export function TwoColumnLayout({
  columns,
  distribution = "50/50",
  verticalAlign = "top",
  gap = "md",
}: TwoColumnSection) {
  return (
    <div
      className={`grid grid-cols-1 ${distributionCls[distribution]} ${alignCls[verticalAlign]} ${gapCls[gap]}`}
    >
      {columns.map((col, i) => (
        <div key={i} className="flex flex-col gap-6">
          {col.map((block, j) => (
            <BlockRenderer key={j} block={block} />
          ))}
        </div>
      ))}
    </div>
  )
}
