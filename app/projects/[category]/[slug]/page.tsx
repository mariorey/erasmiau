import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { getAllProjects, getProjectBySlug } from "@/lib/getProjects"
import { getPageContent } from "@/data/content"
import { client } from "@/tina/__generated__/client"
import { ProjectPageClient } from "./client"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}): Promise<Metadata> {
  const { category, slug } = await params
  const project = getProjectBySlug(category, slug)
  return { title: project?.title ?? slug }
}

export function generateStaticParams() {
  return getAllProjects()
    .filter((p) => p.category !== "ipp")
    .map((p) => ({
      category: p.category,
      slug: p.slug,
    }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params

  if (category === "ipp") redirect(`/ka2-cooperation-partnerships/${slug}`)

  // TinaCMS-managed projects may not be in data/projects.ts yet — that's fine.
  const project = getProjectBySlug(category, slug)

  const content = getPageContent(category, slug)

  // Try to load TinaCMS data — only succeeds for projects that have a .json file.
  let tinaResult = null
  try {
    tinaResult = await client.queries.project({
      relativePath: `${category}/${slug}.json`,
    })
  } catch {
    // Project not yet managed by TinaCMS; fall back to static data.
  }

  // A project must exist either in data/projects.ts OR as a TinaCMS JSON file.
  if (!project && !tinaResult) return notFound()

  return (
    <ProjectPageClient
      tinaResult={tinaResult}
      project={project}
      content={content}
      category={category}
    />
  )
}
