import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Target,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  BarChart3,
  FileText,
  Scale,
  ChevronRight,
  Check,
  Loader2
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";

export default function BusinessRestructuring() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      <SEO 
        title="Business Restructuring Services | Turnaround & Recovery Solutions"
        description="Comprehensive business restructuring solutions for companies facing financial challenges. Expert turnaround strategies, debt negotiation, and operational recovery services."
        url="/business-restructuring"
      />
    </>
  );

}