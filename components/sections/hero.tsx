import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";

export default function Hero({ data }: { data: any }) {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Imagen de fondo fija (parallax effect al scroll) */}
            <div
                className="absolute inset-0 bg-cover bg-center md:bg-fixed"
                style={{ backgroundImage: `url('${data?.backgroundImage || "/images/hero-bg.jpg"}')` }}
                data-tina-field={tinaField(data, "backgroundImage")}
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Contenido centrado */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                {/* Logo gato */}
                <div className="mb-6">
                    <Image
                        src="/images/logo.png"
                        alt="Erasmiau logo"
                        width={100}
                        height={100}
                        priority
                    />
                </div>

                {/* Título */}
                <h1
                    className="text-white text-5xl md:text-6xl font-bold tracking-widest uppercase mb-6 whitespace-pre-wrap"
                    data-tina-field={tinaField(data, "headline")}
                >
                    {data?.headline || "Erasmiau Youth\nAssociation"}
                </h1>

                {/* Subtítulo */}
                <p
                    className="text-white/90 text-xl md:text-2xl italic font-light mb-10"
                    data-tina-field={tinaField(data, "subheading")}
                >
                    {data?.subheading || "Are you ready for the adventure?"}
                </p>

                {/* CTA Button */}
                <Link
                    href={data?.buttonLink || "https://www.instagram.com/erasmiau"}
                    className="bg-[#E8003A] hover:bg-[#c40031] text-white text-sm font-bold tracking-widest uppercase px-8 py-3 rounded-full transition-colors duration-200"
                    data-tina-field={tinaField(data, "buttonText")}
                >
                    {data?.buttonText || "Hola Caracola :)"}
                </Link>
            </div>
        </section>
    );
}