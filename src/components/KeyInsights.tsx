"use client";
import { projectData } from "@/data/projectData";
import { motion } from "motion/react";

export function KeyInsights() {
  return (
    <section className="p-6 sm:p-8 border-b border-geo-ink bg-geo-bg">
      <div className="border-t-[12px] border-geo-ink pt-6 pb-2 mb-6 flex justify-between items-end">
        <h2 className="text-[11px] font-sans font-black uppercase text-geo-ink tracking-tight">
          Key Insights
        </h2>
        <span className="text-[9px] font-sans font-bold uppercase tracking-widest opacity-40 hidden sm:inline-block">Summary & Learnings</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectData.insights.map((insight, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col"
          >
            <div className="text-[2.5rem] font-serif font-black text-geo-border -mb-5 z-0 ml-4 leading-none select-none">
              0{idx + 1}
            </div>
            <div className="bg-white border border-geo-ink p-6 relative z-10 flex-grow shadow-[4px_4px_0px_#2D2926]">
              <h3 className="font-sans text-[11px] font-black tracking-widest uppercase text-geo-ink mb-3 line-clamp-2">
                {insight.title}
              </h3>
              <div className="w-10 h-[2px] bg-geo-rust mb-4"></div>
              <p className="text-[11px] font-serif text-geo-ink leading-relaxed font-semibold italic">
                "{insight.text}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
