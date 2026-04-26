import { readdirSync, readFileSync } from "fs"
import { join } from "path"
import { projects as staticProjects } from "@/data/projects"
import type { Project } from "@/data/projects"

const MONTHS: Record<string, number> = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
}

function dateSort(dates: string): number {
  const lower = dates.toLowerCase()
  const yearMatch = dates.match(/\d{4}/)
  const year = yearMatch ? parseInt(yearMatch[0]) : 0
  let firstMonth = 0
  let firstPos = Infinity
  for (const [name, num] of Object.entries(MONTHS)) {
    const pos = lower.indexOf(name)
    if (pos !== -1 && pos < firstPos) { firstPos = pos; firstMonth = num }
  }
  return year * 100 + firstMonth
}

const CONTENT_DIR = join(process.cwd(), "data/content/projects")

// Read projects that TinaCMS manages (i.e. have a .json file).
function readJsonProjects(): Project[] {
  const result: Project[] = []
  try {
    const cats = readdirSync(CONTENT_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)

    for (const cat of cats) {
      const files = readdirSync(join(CONTENT_DIR, cat)).filter((f) =>
        f.endsWith(".json")
      )
      for (const file of files) {
        const raw = readFileSync(join(CONTENT_DIR, cat, file), "utf-8")
        const data = JSON.parse(raw)
        result.push({
          category: data.category ?? cat,
          slug: data.slug ?? file.replace(".json", ""),
          title: data.title ?? "",
          dates: data.dates ?? "",
          location: data.location ?? "",
          description: data.description ?? "",
          // TinaCMS stores it as coverImage; Project interface uses image
          image: data.coverImage ?? data.heroImage ?? "",
          gallery: [],
        })
      }
    }
  } catch {
    // If the content dir doesn't exist yet, return nothing.
  }
  return result
}

// Merge JSON-managed projects with the static list.
// JSON files win on conflicts (same category+slug).
export function getAllProjects(): Project[] {
  const jsonProjects = readJsonProjects()
  const jsonKeys = new Set(jsonProjects.map((p) => `${p.category}/${p.slug}`))
  const staticOnly = staticProjects.filter(
    (p) => !jsonKeys.has(`${p.category}/${p.slug}`)
  )
  return [...jsonProjects, ...staticOnly]
}

export function getProjectsByCategory(category: string): Project[] {
  return getAllProjects()
    .filter((p) => p.category === category)
    .sort((a, b) => dateSort(a.dates) - dateSort(b.dates))
}

export function getProjectBySlug(
  category: string,
  slug: string
): Project | undefined {
  return getAllProjects().find(
    (p) => p.category === category && p.slug === slug
  )
}
