import { defineConfig } from "tinacms"

// ─── Block templates ──────────────────────────────────────────────────────────

const blockTemplates = [
  {
    name: "heading",
    label: "Heading",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.text ? String(item.text) : "Heading",
      }),
    },
    fields: [
      {
        type: "string" as const,
        name: "level",
        label: "Level",
        options: [
          { value: "1", label: "H1" },
          { value: "2", label: "H2" },
          { value: "3", label: "H3" },
          { value: "4", label: "H4" },
        ],
      },
      {
        type: "string" as const,
        name: "text",
        label: "Text",
        isTitle: true,
        required: true,
      },
      {
        type: "string" as const,
        name: "color",
        label: "Color",
        options: [
          { value: "default", label: "Default (gray)" },
          { value: "brand", label: "Brand (red)" },
        ],
      },
    ],
  },
  {
    name: "paragraph",
    label: "Paragraph",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.text
          ? String(item.text).slice(0, 60) + (String(item.text).length > 60 ? "…" : "")
          : "Paragraph",
      }),
    },
    fields: [
      {
        type: "string" as const,
        name: "text",
        label: "Text",
        required: true,
        ui: { component: "textarea" },
      },
      {
        type: "boolean" as const,
        name: "italic",
        label: "Italic",
      },
      {
        type: "string" as const,
        name: "size",
        label: "Size",
        options: [
          { value: "sm", label: "Small" },
          { value: "base", label: "Base" },
          { value: "lg", label: "Large" },
          { value: "xl", label: "X-Large" },
        ],
      },
      {
        type: "string" as const,
        name: "align",
        label: "Alignment",
        options: [
          { value: "left", label: "Left" },
          { value: "center", label: "Center" },
          { value: "right", label: "Right" },
          { value: "justify", label: "Justify" },
        ],
      },
    ],
  },
  {
    name: "image",
    label: "Image",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.alt ? String(item.alt) : item.src ? String(item.src).split("/").pop() : "Image",
      }),
    },
    fields: [
      {
        type: "image" as const,
        name: "src",
        label: "Source",
        required: true,
      },
      {
        type: "string" as const,
        name: "alt",
        label: "Alt text",
      },
      {
        type: "string" as const,
        name: "caption",
        label: "Caption",
      },
      {
        type: "string" as const,
        name: "aspectRatio",
        label: "Aspect Ratio",
        options: [
          { value: "auto", label: "Auto" },
          { value: "4/3", label: "4:3" },
          { value: "16/9", label: "16:9" },
          { value: "1/1", label: "1:1" },
          { value: "3/4", label: "3:4" },
        ],
      },
      {
        type: "string" as const,
        name: "rounded",
        label: "Rounded",
        options: [
          { value: "", label: "None" },
          { value: "true", label: "Rounded" },
          { value: "full", label: "Circle" },
        ],
      },
      {
        type: "boolean" as const,
        name: "priority",
        label: "Priority (LCP)",
      },
    ],
  },
  {
    name: "imageGroup",
    label: "Image Group",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: `Image Group (${Array.isArray(item.images) ? item.images.length : 0} images)`,
      }),
    },
    fields: [
      {
        type: "object" as const,
        name: "images",
        label: "Images",
        list: true,
        fields: [
          { type: "image" as const, name: "src", label: "Source" },
          { type: "string" as const, name: "alt", label: "Alt text" },
        ],
      },
      {
        type: "string" as const,
        name: "columns",
        label: "Columns",
        options: [
          { value: "2", label: "2" },
          { value: "3", label: "3" },
          { value: "4", label: "4" },
        ],
      },
    ],
  },
  {
    name: "video",
    label: "Video",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.title
          ? String(item.title)
          : item.id
          ? `${item.platform ?? "video"}: ${item.id}`
          : "Video",
      }),
    },
    fields: [
      {
        type: "string" as const,
        name: "platform",
        label: "Platform",
        options: [
          { value: "youtube", label: "YouTube" },
          { value: "instagram", label: "Instagram" },
        ],
      },
      {
        type: "string" as const,
        name: "id",
        label: "Video ID",
        required: true,
      },
      {
        type: "string" as const,
        name: "title",
        label: "Title",
        required: true,
      },
    ],
  },
  {
    name: "list",
    label: "List",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: `List (${item.style ?? "bullet"})`,
      }),
    },
    fields: [
      {
        type: "string" as const,
        name: "style",
        label: "Style",
        options: [
          { value: "bullet", label: "Bullet" },
          { value: "numbered", label: "Numbered" },
        ],
      },
      {
        type: "string" as const,
        name: "items",
        label: "Items",
        list: true,
      },
    ],
  },
  {
    name: "testimonial",
    label: "Testimonial",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.name ? String(item.name) : "Testimonial",
      }),
    },
    fields: [
      {
        type: "string" as const,
        name: "name",
        label: "Name",
        required: true,
        isTitle: true,
      },
      {
        type: "string" as const,
        name: "role",
        label: "Role",
      },
      {
        type: "string" as const,
        name: "country",
        label: "Country",
        required: true,
      },
      {
        type: "string" as const,
        name: "text",
        label: "Text",
        required: true,
        ui: { component: "textarea" },
      },
      {
        type: "image" as const,
        name: "avatar",
        label: "Avatar",
      },
    ],
  },
  {
    name: "gallery",
    label: "Gallery (block)",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: `Gallery (${Array.isArray(item.images) ? item.images.length : 0} photos)`,
      }),
    },
    fields: [
      {
        type: "object" as const,
        name: "images",
        label: "Images",
        list: true,
        fields: [
          { type: "image" as const, name: "src", label: "Source" },
          { type: "string" as const, name: "alt", label: "Alt text" },
        ],
      },
      {
        type: "string" as const,
        name: "columns",
        label: "Columns",
        options: [
          { value: "2", label: "2" },
          { value: "3", label: "3" },
          { value: "4", label: "4" },
          { value: "5", label: "5" },
        ],
      },
    ],
  },
  {
    name: "dayReport",
    label: "Day Report",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.day != null
          ? `Day ${item.day}${item.title ? ": " + String(item.title) : ""}`
          : "Day Report",
      }),
    },
    fields: [
      {
        type: "string" as const,
        name: "day",
        label: "Day",
        required: true,
      },
      {
        type: "string" as const,
        name: "title",
        label: "Title",
        isTitle: true,
        required: true,
      },
      {
        type: "string" as const,
        name: "text",
        label: "Text",
        required: true,
        ui: {
          component: "textarea",
          description: "Use blank line between paragraphs",
        },
      },
      {
        type: "object" as const,
        name: "images",
        label: "Images",
        list: true,
        fields: [
          { type: "image" as const, name: "src", label: "Source" },
          { type: "string" as const, name: "alt", label: "Alt text" },
        ],
      },
      {
        type: "string" as const,
        name: "titleStyle",
        label: "Title Style",
        options: [
          { value: "badge", label: "Badge" },
          { value: "header", label: "Header" },
        ],
      },
    ],
  },
  {
    name: "partner",
    label: "Partner",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.country ? String(item.country) : "Partner",
      }),
    },
    fields: [
      {
        type: "string" as const,
        name: "country",
        label: "Country",
        required: true,
        isTitle: true,
      },
      {
        type: "image" as const,
        name: "flag",
        label: "Flag",
        required: true,
      },
      {
        type: "string" as const,
        name: "organizations",
        label: "Organizations",
        list: true,
      },
    ],
  },
  {
    name: "outcome",
    label: "Outcome",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.title ? String(item.title) : item.number ? `#${item.number}` : "Outcome",
      }),
    },
    fields: [
      {
        type: "string" as const,
        name: "number",
        label: "Number",
        required: true,
      },
      {
        type: "string" as const,
        name: "title",
        label: "Title",
        required: true,
        isTitle: true,
      },
      {
        type: "string" as const,
        name: "description",
        label: "Description",
        ui: { component: "textarea" },
        required: true,
      },
    ],
  },
  {
    name: "spacer",
    label: "Spacer",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: `Spacer (${item.size ?? "md"})`,
      }),
    },
    fields: [
      {
        type: "string" as const,
        name: "size",
        label: "Size",
        options: [
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" },
        ],
      },
    ],
  },
  {
    name: "participant",
    label: "Participant",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.name ? String(item.name) : "Participant",
      }),
    },
    fields: [
      {
        type: "string" as const,
        name: "experienceTitle",
        label: "Section Label",
      },
      {
        type: "string" as const,
        name: "name",
        label: "Name",
        required: true,
        isTitle: true,
      },
      {
        type: "image" as const,
        name: "image",
        label: "Photo",
      },
      {
        type: "string" as const,
        name: "text",
        label: "Testimonial",
        required: true,
        ui: {
          component: "textarea",
          description: "Use blank line between paragraphs",
        },
      },
    ],
  },
  {
    name: "photoFeature",
    label: "Photo Feature (1 large + 3 small)",
    ui: {
      itemProps: () => ({ label: "Photo Feature" }),
    },
    fields: [
      {
        type: "object" as const,
        name: "mainImage",
        label: "Main Image",
        fields: [
          { type: "image" as const, name: "src", label: "Source" },
          { type: "string" as const, name: "alt", label: "Alt text" },
        ],
      },
      {
        type: "object" as const,
        name: "thumbs",
        label: "Thumbnails (up to 3)",
        list: true,
        fields: [
          { type: "image" as const, name: "src", label: "Source" },
          { type: "string" as const, name: "alt", label: "Alt text" },
        ],
      },
    ],
  },
  {
    name: "linkGrid",
    label: "Link Grid (photos with URLs)",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: `Link Grid (${Array.isArray(item.items) ? item.items.length : 0} items)`,
      }),
    },
    fields: [
      {
        type: "string" as const,
        name: "columns",
        label: "Columns",
        options: [
          { value: "2", label: "2" },
          { value: "3", label: "3" },
          { value: "4", label: "4" },
        ],
      },
      {
        type: "object" as const,
        name: "links",
        label: "Items",
        list: true,
        fields: [
          { type: "image" as const, name: "src", label: "Photo" },
          { type: "string" as const, name: "alt", label: "Alt text" },
          { type: "string" as const, name: "href", label: "Link URL", required: true },
        ],
      },
    ],
  },
]

