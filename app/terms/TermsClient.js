"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaChevronDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const tocItems = [
  { id: "acceptance",       label: "Acceptance of Terms" },
  { id: "services",         label: "Services Provided" },
  { id: "responsibilities", label: "Client Responsibilities" },
  { id: "payment",          label: "Payment Terms" },
  { id: "refunds",          label: "Refund Policy" },
  { id: "ip",               label: "Intellectual Property" },
  { id: "confidentiality",  label: "Confidentiality" },
  { id: "liability",        label: "Limitation of Liability" },
  { id: "termination",      label: "Termination" },
  { id: "disputes",         label: "Dispute Resolution" },
  { id: "changes",          label: "Changes to Terms" },
  { id: "contact-terms",    label: "Contact Us" },
];

const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    body: "By accessing or using the services provided by AI1team, you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
  },
  {
    id: "services",
    number: "02",
    title: "Services Provided",
    body: "AI1team provides AI automation services including but not limited to: AI agent development, workflow automation, CRM setup and management, social media content automation, lead generation systems, and custom integrations. The exact scope of services for each client will be clearly defined in a separate Service Agreement or Statement of Work.",
  },
  {
    id: "responsibilities",
    number: "03",
    title: "Client Responsibilities",
    body: "Clients agree to: provide accurate business information required for service delivery, give timely feedback and approvals to avoid project delays, grant necessary access to platforms and tools as required, ensure that all materials provided do not infringe on third-party rights, and maintain confidentiality of any proprietary methods or workflows shared by AI1team.",
  },
  {
    id: "payment",
    number: "04",
    title: "Payment Terms",
    body: "Invoices are issued according to the schedule agreed upon in the client contract (typically monthly or per milestone). Payment is due within 7 days of invoice unless otherwise specified. Late payments may result in service suspension. Repeated late payment may lead to contract termination with a 14-day written notice.",
  },
  {
    id: "refunds",
    number: "05",
    title: "Refund Policy",
    body: "Due to the custom nature of our services, all payments are non-refundable once work has commenced. For audit services, refunds will only be issued if the audit has not yet been started. In the event of a billing error, AI1team will issue a credit or correction within 5 business days of notification.",
  },
  {
    id: "ip",
    number: "06",
    title: "Intellectual Property",
    body: "All automation systems, workflows, and materials developed specifically for a client become the property of that client upon full payment. AI1team retains ownership of any internal frameworks, templates, or tools used in the development process. AI1team may use anonymized project outcomes as case studies or portfolio items, with client consent.",
  },
  {
    id: "confidentiality",
    number: "07",
    title: "Confidentiality",
    body: "Both parties agree to keep confidential any proprietary information shared during the service engagement. This includes business processes, technical systems, client data, pricing structures, and strategic plans. This obligation survives termination of the service agreement.",
  },
  {
    id: "liability",
    number: "08",
    title: "Limitation of Liability",
    body: "AI1team shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability to any client shall not exceed the total fees paid for the specific service in question. Results achieved through automation are influenced by many external factors and cannot be guaranteed.",
  },
  {
    id: "termination",
    number: "09",
    title: "Termination",
    body: "Either party may terminate the service agreement with 30 days written notice. AI1team reserves the right to terminate immediately if a client breaches these terms, fails to make payment, or engages in unlawful activity. Upon termination, all outstanding invoices become immediately payable.",
  },
  {
    id: "disputes",
    number: "10",
    title: "Dispute Resolution",
    body: "Any disputes arising from these Terms or our services shall first be addressed through good-faith negotiation between both parties. If unresolved within 30 days, disputes shall be referred to binding arbitration under the laws of Wyoming, USA. Both parties waive the right to a jury trial.",
  },
  {
    id: "changes",
    number: "11",
    title: "Changes to Terms",
    body: "AI1team reserves the right to update these Terms at any time. Clients will be notified of material changes via email. Continued use of our services after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    id: "contact-terms",
    number: "12",
    title: "Contact Us",
    isContact: true,
  },
];

export default function TermsClient() {
  const [activeId, setActiveId] = useState("acceptance");
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
      <section className="bg-[#1A3C6E] pt-24 pb-24 md:pt-24 md:pb-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-lg text-[#C8DCFF] mb-8">
            Please read these terms carefully before using our services.
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
                {sections.map(({ id, number, title, body, isContact }, idx) => (
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

                    {isContact ? (
                      <div className="text-[#555577] text-base leading-relaxed space-y-2 pl-10">
                        <p>For questions about these Terms, contact us at:</p>
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
                      </div>
                    ) : (
                      <p className="text-[#555577] text-base leading-relaxed pl-10">
                        {body}
                      </p>
                    )}
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
            href="/privacy"
            className="flex items-center gap-2 text-[#1A3C6E] font-semibold hover:text-[#2E6DB4] transition-colors duration-150"
          >
            View Privacy Policy
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>

    </div>
  );
}
