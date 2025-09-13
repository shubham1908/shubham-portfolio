import { highlights } from "../data/AboutHighlights";
import type { Highlight } from "../types/Highlight";

const HighlightCard: React.FC<{ item: Highlight }> = ({ item }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
        <div className="mb-4">{item.icon}</div>
        <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
    </div>
);

const About: React.FC = () => (
    <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div className="space-y-6 text-gray-300">
                    <p className="text-lg leading-relaxed">
                        I'm a passionate Backend Software Engineer with 3+ years of experience specializing in scalable microservices, distributed systems, and event-driven architectures. Currently at Tekion Corp, I build AI-powered communication pipelines and event-driven backend systems that process real-time data at scale.
                    </p>
                    <p className="text-lg leading-relaxed">
                        My expertise includes optimizing high-performance APIs (achieving 50% latency reductions), designing cloud-native solutions with Kafka and microservices, and implementing comprehensive testing strategies. I'm ranked in the top 2% on LeetCode and consistently perform in top 200 on CodeChef challenges.
                    </p>

                    <div className="pt-6">
                        <h3 className="text-2xl font-semibold text-white mb-4">What I Bring</h3>
                        <ul className="space-y-3">
                            {[
                                "Event-driven microservices with Kafka and real-time processing",
                                "AI/LLM integration with Azure OpenAI for intelligent automation",
                                "Performance optimization achieving >50% latency improvements",
                                "Domain-driven design and comprehensive testing (98% coverage)",
                            ].map((point, idx) => (
                                <li key={idx} className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Highlights Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {highlights.map((item, index) => (
                        <HighlightCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default About;
