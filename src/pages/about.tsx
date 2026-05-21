import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Users, Shield, Target } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Regroup Partners"
        description="Women-owned boutique business advisory firm with 21+ years of experience in restructuring, creditor coordination, and merchant cash advance solutions."
      />

      <Navigation />

      <main className="dark">
        {/* Hero Section */}
        <section className="relative bg-[#0F172A] text-white min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <span className="text-sm font-medium text-blue-400">21+ Years Experience</span>
                </div>
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <span className="text-sm font-medium text-blue-400">Women-Owned</span>
                </div>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-8">
                Experience, Relationships,<br />Results
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
                A boutique business advisory firm bringing two decades of hands-on restructuring expertise and deep industry relationships to complex financial challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-slate-50 p-8 rounded-xl text-center border border-slate-200">
                <div className="text-5xl font-display font-bold text-[#0F172A] mb-2">21+</div>
                <div className="text-slate-600">Years of Experience</div>
              </div>
              <div className="bg-slate-50 p-8 rounded-xl text-center border border-slate-200">
                <div className="text-5xl font-display font-bold text-[#0F172A] mb-2">100%</div>
                <div className="text-slate-600">Women-Owned & Operated</div>
              </div>
              <div className="bg-slate-50 p-8 rounded-xl text-center border border-slate-200">
                <div className="text-5xl font-display font-bold text-[#0F172A] mb-2">20+</div>
                <div className="text-slate-600">Years MCA Industry</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Regroup Partners is a women-owned and operated business advisory firm specializing in restructuring, creditor coordination, and financial stabilization services.
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  With over 21 years of experience, we've built a reputation as trusted advisors who stand behind our clients through complex financial challenges. Our boutique approach means every client receives direct, hands-on attention from our experienced team.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We maintain longstanding relationships with lenders, attorneys, and restructuring professionals nationwide. These relationships, combined with our deep industry expertise, allow us to achieve outcomes that benefit all stakeholders.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3">Our Experience</h3>
                  <p className="text-slate-600">
                    Over two decades of hands-on restructuring work across diverse industries and financial situations, from small businesses to complex multi-creditor scenarios.
                  </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3">Our Relationships</h3>
                  <p className="text-slate-600">
                    Deep connections with lenders, banks, MCA providers, attorneys, and financial stakeholders built through consistent professionalism and successful outcomes.
                  </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3">Our Commitment</h3>
                  <p className="text-slate-600">
                    We stand behind our clients, providing strategic guidance and direct advocacy throughout the restructuring process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 md:py-32 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                Our Approach
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Strategic advisory grounded in experience, relationships, and hands-on involvement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">
                  Creditor Coordination
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We work directly with banks, lenders, vendors, and all types of creditors to negotiate fair restructuring terms.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">
                  Industry Relationships
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Our longstanding relationships with lenders, attorneys, and restructuring professionals add significant value to client engagements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">
                  Hands-On Involvement
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Direct, personal involvement in every engagement—not a call center or outsourced service provider.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MCA Expertise */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <span className="text-sm font-medium text-blue-600">Specialized Expertise</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                Merchant Cash Advance Industry Pioneers
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We have been pioneers in the merchant cash advance industry for over 20 years. This specialized experience gives us unique insight into MCA obligations, provider relationships, and restructuring strategies.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our MCA expertise allows us to effectively coordinate with multiple advance providers, negotiate sustainable repayment structures, and help businesses regain financial stability while managing their obligations.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We understand the nuances of daily remittance structures, multi-provider coordination challenges, and the importance of maintaining professional relationships throughout the restructuring process.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-[#0F172A] text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Let's discuss how we can help
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Request a confidential consultation with our experienced team.
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