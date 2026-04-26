"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[480px] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24 md:py-0"
      style={{ backgroundImage: "url('/images/hero-home.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#0A193C] opacity-[0.85] z-0" />

      <div className="section-container relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-white drop-shadow-lg">
            Stop Losing Time, Leads & <br className="hidden md:block" /> Money to Manual Work
          </h1>

          <p
            className="max-w-3xl mx-auto mb-10 text-xl md:text-2xl font-medium leading-relaxed"
            style={{ color: "#C8DCFF" }}
          >
            AI1team automates your entire business operation — so you get more leads, close more clients, and reclaim your time. All on autopilot.
          </p>

          {/* Benefit Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              "Save 20+ Hours Every Week",
              "Never Miss a Lead Again",
              "Your Business Runs 24/7"
            ].map((benefit, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-sm"
              >
                <span className="text-green-400 mr-2">📍</span>
                {benefit}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="px-10 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-accent/40 w-full sm:w-auto text-center"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg transition-all duration-300 w-full sm:w-auto text-center"
            >
              See How It Works
            </Link>
          </div>

          {/* Trusted Logos Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12"
          >
            <p className="text-sm text-center mb-4 text-white/50">
              Trusted by businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                "NovaTech",
                "ScaleUp Co.",
                "BrightPath",
                "CoreFlow",
                "Nexus Labs"
              ].map((company, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-center bg-white/10 border border-white/10 rounded-lg w-28 h-10 backdrop-blur-sm"
                >
                  <span className="text-white/40 text-xs font-medium">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
