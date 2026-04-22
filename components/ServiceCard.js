"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";

const ServiceCard = ({ icon: Icon, title, description, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-blue-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 flex flex-col h-full group"
    >
      <div className="text-4xl text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon />
      </div>

      <h3 className="text-2xl font-bold text-darkText mb-4">{title}</h3>
      
      <p className="text-lightText text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-3 mt-auto">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-darkText group">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                <HiCheck className="text-xs" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ServiceCard;
