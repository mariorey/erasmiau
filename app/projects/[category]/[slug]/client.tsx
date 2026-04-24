"use client"

import Link from "next/link"
import Image from "next/image"
import { useTina, tinaField } from "tinacms/dist/react"
import HeroSmallTitle from "@/components/sections/hero-small-title"
import { PageRenderer } from "@/components/renderer/PageRenderer"
import type { PageContent } from "@/types/content"
import type { Project } from "@/data/projects"

type TinaResult = {
  query: string
  variables: Record<string, unknown>
  data: {
    project?: {
      title?: string | null
      subtitle?: string | null
      heroImage?: string | null
      dates?: string | null
      location?: string | null
      description?: string | null
    } | null
  }
}

interface Props {
  tinaResult: TinaResult | null
  project: Project | undefined
  content: PageContent | null
  category: string
}

// Separate inner component so hooks are always called unconditionally.
function TinaShell({ tinaResult, project, content, category }: Props) {
  const { data } = useTina(
    tinaResult ?? { query: "{ __typename }", variables: {}, data: {} }
  )

  const tina = tinaResult ? (data as TinaResult["data"]).project : null

  const heroTitle = (tina?.title ?? content?.title ?? project?.title ?? "").toUpperCase()
  const heroSubtitle =
    tina?.subtitle ?? content?.subtitle ?? `${project?.dates ?? ""} · ${project?.location ?? ""}`
  const heroImage = tina?.heroImage ?? content?.heroImage ?? project?.image ?? ""

  return (
    <div>
      <HeroSmallTitle image={heroImage} title={heroTitle} subtitle={heroSubtitle} />

      {content ? (
        <>
          <div className="bg-white px-6 md:px-16 py-4 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
              <Link
                href={`/projects/${category}`}
                className="text-[#E8003A] text-sm font-semibold hover:underline"
              >
                ← Back to {category}
              </Link>
            </div>
          </div>
          <PageRenderer content={content} />
        </>
      ) : (
        <main className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto flex flex-col gap-12">
            <Link
              href={`/projects/${category}`}
              className="text-[#E8003A] text-sm font-semibold hover:underline self-start"
            >
              ← Back to {category}
            </Link>

            {(tina?.heroImage ?? project?.image) && (
              <div className="w-full overflow-hidden rounded-2xl">
                <Image
                  src={tina?.heroImage ?? project?.image ?? ""}
                  alt={tina?.title ?? project?.title ?? ""}
                  width={900}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div className="flex flex-col gap-2">
              <h1
                className="text-gray-700 text-3xl font-bold"
                data-tina-field={tina ? tinaField(tina, "title") : undefined}
              >
                {tina?.title ?? project?.title}
              </h1>
              <p
                className="text-gray-500 text-base"
                data-tina-field={tina ? tinaField(tina, "dates") : undefined}
              >
                {tina?.dates ?? project?.dates}
              </p>
              <p
                className="text-gray-500 text-base"
                data-tina-field={tina ? tinaField(tina, "location") : undefined}
              >
                {tina?.location ?? project?.location}
              </p>
            </div>

            <p
              className="text-gray-600 text-base leading-relaxed"
              data-tina-field={tina ? tinaField(tina, "description") : undefined}
            >
              {tina?.description ?? project?.description}
            </p>

            {project?.gallery && project.gallery.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project?.gallery?.map((img) => (
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
