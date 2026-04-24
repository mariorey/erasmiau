import { readFileSync } from "fs"
import { join } from "path"
import { mapTinaToPageContent } from "@/lib/tina/map"
import type { PageContent } from "@/types/content"

const PROJECTS_DIR = join(process.cwd(), "data/content/projects")

export function getPageContent(category: string, slug: string): PageContent | null {
  try {
    const raw = JSON.parse(
      readFileSync(join(PROJECTS_DIR, category, `${slug}.json`), "utf-8")
    )
    if (!raw.sections || raw.sections.length === 0) return null
    return mapTinaToPageContent(raw)
  } catch {
    return null
  }
}
