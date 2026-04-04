type PhotoGalleryProps = {
    images: string[];
};

export default function PhotoGallery({ images }: PhotoGalleryProps) {
    return (
        <section className="bg-[#e4eaef] py-20 px-6">
            <h2 className="mb-16 text-center text-xl font-bold tracking-widest text-[#E8003A] md:text-3xl">
                Photo Album
            </h2>

            <div className="mx-auto grid w-fit grid-cols-1 justify-items-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image, index) => (
                    <img
                        key={image}
                        src={image}
                        alt={`Gallery photo ${index + 1}`}
                        className="h-75 w-75 object-cover"
                    />
                ))}
            </div>
        </section>
    );
}