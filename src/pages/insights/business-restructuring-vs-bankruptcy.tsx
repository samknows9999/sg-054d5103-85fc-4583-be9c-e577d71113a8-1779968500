import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  User, 
  Calendar,
  ArrowRight,
  AlertTriangle,
  TrendingUp,
  Shield,
  FileText
} from "lucide-react";

export default function BusinessRestructuringVsBankruptcy() {
  const publishDate = "June 9, 2026";
  const readingTime = "15 min read";

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <SEO 
        title="Business Restructuring vs Bankruptcy: The Complete 2026 Guide for Business Owners" 
        description="Compare business restructuring and bankruptcy, understand key differences, evaluate risks and benefits, and learn how businesses can stabilize operations before considering bankruptcy."
      />

      <Head>
        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Business Restructuring vs Bankruptcy: The Complete 2026 Guide for Business Owners",
              "author": {
                "@type": "Person",
                "name": "Claudia Stefano-Maicon",
                "jobTitle": "Founder & CEO",
                "worksFor": {
                  "@type": "Organization",
                  "name": "REgroup Partners"
                }
              },
              "publisher": {
                "@type": "Organization",
                "name": "REgroup Partners",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://regrouppartners.com/Logo_Regroup.png"
                }
              },
              "datePublished": "2026-06-09",
              "dateModified": "2026-06-09",
              "description": "Compare business restructuring and bankruptcy, understand key differences, evaluate risks and benefits, and learn how businesses can stabilize operations before considering bankruptcy.",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://regrouppartners.com/insights/business-restructuring-vs-bankruptcy"
              }
            })
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is restructuring better than bankruptcy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Business restructuring is often the better solution when a business has viable operations but is experiencing temporary financial pressure. Restructuring preserves business operations, maintains vendor relationships, protects reputation, and costs significantly less than bankruptcy. However, bankruptcy may be necessary when debts are overwhelming and restructuring cannot provide sufficient relief."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can MCA debt be restructured?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Merchant Cash Advance debt can often be restructured through professional coordination with MCA providers. This typically involves negotiating reduced payment amounts, extending repayment terms, consolidating multiple advances, and developing a sustainable repayment plan that aligns with actual cash flow."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can creditors stop collections during restructuring?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While restructuring does not provide automatic legal protection like bankruptcy, professional creditor coordination can often result in temporary collection pauses as creditors evaluate restructuring proposals. Many creditors prefer working with businesses that demonstrate commitment to repayment rather than pursuing aggressive collection tactics."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does a restructuring advisor do?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A restructuring advisor analyzes the business's financial situation, develops comprehensive recovery plans, coordinates with creditors, negotiates payment terms, manages cash flow strategies, provides ongoing financial guidance, and helps businesses implement operational improvements to restore profitability and stability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does business restructuring take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Business restructuring timelines vary based on complexity, but most restructuring plans are developed within 2-4 weeks, with implementation occurring over 3-12 months. This is significantly faster than bankruptcy proceedings, which typically take 12-18 months or longer for Chapter 11 reorganization."
                  }
                }
              ]
            })
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  "name": "Insights",
                  "item": "https://regrouppartners.com/insights"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Business Restructuring vs Bankruptcy",
                  "item": "https://regrouppartners.com/insights/business-restructuring-vs-bankruptcy"
                }
              ]
            })
          }}
        />
      </Head>

      <Navigation alwaysVisible={true} />

      <main className="pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-[900px] mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-primary transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-foreground">Business Restructuring vs Bankruptcy</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-[900px] mx-auto px-6 mb-16">
          <Badge variant="secondary" className="mb-4">Definitive Guide</Badge>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Business Restructuring vs Bankruptcy
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Understanding your options when financial pressure threatens the future of your business.
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Claudia Stefano-Maicon</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readingTime}</span>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="max-w-[900px] mx-auto px-6 mb-16">
          <Card className="p-6 bg-gray-50 border-gray-200">
            <h2 className="font-serif text-xl font-semibold mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              <a href="#why-businesses-reach-crossroads" className="block text-primary hover:underline">1. Why Businesses Reach a Financial Crossroads</a>
              <a href="#what-is-restructuring" className="block text-primary hover:underline">2. What Is Business Restructuring?</a>
              <a href="#what-is-bankruptcy" className="block text-primary hover:underline">3. What Is Bankruptcy?</a>
              <a href="#comparison" className="block text-primary hover:underline">4. Business Restructuring vs Bankruptcy: Key Differences</a>
              <a href="#when-restructuring-better" className="block text-primary hover:underline">5. When Business Restructuring Is Often the Better Solution</a>
              <a href="#when-bankruptcy-necessary" className="block text-primary hover:underline">6. When Bankruptcy May Be Necessary</a>
              <a href="#warning-signs" className="block text-primary hover:underline">7. Common Warning Signs Your Business Needs Restructuring</a>
              <a href="#case-study" className="block text-primary hover:underline">8. Real Business Recovery Scenario</a>
              <a href="#how-regroup-helps" className="block text-primary hover:underline">9. How REgroup Partners Helps Businesses Navigate Financial Pressure</a>
              <a href="#faq" className="block text-primary hover:underline">10. Frequently Asked Questions</a>
              <a href="#related-resources" className="block text-primary hover:underline">11. Related Resources</a>
            </nav>
          </Card>
        </section>

        {/* Section 1 */}
        <section id="why-businesses-reach-crossroads" className="max-w-[900px] mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Businesses Reach a Financial Crossroads
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Every business faces financial challenges, but when cash flow problems become persistent and creditor pressure intensifies, owners must evaluate their options carefully. Understanding the distinction between temporary financial strain and structural insolvency is critical to choosing the right path forward.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              According to recent business failure data, more than 60% of small business closures cite cash flow problems as a contributing factor. However, many of these businesses had viable operations and could have survived with proper financial restructuring rather than liquidation.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
              Common Financial Pressure Points
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <AlertTriangle className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold text-lg mb-2">Cash Flow Problems</h4>
                <p className="text-gray-600">
                  Revenue fluctuations, seasonal variations, delayed receivables, and unexpected expenses create liquidity gaps that strain operations.
                </p>
              </Card>

              <Card className="p-6">
                <FileText className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold text-lg mb-2">MCA Pressure</h4>
                <p className="text-gray-600">
                  Multiple Merchant Cash Advances with aggressive daily deductions can quickly overwhelm business cash flow, creating a debt spiral.
                </p>
              </Card>

              <Card className="p-6">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold text-lg mb-2">Vendor Debt Accumulation</h4>
                <p className="text-gray-600">
                  Delayed supplier payments damage relationships, threaten supply chain continuity, and can result in COD terms or service termination.
                </p>
              </Card>

              <Card className="p-6">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold text-lg mb-2">Economic Downturns</h4>
                <p className="text-gray-600">
                  Market contractions, industry disruption, regulatory changes, and competitive pressure reduce revenue while fixed costs remain constant.
                </p>
              </Card>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Additionally, rapid growth can paradoxically create financial strain. Expansion requires working capital for inventory, equipment, and staffing before new revenue materializes. Businesses that grow faster than their cash flow can support often find themselves in unexpected financial distress despite strong underlying operations.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="what-is-restructuring" className="max-w-[900px] mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Is Business Restructuring?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Business restructuring is a comprehensive process of reorganizing a company's financial obligations, operational structure, and strategic direction to restore profitability and long-term viability. Unlike bankruptcy, restructuring focuses on preserving the business while addressing underlying financial challenges through negotiation, coordination, and strategic planning.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
              Core Components of Business Restructuring
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Financial Restructuring</h4>
                  <p className="text-gray-600">
                    Renegotiating payment terms with creditors, consolidating debt obligations, restructuring <Link href="/mca-advisory" className="text-primary hover:underline">Merchant Cash Advances</Link>, and developing sustainable repayment plans that align with actual cash flow capacity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Operational Restructuring</h4>
                  <p className="text-gray-600">
                    Identifying cost reduction opportunities, improving operational efficiency, streamlining processes, optimizing resource allocation, and eliminating unprofitable activities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Creditor Coordination</h4>
                  <p className="text-gray-600">
                    Professional <Link href="/creditor-coordination" className="text-primary hover:underline">creditor coordination</Link> involves communicating transparently with all stakeholders, presenting viable recovery plans, negotiating payment modifications, and building consensus among competing interests.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Cash Flow Management</h4>
                  <p className="text-gray-600">
                    Implementing <Link href="/cash-flow-improvement" className="text-primary hover:underline">cash flow improvement</Link> strategies including accelerated collections, payment prioritization, working capital optimization, and short-term liquidity solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Strategic Planning</h4>
                  <p className="text-gray-600">
                    Developing long-term business plans that address root causes of financial distress, establish realistic growth targets, and create sustainable competitive advantages.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The primary goal of <Link href="/business-restructuring" className="text-primary hover:underline">business restructuring</Link> is to preserve business value while satisfying creditor claims to the greatest extent possible. This approach recognizes that a functioning business typically provides better outcomes for all stakeholders than liquidation.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="what-is-bankruptcy" className="max-w-[900px] mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Is Bankruptcy?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Bankruptcy is a legal proceeding overseen by federal courts that provides businesses with protection from creditors while debts are either reorganized or eliminated. While bankruptcy offers powerful legal protections, it comes with significant costs, public disclosure requirements, and operational constraints that many businesses find challenging.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
              Chapter 7 Bankruptcy: Business Liquidation
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Chapter 7 bankruptcy results in complete business liquidation. A court-appointed trustee takes control of business assets, sells them to pay creditors, and the business ceases operations permanently. This option is appropriate when a business has no realistic path to profitability and liquidation value exceeds ongoing operational value.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
              Chapter 11 Bankruptcy: Business Reorganization
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chapter 11 bankruptcy allows businesses to continue operating while reorganizing debts under court supervision. The business proposes a reorganization plan that must be approved by creditors and confirmed by the bankruptcy court. During this process, the business receives an "automatic stay" that stops most collection activities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              However, Chapter 11 is expensive, time-consuming, and complex. Legal and professional fees typically range from $50,000 to $500,000+ depending on business size and complexity. The process requires extensive financial disclosure, court appearances, creditor committees, and ongoing compliance requirements that can last 12-24 months or longer.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
              Legal Implications and Consequences
            </h3>
            <div className="bg-gray-50 border-l-4 border-primary p-6 mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Public Record:</strong> Bankruptcy filings become public record, accessible to customers, suppliers, competitors, and the media. This transparency can damage business reputation and stakeholder confidence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Credit Impact:</strong> Bankruptcy remains on business credit reports for 7-10 years, significantly restricting access to financing, vendor credit terms, and business opportunities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-0">
                <strong>Operational Control:</strong> Court oversight and creditor committee involvement can limit management's ability to make independent business decisions, enter new contracts, or pursue strategic opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 - Comparison Table */}
        <section id="comparison" className="max-w-[900px] mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Business Restructuring vs Bankruptcy: Key Differences
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Understanding the practical differences between restructuring and bankruptcy helps business owners make informed decisions about which path serves their long-term interests.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-4 text-left font-semibold">Factor</th>
                  <th className="p-4 text-left font-semibold">Business Restructuring</th>
                  <th className="p-4 text-left font-semibold">Bankruptcy (Chapter 11)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="p-4 font-semibold">Cost</td>
                  <td className="p-4 text-gray-700">$5,000-$50,000 depending on complexity</td>
                  <td className="p-4 text-gray-700">$50,000-$500,000+ in legal/professional fees</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="p-4 font-semibold">Timeline</td>
                  <td className="p-4 text-gray-700">2-4 weeks planning, 3-12 months implementation</td>
                  <td className="p-4 text-gray-700">12-24+ months court-supervised reorganization</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="p-4 font-semibold">Impact on Creditors</td>
                  <td className="p-4 text-gray-700">Voluntary cooperation, negotiated settlements</td>
                  <td className="p-4 text-gray-700">Court-imposed repayment plan, creditor voting</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="p-4 font-semibold">Operational Impact</td>
                  <td className="p-4 text-gray-700">Business continues normally with improvements</td>
                  <td className="p-4 text-gray-700">Court oversight, restricted decision-making</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="p-4 font-semibold">Reputation</td>
                  <td className="p-4 text-gray-700">Private process, confidential negotiations</td>
                  <td className="p-4 text-gray-700">Public record, potential media coverage</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="p-4 font-semibold">Flexibility</td>
                  <td className="p-4 text-gray-700">Highly adaptable to changing circumstances</td>
                  <td className="p-4 text-gray-700">Court approval required for major decisions</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="p-4 font-semibold">Ownership Control</td>
                  <td className="p-4 text-gray-700">Owner maintains full control</td>
                  <td className="p-4 text-gray-700">Creditor committee involvement, potential ownership dilution</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="p-4 font-semibold">Future Financing</td>
                  <td className="p-4 text-gray-700">Access maintained with proper execution</td>
                  <td className="p-4 text-gray-700">Severely restricted for 7-10 years</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="p-4 font-semibold">Employee Impact</td>
                  <td className="p-4 text-gray-700">Minimal disruption, continued operations</td>
                  <td className="p-4 text-gray-700">Uncertainty, potential layoffs, morale challenges</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="p-4 font-semibold">Vendor Relationships</td>
                  <td className="p-4 text-gray-700">Preserved through communication and payment plans</td>
                  <td className="p-4 text-gray-700">Damaged trust, COD requirements common</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 */}
        <section id="when-restructuring-better" className="max-w-[900px] mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            When Business Restructuring Is Often the Better Solution
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Business restructuring provides the best path forward when a company has viable core operations but faces temporary or manageable financial challenges. The following scenarios typically benefit from restructuring rather than bankruptcy:
            </p>

            <div className="space-y-6 mb-8">
              <Card className="p-6 border-l-4 border-primary">
                <h3 className="font-serif text-xl font-semibold mb-3">MCA Debt Pressure</h3>
                <p className="text-gray-700 leading-relaxed">
                  Businesses overwhelmed by multiple Merchant Cash Advances can often achieve significant relief through <Link href="/mca-advisory" className="text-primary hover:underline">professional MCA advisory services</Link>. Restructuring addresses aggressive daily deductions, negotiates consolidated repayment terms, and restores manageable cash flow without bankruptcy's severe consequences.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-primary">
                <h3 className="font-serif text-xl font-semibold mb-3">Temporary Cash Flow Shortages</h3>
                <p className="text-gray-700 leading-relaxed">
                  Seasonal businesses, companies experiencing delayed receivables, or those managing temporary revenue disruptions often need short-term payment relief rather than permanent debt elimination. Restructuring provides breathing room while preserving long-term vendor and creditor relationships.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-primary">
                <h3 className="font-serif text-xl font-semibold mb-3">Vendor Payment Disputes</h3>
                <p className="text-gray-700 leading-relaxed">
                  When supplier relationships deteriorate due to payment delays, <Link href="/creditor-coordination" className="text-primary hover:underline">creditor coordination</Link> can restore trust, negotiate payment plans, and prevent supply chain disruption that would threaten operations.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-primary">
                <h3 className="font-serif text-xl font-semibold mb-3">Revenue Decline with Solid Business Model</h3>
                <p className="text-gray-700 leading-relaxed">
                  Market downturns, competitive pressure, or operational challenges that reduce revenue don't necessarily mean the business model is fundamentally flawed. Restructuring provides time to implement improvements, reduce costs, and rebuild profitability without the stigma and expense of bankruptcy.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-primary">
                <h3 className="font-serif text-xl font-semibold mb-3">Growth-Related Debt Strain</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rapid expansion often creates temporary cash flow pressure as working capital needs exceed current resources. Restructuring aligns payment obligations with actual revenue growth patterns, allowing the business to grow into its debt rather than collapsing under it.
                </p>
              </Card>
            </div>

            <p className="text-gray-700 leading-relaxed">
              In each of these scenarios, the business has fundamental value worth preserving. Restructuring maintains operational continuity, protects reputation, preserves customer and vendor relationships, and costs dramatically less than bankruptcy proceedings.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="when-bankruptcy-necessary" className="max-w-[900px] mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            When Bankruptcy May Be Necessary
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              While restructuring offers significant advantages in many situations, bankruptcy may be the more appropriate solution when certain conditions exist:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <XCircle className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Overwhelming Debt Burden</h4>
                  <p className="text-gray-600">
                    When total debt obligations substantially exceed realistic business value and cash flow capacity, restructuring may only delay inevitable liquidation. Bankruptcy provides legal mechanisms to discharge debts that cannot be realistically repaid.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <XCircle className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Aggressive Legal Action</h4>
                  <p className="text-gray-600">
                    If creditors have already obtained judgments, filed liens, or initiated asset seizure proceedings, bankruptcy's automatic stay provides immediate protection that restructuring cannot offer.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <XCircle className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Fundamental Business Model Failure</h4>
                  <p className="text-gray-600">
                    When market conditions have permanently changed, the business model is no longer viable, or competitive dynamics make profitability impossible, restructuring cannot solve structural problems that require complete business transformation or closure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <XCircle className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Owner Exhaustion</h4>
                  <p className="text-gray-600">
                    If the business owner has lost the will or capacity to continue operations, restructuring requires sustained commitment that may not be realistic. Bankruptcy can provide a more definitive resolution.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              It's important to note that bankruptcy is not a failure—it's a legal tool designed to provide businesses with a fresh start when circumstances warrant it. However, exploring restructuring alternatives first often reveals viable paths forward that preserve more value for all stakeholders.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6">
              <p className="text-gray-700 leading-relaxed font-medium">
                Professional advisory services can help evaluate whether restructuring offers realistic prospects for recovery or whether bankruptcy represents the more practical path forward. This assessment should be made based on objective financial analysis rather than emotional attachment or fear of stigma.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 - Warning Signs */}
        <section id="warning-signs" className="max-w-[900px] mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Common Warning Signs Your Business Needs Restructuring
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Recognizing financial distress early significantly improves restructuring outcomes. The following warning signs indicate that professional restructuring services may be necessary:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Consistently falling behind on creditor payment obligations</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Increasing pressure from multiple creditors simultaneously</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Multiple overlapping Merchant Cash Advances creating cash flow strain</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Delayed vendor payments threatening supply chain continuity</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Difficulty meeting payroll obligations on time</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Shrinking profit margins despite stable or growing revenue</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Maxed credit lines with no additional financing options</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Using new debt to service existing debt obligations</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Receiving legal notices, demand letters, or judgment threats</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Loss of key customers or contracts reducing revenue</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Banking relationship deterioration or account restrictions</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Owner personal guarantees being pursued by creditors</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            If three or more of these warning signs apply to your business, professional restructuring assessment should be considered urgently. Early intervention typically provides more options and better outcomes than waiting until financial distress becomes crisis.
          </p>
        </section>

        {/* Section 8 - Case Study */}
        <section id="case-study" className="max-w-[900px] mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Real Business Recovery Scenario
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              The following case study illustrates how business restructuring can provide practical solutions to complex financial challenges without resorting to bankruptcy.
            </p>

            <Card className="p-8 border-2 border-gray-200 mb-8">
              <h3 className="font-serif text-2xl font-semibold mb-6">Service-Based Business: From Financial Crisis to Stability</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">Initial Situation</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A regional HVAC service company with $2.8M in annual revenue faced severe financial pressure from multiple sources:
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    <li className="flex gap-2"><span className="text-primary">•</span> Four overlapping Merchant Cash Advances totaling $340,000 with aggressive daily deductions consuming 28% of daily revenue</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> $180,000 in overdue vendor accounts threatening parts supply</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Seasonal cash flow fluctuations creating periodic payroll pressure</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Owner considering bankruptcy despite strong customer base and skilled workforce</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">Restructuring Actions</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    REgroup Partners implemented a comprehensive restructuring plan:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>MCA Coordination:</strong> Negotiated consolidated repayment reducing daily deductions from 28% to 12% of revenue, extending terms and eliminating two smaller advances through lump-sum settlements</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>Vendor Communication:</strong> Proactive outreach to critical suppliers, presenting restructuring plan, negotiating 90-day payment plans for past-due balances while maintaining COD for new purchases</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>Cash Flow Optimization:</strong> Implemented accelerated invoicing procedures, tightened collection processes, established seasonal cash reserves during peak months</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>Operational Improvements:</strong> Identified service efficiency opportunities, reduced fuel costs through route optimization, eliminated unprofitable service offerings</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>Financial Reporting:</strong> Established weekly cash flow monitoring, monthly creditor updates, and transparent communication protocols</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">12-Month Outcomes</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> <span>All vendor accounts returned to current status with normal payment terms restored</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> <span>MCA obligations reduced by 65% through systematic paydown and negotiated settlements</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> <span>Operating profit margins improved from 3% to 11% through efficiency gains</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> <span>Cash reserves established providing 60-day operational buffer</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> <span>Business avoided bankruptcy, preserved reputation, and maintained all customer relationships</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> <span>Total restructuring cost: $28,000 versus estimated $150,000+ for bankruptcy proceedings</span></li>
                  </ul>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    "We were weeks away from closing our doors before restructuring services provided a realistic path forward. The coordinated approach to creditors and the practical cash flow strategies made the difference between business failure and recovery." — Business Owner
                  </p>
                </div>
              </div>
            </Card>

            <p className="text-gray-700 leading-relaxed">
              This scenario demonstrates how professional <Link href="/business-restructuring" className="text-primary hover:underline">business restructuring</Link> can address multiple pressure points simultaneously, providing coordinated solutions that preserve business value while satisfying creditor interests.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section id="how-regroup-helps" className="max-w-[900px] mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            How REgroup Partners Helps Businesses Navigate Financial Pressure
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              REgroup Partners brings more than 21 years of specialized experience helping businesses evaluate restructuring options, implement recovery strategies, and restore financial stability without bankruptcy when viable alternatives exist.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-3">Business Restructuring Services</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive financial and operational restructuring designed to restore profitability while preserving business operations and stakeholder relationships.
                </p>
                <Link href="/business-restructuring" className="text-primary hover:underline flex items-center gap-1 font-medium">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>

              <Card className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-3">MCA Advisory</h3>
                <p className="text-gray-600 mb-4">
                  Specialized Merchant Cash Advance coordination and restructuring to address aggressive payment demands and restore manageable cash flow.
                </p>
                <Link href="/mca-advisory" className="text-primary hover:underline flex items-center gap-1 font-medium">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>

              <Card className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-3">Creditor Coordination</h3>
                <p className="text-gray-600 mb-4">
                  Professional creditor communication and negotiation services to manage complex debt situations and build consensus among competing interests.
                </p>
                <Link href="/creditor-coordination" className="text-primary hover:underline flex items-center gap-1 font-medium">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>

              <Card className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-3">Cash Flow Improvement</h3>
                <p className="text-gray-600 mb-4">
                  Strategic cash flow optimization to improve working capital management, accelerate collections, and establish sustainable liquidity.
                </p>
                <Link href="/cash-flow-improvement" className="text-primary hover:underline flex items-center gap-1 font-medium">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">
              Industry Recognition and Expertise
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              REgroup Partners and founder Claudia Stefano-Maicon have been recognized by leading business publications for expertise in business restructuring, financial stabilization, and creditor coordination. This industry recognition reflects a consistent track record of helping businesses navigate complex financial challenges.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <Link href="/media-mentions" className="text-primary hover:underline font-medium">View media coverage and industry recognition</Link> highlighting REgroup Partners' approach to business recovery and financial restructuring.
            </p>

            <div className="bg-gray-50 border-l-4 border-primary p-6">
              <p className="text-gray-700 leading-relaxed font-medium mb-4">
                "Our approach focuses on practical solutions rather than theoretical frameworks. Every business situation is unique, and effective restructuring requires understanding the specific operational, financial, and relationship dynamics at play."
              </p>
              <p className="text-gray-600">— Claudia Stefano-Maicon, Founder & CEO, REgroup Partners</p>
            </div>
          </div>
        </section>

        {/* Section 10 - FAQ */}
        <section id="faq" className="max-w-[900px] mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Is restructuring better than bankruptcy?</h3>
              <p className="text-gray-700 leading-relaxed">
                Business restructuring is often the better solution when a business has viable operations but is experiencing temporary financial pressure. Restructuring preserves business operations, maintains vendor relationships, protects reputation, and costs significantly less than bankruptcy. However, bankruptcy may be necessary when debts are overwhelming and restructuring cannot provide sufficient relief.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Can MCA debt be restructured?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, Merchant Cash Advance debt can often be restructured through professional coordination with MCA providers. This typically involves negotiating reduced payment amounts, extending repayment terms, consolidating multiple advances, and developing a sustainable repayment plan that aligns with actual cash flow.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Can creditors stop collections during restructuring?</h3>
              <p className="text-gray-700 leading-relaxed">
                While restructuring does not provide automatic legal protection like bankruptcy, professional creditor coordination can often result in temporary collection pauses as creditors evaluate restructuring proposals. Many creditors prefer working with businesses that demonstrate commitment to repayment rather than pursuing aggressive collection tactics.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">What does a restructuring advisor do?</h3>
              <p className="text-gray-700 leading-relaxed">
                A restructuring advisor analyzes the business's financial situation, develops comprehensive recovery plans, coordinates with creditors, negotiates payment terms, manages cash flow strategies, provides ongoing financial guidance, and helps businesses implement operational improvements to restore profitability and stability.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">How long does business restructuring take?</h3>
              <p className="text-gray-700 leading-relaxed">
                Business restructuring timelines vary based on complexity, but most restructuring plans are developed within 2-4 weeks, with implementation occurring over 3-12 months. This is significantly faster than bankruptcy proceedings, which typically take 12-18 months or longer for Chapter 11 reorganization.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Will restructuring hurt my credit?</h3>
              <p className="text-gray-700 leading-relaxed">
                Restructuring itself does not appear on credit reports. However, if restructuring involves negotiated settlements that result in partial debt forgiveness, creditors may report accounts as "settled for less than full balance," which can impact credit scores. This impact is typically far less severe and shorter-lasting than bankruptcy.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">What industries benefit most from restructuring?</h3>
              <p className="text-gray-700 leading-relaxed">
                Service-based businesses, retail operations, restaurants, healthcare providers, construction companies, and professional services firms frequently benefit from restructuring. Any business with viable operations, established customer relationships, and manageable debt levels can potentially succeed with professional restructuring assistance.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Can restructuring prevent bankruptcy?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, successful restructuring often eliminates the need for bankruptcy by addressing the underlying financial pressures that created distress. When businesses implement coordinated creditor solutions, improve cash flow management, and restore operational profitability, bankruptcy becomes unnecessary.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">What is creditor coordination?</h3>
              <p className="text-gray-700 leading-relaxed">
                Creditor coordination involves professional communication with all creditors to present a unified restructuring plan, negotiate payment modifications, build consensus among competing interests, and manage ongoing creditor relationships throughout the recovery process. This coordination prevents individual creditor actions from undermining the overall restructuring strategy.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">What happens after a restructuring plan is created?</h3>
              <p className="text-gray-700 leading-relaxed">
                After plan development, businesses implement agreed-upon payment schedules, operational improvements, and cash flow strategies. Ongoing monitoring ensures compliance with restructuring commitments, adjusts plans as circumstances change, and maintains creditor communication. Most businesses complete restructuring implementation within 6-12 months.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Do I need an attorney for business restructuring?</h3>
              <p className="text-gray-700 leading-relaxed">
                Legal counsel may be beneficial for reviewing agreements and protecting interests, but formal legal representation is not always necessary for out-of-court restructuring. Many businesses successfully restructure with the guidance of financial advisors who coordinate creditor negotiations and develop recovery strategies.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Can I restructure while still operating my business?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, business restructuring is designed to occur while operations continue normally. Unlike bankruptcy, which can disrupt daily operations and require extensive court compliance, restructuring focuses on maintaining business continuity while addressing financial challenges.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">What financial information is needed for restructuring?</h3>
              <p className="text-gray-700 leading-relaxed">
                Restructuring advisors typically require profit and loss statements, balance sheets, cash flow projections, accounts receivable/payable aging reports, debt schedules listing all creditors and terms, and bank statements. This information allows for accurate assessment of the financial situation and development of realistic recovery plans.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Will creditors accept restructuring proposals?</h3>
              <p className="text-gray-700 leading-relaxed">
                Creditors frequently accept restructuring proposals when presented with clear financial analysis, realistic repayment plans, and evidence of business viability. Most creditors prefer receiving partial payment over time rather than pursuing expensive collection litigation or receiving nothing in bankruptcy liquidation.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">How much does business restructuring cost?</h3>
              <p className="text-gray-700 leading-relaxed">
                Restructuring costs vary based on business complexity and debt levels, typically ranging from $5,000 to $50,000. This represents a fraction of bankruptcy costs, which often exceed $50,000-$500,000 for Chapter 11 proceedings. The investment in restructuring typically provides significant return through preserved business value and avoided bankruptcy expenses.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Can personal guarantees be addressed in business restructuring?</h3>
              <p className="text-gray-700 leading-relaxed">
                Personal guarantees remain legally enforceable obligations, but creditors may agree to modifications when businesses present viable restructuring plans. Some creditors release personal guarantees in exchange for lump-sum settlements or accelerated payment schedules. Each situation is unique and requires individual negotiation.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">What if restructuring doesn't work?</h3>
              <p className="text-gray-700 leading-relaxed">
                If restructuring efforts do not achieve desired results, bankruptcy remains available as an alternative. Attempting restructuring first does not eliminate future bankruptcy options. In fact, demonstrating good-faith restructuring efforts can strengthen a business's position in subsequent bankruptcy proceedings if they become necessary.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">How do I know if my business is a good candidate for restructuring?</h3>
              <p className="text-gray-700 leading-relaxed">
                Good restructuring candidates typically have viable core operations, established customer bases, revenue-generating capacity, and manageable debt levels relative to business value. A professional assessment can evaluate whether restructuring offers realistic prospects for recovery or whether alternative solutions should be considered.
              </p>
            </Card>
          </div>
        </section>

        {/* Section 11 - Related Resources */}
        <section id="related-resources" className="max-w-[900px] mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/business-restructuring" className="block p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all">
              <h3 className="font-serif text-xl font-semibold mb-2">Business Restructuring Services</h3>
              <p className="text-gray-600 mb-3">Comprehensive restructuring solutions for businesses facing financial challenges</p>
              <span className="text-primary font-medium flex items-center gap-1">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/mca-advisory" className="block p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all">
              <h3 className="font-serif text-xl font-semibold mb-2">MCA Advisory</h3>
              <p className="text-gray-600 mb-3">Specialized Merchant Cash Advance restructuring and coordination services</p>
              <span className="text-primary font-medium flex items-center gap-1">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/creditor-coordination" className="block p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all">
              <h3 className="font-serif text-xl font-semibold mb-2">Creditor Coordination</h3>
              <p className="text-gray-600 mb-3">Professional creditor communication and negotiation services</p>
              <span className="text-primary font-medium flex items-center gap-1">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/cash-flow-improvement" className="block p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all">
              <h3 className="font-serif text-xl font-semibold mb-2">Cash Flow Improvement</h3>
              <p className="text-gray-600 mb-3">Strategic solutions to optimize working capital and business liquidity</p>
              <span className="text-primary font-medium flex items-center gap-1">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/media-mentions" className="block p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all">
              <h3 className="font-serif text-xl font-semibold mb-2">Media Mentions</h3>
              <p className="text-gray-600 mb-3">Industry recognition of REgroup Partners' restructuring expertise</p>
              <span className="text-primary font-medium flex items-center gap-1">
                View Coverage <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/contact" className="block p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all">
              <h3 className="font-serif text-xl font-semibold mb-2">Schedule a Consultation</h3>
              <p className="text-gray-600 mb-3">Discuss your business situation with REgroup Partners</p>
              <span className="text-primary font-medium flex items-center gap-1">
                Contact Us <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-[900px] mx-auto px-6">
          <Card className="bg-gray-900 text-white p-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Need Help Evaluating Your Options?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Every business situation is unique. REgroup Partners helps companies evaluate restructuring alternatives, improve financial stability, and develop practical recovery strategies before considering bankruptcy.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                Schedule a Consultation
              </Button>
            </Link>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}