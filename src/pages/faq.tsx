import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  ArrowRight, Shield, Phone,
  MapPin, CheckCircle2, TrendingUp,
  Building2, Users, FileWarning, Wallet } from
"lucide-react";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-accent/20">
      <SEO
        title="Frequently Asked Questions | Regroup Partners"
        description="Answers to common questions about business restructuring, creditor coordination, cash flow improvement, and financial advisory services in Boca Raton, FL." />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
              {
                "@type": "Question",
                "name": "What is business restructuring?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Business restructuring is a strategic process used to reorganize a company's financial and operational structure. It helps businesses reduce debt burdens, improve cash flow, and achieve long-term financial stability without necessarily resorting to bankruptcy."
                }
              },
              {
                "@type": "Question",
                "name": "What is MCA debt restructuring?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MCA debt restructuring involves negotiating with Merchant Cash Advance providers to modify repayment terms. The goal is to reduce daily ACH withdrawals, lower the total payback amount, or secure more favorable terms to alleviate immediate cash flow pressure on the business."
                }
              }]

            })
          }} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Regroup Partners",
              "image": "https://regrouppartners.com/logo.jpg",
              "description": "Premium business restructuring and financial advisory firm based in Boca Raton, FL.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5255 North Federal Highway Suite 301",
                "addressLocality": "Boca Raton",
                "addressRegion": "FL",
                "postalCode": "33487",
                "addressCountry": "US"
              },
              "telephone": "+19548334958",
              "url": "https://regrouppartners.com"
            })
          }} />
        
      </Head>

      <Navigation />

      <main className="pt-20 md:pt-24">
        {/* Section 1: Hero */}
        <section className="relative min-h-[60vh] flex items-center bg-[#000000] overflow-hidden pt-12 pb-24">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-10"></div>
            <img
              src="/generated/faq-hero.png"
              alt="Corporate financial advisory office"
              className="w-full h-full object-cover opacity-60" />
            
          </div>
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-20 w-full">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-white leading-tight">
                Frequently Asked <span className="text-accent italic">Questions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                Answers to common questions about business restructuring, creditor coordination, cash flow improvement, and financial advisory services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="inline-flex">
                  <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 h-14 rounded-sm text-base font-semibold shadow-lg shadow-accent/20 transition-all hover:shadow-accent/40">
                    Schedule Free Consultation
                  </Button>
                </Link>
                <a href="tel:954-833-4958" className="inline-flex">
                  <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 px-8 h-14 rounded-sm text-base font-medium backdrop-blur-sm">
                    Speak With a Specialist
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">21+ Years</p>
                    <p className="text-xs text-gray-400">Experience</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Nationwide</p>
                    <p className="text-xs text-gray-400">Business Support</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Fast Response</p>
                    <p className="text-xs text-gray-400">Times</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO/GEO Intro */}
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
                Expert Guidance for Business Financial Challenges
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Based in Boca Raton, Florida, Regroup Partners provides premium business restructuring and financial advisory services to companies across the United States. We specialize in creditor coordination, MCA debt restructuring, and strategic cash flow improvement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you are facing aggressive creditor action, multiple daily ACH withdrawals, or general liquidity challenges, our expert team is here to provide clarity and actionable solutions. Below, you'll find answers to the most common questions we receive regarding our advisory services and stabilization processes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: FAQ Accordions */}
        <section className="py-24 bg-gray-50 border-b border-gray-200">
          <div className="max-w-[1000px] mx-auto px-6">
            
            <div className="mb-16">
              <h2 className="font-serif text-3xl font-semibold mb-8 text-gray-900 flex items-center gap-3">
                <Building2 className="text-accent w-8 h-8" />
                Business Restructuring
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="br-1" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">What is business restructuring?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Business restructuring is a strategic process used to reorganize a company's financial and operational structure. It involves evaluating current liabilities, operational inefficiencies, and cash flow bottlenecks, then implementing a comprehensive plan to reduce debt burdens, improve liquidity, and achieve long-term financial stability without necessarily resorting to bankruptcy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="br-2" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">How does business restructuring work?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    The process begins with a comprehensive financial assessment to understand your business's true financial position. We then develop a customized strategy that may involve negotiating with creditors, restructuring payment terms, optimizing operational expenses, and implementing new cash flow management protocols to stabilize the business.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="br-3" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">Can restructuring help avoid bankruptcy?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Yes, out-of-court business restructuring is often a highly effective alternative to bankruptcy. By proactively negotiating with creditors and implementing operational changes, many businesses can resolve their financial distress, avoid the severe consequences of a bankruptcy filing, and continue operations smoothly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="br-4" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">How long does the restructuring process take?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    The timeline varies significantly depending on the complexity of the business and the number of creditors involved. While immediate relief (such as halting aggressive creditor action) can often be achieved within weeks, a full restructuring and stabilization process typically takes between 3 to 12 months.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="br-5" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">What industries benefit most from restructuring?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Restructuring is highly beneficial for industries with tight margins or variable cash flow, including restaurants, transportation and logistics, construction, healthcare practices, retail, and e-commerce. However, any business facing mounting debt pressure or operational inefficiencies can benefit from our advisory services.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mb-16">
              <h2 className="font-serif text-3xl font-semibold mb-8 text-gray-900 flex items-center gap-3">
                <FileWarning className="text-accent w-8 h-8" />
                MCA & Creditor Coordination
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="mca-1" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">What is MCA debt restructuring?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Merchant Cash Advance (MCA) debt restructuring involves strategically negotiating with MCA funders to modify the terms of your advance. The primary goal is to alleviate immediate financial pressure by reducing daily or weekly ACH withdrawals, adjusting the total payback structure, and creating a manageable path to resolving the obligation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mca-2" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">Can creditor coordination reduce daily ACH withdrawals?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Yes. One of the primary objectives of creditor coordination is to renegotiate unsustainable daily or weekly ACH payments. By demonstrating your business's true financial capacity to creditors, we work to establish more realistic payment terms that allow your business to retain enough working capital to operate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mca-3" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">Will creditors stop calling after coordination begins?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    When you engage Regroup Partners, we step in as your primary point of contact for creditors. While we cannot guarantee all calls will stop immediately, our involvement signals to creditors that you are taking professional steps to resolve the situation, which typically significantly reduces aggressive collection efforts and direct harassment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mca-4" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">How do MCA negotiations work?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Our team leverages deep industry experience and established relationships to communicate directly with MCA funders on your behalf. We present a clear, documented case of your business's financial reality and propose realistic, sustainable repayment structures that protect both your business operations and the funder's interests.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mca-5" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">Can businesses recover from multiple stacked MCA loans?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Yes. Having multiple stacked MCAs is a common crisis point, but it is resolvable. We implement aggressive creditor coordination strategies to address the entire capital stack simultaneously, prioritizing the most critical obligations and working to consolidate the financial pressure into a manageable recovery plan.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mb-16">
              <h2 className="font-serif text-3xl font-semibold mb-8 text-gray-900 flex items-center gap-3">
                <TrendingUp className="text-accent w-8 h-8" />
                Cash Flow Improvement
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="cf-1" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">What causes business cash flow problems?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Cash flow problems typically stem from a combination of factors, including rapid expansion without adequate capital, seasonal revenue gaps, delayed accounts receivable, over-leveraged debt (especially high-interest MCAs), inefficient inventory management, and unoptimized operating expenses.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cf-2" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">How can cash flow consulting help my business?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Professional cash flow consulting provides an objective, expert analysis of your financial operations. We identify liquidity bottlenecks, implement expense reduction strategies, improve accounts receivable processes, and restructure debt payments to free up critical working capital needed for daily operations and growth.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cf-3" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">What are the signs of poor cash flow?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Key warning signs include difficulty making payroll on time, constantly delaying vendor payments, relying heavily on high-interest short-term loans (like MCAs) to cover daily expenses, declining bank balances despite steady sales, and the inability to build cash reserves for emergencies.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mb-16">
              <h2 className="font-serif text-3xl font-semibold mb-8 text-gray-900 flex items-center gap-3">
                <Wallet className="text-accent w-8 h-8" />
                Financial Advisory Services
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="fa-1" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">What services does Regroup Partners provide?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    We provide premium, institutional-grade business restructuring, creditor coordination, MCA debt restructuring, cash flow improvement consulting, and comprehensive financial advisory services designed to stabilize distressed businesses and position them for sustainable growth.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fa-2" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">How does financial advisory help struggling businesses?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Our advisory services provide business owners with the high-level financial expertise they may lack internally. We act as a strategic partner, offering objective analysis, negotiating with hostile creditors, developing restructuring plans, and implementing the operational controls necessary to reverse financial decline.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fa-3" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">Do you work with businesses nationwide?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Yes. While we are headquartered in Boca Raton, Florida, Regroup Partners successfully serves and advises businesses across the entire United States, providing expert restructuring and coordination services regardless of your company's location.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-semibold mb-8 text-gray-900 flex items-center gap-3">
                <Users className="text-accent w-8 h-8" />
                Consultation & Process
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="cp-1" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">How do I get started?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Getting started is simple. Contact us via phone or submit a Confidential Business Review form through our website. A restructuring specialist will promptly reach out to discuss your specific situation and schedule a comprehensive, no-obligation assessment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cp-2" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">Is the consultation confidential?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Absolutely. We understand the sensitivity of financial distress. All consultations, discussions, and document reviews are handled with the utmost discretion and strict confidentiality to protect your business's reputation and operational integrity.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cp-3" className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm data-[state=open]:border-accent/30 transition-all">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-accent hover:no-underline">How quickly can the process begin?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    Time is often critical in financial distress situations. We can begin assessing your situation immediately upon engagement. In urgent cases—such as imminent creditor action or aggressive ACH withdrawals—we can initiate contact with creditors within 24 to 48 hours of formal engagement.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </section>

        {/* Section 4: Internal Linking */}
        <section className="py-24 bg-white border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
                Explore Our Core Services
              </h2>
              <p className="text-lg text-gray-600">
                Discover how our specialized financial advisory services can help stabilize your business operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/business-restructuring" className="group">
                <Card className="p-8 h-full bg-gray-50 border-gray-200 hover:bg-white hover:border-accent hover:shadow-xl transition-all duration-300">
                  <Building2 className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Restructuring</h3>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-2">Strategic reorganization to improve financial stability and operational efficiency.</p>
                  <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Card>
              </Link>
              
              <Link href="/creditor-coordination" className="group">
                <Card className="p-8 h-full bg-gray-50 border-gray-200 hover:bg-white hover:border-accent hover:shadow-xl transition-all duration-300">
                  <Users className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Creditor Coordination</h3>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-2">Expert negotiation and management of creditor communications and repayment terms.</p>
                  <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Card>
              </Link>
              
              <Link href="/cash-flow-improvement" className="group">
                <Card className="p-8 h-full bg-gray-50 border-gray-200 hover:bg-white hover:border-accent hover:shadow-xl transition-all duration-300">
                  <TrendingUp className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cash Flow Improvement</h3>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-2">Actionable strategies to increase working capital and alleviate payment pressure.</p>
                  <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Card>
              </Link>

              <Link href="/services" className="group">
                <Card className="p-8 h-full bg-gray-50 border-gray-200 hover:bg-[#000000] hover:border-black hover:shadow-xl transition-all duration-300">
                  <Wallet className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-3 transition-colors">All Advisory Services</h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-6 line-clamp-2 transition-colors">View our comprehensive suite of institutional-grade financial consulting solutions.</p>
                  <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform">
                    View Services <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Final CTA */}
        <section className="bg-[#050505] relative overflow-hidden py-24 border-t border-white/10">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-0 left-[20%] w-[40%] h-[40%] bg-accent/10 blur-[150px] rounded-full"></div>
          </div>
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
              <div className="flex flex-col justify-center text-left">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white leading-[1.1]">
                  Still Have Questions?
                </h2>
                <p className="text-2xl text-accent font-medium mb-8">
                  Speak directly with a business restructuring specialist today.
                </p>
                <p className="text-gray-400 mb-12 leading-relaxed text-lg max-w-xl">
                  Don't let financial pressure dictate your business's future. Schedule a confidential consultation to explore tailored stabilization strategies and actionable solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 bg-white/[0.03] rounded-2xl border border-white/5 mb-10 w-full max-w-xl transition-colors hover:bg-white/[0.05]">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wider">Speak with an advisor</p>
                    <a href="tel:954-833-4958" className="text-2xl font-semibold text-white hover:text-accent transition-colors">
                      954-833-4958
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 opacity-80 grayscale">
                  
                </div>
              </div>
              
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2.5 text-left">
                    <Label htmlFor="name" className="text-gray-900 font-semibold text-sm">Name</Label>
                    <Input id="name" placeholder="Full Name" className="bg-gray-50/50 h-14 rounded-xl border-gray-200 focus-visible:ring-accent focus-visible:border-accent text-base px-4" />
                  </div>
                  
                  <div className="space-y-2.5 text-left">
                    <Label htmlFor="businessName" className="text-gray-900 font-semibold text-sm">Business Name</Label>
                    <Input id="businessName" placeholder="Company Name" className="bg-gray-50/50 h-14 rounded-xl border-gray-200 focus-visible:ring-accent focus-visible:border-accent text-base px-4" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2.5 text-left">
                      <Label htmlFor="email" className="text-gray-900 font-semibold text-sm">Email Address</Label>
                      <Input id="email" type="email" placeholder="email@example.com" className="bg-gray-50/50 h-14 rounded-xl border-gray-200 focus-visible:ring-accent focus-visible:border-accent text-base px-4" />
                    </div>
                    <div className="space-y-2.5 text-left">
                      <Label htmlFor="phone" className="text-gray-900 font-semibold text-sm">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 000-0000" className="bg-gray-50/50 h-14 rounded-xl border-gray-200 focus-visible:ring-accent focus-visible:border-accent text-base px-4" />
                    </div>
                  </div>
                  
                  <div className="space-y-2.5 text-left">
                    <Label htmlFor="description" className="text-gray-900 font-semibold text-sm">Brief Description of Situation</Label>
                    <Textarea
                      id="description"
                      placeholder="Please briefly describe your current challenges or questions..."
                      className="min-h-[140px] resize-y bg-gray-50/50 rounded-xl border-gray-200 p-4 focus-visible:ring-accent focus-visible:border-accent text-base" />
                    
                  </div>
                  
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white h-16 rounded-xl text-lg font-semibold mt-4 shadow-lg shadow-accent/20 transition-all hover:shadow-accent/40 hover:-translate-y-0.5">
                    Get Free Consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);

}