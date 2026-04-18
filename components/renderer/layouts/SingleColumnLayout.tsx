import type { SingleColumnSection } from "@/types/content"
import { BlockRenderer } from "../BlockRenderer"

export function SingleColumnLayout({ blocks }: SingleColumnSection) {
  return (
    <div className="flex flex-col gap-8">
      {blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </div>
  )
}
