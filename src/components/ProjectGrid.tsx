import { ArrowRight } from "lucide-react";
import { projectData } from "../data/projects";

export default function ProjectGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-2">
            {projectData.map((project) => (
              <div key={project.id} className="bg-gray-900 border-2 border-gray-500/30 rounded-lg p-2 max-sm:mb-4 w-lg">
                    <div className="flex items-center">
                        <img src={project.imageUrl} alt={project.title} className="size-16 rounded-lg mr-2" />
                        <h4 className="text-2xl font-semibold">{project.title}</h4>
                    </div>
                    <p className="text-left mt-2">{project.description}</p>
                    <div className="flex">
                        {project.tags?.map((tag) => (
                            <span key={tag} className="inline-block bg-gray-500 text-white text-xs px-2 py-1 rounded-full mr-1 mt-2">
                                {tag}
                            </span>
                        ))}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-auto text-gray-300 hover:text-white mt-2 flex items-center">
                           Visit Site <ArrowRight />
                        </a>
                    </div>
              </div>
            ))}
        </div>
    )
}