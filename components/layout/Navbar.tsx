"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { label: "Projects", href: "/projects" },
    { label: "Questions", href: "/questions" },
    { label: "Erasmiau Team", href: "/team" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 z-30 w-full h-16 bg-[#e1003a] flex items-center justify-center px-6">
            <div className="flex items-center gap-3">
                <Link
                    href="/"
                    className={`
            text-xs font-bold tracking-widest uppercase rounded-full
            px-5 py-2 transition-all duration-200
            ${
                        pathname === "/"
                            ? "bg-white text-[#E8003A]"
                            : "text-white hover:bg-white/20 hover:text-white"
                    }
          `}
                >
                    ERASMIAU.ES
                </Link>

                <div className="flex items-center gap-3">
                    {NAV_LINKS.map(({ label, href }) => {
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`
                  text-xs font-bold tracking-widest uppercase rounded-full
                  px-5 py-2 transition-all duration-200
                  ${
                                    isActive
                                        ? "bg-white text-[#E8003A]"
                                        : "text-white hover:bg-white/20 hover:text-white"
                                }
                `}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}