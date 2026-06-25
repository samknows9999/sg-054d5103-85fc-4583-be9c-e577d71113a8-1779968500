import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
  return (
    <>
      <SEO 
        title="Thank You | Regroup Partners"
        description="Thank you for contacting Regroup Partners. Your consultation request has been received successfully."
        url="/thank-you"
      />

      <Navigation />

      <main className="min-h-screen bg-gray-50">
        <section className="py-24 md:py-32">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-12 md:p-16 text-center">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
                Thank You!
              </h1>

              <h2 className="text-2xl font-semibold text-foreground mb-8">
                Your Consultation Request Has Been Successfully Received.
              </h2>

              <div className="text-lg text-foreground/80 leading-relaxed space-y-6 mb-12">
                <p>
                  Thank you for reaching out to Regroup Partners. We appreciate the opportunity to learn about your business and the financial challenges you're facing.
                </p>

                <p>
                  One of our experienced business advisory specialists will carefully review your submission and contact you as soon as possible to discuss your situation and explore potential solutions tailored to your business.
                </p>

                <p>
                  Our consultations are completely confidential, and we're committed to helping business owners navigate financial challenges with clarity and confidence.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
                  <p className="text-foreground/90 font-semibold mb-2">
                    If your matter is urgent, please call us directly:
                  </p>
                  <a 
                    href="tel:+19543541800" 
                    className="inline-flex items-center gap-2 text-2xl font-serif font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone className="w-6 h-6" />
                    (954) 354-1800
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10">
                <h3 className="font-serif text-xl font-semibold text-[#0A192F] mb-6">
                  What Happens Next?
                </h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">
                      We review your information.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">
                      A specialist contacts you to discuss your situation.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">
                      Together, we'll evaluate the best path forward for your business.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-foreground/90 font-medium mb-8">
                Thank you for choosing Regroup Partners. We look forward to speaking with you soon.
              </p>

              <Link href="/">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg font-semibold shadow-lg shadow-primary/20"
                >
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}