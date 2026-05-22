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
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link href="/" className="flex items-center group">
              <img 
                src="/logo.jpg" 
                alt="Regroup Partners" 
                className="h-14 md:h-16 w-auto object-contain"
              />
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
              
              {/* Dropdown for Services */}
              <div className="relative group py-2">
                <Link
                  href="/services"
                  className="text-sm font-medium text-white hover:text-accent transition-colors flex items-center gap-1"
                >
                  Services
                  <svg className="w-3 h-3 text-white/70 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-0 w-64 bg-[#0a0a0a] border border-white/10 rounded-b-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                  <Link href="/business-restructuring" className="block px-5 py-4 text-sm font-medium text-white/90 hover:text-accent hover:bg-white/5 border-b border-white/5 transition-colors">
                    Business Restructuring
                  </Link>
                  <Link href="/creditor-coordination" className="block px-5 py-4 text-sm font-medium text-white/90 hover:text-accent hover:bg-white/5 border-b border-white/5 transition-colors">
                    Creditor Coordination
                  </Link>
                  <Link href="/services" className="block px-5 py-4 text-sm font-medium text-white/90 hover:text-accent hover:bg-white/5 transition-colors">
                    All Advisory Services
                  </Link>
                </div>
              </div>

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
              <div className="bg-gray-900/50 py-2 border-y border-white/5">
                <Link
                  href="/services"
                  className="block px-6 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
                >
                  Services Overview
                </Link>
                <Link
                  href="/business-restructuring"
                  className="block px-6 py-2 text-sm font-medium text-white/70 hover:text-accent transition-colors pl-10"
                >
                  — Business Restructuring
                </Link>
                <Link
                  href="/creditor-coordination"
                  className="block px-6 py-2 text-sm font-medium text-white/70 hover:text-accent transition-colors pl-10"
                >
                  — Creditor Coordination
                </Link>
              </div>
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