import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <SEO
        title="Business Restructuring Services | Regroup Partners"
        description="Comprehensive business restructuring, creditor coordination, cash flow improvement, and merchant cash advance advisory services from experienced financial advisors."
      />

      <Navigation />

      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 text-foreground">
                Business Restructuring & Financial Advisory Services
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Strategic solutions for businesses navigating financial complexity through restructuring, creditor coordination, and stabilization.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-accent">Core Service</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                  Business Restructuring
                </h2>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  Comprehensive restructuring advisory for businesses facing financial challenges, operational difficulties, or creditor pressure.
                </p>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  We develop strategic restructuring plans that address cash flow constraints, creditor obligations, and operational continuity while preserving business value and stakeholder relationships.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Our approach combines financial analysis, stakeholder coordination, and strategic planning to achieve sustainable stabilization outcomes.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-6">What We Provide</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Comprehensive financial assessment and restructuring strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Cash flow analysis and operational improvement planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Stakeholder communication and coordination throughout the process</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Implementation support and ongoing advisory guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="bg-card p-8 rounded-lg border border-border shadow-sm order-2 md:order-1">
                <h3 className="font-serif text-xl font-semibold mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Unified creditor coordination strategy across all obligations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Professional representation with lenders and financial stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Leveraging established relationships for favorable outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Reduced creditor pressure through strategic communication</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-accent">Specialized Service</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                  Creditor Coordination
                </h2>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  Professional coordination with banks, lenders, vendors, and other creditors on behalf of businesses navigating financial challenges.
                </p>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  We work diligently with all types of creditors, leveraging our longstanding relationships and industry reputation to facilitate productive dialogue and achieve workable solutions.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Our creditor coordination services help businesses manage multiple obligations while maintaining essential vendor relationships and preserving operational continuity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-accent">Financial Advisory</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                  Cash Flow Improvement
                </h2>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  Strategic advisory focused on improving operational cash flow through better working capital management, payment prioritization, and creditor coordination.
                </p>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  We analyze cash flow dynamics, identify improvement opportunities, and implement strategies to optimize available liquidity while meeting critical obligations.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Our cash flow advisory helps businesses stabilize operations, manage payment timing, and create sustainable financial rhythms that support ongoing viability.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-6">Focus Areas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Working capital optimization and payment prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Accounts receivable and collections acceleration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Vendor payment negotiation and timing management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Cash flow forecasting and scenario planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="bg-card p-8 rounded-lg border border-border shadow-sm order-2 md:order-1">
                <h3 className="font-serif text-xl font-semibold mb-6">MCA Services Include</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Multi-provider coordination and communication strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Daily remittance optimization and cash flow management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Negotiation of sustainable repayment structures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70">Balance preservation while maintaining operations</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-accent">Specialized Expertise</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                  Merchant Cash Advance Advisory
                </h2>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  Specialized advisory services for businesses dealing with merchant cash advance obligations, leveraging over 20 years of MCA industry experience.
                </p>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  As pioneers in the merchant cash advance industry, we understand the unique dynamics of MCA obligations and maintain professional relationships with providers nationwide.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  We help businesses navigate multiple MCA obligations while preserving cash flow, maintaining operations, and working toward sustainable resolutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-12 text-center text-foreground">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-semibold mb-3">How is business restructuring different from bankruptcy?</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Business restructuring focuses on stabilizing operations and coordinating with creditors outside of bankruptcy proceedings. We work to preserve business continuity through strategic planning, creditor coordination, and cash flow improvement rather than formal legal proceedings. Restructuring can often avoid bankruptcy while achieving financial stabilization.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-semibold mb-3">What types of creditors do you work with?</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We coordinate with all types of creditors including banks, merchant cash advance providers, equipment lenders, vendors, landlords, and other financial stakeholders. Our longstanding industry relationships and professional reputation enable productive dialogue across the full spectrum of creditor types.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-semibold mb-3">How long does the restructuring process typically take?</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Timelines vary based on the complexity of the situation, number of creditors involved, and specific circumstances. Initial stabilization often occurs within weeks, while comprehensive restructuring may unfold over several months. We provide realistic timeline expectations during the initial consultation phase.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-semibold mb-3">What makes your MCA advisory services unique?</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We have been pioneers in the merchant cash advance industry for over 20 years, developing deep expertise and professional relationships with MCA providers. This experience enables us to coordinate effectively with multiple advance providers, optimize daily remittances, and negotiate sustainable structures that other advisors cannot achieve.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-semibold mb-3">Do you work with attorneys and other professional advisors?</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Yes, we frequently coordinate with attorneys, accountants, and other professional advisors to provide comprehensive support. Our relationships with restructuring attorneys and financial professionals enable seamless collaboration when additional expertise is needed for specific aspects of a restructuring engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Schedule a Confidential Consultation
              </h2>
              <p className="text-xl text-foreground/70 mb-12 leading-relaxed">
                Discuss your business situation with our advisory team to explore restructuring strategies and potential solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
                >
                  Request Confidential Review
                </Link>
                <Link
                  href="/insights"
                  className="inline-flex items-center justify-center px-8 py-4 bg-background border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  Read Our Insights
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