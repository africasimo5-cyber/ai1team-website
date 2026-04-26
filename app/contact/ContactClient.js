"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTABanner";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaFacebook, FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaClock } from "react-icons/fa";

const faqs = [
  {
    q: "How long does it take to set up automation?",
    a: "Most projects are fully built and live within 1-3 weeks, depending on complexity. Simple automations can go live in as little as 3-5 business days."
  },
  {
    q: "Do I need technical knowledge to use the systems you build?",
    a: "Not at all. We build everything for you and provide full training so your team can manage it easily. We also offer ongoing support after launch."
  },
  {
    q: "Which tools do you use to build automations?",
    a: "We primarily use GoHighLevel, Make.com, Zapier, and n8n — plus custom code where needed. We recommend the best tool for your specific business needs."
  },
  {
    q: "Is there a free consultation available?",
    a: "Yes! We offer a free 30-minute discovery call where we learn about your business and suggest the best automation strategy — completely free and with no obligation."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#1A3C6E]/[0.08] py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="font-semibold text-[#1A3C6E] group-hover:text-[#2E6DB4] transition-colors">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-[#2E6DB4] text-xl font-light ml-4 shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#555577] text-sm text-left mt-3 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactClient = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-20 text-center bg-gradient-to-br from-[#0D2247] to-[#1A3C6E]">
        {/* Background Orbs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#2E6DB4]/20 blur-3xl rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#2E6DB4]/15 blur-3xl rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 border border-white/15 text-white/90 text-sm px-4 py-2 rounded-full w-fit mx-auto mb-6 backdrop-blur-sm shadow-sm">
              💬 Let&apos;s Start a Conversation
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white text-3xl md:text-5xl lg:text-5xl text-center leading-tight mb-4 tracking-tight"
          >
            Get In Touch With AI1team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base md:text-lg text-center max-w-[520px] mx-auto leading-relaxed"
          >
            Ready to automate your business? Tell us about your goals and we&apos;ll build a custom strategy for you — completely free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {["Free Discovery Call", "⚡ Response Within 24hrs", "No Commitment Required"].map((badge, idx) => (
              <span key={idx} className="bg-white/10 border border-white/10 text-white/85 text-sm px-4 py-2 rounded-full backdrop-blur-sm">
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="bg-[#F0F6FF] py-20 px-6 relative z-20 -mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left Column - Contact Info */}
            <div>
              <div className="text-xs uppercase tracking-widest text-[#2E6DB4] font-semibold mb-3">
                CONTACT INFORMATION
              </div>
              <h2 className="font-bold text-[#1A3C6E] text-3xl md:text-4xl mb-3">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-[#555577] text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                Whether you have a question about our services, want to discuss a project, or just want to learn more — our team is ready to help.
              </p>

              {/* Info Cards Stack */}
              <div className="flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-[#1A3C6E]/[0.08] rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,60,110,0.08)] group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A3C6E] to-[#2E6DB4] flex justify-center items-center shrink-0 shadow-md">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-bold mb-1">
                      EMAIL US
                    </div>
                    <a href="mailto:hello@ai1team.com" className="font-semibold text-[#1A3C6E] text-sm hover:text-[#2E6DB4] transition-colors">
                      hello@ai1team.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white border border-[#1A3C6E]/[0.08] rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,60,110,0.08)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A3C6E] to-[#2E6DB4] flex justify-center items-center shrink-0 shadow-md">
                    <FaLocationDot className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-bold mb-1">
                      OUR LOCATION
                    </div>
                    <div className="font-semibold text-[#1A3C6E] text-sm leading-snug">
                      30 N Gould St, Sheridan, <br /> Wyoming 82801, USA
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white border border-[#1A3C6E]/[0.08] rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,60,110,0.08)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A3C6E] to-[#2E6DB4] flex justify-center items-center shrink-0 shadow-md">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-bold mb-1">
                      RESPONSE TIME
                    </div>
                    <div className="font-semibold text-[#1A3C6E] text-sm">
                      Within 24 Hours
                    </div>
                    <div className="text-xs text-[#94a3b8] mt-1 font-medium">
                      Mon - Fri, 9am - 6pm CET
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Availability Badge */}
              <div className="bg-[#22c55e]/[0.08] border border-[#22c55e]/20 text-[#16a34a] text-sm font-medium px-4 py-2.5 rounded-xl mt-6 w-fit flex items-center gap-2">
                🟢 Currently Available for New Projects
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <div className="text-xs uppercase tracking-widest text-[#94a3b8] font-bold mb-4">
                  FOLLOW US
                </div>
                <div className="flex items-center gap-3">
                  {[
                    { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/ai1team/", label: "LinkedIn" },
                    { icon: FaXTwitter, link: "#", label: "X (Twitter)" },
                    { icon: FaInstagram, link: "#", label: "Instagram" },
                    { icon: FaFacebook, link: "#", label: "Facebook" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className="w-11 h-11 bg-white border border-[#1A3C6E]/[0.08] rounded-xl flex items-center justify-center text-[#555577] transition-all duration-300 hover:bg-[#1A3C6E] hover:text-white hover:shadow-[0_0_16px_rgba(26,60,110,0.25)] hover:-translate-y-1 group"
                    >
                      <social.icon className="text-[18px]" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. FAQ STRIP */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-bold text-[#1A3C6E] text-3xl">Frequently Asked Questions</h2>
            <p className="text-[#555577] text-base mt-3">
              Quick answers before you reach out
            </p>
          </div>
          <div className="border-t border-[#1A3C6E]/[0.08]">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <CTABanner />

    </div>
  );
};

export default ContactClient;
