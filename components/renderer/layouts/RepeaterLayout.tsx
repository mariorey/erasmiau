import type { RepeaterSection } from "@/types/content"
import { DayReportBlock } from "../blocks/DayReportBlock"
import { OutcomeBlock } from "../blocks/OutcomeBlock"

export function RepeaterLayout({ title, items }: RepeaterSection) {
  return (
    <div className="flex flex-col gap-8">
      {title && (
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      )}
      <div className="flex flex-col divide-y divide-gray-100">
        {items.map((item, i) => (
          <div key={i} className={i > 0 ? "pt-8 mt-0" : ""}>
            {item.type === "dayReport" ? (
              <DayReportBlock {...item} />
            ) : (
              <OutcomeBlock {...item} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
