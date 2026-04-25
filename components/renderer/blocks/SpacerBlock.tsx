import type { SpacerBlock as T } from "@/types/content"
import type { TinaFieldFor } from "../BlockRenderer"

const sizeMap: Record<string, string> = {
  sm: "h-4",
  md: "h-8",
  lg: "h-16",
}

export function SpacerBlock({ size = "md", tf }: T & { tf?: TinaFieldFor }) {
  return <div className={sizeMap[size]} aria-hidden="true" data-tina-field={tf?.("size")} />
}
