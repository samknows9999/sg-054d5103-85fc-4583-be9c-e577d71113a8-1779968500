import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-black mb-4 uppercase tracking-tight">
              Regroup Partners
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional business restructuring and financial advisory services with 21+ years of experience. Women-owned and operated.
            </p>
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <span className="text-sm font-bold text-blue-400 uppercase tracking-wide font-display">21+ Years Experience</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4 uppercase tracking-wide text-sm">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Business Restructuring
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Creditor Coordination
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cash Flow Improvement
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  MCA Advisory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4 uppercase tracking-wide text-sm">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Regroup Partners. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}