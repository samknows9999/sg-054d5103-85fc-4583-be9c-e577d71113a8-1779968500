import React from 'react';
import { Award, TrendingUp } from 'lucide-react';

export function AsSeenOn() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <h3 className="text-center font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10">
          As Seen On
        </h3>
        
        {/* Logos container */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          
          {/* U.S. Business */}
          <div className="flex items-center gap-2 select-none group cursor-pointer">
            <div className="bg-primary group-hover:bg-[#0A192F] transition-colors duration-300 text-white font-serif px-2 py-1 text-xl tracking-tight leading-none">
              U.S.
            </div>
            <span className="font-serif text-3xl font-medium tracking-tight text-primary group-hover:text-[#0A192F] transition-colors duration-300" style={{ color: "#000000" }}>
              Business
            </span>
          </div>

          {/* Daily Invest News */}
          <div className="flex flex-col items-start select-none group cursor-pointer">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-primary group-hover:text-[#0A192F] transition-colors duration-300 w-8 h-8" />
              <div className="flex flex-col">
                <span className="font-sans text-xl font-bold text-primary group-hover:text-[#0A192F] transition-colors duration-300 leading-none tracking-tight" style={{ color: "#000000" }}>
                  DAILY INVEST NEWS
                </span>
                <span className="text-[10px] text-primary/70 group-hover:text-[#0A192F]/70 transition-colors duration-300 tracking-wide uppercase mt-1">
                  Breaking News as it Happens
                </span>
              </div>
            </div>
          </div>

          {/* USA News Influencer */}
          <div className="flex flex-col items-center justify-center relative select-none group cursor-pointer">
            <div className="absolute inset-0 border border-primary/40 group-hover:border-[#0A192F]/40 transition-colors duration-300 rounded-full scale-[1.3] border-dashed"></div>
            <Award className="text-primary group-hover:text-[#0A192F] transition-colors duration-300 w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold text-primary group-hover:text-[#0A192F] transition-colors duration-300 tracking-tight">USA NEWS</span>
            <div className="bg-primary group-hover:bg-[#0A192F] transition-colors duration-300 text-white text-[8px] font-bold px-2 py-0.5 rounded-full mt-0.5">
              VERIFIED
            </div>
          </div>

          {/* Digital Journal */}
          <div className="flex items-center gap-1.5 select-none group cursor-pointer">
            <div className="w-4 h-6 bg-primary group-hover:bg-[#0A192F] transition-colors duration-300"></div>
            <span className="font-serif text-2xl font-bold tracking-tighter text-primary group-hover:text-[#0A192F] transition-colors duration-300 uppercase" style={{ color: "#000000" }}>
              Digital Journal
            </span>
          </div>

        </div>
      </div>
    </section>);

}