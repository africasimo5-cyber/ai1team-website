import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "AI Automation Services | AI1team",
  description: "Explore our AI automation services, including CRM setup, lead generation, workflow automation, AI chatbots, and custom integrations.",
  keywords: ["AI Services", "Automation Services", "CRM Setup", "Workflow Automation", "AI Chatbots", "GoHighLevel Agency"],
  openGraph: {
    title: "AI Automation Services | AI1team",
    description: "Explore our AI automation services, including CRM setup, lead generation, workflow automation, AI chatbots, and custom integrations.",
    url: "https://ai1team.com/services",
    siteName: "AI1team",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
