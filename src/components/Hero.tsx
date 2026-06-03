"use client";
import { motion } from "motion/react";
import { projectData } from "@/data/projectData";
import { ArrowRight, Mountain } from "lucide-react";

export function Hero() {
  return (
    <section className="px-6 sm:px-8 pb-12 pt-8 border-b border-geo-ink relative h-auto overflow-hidden text-white" id="hero">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="images/end.jpeg" 
          alt="Geological Background Placeholder" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-[#2D2926]/40 mix-blend-multiply"></div>
      </div>
      
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#F5F2ED_1px,transparent_1px),linear-gradient(to_bottom,#F5F2ED_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      
      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center gap-2 rounded-sm border border-[#F5F2ED] bg-geo-ink/80 px-2 py-0.5 text-[9px] font-bold text-[#F5F2ED] uppercase tracking-widest w-fit mb-6 shadow-[2px_2px_0px_#F5F2ED]">
            <Mountain className="h-3 w-3" />
            <span>Field Case Study</span>
          </div>
          
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tight uppercase leading-[0.95] text-[#F5F2ED] mb-6 drop-shadow-md">
            {projectData.hero.title}
          </h1>
          
          <p className="text-[13px] sm:text-[15px] font-sans italic opacity-100 text-[#F5F2ED] mb-6 max-w-2xl border-l-[3px] border-geo-rust pl-4 leading-relaxed font-semibold drop-shadow-sm">
            {projectData.hero.subtitle} — {projectData.hero.positioning}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a 
              href="#overview"
              className="group flex h-11 items-center justify-center gap-3 bg-[#F5F2ED] text-geo-ink px-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-geo-rust hover:text-white transition-colors"
            >
              <span>Explore the field story</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex h-11 items-center justify-center border border-[#F5F2ED] bg-transparent px-6 text-[10px] sm:text-[11px] font-bold text-[#F5F2ED] uppercase tracking-[0.15em] hover:bg-[#F5F2ED] hover:text-geo-ink transition-colors shadow-sm"
            >
              View Source
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
