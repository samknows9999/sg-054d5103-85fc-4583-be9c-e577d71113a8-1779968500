import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
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

      <main className="pt-16">
        <Hero
          title="Experience, Relationships, Results"
          subtitle="A boutique business advisory firm bringing two decades of hands-on restructuring expertise and deep industry relationships to complex financial challenges."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About" }
          ]}
          backgroundImage="/generated/about-team-advisory.png"
        />

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
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

        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-xl hover:border-accent/30 transition-all">
                <div className="text-5xl font-serif font-bold text-primary mb-2">21+</div>
                <div className="text-foreground/70">Years of Experience</div>
              </div>
              <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-xl hover:border-accent/30 transition-all">
                <div className="text-5xl font-serif font-bold text-primary mb-2">100%</div>
                <div className="text-foreground/70">Women-Owned & Operated</div>
              </div>
              <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-xl hover:border-accent/30 transition-all">
                <div className="text-5xl font-serif font-bold text-primary mb-2">20+</div>
                <div className="text-foreground/70">Years MCA Industry</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Our Approach
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Strategic advisory grounded in experience, relationships, and hands-on involvement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 hover:shadow-xl hover:border-accent/30 transition-all">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                  Creditor Coordination
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  We work directly with banks, lenders, vendors, and all types of creditors to negotiate fair restructuring terms.
                </p>
              </div>

              <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 hover:shadow-xl hover:border-accent/30 transition-all">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                  Industry Relationships
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Our longstanding relationships with lenders, attorneys, and restructuring professionals add significant value to client engagements.
                </p>
              </div>

              <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 hover:shadow-xl hover:border-accent/30 transition-all">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                  Hands-On Involvement
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Direct, personal involvement in every engagement—not a call center or outsourced service provider.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
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

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
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