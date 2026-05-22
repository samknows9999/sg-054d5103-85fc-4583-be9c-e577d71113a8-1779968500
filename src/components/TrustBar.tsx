import React from 'react';
import { Phone } from 'lucide-react';

export function TrustBar() {
  return (
    <div className="bg-[#050505] text-white py-4 md:py-5 border-y border-white/10 relative overflow-hidden">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex items-center justify-center gap-3 md:gap-6 w-full md:w-auto">
          <span className="tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold text-white/90">
            Trust
          </span>
          <span className="text-primary text-xs">•</span>
          <span className="tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold text-white/90">
            Commitment
          </span>
          <span className="text-primary text-xs">•</span>
          <span className="tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold text-white/90">
            Success
          </span>
        </div>
        
        <a 
          href="tel:9548334958" 
          className="flex items-center justify-center gap-3 hover:text-white group transition-all text-sm md:text-sm font-medium text-white/80 w-full md:w-auto"
        >
          <div className="w-8 h-8 rounded-full bg-primary border border-primary flex items-center justify-center transition-all shadow-sm">
            <Phone className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="tracking-widest">(954) 833-4958</span>
        </a>
      </div>
    </div>
  );
}