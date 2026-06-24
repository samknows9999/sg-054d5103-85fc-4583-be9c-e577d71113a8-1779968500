import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, CheckCircle2, Shield, Users, Clock, TrendingUp, FileText, ChevronRight } from "lucide-react";
import { useState, FormEvent } from "react";
import Link from "next/link";
import Head from "next/head";

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
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: "MCA Debt Relief Consultation Request",
          source: "Google Ads Landing Page"
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", mcaDebt: "", message: "" });
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
    }
  ];

  const industries = [
    "Restaurants & Hospitality",
    "Retail & E-commerce",
    "Healthcare Services",
    "Professional Services",
    "Construction & Contractors",
    "Automotive Services",
    "Beauty & Wellness",
    "Transportation & Logistics"
  ];

  return (
    <>
      <SEO
        title="MCA Debt Relief & Merchant Cash Advance Solutions | Regroup Partners"
        description="Struggling with MCA payments? Regroup Partners helps businesses explore MCA debt relief, creditor negotiations, cash flow solutions, and restructuring options."
        url="https://regrouppartners.com/mca-debt-relief"
      />

      <Head>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Regroup Partners",
              "description": "Business Restructuring & Financial Advisory",
              "url": "https://regrouppartners.com",
              "telephone": "+1-305-912-5481",
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
          }}
        />
      </Head>

      {/* Simplified Header - No Distracting Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/Logo_Regroup.png" alt="Regroup Partners" className="h-10 w-auto" />
          </Link>
          <a href="tel:+13059125481" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold">
            <Phone className="h-5 w-5" />
            <span className="hidden sm:inline">305-912-5481</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section with Inline Form */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background -z-10" />
          
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              {/* Hero Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <Shield className="h-4 w-4" />
                  <span>Confidential Consultation</span>
                </div>

                <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  MCA Debt Relief for Business Owners
                </h1>

                <p className="text-xl text-foreground/80 leading-relaxed">
                  Overwhelmed by Merchant Cash Advance payments? Our experienced team helps businesses restructure MCA debt, improve cash flow, and regain financial stability.
                </p>

                {/* Trust Indicators */}
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

              {/* Contact Form - Above the Fold */}
              <Card className="p-8 shadow-xl border-2 border-primary/20">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="font-display text-2xl font-bold text-foreground">Get a Free Consultation</h2>
                    <p className="text-foreground/70">Discuss your MCA debt situation confidentially with an expert advisor.</p>
                  </div>

                  {submitStatus === "success" ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-green-900 text-lg mb-2">Thank you for contacting Regroup Partners.</h3>
                          <p className="text-green-800 leading-relaxed">Your request has been received successfully. A member of our team will review your information and contact you shortly.</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Input
                          type="tel"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Approximate MCA Debt Amount"
                          value={formData.mcaDebt}
                          onChange={(e) => setFormData({ ...formData, mcaDebt: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Brief description of your situation (optional)"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 text-lg font-semibold"
                        variant="default"
                      >
                        {isSubmitting ? "Submitting..." : "Get Free Consultation"}
                      </Button>
                      <p className="text-xs text-center text-foreground/60">
                        All consultations are confidential. We respect your privacy.
                      </p>
                    </form>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* MCA Debt Challenges */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                Common MCA Debt Challenges
              </h2>
              <p className="text-xl text-foreground/70">
                If your business is struggling with these issues, professional help can make a difference.
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left pt-8">
                {[
                  "Daily or weekly payments draining cash flow",
                  "Multiple MCA obligations compounding pressure",
                  "Unable to meet payment schedules consistently",
                  "Bank accounts frozen or levied by creditors",
                  "UCC liens limiting financing options",
                  "Confession of judgment threats or actions",
                  "Declining revenue making payments unsustainable",
                  "Need immediate relief to stabilize operations"
                ].map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How Regroup Partners Helps */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                  How Regroup Partners Helps
                </h2>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                  Our comprehensive approach addresses your MCA debt while protecting your business interests.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Creditor Coordination
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We negotiate directly with MCA lenders to restructure payment terms, reduce obligations, and establish manageable payment plans.
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
                    Strategic analysis and implementation of cash flow optimization strategies to free up working capital and stabilize operations.
                  </p>
                </Card>

                <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Business Restructuring
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Comprehensive restructuring plans that address underlying business challenges while resolving MCA debt obligations.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Regroup Partners */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                  Why Choose Regroup Partners
                </h2>
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
                    description: "Deep understanding of Merchant Cash Advance structures, lender practices, and effective negotiation strategies."
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
                  }
                ].map((item, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="space-y-2">
                        <h3 className="font-semibold text-xl text-foreground">{item.title}</h3>
                        <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Assist */}
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
                {industries.map((industry, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-muted border border-border hover:border-primary/50 transition-colors">
                    <p className="font-semibold text-foreground">{industry}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-foreground/70">
                  Get answers to common questions about MCA debt relief.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="bg-background border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 leading-relaxed pt-2">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
                  asChild
                >
                  <a href="#hero">Get Free Consultation</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-white/10 border-white/30 hover:bg-white/20 text-white"
                  asChild
                >
                  <a href="tel:+13059125481">
                    <Phone className="h-5 w-5 mr-2" />
                    Speak With An Advisor
                  </a>
                </Button>
              </div>
              <p className="text-sm text-white/70 pt-4">
                Confidential consultations available. No obligation. Call 305-912-5481
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}