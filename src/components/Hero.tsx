import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
  backgroundImage?: string;
}

export function Hero({ title, subtitle, breadcrumbs, backgroundImage }: HeroProps) {
  return (
    <section className="relative h-[500px] flex items-center overflow-hidden bg-[#1a1a1a]">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
        <nav className="flex items-center space-x-2 text-sm mb-6">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {crumb.href ? (
                <Link 
                  href={crumb.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-4 h-4 text-white/50 mx-2" />
              )}
            </div>
          ))}
        </nav>
        
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight max-w-4xl">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/80 mt-6 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}