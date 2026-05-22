import React from "react";
import Head from "next/head";
import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { 
  TrendingDown, AlertCircle, Clock, CreditCard, Receipt, 
  Calculator, Shield, LineChart, Target, Building, 
  CheckCircle2, MapPin, Phone, Building2, HardHat, 
  Stethoscope, Coffee, ShoppingBag, Truck, FileWarning, Wallet,
  Calendar, ShoppingCart, TrendingUp
} from "lucide-react";

// Data Arrays for Rendering
const signs = [
  { title: "Declining Bank Balances", desc: "Consistent reduction in available cash reserves despite stable sales or revenue.", icon: TrendingDown },
  { title: "Difficulty Making Payroll", desc: "Struggling to cover employee wages or taxes due to cash shortages.", icon: Wallet },
  { title: "Vendor Payment Delays", desc: "Extending payables beyond terms, straining critical supplier relationships.", icon: Clock },
  { title: "Multiple Daily ACH Withdrawals", desc: "Aggressive daily debits from MCA lenders draining operating accounts.", icon: FileWarning },
  { title: "Increasing Credit Usage", desc: "Maxing out lines of credit and credit cards to cover basic operating expenses.", icon: CreditCard },
  { title: "Missed Loan Payments", desc: "Falling behind on term loans, equipment financing, or commercial mortgages.", icon: AlertCircle },
  { title: "Seasonal Revenue Gaps", desc: "Inability to sustain operations during slow seasons due to poor capital reserves.", icon: Calendar },
  { title: "High Operating Expenses", desc: "Uncontrollable overhead costs severely impacting bottom-line profitability.", icon: Receipt },
];

const solutions = [
  { title: "Expense Reduction Strategies", desc: "Identifying and eliminating non-essential costs to immediately improve margins.", icon: Target },
  { title: "Debt Payment Restructuring", desc: "Renegotiating terms to align debt service with actual business cash flow.", icon: Calculator },
  { title: "MCA Payment Relief", desc: "Restructuring aggressive short-term daily advances into manageable payments.", icon: Shield },
  { title: "Vendor Negotiation Support", desc: "Establishing sustainable payment plans with critical suppliers and creditors.", icon: Building },
  { title: "Accounts Receivable Optimization", desc: "Accelerating cash inflows by improving invoicing and collection cycles.", icon: Receipt },
  { title: "Cash Flow Forecasting", desc: "Developing accurate predictive models to anticipate and prevent shortfalls.", icon: LineChart },
  { title: "Working Capital Planning", desc: "Structuring reserves and credit facilities for sustainable operational funding.", icon: Wallet },
  { title: "Financial Stabilization", desc: "Implementing comprehensive turnaround strategies for long-term health.", icon: CheckCircle2 },
];

const processSteps = [
  { step: "01", title: "Financial Assessment", desc: "We conduct a deep-dive analysis of your current cash position, obligations, and revenue cycles." },
  { step: "02", title: "Cash Flow Analysis", desc: "Identifying immediate cash leaks, unnecessary expenses, and working capital deficiencies." },
  { step: "03", title: "Expense & Liability Review", desc: "Evaluating all debts, MCA advances, and vendor payables to find restructuring opportunities." },
  { step: "04", title: "Creditor Coordination", desc: "We step in to communicate with lenders and creditors to reduce pressure and negotiate terms." },
  { step: "05", title: "Customized Strategy", desc: "Deploying a tailored cash flow improvement plan designed specifically for your operations." },
  { step: "06", title: "Ongoing Stabilization", desc: "Monitoring and adjusting the strategy to ensure sustained financial health and liquidity." },
];

const industries = [
  { title: "Restaurants & Hospitality", icon: Coffee, desc: "Managing seasonal fluctuations and tight margins." },
  { title: "Transportation & Logistics", icon: Truck, desc: "Stabilizing cash flow against fuel costs and slow-paying invoices." },
  { title: "Construction Businesses", icon: HardHat, desc: "Bridging the gap between project costs and delayed progress payments." },
  { title: "Medical Practices", icon: Stethoscope, desc: "Overcoming delayed insurance reimbursements and high overhead." },
  { title: "Retail Stores", icon: ShoppingBag, desc: "Managing inventory purchasing cycles and seasonal sales dips." },
  { title: "E-commerce Brands", icon: ShoppingCart, desc: "Funding inventory growth and digital marketing spend sustainably." },
  { title: "Service Businesses", icon: Building2, desc: "Smoothing out revenue peaks and valleys for consistent operations." },
  { title: "Manufacturing", icon: Target, desc: "Balancing supply chain costs with extended customer payment terms." },
];

const regions = [
  { title: "Cash Flow Improvement Florida", desc: "Serving businesses in Boca Raton, Miami, Fort Lauderdale, and Orlando with local expertise." },
  { title: "Business Financial Recovery California", desc: "Helping West Coast companies navigate high operating costs and stabilize capital." },
  { title: "Working Capital Solutions Texas", desc: "Strategic advisory for energy, transport, and service sectors across Texas." },
  { title: "Business Cash Flow Advisory New York", desc: "Supporting NY enterprises with aggressive debt restructuring and cash management." },
];

