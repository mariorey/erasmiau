// tina/config.ts
import { defineConfig } from "tinacms";
var blockTemplates = [
  {
    name: "heading",
    label: "Heading",
    ui: {
      itemProps: (item) => ({
        label: item.text ? String(item.text) : "Heading"
      })
    },
    fields: [
      {
        type: "string",
        name: "level",
        label: "Level",
        options: [
          { value: "1", label: "H1" },
          { value: "2", label: "H2" },
          { value: "3", label: "H3" },
          { value: "4", label: "H4" }
        ]
      },
      {
        type: "string",
        name: "text",
        label: "Text",
        isTitle: true,
        required: true
      }
    ]
  },
  {
    name: "paragraph",
    label: "Paragraph",
    ui: {
      itemProps: (item) => ({
        label: item.text ? String(item.text).slice(0, 60) + (String(item.text).length > 60 ? "\u2026" : "") : "Paragraph"
      })
    },
    fields: [
      {
        type: "string",
        name: "text",
        label: "Text",
        required: true,
        ui: { component: "textarea" }
      },
      {
        type: "boolean",
        name: "italic",
        label: "Italic"
      },
      {
        type: "string",
        name: "size",
        label: "Size",
        options: [
          { value: "sm", label: "Small" },
          { value: "base", label: "Base" },
          { value: "lg", label: "Large" },
          { value: "xl", label: "X-Large" }
        ]
      },
      {
        type: "string",
        name: "align",
        label: "Alignment",
        options: [
          { value: "left", label: "Left" },
          { value: "center", label: "Center" },
          { value: "right", label: "Right" },
          { value: "justify", label: "Justify" }
        ]
      }
    ]
  },
  {
    name: "image",
    label: "Image",
    ui: {
      itemProps: (item) => ({
        label: item.alt ? String(item.alt) : item.src ? String(item.src).split("/").pop() : "Image"
      })
    },
    fields: [
      {
        type: "image",
        name: "src",
        label: "Source",
        required: true
      },
      {
        type: "string",
        name: "alt",
        label: "Alt text"
      },
      {
        type: "string",
        name: "caption",
        label: "Caption"
      },
      {
        type: "string",
        name: "aspectRatio",
        label: "Aspect Ratio",
        options: [
          { value: "auto", label: "Auto" },
          { value: "4/3", label: "4:3" },
          { value: "16/9", label: "16:9" },
          { value: "1/1", label: "1:1" },
          { value: "3/4", label: "3:4" }
        ]
      },
      {
        type: "string",
        name: "rounded",
        label: "Rounded",
        options: [
          { value: "", label: "None" },
          { value: "true", label: "Rounded" },
          { value: "full", label: "Circle" }
        ]
      },
      {
        type: "boolean",
        name: "priority",
        label: "Priority (LCP)"
      }
    ]
  },
  {
    name: "imageGroup",
    label: "Image Group",
    ui: {
      itemProps: (item) => ({
        label: `Image Group (${Array.isArray(item.images) ? item.images.length : 0} images)`
      })
    },
    fields: [
      {
        type: "object",
        name: "images",
        label: "Images",
        list: true,
        fields: [
          { type: "image", name: "src", label: "Source" },
          { type: "string", name: "alt", label: "Alt text" }
        ]
      },
      {
        type: "string",
        name: "columns",
        label: "Columns",
        options: [
          { value: "2", label: "2" },
          { value: "3", label: "3" },
          { value: "4", label: "4" }
        ]
      }
    ]
  },
  {
    name: "video",
    label: "Video",
    ui: {
      itemProps: (item) => ({
        label: item.title ? String(item.title) : item.id ? `${item.platform ?? "video"}: ${item.id}` : "Video"
      })
    },
    fields: [
      {
        type: "string",
        name: "platform",
        label: "Platform",
        options: [
          { value: "youtube", label: "YouTube" },
          { value: "instagram", label: "Instagram" }
        ]
      },
      {
        type: "string",
        name: "id",
        label: "Video ID",
        required: true
      },
      {
        type: "string",
        name: "title",
        label: "Title",
        required: true
      }
    ]
  },
  {
    name: "list",
    label: "List",
    ui: {
      itemProps: (item) => ({
        label: `List (${item.style ?? "bullet"})`
      })
    },
    fields: [
      {
        type: "string",
        name: "style",
        label: "Style",
        options: [
          { value: "bullet", label: "Bullet" },
          { value: "numbered", label: "Numbered" }
        ]
      },
      {
        type: "string",
        name: "items",
        label: "Items",
        list: true
      }
    ]
  },
  {
    name: "testimonial",
    label: "Testimonial",
    ui: {
      itemProps: (item) => ({
        label: item.name ? String(item.name) : "Testimonial"
      })
    },
    fields: [
      {
        type: "string",
        name: "name",
        label: "Name",
        required: true,
        isTitle: true
      },
      {
        type: "string",
        name: "role",
        label: "Role"
      },
      {
        type: "string",
        name: "country",
        label: "Country",
        required: true
      },
      {
        type: "string",
        name: "text",
        label: "Text",
        required: true,
        ui: { component: "textarea" }
      },
      {
        type: "image",
        name: "avatar",
        label: "Avatar"
      }
    ]
  },
  {
    name: "gallery",
    label: "Gallery (block)",
    ui: {
      itemProps: (item) => ({
        label: `Gallery (${Array.isArray(item.images) ? item.images.length : 0} photos)`
      })
    },
    fields: [
      {
        type: "object",
        name: "images",
        label: "Images",
        list: true,
        fields: [
          { type: "image", name: "src", label: "Source" },
          { type: "string", name: "alt", label: "Alt text" }
        ]
      },
      {
        type: "string",
        name: "columns",
        label: "Columns",
        options: [
          { value: "2", label: "2" },
          { value: "3", label: "3" },
          { value: "4", label: "4" },
          { value: "5", label: "5" }
        ]
      }
    ]
  },
  {
    name: "dayReport",
    label: "Day Report",
    ui: {
      itemProps: (item) => ({
        label: item.day != null ? `Day ${item.day}${item.title ? ": " + String(item.title) : ""}` : "Day Report"
      })
    },
    fields: [
      {
        type: "string",
        name: "day",
        label: "Day",
        required: true
      },
      {
        type: "string",
        name: "title",
        label: "Title",
        isTitle: true,
        required: true
      },
      {
        type: "string",
        name: "text",
        label: "Text",
        required: true,
        ui: {
          component: "textarea",
          description: "Use blank line between paragraphs"
        }
      },
      {
        type: "object",
        name: "images",
        label: "Images",
        list: true,
        fields: [
          { type: "image", name: "src", label: "Source" },
          { type: "string", name: "alt", label: "Alt text" }
        ]
      },
      {
        type: "string",
        name: "titleStyle",
        label: "Title Style",
        options: [
          { value: "badge", label: "Badge" },
          { value: "header", label: "Header" }
        ]
      }
    ]
  },
  {
    name: "partner",
    label: "Partner",
    ui: {
      itemProps: (item) => ({
        label: item.country ? String(item.country) : "Partner"
      })
    },
    fields: [
      {
        type: "string",
        name: "country",
        label: "Country",
        required: true,
        isTitle: true
      },
      {
        type: "image",
        name: "flag",
        label: "Flag",
        required: true
      },
      {
        type: "string",
        name: "organizations",
        label: "Organizations",
        list: true
      }
    ]
  },
  {
    name: "outcome",
    label: "Outcome",
    ui: {
      itemProps: (item) => ({
        label: item.title ? String(item.title) : item.number ? `#${item.number}` : "Outcome"
      })
    },
    fields: [
      {
        type: "string",
        name: "number",
        label: "Number",
        required: true
      },
      {
        type: "string",
        name: "title",
        label: "Title",
        required: true,
        isTitle: true
      },
      {
        type: "string",
        name: "description",
        label: "Description",
        ui: { component: "textarea" },
        required: true
      }
    ]
  },
  {
    name: "spacer",
    label: "Spacer",
    ui: {
      itemProps: (item) => ({
        label: `Spacer (${item.size ?? "md"})`
      })
    },
    fields: [
      {
        type: "string",
        name: "size",
        label: "Size",
        options: [
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" }
        ]
      }
    ]
  }
];
var sectionBaseFields = [
  {
    type: "string",
    name: "background",
    label: "Background",
    options: [
      { value: "white", label: "White" },
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" },
      { value: "brand", label: "Brand" }
    ]
  },
  {
    type: "string",
    name: "paddingY",
    label: "Padding Y",
    options: [
      { value: "none", label: "None" },
      { value: "sm", label: "Small" },
      { value: "md", label: "Medium" },
      { value: "lg", label: "Large" }
    ]
  },
  {
    type: "string",
    name: "maxWidth",
    label: "Max Width",
    options: [
      { value: "sm", label: "Small" },
      { value: "md", label: "Medium" },
      { value: "lg", label: "Large" },
      { value: "xl", label: "X-Large" },
      { value: "full", label: "Full" }
    ]
  },
  {
    type: "string",
    name: "id",
    label: "Anchor ID"
  }
];
var sectionTemplates = [
  {
    name: "single",
    label: "Single Column",
    ui: {
      itemProps: (item) => ({
        label: `Single \u2014 ${Array.isArray(item.blocks) ? item.blocks.length : 0} block(s)`
      })
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "object",
        name: "blocks",
        label: "Blocks",
        list: true,
        templates: blockTemplates
      }
    ]
  },
  {
    name: "columns",
    label: "Two Columns",
    ui: {
      itemProps: (item) => ({
        label: `Columns \u2014 ${item.distribution ?? "50/50"}`
      })
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "string",
        name: "distribution",
        label: "Distribution",
        options: [
          { value: "50/50", label: "50/50" },
          { value: "60/40", label: "60/40" },
          { value: "70/30", label: "70/30" },
          { value: "40/60", label: "40/60" },
          { value: "30/70", label: "30/70" }
        ]
      },
      {
        type: "string",
        name: "verticalAlign",
        label: "Vertical Align",
        options: [
          { value: "top", label: "Top" },
          { value: "center", label: "Center" },
          { value: "bottom", label: "Bottom" }
        ]
      },
      {
        type: "string",
        name: "gap",
        label: "Gap",
        options: [
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" }
        ]
      },
      {
        type: "object",
        name: "left",
        label: "Left Column",
        list: true,
        templates: blockTemplates
      },
      {
        type: "object",
        name: "right",
        label: "Right Column",
        list: true,
        templates: blockTemplates
      }
    ]
  },
  {
    name: "grid",
    label: "Multi-Column Grid",
    ui: {
      itemProps: (item) => ({
        label: `Grid \u2014 ${item.count ?? "?"} columns`
      })
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "string",
        name: "count",
        label: "Column Count",
        options: [
          { value: "3", label: "3" },
          { value: "4", label: "4" }
        ]
      },
      {
        type: "string",
        name: "gap",
        label: "Gap",
        options: [
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" }
        ]
      },
      {
        type: "object",
        name: "gridColumns",
        label: "Columns",
        list: true,
        fields: [
          {
            type: "object",
            name: "blocks",
            label: "Blocks",
            list: true,
            templates: blockTemplates
          }
        ]
      }
    ]
  },
  {
    name: "testimonials",
    label: "Testimonials Section",
    ui: {
      itemProps: (item) => ({
        label: item.title ? String(item.title) : "Testimonials"
      })
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "string",
        name: "title",
        label: "Title"
      },
      {
        type: "object",
        name: "testimonials",
        label: "Testimonials",
        list: true,
        templates: [blockTemplates.find((t) => t.name === "testimonial")]
      }
    ]
  },
  {
    name: "gallery",
    label: "Gallery Section",
    ui: {
      itemProps: (item) => ({
        label: item.title ? String(item.title) : `Gallery (${Array.isArray(item.images) ? item.images.length : 0} photos)`
      })
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "string",
        name: "title",
        label: "Title"
      },
      {
        type: "string",
        name: "subtitle",
        label: "Subtitle"
      },
      {
        type: "object",
        name: "images",
        label: "Images",
        list: true,
        fields: [
          { type: "image", name: "src", label: "Source" },
          { type: "string", name: "alt", label: "Alt text" }
        ]
      },
      {
        type: "string",
        name: "columns",
        label: "Columns",
        options: [
          { value: "2", label: "2" },
          { value: "3", label: "3" },
          { value: "4", label: "4" },
          { value: "5", label: "5" }
        ]
      }
    ]
  },
  {
    name: "repeater",
    label: "Repeater Section",
    ui: {
      itemProps: (item) => ({
        label: item.title ? String(item.title) : "Repeater"
      })
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "string",
        name: "title",
        label: "Title"
      },
      {
        type: "object",
        name: "items",
        label: "Items",
        list: true,
        templates: [
          blockTemplates.find((t) => t.name === "dayReport"),
          blockTemplates.find((t) => t.name === "outcome")
        ]
      }
    ]
  },
  {
    name: "autoGrid",
    label: "Auto Grid",
    ui: {
      itemProps: (item) => ({
        label: item.title ? String(item.title) : `Auto Grid (${item.count ?? "?"} cols)`
      })
    },
    fields: [
      ...sectionBaseFields,
      {
        type: "string",
        name: "count",
        label: "Column Count",
        options: [
          { value: "2", label: "2" },
          { value: "3", label: "3" },
          { value: "4", label: "4" },
          { value: "5", label: "5" },
          { value: "6", label: "6" }
        ]
      },
      {
        type: "string",
        name: "title",
        label: "Title"
      },
      {
        type: "string",
        name: "subtitle",
        label: "Subtitle"
      },
      {
        type: "string",
        name: "titleColor",
        label: "Title Color",
        options: [
          { value: "default", label: "Default" },
          { value: "brand", label: "Brand" }
        ]
      },
      {
        type: "object",
        name: "items",
        label: "Items",
        list: true,
        templates: blockTemplates
      }
    ]
  }
];
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: "c8fa186c-7308-4b5d-a717-0557aa09399d",
  token: null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
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
            readonly: false
          },
          router: ({ document }) => {
            const relativePath = document._sys.relativePath.replace(/\.json$/, "");
            return `/projects/${relativePath}`;
          }
        },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero image",
            description: "Large image shown at the top of the project detail page"
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            description: "Short tagline shown below the title on the detail page"
          },
          {
            type: "object",
            name: "sections",
            label: "Page content",
            list: true,
            templates: sectionTemplates
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
