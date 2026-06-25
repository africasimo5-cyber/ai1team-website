"use client";

import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import AboutIllustration from "./illustrations/AboutIllustration";

const rows = [
  "Custom-built automation — no generic templates",
  "AI-first workflows from day one",
  "Measurable ROI tracked from the start",
  "Transparent process with full visibility",
  "Systems that run 24/7 without extra staff",
  "No long-term retainer lock-in required",
  "Dedicated team from build through launch",
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-[#0f0f17] relative overflow-hidden" id="why-us">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-16 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(26,60,110,0.45)_0%,transparent_65%)]" />
        <div className="absolute -bottom-24 -right-16 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.12)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

          {/* Left: heading + table */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left mb-14"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#60a5fa] mb-3 block">
                The Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                AI1team vs. Traditional Agency
              </h2>
              <p className="text-[#94a3b8] mt-4 max-w-lg mx-auto lg:mx-0 text-sm leading-relaxed">
                Most agencies give you a strategy deck. We give you a running system.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/[0.07] overflow-hidden shadow-[0_0_60px_rgba(46,109,180,0.1)]"
            >
              {/* Table header */}
              <div className="grid grid-cols-[1fr_56px_56px] sm:grid-cols-[1fr_10rem_10rem] bg-[#16161f] border-b border-white/[0.07]">
                <div className="py-4 px-3 md:px-6 text-xs font-bold uppercase tracking-widest text-[#94a3b8]">
                  Feature
                </div>
                <div className="py-4 px-1 md:px-6 text-xs font-bold uppercase tracking-widest text-[#60a5fa] text-center">
                  <span className="hidden sm:inline">AI1team</span>
                  <span className="sm:hidden leading-tight block text-[10px]">AI1<br/>team</span>
                </div>
                <div className="py-4 px-1 md:px-6 text-xs font-bold uppercase tracking-widest text-[#94a3b8]/50 text-center">
                  <span className="hidden sm:inline">Traditional</span>
                  <span className="sm:hidden leading-tight block text-[10px]">Trad.<br/>Agency</span>
                </div>
              </div>

              {/* Rows */}
              {rows.map((row, idx) => (
                <motion.div
                  key={row}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className={`grid grid-cols-[1fr_56px_56px] sm:grid-cols-[1fr_10rem_10rem] items-center
                    border-b border-white/[0.04] last:border-b-0
                    hover:bg-white/[0.025] transition-colors duration-200
                    ${idx % 2 === 0 ? "bg-[#0f0f17]" : "bg-[#13131b]"}`}
                >
                  <div className="py-3 px-3 md:px-6 text-xs md:text-sm text-[#cbd5e1] leading-snug">
                    {row}
                  </div>
                  <div className="py-3 md:py-4 flex justify-center items-center">
                    <span className="w-7 h-7 rounded-full bg-[#2E6DB4]/20 border border-[#2E6DB4]/40 flex items-center justify-center">
                      <FaCheck className="text-[#60a5fa] text-[10px]" />
                    </span>
                  </div>
                  <div className="py-3 md:py-4 flex justify-center items-center">
                    <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <FaTimes className="text-[#94a3b8]/50 text-[10px]" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center lg:text-left text-[#94a3b8]/50 text-xs mt-6"
            >
              *Based on common agency delivery models. Results vary per engagement.
            </motion.p>
          </div>

          {/* Right: scroll-triggered illustration wrapper */}
          <div className="hidden lg:flex lg:w-[400px] shrink-0 items-center justify-center pt-8">
            <div className="w-full max-w-[380px] relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-lg overflow-hidden group shadow-2xl">
              {/* Sleek background neon glow */}
              <div className="absolute -left-20 -top-20 w-60 h-60 rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.25)_0%,transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-700 blur-xl" />
              <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-700 blur-xl" />
              <div className="relative z-10 flex items-center justify-center">
                <AboutIllustration />
              </div>
              {/* Decorative floating badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#2E6DB4] to-purple-600 text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(46,109,180,0.3)]">
                24/7 Operations
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
