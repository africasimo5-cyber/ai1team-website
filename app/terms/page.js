import TermsClient from "./TermsClient";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms and Conditions for AI1team. Understand the rules, responsibilities, and legal agreements governing our AI automation services.",
  keywords: [
    "AI1team terms",
    "terms and conditions",
    "AI agency legal",
    "service agreement",
    "AI automation terms",
  ],
  alternates: {
    canonical: "https://ai1team.com/terms",
  },
  openGraph: {
    type: "website",
    url: "https://ai1team.com/terms",
    title: "Terms & Conditions | AI1team",
    description:
      "Read the legal terms governing AI1team's AI automation services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI1team Terms & Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | AI1team",
    description: "Read the legal terms governing AI1team's services.",
    images: ["/og-image.png"],
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
