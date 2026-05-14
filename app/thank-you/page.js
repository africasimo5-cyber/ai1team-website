"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#0f0f17] flex items-center justify-center px-6 py-20">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">

        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        >
          <FaCircleCheck className="text-7xl text-[#2E6DB4]" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-bold text-4xl text-white mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          You&apos;re In! 🎉
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg text-[#94a3b8] mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to the AI1team newsletter.
        </motion.p>

        {/* Body text */}
        <motion.p
          className="text-base text-[#94a3b8] mt-4 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          You&apos;ll receive automation insights, AI strategies, and exclusive tips to help
          your business run smarter — straight to your inbox.
        </motion.p>

        {/* Divider */}
        <motion.div
          className="w-16 h-1 bg-[#2E6DB4] mx-auto rounded-full mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        />

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/services"
            className="bg-[#2E6DB4] hover:bg-[#1A3C6E] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Explore Our Services
          </Link>
          <Link
            href="/"
            className="border border-[#2E6DB4] text-[#2E6DB4] hover:bg-[#2E6DB4] hover:text-white font-semibold px-6 py-3 rounded-full bg-transparent transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>

        {/* Small note */}
        <motion.p
          className="text-xs text-[#555577] italic mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Check your inbox for a welcome email from hello@ai1team.com
        </motion.p>

      </div>
    </div>
  );
}
