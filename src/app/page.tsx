import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CodingActivity from "@/components/CodingActivity";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas frameCount={128} />
      <About />
      <Projects />
      <CodingActivity />
      <Testimonials />
      <Contact />
      
      <footer className="py-8 text-center text-zinc-600 border-t border-white/5 bg-[#0a0a0a]">
        <p className="text-xs uppercase tracking-widest">
            © 2026 Aditya Singh Rajput • Built with Next.js
        </p>
      </footer>
    </main>
  );
}
