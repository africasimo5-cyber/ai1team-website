import PrivacyClient from "./PrivacyClient";

export const metadata = {
  title: "Privacy Policy | AI1team",
  description:
    "Read the AI1team Privacy Policy. Learn how we collect, use, and protect your personal data in accordance with GDPR and applicable privacy laws.",
  keywords: [
    "AI1team Privacy Policy",
    "Data Protection",
    "GDPR",
    "Personal Data",
    "AI Agency Privacy",
  ],
  openGraph: {
    title: "Privacy Policy | AI1team",
    description:
      "Read the AI1team Privacy Policy. Learn how we collect, use, and protect your personal data in accordance with GDPR and applicable privacy laws.",
    url: "https://ai1team.com/privacy",
    siteName: "AI1team",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
