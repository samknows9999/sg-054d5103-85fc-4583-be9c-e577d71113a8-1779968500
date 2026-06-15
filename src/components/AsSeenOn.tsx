import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const publications = [
  {
    name: "CEO Times",
    url: "https://ceotimes.com/regroup-partners-floridas-business-debt-turnaround-experts/"
  },
  {
    name: "USA News",
    url: "https://usanews.com/newsroom/regroup-partners-your-path-to-financial-stability-and-business-transformation"
  },
  {
    name: "Today US",
    url: "https://todayus.com/regroup-partners-the-trusted-ally-for-small-business-restructuring-success"
  },
  {
    name: "Miami Highlight",
    url: "https://miamihighlight.com/regroup-partners-the-turnaround-firm-built-on-trust/"
  },
  {
    name: "BizRecap",
    url: "https://bizrecap.com/regroup-partners-empowering-small-and-medium-businesses-with-restructuring-expertise/"
  }
];

export function AsSeenOn() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <h3 className="text-center font-serif text-2xl md:text-3xl font-semibold text-foreground mb-12">
          As Seen On
        </h3>
        
        {/* Publications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-lg hover:bg-white transition-all duration-300 cursor-pointer">
                <Award className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm text-center text-foreground group-hover:text-primary transition-colors">
                  {pub.name}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/media-mentions">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-base font-semibold shadow-sm"
            >
              View All Media Mentions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}