"use client";

import { motion } from "framer-motion";
import { FaPhone, FaMap, FaCode, FaRocket } from "react-icons/fa";

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
        <div className="mb-16">
          <h2 className="font-bold text-[#1A3C6E] text-3xl text-center">
            How We Work
          </h2>
          <p className="text-[#555577] text-center text-base mt-3 max-w-[500px] mx-auto">
            A simple, proven process to automate and scale your business
          </p>
        </div>

        <div className="relative">
          {/* Desktop connecting dashed line */}
          <div 
            className="hidden lg:block absolute z-0"
            style={{
              top: "28px",
              left: "12.5%",
              right: "12.5%",
              height: "2px",
              background: "repeating-linear-gradient(to right, #2E6DB4 0px, #2E6DB4 8px, transparent 8px, transparent 16px)",
              opacity: 0.4
            }}
          />

          {/* Mobile connecting vertical line */}
          <div 
            className="lg:hidden absolute z-0 top-7 bottom-7 left-7 w-[2px]"
            style={{
              background: "repeating-linear-gradient(to bottom, #2E6DB4 0px, #2E6DB4 8px, transparent 8px, transparent 16px)",
              opacity: 0.4
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-0 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                className="flex flex-row lg:flex-col items-start lg:items-center relative"
              >
                <div className="w-14 h-14 bg-[#1A3C6E] text-white font-bold text-lg border-3 border-[#2E6DB4] rounded-full flex items-center justify-center flex-shrink-0 z-10 lg:mx-auto mr-6 shadow-[0_0_0_3px_#2E6DB4]" style={{boxShadow: "inset 0 0 0 0 transparent, 0 0 0 3px #2E6DB4"}}>
                  {step.number}
                </div>

                <div className="flex flex-col lg:items-center mt-1 lg:mt-4">
                  <div className="text-[#2E6DB4] text-[26px] mb-3 lg:mb-0 lg:hidden">
                    <step.icon />
                  </div>
                  
                  <div className="hidden lg:flex text-[#2E6DB4] text-[26px] mt-4 mb-2">
                     <step.icon />
                  </div>

                  <h3 className="font-bold text-[#1A3C6E] text-lg text-left lg:text-center mt-1 lg:mt-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#555577] text-sm leading-relaxed text-left lg:text-center max-w-none lg:max-w-[200px] lg:mx-auto mt-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
