import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Award, Users as UsersIcon, TrendingUp, Linkedin, Mail, Phone, Briefcase, Target, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";

export default function TeamPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const emailBody = `
New Website Lead - Team Page

Name: ${formData.get("name")}
Business Name: ${formData.get("businessName")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Number of Obligations: ${formData.get("obligations")}
Description: ${formData.get("description")}

Page URL: ${window.location.href}
Date & Time: ${new Date().toLocaleString()}
    `.trim();
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "New Website Lead - Team Page",
          message: emailBody,
          from: formData.get("email") as string,
          customerName: formData.get("name") as string
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setShowSuccess(false), 8000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your request. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Meet Our Team | Business Restructuring & Financial Advisory Experts"
        description="Experienced business restructuring professionals with 21+ years of expertise. Meet the team behind successful turnarounds and financial recovery solutions."
        url="/team"
      />
      

      <Navigation />

      <Hero
        title="Our Team"
        subtitle="Experienced leadership delivering institutional-grade restructuring advisory and creditor coordination services."
        breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Our Team" }]
        }
        backgroundImage="/generated/about-team-advisory.png" />
      

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
                        className="absolute inset-0 w-full h-full object-cover" />
                      
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
                    className="absolute inset-0 w-full h-full object-cover" />
                  
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
                    className="absolute inset-0 w-full h-full object-cover" />
                  
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">Carolyn Wade

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
                    className="absolute inset-0 w-full h-full object-cover" />
                  
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">William McCoy

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
                    className="absolute inset-0 w-full h-full object-cover" />
                  
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">Patricia Conolly

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
                    className="absolute inset-0 w-full h-full object-cover" />
                  
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
                    className="absolute inset-0 w-full h-full object-cover" />
                  
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">Laura Kaiser

                  </h3>
                  <p className="text-accent font-semibold mb-3">Business Analyst

                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    9+ years managing client relationships and coordinating between business owners, creditors, and legal counsel. Ensures seamless communication throughout restructuring engagements.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#050505] relative overflow-hidden py-20 md:py-32 border-t border-white/10">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-0 left-[20%] w-[40%] h-[40%] bg-accent/10 blur-[150px] rounded-full"></div>
          </div>
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
              <div className="flex flex-col justify-center text-left">
                <div className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-full mb-8 w-fit">
                  <span className="text-sm font-medium text-accent">Confidential & Secure</span>
                </div>
                
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white leading-[1.1]">
                  Confidential Business Review
                </h2>
                <p className="text-2xl text-accent font-medium mb-8">
                  Submit your situation before pressure escalates.
                </p>
                <p className="text-gray-400 mb-12 leading-relaxed text-lg max-w-xl">
                  If your business is facing MCA debits, UCC lien activity, creditor threats, lawsuits, or judgment risk, Regroup Partners can review the situation and determine whether our firm is the right fit.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 bg-white/[0.03] rounded-2xl border border-white/5 mb-10 w-full max-w-xl transition-colors hover:bg-white/[0.05]">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wider">Speak with an advisor immediately</p>
                    <a href="tel:+19543541800" className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors">
                      <Phone className="w-4 h-4" />
                      Call (954) 354-1800
                    </a>
                  </div>
                </div>

                <div className="p-5 border-l-2 border-accent/50 bg-accent/5 max-w-xl">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    <strong className="text-white font-medium">Disclaimer:</strong> Regroup Partners is not a law firm and does not provide legal advice. Services are business advisory and restructuring services for business obligations, not consumer debt.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative">
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  {showSuccess && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <h3 className="font-semibold text-green-900 mb-1">Thank you for contacting REgroup Partners.</h3>
                          <p className="text-sm text-green-800">A member of our team will reach out shortly.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2.5 text-left">
                    <Label htmlFor="name" className="text-gray-900 font-semibold text-sm">Name</Label>
                    <Input id="name" name="name" placeholder="Full Name" required className="bg-gray-50/50 h-14 rounded-xl border-gray-200 focus-visible:ring-accent focus-visible:border-accent text-base px-4" />
                  </div>
                  
                  <div className="space-y-2.5 text-left">
                    <Label htmlFor="businessName" className="text-gray-900 font-semibold text-sm">Business Name</Label>
                    <Input id="businessName" name="businessName" placeholder="Company Name" required className="bg-gray-50/50 h-14 rounded-xl border-gray-200 focus-visible:ring-accent focus-visible:border-accent text-base px-4" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2.5 text-left">
                      <Label htmlFor="email" className="text-gray-900 font-semibold text-sm">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="email@example.com" required className="bg-gray-50/50 h-14 rounded-xl border-gray-200 focus-visible:ring-accent focus-visible:border-accent text-base px-4" />
                    </div>
                    <div className="space-y-2.5 text-left">
                      <Label htmlFor="phone" className="text-gray-900 font-semibold text-sm">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required className="bg-gray-50/50 h-14 rounded-xl border-gray-200 focus-visible:ring-accent focus-visible:border-accent text-base px-4" />
                    </div>
                  </div>
                  
                  <div className="space-y-2.5 text-left">
                    <Label htmlFor="obligations" className="text-gray-900 font-semibold text-sm">Number of MCA / Business Obligations</Label>
                    <Input id="obligations" name="obligations" type="text" placeholder="e.g. 3 MCAs, 1 Vendor" className="bg-gray-50/50 h-14 rounded-xl border-gray-200 focus-visible:ring-accent focus-visible:border-accent text-base px-4" />
                  </div>
                  
                  <div className="space-y-2.5 text-left">
                    <Label htmlFor="description" className="text-gray-900 font-semibold text-sm">Brief Description of Situation</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Please briefly describe your current challenges..."
                      className="min-h-[140px] resize-y bg-gray-50/50 rounded-xl border-gray-200 p-4 focus-visible:ring-accent focus-visible:border-accent text-base" />
                    
                  </div>
                  
                  <Button disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-white h-16 rounded-xl text-lg font-semibold mt-4 shadow-lg shadow-accent/20 transition-all hover:shadow-accent/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      "Submit Review Request"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>);

}