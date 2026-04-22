"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const words = ["AI Marketing", "AI Automation"];

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat min-h-[480px] md:min-h-screen flex items-center justify-center overflow-hidden"
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
            <div className="h-[60px] md:h-[90px] overflow-hidden flex items-center justify-center mt-2 relative w-full">
               <AnimatePresence mode="wait">
                 <motion.span
                   key={textIndex}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.5 }}
                   className="text-blue-300 absolute"
                 >
                   {words[textIndex]}
                 </motion.span>
               </AnimatePresence>
            </div>
          </div>
          <p 
            className="max-w-3xl mx-auto mb-12 text-lg"
            style={{ color: "#C8DCFF" }}
          >
            AI1team delivers intelligent, data-driven marketing strategies that help businesses of all sizes scale faster and smarter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact" 
              className="px-10 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-accent/40"
            >
              Get Started
            </Link>
            <Link 
              href="/services" 
              className="px-10 py-4 border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg transition-all duration-300"
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
