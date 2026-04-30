import AboutClient from "./AboutClient";

export const metadata = {
  title: "About AI1team",
  description:
    "Meet the team behind AI1team. We're a specialist AI automation agency on a mission to help ambitious brands reclaim time, scale faster, and run smarter — all on autopilot.",
  keywords: [
    "About AI1team",
    "AI automation team",
    "AI agency experts",
    "automation agency mission",
    "business automation specialists",
  ],
  alternates: {
    canonical: "https://ai1team.com/about",
  },
  openGraph: {
    type: "website",
    url: "https://ai1team.com/about",
    title: "About AI1team",
    description:
      "Meet the team behind AI1team — specialist AI automation engineers helping ambitious brands scale on autopilot.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About AI1team — AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AI1team",
    description:
      "Meet the team behind AI1team — specialist AI automation engineers.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
