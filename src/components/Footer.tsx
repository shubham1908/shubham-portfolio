import { Github, Linkedin, Mail, Heart, Code, Award } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Shubham Gupta
            </div>
            <p className="text-gray-400 leading-relaxed">
              Backend Software Engineer specializing in scalable microservices, event-driven systems, 
              and AI-powered solutions. Currently building the future at Tekion Corp.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/shubham1908" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/sbm-gpt" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://leetcode.com/gabbar9081" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                title="LeetCode Profile"
              >
                <Code size={20} />
              </a>
              <a 
                href="mailto:sbm.gupta1908@gmail.com" 
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                title="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            {/* Achievement Badge */}
            <div className="flex items-center gap-2 text-sm">
              <Award size={16} className="text-yellow-400" />
              <span className="text-gray-400">Top 2% on LeetCode</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-left"
                >
                  {link}
                </button>
              ))}
            </div>

            {/* Tech Stack Highlights */}
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-2 text-sm">Tech Focus</h4>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Kafka', 'Azure AI', 'Microservices'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 sbm.gupta1908@gmail.com</p>
              <p>📱 +91 7388349966</p>
              <p>📍 Bangalore, India</p>
            </div>

            {/* Current Status */}
            <div className="pt-4">
              <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Currently Available</span>
                </div>
                <p className="text-gray-400 text-xs">
                  Open to new opportunities and interesting projects
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Crafted with</span>
              <Heart size={16} className="text-red-400" />
              <span>and lots of</span>
              <Code size={16} className="text-blue-400" />
              <span>by Shubham Gupta</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shubham Gupta. All rights reserved.
            </div>
            
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 hover:transform hover:scale-105"
            >
              <span>Back to top</span>
              <span className="text-lg">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;