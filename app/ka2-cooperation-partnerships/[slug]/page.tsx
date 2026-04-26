import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ippPublications, getIppPublicationBySlug } from "@/data/ipp-publications"
import { getPageContent } from "@/data/content"
import { client } from "@/tina/__generated__/client"
import { IppPublicationClient } from "./client"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const publication = getIppPublicationBySlug(slug)
  return { title: publication?.title ?? slug }
}

export function generateStaticParams() {
  return ippPublications.map((p) => ({ slug: p.slug }))
}

export default async function IppPublicationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const publication = getIppPublicationBySlug(slug)
  if (!publication) return notFound()

  const content = getPageContent("ipp", slug)

  let tinaResult = null
  try {
    tinaResult = await client.queries.project({ relativePath: `ipp/${slug}.json` })
  } catch {
    // Not yet managed by TinaCMS
  }

  return (
    <IppPublicationClient
      tinaResult={tinaResult}
      publication={publication}
      content={content}
    />
  )
}
