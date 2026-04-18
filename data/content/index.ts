import type { PageContent } from "@/types/content"
import rhythmOfTheLife from "./projects/hosting/rhythm-of-the-life"
import dyst from "./projects/hosting/dyst"
import greemComp from "./projects/sending/greem-comp"
import greenChange from "./projects/sending/green-change"
import digitalToolsApv from "./projects/sending/digital-tools-apv"
import aintThatFunny from "./projects/sending/aint-that-funny"
import digitalToolsTc from "./projects/sending/digital-tools-tc"
import emotionsOnStage from "./projects/sending/emotions-on-stage"
import backToTheRoots from "./projects/sending/back-to-the-roots"
import crimePrevention from "./projects/sending/crime-prevention"
import breakTheSilence from "./projects/sending/break-the-silence"
import europe4All from "./projects/interrail/europe-4-all"

// Add an entry here for each project page that has rich content.
// Key format: "<category>/<slug>" — must match the values in data/projects.ts.
const registry: Record<string, PageContent> = {
  "hosting/rhythm-of-the-life": rhythmOfTheLife,
  "hosting/dyst": dyst,
  "sending/greem-comp": greemComp,
  "sending/green-change": greenChange,
  "sending/digital-tools-apv": digitalToolsApv,
  "sending/aint-that-funny": aintThatFunny,
  "sending/digital-tools-tc": digitalToolsTc,
  "sending/emotions-on-stage": emotionsOnStage,
  "sending/back-to-the-roots": backToTheRoots,
  "sending/crime-prevention": crimePrevention,
  "sending/break-the-silence": breakTheSilence,
  "interrail/europe-4-all": europe4All,
}

export function getPageContent(category: string, slug: string): PageContent | null {
  return registry[`${category}/${slug}`] ?? null
}
