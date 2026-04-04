import HeroSmallTitle from "@/components/sections/hero-small-title";
import ProjectCard from "@/components/sections/project-card";
import projects from "@/data/projects.json";
import PhotoGallery from "@/components/sections/photo-gallery";
import fs from "fs";
import path from "path";

const galleryFolder = path.join(
    process.cwd(),
    "public/images/projects/gallery"
);

const galleryImages = fs
    .readdirSync(galleryFolder)
    .filter((file) => file.endsWith(".jpg"))
    .sort((a, b) => Number(a.split(".")[0]) - Number(b.split(".")[0]))
    .map((file) => `/images/projects/gallery/${file}`);
export default function ProjectsPage() {
    return (
        <div>
        <HeroSmallTitle image="/images/projects/image-bg.jpg" title="EUROPEAN PROJECTS"/>
            <div className="flex flex-col gap-12 py-12">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        imageAlt={project.imageAlt}
                        title={project.title}
                        description={project.description}
                        linkHref={project.linkHref}
                    />
                ))}
            </div>
            <PhotoGallery images={galleryImages} />
        </div>
    );
}