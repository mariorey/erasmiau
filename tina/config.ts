import { defineConfig } from "tinacms"

// Phase 0 spike: minimal config to verify Tina + Next 16 compatibility.
// Schema intentionally tiny — expanded in Phase 1 to mirror types/content.ts.

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: 'c8fa186c-7308-4b5d-a717-0557aa09399d',
  token: null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "project",
        label: "Projects",
        path: "data/content/projects",
        format: "json",
        ui: {
          filename: {
            // Brother types the slug; Tina handles the category subfolder via router below.
            readonly: false,
          },
          router: ({ document }) => {
            // The JSON file lives at data/content/projects/<category>/<slug>.json.
            // Tina's "relativePath" is "<category>/<slug>.json" — strip .json for the URL.
            const relativePath = document._sys.relativePath.replace(/\.json$/, "")
            return `/projects/${relativePath}`
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              { value: "hosting", label: "Hosting" },
              { value: "sending", label: "Sending" },
              { value: "interrail", label: "Interrail" },
              { value: "solidarity-projects", label: "Solidarity" },
            ],
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "string",
            name: "dates",
            label: "Dates",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover image",
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero image",
          },
          // Phase 1 adds the full `sections` field (7 layout templates × 12 block templates).
        ],
      },
    ],
  },
})