const faqs = [
  { q: "What causes business cash flow problems?", a: "Cash flow issues typically stem from extended accounts receivable, declining sales margins, over-leveraged debt (like multiple MCAs), unexpected expenses, or poor inventory management. We identify the root cause to fix the core issue." },
  { q: "How can cash flow improvement help my business?", a: "It provides immediate breathing room. By reducing daily/weekly debt payments, optimizing expenses, and accelerating receivables, we free up working capital so you can make payroll, pay essential vendors, and operate without constant stress." },
  { q: "Can cash flow problems be fixed without bankruptcy?", a: "Yes. In many cases, proactive creditor coordination, MCA restructuring, and operational adjustments can stabilize a business, avoiding the severe consequences and public record of a corporate bankruptcy." },
  { q: "How does MCA debt affect cash flow?", a: "Merchant Cash Advances (MCAs) require aggressive daily or weekly withdrawals from your operating account. This rapid capital drain often leaves businesses without enough cash to cover basic operating expenses, leading to a dangerous cycle of borrowing." },
  { q: "What industries benefit most from cash flow consulting?", a: "Any industry with capital-intensive operations or delayed receivables benefits greatly. We heavily advise construction, transportation, healthcare, retail, hospitality, and B2B service companies nationwide." },
  { q: "How quickly can results be seen?", a: "While comprehensive financial turnaround takes time, immediate relief measures—such as intercepting creditor communications and initiating restructuring negotiations—can often alleviate severe cash flow pressure within the first few weeks." },
];

