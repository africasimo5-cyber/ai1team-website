import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import StatsSection from "@/components/StatsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesPreview from "@/components/ServicesPreview";
import AuditSection from "@/components/AuditSection";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: {
    absolute: "AI1team | AI Automation Agency for Ambitious Brands",
  },
  description:
    "AI1team builds custom AI automation systems that save 20+ hours/week, capture every lead, and run your business 24/7 on autopilot. Powered by Make.com, n8n, GoHighLevel & OpenAI.",
  keywords: [
    "AI automation agency",
    "workflow automation",
    "lead generation automation",
    "CRM automation",
    "GoHighLevel agency",
    "Make.com expert",
    "n8n automation",
    "business automation service",
  ],
  alternates: {
    canonical: "https://ai1team.com",
  },
  openGraph: {
    type: "website",
    url: "https://ai1team.com",
    title: "AI1team | AI Automation Agency for Ambitious Brands",
    description:
      "We automate your entire business operation — more leads, more clients, more time back. All on autopilot.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI1team — AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI1team | AI Automation Agency for Ambitious Brands",
    description:
      "Custom AI automation systems for ambitious brands. Save 20+ hours/week.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to set up automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most systems go live within 2–4 weeks depending on complexity. Simple automations (lead capture, follow-ups) can be running in days. We'll give you a clear timeline after the initial audit.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need any technical knowledge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "None at all. We handle everything — from design and build to testing and launch. You just tell us how your business works and what you want to stop doing manually.",
      },
    },
    {
      "@type": "Question",
      name: "What tools and platforms do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily work with GoHighLevel, Make.com, Zapier, n8n, OpenAI, and Claude AI — chosen based on what fits your business best. All tools are industry-leading with proven reliability.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with a paid audit ($97–$397) so you know exactly what needs automating and what the ROI looks like before committing to a full build. No surprise costs — everything is scoped upfront.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if something breaks after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We monitor all live systems and respond fast to any issues. Deep Audit clients get first-month priority support included. We also document everything so your team can understand what's running.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with the tools I already use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We connect with 500+ apps including CRMs, email platforms, Slack, Google Workspace, Shopify, and more. If it has an API or Zapier/Make integration, we can work with it.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <HeroSection />
      <LogoMarquee />
      <StatsSection />
      <BenefitsSection />
      <ServicesPreview />
      <AuditSection />
      <HowItWorks />
      <WhyUs />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
