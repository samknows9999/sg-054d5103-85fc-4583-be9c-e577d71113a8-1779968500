import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { 
  Building2, LineChart, Shield, Target, Phone, MapPin, CheckCircle2, 
  ArrowRight, FileWarning, Wallet, TrendingDown, Clock, CreditCard, 
  Receipt, Calculator, HardHat, Stethoscope, Coffee, ShoppingBag, Truck,
  Briefcase
} from "lucide-react";

// Data Arrays
const challenges = [
  { icon: Clock, title: "Multiple Daily ACH Withdrawals", desc: "Constant drain on operating accounts causing severe liquidity shortages." },
  { icon: FileWarning, title: "Stacked MCA Loans", desc: "Multiple overlapping advances creating an unsustainable daily payment burden." },
  { icon: TrendingDown, title: "Declining Cash Flow", desc: "Insufficient working capital to cover essential business operations." },
  { icon: Receipt, title: "Vendor Payment Delays", desc: "Struggling to maintain critical supplier relationships due to lack of funds." },
  { icon: Wallet, title: "Payroll Pressure", desc: "Anxiety surrounding meeting payroll obligations for key employees." },
  { icon: Phone, title: "Aggressive Collection Activity", desc: "Relentless communication from funders causing severe operational distraction." },
  { icon: Calculator, title: "High Factor Rates", desc: "Exorbitant cost of capital disguised by short-term repayment structures." },
  { icon: LineChart, title: "Revenue Instability", desc: "Inability to predict or stabilize monthly business revenue cycles." }
];

const solutions = [
  { title: "MCA Payment Restructuring", desc: "Strategic negotiation to align payment structures with actual business revenue." },
  { title: "Cash Flow Analysis", desc: "Comprehensive review of inflows and outflows to identify immediate liquidity opportunities." },
  { title: "Creditor Coordination", desc: "Centralized, professional communication with all advance providers and lenders." },
  { title: "Financial Assessments", desc: "Deep-dive operational review to determine the true health of the business." },
  { title: "Payment Strategy Planning", desc: "Developing a sustainable, long-term approach to debt servicing." },
  { title: "Working Capital Improvement", desc: "Techniques to preserve cash and optimize available operating funds." },
  { title: "Vendor Negotiation Support", desc: "Assisting in managing critical trade payables during recovery phases." },
  { title: "Business Stabilization Consulting", desc: "Holistic advisory to return the enterprise to a state of operational balance." }
];

const processSteps = [
  { step: "01", title: "Business Financial Review", desc: "Comprehensive analysis of current financial obligations, cash position, and operational health." },
  { step: "02", title: "MCA Obligation Analysis", desc: "Detailed review of all active advances, factor rates, and daily withdrawal burdens." },
  { step: "03", title: "Cash Flow Evaluation", desc: "Identifying immediate opportunities to preserve liquidity and extend operational runway." },
  { step: "04", title: "Creditor Coordination Strategy", desc: "Developing a unified communication protocol for all funding sources." },
  { step: "05", title: "Financial Restructuring Plan", desc: "Executing strategic adjustments to align debt service with realistic business capacity." },
  { step: "06", title: "Ongoing Stabilization Support", desc: "Continuous advisory to ensure long-term financial health and operational recovery." }
];

const benefits = [
  "Reduced financial pressure",
  "Better cash flow visibility",
  "Improved operational stability",
  "Centralized creditor communication",
  "Reduced daily payment stress",
  "Structured business recovery support"
];

