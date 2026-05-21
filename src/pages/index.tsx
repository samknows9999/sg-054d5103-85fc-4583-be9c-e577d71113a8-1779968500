import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";
import { Building2, Users, TrendingUp, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroTransform = scrollY * 0.5;

  return (
    <>
      <SEO
        title="Business Restructuring & Financial Advisory | Regroup Partners"
        description="Boutique business restructuring and financial advisory firm with 21+ years experience. Specializing in creditor coordination, cash flow stabilization, and merchant cash advance restructuring."
      />

      <Navigation />

      <main>
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full">
                  <span className="text-sm font-semibold text-accent">21+ Years Experience</span>
                </div>
                <div className="px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full">
                  <span className="text-sm font-semibold text-accent">Women-Owned</span>
                </div>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-foreground leading-tight mb-8">
                Business Restructuring & Financial Advisory
              </h1>

              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
                Helping businesses navigate financial complexity through strategic restructuring, creditor coordination, and cash flow stabilization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Request Confidential Review
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-background border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Badge */}
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 text-center">
              <div>
                <div className="text-5xl font-serif font-semibold text-primary mb-2">21+</div>
                <div className="text-sm text-foreground/60 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-border"></div>
              <div>
                <div className="text-lg font-semibold text-foreground mb-2">Women-Owned & Operated</div>
                <div className="text-sm text-foreground/60">Professional Business Advisory Firm</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-border"></div>
              <div>
                <div className="text-lg font-semibold text-foreground mb-2">Boutique Advisory</div>
                <div className="text-sm text-foreground/60">Hands-On Strategic Partnership</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif font-semibold text-4xl md:text-5xl text-foreground mb-6">
                Advisory Services
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Comprehensive restructuring and financial advisory tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Business Restructuring",
                  description: "Strategic restructuring solutions to stabilize operations and improve financial position",
                },
                {
                  icon: Users,
                  title: "Creditor Coordination",
                  description: "Expert coordination with banks, lenders, vendors, and stakeholders",
                },
                {
                  icon: TrendingUp,
                  title: "Cash Flow Improvement",
                  description: "Operational optimization and financial strategies to enhance liquidity",
                },
                {
                  icon: Shield,
                  title: "MCA Advisory",
                  description: "Specialized merchant cash advance restructuring and coordination",
                },
              ].map((service, index) => (
                <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow border border-border">
                  <service.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-semibold text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-accent">21+ Years Experience</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                  Experience, Relationships, Results
                </h2>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  As a women-owned and operated professional business advisory firm, we bring more than two decades of hands-on restructuring experience and deep industry relationships.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  We maintain longstanding relationships with lenders, attorneys, and restructuring professionals. Our value comes from our experience, reputation, and commitment to standing behind our clients through complex financial challenges.
                </p>
              </div>
              <div className="space-y-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card p-8 rounded-xl border border-border shadow-lg hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                    <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">Industry Pioneer</h3>
                    <p className="text-foreground/70">
                      Pioneers in the merchant cash advance industry for over 20 years, with specialized expertise in MCA restructuring and creditor coordination.
                    </p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card p-8 rounded-xl border border-border shadow-lg hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                    <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">Trusted Advisors</h3>
                    <p className="text-foreground/70">
                      We work diligently with all types of creditors, maintaining professional relationships that benefit our clients' restructuring outcomes.
                    </p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card p-8 rounded-xl border border-border shadow-lg hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                    <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">Hands-On Approach</h3>
                    <p className="text-foreground/70">
                      Direct involvement in every engagement, coordinating with banks, lenders, vendors, attorneys, and financial stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Core Advisory Services
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Comprehensive restructuring solutions built on two decades of experience and deep industry relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-500">
                    <Building2 className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                    Business Restructuring
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Strategic restructuring guidance to stabilize operations and achieve financial sustainability.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-500">
                    <Users className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                    Creditor Coordination
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Expert management of relationships with banks, lenders, vendors, and financial stakeholders.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-500">
                    <TrendingUp className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                    Cash Flow Improvement
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Proven strategies for improving operational cash flow and achieving financial stability.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-500">
                    <Shield className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                    MCA Advisory
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Specialized merchant cash advance restructuring with 20+ years of industry expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Insights & Expertise
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Thought leadership on business restructuring, financial stabilization, and creditor coordination strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/insights" className="group relative block">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card rounded-xl border border-border shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="p-8">
                    <div className="text-sm font-semibold text-accent mb-4">Business Restructuring</div>
                    <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
                      How Business Restructuring Improves Cash Flow
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      Strategic approaches to improving operational cash flow through creditor coordination and financial stabilization.
                    </p>
                    <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                      Read Article
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/insights" className="group relative block">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card rounded-xl border border-border shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="p-8">
                    <div className="text-sm font-semibold text-accent mb-4">MCA Advisory</div>
                    <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
                      Understanding Merchant Cash Advance Restructuring
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      Expert guidance on navigating MCA obligations and coordinating with multiple advance providers.
                    </p>
                    <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                      Read Article
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/insights" className="group relative block">
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card rounded-xl border border-border shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/30 transition-all duration-500">
                  <div className="p-8">
                    <div className="text-sm font-semibold text-accent mb-4">Financial Strategy</div>
                    <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
                      Working With Creditors During Financial Pressure
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      Building productive relationships with lenders and creditors through transparent communication and strategic coordination.
                    </p>
                    <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                      Read Article
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/insights"
                className="inline-flex items-center px-8 py-4 bg-background border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                View All Insights
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif font-semibold text-4xl text-foreground mb-6">
              Confidential Business Review
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Schedule a confidential consultation to discuss your financial situation and explore strategic options. 
              No obligation. Completely discreet.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6"
              >
                Schedule Your Review
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}