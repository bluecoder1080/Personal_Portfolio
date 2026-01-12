"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

interface ScrollyCanvasProps {
  frameCount?: number; // Total number of frames (e.g., 128)
}

export default function ScrollyCanvas({ frameCount = 128 }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Map scroll progress of the container to the frame index
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    // Assuming filenames are 000.png, 001.png, ..., 127.png
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const src = `/sequence/${i.toString().padStart(3, "0")}.png`;
        img.src = src;
        img.onload = () => {
             loadedCount++;
             if (loadedCount === frameCount) {
                 setIsLoaded(true);
             }
        };
        // Add error handling if needed, but keeping it simple for now
        imgArray.push(img);
    }
    setImages(imgArray);
  }, [frameCount]);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = images[index];

    if (!canvas || !ctx || !img) return;

    // Set canvas dimensions to match window (handled in resize effect, but good to check)
    // Actually, canvas internal resolution (width/height) vs CSS size (style.width/height)
    // We update width/height in resize effect.
    
    const cw = canvas.width;
    const ch = canvas.height;
    
    ctx.clearRect(0, 0, cw, ch);

    // Calculate aspect ratios for object-fit: cover
    const imgAspect = img.width / img.height;
    const canvasAspect = cw / ch;
    
    let drawW, drawH, drawX, drawY;
    
    if (imgAspect > canvasAspect) {
        // Image is wider relative to canvas -> crop sides
        drawH = ch;
        drawW = ch * imgAspect;
        drawX = (cw - drawW) / 2;
        drawY = 0;
    } else {
        // Image is taller relative to canvas -> crop top/bottom
        drawW = cw;
        drawH = cw / imgAspect;
        drawX = 0;
        drawY = (ch - drawH) / 2;
    }
    
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  };

  // React to resize
  useEffect(() => {
      const handleResize = () => {
          if (canvasRef.current) {
              // Set internal resolution to window size for best quality
              canvasRef.current.width = window.innerWidth;
              canvasRef.current.height = window.innerHeight;
              
              // Re-render current frame immediately if loaded
              if (isLoaded && images.length > 0) {
                 const currentProgress = scrollYProgress.get();
                 const frameIndex = Math.min(
                    frameCount - 1, 
                    Math.max(0, Math.floor(currentProgress * (frameCount - 1)))
                 );
                 renderFrame(frameIndex);
              }
          }
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, images, frameCount, scrollYProgress]);

  // React to scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if (!isLoaded || images.length === 0) return;
      
      const maxIndex = frameCount - 1;
      const frameIndex = Math.min(maxIndex, Math.max(0, Math.floor(latest * maxIndex)));
      
      requestAnimationFrame(() => renderFrame(frameIndex));
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="block w-full h-full" />
        
        <Overlay scrollYProgress={scrollYProgress} />

        {/* Optional Loading State */}
        {!isLoaded && (
             <div className="absolute inset-0 flex items-center justify-center text-white/20 font-sans text-sm tracking-widest uppercase z-50 bg-[#121212]">
                 Loading Experience...
             </div>
        )}
      </div>
    </div>
  );
}
