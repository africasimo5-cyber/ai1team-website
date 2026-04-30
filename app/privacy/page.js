import PrivacyClient from "./PrivacyClient";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the AI1team Privacy Policy. Learn how we collect, use, and protect your personal data in accordance with GDPR and applicable privacy laws.",
  keywords: [
    "AI1team privacy policy",
    "data protection",
    "GDPR",
    "personal data",
    "AI agency privacy",
  ],
  alternates: {
    canonical: "https://ai1team.com/privacy",
  },
  openGraph: {
    type: "website",
    url: "https://ai1team.com/privacy",
    title: "Privacy Policy | AI1team",
    description:
      "Learn how AI1team collects, uses, and protects your personal data.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI1team Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | AI1team",
    description: "Learn how AI1team collects, uses, and protects your data.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
