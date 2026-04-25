"use client"

import { tinaField } from "tinacms/dist/react"
import type { Section, SectionBase } from "@/types/content"
import { SingleColumnLayout } from "./layouts/SingleColumnLayout"
import { TwoColumnLayout } from "./layouts/TwoColumnLayout"
import { MultiColumnLayout } from "./layouts/MultiColumnLayout"
import { TestimonialsLayout } from "./layouts/TestimonialsLayout"
import { GalleryLayout } from "./layouts/GalleryLayout"
import { RepeaterLayout } from "./layouts/RepeaterLayout"
import { AutoGridLayout } from "./layouts/AutoGridLayout"

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

function renderLayout(section: Section, tinaRaw?: any) {
  switch (section.layout) {
    case "single":       return <SingleColumnLayout {...section} tinaRaw={tinaRaw} />
    case "columns":      return <TwoColumnLayout {...section} tinaRaw={tinaRaw} />
    case "grid":         return <MultiColumnLayout {...section} tinaRaw={tinaRaw} />
    case "testimonials": return <TestimonialsLayout {...section} tinaRaw={tinaRaw} />
    case "gallery":      return <GalleryLayout {...section} tinaRaw={tinaRaw} />
    case "repeater":     return <RepeaterLayout {...section} tinaRaw={tinaRaw} />
    case "autoGrid":     return <AutoGridLayout {...section} tinaRaw={tinaRaw} />
  }
}

export function SectionRenderer({ section, tinaRaw }: { section: Section; tinaRaw?: any }) {
  return (
    <section
      id={section.id}
      className={wrapperCls(section)}
      data-tina-field={tinaRaw ? tinaField(tinaRaw, "background") : undefined}
    >
      <div className={innerCls(section)}>
        {renderLayout(section, tinaRaw)}
      </div>
    </section>
  )
}
