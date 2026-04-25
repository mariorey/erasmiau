import Image from "next/image"
import Link from "next/link"
import type { LinkGridBlock as T } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

const colCls: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
}

export function LinkGridBlock({ links, columns = 3, tf }: T & { tf?: TinaFieldFor }) {
  return (
    <div className={`grid ${colCls[columns] ?? "grid-cols-3"} gap-3`} data-tina-field={tf?.("links")}>
      {links.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square overflow-hidden rounded-xl group block"
        >
          <Image
            src={item.src}
            alt={item.alt ?? ""}
            fill
            sizes="(max-width: 768px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      ))}
    </div>
  )
}
