"use client";

import { useState } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import CTABanner from "@/components/CTABanner";
import SharedContactForm from "@/components/SharedContactForm";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaFacebook, FaLocationDot, FaCircleCheck } from "react-icons/fa6";
import { FaEnvelope, FaClock, FaChevronDown, FaCheck, FaFileAlt, FaPhoneAlt, FaRocket, FaCalendarCheck, FaPaperPlane } from "react-icons/fa";

const faqs = [
  {
    q: "How long does it take to set up automation?",
    a: "Most projects are fully built and live within 1–3 weeks, depending on complexity. Simple automations can go live in as little as 3–5 business days.",
  },
  {
    q: "Do I need technical knowledge to use the systems you build?",
    a: "Not at all. We build everything for you and provide full training so your team can manage it easily. We also offer ongoing support after launch.",
  },
  {
    q: "Which tools do you use to build automations?",
    a: "We primarily use GoHighLevel, Make.com, Zapier, and n8n — plus custom code where needed. We recommend the best tool for your specific business needs.",
  },
  {
    q: "Is there a free consultation available?",
    a: "Yes. We offer a free 30-minute discovery call where we learn about your business and suggest the best automation strategy — completely free and with no obligation.",
  },
];

const nextSteps = [
  {
    icon: FaFileAlt,
    step: "01",
    title: "Submit Your Details",
    desc: "Send us a message using the form below or book a discovery call directly — whichever works best for you.",
  },
  {
    icon: FaPhoneAlt,
    step: "02",
    title: "We Review & Respond",
    desc: "Our team reviews your submission and reaches out within 24 hours.",
  },
  {
    icon: FaRocket,
    step: "03",
    title: "Strategy Call Scheduled",
    desc: "We book a free call to map out the right automation plan for your business.",
  },
];

