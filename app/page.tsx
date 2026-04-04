import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import HeroSmall from "@/components/sections/hero-small";

export default function Home() {
  return (
    <main>
      <Hero />
        <About />
        <div className="bg-[#e1003a] h-48 flex flex-col gap-4 items-center justify-center">
          <span className="text-white text-3xl">Do you want to participate?</span>
          <span className="text-white text-md">Follow us on instagram</span>
        </div>
      <div className="bg-[#e4eaef] h-48 flex items-center justify-center">
          <a href="https://www.instagram.com/erasmiau"><span className="text-[#ca0033] text-5xl">@erasmiau</span></a>
      </div>
        <HeroSmall />
    </main>
  );
}
