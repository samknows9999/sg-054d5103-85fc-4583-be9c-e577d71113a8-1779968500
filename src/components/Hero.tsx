import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: {label: string;href?: string;}[];
  backgroundImage?: string;
}

export function Hero({ title, subtitle, breadcrumbs, backgroundImage }: HeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 md:pt-40 overflow-hidden bg-[#061124]">
      {backgroundImage &&
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: `url(${backgroundImage})` }} />

      }
      
      {/* Top gradient to ensure header text is always visible regardless of image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/95 via-[#030914]/40 to-transparent h-48" />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full mt-8">
        <nav className="flex items-center space-x-2 text-sm mb-8">
          {breadcrumbs.map((crumb, index) =>
          <div key={index} className="flex items-center">
              {crumb.href ?
            <Link
              href={crumb.href}
              className="text-gray-400 hover:text-white transition-colors tracking-wide font-medium">
              
                  {crumb.label}
                </Link> :

            <span className="text-white tracking-wide font-medium">{crumb.label}</span>
            }
              {index < breadcrumbs.length - 1 &&
            <ChevronRight className="w-4 h-4 text-gray-600 mx-3" />
            }
            </div>
          )}
        </nav>
        
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-4xl shadow-sm">Business Debt Relief & Business Restructuring Specialists

        </h1>
        
        {subtitle &&
        <p className="text-xl md:text-2xl text-gray-300 mt-8 max-w-3xl leading-relaxed font-light">
            {subtitle}
          </p>
        }
      </div>
    </section>);

}