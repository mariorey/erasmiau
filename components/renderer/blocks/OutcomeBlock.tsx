import type { OutcomeBlock as OutcomeBlockType } from "@/types/content"

export function OutcomeBlock({ number, title, description }: OutcomeBlockType) {
  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0 w-12 h-12 rounded-full bg-[#02426b] text-white flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mt-1">{description}</p>
      </div>
    </div>
  )
}
