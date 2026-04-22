import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | AI1team",
  description: "Get in touch with AI1team for expert AI automation solutions. We're here to help you scale your business with intelligent workflows and data-driven strategies.",
  keywords: ["Contact AI1team", "AI Automation Inquiry", "GHL CRM Setup", "AI Agency Contact", "Business Growth Consultation"],
  openGraph: {
    title: "Contact Us | AI1team",
    description: "Get in touch with AI1team for expert AI automation solutions. We're here to help you scale your business with intelligent workflows and data-driven strategies.",
    url: "https://ai1team.com/contact",
    siteName: "AI1team",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
