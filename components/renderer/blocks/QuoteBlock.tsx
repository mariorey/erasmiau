import type { TinaFieldFor } from "../BlockRenderer"

export interface QuoteBlockProps {
    quote: string
    author?: string
    tf?: TinaFieldFor
}

export function QuoteBlock({ quote, author, tf }: QuoteBlockProps) {
    return (
        <div className="flex flex-col gap-2">
            <div
                className="text-[#E8003A] text-lg leading-relaxed italic"
                data-tina-field={tf?.("quote")}
            >
                “{quote}”
            </div>

            {author && (
                <div
                    className="text-right text-sm text-gray-800"
                    data-tina-field={tf?.("author")}
                >
                    — {author}
                </div>
            )}
        </div>
    )
}