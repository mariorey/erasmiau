interface FaqItem {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    title: string;
    items: FaqItem[];
}

export default function FaqSection({ title, items }: FaqSectionProps) {
    return (
        <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-gray-600 text-4xl font-light mb-16">
                    {title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {items.map((item) => (
                        <div key={item.question}>
                            <h3 className="text-gray-500 text-2xl font-light mb-4">
                                {item.question}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed text-justify">
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}