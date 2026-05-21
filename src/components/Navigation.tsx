"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className={`font-display text-2xl font-black uppercase tracking-tight transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Regroup Partners
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className={`font-semibold hover:text-blue-500 transition-colors uppercase tracking-wide text-sm ${
                isScrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`font-semibold hover:text-blue-500 transition-colors uppercase tracking-wide text-sm ${
                isScrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              Services
            </Link>
            <Link
              href="/insights"
              className={`font-semibold hover:text-blue-500 transition-colors uppercase tracking-wide text-sm ${
                isScrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-blue-500 text-white font-display font-bold rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl uppercase tracking-wide text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="font-semibold text-gray-700 hover:text-blue-500 transition-colors uppercase tracking-wide text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="font-semibold text-gray-700 hover:text-blue-500 transition-colors uppercase tracking-wide text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/insights"
                className="font-semibold text-gray-700 hover:text-blue-500 transition-colors uppercase tracking-wide text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Insights
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-blue-500 text-white font-display font-bold rounded-lg hover:bg-blue-600 transition-all text-center uppercase tracking-wide text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}