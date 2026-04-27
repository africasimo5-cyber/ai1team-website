"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ServiceCard = ({ icon: Icon, title, description, features, index, variant = "dark" }) => {
  const isDark = variant === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 7) * 0.08, ease: "easeOut" }}
      className={`rounded-2xl p-6 flex flex-col h-full group transition-all duration-300 ease-in-out hover:-translate-y-1.5 ${
        isDark
          ? "bg-[#1a1a2e] border border-white/5 hover:border-[#2E6DB4]/50 hover:shadow-[0_0_30px_rgba(46,109,180,0.25),0_20px_40px_rgba(46,109,180,0.12)]"
          : "bg-white border border-gray-100 shadow-md hover:border-[#2E6DB4]/40 hover:shadow-[0_0_20px_rgba(46,109,180,0.15)]"
      }`}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E6DB4] to-[#9333ea] flex items-center justify-center shrink-0">
        <Icon className="text-white text-[22px]" />
      </div>

      <h3 className={`font-bold text-lg mt-4 ${isDark ? "text-white" : "text-[#1A3C6E]"}`}>
        {title}
      </h3>

      <p className={`text-sm leading-relaxed mt-2 flex-grow ${isDark ? "text-[#94a3b8]" : "text-[#555577]"}`}>
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-[#2E6DB4] text-sm font-bold mr-2 select-none">✓</span>
              <span className={`text-sm ${isDark ? "text-[#94a3b8]" : "text-[#555577]"}`}>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/contact"
        className={`mt-5 text-sm font-semibold transition-colors w-fit ${
          isDark
            ? "text-[#2E6DB4] hover:text-white"
            : "text-[#2E6DB4] hover:text-[#1A3C6E]"
        }`}
      >
        Learn More →
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
