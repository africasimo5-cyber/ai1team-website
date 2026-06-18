export const dynamic = "force-static";

import ContactClient from "./ContactClient";

export const metadata = {
  title: "Get a Free Discovery Call",
  description:
    "Book a free discovery call with AI1team. Tell us how your business works and we'll map out exactly what to automate — no tech knowledge required.",
  keywords: [
    "book AI automation call",
    "AI1team contact",
    "free automation audit",
    "GoHighLevel setup consultation",
    "business automation discovery call",
  ],
  alternates: {
    canonical: "https://ai1team.com/contact",
  },
  openGraph: {
    type: "website",
    url: "https://ai1team.com/contact",
    title: "Get a Free Discovery Call | AI1team",
    description:
      "Book a free discovery call and find out exactly how AI automation can save your business 20+ hours a week.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact AI1team — Book a Free Discovery Call",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Discovery Call | AI1team",
    description:
      "Book a free discovery call and find out how AI automation can save 20+ hours/week.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
