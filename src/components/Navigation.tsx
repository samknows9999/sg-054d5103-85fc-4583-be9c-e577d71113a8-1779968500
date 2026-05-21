"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-serif font-bold text-xl">R</span>
              </div>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Regroup Partners
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground/70 hover:text-foreground font-medium transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-foreground/70 hover:text-foreground font-medium transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/services"
              className="text-foreground/70 hover:text-foreground font-medium transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/insights"
              className="text-foreground/70 hover:text-foreground font-medium transition-colors duration-300 relative group"
            >
              Insights
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="relative group"
            >
              <div className="absolute inset-0 bg-accent/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative px-6 py-2.5 bg-gradient-to-r from-accent/10 to-accent/20 backdrop-blur-sm border border-accent/30 text-accent font-semibold rounded-lg hover:from-accent/20 hover:to-accent/30 hover:border-accent/50 transition-all duration-300">
                Contact
              </div>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-background/95 backdrop-blur-xl border-t border-border/50">
            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/insights"
              className="block px-4 py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-accent font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}