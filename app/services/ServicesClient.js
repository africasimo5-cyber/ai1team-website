"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { 
  FaMagnet, 
  FaHandshake, 
  FaCogs, 
  FaRobot, 
  FaChartLine, 
  FaPlug 
} from "react-icons/fa";
import Link from "next/link";

const servicesData = [
  {
    icon: FaMagnet,
    title: "Lead Generation & Nurturing",
    description: "Using GoHighLevel to create landing pages, funnels, and automated follow-up sequences that capture leads and nurture them through email and SMS.",
    features: ["Landing page & funnel building", "Automated email sequences", "SMS follow-up campaigns", "Lead scoring & segmentation"]
  },
  {
    icon: FaHandshake,
    title: "Customer Relationship Management (CRM)",
    description: "Setting up and customizing GoHighLevel as a CRM to help businesses manage their leads, track interactions, and improve client relationships.",
    features: ["GoHighLevel CRM setup", "Pipeline management", "Contact tracking & history", "Automated client follow-ups"]
  },
  {
    icon: FaCogs,
    title: "Workflow Automation",
    description: "Using Zapier, Make.com, and n8n to automate repetitive tasks — like syncing data between platforms, sending notifications, and updating records — so businesses save time and reduce manual effort.",
    features: ["Zapier & Make.com integrations", "n8n advanced workflows", "Cross-platform data syncing", "Automated notifications & alerts"]
  },
  {
    icon: FaRobot,
    title: "AI-Powered Chatbots & Support",
    description: "Integrating AI chatbots that handle customer queries, qualify leads, and provide support 24/7, improving response times and customer experience.",
    features: ["AI chatbot design & deployment", "Lead qualification bots", "24/7 customer support automation", "Website & WhatsApp integration"]
  },
  {
    icon: FaChartLine,
    title: "Data Analytics & Reporting",
    description: "Building custom dashboards and reports that use AI to analyze business data, generate insights, and help businesses make informed decisions.",
    features: ["Custom dashboard creation", "Automated reporting", "AI-driven data insights", "KPI tracking & visualization"]
  },
  {
    icon: FaPlug,
    title: "Custom Integrations",
    description: "Developing bespoke integrations that connect various business tools and platforms, ensuring seamless data flow and unified operations.",
    features: ["API integrations", "Custom code solutions", "Multi-platform connectivity", "Seamless data flow automation"]
  }
];

const ServicesClient = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[480px] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-services.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A193C] opacity-[0.85]" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our AI Automation Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "#C8DCFF" }}
          >
            Everything your business needs to grow in the digital age
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#F8FAFF]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Not sure which service you need?</h2>
              <p className="text-blue-100 text-lg mb-10 text-center mx-auto max-w-2xl">
                Let us build a custom plan tailored to your business goals.
              </p>
              <Link 
                href="/contact" 
                className="btn-primary px-12 py-4 shadow-xl shadow-accent/20"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesClient;
