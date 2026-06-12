import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, FileText, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { SEO } from "@/components/SEO";

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
      excerpt: "Building productive relationships with lenders and creditors through transparent communication, professional coordination, and strategic engagement during challenging periods.",
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
      excerpt: "Comprehensive approaches to achieving financial stability through cash flow optimization, creditor coordination, and operational adjustments during periods of financial pressure.",
      slug: "#",
    },
  ];

  return (
    <>
      <SEO 
        title="Business Restructuring Insights & Resources | Regroup Partners"
        description="Expert insights, articles, and resources on business restructuring, financial recovery, MCA obligations, and creditor coordination strategies from industry professionals."
        url="/insights"
      />

      <Navigation />

      <main className="">
        <Hero
          title="Insights & Expertise"
          subtitle="Strategic perspectives on business restructuring, financial stabilization, and creditor coordination from our advisory team."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Insights" }
          ]}
          backgroundImage="/generated/insights-editorial.png"
        />

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Link
                  key={index}
                  href="/insights"
                  className="group block bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all"
                >
                  <div className="p-8">
                    <div className="text-sm font-semibold text-accent mb-4">{article.category}</div>
                    <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-accent font-semibold">
                      Read Article
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Topics & Expertise
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Deep knowledge across critical areas of business restructuring and financial advisory.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-xl hover:border-accent/30 transition-all">
                <div className="text-4xl font-serif font-bold text-accent mb-3">01</div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  Business Restructuring
                </h3>
              </div>

              <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-xl hover:border-accent/30 transition-all">
                <div className="text-4xl font-serif font-bold text-accent mb-3">02</div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  Creditor Coordination
                </h3>
              </div>

              <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-xl hover:border-accent/30 transition-all">
                <div className="text-4xl font-serif font-bold text-accent mb-3">03</div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  MCA Advisory
                </h3>
              </div>

              <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-xl hover:border-accent/30 transition-all">
                <div className="text-4xl font-serif font-bold text-accent mb-3">04</div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  Financial Strategy
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Need Strategic Guidance?
              </h2>
              <p className="text-xl text-foreground/70 mb-12 leading-relaxed">
                Our advisory team can help you navigate complex business restructuring and financial stabilization challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
                >
                  Request Confidential Review
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-background border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}