import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Shield, Users, Building2, FileText, Briefcase } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      title: "How Business Restructuring Improves Cash Flow",
      category: "Business Restructuring",
      description: "Strategic approaches to improving operational cash flow through creditor coordination and financial stabilization.",
      image: "/generated/insight-cash-flow.png",
      icon: TrendingUp,
      badge: "Core Strategy"
    },
    {
      title: "Understanding Merchant Cash Advance Restructuring",
      category: "MCA Advisory",
      description: "Expert guidance on navigating MCA obligations and coordinating with multiple advance providers.",
      image: "/generated/insight-mca-restructuring.png",
      icon: Shield,
      badge: "Industry Expertise"
    },
    {
      title: "Financial Stabilization Strategies for Businesses",
      category: "Financial Strategy",
      description: "Comprehensive approaches to achieving long-term financial stability through strategic restructuring and operational improvements.",
      image: "/generated/insight-financial-stabilization.png",
      icon: Building2,
      badge: "Advisory Focus"
    },
    {
      title: "Working With Creditors During Financial Pressure",
      category: "Creditor Relations",
      description: "Building productive relationships with lenders and creditors through transparent communication and strategic coordination.",
      image: "/generated/insight-creditor-relations.png",
      icon: Users,
      badge: "Relationship Building"
    },
    {
      title: "Business Restructuring vs Bankruptcy",
      category: "Business Restructuring",
      description: "Understanding the differences between restructuring and bankruptcy, and choosing the right path for your business.",
      image: "/generated/insight-restructuring-vs-bankruptcy.png",
      icon: FileText,
      badge: "Strategic Choice"
    },
    {
      title: "Managing Vendor and Lender Relationships",
      category: "Creditor Coordination",
      description: "Best practices for maintaining positive relationships with vendors and lenders while navigating financial challenges.",
      image: "/generated/insight-lender-relationships.png",
      icon: Briefcase,
      badge: "Coordination"
    }
  ];

  return (
    <>
      <SEO
        title="Insights & Expertise | Regroup Partners"
        description="Thought leadership on business restructuring, financial stabilization, merchant cash advance advisory, and creditor coordination strategies."
      />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm">
                <span className="text-sm font-semibold text-blue-400 font-display uppercase tracking-wide">Thought Leadership</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 text-white leading-[1.1] tracking-tight uppercase">
                INSIGHTS & <span className="text-blue-400">EXPERTISE</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                Strategic perspectives on business restructuring, financial stabilization, and creditor coordination from our advisory team.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => {
                const Icon = article.icon;
                return (
                  <div key={index} className="group relative overflow-hidden rounded-2xl h-[500px] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/85 via-[#0F172A]/75 to-[#0F172A]/95"></div>
                      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="relative h-full p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-500">
                            <Icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <div className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
                            <span className="text-xs font-display font-bold text-blue-300 uppercase tracking-wide">{article.badge}</span>
                          </div>
                        </div>
                        
                        <div className="text-xs font-bold text-blue-400 mb-4 uppercase tracking-wider font-display">
                          {article.category}
                        </div>
                        
                        <h3 className="font-display text-2xl md:text-3xl font-black mb-4 text-white uppercase tracking-tight group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {article.description}
                        </p>
                      </div>

                      <div className="flex items-center text-blue-400 font-display font-bold group-hover:gap-2 transition-all uppercase tracking-wide text-sm">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide font-display">Topics</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tight">
                EXPLORE BY TOPIC
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Browse our insights by category to find content relevant to your situation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <Building2 className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-display text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">Business Restructuring</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Strategic guidance on restructuring operations and finances</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <Shield className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-display text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">MCA Advisory</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Specialized merchant cash advance restructuring expertise</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <Users className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-display text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">Creditor Coordination</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Managing relationships with lenders and financial stakeholders</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                  <TrendingUp className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-display text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">Financial Strategy</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Long-term financial stabilization and cash flow improvement</p>
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
                NEED EXPERT RESTRUCTURING GUIDANCE?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
                Schedule a confidential consultation with our experienced advisory team
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-display font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 uppercase tracking-wide"
              >
                Request Consultation
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