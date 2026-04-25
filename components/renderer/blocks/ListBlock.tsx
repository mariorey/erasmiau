import type { ListBlock as T } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

export function ListBlock({ style = "bullet", items, tf }: T & { tf?: TinaFieldFor }) {
  const attr = tf?.("items")
  if (style === "numbered") {
    return (
      <ol className="list-decimal list-outside pl-5 space-y-1.5 text-gray-600" data-tina-field={attr}>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ol>
    )
  }
  return (
    <ul className="list-disc list-outside pl-5 space-y-1.5 text-gray-600" data-tina-field={attr}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}
