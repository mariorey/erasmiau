import type { OutcomeBlock as T } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

export function OutcomeBlock({ number, title, description, tf }: T & { tf?: TinaFieldFor }) {
  return (
    <div className="flex gap-4 items-start">
      <div
        className="shrink-0 w-12 h-12 rounded-full bg-[#02426b] text-white flex items-center justify-center font-bold text-lg"
        data-tina-field={tf?.("number")}
      >
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800" data-tina-field={tf?.("title")}>{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mt-1" data-tina-field={tf?.("description")}>{description}</p>
      </div>
    </div>
  )
}
