import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const allContent: SearchResult[] = [
    // Services
    { title: "Business Restructuring", description: "Comprehensive restructuring solutions for businesses facing financial challenges", url: "/business-restructuring", category: "Service" },
    { title: "MCA Advisory", description: "Expert guidance on Merchant Cash Advance obligations and restructuring strategies", url: "/mca-advisory", category: "Service" },
    { title: "Creditor Coordination", description: "Professional creditor negotiation and coordination services", url: "/creditor-coordination", category: "Service" },
    { title: "Cash Flow Improvement", description: "Strategic cash flow optimization and working capital management", url: "/cash-flow-improvement", category: "Service" },
    { title: "Services Overview", description: "Complete overview of our business advisory and restructuring services", url: "/services", category: "Page" },
    
    // Pages
    { title: "About REgroup Partners", description: "21+ years of experience in business restructuring and financial advisory", url: "/about", category: "Page" },
    { title: "Our Team", description: "Meet our experienced team of business restructuring professionals", url: "/team", category: "Page" },
    { title: "Frequently Asked Questions", description: "Common questions about business restructuring, MCA, and creditor coordination", url: "/faq", category: "FAQ" },
    { title: "Contact Us", description: "Get in touch for a confidential business review and consultation", url: "/contact", category: "Page" },
    { title: "Insights & Articles", description: "Expert insights on business restructuring and financial recovery", url: "/insights", category: "Page" },
    
    // FAQ Topics
    { title: "What is business restructuring?", description: "Learn about the business restructuring process and how it can help your company", url: "/faq", category: "FAQ" },
    { title: "MCA Obligations Help", description: "Understanding and managing Merchant Cash Advance obligations", url: "/faq", category: "FAQ" },
    { title: "Creditor Negotiation Process", description: "How we coordinate with creditors on your behalf", url: "/faq", category: "FAQ" },
    { title: "Financial Advisory Services", description: "Comprehensive financial strategy and advisory support", url: "/services", category: "Service" },
  ];

  const suggestedKeywords = [
    "Business Restructuring",
    "MCA Advisory",
    "Creditor Coordination",
    "Cash Flow Improvement",
    "Financial Advisory",
    "Contact Us"
  ];

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = allContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleKeywordClick = (keyword: string) => {
    setSearchQuery(keyword);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 md:pt-32 px-4"
      onClick={onClose}
    >
      {/* Dark blurred overlay */}
      <div className="absolute inset-0 bg-[#0A192F]/95 backdrop-blur-md" />
      
      {/* Search Modal */}
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-200">
          <Search className="w-6 h-6 text-gray-400 flex-shrink-0" />
          <Input
            type="text"
            placeholder="Search services, pages, articles, FAQs…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            className="flex-1 border-0 focus-visible:ring-0 text-lg placeholder:text-gray-400"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="flex-shrink-0 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Suggested Keywords */}
        {searchQuery.length === 0 && (
          <div className="p-6 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-600 mb-3">Suggested Searches</p>
            <div className="flex flex-wrap gap-2">
              {suggestedKeywords.map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => handleKeywordClick(keyword)}
                  className="px-4 py-2 bg-gray-50 hover:bg-primary/10 hover:border-primary/20 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:text-primary transition-all"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {searchQuery.length > 0 && results.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-gray-500">No results found for "{searchQuery}"</p>
              <p className="text-sm text-gray-400 mt-2">Try searching for services, pages, or topics</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-600 mb-3 px-2">
                {results.length} result{results.length !== 1 ? "s" : ""} found
              </p>
              <div className="space-y-2">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.url}
                    onClick={onClose}
                    className="block p-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {result.title}
                          </h3>
                          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                            {result.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white border border-gray-300 rounded">ESC</kbd>
              to close
            </span>
          </div>
          <span className="hidden md:block">Click outside to close</span>
        </div>
      </div>
    </div>
  );
}