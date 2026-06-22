import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { useState, useCallback, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { Loader2 } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact() {
  const { toast } = useToast();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formStartTime = useRef<number>(0);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    revenueRange: "",
    financialConcerns: "",
    preferredContact: "",
    website: "" // Honeypot field
  });

  // Track when form is first interacted with
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (formStartTime.current === 0) {
        formStartTime.current = Date.now();
      }
    };

    // Track first interaction
    const form = document.querySelector('form');
    form?.addEventListener('focus', handleFirstInteraction, true);
    form?.addEventListener('input', handleFirstInteraction, true);

    return () => {
      form?.removeEventListener('focus', handleFirstInteraction, true);
      form?.removeEventListener('input', handleFirstInteraction, true);
    };
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Check minimum form completion time (5 seconds)
    const timeTaken = Date.now() - formStartTime.current;
    if (timeTaken < 5000) {
      console.log(`[SPAM BLOCK] Form submitted too quickly: ${timeTaken}ms`);
      toast({
        title: "Please Slow Down",
        description: "Please take a moment to review your submission.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      // Get reCAPTCHA token if available (optional)
      let recaptchaToken = undefined;
      if (executeRecaptcha) {
        try {
          recaptchaToken = await executeRecaptcha("contact_form");
        } catch (error) {
          console.warn("reCAPTCHA not available, proceeding without it");
        }
      }

      const emailBody = `
Company Name: ${formData.companyName}
Contact Name: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Revenue Range: ${formData.revenueRange}
Preferred Contact: ${formData.preferredContact}

Financial Situation:
${formData.financialConcerns}

Form Completion Time: ${Math.round(timeTaken / 1000)}s
      `.trim();
      
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "Confidential Business Review Request",
          message: emailBody,
          from: formData.email,
          customerName: formData.contactName,
          companyName: formData.companyName,
          phone: formData.phone,
          recaptchaToken,
          honeypot: formData.website // Honeypot field
        })
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          revenueRange: "",
          financialConcerns: "",
          preferredContact: "",
          website: ""
        });
        setTimeout(() => setShowSuccess(false), 8000);
      } else if (response.status === 429) {
        toast({
          title: "Rate Limit Exceeded",
          description: data.message || "Too many requests. Please try again later.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Submission Failed",
          description: data.message || "Failed to submit request. Please try again or call us directly.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [executeRecaptcha, formData, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO 
        title="Contact Regroup Partners | Confidential Business Consultation"
        description="Schedule a confidential business review with our restructuring experts. Get professional guidance on financial challenges, MCA obligations, and creditor coordination."
        url="/contact"
      />

      <Navigation />

      <main className="">
        <Hero
          title="Confidential Business Review"
          subtitle="Connect with our experienced advisory team for a confidential discussion about your business challenges and restructuring needs."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" }
          ]}
          backgroundImage="/generated/contact-reception.png"
        />

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-16">
              <img
                src="/location-map.png"
                alt="Regroup Partners - Boca Raton Location and Service Area"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                  What to Expect
                </h2>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Your initial consultation is confidential, pressure-free, and focused on understanding your specific situation.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 hover:shadow-xl hover:border-accent/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Initial Consultation</h3>
                        <p className="text-sm text-foreground/70">
                          We'll discuss your situation, review your financial position, and explain how we can help.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 hover:shadow-xl hover:border-accent/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Strategic Assessment</h3>
                        <p className="text-sm text-foreground/70">
                          We'll analyze your creditor landscape and develop a comprehensive restructuring strategy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 hover:shadow-xl hover:border-accent/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Ongoing Support</h3>
                        <p className="text-sm text-foreground/70">
                          Direct access to our team throughout your restructuring process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-200 shadow-lg rounded-xl p-6 hover:shadow-xl hover:border-accent/30 transition-all">
                    <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">Alternative Contact Methods</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <div className="font-semibold text-foreground">Email</div>
                          <a href="mailto:laura@regrouppartners.com,claudia@regrouppartners.com" className="text-accent hover:underline">
                            info@regrouppartners.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <div className="font-semibold text-foreground">Phone</div>
                          <a href="tel:+19543541800" className="text-accent hover:underline">
                            +1 (954) 354-1800
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <div className="font-semibold text-foreground">Business Hours</div>
                          <div className="text-foreground/70">Monday - Friday, 9:00 AM - 5:00 PM EST</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-lg border border-gray-200 shadow-lg">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-2 text-foreground">
                  Request a Consultation
                </h2>
                <p className="text-foreground/70 mb-8">
                  Complete this form and our advisory team will contact you within one business day.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {showSuccess && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <h3 className="font-semibold text-green-900 mb-1">Thank you for contacting Regroup Partners.</h3>
                          <p className="text-sm text-green-800">A member of our team will reach out shortly. Check your email for confirmation.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    {/* Honeypot field - hidden from users but visible to bots */}
                    <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                      <label htmlFor="website">Website (leave blank)</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>

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
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Confidential Request"
                      )}
                    </button>

                    <p className="text-xs text-foreground/60 text-center">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Terms of Service
                      </a>{" "}
                      apply. All information submitted is treated with strict confidentiality. We typically respond within one business day.
                    </p>
                  </div>
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