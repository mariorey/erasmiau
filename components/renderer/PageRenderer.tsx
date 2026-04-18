import type { PageContent } from "@/types/content"
import { SectionRenderer } from "./SectionRenderer"

export function PageRenderer({ content }: { content: PageContent }) {
  return (
    <main>
      {content.sections.map((section, i) => (
        <SectionRenderer key={section.id ?? i} section={section} />
      ))}
    </main>
  )
}
