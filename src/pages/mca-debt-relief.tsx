import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, CheckCircle2, Shield, Users, Clock, TrendingUp, FileText, ChevronRight, AlertTriangle, Scale, FileSearch, Target, Handshake, BarChart3 } from "lucide-react";
import { useState, FormEvent } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function MCADebtReliefLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    mcaDebt: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `
New MCA Debt Relief Consultation Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Approximate MCA Debt: ${formData.mcaDebt}
Message: ${formData.message}

Source Page: mca-debt-relief
Page URL: ${window.location.href}
Date & Time: ${new Date().toLocaleString()}
    `.trim();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "New MCA Debt Relief Consultation Request",
          message: emailBody,
          from: formData.email,
          customerName: formData.name
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", mcaDebt: "", message: "" });
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 1500);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
  {
    q: "Is MCA Debt Relief legitimate?",
    a: "Yes, MCA debt relief through professional business restructuring is a legitimate solution for businesses struggling with Merchant Cash Advance obligations. Unlike debt settlement companies, Regroup Partners is an experienced business advisory firm that focuses on creditor coordination, cash flow improvement, and comprehensive business restructuring strategies."
  },
  {
    q: "Is MCA Debt Relief different from debt settlement?",
    a: "Yes. MCA debt relief through business restructuring involves comprehensive financial analysis, creditor coordination, and strategic business planning. We are not a debt settlement company—we are professional business advisors with 21+ years of restructuring experience focused on sustainable, long-term solutions."
  },
  {
    q: "Can MCA lenders sue my business?",
    a: "Yes, MCA lenders can pursue legal action including lawsuits, judgments, and bank account levies if obligations remain unpaid. Many MCA agreements also include Confession of Judgment clauses that allow creditors to obtain judgments without going to court. Early professional intervention can help address these situations before legal action escalates."
  },
  {
    q: "What happens if I default on an MCA?",
    a: "Defaulting on a Merchant Cash Advance can result in frozen bank accounts, UCC lien enforcement, daily ACH withdrawal attempts, aggressive collection activity, lawsuits, judgments, and severe cash flow disruption. Professional assistance can help navigate default situations and work toward resolution with creditors."
  },
  {
    q: "Can multiple MCA loans be consolidated?",
    a: "While traditional debt consolidation may not always be available for MCA obligations, businesses with multiple MCAs can work with restructuring advisors to coordinate creditors, improve cash flow, and develop strategies to address multiple obligations more effectively."
  },
  {
    q: "How long does MCA Debt Relief take?",
    a: "The timeline varies based on the complexity of your situation, the number of creditors involved, and the specific restructuring strategies implemented. Some businesses see relief within weeks, while more complex cases may take several months. We work efficiently to provide relief as quickly as possible."
  },
  {
    q: "Will this affect my business credit?",
    a: "Our approach focuses on professional creditor coordination and business restructuring strategies designed to preserve business relationships whenever possible. The impact on credit depends on your specific situation and the strategies implemented. We work to minimize negative effects while achieving sustainable debt relief."
  },
  {
    q: "Can I continue operating during negotiations?",
    a: "Yes, most businesses continue operating while working through MCA debt relief. Our strategies are designed to stabilize cash flow and protect operations so you can maintain business continuity throughout the restructuring process."
  },
  {
    q: "Do you work with businesses nationwide?",
    a: "Yes, Regroup Partners works with businesses throughout the United States facing MCA debt challenges. Our team has experience with MCA lenders and creditors across all states and can provide effective representation regardless of your location."
  },
  {
    q: "When should I seek professional help?",
    a: "Seek professional help as soon as you recognize unsustainable payment obligations, declining cash flow, threats of legal action, frozen accounts, or difficulty meeting multiple MCA payments. Early intervention provides more options and better outcomes than waiting until the situation becomes critical."
  },
  {
    q: "What is MCA debt restructuring?",
    a: "MCA debt restructuring refers to strategies used to address Merchant Cash Advance obligations, improve cash flow, coordinate with creditors, and create a more sustainable financial structure for the business. Depending on the situation, restructuring may involve reviewing repayment arrangements, improving cash flow management, and developing a practical plan to support long-term business stability."
  },
  {
    q: "What is MCA debt relief?",
    a: "MCA debt relief involves working with creditors to restructure or reduce Merchant Cash Advance obligations through professional negotiation, cash flow analysis, and strategic business restructuring."
  },
  {
    q: "How quickly can I get help with my MCA debt?",
    a: "We typically schedule confidential consultations within 24-48 hours. Our team begins analyzing your situation immediately to develop a customized relief strategy."
  },
  {
    q: "Will working with Regroup Partners affect my credit?",
    a: "Our approach focuses on professional creditor coordination and business restructuring strategies that aim to preserve your business relationships and creditworthiness."
  },
  {
    q: "How much does MCA debt relief cost?",
    a: "Every situation is unique. We provide a free initial consultation to assess your needs and discuss our fee structure transparently before any engagement."
  },
  {
    q: "Can you help if I have multiple MCAs?",
    a: "Yes. We specialize in complex situations involving multiple Merchant Cash Advances and coordinating with various creditors simultaneously."
  },
  {
    q: "What makes Regroup Partners different from debt settlement companies?",
    a: "We are a professional business advisory firm with 21+ years of restructuring experience, not a debt settlement company. We focus on comprehensive business solutions and creditor coordination."
  }];


  const industries = [
  "Restaurants & Hospitality",
  "Retail & E-commerce",
  "Healthcare Services",
  "Professional Services",
  "Construction & Contractors",
  "Automotive Services",
  "Beauty & Wellness",
  "Transportation & Logistics"];


  return (
    <>
      <SEO
              title="MCA Debt Relief, Settlement & Restructuring for Businesses | Regroup Partners"
        description="Struggling with MCA payments? Regroup Partners helps businesses explore MCA debt relief, creditor negotiations, cash flow solutions, and restructuring options."
        url="/mca-debt-relief" />
      

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })
          }} />
        

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Regroup Partners",
              "description": "Business Restructuring & Financial Advisory",
              "url": "https://regrouppartners.com",
              "telephone": "+1-954-354-1800",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "100 N Biscayne Blvd, Suite 1508",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "postalCode": "33132",
                "addressCountry": "US"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "21"
              },
              "priceRange": "$$"
            })
          }} />
        
      </Head>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1F3A]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo_Transparent.png"
                alt="Regroup Partners"
                width={288}
                height={64}
                className="h-16 w-auto scale-[2.5] origin-left" />
              
            </Link>

            <Button
              variant="default"
              size="lg"
              className="h-12 px-6 text-base font-semibold bg-primary hover:bg-primary/90"
              asChild>
              
              <a href="tel:+19543541800">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 954-354-1800
              </a>
            </Button>
          </div>

          <div className="border-t border-white/10 py-3">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-white" />
                <span>21+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-white" />
                <span>Confidential Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-white" />
                <span>MCA Debt Relief Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-40">
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background -z-10" />

          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <Shield className="h-4 w-4" />
                  <span>Confidential Consultation</span>
                </div>

                <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">MCA Debt Relief & Loan Restructuring for Business Owners

