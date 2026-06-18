"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[480px] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24 md:pt-24 md:pb-32"
    >
      <Image
        src="/images/hero-home.jpg"
        alt=""
        fill
        priority
        quality={85}
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-[#0A193C] opacity-[0.88] z-0" />

      {/* Subtle orb accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.2)_0%,transparent_65%)]" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.12)_0%,transparent_65%)]" />
      </div>

      <div className="section-container relative z-10 text-center px-6">
        <motion.div
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
            className="max-w-2xl mx-auto mb-10 text-lg md:text-xl font-medium leading-relaxed"
            style={{ color: "#94a3b8" }}
          >
            AI1team automates your entire business operation — so you get more leads, close more clients, and reclaim your time. All on autopilot.
          </p>

          {/* Benefit Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
