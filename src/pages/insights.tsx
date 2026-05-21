import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      category: "Business Restructuring",
      title: "How Business Restructuring Improves Cash Flow",
      excerpt: "Strategic approaches to improving operational cash flow through creditor coordination, payment prioritization, and financial stabilization during business restructuring.",
      slug: "#",
    },
    {
      category: "MCA Advisory",
      title: "Understanding Merchant Cash Advance Restructuring",
      excerpt: "Expert guidance on navigating MCA obligations, coordinating with multiple advance providers, and achieving sustainable daily remittance structures.",
      slug: "#",
    },
    {
      category: "Financial Strategy",
      title: "Working With Creditors During Financial Pressure",
      excerpt: "Building productive relationships with lenders and creditors through transparent communication, professional coordination, and strategic engagement.",
      slug: "#",
    },
    {
      category: "Restructuring vs Bankruptcy",
      title: "Business Restructuring vs Bankruptcy: Key Differences",
      excerpt: "Understanding when business restructuring offers a path to stabilization outside of formal bankruptcy proceedings and the advantages of creditor coordination.",
      slug: "#",
    },
    {
      category: "Creditor Relations",
      title: "Managing Vendor and Lender Relationships",
      excerpt: "Strategies for maintaining essential vendor relationships and productive lender dialogue while navigating financial challenges and payment constraints.",
      slug: "#",
    },
    {
      category: "Financial Stabilization",
      title: "Financial Stabilization Strategies for Businesses",
      excerpt: "Comprehensive approaches to achieving financial stability through cash flow optimization, creditor coordination, and operational adjustments.",
      slug: "#",
    },
  ];

  return (
    <>
      <SEO
        title="Insights & Expertise | Regroup Partners"
        description="Thought leadership on business restructuring, financial stabilization, merchant cash advance advisory, and creditor coordination strategies."
      />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm">
                <span className="text-sm font-semibold text-blue-400 font-display">THOUGHT LEADERSHIP</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 text-white leading-[1.1] tracking-tight uppercase">
                INSIGHTS & <span className="text-blue-400">EXPERTISE</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                Strategic perspectives on business restructuring, financial stabilization, and creditor coordination from our advisory team
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Link
                  key={index}
                  href="/insights"
                  className="group relative block"
                >
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                    <div className="p-8">
                      <div className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wide font-display">{article.category}</div>
                      <h3 className="font-display text-xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-blue-600 font-display font-bold group-hover:gap-2 transition-all uppercase tracking-wide text-sm">
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide font-display">Expertise Areas</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tight">
                TOPICS & EXPERTISE
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Deep knowledge across critical areas of business restructuring and financial advisory
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="text-5xl font-display font-black text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300">01</div>
                  <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    Business Restructuring
                  </h3>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="text-5xl font-display font-black text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300">02</div>
                  <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    Creditor Coordination
                  </h3>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="text-5xl font-display font-black text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300">03</div>
                  <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    MCA Advisory
                  </h3>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="text-5xl font-display font-black text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300">04</div>
                  <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    Financial Strategy
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tight leading-[1.1]">
                NEED STRATEGIC GUIDANCE?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
                Our advisory team can help you navigate complex business restructuring and financial stabilization challenges
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-display font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 uppercase tracking-wide"
              >
                Request Confidential Review
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}