"use client";
import { motion } from "motion/react";
import { projectData } from "@/data/projectData";

export function FieldEvidence() {
  return (
    <section id="evidence" className="p-6 sm:p-8 border-b border-geo-ink bg-white">
      <div className="border border-geo-ink p-6 lg:p-8 bg-geo-bg shadow-[6px_6px_0px_#DED9D1]">
        <div className="mb-6 border-b border-geo-ink pb-4">
          <h2 className="text-[11px] font-sans font-black uppercase text-white bg-geo-ink inline-block px-3 py-1">
            Outcrop Observations
          </h2>
          <p className="text-xs font-serif leading-relaxed text-geo-ink italic mt-3 max-w-2xl">
            Key lithological observations mapping the volcanic history and sedimentary unconformities of the Oamaru region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.evidence.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#E5E5E5] border border-[#CCCCCC] p-5 flex flex-col relative group hover:border-geo-ink transition-colors"
            >
              <div className="absolute top-0 right-0 bg-geo-ink text-white px-2 py-1 text-[9px] font-sans font-bold uppercase tracking-widest shadow-sm">
                Fig 0{index + 1}
              </div>
              
              <div className="mb-3 mt-4">
                <h3 className="font-serif text-sm font-black text-geo-ink uppercase tracking-tight mb-2 leading-tight pr-12">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-[9px] uppercase font-sans font-bold text-geo-ink tracking-widest mt-2 border-b border-geo-ink/20 pb-2">
                  <span className="opacity-70">{item.location}</span>
                  <span className="opacity-30">|</span>
                  <span className="text-geo-rust">{item.type}</span>
                </div>
              </div>
              
              <div className="w-full aspect-[4/3] bg-white border border-geo-ink border-b-4 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-geo-rust transition-colors mt-2 mb-4">
                <img 
                  src=[
					"/images/fig1.png",
					"/images/fig2.png",
					"/images/fig3.jpg",
					"/images/fig4.jpg"
					];  
                  alt="Outcrop placeholder" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="relative z-10 bg-geo-ink text-white px-2 py-1 text-[9px] font-sans font-bold uppercase tracking-widest mix-blend-difference">
                  Add Picture Here
                </div>
              </div>

              <p className="text-[11px] font-sans leading-relaxed text-geo-ink font-medium mt-1">
                "{item.description}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
