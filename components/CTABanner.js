"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";

const CTABanner = ({ bgImage, calButton }) => {
  return (
    <section
      className="py-20 px-6 relative bg-cover bg-center"
      style={bgImage ? { backgroundImage: `url('${bgImage}')` } : { backgroundColor: "#1A3C6E" }}
    >
      {bgImage && <div className="absolute inset-0 bg-[#0A193C] opacity-80" />}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl border border-[#2E6DB4]/30 py-16 px-8 shadow-2xl z-10"
        style={{
          background: "linear-gradient(135deg, #0D2247 0%, #1A3C6E 50%, #0D2247 100%)",
        }}
      >
        {/* Background Orbs */}
        <div className="absolute top-[-60px] left-[-60px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(46,109,180,0.25)_0%,transparent_70%)] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(46,109,180,0.20)_0%,transparent_70%)] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 text-center">
          {/* Top Badge */}
          <div className="bg-[#2E6DB4]/20 border border-[#2E6DB4]/40 text-[#93c5fd] text-sm font-medium px-4 py-1.5 rounded-full mx-auto w-fit mb-6">Start Your Automation Journey
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Ready to Transform Your Business?
          </h2>

          <p className="text-white/70 text-base mt-4 max-w-[480px] mx-auto leading-relaxed">
            Let AI1team build a smarter automation engine for your business.
          </p>

          {/* Stats Row */}
          <div className="flex flex-row justify-center items-center gap-4 md:gap-8 mt-8">
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-xl md:text-2xl">50+</span>
              <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider">Businesses</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-xl md:text-2xl">500+</span>
              <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider">Hours Saved</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-xl md:text-2xl">98%</span>
              <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider">Satisfaction</span>
            </div>
          </div>

          {calButton ? (
            <button
              data-cal-link="emmanuel-ai1team/15min"
              data-cal-namespace="15min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="inline-flex items-center gap-2.5 bg-[#2E6DB4] hover:bg-[#1A3C6E] border-2 border-white/20 hover:border-white/40 text-white font-semibold px-10 py-4 rounded-full mt-10 mx-auto hover:shadow-[0_0_30px_rgba(46,109,180,0.5)] transition-all duration-300 cursor-pointer"
            >
              <FaCalendarCheck className="shrink-0" />
              Book Your Free Discovery Call
            </button>
          ) : (
            <Link
              href="/contact"
              className="bg-[#2E6DB4] hover:bg-[#1A3C6E] border-2 border-white/20 hover:border-white/40 text-white font-semibold px-10 py-4 rounded-full mt-10 mx-auto block w-fit hover:shadow-[0_0_30px_rgba(46,109,180,0.5)] transition-all duration-300"
            >
              Contact Us Today
            </Link>
          )}

          <p className="text-white/35 text-[10px] md:text-xs mt-4">
            No commitment required. Free discovery call.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
