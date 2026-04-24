/**
 * Assertion: verifies that the migrated dyst.json maps identically to the
 * original dyst.ts content shape (section by section).
 *
 * Run:  npx tsx lib/tina/assert.ts
 */

import { readFileSync } from "fs"
import { join } from "path"
import { mapTinaToPageContent } from "./map"

const ROOT = process.cwd()

async function main() {
// Load migrated JSON and run it through the mapper
const raw = JSON.parse(
  readFileSync(join(ROOT, "data/content/projects/hosting/dyst.json"), "utf-8")
)
const mapped = mapTinaToPageContent(raw)

// Load original TypeScript content (still present pre-deletion)
const { default: original } = await import(join(ROOT, "data/content/projects/hosting/dyst.ts"))

let pass = true

if (mapped.title !== original.title) {
  console.error(`✗ title mismatch: "${mapped.title}" vs "${original.title}"`)
  pass = false
}

if (mapped.sections.length !== original.sections.length) {
  console.error(
    `✗ section count mismatch: ${mapped.sections.length} vs ${original.sections.length}`
  )
  pass = false
} else {
  for (let i = 0; i < mapped.sections.length; i++) {
    // Sort keys for order-insensitive comparison
    const sortedStringify = (v: unknown): string =>
      JSON.stringify(v, Object.keys(v as object).sort())
    const a = sortedStringify(mapped.sections[i])
    const b = sortedStringify(original.sections[i])
    if (a !== b) {
      console.error(`✗ section[${i}] mismatch`)
      console.error("  mapped:  ", a.slice(0, 200))
      console.error("  original:", b.slice(0, 200))
      pass = false
      break
    }
  }
}

if (pass) {
  console.log("✓ dyst.json maps correctly — all sections match dyst.ts")
} else {
  console.error("\nAssertion failed.")
  process.exit(1)
}
}

main().catch((e) => { console.error(e); process.exit(1) })