const industries = [
  { icon: Coffee, title: "Restaurants", desc: "Managing seasonal fluctuations and high overhead while addressing aggressive daily MCA drafts." },
  { icon: Truck, title: "Trucking & Transportation", desc: "Stabilizing cash flow disrupted by fuel costs, repairs, and stacked merchant advances." },
  { icon: HardHat, title: "Construction Companies", desc: "Aligning debt payments with delayed project milestone payouts and material costs." },
  { icon: Stethoscope, title: "Medical Practices", desc: "Balancing insurance reimbursement delays with the immediate burden of short-term capital." },
  { icon: Building2, title: "Hospitality Businesses", desc: "Structuring financial recovery for hotels and venues facing occupancy-driven revenue gaps." },
  { icon: ShoppingBag, title: "Retail Stores", desc: "Optimizing working capital to maintain inventory levels without relying on high-cost daily advances." },
  { icon: Target, title: "E-commerce Companies", desc: "Realigning digital marketing and inventory spend to survive aggressive MCA payback structures." },
  { icon: Briefcase, title: "Service-Based Businesses", desc: "Advising professional services on strategies to restore consistent operational liquidity." }
];

const geoBlocks = [
  { region: "Florida", title: "MCA Advisory Florida", desc: "Serving businesses from Miami to Jacksonville with premium MCA restructuring and financial advisory. We help Florida enterprises stabilize cash flow." },
  { region: "California", title: "MCA Restructuring California", desc: "Providing Los Angeles, San Francisco, and statewide businesses with professional creditor coordination and operational recovery strategies." },
  { region: "Texas", title: "Merchant Cash Advance Help Texas", desc: "Assisting Houston, Dallas, and Austin companies in managing stacked advances and improving vital working capital." },
  { region: "New York", title: "Business Financial Recovery New York", desc: "Delivering institutional-grade business restructuring and MCA advisory services to NYC and statewide commercial entities." }
];

const caseStudies = [
  { metric: "72%", title: "Reduced Daily Pressure", desc: "Successfully renegotiated multiple stacked MCAs, extending terms and dramatically reducing the daily cash drain." },
  { metric: "$140k+", title: "Increased Monthly Cash Flow", desc: "Freed up critical working capital by restructuring debt service, allowing a logistics firm to maintain its fleet." },
  { metric: "100%", title: "Stabilized Operations", desc: "Centralized all creditor communications, stopping aggressive collections and returning focus to business growth." }
];

const faqs = [
  { q: "What is MCA advisory?", a: "MCA advisory involves professional financial consulting to help businesses manage, restructure, and overcome the burden of Merchant Cash Advances. We analyze your financial position and negotiate sustainable payment structures." },
  { q: "How does MCA restructuring work?", a: "Restructuring works by analyzing the business's true affordability, communicating directly with funders, and strategically adjusting the payment terms to align with realistic, current revenue capabilities." },
  { q: "Can MCA advisory improve cash flow?", a: "Yes. By addressing the root cause of the liquidity drain—typically high-frequency, high-cost daily ACH withdrawals—MCA advisory immediately preserves working capital for essential operations." },
  { q: "Can businesses recover from stacked MCA loans?", a: "Absolutely. While stacked MCAs create severe operational distress, a structured advisory approach can un-stack the burden, prioritize critical payables, and return the business to stability." },
  { q: "Is MCA restructuring an alternative to bankruptcy?", a: "In many cases, yes. Professional MCA restructuring and creditor coordination are designed to resolve unsustainable debt burdens outside of formal bankruptcy proceedings, preserving the enterprise." },
  { q: "How quickly can financial stabilization begin?", a: "Stabilization efforts begin immediately upon engagement. While comprehensive restructuring takes time, the initial steps of cash flow analysis and creditor coordination provide rapid operational relief." }
];

