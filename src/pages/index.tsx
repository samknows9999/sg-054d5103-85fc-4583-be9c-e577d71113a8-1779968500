import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Building2, Users, TrendingUp, Shield, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO
        title="Business Restructuring & Financial Advisory | Regroup Partners"
        description="Boutique business restructuring and financial advisory firm with 21+ years experience. Specializing in creditor coordination, cash flow stabilization, and merchant cash advance restructuring."
      />

      <Navigation />

      <main className="dark">
        {/* Hero Section */}
        <section className="relative bg-[#0F172A] text-white min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <span className="text-sm font-medium text-blue-400">21+ Years Experience</span>
                </div>
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <span className="text-sm font-medium text-blue-400">Women-Owned & Operated</span>
                </div>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-8">
                Business Restructuring &<br />Financial Advisory
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mb-12">
                Helping businesses navigate financial complexity through strategic restructuring, creditor coordination, and cash flow stabilization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 group"
                >
                  Request Confidential Review
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-[#0F172A] mb-2">21+</div>
                <div className="text-slate-600 font-medium">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-[#0F172A] mb-2">100%</div>
                <div className="text-slate-600 font-medium">Women-Owned Business</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-[#0F172A] mb-2">20+</div>
                <div className="text-slate-600 font-medium">Years in MCA Industry</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6">
                Core Advisory Services
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Comprehensive restructuring solutions built on two decades of experience and deep industry relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">
                  Business Restructuring
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Strategic restructuring guidance to stabilize operations and achieve financial sustainability.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">
                  Creditor Coordination
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Expert management of relationships with banks, lenders, vendors, and financial stakeholders.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">
                  Cash Flow Improvement
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Proven strategies for improving operational cash flow and achieving financial stability.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">
                  MCA Advisory
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Specialized merchant cash advance restructuring with 20+ years of industry expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                  <span className="text-sm font-medium text-blue-600">Who We Are</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                  Experience, Relationships, Results
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  As a women-owned and operated professional business advisory firm, we bring more than two decades of hands-on restructuring experience and deep industry relationships.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We maintain longstanding relationships with lenders, attorneys, and restructuring professionals. Our value comes from our experience, reputation, and commitment to standing behind our clients through complex financial challenges.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2">Industry Pioneer</h3>
                      <p className="text-slate-600">
                        Pioneers in the merchant cash advance industry for over 20 years, with specialized expertise in MCA restructuring and creditor coordination.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2">Trusted Advisors</h3>
                      <p className="text-slate-600">
                        We work diligently with all types of creditors, maintaining professional relationships that benefit our clients' restructuring outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2">Hands-On Approach</h3>
                      <p className="text-slate-600">
                        Direct involvement in every engagement, coordinating with banks, lenders, vendors, attorneys, and financial stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Preview */}
        <section className="py-20 md:py-32 bg-slate-50">
          <div className="container">
            <div className="flex items-end justify-between mb-16">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
                  Insights & Expertise
                </h2>
                <p className="text-lg text-slate-600">
                  Thought leadership on business restructuring and financial advisory.
                </p>
              </div>
              <Link
                href="/insights"
                className="hidden md:inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group"
              >
                View All Insights
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/insights" className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="text-sm font-semibold text-blue-600 mb-4">Business Restructuring</div>
                  <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">
                    How Business Restructuring Improves Cash Flow
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Strategic approaches to improving operational cash flow through creditor coordination and financial stabilization.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/insights" className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="text-sm font-semibold text-blue-600 mb-4">MCA Advisory</div>
                  <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">
                    Understanding Merchant Cash Advance Restructuring
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Expert guidance on navigating MCA obligations and coordinating with multiple advance providers.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/insights" className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="text-sm font-semibold text-blue-600 mb-4">Financial Strategy</div>
                  <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">
                    Working With Creditors During Financial Pressure
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Building productive relationships with lenders and creditors through transparent communication and strategic coordination.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>

            <Link
              href="/insights"
              className="md:hidden inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group mt-8"
            >
              View All Insights
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-[#0F172A] text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to discuss your situation?
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Request a confidential business review with our experienced restructuring advisory team.
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