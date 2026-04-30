import ServicesClient from "./ServicesClient";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "AI Automation Services",
  description:
    "Explore AI1team's full suite of automation services — CRM setup, lead generation, AI chatbots, workflow automation, and custom integrations powered by GoHighLevel, Make.com, n8n, and Zapier.",
  keywords: [
    "AI automation services",
    "CRM setup",
    "workflow automation",
    "AI chatbot development",
    "GoHighLevel agency",
    "Make.com automation",
    "lead generation automation",
    "business process automation",
  ],
  alternates: {
    canonical: "https://ai1team.com/services",
  },
  openGraph: {
    type: "website",
    url: "https://ai1team.com/services",
    title: "AI Automation Services | AI1team",
    description:
      "CRM setup, lead generation, AI chatbots, and workflow automation — powered by GoHighLevel, Make.com, n8n, and Zapier.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Automation Services — AI1team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services | AI1team",
    description:
      "CRM setup, lead generation, AI chatbots, and workflow automation.",
    images: ["/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AI1team — AI Automation Agency",
  url: "https://ai1team.com/services",
  image: "https://ai1team.com/og-image.png",
  description:
    "Custom AI automation systems including CRM setup, lead generation, workflow automation, AI chatbots, and integrations powered by GoHighLevel, Make.com, n8n, Zapier, and OpenAI.",
  provider: {
    "@type": "Organization",
    name: "AI1team",
    url: "https://ai1team.com",
  },
  serviceType: [
    "AI Automation",
    "CRM Setup",
    "Lead Generation",
    "Workflow Automation",
    "AI Chatbot Development",
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Automation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CRM Setup & Automation",
          description:
            "Full GoHighLevel CRM setup, pipeline configuration, and automated follow-up sequences.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lead Generation Automation",
          description:
            "Automated lead capture, qualification, and nurture flows that work 24/7.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbot Development",
          description:
            "Custom AI chatbots powered by OpenAI and Claude for sales, support, and qualification.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workflow Automation",
          description:
            "End-to-end workflow automation using Make.com, n8n, and Zapier to eliminate manual tasks.",
        },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ServicesClient />
    </>
  );
}
