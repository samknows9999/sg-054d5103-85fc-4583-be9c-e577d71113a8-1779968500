import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { AsSeenOn } from "@/components/AsSeenOn";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Building2, Users, TrendingUp, Shield, Phone, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <SEO
        title="Business Restructuring & Financial Advisory | Regroup Partners"
        description="Boutique business restructuring and financial advisory firm with 21+ years experience. Specializing in creditor coordination, cash flow stabilization, and merchant cash advance restructuring." />
      

      <Navigation />

      <main className="">
        <Hero
          title="Business Restructuring & Financial Advisory"
          subtitle="Helping businesses navigate financial complexity through strategic restructuring, creditor coordination, and cash flow stabilization."
          breadcrumbs={[{ label: "Home" }]}
          backgroundImage="/generated/executive-advisory-hero.png" />
        

        <TrustBar />

        {/* Stats Strip - Slim Version */}
        <section className="py-6 bg-white border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              
              <div className="flex items-center justify-center gap-4 py-4 md:py-0 px-4 group">
                <div className="text-4xl font-serif font-bold text-primary">21+</div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#0A192F] uppercase tracking-wider">Years Experience</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">Professional Advisory</span>
                </div>
              </div>

              <Link href="/about#claudia-stefano" className="flex items-center justify-center gap-4 py-4 md:py-0 px-4 group hover:bg-gray-50 transition-colors cursor-pointer rounded-lg md:rounded-none">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Users className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#0A192F] uppercase tracking-wider group-hover:text-primary transition-colors">Women-Owned & Operated</span>
                  <span className="text-xs text-primary uppercase tracking-widest mt-0.5 group-hover:text-[#0A192F] transition-colors">Meet Claudia Stefano →</span>
                </div>
              </Link>

              <div className="flex items-center justify-center gap-4 py-4 md:py-0 px-4 group">
                <div className="w-12 h-12 rounded-full bg-[#0A192F]/5 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#0A192F]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#0A192F] uppercase tracking-wider">Boutique Firm</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">Strategic Partnership</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <AsSeenOn />

        {/* Advisory Services */}
        <section className="py-24 bg-gray-50 border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif font-semibold text-4xl md:text-5xl text-[#0A192F] mb-6">
                Advisory Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive restructuring and financial advisory tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                href: "/creditor-coordination"
              },
              {
                icon: TrendingUp,
                title: "Cash Flow Improvement",
                description: "Operational optimization and financial strategies to enhance liquidity",
                href: "/cash-flow-improvement"
              },
              {
                icon: Shield,
                title: "MCA Advisory",
                description: "Specialized merchant cash advance restructuring and coordination",
                href: "/mca-advisory"
              }].
              map((service, index) => {
                const CardContent =
                <Card className="p-8 bg-white hover:border-primary/30 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full group">
                    <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      <service.icon className="w-7 h-7 text-[#0A192F] group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-serif font-semibold text-2xl text-[#0A192F] mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </Card>;


                return service.href ?
                <Link href={service.href} key={index} className="block h-full">
                    {CardContent}
                  </Link> :

                <div key={index} className="h-full">
                    {CardContent}
                  </div>;

              })}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white px-8 py-6 text-base">
                  
                  View All Services <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Split Screen Lead Capture */}
        <section className="bg-[#0A192F] text-white border-b border-[#112240]">
          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full flex items-center p-12 md:p-20 bg-[url('/generated/split-screen-premium-bg.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/95 via-[#0A192F]/80 to-primary/60"></div>
              {/* Decorative architectural border */}
              <div className="absolute inset-6 md:inset-10 border border-white/10 rounded-sm pointer-events-none hidden md:block"></div>
              
              <div className="relative z-10 max-w-lg">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full mb-8">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm font-semibold text-white tracking-widest uppercase">Discreet & Confidential</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6 leading-tight text-white drop-shadow-md">
                  Navigate Financial Complexity With Confidence.
                </h2>
                <div className="w-16 h-1 bg-primary mb-8"></div>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                  Partner with a specialized advisory firm that understands the intricacies of restructuring, creditor coordination, and cash flow stabilization.
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 bg-white text-[#0A192F] p-12 md:p-24 flex flex-col justify-center">
              <div className="max-w-lg mx-auto w-full">
                <div className="mb-10">
                  <h3 className="font-serif text-3xl font-semibold mb-4 text-[#0A192F]">Confidential Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Submit your details below for a discreet review of your business's financial position.
                  </p>
                </div>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-semibold text-[#0A192F]">First Name</label>
                      <input id="firstName" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-semibold text-[#0A192F]">Last Name</label>
                      <input id="lastName" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-[#0A192F]">Work Email</label>
                      <input id="email" type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-[#0A192F]">Phone Number</label>
                      <input id="phone" type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-[#0A192F]">Company Name</label>
                    <input id="company" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-[#0A192F]">How can we help? (Optional)</label>
                    <textarea id="message" rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
                  </div>

                  <Button type="submit" className="w-full py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-white mt-4 shadow-lg shadow-primary/20">
                    Request Consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Experience - Dark Mode */}
        <section className="py-24 md:py-32 bg-[#061124] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-white tracking-widest uppercase">21+ Years Experience</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  Experience, Relationships, Results
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light">
                  As a women-owned and operated professional business advisory firm, we bring more than two decades of hands-on restructuring experience and deep industry relationships.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  We maintain longstanding relationships with lenders, attorneys, and restructuring professionals. Our value comes from our experience, reputation, and commitment to standing behind our clients through complex financial challenges.
                </p>
              </div>
              <div className="space-y-6">
                <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-white">Industry Pioneer</h3>
                  <p className="text-gray-400 font-light">
                    Pioneers in the merchant cash advance industry for over 20 years, with specialized expertise in MCA restructuring and creditor coordination.
                  </p>
                </div>
                <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-white">Trusted Advisors</h3>
                  <p className="text-gray-400 font-light">
                    We work diligently with all types of creditors, maintaining professional relationships that benefit our clients' restructuring outcomes.
                  </p>
                </div>
                <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-white">Hands-On Approach</h3>
                  <p className="text-gray-400 font-light">
                    Direct involvement in every engagement, coordinating with banks, lenders, vendors, attorneys, and financial stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 md:py-32 bg-gray-50 border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-[#0A192F]">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Hear directly from business owners who have successfully navigated financial challenges with Regroup Partners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative bg-[#061124]">
                  <iframe
                    src="https://www.youtube.com/embed/EGhrQgHy1IY?start=3&autoplay=1&mute=1&loop=1&playlist=EGhrQgHy1IY&controls=0&modestbranding=1&rel=0&playsinline=1"
                    title="Client Testimonial 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full" />
                  
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-[#0A192F]">
                    Business Owner Success Story
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Successful restructuring and creditor coordination leading to improved cash flow and business stabilization.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative bg-[#061124]">
                  <iframe
                    src="https://www.youtube.com/embed/GlEVh-3Jk1Y?start=1&autoplay=1&mute=1&loop=1&playlist=GlEVh-3Jk1Y&controls=0&modestbranding=1&rel=0&playsinline=1"
                    title="Client Testimonial 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full" />
                  
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-[#0A192F]">
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

        {/* Why Clients Choose Regroup Partners */}
        <section className="py-24 md:py-32 bg-[#0A192F] text-white border-t border-[#112240] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#061124] to-[#0A192F]"></div>
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              <div className="order-2 lg:order-1">
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1 border border-primary/30">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-semibold text-white mb-2">Intentionally Selective</h4>
                      <p className="text-gray-400 leading-relaxed font-light">We only take on approximately 200 files per year. Not every business owner qualifies for our services, and that selectivity is part of how we protect the quality of the work we provide.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1 border border-primary/30">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-semibold text-white mb-2">Dedicated Teams</h4>
                      <p className="text-gray-400 leading-relaxed font-light">When your business is under pressure, you should not feel like a number. You work fluidly with the same dedicated team day in and day out until the matter is resolved.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1 border border-primary/30">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-semibold text-white mb-2">Direct Communication</h4>
                      <p className="text-gray-400 leading-relaxed font-light">Your telephone calls are answered. Your emails are returned. We run our business with genuine concern for the pressure your business is facing.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-primary tracking-widest uppercase" style={{ fontSize: "24px" }}>Why Choose Us</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                  Not a call center. <br />
                  <span className="text-gray-400 font-light">A selective, hands-on business advisory firm.</span>
                </h2>
                
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl"></div>
                  <p className="text-lg text-gray-300 leading-relaxed font-light italic">
                    "Regroup Partners is intentionally selective. We are not a high-volume call center managing thousands of files with scripted responses and revolving representatives. This is not a run-of-the-mill debt company or a boiler-room operation."
                  </p>
                  <p className="mt-6 text-white font-semibold uppercase tracking-wider text-sm">
                    Focus on Stabilization, Cash Flow, and Resolution
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-[#0A192F]">
                Insights & Expertise
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Thought leadership on business restructuring, financial stabilization, and creditor coordination strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/insights" className="group block">
                <Card className="p-8 bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-xs font-bold text-primary tracking-wider uppercase mb-4">Business Restructuring</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-[#0A192F] group-hover:text-primary transition-colors">
                    How Business Restructuring Improves Cash Flow
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    Strategic approaches to improving operational cash flow through creditor coordination and financial stabilization.
                  </p>
                  <div className="flex items-center text-primary font-semibold text-sm">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>

              <Link href="/insights" className="group block">
                <Card className="p-8 bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-xs font-bold text-primary tracking-wider uppercase mb-4">MCA Advisory</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-[#0A192F] group-hover:text-primary transition-colors">
                    Understanding Merchant Cash Advance Restructuring
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    Expert guidance on navigating MCA obligations and coordinating with multiple advance providers.
                  </p>
                  <div className="flex items-center text-primary font-semibold text-sm">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>

              <Link href="/insights" className="group block">
                <Card className="p-8 bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-xs font-bold text-primary tracking-wider uppercase mb-4">Financial Strategy</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-[#0A192F] group-hover:text-primary transition-colors">
                    Working With Creditors During Financial Pressure
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    Building productive relationships with lenders and creditors through transparent communication and strategic coordination.
                  </p>
                  <div className="flex items-center text-primary font-semibold text-sm">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/insights"
                className="inline-flex items-center px-8 py-4 bg-[#0A192F] text-white font-semibold rounded-lg hover:bg-primary transition-colors duration-300 shadow-md">
                
                View All Insights <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="bg-[#0A192F] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center relative overflow-hidden h-full min-h-[400px]">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                <div className="relative z-10">
                  <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                    Schedule a Confidential Business Review
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                    Discuss your financial situation and explore strategic options with our specialized advisory team. No obligation. Completely discreet.
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">Call Us Directly</div>
                      <a href="tel:9548334958" className="text-3xl font-serif font-bold text-white hover:text-primary transition-colors">
                        (954) 833-4958
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 bg-white p-12 md:p-20 w-full">
                <Link href="/contact" className="block w-full">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-8 text-lg font-semibold shadow-lg shadow-primary/20">
                    
                    Schedule Your Review
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 text-center mt-6">
                  Information shared is bound by strict confidentiality agreements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>);

}