type HeroSmallTitleProps = {
    image: string;
    title: string;
};

export default function HeroSmallTitle({
                                           image,
                                           title,
                                       }: HeroSmallTitleProps) {
    return (
        <section className="relative h-52 w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-contain bg-center bg-fixed"
                style={{ backgroundImage: `url('${image}')` }}
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-white">
                    {title}
                </h1>
            </div>
        </section>
    );
}