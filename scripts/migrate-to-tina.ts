/**
 * Migration script: convert all TypeScript content files → TinaCMS JSON.
 * Creates one JSON file per project (metadata + sections).
 *
 * Run from erasmiau/:
 *   npx tsx scripts/migrate-to-tina.ts
 */

import { writeFileSync, mkdirSync, existsSync } from "fs"
import { join, dirname } from "path"
import { projects } from "../data/projects"

const ROOT = process.cwd()
const CONTENT_DIR = join(ROOT, "data/content/projects")

// ── Block transformer ────────────────────────────────────────────────────────
// Adds _template from block.type, normalises rounded boolean → string.

function transformBlock(block: any): any {
  const b = { ...block }
  // Add _template (TinaCMS discriminator), keep type for mapper fallback
  b._template = b.type

  // TinaCMS image.rounded is a string select: "" | "true" | "full"
  if ("rounded" in b) {
    if (b.rounded === true) b.rounded = "true"
    else if (b.rounded === false || b.rounded === undefined) delete b.rounded
    // "full" stays as-is
  }

  return b
}

// ── Section transformer ──────────────────────────────────────────────────────

function transformSection(section: any): any {
  const layout: string = section.layout

  // Common base: add _template, keep layout for mapper fallback
  const base: any = {
    _template: layout,
    layout,
    background: section.background,
    paddingY: section.paddingY,
    maxWidth: section.maxWidth,
  }
  if (section.id) base.id = section.id

  switch (layout) {
    case "single":
      return {
        ...base,
        blocks: (section.blocks ?? []).map(transformBlock),
      }

    case "columns": {
      // OLD type: columns: [Block[], Block[]]  (still in the evaluated JS)
      // NEW JSON: left: Block[], right: Block[]
      const cols: any[][] = section.columns ?? [[], []]
      return {
        ...base,
        distribution: section.distribution,
        verticalAlign: section.verticalAlign,
        gap: section.gap,
        left: (cols[0] ?? []).map(transformBlock),
        right: (cols[1] ?? []).map(transformBlock),
      }
    }

    case "grid": {
      // OLD type: columns: Block[][]
      // NEW JSON: columns: { blocks: Block[] }[]
      const rawCols: any[][] = section.columns ?? []
      return {
        ...base,
        count: section.count,
        gap: section.gap,
        columns: rawCols.map((col) => ({
          blocks: (col ?? []).map(transformBlock),
        })),
      }
    }

    case "testimonials":
      return {
        ...base,
        title: section.title,
        testimonials: (section.testimonials ?? []).map(transformBlock),
      }

    case "gallery":
      return {
        ...base,
        title: section.title,
        subtitle: section.subtitle,
        images: section.images ?? [],
        columns: section.columns,
      }

    case "repeater":
      return {
        ...base,
        title: section.title,
        items: (section.items ?? []).map(transformBlock),
      }

    case "autoGrid":
      return {
        ...base,
        count: section.count,
        title: section.title,
        subtitle: section.subtitle,
        titleColor: section.titleColor,
        items: (section.items ?? []).map(transformBlock),
      }

    default:
      console.warn(`  ⚠ Unknown section layout: "${layout}" — kept as-is`)
      return { ...base }
  }
}

// ── Strip undefined values from an object (recursively) ─────────────────────

function stripUndefined(obj: any): any {
  if (Array.isArray(obj)) return obj.map(stripUndefined)
  if (obj !== null && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => [k, stripUndefined(v)])
    )
  }
  return obj
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function migrate() {
  let ok = 0
  let skipped = 0

  for (const project of projects) {
    const { category, slug, title, dates, location, description, image } = project
    const tsPath = join(CONTENT_DIR, category, `${slug}.ts`)
    const jsonPath = join(CONTENT_DIR, category, `${slug}.json`)

    let richContent: any = null

    if (existsSync(tsPath)) {
      try {
        // tsx resolves the import; type-only imports are erased at runtime
        const mod = await import(tsPath)
        richContent = mod.default
      } catch (err) {
        console.error(`✗ ${category}/${slug}: failed to import .ts —`, err)
        skipped++
        continue
      }
    }

    const json = stripUndefined({
      title: richContent?.title ?? title,
      subtitle: richContent?.subtitle,
      category,
      slug,
      dates,
      location,
      description,
      coverImage: image,
      heroImage: richContent?.heroImage,
      sections: (richContent?.sections ?? []).map(transformSection),
    })

    mkdirSync(dirname(jsonPath), { recursive: true })
    writeFileSync(jsonPath, JSON.stringify(json, null, 2) + "\n")
    console.log(`✓ ${category}/${slug}.json${richContent ? ` (${richContent.sections?.length ?? 0} sections)` : " (metadata only)"}`)
    ok++
  }

  console.log(`\nDone: ${ok} written, ${skipped} skipped.`)
}

migrate().catch((err) => {
  console.error(err)
  process.exit(1)
})
