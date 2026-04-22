"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section className="py-20 bg-[#1A3C6E] text-white">
      <div className="section-container">
        <div className="relative overflow-hidden bg-[#0D2247] rounded-[3rem] p-12 md:p-20 text-center border border-white/5 shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Let AI1team build a smarter automation engine for your business.
            </p>
            <Link 
              href="/contact" 
              className="px-12 py-5 bg-accent hover:bg-accent/90 text-white font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-accent/30 inline-block"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
