import Image from "next/image"
import type { ParticipantBlock as T } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

export function ParticipantBlock({ experienceTitle, name, image, text, tf }: T & { tf?: TinaFieldFor }) {
  const paragraphs = text ? text.split("\n\n").filter(Boolean) : []

  return (
    <div className="flex flex-col gap-4 py-8 border-b border-gray-100 last:border-0 last:pb-0 first:pt-0" data-tina-field={tf?.("name")}>
      {experienceTitle && (
        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium" data-tina-field={tf?.("experienceTitle")}>
          {experienceTitle}
        </p>
      )}
      <div className="flex items-center gap-4">
        {image ? (
          <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 relative" data-tina-field={tf?.("image")}>
            <Image src={image} alt={name} fill sizes="128px" className="object-cover" />
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full bg-[#E8003A] shrink-0 flex items-center justify-center text-white font-bold text-2xl">
            {name[0]}
          </div>
        )}
        <p className="font-bold text-[#E8003A] text-xl leading-tight" data-tina-field={tf?.("name")}>{name}</p>
      </div>
      {paragraphs.length > 0 && (
        <div className="flex flex-col gap-3" data-tina-field={tf?.("text")}>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 italic leading-relaxed">{p}</p>
          ))}
        </div>
      )}
    </div>
  )
}
