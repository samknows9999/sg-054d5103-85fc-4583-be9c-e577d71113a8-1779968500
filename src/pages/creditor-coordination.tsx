import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Building2, Shield, TrendingUp, AlertTriangle, FileText, 
  Briefcase, MessageSquare, Clock, Phone, Scale, Lock, Users, Loader2
} from "lucide-react";

const challenges = [
  { icon: AlertTriangle, title: "Multiple MCA Payments", desc: "Struggling to keep up with stacked Merchant Cash Advance daily or weekly draws." },
  { icon: Clock, title: "Daily ACH Withdrawals", desc: "Cash flow drained instantly by aggressive automatic clearing house payments." },
  { icon: Phone, title: "Vendor Collection Calls", desc: "Constant interruptions and damaged supplier relationships due to unpaid invoices." },
  { icon: Scale, title: "Lawsuit Threats", desc: "Creditors and lenders threatening legal action or UCC lien enforcements." },
  { icon: TrendingUp, title: "Cash Flow Collapse", desc: "Unable to sustain core operations due to overwhelming debt obligations." },
  { icon: Users, title: "Payroll Pressure", desc: "Risking employee retention because operational funds are consumed by creditors." },
  { icon: Briefcase, title: "High Interest Loan Payments", desc: "Trapped in cycles of high-interest debt that prevent principal reduction." },
  { icon: MessageSquare, title: "Overwhelming Communication", desc: "Unable to focus on the business due to constant creditor harassment." }
];

const processes = [
  { step: "01", title: "Financial Review", desc: "Comprehensive analysis of your cash flow, obligations, and creditor positions." },
  { step: "02", title: "Creditor Analysis", desc: "Identifying leverage points and prioritizing critical vendor and lender accounts." },
  { step: "03", title: "Communication Strategy", desc: "Taking over primary correspondence to shield you from aggressive collection tactics." },
  { step: "04", title: "Negotiation & Coordination", desc: "Structuring realistic payment solutions that align with actual business revenues." },
  { step: "05", title: "Payment Structure Planning", desc: "Implementing structured remittance plans to replace chaotic daily draws." },
  { step: "06", title: "Business Stabilization", desc: "Monitoring the restructuring plan while you return focus to revenue generation." }
];

const services = [
  "Creditor Communication Management", "MCA Coordination", "Vendor Negotiations", 
  "Payment Scheduling Assistance", "Cash Flow Planning", "Financial Restructuring Support", 
  "Business Stabilization Consulting", "Accounts Payable Coordination"
];

const industries = [
  "Restaurants & Hospitality", "Transportation & Logistics", "Construction & Contracting", 
  "Medical & Healthcare Practices", "Retail & Wholesale", "E-commerce Companies", 
  "Manufacturing Facilities", "Service-Based Businesses"
];

const faqs = [
  { q: "What is creditor coordination?", a: "Creditor coordination is a professional advisory service where experts act as an intermediary between your business and its creditors, structuring communications and payment terms to stabilize your cash flow." },
  { q: "How does creditor coordination help businesses?", a: "It centralizes all creditor communication, stops daily harassment, protects vendor relationships, and establishes realistic payment structures based on what your business can actually afford." },
  { q: "Can creditor coordination reduce MCA pressure?", a: "Yes. By coordinating directly with MCA funders, we work to transition unmanageable daily ACH withdrawals into structured, sustainable payment schedules." },
  { q: "Does creditor coordination stop collection calls?", a: "Once engaged, we instruct your creditors to direct all communications to our advisory team, significantly reducing the pressure and interruptions to your daily operations." },
  { q: "Is creditor coordination an alternative to bankruptcy?", a: "Yes. It is a strategic, out-of-court approach to managing debt and cash flow without the severe long-term consequences, public filings, and operational loss associated with bankruptcy." },
  { q: "How quickly can the process begin?", a: "We can begin our financial review immediately after our initial consultation, often stepping in to manage aggressive creditor communications within the first 24 to 48 hours." }
];

