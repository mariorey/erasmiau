import type { Section, SectionBase } from "@/types/content"
import { SingleColumnLayout } from "./layouts/SingleColumnLayout"
import { TwoColumnLayout } from "./layouts/TwoColumnLayout"
import { MultiColumnLayout } from "./layouts/MultiColumnLayout"
import { TestimonialsLayout } from "./layouts/TestimonialsLayout"
import { GalleryLayout } from "./layouts/GalleryLayout"
import { RepeaterLayout } from "./layouts/RepeaterLayout"

const bgCls: Record<string, string> = {
  white: "bg-white",
  light: "bg-[#e4eaef]",
  dark:  "bg-gray-900 text-white",
  brand: "bg-[#E8003A] text-white",
}

const padCls: Record<string, string> = {
  none: "py-0",
  sm:   "py-8",
  md:   "py-16",
  lg:   "py-20 md:py-28",
}

const maxWCls: Record<string, string> = {
  sm:   "max-w-2xl",
  md:   "max-w-4xl",
  lg:   "max-w-6xl",
  xl:   "max-w-7xl",
  full: "max-w-full",
}

function wrapperCls(s: SectionBase) {
  return [bgCls[s.background ?? "white"], padCls[s.paddingY ?? "md"], "px-6 md:px-16"].join(" ")
}

function innerCls(s: SectionBase) {
  return `${maxWCls[s.maxWidth ?? "lg"]} mx-auto`
}

function renderLayout(section: Section) {
  switch (section.layout) {
    case "single":       return <SingleColumnLayout {...section} />
    case "columns":      return <TwoColumnLayout {...section} />
    case "grid":         return <MultiColumnLayout {...section} />
    case "testimonials": return <TestimonialsLayout {...section} />
    case "gallery":      return <GalleryLayout {...section} />
    case "repeater":     return <RepeaterLayout {...section} />
  }
}

export function SectionRenderer({ section }: { section: Section }) {
  return (
    <section id={section.id} className={wrapperCls(section)}>
      <div className={innerCls(section)}>
        {renderLayout(section)}
      </div>
    </section>
  )
}
