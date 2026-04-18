"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
    { label: "Projects", href: "/projects" },
    { label: "Questions", href: "/questions" },
    { label: "Erasmiau Team", href: "/team" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const linkCls = (href: string) =>
        [
            "text-xs font-bold tracking-widest uppercase rounded-full px-5 py-2 transition-all duration-200",
            pathname === href
                ? "bg-white text-[#E8003A]"
                : "text-white hover:bg-white/20",
        ].join(" ");

    return (
        <>
            <nav className="fixed top-0 z-30 w-full h-16 bg-[#e1003a] flex items-center justify-between md:justify-center px-6">
                {/* Logo */}
                <Link href="/" className={linkCls("/")} onClick={() => setOpen(false)}>
                    ERASMIAU.ES
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-3 ml-3">
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link key={href} href={href} className={linkCls(href)}>
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-white p-1 -mr-1"
                    onClick={() => setOpen((o) => !o)}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile dropdown */}
            {open && (
                <div className="fixed top-16 inset-x-0 z-20 bg-[#e1003a] flex flex-col items-center gap-1 py-4 md:hidden border-t border-white/20 shadow-lg">
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className={linkCls(href)}
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
