import Image from "next/image";

interface TeamCardProps {
    image: string;
    name: string;
    role: string;
    bio: string;
}

export default function TeamCard({ image, name, role, bio }: TeamCardProps) {
    return (
        <div className="flex flex-row gap-6 items-start">
            {/* Imagen circular */}
            <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Texto */}
            <div className="flex flex-col gap-2">
                <h3 className="text-[#E8003A] text-2xl font-bold">{name}</h3>
                <p className="text-gray-700 text-sm font-semibold">{role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
            </div>
        </div>
    );
}