// ─── SectionBase fields (shared) ─────────────────────────────────────────────

const sectionBaseFields = [
  {
    type: "string" as const,
    name: "background",
    label: "Background",
    options: [
      { value: "white", label: "White" },
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" },
      { value: "brand", label: "Brand" },
    ],
  },
  {
    type: "string" as const,
    name: "paddingY",
    label: "Padding Y",
    options: [
      { value: "none", label: "None" },
      { value: "sm", label: "Small" },
      { value: "md", label: "Medium" },
      { value: "lg", label: "Large" },
    ],
  },
  {
    type: "string" as const,
    name: "maxWidth",
    label: "Max Width",
    options: [
      { value: "sm", label: "Small" },
      { value: "md", label: "Medium" },
      { value: "lg", label: "Large" },
      { value: "xl", label: "X-Large" },
      { value: "full", label: "Full" },
    ],
  },
  {
    type: "string" as const,
    name: "id",
    label: "Anchor ID",
  },
]

// ─── Section templates ────────────────────────────────────────────────────────

const sectionTemplates = [
  {
    name: "single",
    label: "Single Column",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: `Single — ${Array.isArray(item.blocks) ? item.blocks.length : 0} block(s)`,
      }),
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "object" as const,
        name: "blocks",
        label: "Blocks",
        list: true,
        templates: blockTemplates,
      },
    ],
  },
  {
    name: "columns",
    label: "Two Columns",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: `Columns — ${item.distribution ?? "50/50"}`,
      }),
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "string" as const,
        name: "distribution",
        label: "Distribution",
        options: [
          { value: "50/50", label: "50/50" },
          { value: "60/40", label: "60/40" },
          { value: "70/30", label: "70/30" },
          { value: "40/60", label: "40/60" },
          { value: "30/70", label: "30/70" },
        ],
      },
      {
        type: "string" as const,
        name: "verticalAlign",
        label: "Vertical Align",
        options: [
          { value: "top", label: "Top" },
          { value: "center", label: "Center" },
          { value: "bottom", label: "Bottom" },
        ],
      },
      {
        type: "string" as const,
        name: "gap",
        label: "Gap",
        options: [
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" },
        ],
      },
      {
        type: "object" as const,
        name: "left",
        label: "Left Column",
        list: true,
        templates: blockTemplates,
      },
      {
        type: "object" as const,
        name: "right",
        label: "Right Column",
        list: true,
        templates: blockTemplates,
      },
    ],
  },
  {
    name: "grid",
    label: "Multi-Column Grid",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: `Grid — ${item.count ?? "?"} columns`,
      }),
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "string" as const,
        name: "count",
        label: "Column Count",
        options: [
          { value: "3", label: "3" },
          { value: "4", label: "4" },
        ],
      },
      {
        type: "string" as const,
        name: "gap",
        label: "Gap",
        options: [
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" },
        ],
      },
      {
        type: "object" as const,
        name: "gridColumns",
        label: "Columns",
        list: true,
        fields: [
          {
            type: "object" as const,
            name: "blocks",
            label: "Blocks",
            list: true,
            templates: blockTemplates,
          },
        ],
      },
    ],
  },
  {
    name: "testimonials",
    label: "Testimonials Section",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.title ? String(item.title) : "Testimonials",
      }),
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "string" as const,
        name: "title",
        label: "Title",
      },
      {
        type: "object" as const,
        name: "testimonials",
        label: "Testimonials",
        list: true,
        templates: [blockTemplates.find((t) => t.name === "testimonial")!],
      },
    ],
  },
  {
    name: "gallery",
    label: "Gallery Section",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.title
          ? String(item.title)
          : `Gallery (${Array.isArray(item.images) ? item.images.length : 0} photos)`,
      }),
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "string" as const,
        name: "title",
        label: "Title",
      },
      {
        type: "string" as const,
        name: "subtitle",
        label: "Subtitle",
      },
      {
        type: "object" as const,
        name: "images",
        label: "Images",
        list: true,
        fields: [
          { type: "image" as const, name: "src", label: "Source" },
          { type: "string" as const, name: "alt", label: "Alt text" },
        ],
      },
      {
        type: "string" as const,
        name: "columns",
        label: "Columns",
        options: [
          { value: "2", label: "2" },
          { value: "3", label: "3" },
          { value: "4", label: "4" },
          { value: "5", label: "5" },
        ],
      },
    ],
  },
  {
    name: "repeater",
    label: "Repeater Section",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.title ? String(item.title) : "Repeater",
      }),
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "string" as const,
        name: "title",
        label: "Title",
      },
      {
        type: "object" as const,
        name: "items",
        label: "Items",
        list: true,
        templates: [
          blockTemplates.find((t) => t.name === "dayReport")!,
          blockTemplates.find((t) => t.name === "outcome")!,
        ],
      },
    ],
  },
  {
    name: "autoGrid",
    label: "Auto Grid",
    ui: {
      itemProps: (item: Record<string, unknown>) => ({
        label: item.title
          ? String(item.title)
          : `Auto Grid (${item.count ?? "?"} cols)`,
      }),
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "string" as const,
        name: "count",
        label: "Column Count",
        options: [
          { value: "2", label: "2" },
          { value: "3", label: "3" },
          { value: "4", label: "4" },
          { value: "5", label: "5" },
          { value: "6", label: "6" },
        ],
      },
      {
        type: "string" as const,
        name: "title",
        label: "Title",
      },
      {
        type: "string" as const,
        name: "subtitle",
        label: "Subtitle",
      },
      {
        type: "string" as const,
        name: "titleColor",
        label: "Title Color",
        options: [
          { value: "default", label: "Default" },
          { value: "brand", label: "Brand" },
        ],
      },
      {
        type: "object" as const,
        name: "items",
        label: "Items",
        list: true,
        templates: blockTemplates,
      },
    ],
  },
]

