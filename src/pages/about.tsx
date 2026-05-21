import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Regroup Partners"
        description="Women-owned boutique business advisory firm with 21+ years of experience in restructuring, creditor coordination, and merchant cash advance solutions."
      />

      <Navigation />

      <main>
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-background">
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full">
                  <span className="text-sm font-semibold text-accent">21+ Years Experience</span>
                </div>
                <div className="px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full">
                  <span className="text-sm font-semibold text-accent">Women-Owned</span>
                </div>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-8 text-foreground leading-tight">
                Experience, Relationships, Results
              </h1>

              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                A boutique business advisory firm bringing two decades of hands-on restructuring expertise and deep industry relationships to complex financial challenges.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/generated/about-team-advisory.png"
                    alt="Professional business advisory team meeting"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                  Experience That Matters
                </h2>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  For more than two decades, Regroup Partners has helped businesses navigate financial complexity through strategic restructuring, creditor coordination, and cash flow stabilization.
                </p>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  As a boutique advisory firm, we provide hands-on involvement in every engagement, bringing deep industry relationships and institutional-grade expertise to businesses facing financial challenges.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Our approach combines financial strategy, creditor coordination, and operational advisory to help businesses achieve sustainable stabilization and continuity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="text-5xl font-serif font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">21+</div>
                  <div className="text-foreground/70">Years of Experience</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="text-5xl font-serif font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-foreground/70">Women-Owned & Operated</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="text-5xl font-serif font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
                  <div className="text-foreground/70">Years MCA Industry</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Our Approach
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Strategic advisory grounded in experience, relationships, and hands-on involvement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-500">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                    Creditor Coordination
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We work directly with banks, lenders, vendors, and all types of creditors to negotiate fair restructuring terms.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-500">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                    Industry Relationships
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Our longstanding relationships with lenders, attorneys, and restructuring professionals add significant value to client engagements.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-500">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                    Hands-On Involvement
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Direct, personal involvement in every engagement—not a call center or outsourced service provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 text-foreground">
                Merchant Cash Advance Expertise
              </h2>
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Regroup Partners has been a pioneer in the merchant cash advance industry for over 20 years, developing deep expertise in MCA restructuring and creditor coordination.
                </p>
                <p>
                  We understand the unique dynamics of merchant cash advance obligations and maintain professional relationships with MCA providers, enabling us to coordinate effectively on behalf of our clients.
                </p>
                <p>
                  Our MCA advisory services include strategic coordination with multiple advance providers, cash flow optimization to manage daily remittances, and negotiation of sustainable repayment structures that preserve business operations.
                </p>
                <p>
                  This specialized experience, combined with our broader restructuring capabilities, positions us uniquely to help businesses navigate the complexities of merchant cash advance obligations while stabilizing their overall financial position.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Ready to Discuss Your Situation?
              </h2>
              <p className="text-xl text-foreground/70 mb-12 leading-relaxed">
                Schedule a confidential business review with our advisory team to explore restructuring options and strategic solutions.
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
                  View Our Services
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