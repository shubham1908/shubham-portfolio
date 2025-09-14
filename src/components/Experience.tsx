import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/Experiences';

const Experience = () => {

    return (
        <section id="experience" className="scroll-mt-24 py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 hidden md:block"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative mb-12 md:ml-16">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[4.5rem] top-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full hidden md:block"></div>

                            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 mb-4">
                                            <div className="flex items-center gap-2">
                                                <Briefcase size={16} />
                                                <span>{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} />
                                                <span>{exp.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx} className="text-gray-300 flex items-start">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full border border-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;