import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2, Award, ArrowRight } from "lucide-react";

const publications = [
  {
    name: "CEO Times",
    title: "Regroup Partners: Florida's Business Debt Turnaround Experts",
    url: "https://ceotimes.com/regroup-partners-floridas-business-debt-turnaround-experts/",
    summary: "CEO Times highlights Regroup Partners' expertise in helping Florida businesses navigate complex debt restructuring and financial recovery strategies."
  },
  {
    name: "USA News",
    title: "Regroup Partners: Your Path to Financial Stability and Business Transformation",
    url: "https://usanews.com/newsroom/regroup-partners-your-path-to-financial-stability-and-business-transformation",
    summary: "USA News features Regroup Partners' proven approach to supporting small businesses through financial challenges and achieving sustainable growth."
  },
  {
    name: "Today US",
    title: "How Regroup Partners Guides Businesses Through Financial Crossroads",
    url: "https://todayus.com/regroup-partners-the-trusted-ally-for-small-business-restructuring-success",
    summary: "Today US explores how Regroup Partners serves as a trusted ally for small business restructuring success and operational recovery."
  },
  {
    name: "Miami Highlight",
    title: "Regroup Partners: The Turnaround Firm Built on Trust",
    url: "https://miamihighlight.com/regroup-partners-the-turnaround-firm-built-on-trust/",
    summary: "Miami Highlight profiles Regroup Partners' reputation as a turnaround firm built on trust, transparency, and measurable results."
  },
  {
    name: "BizRecap",
    title: "Regroup Partners: Empowering Small and Medium Businesses With Restructuring Expertise",
    url: "https://bizrecap.com/regroup-partners-empowering-small-and-medium-businesses-with-restructuring-expertise/",
    summary: "BizRecap showcases how Regroup Partners empowers small and medium businesses with specialized restructuring expertise and financial advisory."
  }
];

const expertiseAreas = [
  "Business Restructuring",
  "Creditor Coordination",
  "Merchant Cash Advance Advisory",
  "Financial Stabilization",
  "Business Debt Turnaround",
  "Small Business Restructuring"
];

export default function MediaMentions() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://regrouppartners.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Media Mentions",
        "item": "https://regrouppartners.com/media-mentions"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Regroup Partners",
    "url": "https://regrouppartners.com",
    "logo": "https://regrouppartners.com/logo.jpg",
    "description": "Premium business restructuring and financial advisory firm specializing in creditor coordination, MCA advisory, and business debt turnaround services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5255 North Federal Highway Suite 301",
      "addressLocality": "Boca Raton",
      "addressRegion": "FL",
      "postalCode": "33487",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "954-354-1800",
      "contactType": "customer service"
    }
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": publications.map((pub, index) => ({
      "@type": "Article",
      "position": index + 1,
      "name": pub.title,
      "url": pub.url,
      "publisher": {
        "@type": "Organization",
        "name": pub.name
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-foreground">
      <SEO 
        title="REgroup Partners Media Mentions | Featured Business Restructuring Experts" 
        description="Explore media coverage and industry recognition highlighting REgroup Partners' expertise in business restructuring, creditor coordination, MCA advisory, financial stabilization, and business debt turnaround services."
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      </Head>

      <Navigation />
      <ThemeSwitch />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gray-900 text-white">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70 z-10"></div>
            <img 
              src="/generated/insights-editorial.png" 
              alt="Media publications featuring Regroup Partners" 
              className="w-full h-full object-cover object-center opacity-40"
            />
          </div>
          <div className="relative z-20 max-w-[1400px] mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground backdrop-blur-sm mb-6 text-sm font-medium">
                <Award className="w-4 h-4" />
                Industry Recognition
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] mb-6 tracking-tight">
                REgroup Partners in the News
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-2xl">
                Industry publications and business media outlets have featured REgroup Partners and Claudia Stefano-Maicon for insights on business restructuring, financial stabilization, creditor coordination, merchant cash advance advisory, and small business turnaround strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Publications */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">Featured Publications</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-lg text-foreground/70">
                Recognized by leading business and industry publications for expertise in business restructuring and financial advisory.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{pub.name}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 leading-tight">{pub.title}</h4>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{pub.summary}</p>
                  <a 
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors group-hover:gap-3"
                  >
                    Read Feature
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Businesses Trust REgroup Partners */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">Why Businesses Trust REgroup Partners</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                With over 20 years of experience, REgroup Partners delivers institutional-grade financial advisory and restructuring services to businesses nationwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-semibold text-foreground">{area}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/business-restructuring" className="group">
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">Business Restructuring</h3>
                  <p className="text-foreground/70 mb-4">Strategic financial restructuring to restore operational stability and growth.</p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>

              <Link href="/mca-advisory" className="group">
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">MCA Advisory</h3>
                  <p className="text-foreground/70 mb-4">Professional merchant cash advance restructuring and payment relief strategies.</p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>

              <Link href="/creditor-coordination" className="group">
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">Creditor Coordination</h3>
                  <p className="text-foreground/70 mb-4">Centralized creditor communication and strategic debt management solutions.</p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Services Link */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/cash-flow-improvement" className="group">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">Cash Flow Improvement</h3>
                  <p className="text-foreground/70 mb-4">Optimize working capital and restore financial stability through proven strategies.</p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold">
                    Explore Services
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>

              <Link href="/contact" className="group">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">Contact Us</h3>
                  <p className="text-foreground/70 mb-4">Schedule a confidential consultation with our business restructuring specialists.</p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold">
                    Get Started
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Need Strategic Guidance for Business Financial Pressure?
              </h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Partner with a nationally recognized business restructuring firm trusted by industry publications and business leaders.
              </p>
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg font-semibold shadow-lg shadow-accent/20">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}