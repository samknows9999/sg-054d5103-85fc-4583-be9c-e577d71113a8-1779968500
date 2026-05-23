"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);

      // Hide header when scrolling down past 80px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full flex flex-col transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <nav className={`w-full relative transition-all duration-300 ${scrolled ? "bg-[#061124]/95 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-300">
            
            <div className="flex items-center gap-10 lg:gap-14">
              <Link href="/" className="flex items-center group">
                <img
                  src="/logo.jpg"
                  alt="Regroup Partners"
                  className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-10 md:h-12" : "h-12 md:h-14"}`} />
              </Link>

              <div className="hidden md:flex items-center gap-8">
                
                {/* Dropdown for About */}
                <div className="relative group py-6">
                  <Link
                    href="/about"
                    className="text-[15px] font-medium text-white/80 hover:text-white transition-all flex items-center gap-1.5 group-hover:opacity-100">
                    
                    About
                    <ChevronDown className="w-3.5 h-3.5 text-white/60 group-hover:text-white group-hover:rotate-180 transition-all duration-300" />
                  </Link>
                  <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-[#061124]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2 overflow-hidden flex flex-col gap-1">
                      <Link href="/about" className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                        Our Company
                      </Link>
                      <Link href="/about" className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                        Why Choose Us
                      </Link>
                      <Link href="/faq" className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                        FAQ
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Dropdown for Services */}
                <div className="relative group py-6">
                  <Link
                    href="/services"
                    className="text-[15px] font-medium text-white/80 hover:text-white transition-all flex items-center gap-1.5 group-hover:opacity-100">
                    
                    Services
                    <ChevronDown className="w-3.5 h-3.5 text-white/60 group-hover:text-white group-hover:rotate-180 transition-all duration-300" />
                  </Link>
                  <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-[#061124]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2 overflow-hidden flex flex-col gap-1">
                      <Link href="/business-restructuring" className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                        Business Restructuring
                      </Link>
                      <Link href="/creditor-coordination" className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                        Creditor Coordination
                      </Link>
                      <Link href="/cash-flow-improvement" className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                        Cash Flow Improvement
                      </Link>
                      <Link href="/mca-advisory" className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                        MCA Advisory
                      </Link>
                      <div className="h-px bg-white/10 my-1 mx-2"></div>
                      <Link href="/services" className="block px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-all">
                        All Advisory Services
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/team"
                  className="text-[15px] font-medium text-white/80 hover:text-white transition-colors py-6">
                  
                  Our Team
                </Link>
                <Link
                  href="/insights"
                  className="text-[15px] font-medium text-white/80 hover:text-white transition-colors py-6">
                  
                  Insights
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/contact"
                className="text-[15px] font-medium text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
              <a
                href="tel:954-833-4958"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full transition-all duration-300 text-[15px] font-medium shadow-sm">
                Log in
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-[#ff4a5a] text-white px-6 py-2 rounded-full hover:bg-[#ff4a5a]/90 transition-all duration-300 text-[15px] font-medium shadow-sm">
                Get started for Free
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu">
              
              {isMobileMenuOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>

          {isMobileMenuOpen &&
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#061124] border-t border-white/10 py-4 shadow-xl">
              <Link
              href="/"
              className="block px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors">
              
                Home
              </Link>
              
              <div className="bg-white/5 py-2 border-y border-white/5">
                <Link
                href="/about"
                className="block px-6 py-2 text-sm font-medium text-white hover:text-accent transition-colors">
                
                  About
                </Link>
                <Link
                href="/about"
                className="block px-6 py-2 text-sm font-medium text-white/70 hover:text-accent transition-colors pl-10">
                
                  — Our Company
                </Link>
                <Link
                href="/about"
                className="block px-6 py-2 text-sm font-medium text-white/70 hover:text-accent transition-colors pl-10">
                
                  — Why Choose Us
                </Link>
                <Link
                href="/faq"
                className="block px-6 py-2 text-sm font-medium text-white/70 hover:text-accent transition-colors pl-10">
                
                  — FAQ
                </Link>
              </div>

              <div className="bg-white/5 py-2 border-b border-white/5">
                <Link
                href="/services"
                className="block px-6 py-2 text-sm font-medium text-white hover:text-accent transition-colors">
                
                  Services Overview
                </Link>
                <Link
                href="/business-restructuring"
                className="block px-6 py-2 text-sm font-medium text-white/70 hover:text-accent transition-colors pl-10">
                
                  — Business Restructuring
                </Link>
                <Link
                href="/creditor-coordination"
                className="block px-6 py-2 text-sm font-medium text-white/70 hover:text-accent transition-colors pl-10">
                
                  — Creditor Coordination
                </Link>
                <Link
                href="/cash-flow-improvement"
                className="block px-6 py-2 text-sm font-medium text-white/70 hover:text-accent transition-colors pl-10">
                
                  — Cash Flow Improvement
                </Link>
                <Link
                href="/mca-advisory"
                className="block px-6 py-2 text-sm font-medium text-white/70 hover:text-accent transition-colors pl-10">
                
                  — MCA Advisory
                </Link>
              </div>
              <Link
              href="/team"
              className="block px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors">
              
                Our Team
              </Link>
              <Link
              href="/insights"
              className="block px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors">
              
                Insights
              </Link>
              <Link
              href="/contact"
              className="block px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors">
              
                Contact
              </Link>
              <a
              href="tel:954-833-4958"
              className="flex items-center justify-center gap-2 px-6 py-4 mt-2 text-[15px] font-medium text-white bg-[#ff4a5a] hover:bg-[#ff4a5a]/90 transition-colors">
                Get started for Free
              </a>
            </div>
          }
        </div>
      </nav>
    </header>);

}