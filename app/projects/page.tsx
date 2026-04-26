import fs from "fs"
import path from "path"
import staticCards from "@/data/projects.json"
import { ProjectsIndexClient } from "./client"

const galleryFolder = path.join(process.cwd(), "public/images/projects/gallery")

const galleryImages = fs
    .readdirSync(galleryFolder)
    .filter((file) => file.endsWith(".jpg"))
    .sort((a, b) => Number(a.split(".")[0]) - Number(b.split(".")[0]))
    .map((file) => `/images/projects/gallery/${file}`)

export default async function ProjectsPage() {
    let tinaResult = null
    try {
        const { client } = await import("@/tina/__generated__/client")
        tinaResult = await (client as any).queries.projectsIndex({
            relativePath: "main.json",
        })
    } catch {
        // TinaCMS unavailable; falls back to static data.
    }

    return (
        <ProjectsIndexClient
            tinaResult={tinaResult}
            staticCards={staticCards}
            galleryImages={galleryImages}
        />
    )
}
