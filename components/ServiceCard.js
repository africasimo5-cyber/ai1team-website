"use client";

import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-[#16161f] rounded-2xl border border-white/5 p-6 w-full flex flex-col h-full group transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-[#2E6DB4]/35 hover:shadow-[0_0_30px_rgba(46,109,180,0.25),0_20px_40px_rgba(46,109,180,0.12)]"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E6DB4] to-[#9333ea] flex items-center justify-center">
        <Icon className="text-white text-[22px]" />
      </div>

      <h3 className="font-bold text-white text-lg mt-4">{title}</h3>
      
      <p className="text-[#94a3b8] text-sm leading-relaxed mt-2 flex-grow">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-[#2E6DB4] text-sm font-bold mr-2 select-none">✓</span>
              <span className="text-[#94a3b8] text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ServiceCard;
