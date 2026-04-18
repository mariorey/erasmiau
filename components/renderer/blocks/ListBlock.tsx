import type { ListBlock as ListBlockType } from "@/types/content"

export function ListBlock({ style = "bullet", items }: ListBlockType) {
  if (style === "numbered") {
    return (
      <ol className="list-decimal list-outside pl-5 space-y-1.5 text-gray-600">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ol>
    )
  }
  return (
    <ul className="list-disc list-outside pl-5 space-y-1.5 text-gray-600">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}
