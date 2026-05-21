import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Users, Shield, Building2 } from "lucide-react";

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

        {/* How We Work Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <span className="text-sm font-display font-bold text-blue-600 uppercase tracking-wide">Our Approach</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tight">
                HOW WE WORK
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Direct involvement and strategic coordination throughout every engagement
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Hands-On Involvement Card */}
              <div className="group relative overflow-hidden rounded-2xl h-[550px] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0">
                  <Image
                    src="/generated/about-hands-on.png"
                    alt="Hands-On Business Advisory"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/75 to-[#0F172A]/95"></div>
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-500">
                        <Users className="w-7 h-7 text-blue-400" />
                      </div>
                      <div className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
                        <span className="text-xs font-display font-bold text-blue-300 uppercase tracking-wide">Core Value</span>
                      </div>
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-3xl font-black mb-4 text-white uppercase tracking-tight group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                      Hands-On Involvement
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      We stand behind our clients with direct personal involvement in every engagement, coordinating with all financial stakeholders throughout the restructuring process.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Direct Client Communication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Active Stakeholder Coordination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Comprehensive Strategic Guidance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creditor Coordination Card */}
              <div className="group relative overflow-hidden rounded-2xl h-[550px] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0">
                  <Image
                    src="/generated/about-creditor-coordination.png"
                    alt="Professional Creditor Coordination"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/75 to-[#0F172A]/95"></div>
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-500">
                        <Shield className="w-7 h-7 text-blue-400" />
                      </div>
                      <div className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
                        <span className="text-xs font-display font-bold text-blue-300 uppercase tracking-wide">Specialized Expertise</span>
                      </div>
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-3xl font-black mb-4 text-white uppercase tracking-tight group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                      Professional Creditor Relations
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      We work diligently with all types of creditors including banks, lenders, vendors, and attorneys, maintaining professional relationships that benefit our clients.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Multi-Creditor Negotiation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Transparent Communication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Strategic Relationship Building</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry Relationships Card */}
              <div className="group relative overflow-hidden rounded-2xl h-[550px] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0">
                  <Image
                    src="/generated/about-industry-relationships.png"
                    alt="Industry Relationships and Network"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/75 to-[#0F172A]/95"></div>
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-500">
                        <Building2 className="w-7 h-7 text-blue-400" />
                      </div>
                      <div className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
                        <span className="text-xs font-display font-bold text-blue-300 uppercase tracking-wide">Network Advantage</span>
                      </div>
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-3xl font-black mb-4 text-white uppercase tracking-tight group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                      Deep Industry Connections
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Our longstanding relationships with lenders, attorneys, and restructuring professionals provide significant value in complex financial situations.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Established Lender Network</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Legal Professional Partnerships</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Industry-Wide Reputation</span>
                    </div>
                  </div>
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