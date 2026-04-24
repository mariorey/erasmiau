/**
 * TinaCMS backend route — handles GraphQL queries from the admin UI.
 *
 * In LOCAL dev (TINA_PUBLIC_IS_LOCAL=true) the built-in Tina dev server
 * on port 4001 handles everything; this route is only active in production.
 *
 * Required env vars (add to Vercel / .env.local):
 *   NEXTAUTH_SECRET              – random 32-char string, signs admin session cookies
 *   ADMIN_PASSWORD               – password for the /login page
 *   GITHUB_PERSONAL_ACCESS_TOKEN – PAT with repo read/write scope
 *   GITHUB_OWNER                 – GitHub username or org that owns the repo
 *   GITHUB_REPO                  – repository name (e.g. "Proyecto-Erasmiau")
 *   GITHUB_BRANCH                – branch to commit to (e.g. "main")
 *   MONGODB_URI                  – MongoDB Atlas connection string
 */

import { TinaNodeBackend, LocalBackendAuthProvider } from "@tinacms/datalayer"
import { NextRequest } from "next/server"
import { localDatabase } from "@/tina/database"

const handler = TinaNodeBackend({
  authProvider: LocalBackendAuthProvider(),
  databaseClient: localDatabase,
})

export async function GET(req: NextRequest, ctx: { params: Promise<{ routes: string[] }> }) {
  const params = await ctx.params
  return handler({ params: { routes: params.routes } } as any, {} as any)
}

export async function POST(req: NextRequest, ctx: { params: Promise<{ routes: string[] }> }) {
  const params = await ctx.params
  return handler({ params: { routes: params.routes } } as any, {} as any)
}
