import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <>
      <SEO
        title="Business Restructuring Services | Regroup Partners"
        description="Comprehensive business restructuring, creditor coordination, cash flow improvement, and merchant cash advance advisory services from experienced professionals."
      />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm">
                <span className="text-sm font-semibold text-blue-400 font-display">COMPREHENSIVE ADVISORY SERVICES</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 text-white leading-[1.1] tracking-tight uppercase">
                STRATEGIC BUSINESS <span className="text-blue-400">RESTRUCTURING SERVICES</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                Expert guidance through financial complexity, creditor coordination, and operational stabilization with over two decades of proven experience
              </p>
            </div>
          </div>
        </section>

        {/* Business Restructuring */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wide font-display">Core Service</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tight leading-[1.1]">
                  BUSINESS RESTRUCTURING
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Comprehensive restructuring advisory for businesses facing financial challenges, operational difficulties, or creditor pressure.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We develop strategic restructuring plans that address cash flow constraints, creditor obligations, and operational continuity while preserving business value and stakeholder relationships.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center text-blue-600 font-display font-bold hover:text-blue-700 transition-colors uppercase tracking-wide"
                >
                  Discuss Your Situation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="space-y-6">
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/generated/services-workspace.png"
                    alt="Modern office workspace"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                    <h3 className="font-display text-lg font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">What We Provide</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Comprehensive financial assessment and restructuring strategy development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Cash flow analysis and operational improvement planning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Stakeholder communication and coordination throughout the process</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creditor Coordination */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/generated/services-advisory.png"
                    alt="Professional business consultant advisory"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                    <h3 className="font-display text-lg font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">Key Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Unified creditor coordination strategy across all obligations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Professional representation with lenders and financial stakeholders</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Leveraging established relationships for favorable outcomes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wide font-display">Specialized Service</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tight leading-[1.1]">
                  CREDITOR COORDINATION
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Professional coordination with banks, lenders, vendors, and other creditors on behalf of businesses navigating financial challenges.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We work diligently with all types of creditors, leveraging our longstanding relationships and industry reputation to facilitate productive dialogue and achieve workable solutions.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center text-blue-600 font-display font-bold hover:text-blue-700 transition-colors uppercase tracking-wide"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cash Flow & MCA */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide font-display">Additional Services</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tight">
                FINANCIAL ADVISORY SERVICES
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <h3 className="font-display text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    Cash Flow Improvement
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Strategic advisory focused on improving operational cash flow through better working capital management, payment prioritization, and creditor coordination.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Working capital optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Payment prioritization strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Cash flow forecasting and planning</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <h3 className="font-display text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    MCA Advisory
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Specialized advisory services for businesses dealing with merchant cash advance obligations, leveraging over 20 years of MCA industry experience.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Multi-provider coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Daily remittance optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Sustainable repayment structures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tight leading-[1.1]">
                READY TO DISCUSS YOUR RESTRUCTURING NEEDS?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
                Schedule a confidential consultation with our experienced advisory team
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-display font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 uppercase tracking-wide"
              >
                Schedule Consultation
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