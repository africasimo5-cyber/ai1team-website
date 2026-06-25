"use client";

import { motion } from "framer-motion";
import { FaPhone, FaMap, FaCode, FaRocket } from "react-icons/fa";
import AuditIllustration from "./illustrations/AuditIllustration";

const steps = [
  {
    number: "01",
    icon: FaPhone,
    title: "Discovery Call",
    description: "We learn your business processes, pain points, and automation goals in a focused strategy call."
  },
  {
    number: "02",
    icon: FaMap,
    title: "Custom Strategy",
    description: "We design a tailored automation roadmap built specifically around your workflows and objectives."
  },
  {
    number: "03",
    icon: FaCode,
    title: "Build & Integrate",
    description: "Our team builds and connects your full automation system using GoHighLevel, Make.com, Zapier, n8n, and custom code."
  },
  {
    number: "04",
    icon: FaRocket,
    title: "Launch & Optimize",
    description: "We go live, monitor performance closely, and continuously improve your systems for maximum results."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#F0F6FF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: scroll-triggered illustration wrapper */}
          <div className="w-full lg:max-w-[420px] shrink-0">
            <div className="relative p-8 rounded-[2rem] bg-white border border-[#e2e8f0] shadow-[0_20px_50px_rgba(26,60,110,0.06)] overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.12)_0%,transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-700 blur-xl" />
              <div className="relative z-10 flex items-center justify-center">
                <AuditIllustration />
              </div>
              {/* Decorative floating badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                Systems Builder
              </div>
            </div>
          </div>

          {/* Right: heading + steps grid */}
          <div className="flex-1 w-full">
            <div className="mb-12">
              <h2 className="font-bold text-[#1A3C6E] text-3xl text-center lg:text-left">
                How We Work
              </h2>
              <p className="text-[#555577] text-center lg:text-left text-base mt-3 max-w-[500px] mx-auto lg:mx-0">
                A simple, proven process to automate and scale your business
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                  className="flex flex-col bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#1A3C6E] text-white font-bold text-sm rounded-full flex items-center justify-center shrink-0 shadow-[0_0_0_3px_#2E6DB4]">
                      {step.number}
                    </div>
                    <div className="text-[#2E6DB4] text-[22px]">
                      <step.icon />
                    </div>
                  </div>
                  <h3 className="font-bold text-[#1A3C6E] text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#555577] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
