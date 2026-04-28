import TermsClient from "./TermsClient";

export const metadata = {
  title: "Terms & Conditions | AI1team",
  description:
    "Read the Terms and Conditions for AI1team. Understand the rules, responsibilities, and legal agreements governing our AI automation services.",
  keywords: [
    "AI1team Terms",
    "Terms and Conditions",
    "AI Agency Legal",
    "Service Agreement",
    "AI Automation Terms",
  ],
  openGraph: {
    title: "Terms & Conditions | AI1team",
    description:
      "Read the Terms and Conditions for AI1team. Understand the rules, responsibilities, and legal agreements governing our AI automation services.",
    url: "https://ai1team.com/terms",
    siteName: "AI1team",
    type: "website",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
