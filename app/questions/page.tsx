import type { Metadata } from "next"
import FaqSection from "@/components/sections/faq-section";
import HeroSmallTitle from "@/components/sections/hero-small-title";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description: "Resolvemos tus dudas sobre los proyectos Erasmus+ y la Asociación Juvenil Erasmiau.",
}

const FAQ_ES = [
    {
        question: "¿Por qué Erasmiau?",
        answer: "Erasmiau nace de la mano de 3 amigos: Betina, Triju y Juanje. Unidos tras haber realizado un intercambio juntos, decidieron dar un paso y situarse al otro lado del telón... Su amor incondicional por los gatos y explorar nuevas culturas fueron los ingredientes principales para crear @erasmiau",
    },
    {
        question: "¿Puedo participar?",
        answer: "Cualquier persona residente en el territorio europeo puede participar. ¡No hay límites! Pregunta y seguro que encontramos algún proyecto en el cual puedas unirte. Todos nuestros proyectos son experiencias abiertas a todo el mundo, los formularios de participación se podrán encontrar en nuestro perfil en linktree (linktr.ee/erasmiau) y en la BIO de @erasmiau",
    },
    {
        question: "Pero... ¿es gratis? :O",
        answer: "El Programa Erasmus+ defiende que el programa debe de ser accesible y gratuito para todos sus usuarios. Ya sea en España o fuera, los gastos de manutención quedan cubiertos por la organización solicitante. Los gastos de viaje son adelantados por ti y devueltos una vez realizado el proyecto.",
    },
    {
        question: "¿Qué es un intercambio?",
        answer: "Una experiencia vital y recomendable para cualquier joven europeo. Jóvenes de varios países se reúnen para realizar un intercambio cultural mientras realizan un proyecto sobre una temática vinculada con las dimensiones horizontales que persigue la comisión europea: Ecologismo, Inclusión y Diversidad, Digitalización y Empoderamiento Juvenil. ",
    },
    {
        question: "Quiero irme de Interrail",
        answer: "Gracias a la acción INCLUSION FOR DISCOVEREU las asociaciones podemos brindar soporte a los participantes a la hora de ir de INTERRAIL. ¿Quieres más información? Preguntanos en @erasmiau",
    },
    {
        question: "¿Entonces, preparo la mochila?",
        answer: "Desde @erasmiau, apoyándonos en la educación no formal, creemos en los proyectos juveniles como una fuente de aprendizaje y autodescubrimiento. Viajar, descubrir nuevas culturas y nuevos contextos te permite adentrarte en facetas del ser que nunca antes habías explorado. \n" +
            "\n" +
            "¡Anímate y Lánzate a la aventura!",
    }
    // ...
];

const FAQ_EN = [
    {
        question: "Why Erasmiau?",
        answer: "Erasmiau was born by 3 friends: Betina, Triju and Juanje. United after having carried out an exchange together, they decided to take a step and place themselves on the other side of the curtain... Their unconditional love for cats and exploring new cultures were the main ingredients to create @erasmiau",
    },
    {
        question: "Can I Participate?",
        answer: "Any person residing in European territory can participate. There are no limits! Ask and we will surely find a project in which you can join. All our projects are experiences open to everyone, the participation forms can be found in our profile on linktree (linktr.ee/erasmiau) and in the BIO of @erasmiau",
    },
    {
        question: "But ... Is it Free? :O",
        answer: "The Erasmus+ Program defends that the program must be accessible and free for all its users. Whether in Spain or abroad, living expenses are covered by the requesting organization. Travel expenses are advanced by you and returned once the project is completed.",
    },
    {
        question: "What is a Youth Exchange?",
        answer: "A vital and recommended experience for any young European. Young people from several countries meet to carry out a cultural exchange while carrying out a project on a topic linked to the horizontal dimensions pursued by the European commission: Environmentalism, Inclusion and Diversity, Digitalization and Youth Empowerment.",
    },
    {
        question: "I want to do the Interrail trip",
        answer: "Thanks to the INCLUSION FOR DISCOVEREU action, the associations can provide support to participants when traveling on INTERRAIL. Do you want more information? Ask us at @erasmiau",
    },
    {
        question: "So, should i prepare the backpack? :D",
        answer: "At Erasmiau, relying on non-formal education, we believe in youth projects as a source of learning and self-discovery. Traveling, discovering new cultures and new contexts allows you to delve into facets of being that you have never explored before.\n" +
            "\n" +
            "Go ahead and go on the adventure!",
    },
    // ...
];
export default function QuestionsPage() {
    return (
        <div>
            <HeroSmallTitle image="/images/projects/image-bg.jpg" title="PREGUNTAS FRECUENTES"/>
            <FaqSection title="Preguntas en Español" items={FAQ_ES} />
            <FaqSection items={FAQ_EN} title="Questions in English (Thank you Google :D)" />
            <div className="bg-[#e4eaef] h-48 flex items-center justify-center gap-4">
                <span className="text-[#ca0033] text-3xl">More Info+</span>
                <Link
                    href="/contact"
                    className="bg-[#02426b] hover:bg-[#03588f] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
}