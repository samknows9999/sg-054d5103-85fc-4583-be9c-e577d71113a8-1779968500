import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const publications = [
  {
    name: "CEO Times",
    title: "CEO Times",
    url: "https://ceotimes.com/regroup-partners-floridas-business-debt-turnaround-experts/"
  },
  {
    name: "USA News",
    title: "USA NEWS",
    url: "https://usanews.com/newsroom/regroup-partners-your-path-to-financial-stability-and-business-transformation"
  },
  {
    name: "Today US",
    title: "TODAY US",
    url: "https://todayus.com/regroup-partners-the-trusted-ally-for-small-business-restructuring-success"
  },
  {
    name: "Miami Highlight",
    title: "MIAMI HIGHLIGHT",
    url: "https://miamihighlight.com/regroup-partners-the-turnaround-firm-built-on-trust/"
  },
  {
    name: "BizRecap",
    title: "BizRecap",
    url: "https://bizrecap.com/regroup-partners-empowering-small-and-medium-businesses-with-restructuring-expertise/"
  }
];

export function AsSeenOn() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            As Seen On
          </h3>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Featured by respected business, finance, and industry publications recognizing Regroup Partners' expertise in business restructuring, creditor coordination, and financial advisory services.
          </p>
        </div>
        
        {/* Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 mb-12">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center"
              aria-label={`Read feature in ${pub.name}`}
            >
              <div className="px-6 py-4 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                {/* CEO Times - Elegant Serif */}
                {pub.name === "CEO Times" && (
                  <svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="80" y="30" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="600" fill="#0A192F" letterSpacing="2">
                      CEO TIMES
                    </text>
                    <line x1="20" y1="40" x2="140" y2="40" stroke="#8B1538" strokeWidth="2"/>
                  </svg>
                )}
                
                {/* USA News - Bold Patriotic */}
                {pub.name === "USA News" && (
                  <svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="80" y="28" textAnchor="middle" fontFamily="sans-serif" fontSize="22" fontWeight="800" fill="#1e3a8a" letterSpacing="1">
                      USA NEWS
                    </text>
                    <rect x="40" y="35" width="80" height="3" fill="#dc2626"/>
                  </svg>
                )}
                
                {/* Today US - Modern Clean */}
                {pub.name === "Today US" && (
                  <svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="80" y="28" textAnchor="middle" fontFamily="sans-serif" fontSize="20" fontWeight="700" fill="#0A192F" letterSpacing="1.5">
                      TODAY US
                    </text>
                    <circle cx="30" cy="25" r="4" fill="#8B1538"/>
                    <circle cx="130" cy="25" r="4" fill="#8B1538"/>
                  </svg>
                )}
                
                {/* Miami Highlight - Coastal Elegant */}
                {pub.name === "Miami Highlight" && (
                  <svg width="180" height="50" viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="90" y="22" textAnchor="middle" fontFamily="serif" fontSize="16" fontWeight="600" fill="#0A192F" letterSpacing="3">
                      MIAMI
                    </text>
                    <text x="90" y="38" textAnchor="middle" fontFamily="serif" fontSize="16" fontWeight="400" fill="#0ea5e9" letterSpacing="3">
                      HIGHLIGHT
                    </text>
                  </svg>
                )}
                
                {/* BizRecap - Business Professional */}
                {pub.name === "BizRecap" && (
                  <svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="80" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="24" fontWeight="700" fill="#0A192F" letterSpacing="0">
                      Biz<tspan fill="#8B1538">Recap</tspan>
                    </text>
                  </svg>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* View All Media Mentions Button */}
        <div className="text-center mt-8">
          <Link href="/media-mentions">
            <Button
              variant="outline"
              className="border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white px-8 py-6 text-base font-semibold">
              View All Media Mentions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}