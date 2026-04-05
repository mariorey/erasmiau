import TeamCard from "@/components/sections/TeamCard";

const TEAM = [
    {
        image: "/images/team/Betina.jpg",
        name: "Betina Santos",
        role: "President",
        bio: "Meet Betina, the fearless adventurer who's diving deep into her PhD studies in Heritage and Archaeology. History is her passion, but her heart also beats for travel. Her adventurous spirit has taken her across much of Europe, connecting with people and cultures that have opened her mind and unveiled hidden talents. Betina's first Erasmus experience in Italy was a game-changer. That university year abroad transformed her life, sparking a mission to inspire local youth to step out of their comfort zones. She now dedicates her time to instilling in them the excitement and courage to explore new cultures and live life-changing adventures. Join Betina and discover the world in a whole new way!",
    },
    {
        image: "/images/team/Irene.jpg",
        name: "Irene Montero",
        role: "Creative Director",
        bio: "Meet Irene, the powerhouse behind the scenes at Erasmiau! With her versatile skills and multifaceted talents, she's a vital member of our team. As our logistics whiz, Irene blends creativity with responsibility, ensuring our youth-focused projects and Erasmus+ programs run like clockwork. But that's not all—her knack for photography and graphic design brings a unique flair to our visual presentations. Irene's creative mind is legendary, making her indispensable in bringing initiatives to life that inspire young people to dive into international educational experiences. Irene is the heart and soul of our mission to engage and empower the next generation.",
    },
    {
        image: "/images/team/Juanje.jpg",
        name: "Juanje Rey",
        role: "Project Manager",
        bio: "\n" +
            "Meet Juanje, the dreamer and official clown of the Erasmiau squad! He’s a project-writing wizard and a master of make-believe. Armed with his ukulele (even though he can't really play it), he'll serenade the moon and leave you enchanted.\n" +
            "\n" +
            "As a European project facilitator and non-formal education trainer, Juanje has found his calling through the Erasmus+ program, sharing the hidden gems of Andalusia with people from all over Europe.\n" +
            "\n" +
            "With a deep love for music, he spices up every situation with the perfect tune, creating magical atmospheres wherever he goes.\n" +
            "\n" +
            "A real-life troubleshooter and fire extinguisher, there's no problem Juanje can't solve with a dash of imagination.\n" +
            "\n" +
            "He’s not just a local troubadour; he’s an international sensation, spreading joy and laughter wherever he roams.",
    },
    {
        image: "/images/team/Alberto.png",
        name: "Alberto Trijueque",
        role: "Artistic Team",
        bio: "\n" +
            "Meet Alberto, the young and vibrant worker with a knack for stirring up excitement! With a background in development studies, art, theater, and social entrepreneurship, Alberto brings a spicy mix of skills to the table.\n" +
            "\n" +
            "Specializing in citizen initiatives, culture, identity, integration, and international cooperation, he’s no stranger to making waves on the global stage. In 2019, he rocked the Indonesian Youth Program alongside representatives from 77 countries, proudly flying the flag for Spain and his hometown, Madrid.\n" +
            "\n" +
            "When he's not jet-setting around the world, Alberto is a master of non-formal education, using playful theater methods to engage and inspire young minds. Since 2021, he's been on fire, managing and coordinating Erasmus+ projects with finesse. Whether he's leading the charge or lending his creative flair as a participant, Alberto is always ready to turn up the heat and make magic happen.",
    },
];

export default function TeamPage() {
    return (
        <main className="w-full min-h-screen bg-[#dce5e5] py-20 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">

                {/* Cabecera */}
                <h1 className="text-[#E8003A] text-4xl font-bold mb-6">
                    Erasmiau Team
                </h1>
                <p className="text-gray-600 text-base leading-relaxed mb-16 max-w-4xl">
                    One of the aspects to highlight is that all members of the staff have
                    been participants before taking the step to organize. This has allowed
                    us to fully understand the needs of young people who attend a European
                    project and have the resources and skills to achieve a pleasant experience.
                </p>

                {/* Grid de miembros */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
                    {TEAM.map((member) => (
                        <TeamCard key={member.name} {...member} />
                    ))}
                </div>

            </div>
        </main>
    );
}