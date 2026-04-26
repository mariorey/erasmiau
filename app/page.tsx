import type { Metadata } from "next"
import fs from "fs"
import path from "path"
import client from "@/tina/__generated__/client"
import HomeView from "./home-view"

export const metadata: Metadata = {
  title: "Erasmiau | Inicio",
  description:
    "Asociación Juvenil Erasmiau de Puente Genil, Córdoba. Proyectos Erasmus+, movilidad internacional y voluntariado europeo.",
}

export default async function Page() {
  try {
    const res = await client.queries.page({ relativePath: "home.json" })
    return <HomeView data={res.data} query={res.query} variables={res.variables} />
  } catch {
    // TinaCMS Cloud not reachable at build time — read JSON directly.
    // Live editing sidebar will be disabled but the page renders correctly.
    const filePath = path.join(process.cwd(), "data/content/pages/home.json")
    const raw = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    return <HomeView data={{ page: raw }} query="" variables={{}} />
  }
}
