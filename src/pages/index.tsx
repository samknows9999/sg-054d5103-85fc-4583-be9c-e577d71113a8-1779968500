import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Building2, Users, TrendingUp, Shield } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Regroup Partners | Business Restructuring & Financial Advisory"
        description="Experienced business restructuring and financial advisory firm specializing in creditor coordination, cash flow improvement, and merchant cash advance advisory. 21+ years of expertise."
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/generated/executive-advisory-hero.png"
              alt="Professional business advisory environment"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
            <div className="mb-6 inline-block">
              <span className="text-sm font-medium text-primary tracking-wide uppercase">
                Business Restructuring & Financial Advisory
              </span>
            </div>
            
            <h1 className="font-serif font-semibold text-5xl md:text-7xl text-foreground mb-8 leading-tight tracking-tight">
              Navigating Financial Complexity Through Strategic Restructuring
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Helping businesses achieve financial stability through creditor coordination, 
              cash flow optimization, and hands-on advisory. 21+ years of experience working 
              with lenders, attorneys, and financial stakeholders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base"
                >
                  Request Confidential Review
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/20 text-foreground hover:bg-foreground/5 px-8 py-6 text-base"
                >
                  Learn About Our Approach
                </Button>
              </Link>
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