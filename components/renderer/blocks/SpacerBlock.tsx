import type { SpacerBlock as SpacerBlockType } from "@/types/content"

const sizeMap: Record<string, string> = {
  sm: "h-4",
  md: "h-8",
  lg: "h-16",
}

export function SpacerBlock({ size = "md" }: SpacerBlockType) {
  return <div className={sizeMap[size]} aria-hidden="true" />
}
