"use client";
import { motion } from "motion/react";
import { projectData } from "@/data/projectData";

export function ProjectOverview() {
  return (
    <section id="overview" className="p-6 sm:p-8 border-b border-geo-ink bg-white/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-8 flex flex-col">
          <div className="border border-geo-ink p-6 bg-white shadow-[4px_4px_0px_#2D2926]">
            <h2 className="text-[11px] font-sans font-black uppercase mb-4 text-white bg-geo-ink inline-block px-2 py-0.5">
              Project Overview
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-sm font-serif leading-relaxed text-geo-ink"
            >
              <p>{projectData.overview.description}</p>
            </motion.div>
          </div>
        </div>
        
        <div className="lg:col-span-4 border-l-[3px] border-geo-sand pl-6 flex flex-col justify-center py-2 h-full">
          <div>
            <h2 className="text-[11px] font-sans font-black uppercase mb-3 text-geo-ink border-b border-geo-ink pb-1 inline-block">
              Core Focus Areas
            </h2>
            <ul className="text-xs space-y-3 font-sans text-geo-ink mt-2">
              {projectData.overview.themes.map((theme, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-geo-olive"></span> 
                  <span className="uppercase font-bold tracking-wider">{theme}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
