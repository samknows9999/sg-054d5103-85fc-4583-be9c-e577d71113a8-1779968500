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
  Shield, TrendingUp, Users, Target, CheckCircle2, ArrowRight,
  Briefcase, BarChart3, FileText, Scale, Building2, Loader2,
  AlertTriangle, Clock, DollarSign, TrendingDown, Handshake, Lock
} from "lucide-react";

const challenges = [
  { icon: TrendingDown, title: "Declining Revenue", desc: "Sustained drops in sales performance threatening operational viability." },
  { icon: DollarSign, title: "Cash Flow Crisis", desc: "Insufficient liquidity to meet daily operational and payroll obligations." },
  { icon: AlertTriangle, title: "Mounting Debt Obligations", desc: "Overwhelming creditor pressure from multiple lenders and vendors." },
  { icon: Clock, title: "Vendor Payment Delays", desc: "Deteriorating supplier relationships due to extended payment terms." },
  { icon: Scale, title: "Legal Pressure", desc: "Threatened or active litigation from creditors and business partners." },
  { icon: Users, title: "Employee Retention Risk", desc: "Talent loss due to financial instability and uncertain future." },
  { icon: BarChart3, title: "Operational Inefficiencies", desc: "Bloated cost structures preventing profitability even with adequate revenue." },
  { icon: FileText, title: "Lack of Strategic Direction", desc: "Absence of a cohesive turnaround plan or recovery roadmap." }
];

const solutions = [
  { title: "Financial Analysis & Diagnosis", desc: "Comprehensive review of balance sheets, cash flow, and operational metrics." },
  { title: "Creditor Coordination", desc: "Professional negotiation with lenders, vendors, and stakeholders." },
  { title: "Cost Reduction Strategies", desc: "Identifying and eliminating non-essential expenses to improve margins." },
  { title: "Cash Flow Optimization", desc: "Restructuring payment terms and improving working capital management." },
  { title: "Operational Turnaround", desc: "Strategic initiatives to restore profitability and business health." },
  { title: "Debt Restructuring", desc: "Renegotiating terms with creditors to align with business capacity." },
  { title: "Strategic Planning", desc: "Developing actionable recovery roadmaps and growth strategies." },
  { title: "Stakeholder Communication", desc: "Maintaining transparent dialogue with all business stakeholders." }
];

const processSteps = [
  { step: "01", title: "Initial Assessment", desc: "Comprehensive analysis of financial position, obligations, and operational challenges." },
  { step: "02", title: "Stakeholder Analysis", desc: "Mapping all creditor relationships, obligations, and negotiation priorities." },
  { step: "03", title: "Strategy Development", desc: "Creating a customized turnaround plan aligned with business realities." },
  { step: "04", title: "Creditor Negotiations", desc: "Professional coordination with lenders and vendors to restructure terms." },
  { step: "05", title: "Implementation", desc: "Executing operational changes and financial restructuring initiatives." },
  { step: "06", title: "Ongoing Monitoring", desc: "Continuous oversight to ensure sustained recovery and stability." }
];

const industries = [
  "Restaurants & Hospitality", "Transportation & Logistics", "Construction Companies",
  "Medical & Healthcare", "Retail & E-commerce", "Manufacturing",
  "Professional Services", "Technology Companies"
];

const faqs = [
  { q: "What is business restructuring?", a: "Business restructuring is the process of reorganizing a company's operations, finances, and debt obligations to restore profitability and operational viability. It involves strategic changes to improve cash flow, reduce costs, and negotiate with creditors." },
  { q: "When should a business consider restructuring?", a: "Restructuring should be considered when facing sustained cash flow problems, mounting debt obligations, vendor payment difficulties, or declining profitability. Early intervention typically yields better outcomes than waiting until crisis conditions develop." },
  { q: "Is restructuring an alternative to bankruptcy?", a: "Yes. Professional business restructuring is often an effective alternative to bankruptcy, allowing companies to address financial distress through negotiation and operational improvements without the severe consequences of formal bankruptcy proceedings." },
  { q: "How long does business restructuring take?", a: "The timeline varies based on complexity and severity. Initial relief measures can begin within days, while comprehensive restructuring typically takes 3-12 months. Each situation is unique and requires customized timing." },
  { q: "What industries benefit from restructuring services?", a: "All industries can benefit. We commonly work with restaurants, construction, healthcare, retail, transportation, and professional services - any business facing financial distress can benefit from professional restructuring guidance." },
  { q: "How does restructuring protect my business?", a: "Restructuring provides immediate pressure relief by coordinating creditor communications, restructuring debt obligations, improving cash flow, and implementing operational changes - all designed to stabilize operations and create a sustainable path forward." }
];

