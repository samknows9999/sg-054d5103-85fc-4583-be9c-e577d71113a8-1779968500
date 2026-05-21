import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Regroup Partners"
        description="Women-owned boutique business advisory firm with 21+ years of experience in restructuring, creditor coordination, and merchant cash advance solutions."
      />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-semibold text-blue-400 font-display">21+ YEARS EXPERIENCE</span>
                </div>
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-semibold text-blue-400 font-display">WOMEN-OWNED</span>
                </div>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 text-white leading-[1.1] tracking-tight uppercase">
                EXPERIENCE, RELATIONSHIPS, <span className="text-blue-400">RESULTS</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                A boutique business advisory firm bringing two decades of hands-on restructuring expertise and deep industry relationships to complex financial challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="text-5xl font-display font-black text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300">21+</div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm font-semibold">Years of Experience</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="text-5xl font-display font-black text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm font-semibold">Women-Owned & Operated</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="text-5xl font-display font-black text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm font-semibold">Years MCA Industry</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wide font-display">Our Story</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tight leading-[1.1]">
                  BUILT ON EXPERTISE & <span className="text-blue-500">RELATIONSHIPS</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As a women-owned and operated professional business advisory firm, we bring more than two decades of hands-on restructuring experience and deep industry relationships to every engagement.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We maintain longstanding relationships with lenders, attorneys, and restructuring professionals nationwide. Our value comes from our experience, reputation, and unwavering commitment to standing behind our clients through complex financial challenges.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're not a call center, outsourced service provider, or debt settlement company. We're hands-on advisors who work directly with businesses and their creditors to achieve sustainable restructuring outcomes.
                </p>
              </div>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/generated/about-team-advisory.png"
                  alt="Professional advisory team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide font-display">Our Approach</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tight">
                HOW WE WORK
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Strategic advisory grounded in experience, relationships, and hands-on involvement
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-blue-500/10 transition-all duration-500">
                    <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    Creditor Coordination
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We work directly with banks, lenders, vendors, and all types of creditors to negotiate fair restructuring terms.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-blue-500/10 transition-all duration-500">
                    <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    Industry Relationships
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our longstanding relationships with lenders, attorneys, and restructuring professionals add significant value to client engagements.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-blue-500/10 transition-all duration-500">
                    <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                    Hands-On Involvement
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Direct, personal involvement in every engagement—not a call center or outsourced service provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MCA Expertise Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide font-display">Industry Pioneer</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900 uppercase tracking-tight leading-[1.1]">
                MERCHANT CASH ADVANCE <span className="text-blue-500">EXPERTISE</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                As pioneers in the merchant cash advance industry for over 20 years, we bring specialized expertise and deep industry relationships to MCA restructuring engagements.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand the unique dynamics of MCA obligations and maintain professional relationships with providers nationwide. Our MCA advisory services help businesses navigate multiple obligations while preserving cash flow and working toward sustainable resolutions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-bold text-gray-900 mb-2 uppercase tracking-wide">Multi-Provider Coordination</h4>
                    <p className="text-gray-600">Strategic coordination across multiple MCA providers and obligations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-bold text-gray-900 mb-2 uppercase tracking-wide">Industry Relationships</h4>
                    <p className="text-gray-600">Established relationships with MCA providers nationwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-bold text-gray-900 mb-2 uppercase tracking-wide">Cash Flow Management</h4>
                    <p className="text-gray-600">Daily remittance optimization while maintaining operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-bold text-gray-900 mb-2 uppercase tracking-wide">Sustainable Solutions</h4>
                    <p className="text-gray-600">Focus on workable, long-term restructuring outcomes</p>
                  </div>
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
                READY TO WORK WITH EXPERIENCED ADVISORS?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
                Schedule a confidential consultation to discuss your business challenges
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