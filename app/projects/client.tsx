"use client"

import Image from "next/image"
import Link from "next/link"
import { useTina, tinaField } from "tinacms/dist/react"
import HeroSmallTitle from "@/components/sections/hero-small-title"
import PhotoGallery from "@/components/sections/photo-gallery"

type TinaCard = {
  title?: string | null
  description?: string | null
  image?: string | null
  imageAlt?: string | null
  linkHref?: string | null
}

type TinaResult = {
  query: string
  variables: Record<string, unknown>
  data: {
    projectsIndex?: {
      heroTitle?: string | null
      heroImage?: string | null
      cards?: Array<TinaCard | null> | null
    } | null
  }
}

type StaticCard = {
  id: number
  title: string
  description: string
  image: string
  imageAlt: string
  linkHref: string
}

const DUMMY_TINA_INPUT = {
  query: "{ __typename }",
  variables: {} as Record<string, unknown>,
  data: {} as Record<string, unknown>,
}

interface Props {
  tinaResult: TinaResult | null
  staticCards: StaticCard[]
  galleryImages: string[]
}

export function ProjectsIndexClient({ tinaResult, staticCards, galleryImages }: Props) {
  const { data } = useTina(tinaResult ?? DUMMY_TINA_INPUT)

  const tinaDoc = tinaResult ? (data as any).projectsIndex : null

  const heroTitle = tinaDoc?.heroTitle ?? "EUROPEAN PROJECTS"
  const heroImage = tinaDoc?.heroImage ?? "/images/projects/image-bg.jpg"
  const cards: TinaCard[] = tinaDoc?.cards ?? staticCards

  return (
    <div>
      <HeroSmallTitle
        image={heroImage}
        title={heroTitle}
        tina={{
          image: tinaDoc ? tinaField(tinaDoc, "heroImage") : undefined,
          title: tinaDoc ? tinaField(tinaDoc, "heroTitle") : undefined,
        }}
      />

      <div className="flex flex-col gap-12 py-12">
        {cards.map((card, i) => {
          const tinaCard = tinaDoc?.cards?.[i] ?? null
          const title = card?.title ?? ""
          const description = card?.description ?? ""
          const image = card?.image ?? ""
          const imageAlt = card?.imageAlt ?? title
          const linkHref = card?.linkHref ?? "#"

          return (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-12 py-16 px-6 md:px-16 lg:px-48"
            >
              <div
                className="w-72 h-72 md:w-96 md:h-96 shrink-0 rounded-full overflow-hidden"
                data-tina-field={tinaCard ? tinaField(tinaCard, "image") : undefined}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-4 max-w-lg">
                <h3
                  className="text-gray-700 text-2xl font-semibold"
                  data-tina-field={tinaCard ? tinaField(tinaCard, "title") : undefined}
                >
                  {title}
                </h3>
                <p
                  className="text-gray-500 text-base leading-relaxed"
                  data-tina-field={tinaCard ? tinaField(tinaCard, "description") : undefined}
                >
                  {description}
                </p>
                <Link
                  href={linkHref}
                  className="self-start bg-[#E8003A] hover:bg-[#c40031] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
                >
                  Discover more
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      <PhotoGallery images={galleryImages} />
    </div>
  )
}