export default function CreditorCoordination() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const emailBody = `
Creditor Coordination Consultation Request

First Name: ${formData.get("firstName")}
Last Name: ${formData.get("lastName")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Company: ${formData.get("company")}
    `.trim();
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "Creditor Coordination Consultation Request",
          message: emailBody,
          from: formData.get("email") as string
        })
      });

      if (response.ok) {
        toast({
          title: "Consultation Request Received",
          description: "Our coordination team will reach out shortly to discuss your situation.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Regroup Partners - Creditor Coordination Services",
              "description": "Professional creditor coordination and negotiation services for struggling businesses nationwide.",
              "areaServed": "US",
              "serviceType": "Creditor Coordination, MCA Negotiation, Business Debt Management"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })
          }}
        />
      </Head>
      <SEO 
        title="Professional Creditor Coordination Services | Regroup Partners" 
        description="Reduce financial pressure and stabilize cash flow with expert creditor coordination and business debt management services. Nationwide support based in Boca Raton, FL."
      />
      <Navigation />
      
      <main className="bg-[#061124]">
        {/* SECTION 1 - HERO */}
        <Hero
          title="Supporting Businesses Through Financial Negotiations"
          subtitle="Helping businesses communicate with creditors, reduce financial pressure, stabilize cash flow, and create manageable repayment solutions."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Creditor Coordination" }
          ]}
          backgroundImage="/generated/creditor-coordination-hero.png"
        />
        
        {/* Trust Indicators Bar */}
        <div className="bg-primary/10 border-y border-primary/20 backdrop-blur-sm py-4">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-12 text-white/90 text-sm font-medium">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> 20+ Years Experience</span>
            <span className="flex items-center gap-2"><Building2 className="w-4 h-4 text-primary" /> Nationwide Business Support</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Fast Response Times</span>
            <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> Financial Recovery Experts</span>
          </div>
        </div>

        {/* SECTION 2 - SEO/GEO INTRO */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A192F] mb-6">
              Regain Operational Control with Expert Creditor Negotiations
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Based in <strong>Boca Raton, Florida</strong> and serving businesses across the <strong>United States</strong>, Regroup Partners provides institutional-grade <strong>creditor coordination services</strong> for companies facing severe liquidity crises. When multiple <strong>MCA lenders</strong>, suppliers, and institutions demand immediate payment, internal <strong>cash flow stabilization</strong> becomes impossible without a structured intervention.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our advisory team steps in as a critical buffer, handling <strong>vendor payment coordination</strong> and aggressive <strong>business debt management</strong> so you can focus on <strong>operational recovery</strong>. We negotiate directly with creditors to establish realistic, sustainable structures that prevent business collapse.
            </p>
          </div>
        </section>

        {/* SECTION 3 - WHAT IS CREDITOR COORDINATION */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-[#0A192F]/10 border border-[#0A192F]/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-[#0A192F] tracking-wide uppercase">The Advisory Advantage</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A192F] mb-6 leading-tight">
                  What is Business Creditor Coordination?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  <strong>Business creditor coordination</strong> is the strategic process of centralizing and managing all communications, negotiations, and payment structures between a struggling enterprise and its creditors. 
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  When facing aggressive collection tactics, businesses often attempt ad-hoc <strong>creditor communication services</strong> internally, which leads to fractured agreements and continued <strong>MCA creditor coordination</strong> failures. We provide centralized <strong>creditor negotiation assistance</strong>, replacing chaos with structured, professional <strong>business debt management support</strong> that protects core operations.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 transform translate-x-4 translate-y-4 rounded-lg"></div>
                <img src="/generated/services-workspace.png" alt="Creditor Coordination Strategy" className="relative z-10 rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 - COMMON CHALLENGES */}
        <section className="py-20 bg-[#0A192F]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6">
                Common Business Challenges We Address
              </h2>
              <p className="text-gray-300 text-lg">
                Financial distress rarely happens in isolation. We resolve the compounding pressures that threaten business survival.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {challenges.map((item, i) => (
                <Card key={i} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-white font-semibold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 - PROCESS TIMELINE */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A192F] text-center mb-16">
              Our Creditor Coordination Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processes.map((proc, i) => (
                <div key={i} className="relative p-8 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow group">
                  <div className="text-5xl font-bold text-gray-200 absolute top-4 right-6 group-hover:text-primary/10 transition-colors">{proc.step}</div>
                  <h3 className="text-xl font-semibold text-[#0A192F] mb-4 relative z-10">{proc.title}</h3>
                  <p className="text-gray-600 relative z-10">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 & 7 - SERVICES & INDUSTRIES */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              {/* Services Included */}
              <div>
                <h2 className="font-serif text-3xl font-semibold text-[#0A192F] mb-8">Services Included</h2>
                <div className="space-y-4">
                  {services.map((service, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="font-medium text-[#0A192F]">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries We Help */}
              <div>
                <h2 className="font-serif text-3xl font-semibold text-[#0A192F] mb-8">Industries We Help</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {industries.map((industry, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg bg-white">
                      <Briefcase className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700 text-sm font-medium">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 8 - GEO TARGETED BLOCKS */}
        <section className="py-20 bg-[#061124]">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white text-center mb-12">
              National Reach, Local Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Creditor Coordination Florida", desc: "Headquartered in Boca Raton, we provide aggressive localized support for Florida businesses facing severe MCA and vendor pressure." },
                { title: "MCA Negotiation California", desc: "Navigating complex tech, retail, and manufacturing debt structures for California-based enterprises requiring immediate cash flow relief." },
                { title: "Business Debt Texas", desc: "Supporting energy, logistics, and healthcare sectors in Texas with structured business debt coordination and creditor management." },
                { title: "Financial Advisory New York", desc: "Expert business financial advisory and restructuring support for New York commercial entities navigating high-stakes financial distress." }
              ].map((geo, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-primary font-semibold mb-3">{geo.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{geo.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 - BENEFITS */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A192F] mb-12">
              The Benefits of Professional Coordination
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
              {[
                "Reduced Financial Pressure", "Better Cash Flow Visibility", "Centralized Creditor Communication",
                "Reduced Daily Payment Stress", "Improved Operational Focus", "Professional Business Support"
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-[#0A192F]">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10 - FAQS */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A192F] text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-[#0A192F] hover:text-primary py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* SECTION 11 - FINAL CTA */}
        <section className="py-24 bg-[#0A192F] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-multiply"></div>
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <Lock className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-6">
              Take Control of Your Business Financial Situation
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Stop the daily pressure and stabilize your operations. Contact our advisory team for a confidential review of your business debt and cash flow.
            </p>
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-2xl mx-auto text-left">
              <h3 className="text-2xl font-semibold text-[#0A192F] mb-6 text-center">Confidential Consultation</h3>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-primary outline-none" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="email" placeholder="Work Email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-primary outline-none" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <input type="text" placeholder="Company Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-primary outline-none" />
                <Button disabled={isSubmitting} className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-white mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    "Get Free Business Consultation"
                  )}
                </Button>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500">Or call us immediately at <a href="tel:954-234-2300" className="font-semibold text-[#0A192F] hover:text-primary">(954) 234-2300</a></p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}