import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";

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
        title="Insights & Expertise | Regroup Partners"
        description="Thought leadership on business restructuring, financial stabilization, merchant cash advance advisory, and creditor coordination strategies."
      />

      <Navigation />

      <main>
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-background">
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full mb-8">
                <span className="text-sm font-semibold text-accent">Thought Leadership</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-8 text-foreground leading-tight">
                Insights & Expertise
              </h1>

              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                Strategic perspectives on business restructuring, financial stabilization, and creditor coordination from our advisory team.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Link
                  key={index}
                  href="/insights"
                  className="group relative block"
                >
                  <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                    <div className="p-8">
                      <div className="text-sm font-semibold text-accent mb-4">{article.category}</div>
                      <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-foreground/70 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                        Read Article
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Topics & Expertise
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Deep knowledge across critical areas of business restructuring and financial advisory.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="text-4xl font-serif font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">01</div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                    Business Restructuring
                  </h3>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="text-4xl font-serif font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">02</div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                    Creditor Coordination
                  </h3>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="text-4xl font-serif font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">03</div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                    MCA Advisory
                  </h3>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="text-4xl font-serif font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">04</div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                    Financial Strategy
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
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