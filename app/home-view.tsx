// app/home-view.tsx
"use client"; // <--- ESTO ES LO QUE SOLUCIONA TU ERROR

import { useTina } from "tinacms/dist/react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import HeroSmall from "@/components/sections/hero-small";
import { tinaField } from "tinacms/dist/react";

export default function HomeView(props: { data: any; query: string; variables: any }) {    // useTina ahora funcionará porque este es un Client Component
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    const page = data?.page;

    return (
        <main>
            <Hero data={page?.hero} />
            <About data={page?.about}/>

            {/* Sección de Instagram editable */}
            <div className="bg-[#e1003a] h-48 flex flex-col gap-4 items-center justify-center">
        <span
            className="text-white text-3xl font-bold"
            data-tina-field={tinaField(page?.instagram, "title")}
        >
          {page?.instagram?.title || "Do you want to participate?"}
        </span>
                <span
                    className="text-white text-md"
                    data-tina-field={tinaField(page?.instagram, "subtitle")}
                >
          {page?.instagram?.subtitle || "Follow us on instagram"}
        </span>
            </div>

            <div className="bg-[#e4eaef] h-48 flex items-center justify-center">
                <a href={page?.instagram?.link || "https://www.instagram.com/erasmiau"}>
          <span
              className="text-[#ca0033] text-5xl font-black"
              data-tina-field={tinaField(page?.instagram, "handle")}
          >
            {page?.instagram?.handle || "@erasmiau"}
          </span>
                </a>
            </div>

            <HeroSmall />
        </main>
    );
}