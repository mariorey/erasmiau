import type { PageContent } from "@/types/content"
import { SectionRenderer } from "./SectionRenderer"

export function PageRenderer({ content, tinaRaw }: { content: PageContent; tinaRaw?: any }) {
  return (
    <main>
      {content.sections.map((section, i) => (
        <SectionRenderer key={section.id ?? i} section={section} tinaRaw={tinaRaw?.sections?.[i]} />
      ))}
    </main>
  )
}
