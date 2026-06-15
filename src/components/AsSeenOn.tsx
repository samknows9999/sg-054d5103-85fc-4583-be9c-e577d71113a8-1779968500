import React from 'react';
import Image from 'next/image';

const publications = [
  {
    name: "CEO Times",
    logo: "/media/logo-ceo-times.png",
    url: "https://ceotimes.com/regroup-partners-floridas-business-debt-turnaround-experts/"
  },
  {
    name: "USA News",
    logo: "/media/logo-usa-news.png",
    url: "https://usanews.com/newsroom/regroup-partners-your-path-to-financial-stability-and-business-transformation"
  },
  {
    name: "Today US",
    logo: "/media/logo-today-us.png",
    url: "https://todayus.com/regroup-partners-the-trusted-ally-for-small-business-restructuring-success"
  },
  {
    name: "Miami Highlight",
    logo: "/media/logo-miami-highlight.png",
    url: "https://miamihighlight.com/regroup-partners-the-turnaround-firm-built-on-trust/"
  },
  {
    name: "BizRecap",
    logo: "/media/logo-bizrecap.png",
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
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={`Read feature in ${pub.name}`}
            >
              <div className="w-32 md:w-40 lg:w-48 h-16 md:h-20 relative grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
                <Image
                  src={pub.logo}
                  alt={`${pub.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}