</h1>

                <p className="text-xl text-foreground/80 leading-relaxed">
                  Overwhelmed by Merchant Cash Advance payments? Our experienced team helps businesses restructure MCA debt, improve cash flow, and regain financial stability.
                </p>

                <div className="grid sm:grid-cols-3 gap-6 pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">21+ Years</p>
                    <p className="text-sm text-foreground/70">Experience</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">Confidential</p>
                    <p className="text-sm text-foreground/70">Consultation</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">Expert</p>
                    <p className="text-sm text-foreground/70">Advisory Team</p>
                  </div>
                </div>
              </div>

              <Card className="p-8 shadow-xl border-2 border-primary/20">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="font-display text-2xl font-bold text-foreground">Get a Free Consultation</h2>
                    <p className="text-foreground/70">Discuss your MCA debt situation confidentially with an expert advisor.</p>
                  </div>

                  {submitStatus === "success" ?
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-green-900 text-lg mb-2">Thank you for contacting Regroup Partners.</h3>
                          <p className="text-green-800 leading-relaxed">Your request has been received successfully. A member of our team will review your information and contact you shortly.</p>
                        </div>
                      </div>
                    </div> :

                  <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12" />
                      
                      </div>
                      <div>
                        <Input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12" />
                      
                      </div>
                      <div>
                        <Input
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12" />
                      
                      </div>
                      <div>
                        <Input
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="h-12" />
                      
                      </div>
                      <div>
                        <Input
                        placeholder="Approximate MCA Debt Amount"
                        value={formData.mcaDebt}
                        onChange={(e) => setFormData({ ...formData, mcaDebt: e.target.value })}
                        className="h-12" />
                      
                      </div>
                      <div>
                        <Textarea
                        placeholder="Brief description of your situation (optional)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4} />
                      
                      </div>
                      <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 text-lg font-semibold"
                      variant="default">
                      
                        {isSubmitting ? "Submitting..." : "Get Free Consultation"}
                      </Button>
                      <p className="text-xs text-center text-foreground/60">
                        All consultations are confidential. We respect your privacy.
                      </p>
                    </form>
                  }
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground text-center">
                What Is MCA Debt Relief?
              </h2>

              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  <strong>MCA debt relief</strong> refers to strategies that help businesses manage <strong>Merchant Cash Advance</strong> obligations, improve cash flow, and stabilize operations. Businesses facing multiple MCA payments often explore <Link href="/business-restructuring" className="text-primary hover:underline">business restructuring</Link>, <Link href="/creditor-coordination" className="text-primary hover:underline">creditor coordination</Link>, and <Link href="/cash-flow-improvement" className="text-primary hover:underline">cash flow improvement</Link> solutions to reduce financial pressure and regain control of their business finances.
                </p>

                <p>
                  Every business situation is unique. <strong>MCA debt relief</strong> may involve reviewing repayment structures, improving cash flow management, coordinating with creditors, and developing a practical strategy to support long-term business stability through professional <Link href="/mca-advisory" className="text-primary hover:underline">Merchant Cash Advance advisory</Link> services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                  Understanding Your MCA Debt Relief Options
                </h2>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                  Different approaches to addressing Merchant Cash Advance obligations. Each strategy serves specific business situations and financial goals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 space-y-6 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      MCA Debt Relief
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Comprehensive strategies to address Merchant Cash Advance obligations through creditor coordination, cash flow improvement, and business restructuring. Focuses on sustainable, long-term solutions.
                    </p>
                    <p className="text-sm text-foreground/60 italic">
                      <strong>Best for:</strong> Businesses seeking professional guidance to address MCA debt while protecting operations and working toward financial stability.
                    </p>
                  </div>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href="#hero">Request Consultation</a>
                  </Button>
                </Card>

                <Card className="p-8 space-y-6 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      MCA Debt Consolidation
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Combining multiple MCA obligations into a single, more manageable payment structure. May involve refinancing or working with creditors to simplify repayment terms.
                    </p>
                    <p className="text-sm text-foreground/60 italic">
                      <strong>Best for:</strong> Businesses with multiple MCA payments struggling to manage different payment schedules and creditor relationships.
                    </p>
                  </div>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </Card>

                <Card className="p-8 space-y-6 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Handshake className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      MCA Debt Settlement
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Negotiating with MCA lenders to reduce the total amount owed in exchange for a lump-sum payment or modified terms. Typically involves professional negotiation expertise.
                    </p>
                    <p className="text-sm text-foreground/60 italic">
                      <strong>Best for:</strong> Businesses facing severe financial hardship unable to fulfill original MCA obligations, with access to settlement funds.
                    </p>
                  </div>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </Card>

                <Card className="p-8 space-y-6 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      Business Debt Restructuring
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Comprehensive approach addressing all business debts, not just MCAs. Includes operational improvements, creditor negotiations, and strategic financial planning for long-term stability.
                    </p>
                    <p className="text-sm text-foreground/60 italic">
                      <strong>Best for:</strong> Businesses with complex debt situations requiring holistic solutions beyond MCA obligations alone.
                    </p>
                  </div>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link href="/business-restructuring">View Services</Link>
                  </Button>
                </Card>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Important:</strong> The right approach depends on your specific situation, debt structure, cash flow position, and business goals. Regroup Partners provides free consultations to assess your options and recommend the most effective strategy for your circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                  What Happens If You Stop Paying an MCA?
                </h2>
                <p className="text-xl text-foreground/70">
                  Understanding the consequences of MCA default and why early action matters.
                </p>
              </div>

              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  When businesses stop making <strong>Merchant Cash Advance</strong> payments, the consequences can escalate quickly. Understanding what happens during an MCA default helps business owners recognize the importance of seeking professional assistance early.
                </p>

                <div className="space-y-6 pt-4">
                  <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 border border-border">
                    <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl text-foreground">Daily ACH Withdrawal Attempts</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        MCA lenders typically continue attempting daily ACH withdrawals from your business bank account even when funds are insufficient. This can result in overdraft fees, NSF charges, and ongoing account disruption.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 border border-border">
                    <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl text-foreground">Frozen Business Bank Accounts</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        MCA lenders may pursue bank levies that freeze your business accounts, preventing access to operating capital. This can bring business operations to a halt and create severe cash flow emergencies requiring immediate professional intervention.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 border border-border">
                    <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl text-foreground">UCC Lien Enforcement</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Most MCA agreements include UCC liens on business assets. Upon default, lenders may move to enforce these liens, claiming business equipment, inventory, receivables, or other assets as collateral for the debt.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 border border-border">
                    <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl text-foreground">Confessions of Judgment</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Many MCA contracts contain Confession of Judgment clauses allowing lenders to obtain judgments against your business without going to court. This gives creditors powerful legal remedies to collect debt, including wage garnishment and asset seizure.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 border border-border">
                    <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl text-foreground">Aggressive Collection Activity</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Defaulting on MCA obligations typically triggers intensive collection efforts including frequent phone calls, emails, letters, and visits to your business location. This creates stress and distraction from running your business.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 border border-border">
                    <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl text-foreground">Lawsuits and Legal Judgments</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        MCA lenders can and do file lawsuits against businesses and personal guarantors. Once a judgment is obtained, creditors gain additional collection powers including bank levies, property liens, and wage garnishment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 border border-border">
                    <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl text-foreground">Severe Cash Flow Disruption</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        All of these consequences compound to create severe cash flow problems that threaten business survival. Without access to operating capital, businesses struggle to pay vendors, employees, and other essential obligations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 mt-8">
                  <h3 className="font-semibold text-xl text-foreground mb-3">Why Early Action Is Critical</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    The earlier you seek professional help, the more options are available. Once accounts are frozen, judgments are entered, or assets are seized, the situation becomes significantly more difficult to resolve.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    Professional business restructuring advisors like Regroup Partners can intervene before situations escalate, working with creditors to develop sustainable solutions that protect your business while addressing MCA obligations. Don't wait until you're facing legal action or frozen accounts—<strong>early intervention provides more paths to resolution</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent CTA Banner */}
        <section className="py-8 bg-primary/5 border-y border-primary/20">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <p className="text-lg text-foreground">
                  <strong>Facing MCA default?</strong> Call us now at{" "}
                  <a 
                    href="tel:+19543541800" 
                    className="font-bold text-primary hover:text-primary/80 transition-colors underline decoration-2 decoration-primary/30 hover:decoration-primary text-xl">
                    954-354-1800
                  </a>{" "}
                  for an emergency confidential consultation.
                </p>
              </div>
              <p className="text-foreground/70 italic">
                The sooner you act, the more options you have.
              </p>
            </div>
          </div>
        </section>

        {/* Common MCA Debt Challenges - Expanded */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                  Common Merchant Cash Advance Debt Problems Business Owners Face
                </h2>
                <p className="text-xl text-foreground/70">
                  Recognizing these challenges is the first step toward finding effective solutions.
                </p>
              </div>

              <div className="space-y-8">
                <Card className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Multiple Merchant Cash Advance Loans
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        Business owners often take multiple MCAs to address immediate cash needs, creating a debt stacking problem. Each new advance increases total payment obligations, accelerating the debt cycle. When multiple MCA lenders are taking daily or weekly payments simultaneously, coordinating these obligations becomes nearly impossible without professional <Link href="/creditor-coordination" className="text-primary hover:underline">creditor coordination services</Link>.
                      </p>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        Managing multiple MCA relationships requires strategic prioritization, understanding each lender's enforcement capabilities, and developing a comprehensive plan to address all obligations while protecting cash flow. This complexity often necessitates experienced advisory support.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Daily ACH Withdrawals Draining Cash Flow
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        Unlike traditional loans with monthly payments, MCAs typically require daily or weekly ACH withdrawals directly from business bank accounts. This constant drain on operating capital prevents businesses from building reserves, managing seasonal fluctuations, or handling unexpected expenses.
                      </p>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        When daily withdrawals consume a significant percentage of revenue, businesses struggle to cover payroll, rent, inventory, and other operating expenses. Professional <Link href="/cash-flow-improvement" className="text-primary hover:underline">cash flow improvement strategies</Link> can help stabilize operations while addressing MCA obligations.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Extremely High Factor Rates
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        MCA factor rates typically range from 1.1 to 1.5, meaning businesses repay $110,000 to $150,000 for every $100,000 advanced. When calculated as an annual percentage rate (APR), the effective cost often exceeds 40-60% or higher—significantly more expensive than traditional financing.
                      </p>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        These high costs compound quickly when businesses take multiple MCAs or refinance existing advances. What seems like a short-term solution becomes a long-term burden that makes profitability nearly impossible. Understanding the true cost of MCA financing is essential for making informed business decisions.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileSearch className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        UCC Liens Limiting Financing Options
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        Most MCA agreements include UCC (Uniform Commercial Code) liens filed against business assets. These liens create legal claims on inventory, equipment, accounts receivable, and other assets, making it extremely difficult to obtain traditional financing or additional credit lines.
                      </p>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        UCC liens remain on public record and must be formally released by the lender after the debt is satisfied. Multiple MCA liens can completely block access to conventional financing, trapping businesses in a cycle of relying on expensive alternative funding. Resolving lien issues requires strategic negotiation and proper legal documentation.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Personal Guarantees
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        Many MCA agreements require personal guarantees from business owners, meaning personal assets become vulnerable if the business cannot fulfill the obligation. This creates significant personal financial risk beyond the business itself.
                      </p>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        When businesses face MCA default, personal guarantees expose owners to lawsuits, judgments, wage garnishment, and liens on personal property including homes and vehicles. Understanding the implications of personal guarantees and developing strategies to address them is a critical component of comprehensive debt relief planning.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Frozen Bank Accounts
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        MCA lenders who obtain judgments can levy business bank accounts, freezing access to operating capital. Account freezes can happen suddenly and without warning, bringing business operations to an immediate halt.
                      </p>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        When accounts are frozen, businesses cannot pay employees, vendors, or essential operating expenses. This creates emergency situations requiring immediate professional intervention. Experienced restructuring advisors can work to release frozen accounts while negotiating resolution of the underlying debt.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Scale className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        MCA Defaults and Confession of Judgment
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        Many MCA contracts contain Confession of Judgment clauses that allow lenders to obtain court judgments without traditional litigation. These clauses essentially waive the business owner's right to defend against collection actions in court.
                      </p>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        Once a Confession of Judgment is entered, lenders gain powerful collection tools including bank levies, wage garnishment, and property liens. These judgments can be obtained quickly and without your knowledge, making early professional intervention crucial to protecting your business and personal assets.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Cash Flow Problems
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        High MCA payments create constant cash flow pressure, making it difficult to maintain adequate working capital. Businesses often find themselves unable to take advantage of growth opportunities, purchase inventory at optimal pricing, or invest in necessary equipment and improvements.
                      </p>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        Chronic cash flow problems prevent businesses from building reserves to handle seasonal fluctuations, unexpected expenses, or economic downturns. Comprehensive <Link href="/business-restructuring" className="text-primary hover:underline">business restructuring services</Link> address both immediate payment relief and long-term cash flow stabilization.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Intense Creditor Pressure
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        MCA lenders typically employ aggressive collection tactics when businesses miss payments or default. Daily phone calls, emails, site visits, and threats of legal action create enormous stress and distraction for business owners trying to manage operations.
                      </p>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        Professional advisors can take over creditor communications, providing relief from collection pressure while negotiating resolution strategies. Having experienced representation changes the dynamic of creditor relationships and often leads to more favorable outcomes.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Scale className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Merchant Cash Advance Lawsuits
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        When MCA obligations remain unpaid, lenders frequently file lawsuits against businesses and personal guarantors. These lawsuits can result in court judgments that give creditors extensive collection powers including wage garnishment, bank levies, and property liens.
                      </p>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        Legal action adds court costs, attorney fees, and additional stress to already challenging situations. Understanding your legal rights and options—including potential defenses and negotiation strategies—is essential when facing MCA litigation. Experienced advisors can help navigate legal proceedings while working toward resolution that protects your business interests. When appropriate, exploring <Link href="/insights/business-restructuring-vs-bankruptcy" className="text-primary hover:underline">bankruptcy alternatives</Link> may provide additional protection and relief options.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mt-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Professional Help Can Make the Difference
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  If your business is experiencing one or more of these challenges, professional business advisory services can help develop strategies to address MCA obligations while protecting operations. Regroup Partners specializes in complex MCA situations and has 21+ years of experience helping businesses navigate these challenges successfully.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                  MCA Debt Relief vs Debt Consolidation vs Debt Settlement vs Bankruptcy
                </h2>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                  Understanding the differences between debt resolution strategies helps business owners make informed decisions.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-background rounded-lg overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-4 text-left font-semibold">Strategy</th>
                      <th className="p-4 text-left font-semibold">Best Use Case</th>
                      <th className="p-4 text-left font-semibold">Typical Objective</th>
                      <th className="p-4 text-left font-semibold">Cash Flow Impact</th>
                      <th className="p-4 text-left font-semibold">Creditor Negotiations</th>
                      <th className="p-4 text-left font-semibold">Business Continuity</th>
                      <th className="p-4 text-left font-semibold">Long-Term Considerations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/50">
                      <td className="p-4 font-semibold text-foreground">MCA Debt Relief</td>
                      <td className="p-4 text-foreground/70">Businesses with MCA obligations seeking comprehensive solutions through professional advisory services</td>
                      <td className="p-4 text-foreground/70">Restructure obligations, improve cash flow, coordinate creditors, achieve stability</td>
                      <td className="p-4 text-foreground/70">Focus on immediate relief and sustainable improvement</td>
                      <td className="p-4 text-foreground/70">Professional creditor coordination and negotiation on behalf of the business</td>
                      <td className="p-4 text-foreground/70">Designed to protect operations while resolving obligations</td>
                      <td className="p-4 text-foreground/70">Builds foundation for long-term business health and financial stability</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/50">
                      <td className="p-4 font-semibold text-foreground">Debt Consolidation</td>
                      <td className="p-4 text-foreground/70">Multiple obligations with ability to qualify for new financing</td>
                      <td className="p-4 text-foreground/70">Combine debts into single payment with better terms</td>
                      <td className="p-4 text-foreground/70">Can improve if new terms offer lower payments</td>
                      <td className="p-4 text-foreground/70">Typically requires satisfying existing creditors in full through new financing</td>
                      <td className="p-4 text-foreground/70">Generally maintains normal operations if qualified</td>
                      <td className="p-4 text-foreground/70">Success depends on qualifying for favorable new financing and managing consolidated debt</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/50">
                      <td className="p-4 font-semibold text-foreground">Debt Settlement</td>
                      <td className="p-4 text-foreground/70">Severe financial hardship with inability to fulfill original obligations</td>
                      <td className="p-4 text-foreground/70">Negotiate reduced total amount owed in exchange for lump-sum payment</td>
                      <td className="p-4 text-foreground/70">Requires access to settlement funds; may worsen initially during negotiation</td>
                      <td className="p-4 text-foreground/70">Direct negotiations seeking principal reduction; often contentious</td>
                      <td className="p-4 text-foreground/70">May disrupt operations during negotiation period; collection activity continues</td>
                      <td className="p-4 text-foreground/70">Can damage credit and business relationships; tax implications on forgiven debt</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="p-4 font-semibold text-foreground">Bankruptcy</td>
                      <td className="p-4 text-foreground/70">Overwhelming debt with few other viable options; need for legal protection</td>
                      <td className="p-4 text-foreground/70">Legal discharge or restructure of debts under court supervision</td>
                      <td className="p-4 text-foreground/70">Provides immediate relief from collection actions through automatic stay</td>
                      <td className="p-4 text-foreground/70">Court-supervised process; creditors must participate</td>
                      <td className="p-4 text-foreground/70">Chapter 11 allows reorganization; Chapter 7 typically requires liquidation</td>
                      <td className="p-4 text-foreground/70">Significant credit impact; public record; attorney fees; time-consuming process. Learn more about <Link href="/insights/business-restructuring-vs-bankruptcy" className="text-primary hover:underline">bankruptcy alternatives</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-muted/50 border border-border rounded-lg p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Choosing the Right Strategy
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg mb-4">
                  The most effective approach depends on your specific situation, including the extent of your obligations, current cash flow position, creditor relationships, business viability, and long-term goals. Some situations benefit from combining strategies—for example, using business restructuring services to address MCA obligations while implementing cash flow improvements that enable consolidation of other debts.
                </p>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  Regroup Partners provides free consultations to assess your situation and recommend the most appropriate path forward. Our 21+ years of experience with complex business debt situations allows us to evaluate all available options and develop customized strategies that protect your business while achieving sustainable debt relief.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-6">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                  The Regroup Partners Business Recovery Process
                </h2>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                  Our proven approach combines financial analysis, creditor negotiation, and strategic planning to help businesses overcome MCA debt challenges.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Confidential Consultation
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    Schedule a free, confidential discussion to review your MCA situation. We listen carefully to understand your business challenges, creditor obligations, and financial goals without judgment or pressure.
                  </p>
                </Card>

                <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Financial Assessment
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    Conduct comprehensive analysis of your business finances including revenue, expenses, assets, liabilities, and cash flow patterns. This assessment identifies opportunities and challenges for restructuring.
                  </p>
                </Card>

                <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Cash Flow Review
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    Analyze current cash flow patterns to identify immediate relief opportunities and develop strategies to stabilize operations while addressing debt obligations.
                  </p>
                </Card>

                <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Creditor Evaluation
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    Review all MCA agreements, UCC filings, personal guarantees, and creditor relationships. Understand enforcement capabilities, legal positions, and negotiation opportunities with each lender.
                  </p>
                </Card>

                <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      5
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Customized Recovery Strategy
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    Develop a tailored plan addressing your specific situation. This may include creditor negotiations, payment restructuring, cash flow improvements, and business operational enhancements.
                  </p>
                </Card>

                <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      6
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Ongoing Business Support
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    Provide continuous advisory support throughout implementation. Monitor progress, adjust strategies as needed, and ensure sustainable long-term business stability beyond debt resolution.
                  </p>
                </Card>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Timeline and Expectations
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  Every business situation is unique, so timelines vary. Some clients see relief within weeks, while more complex cases may take several months. What remains consistent is our commitment to transparent communication, professional advocacy, and sustainable solutions that protect your business while addressing MCA obligations effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                  Why Businesses Choose Regroup Partners for MCA Debt Relief
                </h2>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                  Our comprehensive approach addresses your MCA debt while protecting your business interests.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Handshake className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Creditor Coordination
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We negotiate directly with MCA lenders to restructure payment terms, reduce obligations, and establish manageable payment plans through professional <Link href="/creditor-coordination" className="text-primary hover:underline">creditor coordination strategies</Link>.
                  </p>
                </Card>

                <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Cash Flow Improvement
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Strategic analysis and implementation of <Link href="/cash-flow-improvement" className="text-primary hover:underline">cash flow optimization strategies</Link> to free up working capital and stabilize operations.
                  </p>
                </Card>

                <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Business Restructuring
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Comprehensive <Link href="/business-restructuring" className="text-primary hover:underline">business restructuring services</Link> that address underlying business challenges while resolving MCA debt obligations.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                

                
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                  We are not a debt settlement company. We are experienced business advisors focused on sustainable solutions.
                </p>
              </div>

              <div className="space-y-6">
                {[
                {
                  title: "21+ Years of Restructuring Experience",
                  description: "Decades of proven success helping businesses navigate complex financial challenges and creditor relationships."
                },
                {
                  title: "Specialized MCA Expertise",
                  description: "Deep understanding of Merchant Cash Advance structures, lender practices, and effective negotiation strategies through dedicated MCA advisory services."
                },
                {
                  title: "Professional Creditor Relationships",
                  description: "Established relationships with major MCA providers enable more effective negotiations and better outcomes."
                },
                {
                  title: "Confidential & Discreet Service",
                  description: "All consultations and negotiations are handled with complete confidentiality to protect your business reputation."
                },
                {
                  title: "Comprehensive Business Solutions",
                  description: "We address the root causes of financial stress, not just the symptoms, creating long-term stability."
                },
                {
                  title: "Women-Owned & Operated",
                  description: "Committed to delivering institutional-grade advisory services with personalized attention and hands-on involvement."
                }].
                map((item, idx) =>
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="space-y-2">
                        <h3 className="font-semibold text-xl text-foreground">{item.title}</h3>
                        <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="space-y-4">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                  Industries We Assist
                </h2>
                <p className="text-xl text-foreground/70">
                  We help businesses across diverse industries resolve MCA debt and restore financial health.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {industries.map((industry, idx) =>
                <div key={idx} className="p-4 rounded-lg bg-muted border border-border hover:border-primary/50 transition-colors">
                    <p className="font-semibold text-foreground">{industry}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                  Frequently Asked Questions About MCA Debt Relief
                </h2>
                <p className="text-xl text-foreground/70">
                  Get answers to common questions about Merchant Cash Advance debt relief and business restructuring.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, idx) =>
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-background border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 leading-relaxed pt-2">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Have More Questions?
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                  Our team is ready to answer your questions and discuss your specific MCA debt situation in a confidential consultation.
                </p>
                <Button variant="default" size="lg" asChild>
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-display text-4xl lg:text-5xl font-bold">
                Take Control of Your MCA Debt Today
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Don't let Merchant Cash Advance debt overwhelm your business. Our experienced advisors are ready to help you explore relief options and create a path to financial stability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold"
                  asChild>
                  
                  <a href="#hero">Get Free Consultation</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-white/10 border-white/30 hover:bg-white/20 text-white"
                  asChild>
                  
                  <a href="tel:+19543541800">
                    <Phone className="h-5 w-5 mr-2" />
                    Speak With An Advisor
                  </a>
                </Button>
              </div>
              <p className="text-sm text-white/70 pt-4">
                Confidential consultations available. No obligation. Call 954-354-1800
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>);

}