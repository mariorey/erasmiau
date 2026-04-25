import Image from "next/image"
import type { TestimonialBlock } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

export function TestimonialCard({ name, role, country, text, avatar, tf }: TestimonialBlock & { tf?: TinaFieldFor }) {
  const meta = [role, country].filter(Boolean).join(" · ")
  const paragraphs = text ? text.split("\n\n").filter(Boolean) : []

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100" data-tina-field={tf?.("name")}>
      <div className="flex items-center gap-3">
        {avatar ? (
          <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 relative" data-tina-field={tf?.("avatar")}>
            <Image src={avatar} alt={name} fill sizes="56px" className="object-cover" />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-full bg-[#E8003A] shrink-0 flex items-center justify-center text-white font-bold text-xl">
            {name[0]}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-800" data-tina-field={tf?.("name")}>{name}</p>
          {meta && <p className="text-sm text-gray-500" data-tina-field={tf?.("country")}>{meta}</p>}
        </div>
      </div>
      {paragraphs.length > 0 && (
        <div className="flex flex-col gap-2" data-tina-field={tf?.("text")}>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 italic text-sm leading-relaxed">
              {i === 0 ? `"${p}` : p}{i === paragraphs.length - 1 ? '"' : ""}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
