import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, Award } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Interested in discussing backend architecture, microservices, or AI integration projects? Let's connect!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                I'm passionate about building scalable backend systems and exploring cutting-edge
                                technologies like AI integration and event-driven architectures. Whether you're
                                looking for technical expertise or want to discuss innovative ideas, I'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Email</div>
                                    <div className="text-gray-400">sbm.gupta1908@gmail.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Phone</div>
                                    <div className="text-gray-400">+91 7388349966</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Location</div>
                                    <div className="text-gray-400">Bangalore, India</div>
                                </div>
                            </div>
                        </div>

                        {/* Professional Highlights */}
                        <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-yellow-400" />
                                Quick Facts
                            </h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-2 text-gray-300">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                    3+ years in backend development at top companies
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                    Top 2% on LeetCode (Rating: 2069)
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                    Expert in AI integration & microservices
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                    Currently building AI-powered systems at Tekion Corp
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="text-white font-semibold mb-4">Find Me Online</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/shubham1908"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                                    title="GitHub Profile"
                                >
                                    <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/sbm-gpt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                                    title="LinkedIn Profile"
                                >
                                    <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400" />
                                </a>
                                <a
                                    href="https://leetcode.com/gabbar9081"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                                    title="LeetCode Profile"
                                >
                                    <Code className="w-6 h-6 text-gray-300 group-hover:text-yellow-400" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                            <p className="text-gray-400 text-sm">
                                Whether it's about backend architecture, AI integration, or collaboration opportunities
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white font-semibold mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-white font-semibold mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                                    placeholder="Project inquiry, job opportunity, collaboration..."
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white font-semibold mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 resize-vertical"
                                    placeholder="Tell me about your project, requirements, or what you'd like to discuss..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>

                        <div className="mt-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                            <p className="text-xs text-gray-400 text-center">
                                📧 Prefer direct email? Reach out at <span className="text-blue-400">sbm.gupta1908@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;