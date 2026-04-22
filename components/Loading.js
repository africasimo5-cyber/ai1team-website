"use client";

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-50 border-t-[#2E6DB4] rounded-full"
        />
        
        {/* Inner Pulsing Circle */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 m-auto w-6 h-6 bg-[#1A3C6E] rounded-full"
        />
      </div>
    </div>
  );
};

export default Loading;
