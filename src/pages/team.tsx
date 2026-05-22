import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TeamPage() {
  return (
    <>
      <SEO
        title="Our Team - Regroup Partners"
        description="Meet the experienced leadership team at Regroup Partners. Women-owned and operated with 21+ years of business restructuring expertise."
        url="https://regrouppartners.com/team"
      />

      <Navigation />

      <Hero
        title="Our Team"
        subtitle="Experienced leadership delivering institutional-grade restructuring advisory and creditor coordination services."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team" }
        ]}
        backgroundImage="/generated/about-team-advisory.png"
      />

      <main>
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-3xl mb-20">
              <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <span className="text-sm font-semibold text-accent">Leadership</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Experience That Delivers Results
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our leadership team brings over two decades of hands-on experience in business restructuring, 
                financial advisory, and creditor coordination. We combine institutional-grade expertise with 
                boutique-level personal attention to deliver measurable outcomes for businesses facing financial complexity.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden border border-gray-200 bg-white">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative">
                    <div className="aspect-[3/4] md:aspect-auto md:h-full relative overflow-hidden">
                      <img
                        src="/claudia-stefano.jpg"
                        alt="Claudia Stefano - Chief Strategy Officer"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-3 p-10 md:p-16 flex flex-col justify-center">
                    <div className="mb-6">
                      <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
                        Leadership
                      </Badge>
                      <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-2 text-foreground">
                        Claudia Stefano
                      </h3>
                      <p className="text-xl text-accent font-semibold mb-6">
                        Chief Strategy Officer
                      </p>
                    </div>

                    <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
                      <p>
                        Claudia Stefano brings over 21 years of experience in business restructuring and financial advisory, 
                        specializing in creditor coordination and merchant cash advance (MCA) portfolio management. As Chief 
                        Strategy Officer, she leads Regroup Partners' strategic initiatives and oversees complex restructuring 
                        engagements for businesses facing financial challenges.
                      </p>
                      <p>
                        Throughout her career, Claudia has successfully coordinated with major financial institutions, 
                        alternative lenders, and legal counsel to develop practical solutions that preserve business value 
                        while addressing creditor concerns. Her expertise in MCA advisory has helped numerous business owners 
                        navigate the complexities of alternative financing and develop sustainable cash flow strategies.
                      </p>
                      <p>
                        Known for her hands-on approach and ability to build consensus among diverse stakeholder groups, 
                        Claudia has established Regroup Partners as a trusted intermediary between business owners, lenders, 
                        and restructuring professionals. Her commitment to transparency and practical problem-solving has 
                        earned the firm strong relationships across the financial services industry.
                      </p>
                    </div>

                    <div className="space-y-4 border-t border-gray-200 pt-8">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wider mb-3">
                          Areas of Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                            Business Restructuring
                          </Badge>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                            Creditor Coordination
                          </Badge>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                            MCA Advisory
                          </Badge>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                            Cash Flow Management
                          </Badge>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                            Financial Strategy
                          </Badge>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                            Lender Relations
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wider mb-3">
                          Professional Recognition
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>21+ years in business restructuring and financial advisory</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>Women-owned business leader and entrepreneur</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>Trusted advisor to financial institutions and alternative lenders</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-8">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Mail className="h-4 w-4" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <span className="text-sm font-semibold text-accent">Our Team</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Senior Advisory Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our experienced professionals bring deep expertise across restructuring, finance, operations, and client relations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                  <img
                    src="/generated/team-member-1.png"
                    alt="Michael Harrison"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">
                    Michael Harrison
                  </h3>
                  <p className="text-accent font-semibold mb-3">
                    Senior Financial Advisor
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    15+ years in corporate finance and distressed debt advisory. Specializes in complex creditor negotiations and debt restructuring strategies for middle-market businesses.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                  <img
                    src="/generated/team-member-2.png"
                    alt="Jennifer Martinez"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">
                    Jennifer Martinez
                  </h3>
                  <p className="text-accent font-semibold mb-3">
                    Senior Restructuring Advisor
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    12+ years guiding businesses through operational and financial turnarounds. Expert in stakeholder management and developing sustainable restructuring plans.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                  <img
                    src="/generated/team-member-3.png"
                    alt="David Chen"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">
                    David Chen
                  </h3>
                  <p className="text-accent font-semibold mb-3">
                    Financial Analysis Director
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    10+ years in financial modeling and cash flow analysis. Develops data-driven strategies for businesses facing liquidity challenges and alternative lending complexities.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                  <img
                    src="/generated/team-member-4.png"
                    alt="Patricia Williams"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">
                    Patricia Williams
                  </h3>
                  <p className="text-accent font-semibold mb-3">
                    Operations Director
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    14+ years optimizing business operations during restructuring engagements. Focuses on operational efficiency, vendor management, and cost reduction strategies.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                  <img
                    src="/generated/team-member-5.png"
                    alt="Robert Sullivan"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">
                    Robert Sullivan
                  </h3>
                  <p className="text-accent font-semibold mb-3">
                    Senior Business Consultant
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    13+ years advising businesses through financial transitions. Specializes in lender coordination, MCA portfolio management, and strategic business planning.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                  <img
                    src="/generated/team-member-6.png"
                    alt="Amanda Foster"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">
                    Amanda Foster
                  </h3>
                  <p className="text-accent font-semibold mb-3">
                    Client Relations Manager
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    9+ years managing client relationships and coordinating between business owners, creditors, and legal counsel. Ensures seamless communication throughout restructuring engagements.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden border-0 shadow-2xl bg-white">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-10 md:p-14 bg-[#000000] text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="relative z-10">
                      <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                        Confidential Business Review
                      </h2>
                      <p className="text-xl text-accent font-medium mb-6">
                        Submit your situation before pressure escalates.
                      </p>
                      <p className="text-gray-300 mb-10 leading-relaxed">
                        If your business is facing MCA debits, UCC lien activity, creditor threats, lawsuits, or judgment risk, Regroup Partners can review the situation and determine whether our firm is the right fit.
                      </p>
                      
                      <div className="mt-8 p-5 bg-white/5 rounded-sm border border-white/10">
                        <p className="text-xs text-gray-400 leading-relaxed">
                          <strong className="text-white font-semibold">Disclaimer:</strong> Regroup Partners is not a law firm and does not provide legal advice. Services are business advisory and restructuring services for business obligations, not consumer debt.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-10 md:p-14 bg-white">
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                        <Input id="name" placeholder="Full Name" className="bg-gray-50" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="businessName" className="text-gray-700 font-medium">Business Name</Label>
                        <Input id="businessName" placeholder="Company Name" className="bg-gray-50" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                          <Input id="email" type="email" placeholder="email@example.com" className="bg-gray-50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="(555) 000-0000" className="bg-gray-50" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="obligations" className="text-gray-700 font-medium">Number of MCA / Business Obligations</Label>
                        <Input id="obligations" type="text" placeholder="e.g. 3 MCAs, 1 Vendor" className="bg-gray-50" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-gray-700 font-medium">Brief Description of Situation</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Please briefly describe your current challenges..."
                          className="min-h-[100px] resize-y bg-gray-50"
                        />
                      </div>
                      
                      <Button className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-base font-medium mt-2">
                        Submit Review Request
                      </Button>
                    </form>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}