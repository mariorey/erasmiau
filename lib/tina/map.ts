import type {
  PageContent,
  Section,
  Block,
  HeadingBlock,
  ParagraphBlock,
  ImageBlock,
  ImageGroupBlock,
  VideoBlock,
  ListBlock,
  TestimonialBlock,
  GalleryBlock,
  DayReportBlock,
  PartnerBlock,
  OutcomeBlock,
  SpacerBlock,
} from "@/types/content"

// Raw JSON shape coming from TinaCMS (or migration-generated files).
// TinaCMS uses _template as the discriminator; we also keep type/layout as fallback.
type Raw = Record<string, any>

function resolveBlockType(raw: Raw): string {
  return raw._template ?? raw.type ?? ""
}

function resolveSectionLayout(raw: Raw): string {
  return raw._template ?? raw.layout ?? ""
}

// TinaCMS select fields store numbers as strings; parse back to number or undefined.
function int(v: unknown): number | undefined {
  if (v === undefined || v === null || v === "") return undefined
  const n = typeof v === "number" ? v : parseInt(String(v), 10)
  return isNaN(n) ? undefined : n
}

// TinaCMS stores image.rounded as a string select: "", "true", "full"
function mapRounded(v: unknown): boolean | "full" | undefined {
  if (v === "full") return "full"
  if (v === "true" || v === true) return true
  return undefined
}

function mapImageList(arr: Raw[] = []): { src: string; alt?: string }[] {
  return arr.map((img) => ({ src: img.src ?? "", alt: img.alt ?? undefined }))
}

// ── Block mapper ─────────────────────────────────────────────────────────────

export function mapBlock(raw: Raw): Block {
  const t = resolveBlockType(raw)

  switch (t) {
    case "heading":
      return {
        type: "heading",
        level: (int(raw.level) ?? 2) as 1 | 2 | 3 | 4,
        text: raw.text ?? "",
      } satisfies HeadingBlock

    case "paragraph":
      return {
        type: "paragraph",
        text: raw.text ?? "",
        italic: raw.italic ?? undefined,
        size: raw.size ?? undefined,
        align: raw.align ?? undefined,
      } satisfies ParagraphBlock

    case "image":
      return {
        type: "image",
        src: raw.src ?? "",
        alt: raw.alt ?? undefined,
        caption: raw.caption ?? undefined,
        aspectRatio: raw.aspectRatio ?? undefined,
        rounded: mapRounded(raw.rounded),
        priority: raw.priority ?? undefined,
      } satisfies ImageBlock

    case "imageGroup":
      return {
        type: "imageGroup",
        images: mapImageList(raw.images),
        columns: int(raw.columns) as 2 | 3 | 4 | undefined,
      } satisfies ImageGroupBlock

    case "video":
      return {
        type: "video",
        platform: raw.platform ?? "youtube",
        id: raw.id ?? "",
        title: raw.title ?? undefined,
      } satisfies VideoBlock

    case "list":
      return {
        type: "list",
        style: raw.style ?? undefined,
        items: raw.items ?? [],
      } satisfies ListBlock

    case "testimonial":
      return {
        type: "testimonial",
        name: raw.name ?? "",
        role: raw.role ?? undefined,
        country: raw.country ?? undefined,
        text: raw.text ?? "",
        avatar: raw.avatar ?? undefined,
      } satisfies TestimonialBlock

    case "gallery":
      return {
        type: "gallery",
        images: mapImageList(raw.images),
        columns: int(raw.columns) as 2 | 3 | 4 | 5 | undefined,
      } satisfies GalleryBlock

    case "dayReport":
      return {
        type: "dayReport",
        day: raw.day ?? 0,
        title: raw.title ?? undefined,
        text: raw.text ?? "",
        images: raw.images ? mapImageList(raw.images) : undefined,
        titleStyle: raw.titleStyle ?? undefined,
      } satisfies DayReportBlock

    case "partner":
      return {
        type: "partner",
        country: raw.country ?? "",
        flag: raw.flag ?? "",
        organizations: raw.organizations ?? [],
      } satisfies PartnerBlock

    case "outcome":
      return {
        type: "outcome",
        number: raw.number ?? 0,
        title: raw.title ?? "",
        description: raw.description ?? "",
      } satisfies OutcomeBlock

    case "spacer":
      return {
        type: "spacer",
        size: raw.size ?? undefined,
      } satisfies SpacerBlock

    default:
      // Unknown block — return a spacer as safe fallback
      console.warn(`[tina/map] Unknown block type: "${t}"`)
      return { type: "spacer" }
  }
}

// ── Section mapper ───────────────────────────────────────────────────────────

export function mapSection(raw: Raw): Section {
  const layout = resolveSectionLayout(raw)
  const base = {
    id: raw.id ?? undefined,
    background: raw.background ?? undefined,
    paddingY: raw.paddingY ?? undefined,
    maxWidth: raw.maxWidth ?? undefined,
  }

  switch (layout) {
    case "single":
      return {
        ...base,
        layout: "single",
        blocks: (raw.blocks ?? []).map(mapBlock),
      }

    case "columns":
      return {
        ...base,
        layout: "columns",
        distribution: raw.distribution ?? undefined,
        verticalAlign: raw.verticalAlign ?? undefined,
        gap: raw.gap ?? undefined,
        left: (raw.left ?? []).map(mapBlock),
        right: (raw.right ?? []).map(mapBlock),
      }

    case "grid":
      return {
        ...base,
        layout: "grid",
        count: (int(raw.count) ?? 3) as 3 | 4,
        gap: raw.gap ?? undefined,
        columns: (raw.gridColumns ?? raw.columns ?? []).map((col: Raw) => ({
          blocks: (col.blocks ?? []).map(mapBlock),
        })),
      }

    case "testimonials":
      return {
        ...base,
        layout: "testimonials",
        title: raw.title ?? undefined,
        testimonials: (raw.testimonials ?? []).map(mapBlock) as TestimonialBlock[],
      }

    case "gallery":
      return {
        ...base,
        layout: "gallery",
        title: raw.title ?? undefined,
        subtitle: raw.subtitle ?? undefined,
        images: mapImageList(raw.images),
        columns: int(raw.columns) as 2 | 3 | 4 | 5 | undefined,
      }

    case "repeater":
      return {
        ...base,
        layout: "repeater",
        title: raw.title ?? undefined,
        items: (raw.items ?? []).map(mapBlock) as (DayReportBlock | OutcomeBlock)[],
      }

    case "autoGrid":
      return {
        ...base,
        layout: "autoGrid",
        count: (int(raw.count) ?? 2) as 2 | 3 | 4 | 5 | 6,
        title: raw.title ?? undefined,
        subtitle: raw.subtitle ?? undefined,
        titleColor: raw.titleColor ?? undefined,
        items: (raw.items ?? []).map(mapBlock),
      }

    default:
      console.warn(`[tina/map] Unknown section layout: "${layout}"`)
      return { layout: "single", blocks: [] }
  }
}

// ── Page mapper ──────────────────────────────────────────────────────────────

export function mapTinaToPageContent(raw: Raw): PageContent {
  return {
    title: raw.title ?? "",
    subtitle: raw.subtitle ?? undefined,
    heroImage: raw.heroImage ?? undefined,
    sections: (raw.sections ?? []).map(mapSection),
  }
}
