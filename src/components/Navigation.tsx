"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex flex-col shadow-md">
      <nav className="bg-[#000000] border-b border-white/10 w-full relative">
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

            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-white hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-white hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-white hover:text-accent transition-colors"
              >
                Services
              </Link>
              <Link
                href="/team"
                className="text-sm font-medium text-white hover:text-accent transition-colors"
              >
                Our Team
              </Link>
              <Link
                href="/insights"
                className="text-sm font-medium text-white hover:text-accent transition-colors"
              >
                Insights
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-white hover:text-accent transition-colors"
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
            <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 py-4 shadow-xl">
              <Link
                href="/"
                className="block px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/team"
                className="block px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
              >
                Our Team
              </Link>
              <Link
                href="/insights"
                className="block px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
              >
                Insights
              </Link>
              <Link
                href="/contact"
                className="block px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}