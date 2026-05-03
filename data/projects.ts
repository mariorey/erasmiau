export interface Project {
    category: string;
    slug: string;
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    gallery?: string[];
}

export interface Category {
    slug: string;
    label: string;
    description: string;
    image: string;
    linkHref: string;
}

export const categories: Category[] = [
    {
        slug: "hosting",
        label: "Hosting Projects",
        description: "",
        image: "/images/projects/image-bg.jpg",
        linkHref: "/projects/hosting",
    },
    {
        slug: "sending",
        label: "PROYECTOS DE ENVIO",
        description: "",
        image: "/images/projects/image-bg.jpg",
        linkHref: "/projects/sending",
    },
    {
        slug: "interrail",
        label: "INTERRAIL",
        description: "",
        image: "/images/projects/image-bg.jpg",
        linkHref: "/projects/interrail",
    },
    {
        slug: "solidarity-projects",
        label: "SOLIDARITY PROJECTS (ESC)",
        description: "",
        image: "/images/projects/image-bg.jpg",
        linkHref: "/projects/solidarity-projects",
    },
    {
        slug: "local-projects",
        label: "Local Projects",
        description: "",
        image: "/images/projects/image-bg.jpg",
        linkHref: "/projects/local-projects",
    }
];

export const projects: Project[] = [
    // --- HOSTING ---
    {
        category: "hosting",
        slug: "rhythm-of-the-life",
        title: "The Rhythm of the Life (YE)",
        dates: "03-12 October 2023",
        location: "Puente Genil, Spain",
        image: "/images/projects/hosting/hosting-1-cover.jpg",
        description: '"The Rhythm of the life" is an European project that seeks to develop environmental awareness in a diverse group of young people of different nationalities through music as the main tool.',
        gallery: [],
    },
    {
        category: "hosting",
        slug: "dyst",
        title: 'DYST "Developing Youth Skills through Theatre" (TC)',
        dates: "07-14 November 2023",
        location: "Puente Genil, Spain",
        image: "/images/projects/hosting/hosting-2-cover.jpg",
        description: "The DYST (Developing Youth Skills Through Theatre) project seeks to address the need to develop skills and social competences in youth workers and technicians. Youth workers are professionals who works with all types of youth and develops programs and services for them. The job of a youth worker is to help young people to develop their skills and competencies so that they can be successful in their personal and professional lives. Through this project it will be intended to provide tools and resources to reach that table through theater.",
        gallery: [],
    },
    // --- SENDING ---
    {
        category: "sending",
        slug: "green-comp",
        title: 'Green Comp for Youth Workers (TC)',
        dates: "14-21 September 2023",
        location: "Kozani, Greece",
        image: "/images/projects/sending/sending-1-cover.jpg",
        description: "Follow the adventure of Leyre, Lourdes and Miriam",
        gallery: [],
    },
    {
        category: "sending",
        slug: "green-change",
        title: 'Local Leaders for Green Change (YE)',
        dates: "07-16 September 2023",
        location: "Varvara, Bulgaria",
        image: "/images/projects/sending/sending-2-cover.jpg",
        description: "Follow the adventure of Ismael, Pili, Sara, Belinda & Fernando",
        gallery: [],
    },
    {
        category: "sending",
        slug: "digital-tools-apv",
        title: 'Digital Tools and Media literacy (APV)',
        dates: "16-19 February 2024",
        location: "Paralimni, Cyprus",
        image: "/images/projects/sending/sending-3-cover.jpg",
        description: "Follow the adventure of Juanje!",
        gallery: [],
    },
    {
        category: "sending",
        slug: "aint-that-funny",
        title: 'Ain´t that funny (YE)',
        dates: "29 February - 8 March 2024",
        location: "Ponte de Lima, Portugal",
        image: "/images/projects/sending/sending-4-cover.jpg",
        description: "Follow the adventure of Marivi, Elena, Nerea, Miguel, Alberto and Juanje!",
        gallery: [],
    },
    {
        category: "sending",
        slug: "digital-tools-tc",
        title: 'Digital Tools and Media literacy (TC)',
        dates: "5-13 April 2024",
        location: "Paralimni, Cyprus",
        image: "/images/projects/sending/sending-6-cover.jpg",
        description: "Follow the adventure of Natalia, Manuel & Juanje!",
        gallery: [],
    },
    {
        category: "sending",
        slug: "emotions-on-stage",
        title: 'EMOTIONS ON STAGE (YE)',
        dates: "9-16 September 2024",
        location: "Warsaw, Poland",
        image: "/images/projects/sending/sending-7-cover.jpg",
        description: "Follow the adventure of Luci, Patri, Paola, Saúl, David & Jose!",
        gallery: [],
    },
    {
        category: "sending",
        slug: "back-to-the-roots",
        title: 'BACK TO THE ROOTS (YE)',
        dates: "6-15 September 2024",
        location: "Dakovo - Croatia",
        image: "/images/projects/sending/sending-8-cover.jpg",
        description: "Follow the adventure of Paula, Sara, Carmen, Luna, Noelia, Belén, Rafa, Diego & Miguel!",
        gallery: [],
    },
    {
        category: "sending",
        slug: "crime-prevention",
        title: 'CRIME PREVENTION (YE)',
        dates: "23-31 October 2024",
        location: "Larnaca - Cyprus",
        image: "/images/projects/sending/sending-9-cover.jpg",
        description: "Follow the adventure of Esperanza, Pili, Juanjo, Mario & Juanje",
        gallery: [],
    },
    {
        category: "sending",
        slug: "break-the-silence",
        title: 'BREAK THE SILENCE (YE)',
        dates: "10-17 November 2024",
        location: "Ponte de Lima - Portugal",
        image: "/images/projects/sending/sending-10-cover.jpg",
        description: "Follow the adventure of María, Emma, Narai, Ángel, Marco & Emilio",
        gallery: [],
    },
    {
        category: "sending",
        slug: "tot-level-3",
        title: "TOT LEVEL 3 (Training of Trainers)",
        dates: "8-16 November 2024",
        location: "Larnaca - Cyprus",
        image: "/images/projects/sending/sending-11-cover.jpg",
        description: "Follow the adventure of Raúl",
        gallery: [],
    },
    {
        category: "sending",
        slug: "we-are-what-we-are",
        title: "WE ARE WHAT WE ARE (TC)",
        dates: "3-12 December 2024",
        location: "Sarata Monteoru - Romania",
        image: "/images/projects/sending/sending-12-cover.jpg",
        description: "Follow the adventure of Raúl",
        gallery: [],
    },
    {
        category: "sending",
        slug: "circlusivo",
        title: "Circlusivo (Seminar)",
        dates: "11-18 February 2025",
        location: "Llinars del Vallès - Spain",
        image: "/images/projects/sending/sending-13-cover.jpg",
        description: "Follow the adventure of Yolanda, Nerea & Carjul",
        gallery: [],
    },
    {
        category: "sending",
        slug: "dont-gamble-your-future",
        title: "Don´t Gamble your Future (YE)",
        dates: "20-30 March 2025",
        location: "Sarata Monteoru - Romania",
        image: "/images/projects/sending/sending-14-cover.jpg",
        description: "Follow the adventure of Antonio, Fran, José, Álvaro & Sofía!",
        gallery: [],
    },
    {
        category: "sending",
        slug: "mind-over-media",
        title: "Mind over Media (TC)",
        dates: "6-14 September 2025",
        location: "Nova Gradiska - Croatia",
        image: "/images/projects/sending/sending-15-cover.jpg",
        description: "Follow the adventure of Antonio, Damián & Emilio!",
        gallery: [],
    },
    {
        category: "sending",
        slug: "hatespeechfree",
        title: "HateSpeechFree (YE)",
        dates: "15-23 October 2025",
        location: "Jajce & Sarajevo - Bosnia",
        image: "/images/projects/sending/sending-16-cover.jpg",
        description: "Follow the adventure of Saúl, Antonio, Silvia, Fran, Chechu & Silvia",
        gallery: [],
    },
    {
        category: "sending",
        slug: "ecoshift",
        title: "EcoShift (TC)",
        dates: "6-13 October 2025",
        location: "Madeira - Portugal",
        image: "/images/projects/sending/sending-17-cover.jpg",
        description: "Follow the adventure of Maja, Susana & Juanje",
        gallery: [],
    },
    {
        category: "sending",
        slug: "tot-lvl-1",
        title: "TOT lvl 1 (TC)",
        dates: "7-13 November 2025",
        location: "Paralimni - Cyprus",
        image: "/images/projects/sending/sending-18-cover.jpg",
        description: "Follow the adventure of Mario & Ana",
        gallery: [],
    },
    {
        category: "sending",
        slug: "i-want-my-tears-back",
        title: "I WANT MY TEARS BACK (YE)",
        dates: "22 October - 1st November 2025",
        location: "Sarata Monteoru - Romania",
        image: "/images/projects/sending/sending-19-cover.jpg",
        description: "Follow the adventure of Nerea, Inma, Karla, Yemali & Antonio",
        gallery: [],
    },
    {
        category: "sending",
        slug: "flow-for-change",
        title: "FLOW FOR CHANGE (YE)",
        dates: "28 november - 5 december 2025",
        location: "Braga - Portugal",
        image: "/images/projects/sending/sending-20-cover.png",
        description: "Follow the adventure of Nerea, Inma, Karla, Yemali & Antonio",
        gallery: [],
    },
    {
        category: "sending",
        slug: "youth-goals",
        title: "Youth Goals (TC)",
        dates: "20-30 January 2026",
        location: "Protaras - Cyprus",
        image: "/images/projects/sending/sending-21-cover.jpg",
        description: "Follow the adventure of Paula & Lydia",
        gallery: [],
    },

    // --- INTERRAIL ---
    {
        category: "interrail",
        slug: "europe-4-all",
        title: "Europe 4 ALL (Inclusion for DiscoverEU)",
        dates: "",
        location: "",
        image: "/images/projects/interrail/interrail-1-cover.jpg",
        description: "Follow the adventure of Alejandro, Diego, Marivi, Olivia & Patri",
        gallery: [],
    },
    {
        category: "interrail",
        slug: "europa-te-espera",
        title: "Europa te Espera! (Inclusion for DiscoverEU)",
        dates: "",
        location: "",
        image: "/images/projects/interrail/interrail-2-cover.jpg",
        description: "Follow the adventure of Alba, África, Elisa, Jorge & Luna",
        gallery: [],
    },
    // --- SOLIDARITY PROJECTS ---
    {
        category: "solidarity-projects",
        slug: "eurocraft",
        title: "EUROCRAFT (ESC)",
        dates: "June 2023- May 2024",
        location: "Puente Genil, Spain",
        image: "/images/projects/solidarity/solidarity-1-cover.png",
        description: "An innovative way to promote the European Democratic Values? Why not to open a Minecraft Server and recreate EUROPE! Welcome to Eurocraft :D",
        gallery: [],
    },

    {
        category: "local-projects",
        slug: "tu-otro-tu",
        title: "TU OTRO TÚ",
        dates: "2025",
        location: "Puente Genil, Spain",
        image: "/images/projects/local-projects/local-2-cover.jpg",
        description: "El poder de la interculturalidad experimental en entornos rurales",
        gallery: [],
    },
];

export function getProjectsByCategory(category: string): Project[] {
    return projects.filter((p) => p.category === category);
}

export function getProjectBySlug(category: string, slug: string): Project | undefined {
    return projects.find((p) => p.category === category && p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((c) => c.slug === slug);
}