export function Footer() {
  return (
    <footer className="px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center py-6 sm:py-8 bg-[#E5E5E5] gap-4">
      <div className="text-[10px] sm:text-[9px] font-sans font-black uppercase tracking-widest text-geo-ink flex flex-col sm:flex-row sm:gap-6 items-center sm:items-start text-center">
        <span>GEOL351 Case Study</span>
        <span className="opacity-50 mt-1 sm:mt-0 font-bold">&copy; {new Date().getFullYear()} Field Report</span>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-white border-2 border-geo-ink text-[10px] font-sans font-black uppercase tracking-widest text-geo-ink hover:bg-geo-ink hover:text-white transition-colors hidden sm:block">
        <a href="https://github.com/YonathanHH/Kakanui_Geology">
          View Raw Data On GitHub
        </a>
        </button>
      </div>
    </footer>
  );
}
