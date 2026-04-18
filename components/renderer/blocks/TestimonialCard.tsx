import Image from "next/image"
import type { TestimonialBlock } from "@/types/content"

export function TestimonialCard({ name, role, country, text, avatar }: TestimonialBlock) {
  const meta = [role, country].filter(Boolean).join(" · ")

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <p className="text-gray-600 italic leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-3">
        {avatar ? (
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 relative">
            <Image src={avatar} alt={name} fill sizes="48px" className="object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-[#E8003A] shrink-0 flex items-center justify-center text-white font-bold text-lg">
            {name[0]}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          {meta && <p className="text-sm text-gray-500">{meta}</p>}
        </div>
      </div>
    </div>
  )
}
