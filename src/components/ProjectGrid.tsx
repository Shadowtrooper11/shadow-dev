import { ArrowRight } from "lucide-react";
import { projectData } from "../data/projects";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function ProjectGrid() {
    const t = useTranslations("Project");
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-2 px-2">
            {projectData.map((project) => (
              <div key={project.id} 
                    className={cn("bg-zinc-800 border-2 border-zinc-500/30 rounded-lg p-2 max-sm:mb-4 max-sm:w-full w-lg",
                        "hover:bg-zinc-700/50 hover:scale-105 transition-all duration-300"
                    )}>
                    <div className="flex items-center border-b-2 border-zinc-600 pb-2">
                        <img src={project.imageUrl} alt={t(`${project.slug}.title`)} className="size-16 rounded-lg mr-2" />
                        <h4 className="text-2xl font-semibold">{t(`${project.slug}.title`)}</h4>
                    </div>
                    <p className="text-left mt-2">{t(`${project.slug}.description`)}</p>
                    <div className="flex">
                        {project.tags?.map((tag) => (
                            <span key={tag} className="inline-block bg-zinc-700/90 text-white text-xs px-2 py-3 rounded-full mr-1 mt-2">
                                {tag}
                            </span>
                        ))}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-auto text-zinc-300 hover:text-white mt-2 flex items-center">
                           Visit Site <ArrowRight />
                        </a>
                    </div>
              </div>
            ))}
        </div>
    )
}
