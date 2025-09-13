import { ExternalLink, Github } from "lucide-react";
import { useInfiniteCarousel } from "../hooks/useInfiniteCarousel";
import { projects } from "../data/Projects";

const Projects: React.FC = () => {


    // Create extended array for infinite scroll by tripling the projects
    const extendedProjects = [...projects, ...projects, ...projects];

    const {
        sliderRef,
        currentIndex,
        goNext,
        goPrev,
        goToSlide,
        getCurrentProjectIndex,
        setHovering,
        slideWidth,
    } = useInfiniteCarousel({ length: projects.length });

    return (
        <section id="projects" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Key projects showcasing expertise in microservices, AI integration, and high-performance backend systems
                    </p>
                </div>

                <div
                    className="relative max-w-5xl mx-auto overflow-hidden"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                >
                    {/* Slider */}
                    <div ref={sliderRef} className="flex">
                        {extendedProjects.map((project, idx) => {
                            const isCurrent = idx === currentIndex;
                            return (
                                <div
                                    key={`${project.title}-${idx}`}
                                    className="flex-shrink-0 px-2 transition-all duration-700"
                                    style={{
                                        width: `${slideWidth}%`,
                                        transform: isCurrent ? "scale(1)" : "scale(0.9)",
                                        opacity: isCurrent ? 1 : 0.5,
                                    }}
                                >
                                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden group p-6 h-full">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-gray-800 rounded-lg">{project.icon}</div>
                                                <div className="text-xs text-gray-500 font-medium">{project.company}</div>
                                            </div>
                                            <div className="flex gap-2">
                                                {project.github !== "#" && (
                                                    <a
                                                        href={project.github}
                                                        className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Github size={18} className="text-gray-300" />
                                                    </a>
                                                )}
                                                {project.live !== "#" && (
                                                    <a
                                                        href={project.live}
                                                        className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <ExternalLink size={18} className="text-gray-300" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                                        <div className="mb-6">
                                            <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                                            <ul className="space-y-2">
                                                {project.features.map((feature, featureIdx) => (
                                                    <li key={featureIdx} className="text-gray-400 text-sm flex items-start">
                                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.map((tech, techIdx) => (
                                                <span
                                                    key={techIdx}
                                                    className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation */}
                    <button
                        onClick={goPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-full shadow-lg transition-all duration-200"
                    >
                        ‹
                    </button>
                    <button
                        onClick={goNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-full shadow-lg transition-all duration-200"
                    >
                        ›
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${getCurrentProjectIndex() === idx
                                    ? "bg-blue-500 scale-125"
                                    : "bg-gray-600 hover:bg-gray-500"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
