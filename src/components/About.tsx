import React from "react";

export default function About() {
  return (
    <section className="relative bg-[#121212] py-24 px-4 border-t border-white/5 z-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-4">
            About Me
        </h2>
        
        <p className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed mb-12">
            I am a passionate <span className="text-white font-normal">full stack developer</span> who enjoys building production-ready applications. 
            I focus on creating <span className="text-blue-200">fast, scalable, and user-friendly products</span> using modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Education</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-white font-medium">B.Tech in Computer Science</h4>
                        <p className="text-white/50 text-sm">Galgotias College Of Engineering And Technology</p>
                        <p className="text-white/40 text-xs mt-1">2023 - 2027</p>
                    </div>
                </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Node.js", "React Native", "TailwindCSS", "MongoDB", "PostgreSQL", "Docker"].map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