export default function CashFlowImprovement() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Regroup Partners - Cash Flow Improvement",
    "description": "Premium business cash flow improvement, working capital management, and financial stabilization advisory firm.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5255 North Federal Highway Suite 301",
      "addressLocality": "Boca Raton",
      "addressRegion": "FL",
      "postalCode": "33487",
      "addressCountry": "US"
    },
    "telephone": "(954) 833-4958",
    "url": "https://regrouppartners.com/cash-flow-improvement"
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>
      <SEO 
        title="Improve Business Cash Flow | Financial Recovery | Regroup Partners" 
        description="Expert business cash flow improvement and working capital management. Regroup Partners helps businesses nationwide reduce financial pressure and stabilize operations." 
      />
      <Navigation />

      <main className="pt-24 md:pt-32">
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden bg-[#050505] text-white py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img 
              src="/generated/cash-flow-hero.png" 
              alt="Corporate Financial Advisory" 
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent"></div>
          </div>
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-full mb-6">
                <span className="text-sm font-medium text-accent">Nationwide Cash Flow Advisory</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-6 leading-tight">
                Improve Business Cash Flow & Regain Financial Stability
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                Helping businesses reduce financial pressure, increase working capital, and create sustainable cash flow strategies through professional financial advisory solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="#consultation">
                  <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white h-14 px-8 rounded-sm text-lg font-medium">
                    Get Free Consultation
                  </Button>
                </Link>
                <a href="tel:954-833-4958">
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 rounded-sm text-lg font-medium">
                    Speak With a Cash Flow Specialist
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-serif font-semibold text-accent mb-1">21+</p>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-semibold text-accent mb-1">US</p>
                  <p className="text-sm text-gray-400">Nationwide Support</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-semibold text-accent mb-1">24h</p>
                  <p className="text-sm text-gray-400">Fast Assessments</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-semibold text-accent mb-1">100%</p>
                  <p className="text-sm text-gray-400">Recovery Experts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO/GEO Intro */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Authoritative Business Cash Flow Improvement
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Based in Boca Raton, Florida, and serving businesses across the United States, Regroup Partners is a premier advisory firm specializing in <strong>business cash flow improvement</strong> and <strong>financial recovery</strong>. When operations are stifled by declining margins, aggressive MCA debits, or extended payables, our team implements rigorous <strong>cash flow stabilization</strong> and <strong>working capital management</strong> protocols.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We bridge the gap between operational efficiency and financial distress. Through strategic <strong>business restructuring</strong> and proactive <strong>creditor coordination</strong>, we help business owners nationwide alleviate pressure, reduce overhead, and restore long-term corporate health.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Signs of Problems */}
        <section className="py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                Signs Your Business Has Cash Flow Problems
              </h2>
              <p className="text-lg text-foreground/60">
                Early intervention is critical. Recognizing the symptoms of a liquidity crisis allows for strategic restructuring before operational failure.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {signs.map((item, i) => (
                <Card key={i} className="p-6 border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: How We Improve Cash Flow */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                How We Improve Cash Flow
              </h2>
              <p className="text-lg text-foreground/60">
                Our financial advisory team deploys institutional-grade solutions to immediately stop capital drain and rebuild your working capital reserves.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((item, i) => (
                <Card key={i} className="p-8 border-gray-100 shadow-lg shadow-black/5 hover:-translate-y-1 transition-all bg-white rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100">
                    <item.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Process */}
        <section className="py-24 bg-[#050505] text-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                  Our Cash Flow Improvement Process
                </h2>
                <p className="text-lg text-gray-400 mb-10">
                  A disciplined, multi-phase methodology designed to triage immediate financial threats and implement sustainable working capital strategies.
                </p>
                <div className="space-y-8">
                  {processSteps.slice(0,3).map((step, i) => (
                    <div key={i} className="flex gap-6 relative">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-accent flex items-center justify-center font-bold text-white relative z-10">
                        {step.step}
                      </div>
                      {i !== 2 && <div className="absolute left-6 top-12 bottom-[-2rem] w-px bg-white/20"></div>}
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10">
                <div className="space-y-8">
                  {processSteps.slice(3,6).map((step, i) => (
                    <div key={i} className="flex gap-6 relative">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-accent flex items-center justify-center font-bold text-white relative z-10">
                        {step.step}
                      </div>
                      {i !== 2 && <div className="absolute left-6 top-12 bottom-[-2rem] w-px bg-white/20"></div>}
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 & 7: Benefits & Industries */}
        <section id="industries" className="py-24 bg-gray-50 border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-24">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                  Benefits of Professional Cash Flow Optimization
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {["Improved liquidity & cash reserves", "Reduced daily financial stress", "Better operational control", "Increased working capital", "Predictable business finances", "Improved vendor relationships"].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                Industries We Help Stabilize
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-accent/50 transition-colors">
                  <ind.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{ind.title}</h3>
                  <p className="text-sm text-foreground/70">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: GEO Targeting */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regions.map((reg, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-xl flex flex-col items-start border border-gray-100">
                  <MapPin className="w-6 h-6 text-foreground/40 mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{reg.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{reg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9 & 10: Case Studies / FAQ */}
        <section className="py-24 bg-[#050505] text-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Case Studies */}
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-10">
                  Proven Recovery Results
                </h2>
                <div className="space-y-4">
                  {[
                    "Reduced daily MCA payment pressure by up to 75%",
                    "Increased available operating cash flow within 14 days",
                    "Stabilized business operations and retained core staff",
                    "Restructured over-leveraged debt into sustainable term plans",
                    "Saved critical vendor relationships from default"
                  ].map((res, i) => (
                    <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/10 flex items-start gap-4">
                      <TrendingUp className="w-6 h-6 text-accent shrink-0" />
                      <p className="font-medium text-gray-200">{res}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-10">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/10 transition-colors">
                      <AccordionTrigger className="text-left font-medium text-white hover:no-underline py-5">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Final CTA */}
        <section id="consultation" className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-6xl mx-auto bg-[#0f1115] rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                 <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                <div className="flex flex-col justify-center text-left">
                  <div className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-full mb-6 w-fit">
                    <span className="text-sm font-medium text-accent">Confidential & Secure</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
                    Take Control of Your Business Cash Flow Today
                  </h2>
                  <p className="text-xl text-accent font-medium mb-6">
                    Get Free Cash Flow Assessment
                  </p>
                  <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                    Don't let aggressive creditors or tight margins threaten your business operations. Submit your situation for a confidential review by our advisory team.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 mb-10 backdrop-blur-sm w-full max-w-md">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-1">Speak with an advisor immediately</p>
                      <a href="tel:954-833-4958" className="text-2xl font-semibold text-white hover:text-accent transition-colors">
                        (954) 833-4958
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f1115] bg-gray-800 flex items-center justify-center">
                          <Shield className="w-4 h-4 text-gray-400" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 font-medium">Trusted Nationwide</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/40 relative">
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2 text-left">
                      <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                      <Input id="name" placeholder="Full Name" className="bg-gray-50 h-12 rounded-xl border-gray-200 focus-visible:ring-accent" />
                    </div>
                    <div className="space-y-2 text-left">
                      <Label htmlFor="businessName" className="text-gray-700 font-medium">Business Name</Label>
                      <Input id="businessName" placeholder="Company Name" className="bg-gray-50 h-12 rounded-xl border-gray-200 focus-visible:ring-accent" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2 text-left">
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                        <Input id="email" type="email" placeholder="email@example.com" className="bg-gray-50 h-12 rounded-xl border-gray-200 focus-visible:ring-accent" />
                      </div>
                      <div className="space-y-2 text-left">
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="(555) 000-0000" className="bg-gray-50 h-12 rounded-xl border-gray-200 focus-visible:ring-accent" />
                      </div>
                    </div>
                    <div className="space-y-2 text-left">
                      <Label htmlFor="description" className="text-gray-700 font-medium">Brief Description of Situation</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Please briefly describe your current challenges..."
                        className="min-h-[120px] resize-y bg-gray-50 rounded-xl border-gray-200 p-4 focus-visible:ring-accent"
                      />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white h-14 rounded-xl text-base font-semibold mt-6 shadow-[0_8px_25px_-8px_rgba(220,38,38,0.6)] transition-all hover:shadow-[0_8px_25px_-5px_rgba(220,38,38,0.8)] hover:-translate-y-0.5">
                      Get Free Cash Flow Assessment
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