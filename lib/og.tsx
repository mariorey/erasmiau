import fs from "fs"
import path from "path"
import { ImageResponse } from "next/og"

export const OG_SIZE = { width: 1200, height: 630 }

function loadLogo() {
  const buf = fs.readFileSync(path.join(process.cwd(), "public/images/logo.png"))
  return `data:image/png;base64,${buf.toString("base64")}`
}

export function buildOgImage(title: string, subtitle?: string): ImageResponse {
  const logo = loadLogo()

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
