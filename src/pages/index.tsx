import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { AsSeenOn } from "@/components/AsSeenOn";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Building2, Users, TrendingUp, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <SEO
        title="Business Restructuring & Financial Advisory | Regroup Partners"
        description="Boutique business restructuring and financial advisory firm with 21+ years experience. Specializing in creditor coordination, cash flow stabilization, and merchant cash advance restructuring."
      />

      <Navigation />

      <main className="pt-16">
        <Hero
          title="Business Restructuring & Financial Advisory"
          subtitle="Helping businesses navigate financial complexity through strategic restructuring, creditor coordination, and cash flow stabilization."
          breadcrumbs={[{ label: "Home" }]}
          backgroundImage="/generated/executive-advisory-hero.png"
        />

        <TrustBar />
        <AsSeenOn />

        <section className="py-20 bg-white border-y border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 text-center">
              <div>
                <div className="text-5xl font-serif font-semibold text-primary mb-2">21+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-gray-200"></div>
              <div>
                <div className="text-lg font-semibold text-foreground mb-2">Women-Owned & Operated</div>
                <div className="text-sm text-gray-600">Professional Business Advisory Firm</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-gray-200"></div>
              <div>
                <div className="text-lg font-semibold text-foreground mb-2">Boutique Advisory</div>
                <div className="text-sm text-gray-600">Hands-On Strategic Partnership</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif font-semibold text-4xl md:text-5xl text-foreground mb-6">
                Advisory Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive restructuring and financial advisory tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Business Restructuring",
                  description: "Strategic restructuring solutions to stabilize operations and improve financial position",
                  href: "/business-restructuring"
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
              ].map((service, index) => {
                const CardContent = (
                  <Card className="p-8 bg-white hover:shadow-lg transition-shadow border border-gray-200 h-full group">
                    <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </Card>
                );

                return service.href ? (
                  <Link href={service.href} key={index} className="block h-full">
                    {CardContent}
                  </Link>
                ) : (
                  <div key={index} className="h-full">
                    {CardContent}
                  </div>
                );
              })}
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

        {/* Split Screen Lead Capture */}
        <section className="bg-foreground text-white border-b border-gray-200">
          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full flex items-center p-12 md:p-20 bg-[url('/generated/split-screen-premium-bg.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/80 to-primary/60"></div>
              {/* Decorative architectural border */}
              <div className="absolute inset-6 md:inset-10 border border-white/10 rounded-sm pointer-events-none hidden md:block"></div>
              
              <div className="relative z-10 max-w-lg">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full mb-8">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-semibold text-white tracking-widest uppercase">Discreet & Confidential</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6 leading-tight text-white drop-shadow-md">
                  Navigate Financial Complexity With Confidence.
                </h2>
                <div className="w-16 h-1 bg-primary mb-8"></div>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  Partner with a specialized advisory firm that understands the intricacies of restructuring, creditor coordination, and cash flow stabilization.
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 bg-white text-foreground p-12 md:p-24 flex flex-col justify-center">
              <div className="max-w-lg mx-auto w-full">
                <div className="mb-10">
                  <h3 className="font-serif text-3xl font-semibold mb-4 text-foreground">Confidential Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Submit your details below for a discreet review of your business's financial position.
                  </p>
                </div>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-semibold text-foreground">First Name</label>
                      <input id="firstName" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-semibold text-foreground">Last Name</label>
                      <input id="lastName" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground">Work Email</label>
                      <input id="email" type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</label>
                      <input id="phone" type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-foreground">Company Name</label>
                    <input id="company" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground">How can we help? (Optional)</label>
                    <textarea id="message" rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
                  </div>

                  <Button type="submit" className="w-full py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-white mt-4">
                    Request Consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-accent">21+ Years Experience</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                  Experience, Relationships, Results
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As a women-owned and operated professional business advisory firm, we bring more than two decades of hands-on restructuring experience and deep industry relationships.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We maintain longstanding relationships with lenders, attorneys, and restructuring professionals. Our value comes from our experience, reputation, and commitment to standing behind our clients through complex financial challenges.
                </p>
              </div>
              <div className="space-y-8">
                <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="font-serif text-xl font-semibold mb-3">Industry Pioneer</h3>
                  <p className="text-gray-600">
                    Pioneers in the merchant cash advance industry for over 20 years, with specialized expertise in MCA restructuring and creditor coordination.
                  </p>
                </Card>
                <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="font-serif text-xl font-semibold mb-3">Trusted Advisors</h3>
                  <p className="text-gray-600">
                    We work diligently with all types of creditors, maintaining professional relationships that benefit our clients' restructuring outcomes.
                  </p>
                </Card>
                <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="font-serif text-xl font-semibold mb-3">Hands-On Approach</h3>
                  <p className="text-gray-600">
                    Direct involvement in every engagement, coordinating with banks, lenders, vendors, attorneys, and financial stakeholders.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Core Advisory Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive restructuring solutions built on two decades of experience and deep industry relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                  Business Restructuring
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic restructuring guidance to stabilize operations and achieve financial sustainability.
                </p>
              </Card>

              <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                  Creditor Coordination
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Expert management of relationships with banks, lenders, vendors, and financial stakeholders.
                </p>
              </Card>

              <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                  Cash Flow Improvement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Proven strategies for improving operational cash flow and achieving financial stability.
                </p>
              </Card>

              <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                  MCA Advisory
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized merchant cash advance restructuring with 20+ years of industry expertise.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <span className="text-sm font-semibold text-accent">Client Success</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Hear directly from business owners who have successfully navigated financial challenges with Regroup Partners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-video relative bg-gray-900">
                  <iframe
                    src="https://www.youtube.com/embed/EGhrQgHy1IY?start=3&autoplay=1&mute=1&loop=1&playlist=EGhrQgHy1IY&controls=0&modestbranding=1&rel=0&playsinline=1"
                    title="Client Testimonial 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                    Business Owner Success Story
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Successful restructuring and creditor coordination leading to improved cash flow and business stabilization.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-video relative bg-gray-900">
                  <iframe
                    src="https://www.youtube.com/embed/GlEVh-3Jk1Y?start=1&autoplay=1&mute=1&loop=1&playlist=GlEVh-3Jk1Y&controls=0&modestbranding=1&rel=0&playsinline=1"
                    title="Client Testimonial 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                    Financial Recovery Journey
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strategic advisory and hands-on coordination delivering measurable results through challenging financial circumstances.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Insights & Expertise
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Thought leadership on business restructuring, financial stabilization, and creditor coordination strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/insights" className="group block">
                <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow h-full">
                  <div className="text-sm font-semibold text-accent mb-4">Business Restructuring</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                    How Business Restructuring Improves Cash Flow
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Strategic approaches to improving operational cash flow through creditor coordination and financial stabilization.
                  </p>
                  <div className="flex items-center text-accent font-semibold">
                    Read Article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              </Link>

              <Link href="/insights" className="group block">
                <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow h-full">
                  <div className="text-sm font-semibold text-accent mb-4">MCA Advisory</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                    Understanding Merchant Cash Advance Restructuring
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Expert guidance on navigating MCA obligations and coordinating with multiple advance providers.
                  </p>
                  <div className="flex items-center text-accent font-semibold">
                    Read Article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              </Link>

              <Link href="/insights" className="group block">
                <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow h-full">
                  <div className="text-sm font-semibold text-accent mb-4">Financial Strategy</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                    Working With Creditors During Financial Pressure
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Building productive relationships with lenders and creditors through transparent communication and strategic coordination.
                  </p>
                  <div className="flex items-center text-accent font-semibold">
                    Read Article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
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

        <section className="py-24 bg-white border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif font-semibold text-4xl text-foreground mb-6">
              Confidential Business Review
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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