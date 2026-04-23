"use client";

import { FaRobot, FaChartLine, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";

const values = [
  {
    icon: <FaRobot />,
    title: "AI-Driven Results",
    description: "We use cutting-edge AI tools to deliver automation systems that save your business time and money."
  },
  {
    icon: <FaChartLine />,
    title: "Data-First Approach",
    description: "Every decision is backed by real-time data and analytics, ensuring your workflows are always optimized."
  },
  {
    icon: <FaBullseye />,
    title: "Tailored Strategies",
    description: "No generic templates. Every automation system is custom-built around your specific business processes."
  }
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-[#F0F6FF]" id="why-us">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Why Businesses Choose AI1team</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-darkText mb-4">{value.title}</h3>
              <p className="text-lightText leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
