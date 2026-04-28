"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaChevronDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const tocItems = [
  { id: "who-we-are",      label: "Who We Are" },
  { id: "data-collected",  label: "What Data We Collect" },
  { id: "data-use",        label: "How We Use Your Data" },
  { id: "legal-basis",     label: "Legal Basis for Processing" },
  { id: "data-sharing",    label: "Data Sharing & Third Parties" },
  { id: "cookies",         label: "Cookies & Tracking" },
  { id: "retention",       label: "Data Retention" },
  { id: "gdpr-rights",     label: "Your Rights (GDPR)" },
  { id: "security",        label: "Data Security" },
  { id: "children",        label: "Children's Privacy" },
  { id: "policy-changes",  label: "Changes to This Policy" },
  { id: "contact-privacy", label: "Contact Us" },
];

const sections = [
  {
    id: "who-we-are",
    number: "01",
    title: "Who We Are",
    body: "AI1team is an AI automation agency registered as an LLC. Our registered address is 30 N Gould St, Sheridan, Wyoming 82801, USA. We can be reached at hello@ai1team.com. We are the data controller for information collected through our website and services.",
  },
  {
    id: "data-collected",
    number: "02",
    title: "What Data We Collect",
    intro: "We may collect the following types of information:",
    bullets: [
      "Personal identification: name, email address, phone number, company name",
      "Communication data: messages sent through our contact form or email",
      "Technical data: IP address, browser type, device information, pages visited",
      "Business data: information shared by clients during service delivery",
      "Payment data: processed securely through third-party payment providers (we do not store card details)",
    ],
  },
  {
    id: "data-use",
    number: "03",
    title: "How We Use Your Data",
    body: "We use your data to: respond to enquiries and deliver our services, send relevant updates and newsletters (with your consent), improve our website and service quality, comply with legal and contractual obligations, and generate anonymized analytics to understand how our website is used.",
  },
  {
    id: "legal-basis",
    number: "04",
    title: "Legal Basis for Processing",
    body: "We process your data based on: your consent (e.g. newsletter signup), contractual necessity (e.g. service delivery), legitimate interests (e.g. improving our services), and legal obligations where applicable. You may withdraw consent at any time by contacting us.",
  },
  {
    id: "data-sharing",
    number: "05",
    title: "Data Sharing & Third Parties",
    intro: "We do not sell your personal data. We may share data with trusted third-party tools necessary to operate our services, including:",
    bullets: [
      "Make.com, Zapier, n8n — workflow automation",
      "GoHighLevel — CRM and communication",
      "Google Analytics — website analytics",
      "EmailJS — contact form processing",
      "Vercel — website hosting",
    ],
    outro: "All third parties are required to handle your data securely and in compliance with applicable laws.",
  },
  {
    id: "cookies",
    number: "06",
    title: "Cookies & Tracking",
    body: "We use essential cookies to ensure the website functions correctly, and analytical cookies (via Google Analytics) to understand visitor behaviour. We do not use invasive advertising or tracking cookies. You can manage cookie preferences through your browser settings. Refusing non-essential cookies will not affect your ability to use the site.",
  },
  {
    id: "retention",
    number: "07",
    title: "Data Retention",
    body: "We retain personal data only for as long as necessary to fulfil the purpose it was collected for, or as required by law. Client business data is retained for the duration of the service engagement and up to 2 years after contract end for legal and accounting purposes.",
  },
  {
    id: "gdpr-rights",
    number: "08",
    title: "Your Rights (GDPR)",
    intro: "If you are located in the European Economic Area or UK, you have the following rights:",
    bullets: [
      "Right to access your personal data",
      "Right to correct inaccurate data",
      "Right to request deletion (“right to be forgotten”)",
      "Right to restrict or object to processing",
      "Right to data portability",
      "Right to withdraw consent at any time",
    ],
    outro: "To exercise any of these rights, email us at hello@ai1team.com. We will respond within 30 days.",
  },
  {
    id: "security",
    number: "09",
    title: "Data Security",
    body: "We implement industry-standard security measures including encrypted data storage, secure transmission protocols (HTTPS), and restricted access controls. While we take all reasonable steps to protect your data, no system is 100% secure and we cannot guarantee absolute security.",
  },
  {
    id: "children",
    number: "10",
    title: "Children's Privacy",
    body: "Our services are not directed at individuals under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal information, please contact us immediately and we will delete it.",
  },
  {
    id: "policy-changes",
    number: "11",
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. When we do, we will revise the \"Last Updated\" date at the top of the page. For significant changes, we will notify existing clients by email. We encourage you to review this page periodically.",
  },
  {
    id: "contact-privacy",
    number: "12",
    title: "Contact Us",
    isContact: true,
  },
];

