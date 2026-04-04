import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    linkHref: string;
    linkLabel?: string;
}

export default function ProjectCard({
                                        image,
                                        imageAlt,
                                        title,
                                        description,
                                        linkHref,
                                        linkLabel = "Discover more",
                                    }: ProjectCardProps) {
    return (
        <div className="flex flex-col md:flex-row items-center gap-12 py-16 px-6 md:px-16 lg:px-48">

            {/* Imagen circular */}
            <div className="w-72 h-72 md:w-96 md:h-96 shrink-0 rounded-full overflow-hidden">
                <Image
                    src={image}
                    alt={imageAlt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Texto + botón */}
            <div className="flex flex-col gap-4 max-w-lg">
                <h3 className="text-gray-700 text-2xl font-semibold">
                    {title}
                </h3>

                <p className="text-gray-500 text-base leading-relaxed">
                    {description}
                </p>

                <Link
                    href={linkHref}
                    className="self-start bg-[#E8003A] hover:bg-[#c40031] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
                >
                    {linkLabel}
                </Link>
            </div>
        </div>
    );
}