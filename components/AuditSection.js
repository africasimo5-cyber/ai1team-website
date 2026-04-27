"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Quick Audit",
    price: "$97",
    bestFor: "Solopreneurs & small teams",
    includes: [
      "1-hour business review",
      "Written findings report",
      "Top 3 automation opportunities identified",
    ],
    button: "Book Quick Audit",
    popular: false,
  },
  {
    name: "Growth Audit",
    price: "$197",
    bestFor: "Growing businesses ready to scale",
    includes: [
      "Full business process review",
      "Custom automation roadmap",
      "Priority recommendations ranked by ROI",
      "30-min strategy call included",
    ],
    button: "Book Growth Audit",
    popular: true,
  },
  {
    name: "Deep Audit",
    price: "$397",
    bestFor: "Established businesses & teams",
    includes: [
      "Everything in Growth Audit",
      "1-hour strategy call",
      "Custom implementation plan",
      "First-month support priority",
    ],
    button: "Book Deep Audit",
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AuditSection = () => {
  return (
    <section className="py-24 bg-[#F0F6FF]" id="audit">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[#1A1A2E] font-bold text-3xl md:text-4xl mb-4">
            Start With a Business Audit
          </h2>
          <p className="text-[#555577] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Before we automate anything, we learn everything about your business. Our paid audit
            gives you a clear picture of what&apos;s broken, what can be automated, and exactly how
            to fix it.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative flex flex-col p-8 rounded-2xl ${
                plan.popular
                  ? "bg-[#0f0f17] scale-105 z-10 shadow-[0_0_60px_rgba(46,109,180,0.25)] border border-[#2E6DB4]/40"
                  : "bg-white border border-gray-100 shadow-md"
              }`}
            >
              {/* Glow orb inside dark card */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.3)_0%,transparent_70%)]" />
                  <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)]" />
                </div>
              )}

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#2E6DB4] to-[#1A3C6E] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-[#2E6DB4]/30">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative mb-6 mt-2">
                <h3 className={`font-bold text-xl mb-1 ${plan.popular ? "text-white" : "text-[#1A3C6E]"}`}>
                  {plan.name}
                </h3>
                <div className={`font-extrabold text-4xl mb-2 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#60a5fa] to-[#2E6DB4] bg-clip-text text-transparent"
                    : "text-[#2E6DB4]"
                }`}>
                  {plan.price}
                </div>
                <p className={`text-sm ${plan.popular ? "text-[#94a3b8]" : "text-[#555577]"}`}>
                  Best for: {plan.bestFor}
                </p>
              </div>

              <ul className="relative flex-1 space-y-3 mb-8">
                {plan.includes.map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-sm ${plan.popular ? "text-[#cbd5e1]" : "text-[#1A1A2E]"}`}>
                    <span className={`mt-0.5 font-bold ${plan.popular ? "text-[#60a5fa]" : "text-[#2E6DB4]"}`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                className={`relative w-full font-semibold py-3 rounded-full transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#2E6DB4] to-[#1A3C6E] hover:from-[#3a7fcf] hover:to-[#22508f] text-white shadow-lg shadow-[#2E6DB4]/30"
                    : "bg-[#2E6DB4] hover:bg-[#1A3C6E] text-white"
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-[#555577] text-sm mt-12">
          Not sure which audit is right for you?{" "}
          <Link
            href="/contact"
            className="text-[#2E6DB4] hover:text-[#1A3C6E] underline underline-offset-2 transition-colors"
          >
            Contact us
          </Link>{" "}
          and we&apos;ll help you choose.
        </p>
      </div>
    </section>
  );
};

export default AuditSection;
