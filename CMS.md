# Erasmiau CMS — Editor's Guide

This guide is for the person who manages project content on the website. No coding required.


---

## How to open the editor

1. Go to **`https://erasmiau.com/admin`** (replace with the actual domain when deployed).
2. Enter the admin password when prompted.
3. You are now in the TinaCMS editor. The left panel shows available content; the right panel is a preview.

---

## Editing an existing project

1. In the left panel, click **Projects**.
2. Find the project you want to edit and click it.
3. Edit any field: title, dates, location, description, cover image, sections, etc.
4. When done, click **Save** (top right).
5. The change is committed to GitHub automatically. The website rebuilds in about 2 minutes.

---

## Adding a new project

1. In the left panel, click **Projects**, then click **+ Add new**.
2. Fill in the required fields:
   - **Title** — project name
   - **Category** — one of: `sending`, `hosting`, `interrail`, `solidarity-projects`
   - **Slug** — URL-friendly name, e.g. `my-new-project` (no spaces, lowercase, hyphens only)
   - **Start date / End date**
   - **Location**
   - **Description** — short summary shown on the project list
   - **Cover image** — shown on the project card
3. Optionally add **Sections** (rich content blocks) using the **+ Add section** button.
4. Click **Save**.

> The new project will appear on the website within ~2 minutes.

---

## Deleting a project

1. Open the project in the editor.
2. Click the **⋮ menu** (three dots, top right) → **Delete**.
3. Confirm. The project is removed from the website after the next deploy (~2 minutes).

---

## Understanding sections and blocks

Each project page is built from **sections**, and each section contains **blocks**.

**Section types:**
| Type | What it looks like |
|---|---|
| Single | One column of blocks |
| Two columns | Two side-by-side columns |
| Grid | Blocks arranged in a grid |
| Testimonials | Quotes from participants |
| Gallery | Photo gallery |
| Repeater | Repeated pattern of blocks |
| Auto grid | Auto-flowing grid |

**Block types:**
| Type | What it looks like |
|---|---|
| Heading | A title or subtitle |
| Paragraph | Text body |
| Image | A single photo |
| Image group | Multiple photos in a row |
| Video | Embedded video |
| List | Bullet list |
| Testimonial | A single quote |
| Gallery | Photo gallery |
| Day report | Day-by-day activity log |
| Partner | Partner organization card |
| Outcome | Project outcome highlight |
| Spacer | Empty space between blocks |

---

## Local development (for developers)

To run the CMS locally:

```bash
cd erasmiau
npx tinacms dev -c "next dev"
```

- Next.js runs at `http://localhost:3000`
- TinaCMS admin runs at `http://localhost:3000/admin`
- No password is required in local mode
- Changes are written directly to `data/content/projects/**/*.json`

---

## Production deployment checklist

Before going live, set these environment variables in Vercel:

| Variable | Description |
|---|---|
| `NEXTAUTH_SECRET` | Random 32-character string (generate with `openssl rand -hex 16`) |
| `ADMIN_PASSWORD` | Password for the `/login` page |
| `GITHUB_PERSONAL_ACCESS_TOKEN` | GitHub PAT with `repo` read/write scope |
| `GITHUB_OWNER` | GitHub username or org (e.g. `marioreycarmona`) |
| `GITHUB_REPO` | Repository name (e.g. `Proyecto-Erasmiau`) |
| `GITHUB_BRANCH` | Branch to commit edits to (e.g. `main`) |
| `MONGODB_URI` | MongoDB Atlas connection string |

Then uncomment the production database setup in `tina/database.ts` and deploy.
