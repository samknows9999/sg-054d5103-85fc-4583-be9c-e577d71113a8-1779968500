import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Building Relationships That Matter
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                At Regroup Partners, our success is measured by the long-term relationships we build with business 
                owners, lenders, and professional advisors. Our team's hands-on approach and proven track record 
                make us a trusted partner for businesses navigating financial complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
              <Card className="p-8 bg-white border border-gray-200">
                <div className="text-4xl font-serif font-bold text-accent mb-2">21+</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Years</div>
                <p className="text-gray-600 leading-relaxed">
                  Of proven experience in business restructuring and financial advisory services
                </p>
              </Card>

              <Card className="p-8 bg-white border border-gray-200">
                <div className="text-4xl font-serif font-bold text-accent mb-2">100%</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Women-Owned</div>
                <p className="text-gray-600 leading-relaxed">
                  Women-owned and operated firm committed to excellence and professional integrity
                </p>
              </Card>

              <Card className="p-8 bg-white border border-gray-200">
                <div className="text-4xl font-serif font-bold text-accent mb-2">∞</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Relationships</div>
                <p className="text-gray-600 leading-relaxed">
                  Established network across lenders, attorneys, and restructuring professionals
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Ready to Discuss Your Situation?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Schedule a confidential business review with our team to explore how we can help 
                navigate your financial challenges.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
                Schedule a Confidential Review
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}