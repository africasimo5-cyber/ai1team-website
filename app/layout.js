import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "AI1team | AI Automation Agency",
  description: "AI1team delivers intelligent AI-powered automation systems using GoHighLevel, Make.com, Zapier, and n8n to help businesses scale faster and smarter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-background flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <PageTransition>
              {children}
            </PageTransition>
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