const BookingButton = () => (
  <button
    data-cal-link="emmanuel-ai1team/30-mins-free-discovery-call"
    data-cal-namespace="30-mins-free-discovery-call"
    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    className="inline-flex items-center gap-2.5 bg-[#2E6DB4] hover:bg-[#1A3C6E] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer"
  >
    <FaCalendarCheck className="shrink-0" />
    Book Your Free Discovery Call
  </button>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen
        ? "border-[#2E6DB4]/40 shadow-[0_4px_24px_rgba(46,109,180,0.08)] bg-white"
        : "border-[#1A3C6E]/[0.08] bg-white hover:border-[#2E6DB4]/20"
        }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left px-6 py-5 group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-sm pr-4 leading-snug transition-colors duration-200 ${isOpen ? "text-[#2E6DB4]" : "text-[#1A1A2E] group-hover:text-[#2E6DB4]"
          }`}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className="shrink-0 flex items-center"
        >
          <FaChevronDown className={`text-[11px] transition-colors duration-200 ${isOpen ? "text-[#2E6DB4]" : "text-[#94a3b8] group-hover:text-[#2E6DB4]"
            }`} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 border-t border-[#2E6DB4]/[0.08]">
              <p className="text-[#555577] text-sm leading-relaxed pt-4">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactClient = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── 1. Hero ── */}
      <section className="relative bg-[#0f0f17] min-h-[72vh] flex items-center justify-center overflow-hidden pt-20 md:pt-[100px]">

        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-16 w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle,rgba(26,60,110,0.55)_0%,transparent_65%)]" />
          <div className="absolute -bottom-24 -right-16 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.28)_0%,transparent_65%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.07)_0%,transparent_70%)]" />
        </div>

        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-[#2E6DB4]/10 border border-[#2E6DB4]/25
              text-[#93c5fd] text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse" />
            Let&apos;s Work Together
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Get In Touch With{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] via-[#2E6DB4] to-[#818cf8] bg-clip-text text-transparent">
              AI1team
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-base md:text-lg text-[#94a3b8] max-w-xl mx-auto leading-relaxed mb-10"
          >
            Ready to automate your business? Tell us about your goals and we&apos;ll build
            a custom strategy — completely free, no obligation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              "Free Discovery Call",
              "Response Within 24hrs",
              "No Commitment Required",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/12 text-white text-sm font-semibold backdrop-blur-sm"
              >
                <FaCheck className="text-[#4ade80] text-[10px] shrink-0" />
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            <BookingButton />
          </motion.div>
        </div>

        {/* Fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#F0F6FF] to-transparent pointer-events-none" />
      </section>

      {/* ── 2. What Happens Next ── */}
      <section className="bg-[#F0F6FF] pt-16 pb-4 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#2E6DB4] mb-10">
            What Happens Next
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nextSteps.map(({ icon: Icon, step, title, desc }, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                className="relative bg-white rounded-2xl p-7 border border-[#1A3C6E]/[0.07] shadow-sm overflow-hidden
                  hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Gradient top bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2E6DB4] to-[#818cf8]" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E6DB4] to-[#1A3C6E] flex items-center justify-center shrink-0">
                    <Icon className="text-white text-sm" />
                  </div>
                  <span className="text-[11px] font-bold text-[#2E6DB4]/50 uppercase tracking-widest">
                    Step {step}
                  </span>
                </div>
                <h3 className="font-bold text-[#1A1A2E] text-base mb-2">{title}</h3>
                <p className="text-[#555577] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Contact Form ── */}
      <SharedContactForm />

      {/* ── 4. Book a Call ── */}
      <section className="bg-[#F0F6FF] py-16 px-6" id="book-a-call">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-12 text-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E6DB4] mb-4 block">
              Schedule Your Call
            </span>
            <h2 className="font-extrabold text-[#1A1A2E] text-3xl md:text-4xl mb-4 leading-tight">
              Book Your Free Discovery Call
            </h2>
            <p className="text-[#555577] text-sm max-w-md mx-auto leading-relaxed mb-8">
              Pick a time that works for you. We&apos;ll learn about your business and map out
              the best automation strategy — completely free, no obligation.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { icon: "🕐", label: "Only 15 Minutes" },
                { icon: "✔️", label: "Free — No Obligation" },
                { icon: "🔒", label: "100% Confidential" },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0F6FF] border border-[#2E6DB4]/15 text-[#1A3C6E] text-sm font-semibold"
                >
                  <span>{icon}</span>
                  {label}
                </span>
              ))}
            </div>

            <BookingButton />
          </motion.div>
        </div>
      </section>

      {/* ── 5. Contact Info ── */}
      <section className="bg-[#F0F6FF] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-[#2E6DB4] font-bold mb-3 text-center">
            Contact Information
          </div>
          <h2 className="font-extrabold text-[#1A1A2E] text-3xl md:text-4xl mb-3 leading-tight text-center">
            We&apos;d Love to Hear From You
          </h2>
          <p className="text-[#555577] text-sm leading-relaxed mb-8 max-w-lg mx-auto text-center">
            Whether you have a question about our services, want to discuss a project, or just
            want to learn more — our team is ready to help.
          </p>

          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: FaEnvelope,
                label: "Email Us",
                content: (
                  <a href="mailto:hello@ai1team.com" className="font-semibold text-[#1A3C6E] text-sm hover:text-[#2E6DB4] transition-colors">
                    hello@ai1team.com
                  </a>
                ),
                delay: 0,
              },
              {
                icon: FaLocationDot,
                label: "Our Location",
                content: (
                  <div className="font-semibold text-[#1A3C6E] text-sm leading-snug">
                    30 N Gould St, Sheridan,<br />Wyoming 82801, USA
                  </div>
                ),
                delay: 0.1,
              },
              {
                icon: FaClock,
                label: "Response Time",
                content: (
                  <>
                    <div className="font-semibold text-[#1A3C6E] text-sm">Within 24 Hours</div>
                    <div className="text-xs text-[#94a3b8] mt-0.5 font-medium">Mon – Fri, 9am – 6pm CET</div>
                  </>
                ),
                delay: 0.2,
              },
            ].map(({ icon: Icon, label, content, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className="bg-white border border-[#1A3C6E]/[0.08] rounded-2xl p-5 flex items-start gap-4
                  transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,60,110,0.08)]"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1A3C6E] to-[#2E6DB4] flex justify-center items-center shrink-0">
                  <Icon className="text-white text-base" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#94a3b8] font-bold mb-1">
                    {label}
                  </div>
                  {content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Availability badge */}
          <div className="bg-[#22c55e]/[0.08] border border-[#22c55e]/20 text-[#16a34a] text-sm font-semibold px-4 py-2.5 rounded-xl mt-6 w-fit flex items-center gap-2.5 mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shrink-0" />
            Currently Available for New Projects
          </div>

          {/* Social Media */}
          <div className="mt-10 text-center">
            <div className="text-[10px] uppercase tracking-widest text-[#94a3b8] font-bold mb-4">
              Follow Us
            </div>
            <div className="flex items-center gap-3 justify-center">
              {[
                { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/ai1team/", label: "LinkedIn" },
                { icon: FaXTwitter, link: "https://x.com/AI1Team/", label: "X (Twitter)" },
                { icon: FaInstagram, link: "https://www.instagram.com/ai1team.automation.agency/", label: "Instagram" },
                { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=61589291811206/", label: "Facebook" },
              ].map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 bg-white border border-[#1A3C6E]/[0.08] rounded-xl flex items-center justify-center
                    text-[#555577] transition-all duration-300
                    hover:bg-[#1A3C6E] hover:text-white hover:shadow-[0_0_16px_rgba(26,60,110,0.25)] hover:-translate-y-1"
                >
                  <Icon className="text-[17px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E6DB4] mb-3 block">
              Quick Answers
            </span>
            <h2 className="font-extrabold text-[#1A1A2E] text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="text-[#555577] text-sm mt-3">
              Before you reach out — common questions answered.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <FAQItem question={faq.q} answer={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <CTABanner calButton />

      {/* Cal.com embed script */}
      <Script
        id="cal-embed"
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

            Cal("init", "30-mins-free-discovery-call", { origin: "https://app.cal.com" });
            Cal.ns["30-mins-free-discovery-call"]("ui", {
              "hideEventTypeDetails": false,
              "layout": "month_view"
            });
          `
        }}
      />
    </div>
  );
};

export default ContactClient;
