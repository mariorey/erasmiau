# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Next.js version warning

This repo runs **Next.js 16.2.2 + React 19.2** (App Router). AGENTS.md explicitly warns that APIs, conventions, and file structure may differ from training data. Before writing Next.js code, consult the locally shipped docs at `node_modules/next/dist/docs/` (e.g. `01-app/`, `03-architecture/`) rather than relying on memory. One concrete consequence already visible in the codebase: dynamic route `params` is a `Promise` and must be `await`ed (see `app/projects/[category]/[slug]/page.tsx`).

## Commands

All commands run from the `erasmiau/` subdirectory (the project root — the outer `Proyecto Erasmiau/` folder only contains this one package):

- `npm run dev` — start dev server on :3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript)

There is no test runner configured.

Path alias: `@/*` → repo root (configured in `tsconfig.json`), so `@/components/...`, `@/data/...`, `@/types/...`, `@/lib/...` resolve from `erasmiau/`.

## Architecture: the project-content system

The non-obvious part of this codebase is how a single project page (`/projects/<category>/<slug>`) is assembled from **two parallel data sources** and a typed block/section renderer pipeline.

### Two data sources per project

1. **Metadata** — `lib/getProjects.ts` merges `data/projects.ts` (static baseline) with any `data/content/projects/**/*.json` files (TinaCMS-managed). JSON wins on conflicts. This drives `generateStaticParams`, category index pages, and project discovery. New projects created via the CMS appear automatically here.
2. **Rich content (optional)** — `data/content/index.ts` reads `data/content/projects/<category>/<slug>.json` from disk, maps it via `lib/tina/map.ts` (which translates `_template` → `type`/`layout`), and returns a typed `PageContent`. Returns `null` when no sections exist.

`app/projects/[category]/[slug]/page.tsx` fetches both and branches: rich content → `<PageRenderer />`; otherwise → a minimal fallback with the metadata image/description. Hero title/subtitle/image prefer `content` fields when present, else fall back to the metadata. The page also tries a TinaCMS GraphQL query so the `useTina` hook in the client component can enable live sidebar editing.

**Adding rich content to a project via CMS**: open `/admin`, log in, navigate to the project, add sections. The JSON file is updated automatically. No code changes needed.

**Adding rich content to a project via code**: create `data/content/projects/<category>/<slug>.json` with a `sections` array using `_template` as the discriminator (see existing files for reference). The mapper in `lib/tina/map.ts` converts it to typed `PageContent`.

### The PageContent type tree

Defined in `types/content.ts`. `PageContent` → `Section[]`. Each `Section` has a `layout` discriminator picking one of seven layouts (`single`, `columns`, `grid`, `testimonials`, `gallery`, `repeater`, `autoGrid`) plus shared `SectionBase` fields (`background`, `paddingY`, `maxWidth`, `id`). Sections contain `Block`s — discriminated by a `type` field across 12 kinds (heading, paragraph, image, imageGroup, video, list, testimonial, gallery, dayReport, outcome, spacer, partner).

### Renderer pipeline

Three dispatchers, each a `switch` on the discriminator:

- `components/renderer/PageRenderer.tsx` — maps `content.sections` → `<SectionRenderer>`
- `components/renderer/SectionRenderer.tsx` — applies wrapper classes from `bgCls`/`padCls`/`maxWCls` maps, then dispatches on `section.layout` to a component in `components/renderer/layouts/`
- `components/renderer/BlockRenderer.tsx` — dispatches on `block.type` to a component in `components/renderer/blocks/`

**When adding a new block or section layout**: update the type union in `types/content.ts`, add the component file, and add the new `case` to the relevant `switch` — TypeScript's exhaustiveness check will flag missed branches.

`components/sections/` (distinct from `components/renderer/layouts/`) holds top-level page components like hero variants, project cards, FAQ — used directly by page files, not by the block renderer.

## TinaCMS integration

The CMS admin UI lives at `/admin` (redirect from `public/admin/index.html`). Route is auth-gated by `middleware.ts` using a JWT cookie (`erasmiau_admin`).

**Local development**: run `npx tinacms dev -c "next dev"` from `erasmiau/`. This starts the TinaCMS dev server on :4001 and Next.js on :3000. The admin at `/admin` connects to :4001. No auth in local mode.

**Tina schema**: `tina/config.ts` — 12 block templates, 7 section templates, full project collection. TinaCMS reads/writes `data/content/projects/**/*.json`.

**Mapper**: `lib/tina/map.ts` — converts raw TinaCMS JSON (uses `_template`) to typed app types (uses `type`/`layout`). Called by `data/content/index.ts` at runtime.

**Auth**: `middleware.ts` guards `/admin/*` and `/api/tina/*`. Login page at `/login`. Required env vars: `NEXTAUTH_SECRET`, `ADMIN_PASSWORD`.

**Production backend** (not yet deployed): requires `GITHUB_PERSONAL_ACCESS_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_BRANCH`, `MONGODB_URI`. See `tina/database.ts` for the commented-out production setup and `CMS.md` for the full deployment checklist.

## Legacy / non-unified pieces

- `app/projects/page.tsx` (top-level projects index) reads `data/projects.json` — a **separate** file from `data/projects.ts` — and uses `fs.readdirSync` on `public/images/projects/gallery` at build time. Not unified with the CMS content system.
- `components/Page.tsx`, `Teaser.tsx`, `Feature.tsx`, `StoryblokProvider.jsx`, `lib/storyblok.js` are Storyblok remnants — wired up but not used. Requires `STORYBLOK_DELIVERY_API_TOKEN`. The `app/storyblok-test/` route has been removed.
