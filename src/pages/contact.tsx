import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    revenueRange: "",
    financialConcerns: "",
    preferredContact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Confidential Business Review | Regroup Partners"
        description="Request a confidential consultation with our business restructuring and financial advisory team. Discreet, professional advisory services for businesses facing financial challenges."
      />

      <Navigation />

      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <span className="text-sm font-semibold text-accent">Confidential & Discreet</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 text-foreground">
                Confidential Business Review
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Schedule a private consultation with our advisory team to discuss your business situation and explore strategic restructuring solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                  What to Expect
                </h2>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Your initial consultation is confidential, pressure-free, and focused on understanding your specific situation.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-2">Complete Confidentiality</h3>
                      <p className="text-foreground/70">
                        All consultations and communications are handled with strict professional confidentiality.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-2">No Pressure</h3>
                      <p className="text-foreground/70">
                        Our consultations are informational and advisory — no aggressive sales tactics or high-pressure engagement requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-2">Direct Advisory Team Access</h3>
                      <p className="text-foreground/70">
                        Speak directly with our experienced advisory team, not a call center or sales department.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-8 rounded-lg border border-border">
                  <h3 className="font-serif text-xl font-semibold mb-4">Alternative Contact Methods</h3>
                  <div className="space-y-4 text-foreground/70">
                    <div>
                      <div className="font-semibold text-foreground mb-1">Email</div>
                      <a href="mailto:advisory@regrouppartners.com" className="text-accent hover:underline">
                        advisory@regrouppartners.com
                      </a>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Phone</div>
                      <a href="tel:+18005551234" className="text-accent hover:underline">
                        (800) 555-1234
                      </a>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Office Hours</div>
                      <p>Monday – Friday, 9:00 AM – 6:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 md:p-10 rounded-lg border border-border shadow-lg">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-2 text-foreground">
                  Request a Consultation
                </h2>
                <p className="text-foreground/70 mb-8">
                  Complete this form and our advisory team will contact you within one business day.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block text-sm font-semibold text-foreground mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="revenueRange" className="block text-sm font-semibold text-foreground mb-2">
                      Annual Revenue Range *
                    </label>
                    <select
                      id="revenueRange"
                      name="revenueRange"
                      required
                      value={formData.revenueRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    >
                      <option value="">Select revenue range</option>
                      <option value="under-500k">Under $500,000</option>
                      <option value="500k-1m">$500,000 - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m-plus">$10M+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="financialConcerns" className="block text-sm font-semibold text-foreground mb-2">
                      Brief Description of Financial Situation *
                    </label>
                    <textarea
                      id="financialConcerns"
                      name="financialConcerns"
                      required
                      value={formData.financialConcerns}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                      placeholder="Please describe your business situation and financial concerns..."
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-semibold text-foreground mb-2">
                      Preferred Contact Method *
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      required
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    >
                      <option value="">Select preference</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either Email or Phone</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
                  >
                    Submit Confidential Request
                  </button>

                  <p className="text-sm text-foreground/60 text-center">
                    All information submitted is treated with strict confidentiality. We typically respond within one business day.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}