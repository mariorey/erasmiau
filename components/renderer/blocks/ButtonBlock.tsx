import Link from "next/link"
import type { ButtonBlock as T } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

export function ButtonBlock({ text, href, variant = "primary", align = "left", tf }: T & { tf?: TinaFieldFor }) {
  const alignCls = align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"
  const variantCls =
    variant === "secondary"
      ? "bg-gray-800 hover:bg-gray-700 text-white"
      : variant === "outline"
      ? "border-2 border-[#E8003A] text-[#E8003A] hover:bg-[#E8003A] hover:text-white"
      : "bg-[#E8003A] hover:bg-[#c40031] text-white"

  const cls = `inline-block px-6 py-2.5 rounded-md text-sm font-semibold transition-colors duration-200 ${variantCls}`
  const isExternal = href.startsWith("http")

  return (
    <div className={`flex ${alignCls}`} data-tina-field={tf?.("text")}>
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{text}</a>
      ) : (
        <Link href={href} className={cls}>{text}</Link>
      )}
    </div>
  )
}
