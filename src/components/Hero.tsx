import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 z-10">
                {/* Left Content */}
                <div className="flex-1 text-left animate-fade-in-up">
                    <div className="mb-4">
                        <span className="text-lg sm:text-xl text-gray-300 font-medium">Hi, I'm</span>
                    </div>
                    
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Shubham
                        </span>
                        {' '}Gupta
                    </h1>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6">
                        Backend Software Engineer
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                        Building scalable microservices, event-driven systems, and AI-powered solutions. 
                        Currently crafting the future of automotive technology at Tekion Corp.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Get In Touch
                        </button>

                        <a
                            href="/Shubham_Gupta_Backend.pdf"
                            download
                            className="border border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:bg-white/10"
                        >
                            <Download size={20} />
                            Download Resume
                        </a>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <div className="text-center md:text-left">
                            <div className="text-2xl font-bold text-white">3+</div>
                            <div className="text-sm text-gray-400">Years Experience</div>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="text-2xl font-bold text-white">Top 2%</div>
                            <div className="text-sm text-gray-400">LeetCode Global</div>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="text-2xl font-bold text-white">2152</div>
                            <div className="text-sm text-gray-400">Peak Rating</div>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="text-2xl font-bold text-white">50%+</div>
                            <div className="text-sm text-gray-400">Performance Gains</div>
                        </div>
                    </div>

                </div>

                {/* Right Photo */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <img
                        src="./src/assets/profile.jpeg"
                        alt="Shubham Gupta - Backend Software Engineer"
                        className="w-90 h-90 md:w-90 md:h-90 rounded-full object-cover shadow-2xl border-4 border-blue-500/40 hover:border-purple-500/40 transition-all duration-500"
                    />
                </div>
            </div>

            {/* Scroll down icon */}
            <button
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-blue-400 transition-colors duration-300"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
};

export default Hero;