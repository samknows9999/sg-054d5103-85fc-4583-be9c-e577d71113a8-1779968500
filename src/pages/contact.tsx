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

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm">
                <span className="text-sm font-semibold text-blue-400 font-display">DISCREET & CONFIDENTIAL</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 text-white leading-[1.1] tracking-tight uppercase">
                CONFIDENTIAL BUSINESS <span className="text-blue-400">REVIEW</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                Connect with our experienced advisory team for a confidential discussion about your business challenges and restructuring needs
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div>
                <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wide font-display">What To Expect</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900 uppercase tracking-tight leading-[1.1]">
                  YOUR CONSULTATION <span className="text-blue-500">PROCESS</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Your initial consultation is confidential, pressure-free, and focused on understanding your specific situation.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                      <h3 className="font-display text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                        Initial Consultation
                      </h3>
                      <p className="text-gray-600">
                        We'll discuss your situation, review your financial position, and explain how we can help.
                      </p>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                      <h3 className="font-display text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                        Strategic Assessment
                      </h3>
                      <p className="text-gray-600">
                        We'll analyze your creditor landscape and develop a comprehensive restructuring strategy.
                      </p>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                      <h3 className="font-display text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                        Ongoing Support
                      </h3>
                      <p className="text-gray-600">
                        Direct access to our team throughout your restructuring process.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-200 transition-all duration-500">
                    <h3 className="font-display text-xl font-black text-gray-900 mb-4 uppercase tracking-wide">Alternative Contact</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide">Email</div>
                        <a href="mailto:contact@regrouppartners.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                          contact@regrouppartners.com
                        </a>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide">Phone</div>
                        <a href="tel:+1-555-REGROUP" className="text-blue-600 hover:text-blue-700 font-semibold">
                          +1 (555) REGROUP
                        </a>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide">Business Hours</div>
                        <div className="text-gray-600">Monday - Friday, 9:00 AM - 5:00 PM EST</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-200 shadow-xl">
                <h2 className="font-display text-2xl md:text-3xl font-black mb-2 text-gray-900 uppercase tracking-tight">
                  REQUEST A CONSULTATION
                </h2>
                <p className="text-gray-600 mb-8">
                  Complete this form and we'll contact you within one business day.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="revenueRange" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Annual Revenue Range *
                    </label>
                    <select
                      id="revenueRange"
                      name="revenueRange"
                      required
                      value={formData.revenueRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    <label htmlFor="financialConcerns" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Brief Description of Financial Situation *
                    </label>
                    <textarea
                      id="financialConcerns"
                      name="financialConcerns"
                      required
                      value={formData.financialConcerns}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please describe your business situation..."
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Preferred Contact Method *
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      required
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select preference</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either Email or Phone</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-display font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
                  >
                    Submit Confidential Request
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-sm text-gray-500 text-center">
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