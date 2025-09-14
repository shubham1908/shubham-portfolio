import { Linkedin, Quote } from 'lucide-react';

interface Testimonial {
    name: string;
    title: string;
    company: string;
    linkedinUrl: string;
    image: string;
    content: string;
    managementPeriod?: string;
}

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            name: "Fahmi Azizi",
            title: "Technical Lead | Experienced Backend Engineering Fintech, Order, Payment | Passionate to build a sustainable tech team",
            company: "tiket.com",
            linkedinUrl: "https://www.linkedin.com/in/fahmi-azizi-09857961/",
            image: "./src/assets/linkedin-fahmi.png",
            content: "I had the pleasure of managing Shubham over the years, and their performance was really good. He can really work with minimum supervision, delivering high-quality work within tight deadlines, also he is person who can collaborate easily with anyone.",
            managementPeriod: "Direct manager • Jul 2022 - Jul 2024",
        }
    ];

    // Dynamic grid classes based on testimonial count
    const getGridClasses = (count: number): string => {
        if (count === 1) return "grid grid-cols-1 max-w-2xl mx-auto";
        if (count === 2) return "grid grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto gap-8";
        if (count === 3) return "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto gap-8";
        return "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8";
    };

    return (
        <section id="testimonials" className="scroll-mt-24 py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">LinkedIn Recommendations</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        What colleagues say about working with me
                    </p>
                </div>

                <div className={getGridClasses(testimonials.length)}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* LinkedIn Header */}
                            <div className="bg-[#0077b5] px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Linkedin className="w-6 h-6 text-white" />
                                    <span className="text-white font-semibold text-sm">LinkedIn</span>
                                </div>
                                <Quote className="w-5 h-5 text-white/80" />
                            </div>

                            {/* Profile Section */}
                            <div className="p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 flex-shrink-0"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=0077b5&color=fff&size=64`;
                                        }}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <a
                                            href={testimonial.linkedinUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold text-gray-900 text-lg leading-tight hover:text-blue-600 hover:underline transition-colors duration-200 block"
                                        >
                                            {testimonial.name}
                                        </a>
                                        <p className="text-gray-600 text-sm font-medium mt-1">
                                            {testimonial.title}
                                        </p>
                                        <p className="text-gray-500 text-sm truncate">{testimonial.company}</p>
                                        {/* {testimonial.managementPeriod && (
                                            <p className="text-gray-400 text-xs mt-1">{testimonial.managementPeriod}</p>
                                        )} */}
                                    </div>
                                </div>

                                {/* Management Period (if exists) */}
                                {/* {testimonial.managementPeriod && (
                                    <div className="mb-3">
                                        <p className="text-gray-500 text-xs">
                                            {testimonial.managementPeriod}
                                        </p>
                                    </div>
                                )} */}

                                {/* Testimonial Content */}
                                <div className="mb-4">
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        "{testimonial.content}"
                                    </p>
                                </div>

                                {/* LinkedIn Actions */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <span className="text-xs text-gray-400">{testimonial.managementPeriod}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show different messages based on testimonial count */}
                <div className="text-center mt-12">
                    {testimonials.length === 1 && (
                        <p className="text-gray-400 text-sm mb-6">More recommendations coming soon!</p>
                    )}
                    <a
                        href="https://linkedin.com/in/sbm-gpt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077b5] hover:bg-[#005885] text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        <Linkedin size={20} />
                        {testimonials.length === 1
                            ? "View My LinkedIn Profile"
                            : "View More Recommendations on LinkedIn"
                        }
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;