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

      <main className="dark">
        {/* Hero Section */}
        <section className="relative bg-[#0F172A] text-white min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="max-w-5xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
                <span className="text-sm font-medium text-blue-400">Thought Leadership</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-8">
                Insights &<br />Expertise
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
                Strategic perspectives on business restructuring, financial stabilization, and creditor coordination from our advisory team.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Link
                  key={index}
                  href="/insights"
                  className="group block bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="text-sm font-semibold text-blue-600 mb-4">{article.category}</div>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-20 md:py-32 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                Topics & Expertise
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Deep knowledge across critical areas of business restructuring and financial advisory.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
                <div className="text-4xl font-display font-bold text-blue-600 mb-3">01</div>
                <h3 className="font-display text-xl font-bold text-[#0F172A]">
                  Business Restructuring
                </h3>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
                <div className="text-4xl font-display font-bold text-blue-600 mb-3">02</div>
                <h3 className="font-display text-xl font-bold text-[#0F172A]">
                  Creditor Coordination
                </h3>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
                <div className="text-4xl font-display font-bold text-blue-600 mb-3">03</div>
                <h3 className="font-display text-xl font-bold text-[#0F172A]">
                  MCA Advisory
                </h3>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
                <div className="text-4xl font-display font-bold text-blue-600 mb-3">04</div>
                <h3 className="font-display text-xl font-bold text-[#0F172A]">
                  Financial Strategy
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-[#0F172A] text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Need Strategic Guidance?
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Our advisory team can help you navigate complex business restructuring and financial stabilization challenges.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 group"
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