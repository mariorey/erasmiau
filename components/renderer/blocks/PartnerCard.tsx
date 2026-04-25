import Image from "next/image"
import type { PartnerBlock } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

export function PartnerCard({ country, flag, organizations, tf }: PartnerBlock & { tf?: TinaFieldFor }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center" data-tina-field={tf?.("country")}>
      <div className="w-20 h-20 rounded-full overflow-hidden relative shadow-md ring-2 ring-white" data-tina-field={tf?.("flag")}>
        <Image src={flag} alt={`${country} flag`} fill sizes="80px" className="object-cover" />
      </div>
      <p className="font-bold text-gray-800 text-sm" data-tina-field={tf?.("country")}>{country}</p>
      <div className="flex flex-col gap-0.5" data-tina-field={tf?.("organizations")}>
        {organizations.map((org, i) => (
          <p key={i} className="text-xs text-gray-500 leading-snug">{org}</p>
        ))}
      </div>
    </div>
  )
}
