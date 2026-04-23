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
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight flex flex-col items-center text-white">
            <span className="mb-2">Grow Your Business With</span>
            <span className="drop-shadow-2xl">The Power of</span>
            <div className="h-auto flex items-center justify-center mt-2 relative w-full">
              <span className="text-blue-300">
                AI Automation
              </span>
            </div>
          </div>
          <p
            className="max-w-3xl mx-auto mb-16 md:mb-12 text-lg"
            style={{ color: "#C8DCFF" }}
          >
            AI1team delivers intelligent, data-driven automation strategies that help businesses of all sizes scale faster and smarter.
          </p>

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
              View Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
