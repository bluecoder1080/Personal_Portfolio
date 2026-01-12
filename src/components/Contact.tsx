import React from "react";

export default function Contact() {
  return (
    <section className="relative bg-[#0a0a0a] py-32 px-4 z-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Let's build something <span className="text-blue-500">impactful.</span>
        </h2>
        
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaboration, freelance work, internships, or full-time opportunities.
          I am always open to discussing new ideas.
        </p>

        <a 
          href="mailto:adityasingh1080z@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105"
        >
          <span>adityasingh1080z@gmail.com</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-16">
           {[
             { name: "GitHub", url: "https://github.com/bluecoder1080" },
             { name: "LeetCode", url: "https://leetcode.com/u/Coder_Aditya69/" },
             { name: "Twitter / X", url: "https://x.com/adityasingh938" }
           ].map((social) => (
             <a 
               key={social.name}
               href={social.url}
               target="_blank"
               rel="noopener noreferrer"
               className="text-white/40 hover:text-white transition-colors text-lg font-medium"
             >
               {social.name}
             </a>
           ))}
        </div>
      </div>
    </section>
  );
}
