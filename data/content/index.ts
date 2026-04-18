import type { PageContent } from "@/types/content"
import rhythmOfTheLife from "./projects/hosting/rhythm-of-the-life"
import greemComp from "./projects/sending/greem-comp"
import europe4All from "./projects/interrail/europe-4-all"

// Add an entry here for each project page that has rich content.
// Key format: "<category>/<slug>" — must match the values in data/projects.ts.
const registry: Record<string, PageContent> = {
  "hosting/rhythm-of-the-life": rhythmOfTheLife,
  "sending/greem-comp": greemComp,
  "interrail/europe-4-all": europe4All,
}

export function getPageContent(category: string, slug: string): PageContent | null {
  return registry[`${category}/${slug}`] ?? null
}
