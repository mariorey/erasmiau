import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export default function About({ data }: { data: any }) {
    // Valores por defecto para evitar que se vea vacío
    const title = data?.title || "Erasmiau Youth Association";
    const subtitle = data?.subtitle || "About us";
    const mainImage = data?.mainImage || "/images/home/about-main.jpg";

    // Si no hay thumbnails en el CMS, usamos los fijos
    const thumbnails = data?.thumbnails || [
        { src: "/images/home/about-1.jpg", alt: "Erasmiau projects photo 1" },
        { src: "/images/home/about-2.jpg", alt: "Erasmiau projects photo 2" },
        { src: "/images/home/about-3.jpg", alt: "Erasmiau projects photo 3" },
    ];

    return (
        <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* COLUMNA IZQUIERDA: Fotos */}
                    {/* COLUMNA IZQUIERDA: Fotos */}
                    <div className="flex flex-col gap-4">
                        <div data-tina-field={tinaField(data, "mainImage")}>
                            <Image
                                src={mainImage}
                                alt="About main photo"
                                width={760}
                                height={500}
                                className="w-full h-auto object-cover rounded-sm"
                            />
                        </div>

                        {/* Quitamos el tinaField del div de abajo y lo movemos a cada imagen individual */}
                        <div className="flex gap-3">
                            {thumbnails.map((thumb: any, i: number) => (
                                <div
                                    key={i}
                                    className="flex-1 aspect-4/3 overflow-hidden"
                                    // AQUÍ ESTÁ EL TRUCO: apuntamos a la posición 'i' de la lista
                                    data-tina-field={tinaField(data.thumbnails?.[i])}
                                >
                                    <Image
                                        src={thumb.src || "/images/placeholder.jpg"}
                                        alt={thumb.alt || "Thumbnail"}
                                        width={200}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* COLUMNA DERECHA: Textos */}
                    <div className="flex flex-col justify-center gap-4">
                        <h2
                            className="text-[#E8003A] text-3xl md:text-4xl font-bold"
                            data-tina-field={tinaField(data, "title")}
                        >
                            {title}
                        </h2>

                        <h3
                            className="text-gray-800 text-lg font-semibold"
                            data-tina-field={tinaField(data, "subtitle")}
                        >
                            {subtitle}
                        </h3>

                        <p
                            className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap"
                            data-tina-field={tinaField(data, "text1")}
                        >
                            {data?.text1 || "Introducing the Erasmiau Youth Association – where European adventures..."}
                        </p>

                        <p
                            className="text-gray-700 text-base leading-relaxed mb-20 whitespace-pre-wrap"
                            data-tina-field={tinaField(data, "text2")}
                        >
                            {data?.text2 || "Calling all dreamers, doers, and change-makers aged 18 to 30!..."}
                        </p>

                        <p
                            className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap"
                            data-tina-field={tinaField(data, "caption")}
                        >
                            {data?.caption || 'Project "The Rhythm of the Life" Youth Exchange...'}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}