import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import PageTransition from "@/components/PageTransition";
import JsonLd from "@/components/JsonLd";
import TawkChat from "@/components/TawkChat";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://ai1team.com"),
  title: {
    default: "AI1team | AI Automation Agency for Ambitious Brands",
    template: "%s | AI1team",
  },
  description:
    "AI1team builds custom AI automation systems that save 20+ hours/week, capture every lead, and run your business 24/7. Powered by Make.com, n8n, Zapier, GoHighLevel & OpenAI.",
  keywords: [
    "AI automation agency",
    "Make.com expert",
    "n8n automation",
    "GoHighLevel automation",
    "Zapier agency",
    "AI chatbot setup",
    "workflow automation service",
    "lead generation automation",
    "business automation",
    "CRM automation",
  ],
  authors: [{ name: "AI1team", url: "https://ai1team.com" }],
  creator: "AI1team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai1team.com",
    siteName: "AI1team",
    title: "AI1team | AI Automation Agency for Ambitious Brands",
    description:
      "We automate your entire business operation — more leads, more clients, more time back.",
    images: [
      {
        url: "/og-image.png", // ⚠️ Create a 1200×630px branded image at public/og-image.png
        width: 1200,
        height: 630,
        alt: "AI1team — AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI1team | AI Automation Agency",
    description: "Custom AI automation systems for ambitious brands.",
    images: ["/og-image.png"],
    creator: "@ai1team", // ⚠️ Update with real Twitter/X handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI1team",
  url: "https://ai1team.com",
  logo: "https://ai1team.com/logo.png",
  description:
    "AI automation agency building custom systems for ambitious brands",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@ai1team.com",
    contactType: "customer service",
  },
  sameAs: [], // ⚠️ Add social profile URLs: ["https://twitter.com/ai1team", ...]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI1team",
  url: "https://ai1team.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://ai1team.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background flex flex-col`}
      >
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <PageTransition>{children}</PageTransition>
          </Suspense>
        </main>
        <Footer />
        <TawkChat />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NHBHK2R8P8"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NHBHK2R8P8');
          `}
        </Script>
        <Script id="cal-white-label" strategy="afterInteractive">
          {`
            (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");

            Cal("init", "discovery-call-white-label", {origin:"https://app.cal.com"});
            Cal.ns["discovery-call-white-label"]("ui", {
              "hideEventTypeDetails": false,
              "layout": "month_view"
            });
          `}
        </Script>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
