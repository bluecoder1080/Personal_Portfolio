import React from "react";
import { MotionValue, useTransform, motion } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Fade in/out and parallax translation for each section
  
  // Section 1: 0% - Center
  // Fades out by 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  // Section 2: 30% - Left
  // Enters around 15%, fully visible at 30%, exits by 45%
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.45], [50, -50]);

  // Section 3: 60% - Right
  // Enters around 45%, fully visible at 60%, exits by 75%
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      
      {/* Section 1: Center */}
      <motion.div 
        style={{ opacity: opacity1, y: y1, scale: scale1 }} 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            Aditya Singh Rajput.
          </h1>
          <p className="text-xl md:text-3xl text-gray-400 font-light tracking-wide">
            Full Stack Developer | Web & Mobile
          </p>
        </div>
      </motion.div>

      {/* Section 2: Left */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }} 
        className="absolute inset-0 flex items-center justify-start px-8 md:px-20 pointer-events-none"
      >
        <div className="max-w-3xl">
           <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">
             Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">real-time applications</span> & scalable systems.
           </h2>
        </div>
      </motion.div>

      {/* Section 3: Right */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }} 
        className="absolute inset-0 flex items-center justify-end px-8 md:px-20 pointer-events-none"
      >
        <div className="max-w-3xl text-right">
           <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">
             Crafting <span className="text-white/50">Modern UI</span> and <span className="text-white">Mobile-First</span> solutions.
           </h2>
        </div>
      </motion.div>

    </div>
  );
}