export default function MCAAdvisory() {
  const faqSchema = {
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
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Regroup Partners",
    "image": "https://regrouppartners.com/logo.jpg",
    "url": "https://regrouppartners.com",
    "telephone": "954-833-4958",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5255 North Federal Highway Suite 301",
      "addressLocality": "Boca Raton",
      "addressRegion": "FL",
      "postalCode": "33487",
      "addressCountry": "US"
    },
    "description": "Regroup Partners provides premium MCA advisory, business restructuring, and cash flow stabilization services nationwide."
  };

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <SEO 
        title="MCA Advisory Services | Regroup Partners" 
        description="Professional MCA advisory and business restructuring. Helping businesses manage Merchant Cash Advance debt, improve cash flow, and regain financial stability."
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </Head>

      <Navigation />
      <ThemeSwitch />

      <main>
        {/* Section 1: Hero */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gray-900 text-white">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/40 z-10"></div>
            <img 
              src="/generated/mca-advisory-hero.png" 
              alt="Premium financial advisory office" 
              className="w-full h-full object-cover object-center opacity-60"
            />
          </div>
          <div className="relative z-20 max-w-[1400px] mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground backdrop-blur-sm mb-6 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                MCA Advisory Services
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] mb-6 tracking-tight">
                MCA Advisory & <br/><span className="text-gray-300">Business Stabilization Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
                Helping businesses manage MCA payment pressure, improve cash flow, and create structured financial recovery strategies through professional advisory solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white h-12 px-8 text-base shadow-lg shadow-accent/20">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="tel:9548334958">
                  <Button variant="outline" className="w-full sm:w-auto h-12 px-8 text-base bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                    Speak With an MCA Specialist
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
                <div>
                  <div className="text-2xl font-serif font-bold text-white mb-1">20+</div>
                  <div className="text-sm text-gray-400 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-white mb-1">USA</div>
                  <div className="text-sm text-gray-400 font-medium">Nationwide Support</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-white mb-1">24h</div>
                  <div className="text-sm text-gray-400 font-medium">Fast Assessments</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-white mb-1">Expert</div>
                  <div className="text-sm text-gray-400 font-medium">Business Recovery</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO/GEO Enriched Intro */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Professional MCA Advisory & Business Restructuring
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Based in Boca Raton, Florida, Regroup Partners is a premier business restructuring firm serving enterprises across the United States. We specialize in Merchant Cash Advance advisory, helping organizations navigate the severe complexities of MCA restructuring. When multiple daily advances suffocate operations, our financial recovery specialists step in to provide creditor coordination and business cash flow stabilization. We are strategic financial consultants dedicated to resolving unsustainable debt burdens and restoring operational liquidity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: What is MCA Advisory? */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">What Is MCA Advisory?</h2>
                <div className="w-16 h-1 bg-accent mb-8"></div>
                <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                  <p>
                    Merchant Cash Advances (MCAs) offer quick capital, but their aggressive daily or weekly repayment structures quickly consume operating capital. MCA advisory services involve professional intervention to analyze, restructure, and manage these burdensome obligations.
                  </p>
                  <p>
                    When a business takes on multiple overlapping advances, the resulting daily ACH withdrawals create immense financial pressure, leading to delayed vendor payments and payroll anxiety. 
                  </p>
                  <p>
                    Through strategic MCA negotiation support and business cash flow recovery tactics, our advisory and restructuring strategies help businesses stabilize operations, realign payment expectations, and provide essential MCA payment relief.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-accent/5 translate-x-4 translate-y-4 rounded-xl"></div>
                <div className="relative bg-white p-10 rounded-xl border border-gray-100 shadow-xl">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Strategic Financial Consulting</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    We do not offer generic debt settlement. We provide institutional-grade creditor coordination, utilizing our deep understanding of the alternative finance space to structure realistic business recovery pathways.
                  </p>
                  <ul className="space-y-4">
                    {["Financial position analysis", "Direct funder communication", "Liquidity preservation", "Operational turnaround"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="font-medium text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Common MCA Challenges */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">Common MCA Challenges</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-lg text-foreground/70">
                The compounding nature of short-term capital creates distinct operational hurdles that require professional financial advisory intervention.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {challenges.map((card, index) => (
                <div key={index} className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-3">{card.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: How We Help Businesses */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">How We Help Businesses</h2>
                <div className="w-20 h-1 bg-accent mb-6"></div>
                <p className="text-lg text-foreground/70">
                  Premium solutions engineered to restore financial equilibrium and protect your enterprise.
                </p>
              </div>
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white group">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {solutions.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-foreground/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Our MCA Advisory Process */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">Our MCA Advisory Process</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-lg text-foreground/70">
                A structured, methodical approach to business stabilization and financial recovery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative p-8 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl font-serif font-bold text-gray-200 mb-6">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Benefits of MCA Advisory */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Benefits of Professional Advisory</h2>
                <div className="w-16 h-1 bg-accent mb-8"></div>
                <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
                  Engaging a specialized restructuring firm transforms operational chaos into a highly coordinated stabilization effort, providing immediate and long-term advantages.
                </p>
                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                      <span className="font-medium text-gray-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <LineChart className="w-8 h-8 text-accent mb-4" />
                    <h4 className="font-bold text-lg mb-2">Visibility</h4>
                    <p className="text-sm text-gray-400">Clear oversight of true business cash flow.</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <Shield className="w-8 h-8 text-accent mb-4" />
                    <h4 className="font-bold text-lg mb-2">Protection</h4>
                    <p className="text-sm text-gray-400">Shielding operations from aggressive collections.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <Target className="w-8 h-8 text-accent mb-4" />
                    <h4 className="font-bold text-lg mb-2">Strategy</h4>
                    <p className="text-sm text-gray-400">Targeted restructuring to align debt with revenue.</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <Building2 className="w-8 h-8 text-accent mb-4" />
                    <h4 className="font-bold text-lg mb-2">Stability</h4>
                    <p className="text-sm text-gray-400">Long-term equilibrium for the entire enterprise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Industries We Help */}
        <section className="py-24 bg-gray-50 border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">Industries We Help</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-lg text-foreground/70">
                Tailored MCA stabilization solutions designed for the specific operational pressures of diverse industries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                    <ind.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{ind.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: GEO Targeted Content */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-2xl font-serif font-bold mb-12 text-center text-foreground">Nationwide Reach, Local Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {geoBlocks.map((geo, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-foreground">{geo.region}</h3>
                  </div>
                  <h4 className="font-semibold text-sm mb-2">{geo.title}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">{geo.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: Case Studies / Results */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 transform origin-top-left"></div>
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Proven Advisory Results</h2>
              <div className="w-20 h-1 bg-accent mb-6"></div>
              <p className="text-lg text-gray-400 max-w-2xl">
                Real financial recovery outcomes achieved through rigorous creditor coordination and strategic stabilization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-serif font-bold text-accent mb-4">{study.metric}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{study.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{study.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 11: FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline hover:text-accent transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Section 12: Final CTA */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
              
              <div className="grid lg:grid-cols-2 relative z-10">
                <div className="p-12 lg:p-20 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                    Take Control of MCA Payment Pressure
                  </h2>
                  <p className="text-lg text-gray-300 mb-10 max-w-md">
                    Speak with a business restructuring specialist to explore professional financial stabilization solutions. Time is critical when protecting working capital.
                  </p>
                  
                  <div className="space-y-6 mb-12">
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-medium mb-1">Call for immediate advisory</div>
                        <a href="tel:9548334958" className="text-2xl font-bold hover:text-accent transition-colors">954-833-4958</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 border-t border-gray-800 pt-8">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-400 font-medium">Confidential Assessment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-400 font-medium">No Upfront Fees</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-12 lg:p-16">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Request an Advisory Session</h3>
                  <p className="text-foreground/60 mb-8">Fill out the form below and a specialist will contact you confidentially.</p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" className="h-12 bg-gray-50 border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Smith" className="h-12 bg-gray-50 border-gray-200" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Business LLC" className="h-12 bg-gray-50 border-gray-200" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@company.com" className="h-12 bg-gray-50 border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" className="h-12 bg-gray-50 border-gray-200" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Brief Description of Financial Needs</Label>
                      <Textarea id="message" placeholder="How can our advisory team assist you?" className="min-h-[120px] bg-gray-50 border-gray-200 resize-none" />
                    </div>
                    
                    <Button className="w-full h-14 text-base font-bold bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20">
                      Get Free MCA Consultation
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}