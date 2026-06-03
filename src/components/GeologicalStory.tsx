"use client";
import { motion } from "motion/react";
import { projectData } from "@/data/projectData";

const stratColors = [
  "bg-geo-rust/10 border-l-4 border-geo-rust",
  "bg-geo-olive/10 border-l-4 border-geo-olive",
  "bg-geo-sand/20 border-l-4 border-geo-sand",
  "bg-geo-clay/10 border-l-4 border-geo-clay",
  "bg-geo-slate/10 border-l-4 border-geo-slate",
];

const textColors = [
  "text-geo-rust",
  "text-geo-olive",
  "text-geo-sand",
  "text-geo-clay",
  "text-geo-slate",
];

export function GeologicalStory() {
  return (
    <section id="story" className="p-6 sm:p-8 border-b border-geo-ink bg-geo-bg relative z-0">
      <div className="mb-8">
        <h2 className="text-[11px] font-sans font-black uppercase text-white bg-geo-ink inline-block px-3 py-1">
          Geological Story (Stratigraphy)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 min-h-[400px]">
        <div className="md:col-span-1 hidden md:flex flex-col relative border-r border-geo-ink pr-4">
           <div className="text-[9px] font-sans uppercase tracking-[0.2em] opacity-40 text-right text-geo-ink absolute top-8 -right-3 whitespace-nowrap origin-bottom-right" style={{ transform: 'rotate(-90deg)' }}>
             Lithostratigraphic Column
           </div>
        </div>
        
        <div className="md:col-span-11 flex flex-col border border-geo-ink bg-white shadow-[4px_4px_0px_#DED9D1]">
          {projectData.timeline.slice().reverse().map((item, index) => {
             const cIdx = index % stratColors.length;
             return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`py-8 px-6 border-b border-geo-ink last:border-b-0 relative group flex flex-col justify-center ${stratColors[cIdx]}`}
              >
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-geo-ink rotate-45"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-sans font-bold uppercase tracking-widest ${textColors[cIdx]}`}>
                    UNIT {projectData.timeline.length - index}: {item.formation}
                  </span>
                  <span className="text-[9px] font-sans uppercase font-bold text-geo-ink opacity-60 bg-white/50 px-2 py-0.5 border border-geo-ink/20 w-fit">
                    {item.period}
                  </span>
                </div>
                
                <h3 className="font-serif text-[17px] font-black text-geo-ink mb-1 uppercase tracking-tight">
                  {item.environment}
                </h3>

                <p className="font-sans text-[11px] leading-relaxed text-geo-ink max-w-3xl italic mt-1 font-medium opacity-90">
                  {item.description}
                </p>
              </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
}
