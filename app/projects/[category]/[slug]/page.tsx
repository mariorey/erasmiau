import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getProjectBySlug, projects } from "@/data/projects"
import { getPageContent } from "@/data/content"
import HeroSmallTitle from "@/components/sections/hero-small-title"
import { PageRenderer } from "@/components/renderer/PageRenderer"

export function generateStaticParams() {
  return projects.map((p) => ({
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

  const project = getProjectBySlug(category, slug)
  if (!project) return notFound()

  const content = getPageContent(category, slug)

  // When rich content exists, prefer its title/subtitle/image for the hero
  const heroTitle = (content?.title ?? project.title).toUpperCase()
  const heroSubtitle = content?.subtitle ?? `${project.dates} · ${project.location}`
  const heroImage = content?.heroImage ?? project.image

  return (
    <div>
      <HeroSmallTitle
        image={heroImage}
        title={heroTitle}
        subtitle={heroSubtitle}
      />

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
        // Fallback for projects without rich content yet
        <main className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto flex flex-col gap-12">
            <Link
              href={`/projects/${category}`}
              className="text-[#E8003A] text-sm font-semibold hover:underline self-start"
            >
              ← Back to {category}
            </Link>

            <div className="w-full overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-gray-700 text-3xl font-bold">{project.title}</h1>
              <p className="text-gray-500 text-base">{project.dates}</p>
              <p className="text-gray-500 text-base">{project.location}</p>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              {project.description}
            </p>

            {project.gallery && project.gallery.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img) => (
                  <div key={img} className="overflow-hidden rounded-xl aspect-[4/3]">
                    <Image
                      src={img}
                      alt={project.title}
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
