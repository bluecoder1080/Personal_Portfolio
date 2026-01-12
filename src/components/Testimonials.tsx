"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Devansh",
    role: "Portfolio Client / Student",
    feedback:
      "Aditya built my personal portfolio exactly the way I imagined it. The design was clean, modern, and professional. He understood my requirements quickly and delivered everything on time. I’m extremely happy with the final result.",
    initial: "D",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Avanish",
    role: "Business Owner / Founder",
    feedback:
      "Aditya developed my e-commerce website for selling products and handled everything from frontend to backend smoothly. The website is fast, user-friendly, and structured very professionally. His technical knowledge really stood out.",
    initial: "A",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Ansh Panwar",
    role: "Peer Developer",
    feedback:
      "Working with Aditya was a great experience. He is very focused on writing clean code and building scalable features. He takes ownership of tasks and always looks for better technical solutions instead of shortcuts.",
    initial: "R",
    gradient: "from-emerald-500 to-green-500",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#0a0a0a] py-32 px-4 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            💬 Testimonials
          </h2>
          <p className="text-white/40 text-lg max-w-2xl">
            Feedback from people I’ve collaborated with on real projects,
            showcasing reliability and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6 text-white/20">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                </svg>
              </div>

              {/* Feedback */}
              <p className="text-white/80 leading-relaxed text-lg mb-8 italic">
                "{t.feedback}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                >
                  {t.initial}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-white/40 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
