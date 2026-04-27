"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "How long does it take to set up automation?",
    a: "Most systems go live within 2–4 weeks depending on complexity. Simple automations (lead capture, follow-ups) can be running in days. We'll give you a clear timeline after the initial audit.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None at all. We handle everything — from design and build to testing and launch. You just tell us how your business works and what you want to stop doing manually.",
  },
  {
    q: "What tools and platforms do you use?",
    a: "We primarily work with GoHighLevel, Make.com, Zapier, n8n, OpenAI, and Claude AI — chosen based on what fits your business best. All tools are industry-leading with proven reliability.",
  },
  {
    q: "How much does it cost to get started?",
    a: "We start with a paid audit ($97–$397) so you know exactly what needs automating and what the ROI looks like before committing to a full build. No surprise costs — everything is scoped upfront.",
  },
  {
    q: "What happens if something breaks after launch?",
    a: "We monitor all live systems and respond fast to any issues. Deep Audit clients get first-month priority support included. We also document everything so your team can understand what's running.",
  },
  {
    q: "Can you integrate with the tools I already use?",
    a: "Yes. We connect with 500+ apps including CRMs, email platforms, Slack, Google Workspace, Shopify, and more. If it has an API or Zapier/Make integration, we can work with it.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="py-24 bg-[#F0F6FF]">
      <div className="max-w-3xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E6DB4] mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#555577] mt-4 text-sm max-w-lg mx-auto leading-relaxed">
            Everything you need to know before getting started. Still have questions?{" "}
            <a href="/contact" className="text-[#2E6DB4] hover:underline font-medium">
              Contact us.
            </a>
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                openIndex === idx
                  ? "border-[#2E6DB4]/40 shadow-[0_4px_24px_rgba(46,109,180,0.1)] bg-white"
                  : "border-[#1A3C6E]/[0.08] bg-white hover:border-[#2E6DB4]/25"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={openIndex === idx}
              >
                <span className={`text-sm font-semibold leading-snug pr-4 transition-colors duration-200 ${
                  openIndex === idx ? "text-[#2E6DB4]" : "text-[#1A1A2E] group-hover:text-[#2E6DB4]"
                }`}>
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="shrink-0 flex items-center"
                >
                  <FaChevronDown className={`text-[11px] transition-colors duration-200 ${
                    openIndex === idx ? "text-[#2E6DB4]" : "text-[#94a3b8] group-hover:text-[#2E6DB4]"
                  }`} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-[#2E6DB4]/[0.08]">
                      <p className="text-[#555577] text-sm leading-relaxed pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
