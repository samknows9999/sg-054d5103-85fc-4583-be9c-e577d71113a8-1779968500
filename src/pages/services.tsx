import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Building2, Users, TrendingUp, Shield } from "lucide-react";

export default function Services() {
  return (
    <>
      <SEO
        title="Business Restructuring Services | Regroup Partners"
        description="Comprehensive business restructuring, creditor coordination, cash flow improvement, and merchant cash advance advisory services from experienced professionals."
      />

      <Navigation />

      <main className="dark">
        {/* Hero Section */}
        <section className="relative bg-[#0F172A] text-white min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="max-w-5xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
                <span className="text-sm font-medium text-blue-400">Comprehensive Advisory Services</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-8">
                Strategic Business<br />Restructuring Services
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
                Expert guidance through financial complexity, creditor coordination, and operational stabilization with over two decades of proven experience.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="group bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
                  Business Restructuring
                </h3>
                <p className="text-slate-600 text-sm">
                  Strategic guidance to stabilize operations and achieve financial sustainability.
                </p>
              </div>

              <div className="group bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
                  Creditor Coordination
                </h3>
                <p className="text-slate-600 text-sm">
                  Expert management of relationships with banks, lenders, and stakeholders.
                </p>
              </div>

              <div className="group bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
                  Cash Flow Improvement
                </h3>
                <p className="text-slate-600 text-sm">
                  Proven strategies for improving operational cash flow and stability.
                </p>
              </div>

              <div className="group bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
                  MCA Advisory
                </h3>
                <p className="text-slate-600 text-sm">
                  Specialized merchant cash advance restructuring with 20+ years expertise.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                  Comprehensive Restructuring Advisory
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We develop strategic restructuring plans that address cash flow constraints, creditor obligations, and operational continuity while preserving business value and stakeholder relationships.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our approach combines financial analysis, stakeholder coordination, and strategic planning to achieve sustainable stabilization outcomes.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-6">What We Provide</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">Comprehensive financial assessment and restructuring strategy development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">Cash flow analysis and operational improvement planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">Stakeholder communication and coordination throughout the process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">Implementation support and ongoing advisory guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-20 md:py-32 bg-slate-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-16 text-center">
                Our Services in Detail
              </h2>

              <div className="space-y-12">
                <div className="bg-white p-8 rounded-xl border border-slate-200">
                  <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">Creditor Coordination</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Professional coordination with banks, lenders, vendors, and other creditors on behalf of businesses navigating financial challenges. We work diligently with all types of creditors, leveraging our longstanding relationships and industry reputation to facilitate productive dialogue.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our creditor coordination services help businesses manage multiple obligations while maintaining essential vendor relationships and preserving operational continuity.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-slate-200">
                  <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">Cash Flow Improvement</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Strategic advisory focused on improving operational cash flow through better working capital management, payment prioritization, and creditor coordination. We analyze cash flow dynamics, identify improvement opportunities, and implement strategies to optimize available liquidity.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our cash flow advisory helps businesses stabilize operations, manage payment timing, and create sustainable financial rhythms that support ongoing viability.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-slate-200">
                  <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">Merchant Cash Advance Advisory</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Specialized advisory services for businesses dealing with merchant cash advance obligations, leveraging over 20 years of MCA industry experience. As pioneers in the merchant cash advance industry, we understand the unique dynamics of MCA obligations.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    We help businesses navigate multiple MCA obligations while preserving cash flow, maintaining operations, and working toward sustainable resolutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-[#0F172A] text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Schedule a Confidential Consultation
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Discuss your business situation with our advisory team to explore restructuring strategies.
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