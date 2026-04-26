type HeroSmallTitleProps = {
    image: string;
    title: string;
    subtitle?: string;
    tina?: {
        image?: string;
        title?: string;
        subtitle?: string;
    };
};

export default function HeroSmallTitle({
    image,
    title,
    subtitle = '',
    tina,
}: HeroSmallTitleProps) {
    return (
        <section className="relative h-52 w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-no-repeat md:bg-fixed"
                style={{ backgroundImage: `url('${image}')`, backgroundPosition: '50% 50%' }}
                data-tina-field={tina?.image}
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex h-full flex-col gap-6 items-center justify-center px-4 text-center">
                <h1
                    className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-white"
                    data-tina-field={tina?.title}
                >
                    {title}
                </h1>
                {subtitle && (
                    <h3
                        className="text-xs md:text-xs font-bold tracking-widest text-white"
                        data-tina-field={tina?.subtitle}
                    >
                        {subtitle}
                    </h3>
                )}
            </div>
        </section>
    );
}