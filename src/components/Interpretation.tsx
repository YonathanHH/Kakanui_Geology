"use client";
import { projectData } from "@/data/projectData";
import { motion } from "motion/react";

export function Interpretation() {
  return (
    <section id="interpretation" className="p-6 sm:p-8 border-b border-geo-ink bg-white text-geo-ink">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        <div className="lg:col-span-4 border-t-4 border-geo-rust pt-6">
          <h2 className="text-[11px] font-sans font-black uppercase mb-4 text-geo-ink">
            Synthesis & Methods
          </h2>
          <p className="text-xs font-serif leading-relaxed text-geo-ink italic mb-6">
            Connecting physical micro-observations to massive geological events to support broader tectonic hypotheses.
          </p>
          <div className="bg-geo-ink text-white p-5 border border-geo-ink shadow-[3px_3px_0px_#8B7D6B]">
            <span className="text-[9px] uppercase tracking-widest font-sans opacity-70 block mb-4 border-b border-white/20 pb-2">Field Methods Applied</span>
            <ul className="text-[11px] font-sans space-y-3">
              {projectData.methods.map((method, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-geo-rust font-bold shrink-0 mt-0.5">■</span>
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div>
             <h2 className="text-[11px] font-sans font-black uppercase text-white bg-geo-ink inline-block px-3 py-1 self-start">
               Interpretations
             </h2>
          </div>
          <div className="grid gap-6">
            {projectData.interpretations.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col sm:flex-row border border-geo-ink bg-[#F9F8F6] shadow-[4px_4px_0px_#DED9D1]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-1 p-5 border-b sm:border-b-0 sm:border-r border-geo-ink relative bg-white">
                  <div className="absolute top-0 left-0 w-full h-1 bg-geo-sand"></div>
                  <div className="flex items-center gap-2 mb-3 mt-1">
                    <span className="text-[9px] uppercase tracking-widest font-sans font-black text-geo-ink bg-geo-border px-1.5 py-0.5">Observation</span>
                  </div>
                  <p className="text-xs font-serif text-geo-ink leading-relaxed">{item.observation}</p>
                </div>
                
                <div className="flex-1 p-5 relative overflow-hidden group border-r-4 border-geo-olive">
                  <div className="absolute inset-0 bg-geo-olive/5 transform origin-left transition-transform group-hover:scale-x-100 scale-x-0 duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3 mt-1">
                      <span className="text-[9px] uppercase tracking-widest font-sans font-black text-white bg-geo-ink px-1.5 py-0.5">Deduction</span>
                    </div>
                    <p className="text-xs font-serif text-geo-ink italic font-medium leading-relaxed">{item.interpretation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
