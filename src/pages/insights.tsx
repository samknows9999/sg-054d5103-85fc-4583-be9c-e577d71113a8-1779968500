import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";

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
        description="Thought leadership on business restructuring, financial stabilization, merchant cash advance advisory, and creditor coordination strategies from experienced professionals."
      />

      <Navigation />

      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 text-foreground">
                Insights & Expertise
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Thought leadership on business restructuring, financial stabilization, and creditor coordination strategies from our advisory team.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article key={index} className="group bg-card rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="p-8">
                    <div className="text-sm font-semibold text-accent mb-4">{article.category}</div>
                    <h2 className="font-serif text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link href={article.slug} className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                      Read Article
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-12 text-center text-foreground">
                Topics We Cover
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-semibold mb-4">Business Restructuring</h3>
                  <ul className="space-y-3 text-foreground/70">
                    <li>• Strategic restructuring approaches</li>
                    <li>• Cash flow optimization strategies</li>
                    <li>• Operational continuity planning</li>
                    <li>• Stakeholder communication best practices</li>
                  </ul>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-semibold mb-4">Creditor Coordination</h3>
                  <ul className="space-y-3 text-foreground/70">
                    <li>• Multi-creditor negotiation strategies</li>
                    <li>• Lender relationship management</li>
                    <li>• Payment prioritization frameworks</li>
                    <li>• Communication protocols with creditors</li>
                  </ul>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-semibold mb-4">Merchant Cash Advance</h3>
                  <ul className="space-y-3 text-foreground/70">
                    <li>• MCA industry dynamics and trends</li>
                    <li>• Multi-provider coordination strategies</li>
                    <li>• Daily remittance optimization</li>
                    <li>• Sustainable MCA restructuring approaches</li>
                  </ul>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-semibold mb-4">Financial Strategy</h3>
                  <ul className="space-y-3 text-foreground/70">
                    <li>• Working capital management</li>
                    <li>• Cash flow forecasting techniques</li>
                    <li>• Financial stabilization planning</li>
                    <li>• Strategic advisory best practices</li>
                  </ul>
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