export default function PrivacyClient() {
  const [activeId, setActiveId] = useState("who-we-are");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: "-20% 0% -60% 0%" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-[#1A3C6E] py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#C8DCFF] mb-8">
            Your privacy matters to us. Here&apos;s exactly how we handle your data.
          </p>
          <span className="inline-block bg-white/10 text-[#C8DCFF] text-sm font-medium px-5 py-2 rounded-full border border-white/20">
            Last Updated: April 2026
          </span>
        </motion.div>
      </section>

      {/* ── Body ── */}
      <div className="bg-white flex-grow py-14">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="lg:flex lg:gap-10 lg:items-start">

            {/* ── Desktop Sidebar TOC ── */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 bg-[#F0F6FF] rounded-2xl p-5 border border-blue-100 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2E6DB4] mb-4 px-1">
                  Table of Contents
                </p>
                <nav className="space-y-0.5">
                  {tocItems.map(({ id, label }, i) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-150 flex items-center gap-2.5 ${
                        activeId === id
                          ? "bg-[#1A3C6E] text-white font-semibold"
                          : "text-[#555577] hover:bg-blue-100 hover:text-[#1A3C6E]"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold shrink-0 tabular-nums ${
                          activeId === id ? "text-blue-200" : "text-[#2E6DB4]"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-snug">{label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* ── Right Column ── */}
            <div className="flex-1 min-w-0">

              {/* ── Mobile TOC ── */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setMobileOpen((o) => !o)}
                  className="w-full flex items-center justify-between bg-[#F0F6FF] border border-blue-100 rounded-xl px-4 py-3 text-[#1A3C6E] font-semibold shadow-sm"
                >
                  <span>Table of Contents</span>
                  <FaChevronDown
                    className={`text-[#2E6DB4] transition-transform duration-200 ${
                      mobileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileOpen && (
                  <div className="mt-1 bg-[#F0F6FF] border border-blue-100 rounded-xl overflow-hidden shadow-sm">
                    {tocItems.map(({ id, label }, i) => (
                      <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className="w-full text-left px-4 py-2.5 text-sm text-[#555577] hover:bg-blue-100 hover:text-[#1A3C6E] flex items-center gap-3 border-b border-blue-50 last:border-0 transition-colors"
                      >
                        <span className="text-[10px] font-bold text-[#2E6DB4] shrink-0 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* ── Sections ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                {sections.map(({ id, number, title, body, intro, bullets, outro, isContact }, idx) => (
                  <section
                    key={id}
                    id={id}
                    className={`px-8 py-8 scroll-mt-28 ${
                      idx % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2E6DB4] text-white text-xs font-bold shrink-0">
                        {number}
                      </span>
                      <h2 className="text-xl font-bold text-[#1A3C6E] border-l-4 border-[#2E6DB4] pl-3 leading-snug">
                        {title}
                      </h2>
                    </div>

                    <div className="pl-10 text-[#555577] text-base leading-relaxed space-y-3">
                      {isContact && (
                        <>
                          <p>For any privacy-related questions, requests, or concerns:</p>
                          <p>
                            <span className="font-semibold text-[#1A3C6E]">Email:</span>{" "}
                            <a
                              href="mailto:hello@ai1team.com"
                              className="text-[#2E6DB4] hover:underline"
                            >
                              hello@ai1team.com
                            </a>
                          </p>
                          <p>
                            <span className="font-semibold text-[#1A3C6E]">Address:</span>{" "}
                            30 N Gould St, Sheridan, Wyoming 82801, USA
                          </p>
                          <p>We aim to respond to all privacy requests within 30 days.</p>
                        </>
                      )}

                      {body && <p>{body}</p>}

                      {intro && <p>{intro}</p>}

                      {bullets && bullets.length > 0 && (
                        <ul className="space-y-1.5">
                          {bullets.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2E6DB4] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {outro && <p>{outro}</p>}
                    </div>
                  </section>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Navigation ── */}
      <div className="bg-[#F0F6FF] border-t border-blue-100 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#1A3C6E] font-semibold hover:text-[#2E6DB4] transition-colors duration-150"
          >
            <FaArrowLeft className="text-sm" />
            Back to Home
          </Link>
          <Link
            href="/terms"
            className="flex items-center gap-2 text-[#1A3C6E] font-semibold hover:text-[#2E6DB4] transition-colors duration-150"
          >
            View Terms &amp; Conditions
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>

    </div>
  );
}
