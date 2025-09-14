import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-24 scroll-mt-24 relative flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
    >
      {/* background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-6 w-60 h-60 bg-blue-500/18 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-6 w-80 h-80 bg-purple-500/16 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* profile image (hidden on mobile) */}
      <div
        className="absolute inset-y-0 right-0 hidden md:block"
        style={{
          width: '75vw',
          transform: 'translateX(120px)',
        }}
      >
        <img
          src="./src/assets/profile.jpeg"
          alt="Shubham Gupta - Backend Software Engineer"
          loading="lazy"
          className="w-full h-full object-cover"
          style={{
            WebkitMaskImage:
              'linear-gradient(to left, rgba(0,0,0,1) 42%, rgba(0,0,0,0) 82%)',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
            maskImage:
              'linear-gradient(to left, rgba(0,0,0,1) 42%, rgba(0,0,0,0) 82%)',
            maskRepeat: 'no-repeat',
            maskSize: '100% 100%',
          }}
        />
      </div>

      {/* content */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col md:flex-row">
          <div
            className="
              w-full md:w-[46%] flex flex-col justify-center
              text-center md:text-left
              items-center md:items-start
              px-4 md:pl-10 lg:pl-16
            "
          >
            <div className="mb-4">
              <span className="text-lg sm:text-xl text-gray-300 font-medium">
                Hi, I'm
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Shubham
              </span>{' '}
              Gupta
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6">
              Backend Software Engineer
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Building scalable microservices, event-driven systems, and AI-powered
              solutions. Currently crafting the future of automotive technology at
              Tekion Corp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-transform duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </button>

              <a
                href="/Shubham_Gupta_Backend.pdf"
                download
                className="border border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 hover:bg-white/10"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Top 2%</div>
                <div className="text-sm text-gray-400">LeetCode Global</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">2152</div>
                <div className="text-sm text-gray-400">Peak Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50%+</div>
                <div className="text-sm text-gray-400">Performance Gains</div>
              </div>
            </div>
          </div>

          {/* spacer only for desktop */}
          <div className="hidden md:block md:w-[4%]" />
        </div>
      </div>

      {/* scroll down icon */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-blue-400 transition-colors duration-300"
        aria-label="Scroll to about"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;