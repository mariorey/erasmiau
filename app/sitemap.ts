import type { MetadataRoute } from "next"
import { categories } from "@/data/projects"
import { getAllProjects } from "@/lib/getProjects"
import { ippPublications } from "@/data/ipp-publications"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://erasmiau.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "monthly" },
    { url: `${BASE_URL}/projects`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/ka2-cooperation-partnerships`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/team`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE_URL}/questions`, priority: 0.6, changeFrequency: "yearly" },
  ]

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${BASE_URL}/projects/${c.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }))

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects()
    .filter((p) => p.category !== "ipp")
    .map((p) => ({
      url: `${BASE_URL}/projects/${p.category}/${p.slug}`,
      priority: 0.7,
      changeFrequency: "yearly" as const,
    }))

  const ippRoutes: MetadataRoute.Sitemap = ippPublications.map((p) => ({
    url: `${BASE_URL}/ka2-cooperation-partnerships/${p.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }))

  return [...staticRoutes, ...categoryRoutes, ...projectRoutes, ...ippRoutes]
}
