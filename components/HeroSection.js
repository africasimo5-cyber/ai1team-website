"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import HeroIllustration from "./illustrations/HeroIllustration";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[480px] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24 md:pt-24 md:pb-32 bg-[#090d16]"
    >
      {/* Workflow Diagram Backdrop */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.16] mix-blend-screen bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/images/workflow-bg.png')" }}
      />

      {/* Premium Tech Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.14] z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(96, 165, 250, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(96, 165, 250, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '4.5rem 4.5rem',
        }}
      />
      {/* Subtle radial gradient mask overlay to fade the grid and workflow edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_15%,#090d16_75%)] z-0 pointer-events-none" />

      {/* Floating Neon Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top left blue/cyan orb */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.18)_0%,transparent_70%)] blur-2xl pointer-events-none" />
        
        {/* Bottom right violet/purple orb */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.12)_0%,transparent_70%)] blur-2xl pointer-events-none" />
        
        {/* Focused glow right behind the desktop SVG illustration */}
        <div className="absolute top-[30%] right-[10%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.15)_0%,transparent_70%)] blur-3xl hidden lg:block pointer-events-none" />
      </div>

      <div className="section-container relative z-10 px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-[#2E6DB4]/15 border border-[#2E6DB4]/30
                text-[#93c5fd] text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse" />
              AI Automation Agency
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
              Stop Losing Time, Leads &{" "}
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#60a5fa] via-[#2E6DB4] to-[#818cf8] bg-clip-text text-transparent">
                Money to Manual Work
              </span>
            </h1>

            <p
              className="max-w-2xl mx-auto lg:mx-0 mb-10 text-lg md:text-xl font-medium leading-relaxed"
              style={{ color: "#94a3b8" }}
            >
              AI1team automates your entire business operation — so you get more leads, close more clients, and reclaim your time. All on autopilot.
            </p>

            {/* Benefit Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12">
              {[
                "Save 20+ Hours Every Week",
                "Never Miss a Lead Again",
                "Your Business Runs 24/7",
              ].map((benefit) => (
                <span
                  key={benefit}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 text-white text-sm font-semibold backdrop-blur-sm"
                >
                  <FaCheck className="text-[#4ade80] text-[11px] shrink-0" />
                  {benefit}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-gradient-to-r from-[#2E6DB4] to-[#1A3C6E]
                  hover:from-[#3a7fcf] hover:to-[#22508f] text-white font-bold rounded-full
                  transition-all duration-300 shadow-[0_0_30px_rgba(46,109,180,0.4)]
                  hover:shadow-[0_0_40px_rgba(46,109,180,0.6)] w-full sm:w-auto text-center"
              >
                Get Started Free
              </Link>
              <Link
                href="/services"
                className="px-10 py-4 border border-white/25 hover:border-white/50 hover:bg-white/8
                  text-white font-semibold rounded-full transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm"
              >
                See Our Services
              </Link>
            </div>

            {/* Illustration on mobile — appears below CTAs */}
            <div className="mt-10 lg:hidden max-w-[360px] mx-auto">
              <HeroIllustration />
            </div>
          </motion.div>

          {/* Right: illustration on desktop only */}
          <motion.div
            className="hidden lg:flex flex-1 justify-center items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="max-w-[480px] w-full">
              <HeroIllustration />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
