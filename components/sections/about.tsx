import Image from "next/image";

export default function About() {
    const thumbnails = [
        { src: "/images/home/about-1.jpg", alt: "Erasmiau projects photo 1" },
        { src: "/images/home/about-2.jpg", alt: "Erasmiau projects photo 2" },
        { src: "/images/home/about-3.jpg", alt: "Erasmiau projects photo 3" },
    ];

    return (
        <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* COLUMNA IZQUIERDA: foto grande + 3 miniaturas */}
                    <div className="flex flex-col gap-4">
                        <Image
                            src="/images/home/about-main.jpg"
                            alt="Erasmiau Youth Association group photo"
                            width={760}
                            height={500}
                            className="w-full h-auto object-cover"
                        />

                        <div className="flex gap-3">
                            {thumbnails.map((thumb) => (
                                <div key={thumb.src} className="flex-1 aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={thumb.src}
                                        alt={thumb.alt}
                                        width={200}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: título + about + párrafos + caption */}
                    <div className="flex flex-col justify-center gap-4">
                        <h2 className="text-[#E8003A] text-3xl md:text-4xl font-bold">
                            Erasmiau Youth Association
                        </h2>

                        <h3 className="text-gray-800 text-lg font-semibold">
                            About us
                        </h3>

                        <p className="text-gray-700 text-base leading-relaxed">
                            Introducing the Erasmiau Youth Association – where European
                            adventures and youth empowerment collide! Founded with the sole
                            mission of driving dynamic European projects for young people,
                            we&apos;re all about transforming ideas into impactful actions
                            under the vibrant Erasmus+ program.
                        </p>

                        <p className="text-gray-700 text-base leading-relaxed mb-20">
                            Calling all dreamers, doers, and change-makers aged 18 to 30! At
                            Erasmiau, we ignite your passion for making a difference, fostering
                            both personal growth and professional prowess through an array of
                            thrilling projects. Dive into diverse fields like education,
                            culture, the environment, entrepreneurship, and social inclusion.
                            Join us and be part of a movement that not only shapes your future
                            but also transforms society. Let&apos;s make Europe our playground!
                        </p>

                        <p className="text-gray-700 text-sm leading-relaxed">
                            Project{" "}
                            <em className="font-semibold">&quot;The Rhythm of the Life&quot;</em>{" "}
                            Youth Exchange located inside the framework of Erasmus+ KA1
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}