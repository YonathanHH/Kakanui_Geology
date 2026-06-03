"use client";
import { projectData } from "@/data/projectData";

export function Reflection() {
  return (
    <section className="p-6 sm:p-8 border-b border-geo-ink flex justify-center py-16 sm:py-24 relative overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/end.jpeg" 
          alt="Geological Background Placeholder" 
          className="w-full h-full object-cover grayscale opacity-65"
        />
        <div className="absolute inset-0 bg-geo-bg/80 mix-blend-normal"></div>
      </div>

      <div className="max-w-2xl text-center flex flex-col items-center relative z-10">
        <div className="flex gap-1.5 mb-8">
          <div className="w-1.5 h-1.5 bg-geo-rust"></div>
          <div className="w-1.5 h-1.5 bg-geo-olive"></div>
          <div className="w-1.5 h-1.5 bg-geo-sand"></div>
        </div>
        <p className="font-serif text-lg sm:text-[22px] text-geo-ink leading-relaxed italic font-bold mb-10 bg-[#F5F2ED] border-2 border-geo-ink p-8 shadow-[6px_6px_0px_#DED9D1]">
          "{projectData.reflection}"
        </p>
        <div className="flex items-center gap-4 bg-geo-ink text-white px-4 py-1">
          <span className="font-sans font-black text-[9px] uppercase tracking-widest">End of Report</span>
        </div>
      </div>
    </section>
  );
}
