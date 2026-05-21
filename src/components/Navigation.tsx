"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000] border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">R</span>
            </div>
            <span className="text-white font-semibold text-lg">
              Regroup Partners
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white/90 hover:text-white font-normal text-sm transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-white font-normal text-sm transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white/90 hover:text-white font-normal text-sm transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/insights"
              className="text-white/90 hover:text-white font-normal text-sm transition-colors duration-200"
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-accent text-white font-semibold text-sm rounded hover:bg-accent/90 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/10">
            <Link
              href="/"
              className="block px-4 py-2 text-white hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-white hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-white hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/insights"
              className="block px-4 py-2 text-white hover:text-accent transition-colors"
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