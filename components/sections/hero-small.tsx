import Image from "next/image";
import Link from "next/link";

export default function HeroSmall() {
    return (
        <section className="relative h-80 w-full overflow-hidden">
            {/* Imagen de fondo fija (parallax effect al scroll) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/home/hero-small-bg.jpg')" }}
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
                        width={140}
                        height={140}
                        priority
                    />
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-5">
                    <Link
                        href="https://instagram.com/erasmiau"
                        target="_blank"
                        aria-label="Instagram"
                        className="text-white hover:text-[#E8003A] transition-colors duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-12 h-12"
                        >
                            <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5Zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4Zm8.75 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                        </svg>
                    </Link>

                    <Link
                        href="mailto:erasmiauplus@gmail.com"
                        aria-label="Email"
                        className="text-white hover:text-[#E8003A] transition-colors duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-12 h-12"
                        >
                            <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm2.47-.75 6.53 5.23 6.53-5.23H5.47Zm13.03 2.04-5.88 4.71a1 1 0 0 1-1.24 0L5.5 6.54v12.21c0 .14.11.25.25.25h12.5c.14 0 .25-.11.25-.25V6.54Z" />
                        </svg>
                    </Link>

                    <Link
                        href="tel:+34123456789"
                        aria-label="Phone"
                        className="text-white hover:text-[#E8003A] transition-colors duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-12 h-12"
                        >
                            <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.33.57 3.59.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.2 2.47.57 3.59a1 1 0 0 1-.25 1l-2.2 2.2Z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}