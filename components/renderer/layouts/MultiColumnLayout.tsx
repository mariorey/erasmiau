import type { MultiColumnSection } from "@/types/content"
import { BlockRenderer } from "../BlockRenderer"

const countCls: Record<number, string> = {
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
}

const gapCls: Record<string, string> = {
  sm: "gap-4",
  md: "gap-8",
  lg: "gap-12",
}

export function MultiColumnLayout({ count, columns, gap = "md" }: MultiColumnSection) {
  return (
    <div className={`grid grid-cols-1 ${countCls[count]} ${gapCls[gap]}`}>
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
