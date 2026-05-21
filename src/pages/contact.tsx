import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
        description="Request a confidential business review with our experienced restructuring advisory team. Discreet, professional consultation for complex financial situations."
      />

      <Navigation />

      <main className="dark">
        {/* Hero Section */}
        <section className="relative bg-[#0F172A] text-white min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="max-w-5xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
                <span className="text-sm font-medium text-blue-400">Discreet & Confidential</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-8">
                Confidential Business<br />Review
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
                Connect with our experienced advisory team for a confidential discussion about your business challenges and restructuring needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#0F172A]">
                  What to Expect
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Your initial consultation is confidential, pressure-free, and focused on understanding your specific situation.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="font-display text-lg font-bold text-[#0F172A] mb-2">Initial Consultation</h3>
                    <p className="text-slate-600">
                      We'll discuss your situation, review your financial position, and explain how we can help.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="font-display text-lg font-bold text-[#0F172A] mb-2">Strategic Assessment</h3>
                    <p className="text-slate-600">
                      We'll analyze your creditor landscape and develop a comprehensive restructuring strategy.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="font-display text-lg font-bold text-[#0F172A] mb-2">Ongoing Support</h3>
                    <p className="text-slate-600">
                      Direct access to our team throughout your restructuring process.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="font-display text-xl font-bold text-[#0F172A] mb-4">Alternative Contact</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-semibold text-[#0F172A] mb-1">Email</div>
                      <a href="mailto:contact@regrouppartners.com" className="text-blue-600 hover:text-blue-700">
                        contact@regrouppartners.com
                      </a>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0F172A] mb-1">Phone</div>
                      <a href="tel:+1-555-REGROUP" className="text-blue-600 hover:text-blue-700">
                        +1 (555) REGROUP
                      </a>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0F172A] mb-1">Business Hours</div>
                      <div className="text-slate-600">Monday - Friday, 9:00 AM - 5:00 PM EST</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 md:p-10 rounded-xl border border-slate-200">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-[#0F172A]">
                  Request a Consultation
                </h2>
                <p className="text-slate-600 mb-8">
                  Complete this form and we'll contact you within one business day.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="revenueRange" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Annual Revenue Range *
                    </label>
                    <select
                      id="revenueRange"
                      name="revenueRange"
                      required
                      value={formData.revenueRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
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
                    <label htmlFor="financialConcerns" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Brief Description of Financial Situation *
                    </label>
                    <textarea
                      id="financialConcerns"
                      name="financialConcerns"
                      required
                      value={formData.financialConcerns}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                      placeholder="Please describe your business situation..."
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Preferred Contact Method *
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      required
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    >
                      <option value="">Select preference</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either Email or Phone</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 group"
                  >
                    Submit Confidential Request
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-sm text-slate-500 text-center">
                    All information is treated with strict confidentiality. We typically respond within one business day.
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