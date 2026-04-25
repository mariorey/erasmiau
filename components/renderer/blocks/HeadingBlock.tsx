import type { HeadingBlock as T } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

const sizeMap: Record<number, string> = {
  1: "text-4xl font-bold text-gray-800",
  2: "text-3xl font-bold text-gray-800",
  3: "text-2xl font-semibold text-gray-700",
  4: "text-xl font-semibold text-gray-700",
}

export function HeadingBlock({ level = 2, text, tf }: T & { tf?: TinaFieldFor }) {
  const cls = sizeMap[level]
  const attr = tf?.("text")
  if (level === 1) return <h1 className={cls} data-tina-field={attr}>{text}</h1>
  if (level === 3) return <h3 className={cls} data-tina-field={attr}>{text}</h3>
  if (level === 4) return <h4 className={cls} data-tina-field={attr}>{text}</h4>
  return <h2 className={cls} data-tina-field={attr}>{text}</h2>
}
