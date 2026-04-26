"use client"

import Image from "next/image"
import Link from "next/link"
import { useTina, tinaField } from "tinacms/dist/react"
import HeroSmallTitle from "@/components/sections/hero-small-title"
import type { Project, Category } from "@/data/projects"

type TinaNode = {
  _sys: { relativePath: string }
  title: string
  dates?: string | null
  location?: string | null
  description?: string | null
  coverImage?: string | null
  heroImage?: string | null
}

type TinaConnectionResult = {
  query: string
  variables: Record<string, unknown>
  data: {
    projectConnection?: {
      edges?: Array<{ node?: TinaNode | null } | null> | null
    } | null
  }
}

const DUMMY_TINA_INPUT = {
  query: "{ __typename }",
  variables: {} as Record<string, unknown>,
  data: {} as Record<string, unknown>,
}

interface Props {
  tinaResult: TinaConnectionResult | null
  projects: Project[]
  categoryData: Category
  category: string
}

export function CategoryListingClient({ tinaResult, projects, categoryData, category }: Props) {
  const { data } = useTina(tinaResult ?? DUMMY_TINA_INPUT)

  const tinaNodeMap = new Map<string, TinaNode>()
  const edges = tinaResult ? (data as any).projectConnection?.edges : null
  if (edges) {
    for (const edge of edges) {
      if (!edge?.node) continue
      const relPath: string = edge.node._sys.relativePath
      if (!relPath.startsWith(category + "/")) continue
      const slug = relPath.slice(category.length + 1).replace(/\.json$/, "")
      tinaNodeMap.set(slug, edge.node)
    }
  }

  return (
    <div>
      <HeroSmallTitle
        image={categoryData.image}
        title={categoryData.label.toUpperCase()}
        subtitle={categoryData.description}
      />

      <main className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {projects.map((project) => {
            const node = tinaNodeMap.get(project.slug) ?? null
            const title = node?.title ?? project.title
            const dates = node?.dates ?? project.dates
            const location = node?.location ?? project.location
            const description = node?.description ?? project.description
            const image = node?.coverImage ?? node?.heroImage ?? project.image

            return (
              <div
                key={project.slug}
                className="flex flex-col md:flex-row gap-12 items-center"
              >
                <div
                  className="w-72 md:w-[420px] shrink-0 overflow-hidden rounded-full aspect-square"
                  data-tina-field={node ? tinaField(node, "coverImage") : undefined}
                >
                  <Image
                    src={image}
                    alt={title}
                    width={420}
                    height={315}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-4 max-w-lg">
                  <div>
                    <h2
                      className="text-gray-700 text-2xl font-semibold leading-snug"
                      data-tina-field={node ? tinaField(node, "title") : undefined}
                    >
                      {title}
                    </h2>
                    <p
                      className="text-gray-700 text-xl font-semibold mt-1"
                      data-tina-field={node ? tinaField(node, "dates") : undefined}
                    >
                      {dates}
                    </p>
                    <p
                      className="text-gray-700 text-xl font-semibold"
                      data-tina-field={node ? tinaField(node, "location") : undefined}
                    >
                      {location}
                    </p>
                  </div>

                  <p
                    className="text-gray-500 text-sm leading-relaxed text-justify"
                    data-tina-field={node ? tinaField(node, "description") : undefined}
                  >
                    {description}
                  </p>

                  <Link
                    href={`/projects/${category}/${project.slug}`}
                    className="self-start bg-[#E8003A] hover:bg-[#c40031] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
                  >
                    Discover more
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
