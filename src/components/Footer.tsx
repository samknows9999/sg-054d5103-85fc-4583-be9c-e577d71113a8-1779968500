import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  const footerLinks = {
    Company: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
    Services: [
      { label: "Business Restructuring", href: "/services#restructuring" },
      { label: "Creditor Coordination", href: "/services#creditor" },
      { label: "Cash Flow Improvement", href: "/services#cashflow" },
      { label: "MCA Advisory", href: "/services#mca" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <h3 className="font-serif font-semibold text-2xl text-foreground mb-4">
              Regroup Partners
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Business Restructuring & Financial Advisory
            </p>
            <p className="text-sm text-foreground/60 mt-4">
              21+ Years Experience
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
    </footer>
  );
}