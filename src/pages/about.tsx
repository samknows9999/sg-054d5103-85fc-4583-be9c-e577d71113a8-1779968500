import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function About() {
  return (
    <>
      <SEO
        title="About Regroup Partners | Business Restructuring Firm"
        description="Women-owned boutique business restructuring and financial advisory firm with 21+ years of experience in creditor coordination and financial stabilization."
      />

      <Navigation />

      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <span className="text-sm font-semibold text-accent">21+ Years Experience</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 text-foreground">
                Trusted Business Restructuring Advisors
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                A women-owned and operated professional business advisory firm specializing in financial restructuring, creditor coordination, and strategic business stabilization.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
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
              <div className="space-y-6">
                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <div className="text-4xl font-serif font-semibold text-accent mb-3">21+</div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Years of Experience</h3>
                  <p className="text-foreground/70">
                    Over two decades of hands-on restructuring and financial advisory experience
                  </p>
                </div>
                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <div className="text-4xl font-serif font-semibold text-accent mb-3">100%</div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Women-Owned & Operated</h3>
                  <p className="text-foreground/70">
                    Professional business advisory firm led by experienced restructuring specialists
                  </p>
                </div>
                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <div className="text-4xl font-serif font-semibold text-accent mb-3">20+</div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Years in MCA Industry</h3>
                  <p className="text-foreground/70">
                    Pioneers in merchant cash advance restructuring and creditor coordination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Our Approach
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We stand behind our clients through every stage of financial restructuring, bringing experience, relationships, and strategic expertise to complex situations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Creditor Coordination</h3>
                <p className="text-foreground/70">
                  We work diligently with all types of creditors, leveraging longstanding relationships to achieve favorable outcomes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Industry Relationships</h3>
                <p className="text-foreground/70">
                  Deep relationships with lenders, attorneys, and restructuring professionals built over 21+ years.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Hands-On Involvement</h3>
                <p className="text-foreground/70">
                  Direct, personal involvement in every engagement, coordinating with all stakeholders throughout the process.
                </p>
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