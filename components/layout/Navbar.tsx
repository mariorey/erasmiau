"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { label: "Projects",      href: "/projects" },
  { label: "Questions",     href: "/questions" },
  { label: "Erasmiau Team", href: "/team" },
  { label: "Contact",       href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      {/* ── Desktop / base bar ── */}
      <nav
        className={`fixed top-0 z-50 w-full h-16 transition-all duration-300 ${
          scrolled
            ? "bg-[#E8003A] shadow-[0_4px_24px_rgba(232,0,58,0.35)]"
            : "bg-[#E8003A]"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            onClick={() => setOpen(false)}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/25 group-hover:ring-white/60 transition-all duration-200">
              <Image
                src="/images/logo.png"
                alt="Erasmiau"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-white font-extrabold text-sm tracking-[0.2em] uppercase">
              Erasmiau
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href || pathname.startsWith(href + "/")
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-[11px] font-bold tracking-[0.18em] uppercase transition-colors duration-200 group ${
                    active ? "text-white" : "text-white/65 hover:text-white"
                  }`}
                >
                  {label}
                  <span
                    className="absolute bottom-1 left-4 right-4 h-px rounded-full bg-white transition-all duration-200"
                    style={{ opacity: active ? 1 : 0, transform: active ? "scaleX(1)" : "scaleX(0)" }}
                  />
                  {!active && (
                    <span className="absolute bottom-1 left-4 right-4 h-px rounded-full bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Hamburger — animates to × */}
          <button
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-8 h-8"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className="block w-[22px] h-[2px] bg-white rounded-full origin-center transition-all duration-300"
              style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
            />
            <span
              className="block w-[22px] h-[2px] bg-white rounded-full transition-all duration-200"
              style={{ opacity: open ? 0 : 1, transform: open ? "scaleX(0)" : "scaleX(1)" }}
            />
            <span
              className="block w-[22px] h-[2px] bg-white rounded-full origin-center transition-all duration-300"
              style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}
            />
          </button>

        </div>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col"
        style={{
          background: "#E8003A",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
      >
        {/* Mirror the top bar */}
        <div className="h-16 flex items-center px-6 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/25">
              <Image src="/images/logo.png" alt="Erasmiau" width={32} height={32} className="object-cover" />
            </div>
            <span className="text-white font-extrabold text-sm tracking-[0.2em] uppercase">
              Erasmiau
            </span>
          </Link>
        </div>

        {/* Links — stagger in */}
        <div className="flex-1 flex flex-col items-start justify-center gap-1 px-8">
          {NAV_LINKS.map(({ label, href }, i) => {
            const active = pathname === href || pathname.startsWith(href + "/")
            return (
              <Link
                key={href}
                href={href}
                className="py-3 block"
                onClick={() => setOpen(false)}
                style={{
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transition: `transform 0.35s ease ${i * 55}ms, opacity 0.35s ease ${i * 55}ms`,
                }}
              >
                <span
                  className={`text-[2.5rem] font-extrabold tracking-tight leading-none transition-colors duration-150 ${
                    active ? "text-white" : "text-white/40 hover:text-white"
                  }`}
                >
                  {label}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <div
          className="h-16 flex items-center px-8"
          style={{
            opacity: open ? 1 : 0,
            transition: `opacity 0.35s ease ${NAV_LINKS.length * 55 + 80}ms`,
          }}
        >
          <span className="text-white/30 text-xs tracking-[0.25em] uppercase">
            erasmiau.vercel.app
          </span>
        </div>
      </div>
    </>
  )
}
