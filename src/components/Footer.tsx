import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  const footerLinks = {
    Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" }],

    Services: [
    { label: "Business Restructuring", href: "/services#restructuring" },
    { label: "Creditor Coordination", href: "/services#creditor" },
    { label: "Cash Flow Improvement", href: "/services#cashflow" },
    { label: "MCA Advisory", href: "/services#mca" }],

    Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" }]

  };

  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/LUGO.png"
                alt="Regroup Partners"
                className="h-16 w-auto object-contain bg-white rounded-sm p-1" />
              
            </Link>
            <p className="text-sm text-foreground/80 leading-relaxed max-w-sm">
              Business Restructuring & Financial Advisory
            </p>
            
            <div className="mt-6 space-y-1.5 text-sm text-foreground/60">
              <p>5255 North Federal Highway Suite 301</p>
              <p>Boca Raton, FL 33487</p>
              <p className="pt-3">
                <a href="tel:954-833-4958" className="text-foreground hover:text-primary font-medium transition-colors text-base">
                  (954) 833-4958
                </a>
              </p>
            </div>

            <p className="text-sm text-foreground/60 mt-8 font-medium">
              21+ Years Experience
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) =>
          <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) =>
              <li key={link.href}>
                    <Link
                  href={link.href}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-foreground/60">
              © {currentYear} Regroup Partners. All rights reserved.
            </p>
            <p className="text-sm text-foreground/60">
              Women-Owned and Operated Professional Business Advisory Firm
            </p>
          </div>
        </div>
      </div>
    </footer>);

}