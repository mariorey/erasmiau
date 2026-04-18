import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/data/projects";
import HeroSmallTitle from "@/components/sections/hero-small-title";

export function generateStaticParams() {
    return projects.map((p) => ({
        category: p.category,
        slug: p.slug,
    }));
}

export default async function ProjectPage({
                                              params,
                                          }: {
    params: Promise<{ category: string; slug: string }>;
}) {
    const { category, slug } = await params;

    const project = getProjectBySlug(category, slug);
    if (!project) return notFound();

    return (
        <div>
            <HeroSmallTitle
                image={project.image}
                title={project.title.toUpperCase()}
                subtitle={`${project.dates} · ${project.location}`}
            />

            <main className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
                <div className="max-w-4xl mx-auto flex flex-col gap-12">

                    {/* Volver a la categoría */}
                    <Link
                        href={`/projects/${category}`}
                        className="text-[#E8003A] text-sm font-semibold hover:underline self-start"
                    >
                        ← Back to {category}
                    </Link>

                    {/* Imagen principal */}
                    <div className="w-full overflow-hidden rounded-2xl">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={900}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Datos */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-700 text-3xl font-bold">{project.title}</h1>
                        <p className="text-gray-500 text-base">{project.dates}</p>
                        <p className="text-gray-500 text-base">{project.location}</p>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-600 text-base leading-relaxed">
                        {project.description}
                    </p>

                    {/* Galería (si hay imágenes) */}
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
        </div>
    );
}