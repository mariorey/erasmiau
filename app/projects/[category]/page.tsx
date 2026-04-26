import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCategoryBySlug, categories } from "@/data/projects"
import { getProjectsByCategory } from "@/lib/getProjects";
import HeroSmallTitle from "@/components/sections/hero-small-title";

export function generateStaticParams() {
    return categories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({
                                               params,
                                           }: {
    params: Promise<{ category: string }>;
}) {
    const { category } = await params;

    const categoryData = getCategoryBySlug(category);
    if (!categoryData) return notFound();

    const projects = getProjectsByCategory(category);

    return (
        <div>
            <HeroSmallTitle
                image={categoryData.image}
                title={categoryData.label.toUpperCase()}
                subtitle={categoryData.description}
            />

            <main className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
                <div className="max-w-6xl mx-auto flex flex-col gap-24">
                    {projects.map((project) => (
                        <div
                            key={project.slug}
                            className="flex flex-col md:flex-row gap-12 items-center"
                        >
                            {/* Imagen ovalada */}
                            <div className="w-72 md:w-[420px] shrink-0 overflow-hidden rounded-full aspect-square">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={420}
                                    height={315}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-4 max-w-lg">
                                <div>
                                    <h2 className="text-gray-700 text-2xl font-semibold leading-snug">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-700 text-xl font-semibold mt-1">
                                        {project.dates}
                                    </p>
                                    <p className="text-gray-700 text-xl font-semibold">
                                        {project.location}
                                    </p>
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                                    {project.description}
                                </p>

                                <Link
                                    href={`/projects/${category}/${project.slug}`}
                                    className="self-start bg-[#E8003A] hover:bg-[#c40031] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
                                >
                                    Discover more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}