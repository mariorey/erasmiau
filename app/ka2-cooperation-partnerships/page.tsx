import Image from "next/image"
import Link from "next/link"
import HeroSmallTitle from "@/components/sections/hero-small-title"
import PhotoGallery from "@/components/sections/photo-gallery"
import { ippPublications } from "@/data/ipp-publications"
import fs from "fs"
import path from "path"

export default function Ka2ListingPage() {
  const galleryFolder = path.join(process.cwd(), "public/images/ipp/gallery")
  let galleryImages: string[] = []
  try {
    galleryImages = fs
      .readdirSync(galleryFolder)
      .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort((a, b) => {
        const na = Number(a.split(".")[0])
        const nb = Number(b.split(".")[0])
        return isNaN(na) || isNaN(nb) ? a.localeCompare(b) : na - nb
      })
      .map((f) => `/images/ipp/gallery/${f}`)
  } catch {
    // Gallery folder empty or missing — skip the section
  }

  return (
    <div>
      <HeroSmallTitle
        image="/images/projects/image-bg.jpg"
        title="INCLUSIVE PATHWAYS TO PEACE"
        subtitle="Project Updates · 2025-2026"
      />

      <main className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {ippPublications.map((pub) => (
            <div
              key={pub.slug}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="w-72 md:w-[420px] shrink-0 overflow-hidden rounded-full aspect-square">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  width={420}
                  height={420}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-4 max-w-lg">
                <div>
                  <h2 className="text-gray-700 text-2xl font-semibold leading-snug">
                    {pub.title}
                  </h2>
                  {pub.dates && (
                    <p className="text-gray-700 text-xl font-semibold mt-1">
                      {pub.dates}
                    </p>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  {pub.description}
                </p>
                <Link
                  href={`/ka2-cooperation-partnerships/${pub.slug}`}
                  className="self-start bg-[#E8003A] hover:bg-[#c40031] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
                >
                  Discover more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {galleryImages.length > 0 && <PhotoGallery images={galleryImages} />}
    </div>
  )
}