export default function BusinessRestructuring() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const emailBody = `
Business Restructuring Consultation Request

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
          subject: "Business Restructuring Consultation Request",
          message: emailBody,
          from: formData.get("email") as string,
          customerName: `${formData.get("firstName")} ${formData.get("lastName")}`
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setShowSuccess(false), 8000);
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
              "name": "Regroup Partners - Business Restructuring Services",
              "description": "Professional business restructuring and turnaround services for companies facing financial challenges.",
              "areaServed": "US",
              "serviceType": "Business Restructuring, Financial Turnaround, Debt Restructuring"
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
        title="Business Restructuring Services | Turnaround & Recovery Solutions"
        description="Comprehensive business restructuring solutions for companies facing financial challenges. Expert turnaround strategies, debt negotiation, and operational recovery services."
        url="/business-restructuring"
      />
      <Navigation />
      
      <main className="bg-[#061124]">
        <Hero
          title="Business Restructuring & Financial Recovery"
          subtitle="Strategic turnaround solutions for businesses facing financial distress. Professional guidance to restore operational stability and create sustainable recovery pathways."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Business Restructuring" }
          ]}
          backgroundImage="/generated/business-restructuring-hero.png"
        />
        
        <div className="bg-primary/10 border-y border-primary/20 backdrop-blur-sm py-4">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-12 text-white/90 text-sm font-medium">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> 20+ Years Experience</span>
            <span className="flex items-center gap-2"><Building2 className="w-4 h-4 text-primary" /> Nationwide Support</span>
            <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> Proven Recovery Methods</span>
            <span className="flex items-center gap-2"><Handshake className="w-4 h-4 text-primary" /> Creditor Coordination Experts</span>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A192F] mb-6">
              Expert Business Restructuring & Turnaround Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Based in <strong>Boca Raton, Florida</strong> and serving businesses nationwide, Regroup Partners provides institutional-grade <strong>business restructuring services</strong> for companies facing severe financial challenges. When mounting debt, cash flow crises, and operational pressures threaten business survival, our advisory team delivers strategic <strong>financial turnaround solutions</strong> designed to restore stability and create sustainable recovery pathways.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in <strong>debt restructuring</strong>, <strong>creditor coordination</strong>, and <strong>operational turnaround strategies</strong> - providing businesses with the professional guidance needed to navigate financial distress without resorting to bankruptcy.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-[#0A192F]/10 border border-[#0A192F]/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-[#0A192F] tracking-wide uppercase">Strategic Recovery</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A192F] mb-6 leading-tight">
                  What is Business Restructuring?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  <strong>Business restructuring</strong> is the strategic process of reorganizing a company's financial obligations, operational structure, and stakeholder relationships to restore profitability and ensure long-term viability.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  When businesses face declining revenues, mounting debt, or operational inefficiencies, internal attempts at recovery often fail due to lack of expertise and creditor relationships. Professional <strong>financial restructuring</strong> provides the strategic framework, creditor coordination, and operational guidance needed to achieve sustainable turnaround results.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 transform translate-x-4 translate-y-4 rounded-lg"></div>
                <img src="/generated/services-advisory.png" alt="Business Restructuring Strategy" className="relative z-10 rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0A192F]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6">
                Common Business Restructuring Challenges
              </h2>
              <p className="text-gray-300 text-lg">
                Financial distress manifests through multiple pressure points that require coordinated professional intervention.
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

        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A192F] text-center mb-16">
              Our Business Restructuring Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((proc, i) => (
                <div key={i} className="relative p-8 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow group">
                  <div className="text-5xl font-bold text-gray-200 absolute top-4 right-6 group-hover:text-primary/10 transition-colors">{proc.step}</div>
                  <h3 className="text-xl font-semibold text-[#0A192F] mb-4 relative z-10">{proc.title}</h3>
                  <p className="text-gray-600 relative z-10">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-[#0A192F] mb-8">Restructuring Solutions</h2>
                <div className="space-y-4">
                  {solutions.map((service, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-[#0A192F] mb-1">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-semibold text-[#0A192F] mb-8">Industries We Serve</h2>
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

        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A192F] mb-12">
              Benefits of Professional Restructuring
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
              {[
                "Restored Financial Stability", "Improved Cash Flow Management", "Professional Creditor Coordination",
                "Operational Efficiency Gains", "Sustainable Recovery Plans", "Bankruptcy Alternative Solutions"
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-[#0A192F]">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        <section className="py-24 bg-[#0A192F] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-multiply"></div>
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <Lock className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-6">
              Begin Your Business Recovery Journey
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Take the first step toward financial stability. Contact our restructuring team for a confidential assessment of your business situation.
            </p>
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-2xl mx-auto text-left">
              <h3 className="text-2xl font-semibold text-[#0A192F] mb-6 text-center">Confidential Business Assessment</h3>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                {showSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-green-900 mb-1">Thank you for contacting REgroup Partners.</h3>
                        <p className="text-sm text-green-800">A member of our team will reach out shortly.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="firstName" type="text" placeholder="First Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-primary outline-none" required />
                  <input name="lastName" type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-primary outline-none" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="email" type="email" placeholder="Work Email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-primary outline-none" required />
                  <input name="phone" type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-primary outline-none" required />
                </div>
                <input name="company" type="text" placeholder="Company Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-primary outline-none" required />
                <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-white mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    "Get Free Restructuring Consultation"
                  )}
                </Button>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500">Or call us immediately at <a href="tel:+19543541800" className="font-semibold text-[#0A192F] hover:text-primary">(954) 354-1800</a></p>
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