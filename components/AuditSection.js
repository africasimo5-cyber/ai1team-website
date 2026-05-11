"use client";

import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";

const plans = [
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
    popular: false,
    enterprise: false,
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
    popular: true,
    enterprise: false,
  },
  {
    name: "Enterprise Audit",
    price: "Custom Pricing",
    priceSubtext: "Tailored to your business scope",
    bestFor: "Large businesses, corporations & high-growth teams",
    includes: [
      "Everything in Deep Audit",
      "Multi-department process review",
      "Full automation implementation roadmap",
      "Dedicated project manager assigned",
      "Priority onboarding & support",
      "Custom SLA agreement",
    ],
    button: "Request Enterprise Quote",
    popular: false,
    enterprise: true,
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
      <div className="max-w-7xl mx-auto px-6">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
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
                  ? "bg-white scale-105 z-10 shadow-xl border-2 border-[#2E6DB4]"
                  : plan.enterprise
                  ? "bg-[#0f0f17] border border-[#2E6DB4]/60 hover:shadow-[0_0_40px_rgba(46,109,180,0.25)] transition-shadow duration-300"
                  : "bg-white border border-gray-100 shadow-md"
              }`}
            >

              {/* Glow orb inside enterprise card */}
              {plan.enterprise && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(26,60,110,0.4)_0%,transparent_70%)]" />
                  <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.2)_0%,transparent_70%)]" />
                </div>
              )}

              {/* Most Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#2E6DB4] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Enterprise badge */}
              {plan.enterprise && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#1A3C6E] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    Enterprise
                  </span>
                </div>
              )}

              <div className="relative mb-6 mt-2">
                <h3 className={`font-bold text-xl mb-1 ${
                  plan.enterprise ? "text-white" : "text-[#1A3C6E]"
                }`}>
                  {plan.name}
                </h3>

                {plan.enterprise ? (
                  <div className="mb-2">
                    <div className="font-extrabold text-4xl text-white">
                      {plan.price}
                    </div>
                    <p className="text-[#94a3b8] text-xs mt-1">{plan.priceSubtext}</p>
                  </div>
                ) : (
                  <div className="font-extrabold text-4xl mb-2 text-[#2E6DB4]">
                    {plan.price}
                  </div>
                )}

                <p className={`text-sm ${
                  plan.enterprise ? "text-[#94a3b8]" : "text-[#555577]"
                }`}>
                  Best for: {plan.bestFor}
                </p>
              </div>

              <ul className="relative flex-1 space-y-3 mb-8">
                {plan.includes.map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-sm ${
                    plan.enterprise ? "text-[#cbd5e1]" : "text-[#1A1A2E]"
                  }`}>
                    <span className={`mt-0.5 font-bold ${
                      plan.popular ? "text-[#60a5fa]" : plan.enterprise ? "text-[#2E6DB4]" : "text-[#2E6DB4]"
                    }`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                data-cal-link="emmanuel-ai1team/15min"
                data-cal-namespace="15min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className={`relative w-full font-semibold py-3 rounded-full transition-all duration-200 text-center cursor-pointer ${
                  plan.enterprise
                    ? "bg-[#1A3C6E] hover:bg-[#2E6DB4] text-white"
                    : "bg-[#2E6DB4] hover:bg-[#1A3C6E] text-white"
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-[#555577] text-sm mt-12">
          Not sure which audit is right for you? Whether you&apos;re a solo founder or an enterprise team,{" "}
          <Link
            href="/contact"
            className="text-[#2E6DB4] hover:text-[#1A3C6E] underline underline-offset-2 transition-colors"
          >
            we&apos;ll help you find the right fit. Contact us.
          </Link>
        </p>
      </div>

      <Script
        id="cal-embed-audit"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");

            Cal("init", "15min", { origin: "https://app.cal.com" });
            Cal.ns["15min"]("ui", {
              "hideEventTypeDetails": false,
              "layout": "month_view"
            });
          `
        }}
      />
    </section>
  );
};

export default AuditSection;
