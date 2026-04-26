"use client"

import { useMemo } from "react"
import Link from "next/link"
import { useTina, tinaField } from "tinacms/dist/react"
import HeroSmallTitle from "@/components/sections/hero-small-title"
import { PageRenderer } from "@/components/renderer/PageRenderer"
import { mapTinaToPageContent } from "@/lib/tina/map"
import type { PageContent } from "@/types/content"
import type { IppPublication } from "@/data/ipp-publications"

type TinaResult = {
  query: string
  variables: Record<string, unknown>
  data: {
    project?: {
      subtitle?: string | null
      heroImage?: string | null
    } | null
  }
}

interface Props {
  tinaResult: TinaResult | null
  publication: IppPublication
  content: PageContent | null
}

const DUMMY_TINA_INPUT = {
  query: "{ __typename }",
  variables: {} as Record<string, unknown>,
  data: {} as Record<string, unknown>,
}

function TinaShell({ tinaResult, publication, content }: Props) {
  const { data } = useTina(tinaResult ?? DUMMY_TINA_INPUT)
  const tinaProject = tinaResult ? (data as any).project : null

  const liveContent = useMemo(() => {
    if (!tinaProject?.sections?.length) return content
    try { return mapTinaToPageContent(tinaProject) } catch { return content }
  }, [tinaProject, content])

  const heroTitle = (
    tinaProject?.title ?? liveContent?.title ?? publication.title
  ).toUpperCase()
  const heroSubtitle =
    tinaProject?.subtitle ?? liveContent?.subtitle ?? publication.dates ?? ""
  const heroImage =
    tinaProject?.heroImage ?? liveContent?.heroImage ?? publication.image

  return (
    <div>
      <div data-tina-field={tinaProject ? tinaField(tinaProject, "heroImage") : undefined}>
        <HeroSmallTitle image={heroImage} title={heroTitle} subtitle={heroSubtitle} />
      </div>

      <div className="bg-white px-6 md:px-16 py-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/ka2-cooperation-partnerships"
            className="text-[#E8003A] text-sm font-semibold hover:underline"
          >
            ← Back to Inclusive Pathways to Peace
          </Link>
        </div>
      </div>

      {liveContent ? (
        <PageRenderer content={liveContent} tinaRaw={tinaProject} />
      ) : (
        <main className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-500 text-base">Content coming soon.</p>
          </div>
        </main>
      )}
    </div>
  )
}

export function IppPublicationClient(props: Props) {
  return <TinaShell {...props} />
}