// ─── Main config ──────────────────────────────────────────────────────────────

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: "c8fa186c-7308-4b5d-a717-0557aa09399d",
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
            readonly: false,
          },
          router: ({ document }) => {
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
            name: "dates",
            label: "Dates",
            description: "e.g. 5-13 April 2024",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            description: "e.g. Paralimni, Cyprus",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            description: "Short summary shown on the listing page",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover image",
            description: "Thumbnail shown on the listing page",
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero image",
            description: "Large image shown at the top of the project detail page",
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            description: "Short tagline shown below the title on the detail page",
          },
          {
            type: "object",
            name: "sections",
            label: "Page content",
            list: true,
            templates: sectionTemplates,
          },
        ],
      },
      // ... dentro de schema: { collections: [ ... ] }

      {
        name: "page",
        label: "Pages",
        path: "data/content/pages", // Donde se guardará el JSON de la Home
        format: "json",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") return `/`;
            return undefined;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título de la Página",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "headline",
                label: "Titular",
                ui: {
                  component: "textarea" // Esto permite saltos de línea reales
                }
              },
              { type: "string", name: "subheading", label: "Subtítulo" },
              { type: "image", name: "backgroundImage", label: "Imagen de Fondo" },
              { type: "string", name: "buttonText", label: "Texto del Botón" },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "About Section",
            fields: [
              { type: "string", name: "title", label: "Título Rojo" },
              { type: "string", name: "subtitle", label: "Subtítulo" },
              { type: "string", name: "text1", label: "Párrafo 1", ui: { component: "textarea" } },
              { type: "string", name: "text2", label: "Párrafo 2", ui: { component: "textarea" } },
              { type: "string", name: "caption", label: "Pie de página (Italic)", ui: { component: "textarea" } },
              { type: "image", name: "mainImage", label: "Imagen Principal" },
              {
                type: "object",
                name: "thumbnails",
                label: "Miniaturas",
                list: true,
                fields: [
                  { type: "image", name: "src", label: "Imagen" },
                  { type: "string", name: "alt", label: "Alt Text" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "instagram",
            label: "Instagram Section",
            fields: [
              { type: "string", name: "title", label: "Título Principal" },
              { type: "string", name: "subtitle", label: "Subtítulo" },
              { type: "string", name: "handle", label: "Usuario (@...)" },
              { type: "string", name: "link", label: "Enlace Instagram" },
            ],
          },
        ],
      },
    ],
  },
})
