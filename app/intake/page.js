import IntakeClient from "./IntakeClient";

export const metadata = {
  title: "Client Intake Form | AI1team",
  description:
    "Fill out our intake form so we can understand your business needs and recommend the perfect automation strategy for you.",
  alternates: {
    canonical: "https://ai1team.com/intake",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function IntakePage() {
  return <IntakeClient />;
}
