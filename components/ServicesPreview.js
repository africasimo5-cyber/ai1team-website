"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import { servicesData } from "@/app/services/ServicesClient";
import AutomationIllustration from "./illustrations/AutomationIllustration";
import AgentsIllustration from "./illustrations/AgentsIllustration";

const ServicesPreview = () => {
  const [activeTab, setActiveTab] = useState("automation");

  return (
    <section 
      className="py-24 bg-[#090d16] relative overflow-hidden" 
      id="services"
    >
      {/* Background decoration orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.05)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#60a5fa] mb-4 block">
            What We Build
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            AI Automation{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">
              Built for Results
            </span>
          </h2>
          <p className="text-[#94a3b8] text-center mt-4 max-w-xl mx-auto text-base leading-relaxed">
            End-to-end systems that capture leads, nurture clients, and run your operations — without you lifting a finger.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Interactive Showcase */}
          <div className="col-span-1 lg:col-span-5 lg:sticky lg:top-28">
            <div className="mb-6 text-center lg:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Interactive Showcase</h3>
              <p className="text-xs text-[#94a3b8] max-w-sm mx-auto lg:mx-0">
                Explore our automated architecture engine and smart conversation systems live.
              </p>
            </div>

            {/* Tab selector */}
            <div className="flex bg-[#121624] p-1.5 rounded-full border border-white/[0.06] max-w-xs sm:max-w-sm mx-auto lg:mx-0 mb-6">
              <button
                onClick={() => setActiveTab("automation")}
                className={`relative flex-1 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
                  activeTab === "automation" ? "text-white" : "text-[#94a3b8] hover:text-white"
                }`}
              >
                {activeTab === "automation" && (
                  <motion.span
                    layoutId="active-showcase-tab"
                    className="absolute inset-0 bg-[#2E6DB4] rounded-full shadow-md shadow-[#2E6DB4]/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Workflow Automation</span>
              </button>
              <button
                onClick={() => setActiveTab("agents")}
                className={`relative flex-1 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
                  activeTab === "agents" ? "text-white" : "text-[#94a3b8] hover:text-white"
                }`}
              >
                {activeTab === "agents" && (
                  <motion.span
                    layoutId="active-showcase-tab"
                    className="absolute inset-0 bg-[#2E6DB4] rounded-full shadow-md shadow-[#2E6DB4]/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">AI Chatbots & Agents</span>
              </button>
            </div>

            {/* Showcase Box */}
            <div className="relative w-full max-w-[360px] mx-auto lg:mx-0 p-8 rounded-3xl bg-[#111422]/60 border border-white/[0.06] shadow-2xl overflow-hidden min-h-[320px] flex items-center justify-center group backdrop-blur-md">
              {/* Backlight glows */}
              <div className="absolute -left-10 -top-10 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.18)_0%,transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-700 blur-xl" />
              <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.1)_0%,transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-700 blur-xl" />
              
              <div className="w-full relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full flex items-center justify-center"
                  >
                    {activeTab === "automation" ? <AutomationIllustration /> : <AgentsIllustration />}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-4 right-4 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active System
              </div>
            </div>
          </div>

          {/* Right Column: Clean 2-Column Cards Grid */}
          <div className="col-span-1 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {servicesData.slice(0, 4).map((service, index) => (
                <ServiceCard 
                  key={index} 
                  {...service} 
                  index={index} 
                />
              ))}
            </div>
          </div>

        </div>

        <div className="text-center">
          <Link 
            href="/services" 
            className="btn-outline px-12 py-4 inline-block text-sm font-semibold hover:bg-white/5 transition-colors rounded-full"
          >
            View Full Service Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
