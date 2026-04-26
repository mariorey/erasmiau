import fs from "fs"
import path from "path"
import { ImageResponse } from "next/og"

export const OG_SIZE = { width: 1200, height: 630 }

function loadLogo() {
  const buf = fs.readFileSync(path.join(process.cwd(), "public/images/logo.png"))
  return `data:image/png;base64,${buf.toString("base64")}`
}

function loadBackgroundImage(imagePath: string): string | null {
  try {
    // imagePath starts with "/" (e.g. "/images/projects/..."), strip leading slash
    const relative = imagePath.replace(/^\//, "")
    const buf = fs.readFileSync(path.join(process.cwd(), "public", relative))
    const ext = path.extname(imagePath).toLowerCase().replace(".", "")
    const mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : `image/${ext}`
    return `data:${mime};base64,${buf.toString("base64")}`
  } catch {
    return null
  }
}

export function buildOgImage(
  title: string,
  subtitle?: string,
  backgroundImagePath?: string,
): ImageResponse {
  const logo = loadLogo()

  // --- Design with background image ---
  if (backgroundImagePath) {
    const bgData = loadBackgroundImage(backgroundImagePath)

    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            display: "flex",
            position: "relative",
            fontFamily: "sans-serif",
            overflow: "hidden",
          }}
        >
          {/* Background image full-bleed */}
          {bgData && (
            <img
              src={bgData}
              width={1200}
              height={630}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "1200px",
                height: "630px",
                objectFit: "cover",
              }}
            />
          )}

          {/* Dark overlay 55% */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "1200px",
              height: "630px",
              backgroundColor: "rgba(0,0,0,0.55)",
            }}
          />

          {/* Content layer */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "1200px",
              height: "630px",
              display: "flex",
              flexDirection: "column",
              padding: "48px 56px",
            }}
          >
            {/* Top-left: logo + site name */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <img
                src={logo}
                width={80}
                height={80}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  color: "#ffffff",
                  textTransform: "uppercase" as const,
                }}
              >
                ERASMIAU
              </div>
            </div>

            {/* Red accent line */}
            <div
              style={{
                width: "64px",
                height: "4px",
                backgroundColor: "#E8003A",
                borderRadius: "2px",
                marginTop: "28px",
              }}
            />

            {/* Title — centred vertically in remaining space */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: title.length > 50 ? "44px" : title.length > 30 ? "54px" : "64px",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.15,
                  textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                }}
              >
                {title}
              </div>

              {subtitle && (
                <div
                  style={{
                    fontSize: "24px",
                    color: "rgba(255,255,255,0.80)",
                    lineHeight: 1.4,
                    marginTop: "12px",
                  }}
                >
                  {subtitle}
                </div>
              )}
            </div>

            {/* Bottom-right: URL */}
            <div
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.65)",
                alignSelf: "flex-end" as const,
              }}
            >
              erasmiau.vercel.app
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 },
    )
  }

  // --- Default design: red panel left + white panel right ---
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          fontFamily: "sans-serif",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Left red panel with logo */}
        <div
          style={{
            width: "380px",
            height: "630px",
            backgroundColor: "#E8003A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              width={200}
              height={200}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right content panel */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "56px 64px",
          }}
        >
          {/* Top: site name */}
          <div
            style={{
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              color: "#E8003A",
              textTransform: "uppercase" as const,
            }}
          >
            ERASMIAU
          </div>

          {/* Red divider */}
          <div
            style={{
              width: "56px",
              height: "4px",
              backgroundColor: "#E8003A",
              borderRadius: "2px",
              marginTop: "16px",
            }}
          />

          {/* Main title — grows to fill space */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: title.length > 50 ? "38px" : title.length > 30 ? "46px" : "56px",
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.15,
              }}
            >
              {title}
            </div>

            {subtitle && (
              <div
                style={{
                  fontSize: "22px",
                  color: "#6b7280",
                  lineHeight: 1.4,
                }}
              >
                {subtitle}
              </div>
            )}
          </div>

          {/* Bottom: URL */}
          <div
            style={{
              fontSize: "19px",
              color: "#9ca3af",
              alignSelf: "flex-end" as const,
            }}
          >
            erasmiau.vercel.app
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
