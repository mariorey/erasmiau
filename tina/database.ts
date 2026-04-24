/**
 * TinaCMS database configuration.
 *
 * LOCAL DEV  — reads/writes JSON files directly from disk (no external services).
 * PRODUCTION — GitHub as content provider + MongoDB as cache layer.
 *
 * Required env vars for production (add to Vercel project settings):
 *   GITHUB_PERSONAL_ACCESS_TOKEN  PAT with repo read/write
 *   GITHUB_OWNER                  GitHub username / org (e.g. "marioreycarmona")
 *   GITHUB_REPO                   Repo name (e.g. "Proyecto-Erasmiau")
 *   GITHUB_BRANCH                 Target branch (e.g. "main")
 *   MONGODB_URI                   Atlas connection string
 */

import { createLocalDatabase } from "@tinacms/datalayer"

// LOCAL: filesystem-backed database (used when TINA_PUBLIC_IS_LOCAL=true)
export const localDatabase = createLocalDatabase({ port: 4001 })

// PRODUCTION database factory — only imported when not in local mode.
// Requires: npm install tinacms-gitprovider-github @tinacms/mongodb-level
//
// Uncomment and configure once you have the required env vars:
//
// import { createDatabase, TinaLevelClient } from "@tinacms/datalayer"
// import { MongodbLevel } from "@tinacms/mongodb-level"
// import { GitHubProvider } from "tinacms-gitprovider-github"
//
// export const productionDatabase = createDatabase({
//   github: new GitHubProvider({
//     repoOwner: process.env.GITHUB_OWNER!,
//     repoName: process.env.GITHUB_REPO!,
//     branch: process.env.GITHUB_BRANCH!,
//     token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN!,
//   }),
//   level: new TinaLevelClient(
//     new MongodbLevel({ connectionString: process.env.MONGODB_URI! })
//   ),
// })
