import Image from "next/image"
import type { PartnerBlock } from "@/types/content"

export function PartnerCard({ country, flag, organizations }: PartnerBlock) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="w-20 h-20 rounded-full overflow-hidden relative shadow-md ring-2 ring-white">
        <Image src={flag} alt={`${country} flag`} fill sizes="80px" className="object-cover" />
      </div>
      <p className="font-bold text-gray-800 text-sm">{country}</p>
      <div className="flex flex-col gap-0.5">
        {organizations.map((org, i) => (
          <p key={i} className="text-xs text-gray-500 leading-snug">{org}</p>
        ))}
      </div>
    </div>
  )
}
