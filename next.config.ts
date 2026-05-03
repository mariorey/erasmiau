import type { NextConfig } from "next";

type RedirectEntry = {
  source: string;
  destination: string;
  permanent: boolean;
};

// Generates redirects for both /path and /path/ (WordPress used trailing slashes)
function legacy(source: string, destination: string): RedirectEntry[] {
  return [
    { source, destination, permanent: true },
    { source: `${source}/`, destination, permanent: true },
  ];
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Admin redirect (TinaCMS static UI)
      {
        source: "/admin",
        destination: "/admin/index.html",
        permanent: false,
      },

      // ── Main navigation ──────────────────────────────────────────────
      ...legacy("/erasmiau-team", "/team"),

      // ── Category pages ───────────────────────────────────────────────
      ...legacy("/proyectos-de-acogida-1", "/projects/hosting"),
      ...legacy("/proyectos-de-envio", "/projects/sending"),
      ...legacy("/interrail", "/projects/interrail"),
      ...legacy("/solidarity-projects", "/projects/solidarity-projects"),
      ...legacy("/ipp", "/ka2-cooperation-partnerships"),
      ...legacy("/proyectos-locales", "/projects/local-projects"),

      // ── Hosting projects ─────────────────────────────────────────────
      ...legacy("/the-rhythm-of-the-life", "/projects/hosting/rhythm-of-the-life"),
      ...legacy("/dyst", "/projects/hosting/dyst"),

      // ── Sending projects ─────────────────────────────────────────────
      ...legacy("/green-comp-for-youth-workers", "/projects/sending/green-comp"),
      ...legacy("/local-leaders-for-green-change", "/projects/sending/green-change"),
      ...legacy("/apv-cyprus", "/projects/sending/digital-tools-apv"),
      ...legacy("/ye-portugal-funny", "/projects/sending/aint-that-funny"),
      ...legacy("/tc-digital-tools-cyprus", "/projects/sending/digital-tools-tc"),
      ...legacy("/ye-poland-theatre", "/projects/sending/emotions-on-stage"),
      ...legacy("/ye-nature-croatia", "/projects/sending/back-to-the-roots"),
      ...legacy("/crime-prevention", "/projects/sending/crime-prevention"),
      ...legacy("/ye-portugal-break-the-silence", "/projects/sending/break-the-silence"),
      ...legacy("/tot-level-3-cyprus-2024", "/projects/sending/tot-level-3"),
      ...legacy("/we-are-what-we-are", "/projects/sending/we-are-what-we-are"),
      ...legacy("/circlusivo2025", "/projects/sending/circlusivo"),
      ...legacy("/dont-gamble-your-future", "/projects/sending/dont-gamble-your-future"),
      ...legacy("/mind-over-media", "/projects/sending/mind-over-media"),
      ...legacy("/hate-speech-free-bosnia", "/projects/sending/hatespeechfree"),
      ...legacy("/eco-shift-madeira", "/projects/sending/ecoshift"),
      ...legacy("/tot-lvl-1-larnaca", "/projects/sending/tot-lvl-1"),
      ...legacy("/i-want-my-tears-back-romania", "/projects/sending/i-want-my-tears-back"),
      ...legacy("/flow-for-change", "/projects/sending/flow-for-change"),
      ...legacy("/nfl-youth-goals", "/projects/sending/youth-goals"),
      ...legacy("/our-planet-our-home", "/projects/sending/our-planet-our-home"),

      // ── Interrail projects ───────────────────────────────────────────
      ...legacy("/europe4all", "/projects/interrail/europe-4-all"),
      ...legacy("/europa-te-espera", "/projects/interrail/europa-te-espera"),

      // ── Solidarity / ESC projects ────────────────────────────────────
      ...legacy("/eurocraft", "/projects/solidarity-projects/eurocraft"),

      // ── Local projects ───────────────────────────────────────────────
      ...legacy("/escuela-de-verano-jovenes-rurales-erasmiau", "/projects/local-projects/escuela-de-verano"),
      ...legacy("/tu-otro-tu", "/projects/local-projects/tu-otro-tu"),

      // ── KA2 / IPP publications ───────────────────────────────────────
      ...legacy("/starting-project-ipp", "/ka2-cooperation-partnerships/project-ipp-started"),
      ...legacy("/transnational-meeting-cyprus", "/ka2-cooperation-partnerships/tnm-cyprus"),
      ...legacy("/introducing-par", "/ka2-cooperation-partnerships/introducing-par"),
      ...legacy("/par-results", "/ka2-cooperation-partnerships/par-results"),
      ...legacy("/par-final-event", "/ka2-cooperation-partnerships/par-final-event"),
      ...legacy("/brige-of-peace-training-course", "/ka2-cooperation-partnerships/bridge-of-peace"),
      ...legacy("/start-of-escape-rooms", "/ka2-cooperation-partnerships/start-escape-rooms"),
      ...legacy("/the-great-escape-adventure-workshop", "/ka2-cooperation-partnerships/great-escape"),
      ...legacy("/escape-rooms-progress", "/ka2-cooperation-partnerships/escape-rooms-progress"),
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
      },
    ],
  },
};

export default nextConfig;