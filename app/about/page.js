import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | AI1team",
  description: "Learn about AI1team, our mission, vision, and the experts behind our AI automation solutions driving business growth.",
  keywords: ["About AI1team", "AI Agency Team", "AI Automation Experts", "Our Mission", "Business Automation Agency"],
  openGraph: {
    title: "About Us | AI1team",
    description: "Learn about AI1team, our mission, vision, and the experts behind our AI automation solutions driving business growth.",
    url: "https://ai1team.com/about",
    siteName: "AI1team",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
