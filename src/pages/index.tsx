import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";
import { Building2, Users, TrendingUp, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO
        title="Business Restructuring & Financial Advisory | Regroup Partners"
        description="Boutique business restructuring and financial advisory firm with 21+ years experience. Specializing in creditor coordination, cash flow stabilization, and merchant cash advance restructuring."
      />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-semibold text-blue-400 font-display">21+ YEARS EXPERIENCE</span>
                </div>
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-semibold text-blue-400 font-display">WOMEN-OWNED</span>
                </div>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight uppercase">
                BUSINESS RESTRUCTURING & <span className="text-blue-400">FINANCIAL ADVISORY</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                Helping businesses navigate financial complexity through strategic restructuring, creditor coordination, and cash flow stabilization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-display font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 uppercase tracking-wide"
                >
                  Request Confidential Review
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-display font-bold rounded-lg hover:bg-white/20 transition-all duration-300 uppercase tracking-wide"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="text-4xl font-display font-black text-blue-400 mb-2">21+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide font-semibold">Years Experience</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="text-4xl font-display font-black text-blue-400 mb-2">100%</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide font-semibold">Women-Owned</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="text-4xl font-display font-black text-blue-400 mb-2">20+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide font-semibold">Years MCA Industry</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide font-display">Core Services</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tight">
                COMPREHENSIVE RESTRUCTURING SOLUTIONS
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Built on two decades of experience and deep industry relationships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-blue-500/10 transition-all duration-500">
                    <Building2 className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    Business Restructuring
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strategic restructuring guidance to stabilize operations and achieve financial sustainability.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-blue-500/10 transition-all duration-500">
                    <Users className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    Creditor Coordination
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expert management of relationships with banks, lenders, vendors, and financial stakeholders.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-blue-500/10 transition-all duration-500">
                    <TrendingUp className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    Cash Flow Improvement
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Proven strategies for improving operational cash flow and achieving financial stability.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-blue-500/10 transition-all duration-500">
                    <Shield className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    MCA Advisory
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specialized merchant cash advance restructuring with 20+ years of industry expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wide font-display">About Us</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tight leading-[1.1]">
                  EXPERIENCE, RELATIONSHIPS, <span className="text-blue-500">RESULTS</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As a women-owned and operated professional business advisory firm, we bring more than two decades of hands-on restructuring experience and deep industry relationships.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We maintain longstanding relationships with lenders, attorneys, and restructuring professionals. Our value comes from our experience, reputation, and commitment to standing behind our clients through complex financial challenges.
                </p>
                <Link
                  href="/about"
                  className="group inline-flex items-center text-blue-600 font-display font-bold hover:text-blue-700 transition-colors uppercase tracking-wide"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="space-y-6">
                <div className="group relative">
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                    <CheckCircle2 className="w-10 h-10 text-blue-500 mb-4" />
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">Industry Pioneer</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pioneers in the merchant cash advance industry for over 20 years, with specialized expertise in MCA restructuring and creditor coordination.
                    </p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                    <CheckCircle2 className="w-10 h-10 text-blue-500 mb-4" />
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">Trusted Advisors</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We work diligently with all types of creditors, maintaining professional relationships that benefit our clients' restructuring outcomes.
                    </p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                    <CheckCircle2 className="w-10 h-10 text-blue-500 mb-4" />
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">Hands-On Approach</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Direct involvement in every engagement, coordinating with banks, lenders, vendors, attorneys, and financial stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Preview Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide font-display">Insights</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tight">
                INSIGHTS & EXPERTISE
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Thought leadership on business restructuring, financial stabilization, and creditor coordination strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/insights" className="group relative block">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="p-8">
                    <div className="text-xs font-bold text-blue-600 mb-4 uppercase tracking-wider font-display">Business Restructuring</div>
                    <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide leading-tight">
                      How Business Restructuring Improves Cash Flow
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Strategic approaches to improving operational cash flow through creditor coordination and financial stabilization.
                    </p>
                    <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all uppercase tracking-wide text-sm font-display">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/insights" className="group relative block">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="p-8">
                    <div className="text-xs font-bold text-blue-600 mb-4 uppercase tracking-wider font-display">MCA Advisory</div>
                    <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide leading-tight">
                      Understanding Merchant Cash Advance Restructuring
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Expert guidance on navigating MCA obligations and coordinating with multiple advance providers.
                    </p>
                    <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all uppercase tracking-wide text-sm font-display">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/insights" className="group relative block">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="p-8">
                    <div className="text-xs font-bold text-blue-600 mb-4 uppercase tracking-wider font-display">Financial Strategy</div>
                    <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide leading-tight">
                      Working With Creditors During Financial Pressure
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Building productive relationships with lenders and creditors through transparent communication and strategic coordination.
                    </p>
                    <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all uppercase tracking-wide text-sm font-display">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm">
                <span className="text-sm font-bold text-blue-400 uppercase tracking-wide font-display">Get Started</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tight leading-[1.1]">
                READY TO DISCUSS YOUR BUSINESS CHALLENGES?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
                Request a confidential business review with our experienced advisory team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-display font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 uppercase tracking-wide"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-display font-bold rounded-lg hover:bg-white/20 transition-all duration-300 uppercase tracking-wide"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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