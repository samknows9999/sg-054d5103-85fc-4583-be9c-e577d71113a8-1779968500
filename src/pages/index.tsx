import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SEO
        title="Business Restructuring & Financial Advisory | Regroup Partners"
        description="Boutique business restructuring and financial advisory firm with 21+ years experience. Specializing in creditor coordination, cash flow stabilization, and merchant cash advance restructuring."
      />

      <Navigation />

      <main>
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/generated/executive-advisory-hero.png"
              alt="Executive advisory background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>

          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/30 blur-xl"></div>
                    <div className="relative px-4 py-1.5 bg-accent/10 backdrop-blur-md border border-accent/30 rounded-full">
                      <span className="text-sm font-semibold text-accent">21+ Years Experience</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/30 blur-xl"></div>
                    <div className="relative px-4 py-1.5 bg-accent/10 backdrop-blur-md border border-accent/30 rounded-full">
                      <span className="text-sm font-semibold text-accent">Women-Owned</span>
                    </div>
                  </div>
                </div>

                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
                  Business Restructuring & Financial Advisory
                </h1>

                <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
                  Helping businesses navigate financial complexity through strategic restructuring, creditor coordination, and cash flow stabilization.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-accent/30 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative px-8 py-4 bg-gradient-to-r from-accent to-accent/80 backdrop-blur-sm text-white font-semibold rounded-lg hover:from-accent/90 hover:to-accent/70 transition-all duration-300 text-center">
                      Request Confidential Review
                    </div>
                  </Link>
                  <Link
                    href="/services"
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-foreground/10 blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative px-8 py-4 bg-card/80 backdrop-blur-md border-2 border-foreground/20 text-foreground font-semibold rounded-lg hover:bg-card/60 hover:border-foreground/30 transition-all duration-300 text-center">
                      Explore Services
                    </div>
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent/20 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 p-8 rounded-2xl shadow-2xl hover:shadow-accent/20 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-sm border border-accent/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">Institutional Expertise</h3>
                        <p className="text-foreground/70">Two decades of hands-on restructuring experience with deep industry relationships</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-accent/20 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 p-8 rounded-2xl shadow-2xl hover:shadow-accent/20 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-sm border border-accent/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">Creditor Coordination</h3>
                        <p className="text-foreground/70">Strategic management of relationships with banks, lenders, vendors, and financial stakeholders</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-accent/20 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 p-8 rounded-2xl shadow-2xl hover:shadow-accent/20 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-sm border border-accent/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">Cash Flow Stabilization</h3>
                        <p className="text-foreground/70">Proven strategies for improving operational cash flow and achieving financial stability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
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
                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-semibold mb-3">Industry Pioneer</h3>
                  <p className="text-foreground/70">
                    Pioneers in the merchant cash advance industry for over 20 years, with specialized expertise in MCA restructuring and creditor coordination.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-semibold mb-3">Trusted Advisors</h3>
                  <p className="text-foreground/70">
                    We work diligently with all types of creditors, maintaining professional relationships that benefit our clients' restructuring outcomes.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-semibold mb-3">Hands-On Approach</h3>
                  <p className="text-foreground/70">
                    Direct involvement in every engagement, coordinating with banks, lenders, vendors, attorneys, and financial stakeholders.
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
              <Link href="/insights" className="group bg-card rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="p-8">
                  <div className="text-sm font-semibold text-accent mb-4">Business Restructuring</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
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
              </Link>

              <Link href="/insights" className="group bg-card rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="p-8">
                  <div className="text-sm font-semibold text-accent mb-4">MCA Advisory</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
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
              </Link>

              <Link href="/insights" className="group bg-card rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="p-8">
                  <div className="text-sm font-semibold text-accent mb-4">Financial Strategy</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
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