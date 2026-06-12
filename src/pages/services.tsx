import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Handshake,
  DollarSign,
  BarChart3,
  FileText,
  Target,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { SEO } from "@/components/SEO";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <SEO 
        title="Business Restructuring & Financial Advisory Services | Regroup Partners"
        description="Comprehensive business restructuring, MCA advisory, creditor coordination, and cash flow improvement services. Expert financial guidance for businesses in transition."
        url="/services"
      />

      <Navigation />

      <main className="">
        <Hero
          title="Strategic Business Restructuring Services"
          subtitle="Expert guidance through financial complexity, creditor coordination, and operational stabilization with over two decades of proven experience."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services" }
          ]}
          backgroundImage="/generated/services-advisory.png"
        />

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
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
              <div className="space-y-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/generated/services-workspace.png"
                    alt="Modern office workspace"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all">
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
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 md:order-1 space-y-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/generated/services-advisory.png"
                    alt="Professional business consultant advisory"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all">
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

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
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
              <div className="space-y-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/generated/services-documents.png"
                    alt="Business documents and financial reports"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all">
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
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all">
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

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
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