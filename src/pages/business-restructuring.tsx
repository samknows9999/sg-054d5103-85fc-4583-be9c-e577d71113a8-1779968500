import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrustBar } from "@/components/TrustBar";
import { AsSeenOn } from "@/components/AsSeenOn";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import {
  Building2, ArrowRight, TrendingDown, Clock, ShieldAlert,
  Wallet, FileWarning, BarChart3, AlertCircle, FileText,
  Utensils, Truck, HardHat, Stethoscope, ShoppingBag,
  Store, Hotel, Wrench, CheckCircle2, ChevronRight, Check, Loader2 } from
"lucide-react";
import Link from "next/link";
import Head from "next/head";

export default function BusinessRestructuring() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    window.location.href = 'mailto:laura@regrouppartners.com,claudia@regrouppartners.com?subject=Business Restructuring Consultation Request';
    setTimeout(() => setIsSubmitting(false), 1000);
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
              "name": "Regroup Partners",
              "image": "https://regrouppartners.com/og-image.png",
              "@id": "https://regrouppartners.com",
              "url": "https://regrouppartners.com/business-restructuring",
              "telephone": "+1-954-234-2300",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Boca Raton",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "areaServed": "US",
              "description": "Premium business restructuring and financial advisory firm serving businesses nationwide. Specialists in MCA debt restructuring and cash flow stabilization."
            })
          }} />
        
      </Head>
      <SEO
        title="Business Restructuring Services | Regroup Partners"
        description="Premium business restructuring services to stabilize cash flow, negotiate with creditors, and resolve MCA debt. Headquartered in Boca Raton, FL, serving businesses nationwide." />
      

      <Navigation />

      <main className="">
        {/* SECTION 1: HERO */}
        <section className="relative min-h-[90vh] flex items-center bg-[#061124] text-white overflow-hidden pt-12 pb-24">
          <div className="absolute inset-0 bg-[url('/generated/business-restructuring-hero.png')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-transparent"></div>
          
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full mt-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-8 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs font-semibold text-white tracking-widest uppercase">Institutional Financial Advisory</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-[1.1] text-white shadow-sm">Strategic Business Restructuring

              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
                Helping businesses stabilize cash flow, reduce creditor pressure, and regain financial control through customized restructuring strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <Link href="#consultation">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-7 text-lg font-semibold shadow-xl shadow-primary/20 border border-primary/50">
                    Get Free Consultation
                  </Button>
                </Link>
                <a href="tel:954-234-2300">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border-white/20 px-8 py-7 text-lg font-semibold backdrop-blur-sm">
                    Speak With a Specialist
                  </Button>
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-serif font-bold text-white mb-1">20+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-white mb-1">National</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Services Available</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-white mb-1">24Hr</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Response Times</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-white mb-1">Expert</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Financial Recovery</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />
        <AsSeenOn />

        {/* SECTION 2: SEO/GEO INTRO */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-4 bg-gray-50 rounded-2xl transform -rotate-3 z-0"></div>
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform rotate-2 z-0"></div>
                <div className="bg-[#0A192F] text-white p-10 rounded-xl relative z-10 shadow-2xl border border-[#112240]">
                  <ShieldAlert className="w-12 h-12 text-primary mb-6" />
                  <h3 className="font-serif text-3xl font-semibold mb-4">Is Your Business Facing Financial Distress?</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    When cash flow is restricted by aggressive creditors or multiple daily ACH withdrawals, survival requires immediate, strategic intervention—not just another loan.
                  </p>
                  <ul className="space-y-3">
                    {['Immediate Creditor Intervention', 'Cash Flow Protection', 'Sustainable Restructuring'].map((item, i) =>
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {item}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Strategic Advisory</h2>
                <h3 className="font-serif text-4xl md:text-5xl font-semibold text-[#0A192F] mb-8 leading-tight">
                  Institutional Restructuring Expertise, Nationwide.
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none prose-headings:font-serif prose-headings:text-[#0A192F] prose-a:text-primary">
                  <p>
                    Headquartered in Boca Raton, Florida, Regroup Partners is a premier business restructuring and financial advisory firm serving mid-market and small businesses across the United States. 
                  </p>
                  <p>
                    We specialize in comprehensive <strong>business restructuring</strong>, aggressive <strong>creditor negotiations</strong>, and strategic <strong>MCA debt restructuring</strong> (Merchant Cash Advance). When your company is burdened by insurmountable debt, stacking daily payments, or operational distress, our team steps in to execute a structured operational recovery plan.
                  </p>
                  <p>
                    Our goal is singular: achieving <strong>cash flow stabilization</strong> so your business can continue to operate, retain employees, and eventually thrive. We do not offer quick-fix loans or standard debt settlement; we provide institutional-grade financial restructuring previously available only to enterprise corporations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEMS WE SOLVE */}
        <section className="py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#0A192F] mb-6">Problems We Solve</h2>
              <p className="text-lg text-gray-600">
                Financial distress manifests in multiple ways. Our business restructuring services provide targeted solutions for the most severe corporate financial challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
              { icon: Wallet, title: "Merchant Cash Advance Debt", desc: "Strategic restructuring of aggressive MCA obligations to reduce crippling daily remittances." },
              { icon: TrendingDown, title: "Multiple Daily ACH Withdrawals", desc: "Intervention to halt cash flow hemorrhaging caused by stacked, unregulated daily debits." },
              { icon: FileWarning, title: "Vendor Payment Pressure", desc: "Professional negotiation with critical vendors to structure sustainable repayment terms." },
              { icon: Clock, title: "Payroll Cash Flow Issues", desc: "Emergency liquidity strategies to ensure your employees are paid and operations continue." },
              { icon: Building2, title: "Business Loan Overload", desc: "Comprehensive reorganization of SBA, term loans, and equipment financing obligations." },
              { icon: ShieldAlert, title: "Creditor Lawsuits & UCCs", desc: "Strategic coordination with legal counsel to manage frozen accounts, UCC liens, and litigation." },
              { icon: BarChart3, title: "Revenue Decline", desc: "Operational restructuring designed to right-size expenses against shifting market realities." },
              { icon: AlertCircle, title: "Accounts Receivable Problems", desc: "Addressing working capital gaps caused by slow-paying clients or disrupted supply chains." }].
              map((problem, i) =>
              <Card key={i} className="bg-white p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <problem.icon className="w-6 h-6 text-[#0A192F] group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-[#0A192F] mb-3">{problem.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{problem.desc}</p>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 4: INDUSTRIES WE HELP */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#0A192F] mb-6">Industries We Specialize In</h2>
                <p className="text-lg text-gray-600">
                  Different sectors face unique financial pressures. Our advisory team applies industry-specific knowledge to craft viable restructuring plans.
                </p>
              </div>
              <Button variant="outline" className="border-gray-300 text-[#0A192F] hover:bg-[#0A192F] hover:text-white">
                See All Industries <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
              { icon: Utensils, name: "Restaurants & F&B", desc: "Managing thin margins, high overhead, and equipment debt." },
              { icon: Truck, name: "Transportation & Logistics", desc: "Navigating fuel costs, MCA stacking, and fleet financing." },
              { icon: HardHat, name: "Construction & Contracting", desc: "Resolving cash flow gaps between project milestones." },
              { icon: Stethoscope, name: "Medical Practices", desc: "Addressing delayed insurance payouts and operational overhead." },
              { icon: ShoppingBag, name: "E-commerce Brands", desc: "Restructuring inventory financing and aggressive marketing debt." },
              { icon: Store, name: "Retail Businesses", desc: "Overcoming foot traffic decline and commercial lease pressure." },
              { icon: Hotel, name: "Hospitality Businesses", desc: "Stabilizing seasonal cash flow drops and renovation debt." },
              { icon: Wrench, name: "Auto Repair & Services", desc: "Managing tool financing, vendor payables, and working capital." }].
              map((industry, i) =>
              <div key={i} className="group relative bg-gray-50 rounded-2xl p-8 overflow-hidden hover:bg-[#0A192F] transition-colors duration-500 border border-gray-100">
                  <div className="relative z-10">
                    <industry.icon className="w-8 h-8 text-primary mb-5 group-hover:text-white transition-colors duration-500" />
                    <h4 className="font-serif text-xl font-bold text-[#0A192F] group-hover:text-white mb-2 transition-colors duration-500">{industry.name}</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-500">{industry.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 5: OUR RESTRUCTURING PROCESS */}
        <section className="py-24 bg-[#0A192F] text-white">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Our Restructuring Process</h2>
              <p className="text-lg text-gray-400">A methodical, disciplined approach to financial recovery.</p>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-transparent">
              {[
              { step: "01", title: "Financial Assessment", desc: "Immediate diagnostic of your business's financial health, identifying critical cash flow hemorrhages and assessing all current creditor obligations." },
              { step: "02", title: "Cash Flow Analysis & Protection", desc: "Implementing emergency strategies to preserve working capital, ensuring payroll is met and core operations continue uninterrupted." },
              { step: "03", title: "Creditor Negotiation Strategy", desc: "Our team intercedes with your lenders, MCA providers, and vendors, directing all communication through our advisory firm." },
              { step: "04", title: "Debt Restructuring Plan", desc: "Structuring and executing a comprehensive, sustainable repayment framework aligned with your actual operational revenue." },
              { step: "05", title: "Business Stabilization", desc: "Long-term advisory to prevent future distress, optimize operational expenses, and rebuild a healthy balance sheet." }].
              map((phase, i) =>
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0A192F] bg-primary text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    {phase.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <h4 className="font-serif text-xl font-semibold mb-3 text-white">{phase.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 6: GEO TARGETED CONTENT BLOCKS */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-semibold text-[#0A192F]">National Reach, Local Understanding</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
              { loc: "Florida", title: "Business Restructuring Florida", desc: "Serving our home state from our Boca Raton headquarters, providing hands-on restructuring to Florida businesses." },
              { loc: "California", title: "MCA Debt Relief California", desc: "Navigating complex California commercial regulations to deliver effective MCA relief to West Coast enterprises." },
              { loc: "Texas", title: "Financial Restructuring Texas", desc: "Supporting the Texas business boom with strategic debt restructuring for logistics, energy, and retail sectors." },
              { loc: "New York", title: "Business Debt Solutions NY", desc: "Standing up to aggressive NYC-based merchant cash advance funders on behalf of struggling commercial clients." }].
              map((geo, i) =>
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{geo.loc}</div>
                  <h4 className="font-serif text-lg font-semibold text-[#0A192F] mb-3">{geo.title}</h4>
                  <p className="text-sm text-gray-600">{geo.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 7: CASE STUDIES / RESULTS */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center text-[#0A192F] mb-16">
              Proven Financial Recovery Results
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-10 bg-gray-50 border-none shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingDown className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-[#0A192F]">Logistics Company</h4>
                    <p className="text-sm text-gray-500 font-medium">Reduced MCA Payment Pressure</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p><strong>The Crisis:</strong> Facing $12,000 in daily ACH withdrawals from 4 stacked MCA positions, resulting in payroll failure.</p>
                  <p><strong>The Strategy:</strong> Regroup Partners intervened, issued cease & desists to funders, and established a master restructuring agreement.</p>
                  <p className="text-[#0A192F] font-semibold text-lg pt-4 border-t border-gray-200">Result: Daily payments converted to a manageable weekly payment, freeing up $48,000/week in cash flow.</p>
                </div>
              </Card>

              <Card className="p-10 bg-[#0A192F] text-white border-none shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-bold">Commercial Contractor</h4>
                    <p className="text-sm text-gray-400 font-medium">Creditor Negotiation Success</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p><strong className="text-white">The Crisis:</strong> Material suppliers halted deliveries due to $450k in past-due payables, stalling major projects.</p>
                  <p><strong className="text-white">The Strategy:</strong> Conducted a full financial audit to prove future solvency. Negotiated directly with suppliers to restructure payables over 18 months.</p>
                  <p className="text-primary font-semibold text-lg pt-4 border-t border-white/20">Result: Credit lines reopened, projects completed, business stabilized without filing for Chapter 11.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ SECTION */}
        <section className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-semibold text-[#0A192F] mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Clear answers about our business financial advisory services.</p>
            </div>
            
            <Accordion type="single" collapsible className="w-full bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-serif text-[#0A192F] hover:text-primary">What is business restructuring?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  Business restructuring is the formal process of reorganizing a company's financial obligations, operational structure, or debt to improve its overall profitability and prevent insolvency. It often involves negotiating with creditors to alter repayment terms, reducing interest, or extending the maturity of debts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-serif text-[#0A192F] hover:text-primary">How does MCA debt restructuring work?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  Merchant Cash Advance (MCA) restructuring involves our advisory team interceding between you and the funder. We halt the aggressive daily ACH withdrawals that drain your accounts and negotiate a consolidated, term-based repayment structure that your actual business revenue can sustain.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-serif text-[#0A192F] hover:text-primary">Can restructuring stop daily ACH withdrawals?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  Yes. One of the immediate priorities in our restructuring process is cash flow stabilization. By engaging our firm, we implement legal and strategic mechanisms to immediately halt unmanageable daily debits, allowing your business to retain its working capital.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-serif text-[#0A192F] hover:text-primary">Is restructuring an alternative to bankruptcy?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  Absolutely. Out-of-court restructuring is frequently a faster, more cost-effective, and less public alternative to filing for Chapter 11 bankruptcy. It allows business owners to retain control of their company while methodically resolving creditor issues.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-serif text-[#0A192F] hover:text-primary">How long does the process take?</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  While immediate cash flow stabilization (stopping daily payments) can often be achieved within days, a comprehensive restructuring plan typically takes 3 to 6 months to fully negotiate and execute with all creditors. The timeline depends entirely on the complexity of your debt structure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* SECTION 9: FINAL CTA */}
        <section id="consultation" className="py-24 bg-white border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="bg-[#0A192F] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                <div className="relative z-10">
                  <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                    Speak With a Business Restructuring Specialist Today
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                    Every day counts when facing severe creditor pressure. Act now to protect your cash flow and stabilize your business operations.
                  </p>
                  
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                      <PhoneIcon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">Call Us Directly</div>
                      <a href="tel:954-234-2300" className="text-3xl font-serif font-bold text-white hover:text-primary transition-colors">
                        (954) 234-2300
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center border-t border-white/20 pt-8 mt-4">
                    <div className="flex -space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#0A192F] flex items-center justify-center font-bold text-xs">C.S.</div>
                      <div className="w-10 h-10 rounded-full bg-primary border-2 border-[#0A192F] flex items-center justify-center font-bold text-xs">RP</div>
                    </div>
                    <div className="text-sm text-gray-400">
                      <strong className="text-white">Confidentiality guaranteed.</strong><br />
                      Discreet advisory team standing by.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 bg-white p-12 md:p-20">
                <h3 className="font-serif text-3xl font-semibold text-[#0A192F] mb-2">Request Consultation</h3>
                <p className="text-gray-500 mb-8">Submit your details for a free, confidential review of your situation.</p>
                
                <form className="space-y-5" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="cta-first" className="text-sm font-semibold text-[#0A192F]">First Name</label>
                      <input id="cta-first" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cta-last" className="text-sm font-semibold text-[#0A192F]">Last Name</label>
                      <input id="cta-last" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="cta-email" className="text-sm font-semibold text-[#0A192F]">Work Email</label>
                      <input id="cta-email" type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cta-phone" className="text-sm font-semibold text-[#0A192F]">Phone Number</label>
                      <input id="cta-phone" type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="cta-company" className="text-sm font-semibold text-[#0A192F]">Company Name</label>
                    <input id="cta-company" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full py-7 text-lg font-semibold bg-primary hover:bg-primary/90 text-white mt-4 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      "Get Free Restructuring Strategy"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>);

}

// Quick helper icon for the CTA section to avoid importing Phone separately from lucide if not needed at top
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>);

}