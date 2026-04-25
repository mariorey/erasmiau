import type { SingleColumnSection } from "@/types/content"
import { BlockRenderer } from "../BlockRenderer"

interface Props extends SingleColumnSection {
  tinaRaw?: any
}

export function SingleColumnLayout({ blocks, tinaRaw }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} tinaRaw={tinaRaw?.blocks?.[i]} />
      ))}
    </div>
  )
}
