"use client";

import { 
  FaMagnet, 
  FaHandshake, 
  FaCogs, 
  FaRobot, 
  FaChartLine, 
  FaPlug 
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaMagnet />,
    title: "Lead Generation & Nurturing",
    description: "Never chase a lead manually again. We build automated funnels and follow-up sequences that capture, nurture, and convert prospects for you — 24 hours a day, 7 days a week."
  },
  {
    icon: <FaHandshake />,
    title: "Customer Relationship Management (CRM)",
    description: "Stop losing track of clients and conversations. We set up a fully organized CRM system so you always know where every lead stands and what to do next — automatically."
  },
  {
    icon: <FaCogs />,
    title: "Workflow Automation",
    description: "Reclaim hours every single day. We eliminate the manual, repetitive tasks draining your time by building smart workflows that run your operations on autopilot using Zapier, Make.com, and n8n."
  },
  {
    icon: <FaRobot />,
    title: "AI-Powered Chatbots & Support",
    description: "Your business never sleeps. Our AI chatbots answer customer questions, qualify leads, and book appointments 24/7 — so no opportunity is ever missed, even outside business hours."
  },
  {
    icon: <FaChartLine />,
    title: "Data Analytics & Reporting",
    description: "Stop guessing what's working. We build real-time dashboards that show you exactly where your revenue comes from, what's underperforming, and what to do next — so every decision is backed by data."
  },
  {
    icon: <FaPlug />,
    title: "Custom Integrations",
    description: "Make all your tools work as one. We connect your entire software stack so data flows seamlessly between platforms — eliminating duplication, saving time, and giving you a single source of truth."
  }
];

const ServicesPreview = () => {
  return (
    <section 
      className="py-24 bg-cover bg-center" 
      id="services"
      style={{ backgroundImage: "url('/images/bg-services-section.jpg')" }}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Expertise</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-[#F8FAFF] p-8 rounded-2xl border border-blue-50 transition-all duration-300"
            >
              <div className="text-4xl text-accent mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-darkText mb-4">{service.title}</h3>
              <p className="text-lightText text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lightText mb-10 text-lg font-medium">
            ...and more including AIOS & Audit Services
          </p>
          <Link 
            href="/services" 
            className="btn-outline px-12 py-4 inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
