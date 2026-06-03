"use client";
import { Mountain } from "lucide-react";

export function Navbar() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-geo-ink pb-4 mx-6 sm:mx-8 mt-8 mb-6">
      <div className="flex flex-col mb-4 sm:mb-0">
        <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold opacity-60 text-geo-ink">Project Code: GEOL351</span>
        <a href="#" className="flex items-center gap-2 mt-1">
          <h1 className="text-3xl font-serif font-black tracking-tight leading-none uppercase text-geo-ink">
            Oamaru Area
          </h1>
        </a>
      </div>
      <div className="flex gap-8 text-[11px] font-sans uppercase tracking-widest hidden sm:flex">
        <nav className="flex items-center gap-8">
          <a href="#overview" className="flex flex-col group">
            <span className="opacity-40 transition-opacity group-hover:opacity-100 text-geo-ink">Section</span>
            <span className="font-bold text-geo-rust">Overview</span>
          </a>
          <a href="#story" className="flex flex-col group">
            <span className="opacity-40 transition-opacity group-hover:opacity-100 text-geo-ink">Section</span>
            <span className="font-bold text-geo-rust">Story</span>
          </a>
          <a href="#evidence" className="flex flex-col group">
            <span className="opacity-40 transition-opacity group-hover:opacity-100 text-geo-ink">Section</span>
            <span className="font-bold text-geo-rust">Evidence</span>
          </a>
          <a href="#explore" className="bg-geo-ink text-geo-bg px-3 py-1.5 font-bold uppercase transition-colors hover:bg-geo-rust text-[9px]">
            Explore Project
          </a>
        </nav>
      </div>
    </header>
  );
}
