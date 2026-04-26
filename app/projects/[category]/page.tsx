import { notFound } from "next/navigation"
import { getCategoryBySlug, categories } from "@/data/projects"
import { getProjectsByCategory } from "@/lib/getProjects"
import { client } from "@/tina/__generated__/client"
import { CategoryListingClient } from "./client"

export function generateStaticParams() {
    return categories.map((c) => ({ category: c.slug }))
}

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ category: string }>
}) {
    const { category } = await params

    const categoryData = getCategoryBySlug(category)
    if (!categoryData) return notFound()

    const projects = getProjectsByCategory(category)

    let tinaResult = null
    try {
        tinaResult = await client.queries.projectConnection()
    } catch {
        // TinaCMS unavailable; listing falls back to static data.
    }

    return (
        <CategoryListingClient
            tinaResult={tinaResult}
            projects={projects}
            categoryData={categoryData}
            category={category}
        />
    )
}
