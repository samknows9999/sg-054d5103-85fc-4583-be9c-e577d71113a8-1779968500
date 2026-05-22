import React from 'react';
import { Award, TrendingUp } from 'lucide-react';

export function AsSeenOn() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <h3 className="text-center font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10">
          As Seen On
        </h3>
        
        {/* Logos container with a professional greyscale-to-color hover effect */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          
          {/* U.S. Business */}
          <div className="flex items-center gap-2 select-none">
            <div className="bg-[#FF0000] text-white font-serif px-2 py-1 text-xl tracking-tight leading-none">
              U.S.
            </div>
            <span className="font-serif text-3xl font-medium tracking-tight text-black">
              Business
            </span>
          </div>

          {/* Daily Invest News */}
          <div className="flex flex-col items-start select-none">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-[#0055A4] w-8 h-8" />
              <div className="flex flex-col">
                <span className="font-sans text-xl font-bold text-gray-800 leading-none tracking-tight">
                  DAILY INVEST NEWS
                </span>
                <span className="text-[10px] text-gray-500 tracking-wide uppercase mt-1">
                  Breaking News as it Happens
                </span>
              </div>
            </div>
          </div>

          {/* USA News Influencer */}
          <div className="flex flex-col items-center justify-center relative select-none">
            <div className="absolute inset-0 border border-gray-300 rounded-full scale-[1.3] border-dashed"></div>
            <Award className="text-[#002B7F] w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold text-[#002B7F] tracking-tight">USA NEWS</span>
            <div className="bg-[#E31837] text-white text-[8px] font-bold px-2 py-0.5 rounded-full mt-0.5">
              VERIFIED
            </div>
          </div>

          {/* Digital Journal */}
          <div className="flex items-center gap-1.5 select-none">
            <div className="w-4 h-6 bg-[#E31837]"></div>
            <span className="font-serif text-2xl font-bold tracking-tighter text-black uppercase">
              Digital Journal
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}