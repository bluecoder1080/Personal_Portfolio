import React from "react";

const projects = [
  {
    id: 1,
    title: "Live Chat App",
    description: "Real-time chat with WebSockets, room-based messaging, and live user counts.",
    tech: "React • TypeScript • Tailwind • WebSocket • Node.js",
    link: "https://chat-app-sepia-iota-92.vercel.app",
    github: "https://github.com/bluecoder1080/ChatApp",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Socialize – Backend",
    description: "Scalable backend for a dating platform handling authentication and user data.",
    tech: "Node.js • Express • MongoDB • REST APIs",
    link: null,
    github: "https://github.com/bluecoder1080/Socialize-Backend",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "CivicEye",
    description: "React Native app for reporting/tracking civic issues with location services.",
    tech: "React Native • Expo • Cloudinary • OpenStreetMap",
    link: null,
    github: "https://github.com/bluecoder1080/CivicEye-App",
    color: "from-emerald-500/20 to-green-500/20"
  }
];

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-[#121212] py-32 px-4 z-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
          Selected Projects
        </h2>
        <p className="text-white/40 mb-16 text-lg">
            Showcasing real-world applications and systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-8">
                 <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">{project.title}</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                        {project.description}
                    </p>
                    <div className="text-sm font-mono text-blue-400 mb-6 uppercase tracking-wider">
                        {project.tech}
                    </div>
                 </div>
                 
                 {/* Links */}
                 <div className="flex items-center gap-4 mt-auto">
                    {project.link && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.github && (
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full border border-white/20 hover:border-white/50 text-white text-sm font-medium transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
