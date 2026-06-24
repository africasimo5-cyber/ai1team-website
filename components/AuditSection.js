"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

const plans = [
  {
    name: "Growth Audit",
    price: "FREE",
    originalPrice: "$197",
    isFree: true,
    summerOffer: true,
    summerBadge: "☀️ Summer Offer",
    bestFor: "Solopreneurs & small teams getting started with automation",
    includes: [
      "Full business process review",
      "Custom automation roadmap",
      "Priority recommendations ranked by ROI",
      "30-min strategy call included",
    ],
    button: "Claim Free Audit",
    calLink: "emmanuel-ai1team/discovery",
    calNamespace: "discovery",
    popular: false,
    enterprise: false,
    credit: null,
  },
  {
    name: "Deep Audit",
    price: "$298.50",
    originalPrice: "$597",
    isFree: false,
    summerOffer: true,
    summerBadge: "🔥 50% Off",
    bestFor: "Growing businesses ready to scale",
    includes: [
      "Everything in Growth Audit",
      "1-hour strategy call",
      "Custom implementation plan",
      "First-month support priority",
    ],
    button: "Book Deep Audit – 50% Off",
    href: "https://book.stripe.com/cNifZ9gVQ9YI8GP38c3oA04",
    popular: true,
    enterprise: false,
    credit: "$597 credited toward your build if you proceed to a paid automation project",
  },
  {
    name: "Done-With-You Audit",
    price: "$498.50",
    originalPrice: "$997",
    isFree: false,
    summerOffer: true,
    summerBadge: "🔥 50% Off",
    bestFor: "Established businesses wanting a hands-on collaborative deep dive",
    includes: [
      "Everything in Deep Audit",
      "2-hour strategy workshop (live session)",
      "Recorded Loom walkthrough of full roadmap",
      "Implementation Q&A session included",
    ],
    button: "Book DWY Audit – 50% Off",
    href: "https://book.stripe.com/aFa6oz6hcc6Qg9h5gk3oA05",
    popular: false,
    enterprise: false,
    credit: "$997 credited toward your build if you proceed to a paid automation project",
  },
  {
    name: "Enterprise Audit",
    price: "Custom Pricing",
    priceSubtext: "Tailored to your business scope",
    bestFor: "Large businesses, corporations & high-growth teams",
    includes: [
      "Everything in Done-With-You Audit",
      "Multi-department process review",
      "Full automation implementation roadmap",
      "Dedicated project manager assigned",
      "Priority onboarding & support",
      "Custom SLA agreement",
    ],
    button: "Request Enterprise Quote",
    href: "https://cal.com/emmanuel-ai1team/discovery",
    calLink: "emmanuel-ai1team/discovery",
    calNamespace: "discovery",
    popular: false,
    enterprise: true,
    credit: null,
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

const DEADLINE = new Date("2026-07-31T23:59:59Z").getTime();

const getTimeLeft = () => {
  const diff = DEADLINE - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const AuditSection = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            let script = d.createElement("script");
            script.src = A;
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
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

    window.Cal("init", "discovery", { origin: "https://app.cal.com" });
    window.Cal.ns.discovery("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }, []);

  return (
    <section
      className="py-24 relative overflow-hidden"
      id="audit"
      style={{ background: "linear-gradient(135deg, #1a0a00 0%, #3d1a00 40%, #1a2a1a 100%)" }}
    >
      {/* Decorative palm tree — bottom-left */}
      <svg
        className="absolute bottom-0 left-0 w-48 h-60 pointer-events-none select-none"
        viewBox="0 0 160 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        opacity="0.15"
      >
        <path d="M80 240 C78 210 76 180 78 160 C80 140 82 120 80 100" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round"/>
        <path d="M80 102 C60 80 30 65 5 60 C25 70 50 85 75 108" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" fill="#f59e0b" fillOpacity="0.5"/>
        <path d="M80 100 C75 70 80 40 90 20 C85 50 82 80 82 108" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" fill="#f59e0b" fillOpacity="0.5"/>
        <path d="M80 102 C105 80 130 70 155 68 C135 78 108 90 83 110" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" fill="#f59e0b" fillOpacity="0.5"/>
        <path d="M80 106 C55 100 25 108 0 120 C25 112 55 106 78 112" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" fill="#f59e0b" fillOpacity="0.4"/>
        <path d="M80 106 C108 104 135 115 158 128 C132 118 108 108 82 112" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" fill="#f59e0b" fillOpacity="0.4"/>
      </svg>

      {/* Decorative sun rays — top-right */}
      <svg
        className="absolute -top-6 -right-6 w-56 h-56 pointer-events-none select-none"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        opacity="0.13"
      >
        <circle cx="150" cy="50" r="28" fill="#f59e0b"/>
        <line x1="150" y1="5"   x2="150" y2="16"  stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
        <line x1="181" y1="19"  x2="173" y2="27"  stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
        <line x1="195" y1="50"  x2="184" y2="50"  stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
        <line x1="181" y1="81"  x2="173" y2="73"  stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
        <line x1="150" y1="95"  x2="150" y2="84"  stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
        <line x1="119" y1="81"  x2="127" y2="73"  stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
        <line x1="105" y1="50"  x2="116" y2="50"  stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
        <line x1="119" y1="19"  x2="127" y2="27"  stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
      </svg>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
            Start With a Business Audit
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Before we automate anything, we learn everything about your business. Our paid audit
            gives you a clear picture of what&apos;s broken, what can be automated, and exactly how
            to fix it.
          </p>
        </div>

        {/* Summer Offer Banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-white font-bold text-sm md:text-base shadow-xl shadow-orange-900/40 tracking-wide">
            <span>☀️</span>
            <span>Summer Offer — Limited Time Only</span>
            <span>🌴</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-4 min-h-[5rem]">
          {timeLeft === null ? null : timeLeft ? (
            <div className="flex items-start gap-2 md:gap-3">
              {[
                { value: timeLeft.days,    label: "Days"    },
                { value: timeLeft.hours,   label: "Hours"   },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex items-start gap-2 md:gap-3">
                  <div className="flex flex-col items-center">
                    <div className="bg-black/40 border border-amber-500/30 rounded-xl px-4 py-3 min-w-[3.5rem] md:min-w-[4rem] text-center">
                      <span className="font-extrabold text-3xl md:text-4xl text-amber-300 tabular-nums leading-none">
                        {String(value).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-amber-400/80 text-[10px] md:text-xs font-semibold mt-1.5 uppercase tracking-widest">
                      {label}
                    </span>
                  </div>
                  {i < 3 && (
                    <span className="font-extrabold text-2xl md:text-3xl text-amber-400/50 mt-2.5">:</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-400 font-bold text-xl tracking-wide">Offer Expired</p>
          )}
        </div>

        {/* Deadline text */}
        <p className="text-center text-amber-300 text-sm italic mb-12">
          ⚡ Offer valid through July 31, 2026 — don&apos;t miss out
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative flex flex-col p-8 rounded-2xl ${
                plan.enterprise
                  ? "bg-[#0f0f17] border border-[rgba(46,109,180,0.3)] hover:shadow-[0_0_40px_rgba(46,109,180,0.25)] transition-shadow duration-300"
                  : plan.popular && plan.summerOffer
                  ? "bg-white scale-105 z-10 border-2 border-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.5)]"
                  : plan.summerOffer
                  ? "bg-white border-2 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                  : plan.popular
                  ? "bg-white scale-105 z-10 shadow-xl border-2 border-[#2E6DB4]"
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

              {/* Summer offer corner badge */}
              {plan.summerOffer && (
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md whitespace-nowrap">
                    {plan.summerBadge}
                  </span>
                </div>
              )}

              {/* Most Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className={`text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg whitespace-nowrap ${
                    plan.summerOffer
                      ? "bg-gradient-to-r from-amber-500 to-orange-500"
                      : "bg-[#2E6DB4]"
                  }`}>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Enterprise badge */}
              {plan.enterprise && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#1A3C6E] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
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
                ) : plan.summerOffer ? (
                  <div className="mb-2">
                    <div className="text-lg font-semibold text-red-400 line-through leading-tight">
                      {plan.originalPrice}
                    </div>
                    {plan.isFree ? (
                      <>
                        <div className="font-extrabold text-5xl bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent leading-tight">
                          FREE
                        </div>
                        <p className="text-amber-600 text-xs font-semibold mt-1">Limited summer offer</p>
                      </>
                    ) : (
                      <div className="font-extrabold text-4xl text-amber-500">
                        {plan.price}
                      </div>
                    )}
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

              <ul className="relative flex-1 space-y-3 mb-4">
                {plan.includes.map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-sm ${
                    plan.enterprise ? "text-[#cbd5e1]" : "text-[#1A1A2E]"
                  }`}>
                    <span className={`mt-0.5 font-bold ${
                      plan.summerOffer ? "text-amber-500" : "text-[#2E6DB4]"
                    }`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Credit line */}
              {plan.credit && (
                <div className={`relative flex items-start gap-2 rounded-lg px-3 py-2 mt-3 mb-6 ${
                  plan.summerOffer
                    ? "bg-amber-50 border-l-[3px] border-amber-400"
                    : "bg-[#F0F6FF] border-l-[3px] border-[#2E6DB4]"
                }`}>
                  <FaCircleCheck
                    className={`mt-0.5 shrink-0 ${plan.summerOffer ? "text-amber-500" : "text-[#2E6DB4]"}`}
                    size={13}
                  />
                  <span className={`text-xs font-semibold leading-snug ${
                    plan.summerOffer ? "text-amber-700" : "text-[#1A3C6E]"
                  }`}>
                    {plan.credit}
                  </span>
                </div>
              )}

              {!plan.credit && <div className="mb-6" />}

              {/* Button */}
              {plan.calLink ? (
                <button
                  data-cal-link={plan.calLink}
                  data-cal-namespace={plan.calNamespace}
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  className={`relative w-full font-semibold py-3 rounded-full transition-all duration-200 text-center block ${
                    plan.enterprise
                      ? "bg-[#1A3C6E] hover:bg-[#2E6DB4] text-white"
                      : "bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white shadow-md shadow-orange-200"
                  }`}
                >
                  {plan.button}
                </button>
              ) : plan.isInternal ? (
                <Link
                  href={plan.href}
                  className="relative w-full font-semibold py-3 rounded-full transition-all duration-200 text-center block bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white shadow-md shadow-orange-200"
                >
                  {plan.button}
                </Link>
              ) : plan.summerOffer ? (
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full font-semibold py-3 rounded-full transition-all duration-200 text-center block bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white shadow-md shadow-orange-200"
                >
                  {plan.button}
                </a>
              ) : (
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full font-semibold py-3 rounded-full transition-all duration-200 text-center block bg-[#2E6DB4] hover:bg-[#1A3C6E] text-white"
                >
                  {plan.button}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-gray-400 text-sm mt-12">
          Not sure which audit is right for you? Whether you&apos;re a solo founder or an enterprise
          team, we&apos;ll help you find the right fit.{" "}
          <Link
            href="/contact"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
          >
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AuditSection;
