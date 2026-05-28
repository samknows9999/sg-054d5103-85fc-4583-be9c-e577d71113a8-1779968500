import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, ArrowRight, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const columns = [
  {
    title: "About",
    links: [
    { label: "About Regroup Partners", href: "/about" },
    { label: "Leadership Team", href: "/team" },
    { label: "Our Approach", href: "/about#approach" },
    { label: "Industries We Serve", href: "/cash-flow-improvement#industries" },
    { label: "Contact Us", href: "/contact" }]

  },
  {
    title: "Services",
    links: [
    { label: "Business Restructuring", href: "/business-restructuring" },
    { label: "Creditor Coordination", href: "/creditor-coordination" },
    { label: "Cash Flow Improvement", href: "/cash-flow-improvement" },
    { label: "MCA Negotiations", href: "/creditor-coordination" },
    { label: "Financial Advisory", href: "/services" }]

  },
  {
    title: "Resources",
    links: [
    { label: "Case Studies", href: "/insights" },
    { label: "FAQs", href: "/faq" },
    { label: "Business Insights", href: "/insights" },
    { label: "Restructuring Articles", href: "/insights" },
    { label: "Industry News", href: "/insights" }]

  }];


  return (
    <footer className="bg-white pt-24 pb-8 border-t border-gray-200 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 mb-16 border-b border-gray-200 gap-8">
          <Link href="/" className="inline-block">
            <img
              src="/LUGO.png"
              alt="Regroup Partners"
              className="h-20 md:h-28 w-auto object-contain" />
            
          </Link>
          <div className="text-left md:text-right max-w-md">
            <h3 className="text-2xl font-serif text-black leading-tight" style={{ textAlign: "center" }}>Helping Companies Restore Stability & Growth

            </h3>
          </div>
        </div>

        {/* Mega Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          
          {/* Navigation Columns */}
          {columns.map((column, idx) =>
          <div key={idx}>
              <h4 className="text-lg font-serif font-semibold text-black mb-8">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIdx) =>
              <li key={linkIdx}>
                    <Link
                  href={link.href}
                  className="group relative inline-flex items-center text-[15px] text-gray-600 hover:text-accent transition-colors duration-300">
                  
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
                    </Link>
                  </li>
              )}
              </ul>
            </div>
          )}

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-black mb-8">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-default">
                <MapPin className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors shrink-0 mt-1" />
                <div className="text-[15px] text-gray-600 leading-relaxed">
                  <span className="block text-black font-medium mb-1">Boca Raton Office</span>
                  5255 North Federal Highway<br />
                  Suite 301<br />
                  Boca Raton, FL 33487
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                <a
                  href="tel:954-234-2300"
                  className="text-lg font-serif font-bold text-black hover:text-accent tracking-wide transition-colors relative group">
                  
                  (954) 234-2300
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                <a
                  href="mailto:laura@regrouppartners.com,claudia@regrouppartners.com"
                  className="text-[15px] text-gray-600 hover:text-accent transition-colors relative group">
                  
                  info@regrouppartners.com
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              </li>
            </ul>

            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between w-full bg-black text-white px-6 py-4 text-sm font-semibold hover:bg-accent transition-colors duration-300 shadow-md">
                
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/company/regroup-partners/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="LinkedIn">
                
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/regrouppartners"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="X (Twitter)">
                
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/RegroupPartners/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Facebook">
                
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/regrouppartners/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Instagram">
                
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCny0JsZTbq5eBnbuzJZSJng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="YouTube">
                
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500 order-2 lg:order-1">
            <p>© {currentYear} Regroup Partners. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500 font-medium order-1 lg:order-2">
            <Link href="/privacy" className="hover:text-accent transition-colors relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors relative group">
              Terms of Use
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-accent transition-colors relative group outline-none">
                  Disclaimer
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-white rounded-xl shadow-2xl border-gray-100 p-8 sm:p-10">
                <DialogHeader className="mb-4 text-left">
                  <DialogTitle className="font-serif text-3xl text-black">Disclaimer</DialogTitle>
                </DialogHeader>
                <div className="text-gray-600 text-[15px] leading-relaxed space-y-6 text-left">
                  <p>
                    Regroup Partners does not provide services related to consumer debt or credit counseling. Our program may not be available in all states. We encourage you to read and understand all program materials before accepting our services. Please note that we do not charge upfront fees. We negotiate restructuring terms and agreements directly with creditors/lenders in conjunction with our clients. Regroup Partners is committed to diligently working towards the reduction of all business debts exclusively. Regroup Partners is not a licensed law firm. Regroup Partners co is licensed registered with the department of justice office of consumer protection consumer management. In accordance with the debt management service act (MCA 30-14, Part 20).
                  </p>
                  <div className="pt-6 border-t border-gray-100">
                    <p className="font-medium text-black mb-1">Address:</p>
                    <p>5255 North Federal Highway Suite 301<br />Boca Raton 33487</p>
                    <p className="mt-4 text-black font-serif font-bold text-2xl tracking-wide">954-234-2300</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <span className="hidden lg:inline text-gray-300">|</span>
            <span className="text-gray-500">Women-Owned Business Advisory Firm</span>
          </div>
        </div>

      </div>
    </footer>);

}