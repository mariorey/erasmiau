"use client"

import { useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTina, tinaField } from "tinacms/dist/react"
import HeroSmallTitle from "@/components/sections/hero-small-title"
import { PageRenderer } from "@/components/renderer/PageRenderer"
import { mapTinaToPageContent } from "@/lib/tina/map"
import type { PageContent } from "@/types/content"
import type { Project } from "@/data/projects"
import { getCategoryBySlug } from "@/data/projects"

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
  project: Project | undefined
  content: PageContent | null
  category: string
}

const DUMMY_TINA_INPUT = {
  query: "{ __typename }",
  variables: {} as Record<string, unknown>,
  data: {} as Record<string, unknown>,
}

function TinaShell({ tinaResult, project, content, category }: Props) {
  const { data } = useTina(tinaResult ?? DUMMY_TINA_INPUT)

  // raw TinaCMS project object — has internal metadata for tinaField()
  const tinaProject = tinaResult ? (data as any).project : null

  const categoryLabel = getCategoryBySlug(category)?.label
    ?? category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

  // Re-map live TinaCMS data to PageContent so the preview updates as you edit in the sidebar.
  const liveContent = useMemo(() => {
    if (!tinaProject?.sections?.length) return content
    try { return mapTinaToPageContent(tinaProject) } catch { return content }
  }, [tinaProject, content])

  const heroTitle = (tinaProject?.title ?? liveContent?.title ?? project?.title ?? "").toUpperCase()
  const heroSubtitle =
    tinaProject?.subtitle ?? liveContent?.subtitle ?? `${project?.dates ?? ""} · ${project?.location ?? ""}`
  const heroImage = tinaProject?.heroImage ?? liveContent?.heroImage ?? project?.image ?? ""

  return (
    <div>
      <HeroSmallTitle
        image={heroImage}
        title={heroTitle}
        subtitle={heroSubtitle}
        tina={{
          image: tinaProject ? tinaField(tinaProject, "heroImage") : undefined,
          title: tinaProject ? tinaField(tinaProject, "title") : undefined,
          subtitle: tinaProject ? tinaField(tinaProject, "subtitle") : undefined,
        }}
      />

      {liveContent ? (
        <>
          <div className="bg-white px-6 md:px-16 py-4 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
              <Link
                href={`/projects/${category}`}
                className="text-[#E8003A] text-sm font-semibold hover:underline"
              >
                ← Back to {categoryLabel}
              </Link>
            </div>
          </div>
          <PageRenderer content={liveContent} tinaRaw={tinaProject} />
        </>
      ) : (
        <main className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto flex flex-col gap-12">
            <Link
              href={`/projects/${category}`}
              className="text-[#E8003A] text-sm font-semibold hover:underline self-start"
            >
              ← Back to {categoryLabel}
            </Link>

            {(tinaProject?.heroImage ?? project?.image) && (
              <div
                className="w-full overflow-hidden rounded-2xl"
                data-tina-field={tinaProject ? tinaField(tinaProject, "heroImage") : undefined}
              >
                <Image
                  src={tinaProject?.heroImage ?? project?.image ?? ""}
                  alt={project?.title ?? ""}
                  width={900}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div className="flex flex-col gap-2">
              <h1 className="text-gray-700 text-3xl font-bold">
                {project?.title}
              </h1>
              <p className="text-gray-500 text-base">
                {project?.dates}
              </p>
              <p className="text-gray-500 text-base">
                {project?.location}
              </p>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              {project?.description}
            </p>

            {project?.gallery && project.gallery.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img) => (
                  <div key={img} className="overflow-hidden rounded-xl aspect-[4/3]">
                    <Image
                      src={img}
                      alt={project?.title ?? ""}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  )
}

export function ProjectPageClient(props: Props) {
  return <TinaShell {...props} />
}
