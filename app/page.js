import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesPreview from "@/components/ServicesPreview";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import CTABanner from "@/components/CTABanner";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "AI1team | AI Automation Agency for Ambitious Brands",
  description: "Scale your business with AI1team. We provide cutting-edge AI automation solutions, including lead generation, CRM setup, and intelligent workflows to drive growth.",
  keywords: ["AI Automation", "AI Automation Agency", "Workflow Automation", "Lead Generation AI", "CRM Automation", "Business AI Solutions"],
  openGraph: {
    title: "AI1team | AI Automation Agency",
    description: "AI-driven automation solutions that help ambitious brands grow smarter and faster.",
    url: "https://ai1team.com",
    siteName: "AI1team",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <ServicesPreview />
      <HowItWorks />
      <WhyUs />
      <CTABanner />
      <TestimonialsSection />
    </>
  );
}
