"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import {
  FaMagnet,
  FaUsers,
  FaCogs,
  FaRobot,
  FaChartBar,
  FaPuzzlePiece,
  FaBrain,
  FaClipboardCheck
} from "react-icons/fa";
import Link from "next/link";

export const servicesData = [
  {
    icon: FaMagnet,
    title: "Lead Generation & Nurturing",
    description: "Never chase a lead manually again. We build automated funnels and follow-up sequences that capture, nurture, and convert prospects for you — 24 hours a day, 7 days a week.",
    features: [
      "Leads captured automatically from every channel",
      "Follow-ups sent without you lifting a finger",
      "Prospects nurtured until they're ready to buy",
      "More conversions with zero extra manual effort"
    ]
  },
  {
    icon: FaUsers,
    title: "Customer Relationship Management (CRM)",
    description: "Stop losing track of clients and conversations. We set up a fully organized CRM system so you always know where every lead stands and what to do next — automatically.",
    features: [
      "Every client and lead organized in one place",
      "Never forget a follow-up or miss an opportunity",
      "Your entire sales pipeline visible at a glance",
      "Automated reminders and client updates"
    ]
  },
  {
    icon: FaCogs,
    title: "Workflow Automation",
    description: "Reclaim hours every single day. We eliminate the manual, repetitive tasks draining your time by building smart workflows that run your operations on autopilot using Zapier, Make.com, and n8n.",
    features: [
      "Hours saved every week on manual tasks",
      "Zero data entry errors across your platforms",
      "Your tools all talking to each other seamlessly",
      "More time to focus on what actually grows revenue"
    ]
  },
  {
    icon: FaRobot,
    title: "AI-Powered Chatbots & Support",
    description: "Your business never sleeps. Our AI chatbots answer customer questions, qualify leads, and book appointments 24/7 — so no opportunity is ever missed, even outside business hours.",
    features: [
      "Instant responses to customers at any hour",
      "Leads qualified automatically before they reach you",
      "Appointments booked without back-and-forth emails",
      "Better customer experience without extra staff"
    ]
  },
  {
    icon: FaChartBar,
    title: "Data Analytics & Reporting",
    description: "Stop guessing what's working. We build real-time dashboards that show you exactly where your revenue comes from, what's underperforming, and what to do next — so every decision is backed by data.",
    features: [
      "See your most profitable channels at a glance",
      "Spot problems before they cost you money",
      "Reports delivered automatically — no manual compiling",
      "Confident decisions backed by real numbers"
    ]
  },
  {
    icon: FaPuzzlePiece,
    title: "Custom Integrations",
    description: "Make all your tools work as one. We connect your entire software stack so data flows seamlessly between platforms — eliminating duplication, saving time, and giving you a single source of truth.",
    features: [
      "All your business tools connected and in sync",
      "No more copying data between platforms manually",
      "One unified view of your entire operation",
      "A tech stack that works harder for your business"
    ]
  },
  {
    icon: FaBrain,
    title: "AIOS — AI Operating System",
    description: "Run your entire business on autopilot. AIOS is a fully integrated AI hub that connects all your tools, workflows, and data into one intelligent system — making decisions and taking actions so you don't have to.",
    features: [
      "Your entire business connected in one smart system",
      "Decisions made and actions taken automatically",
      "Operations running 24/7 without manual input",
      "Scale your business without scaling your workload"
    ]
  },
  {
    icon: FaClipboardCheck,
    title: "Automation Audit Service",
    description: "Find out exactly where your business is leaking time and money. Our automation audit identifies every manual process that should be automated and gives you a clear, actionable roadmap to fix it fast.",
    features: [
      "Discover hidden time and money drains in your business",
      "A clear roadmap of exactly what to automate first",
      "Prioritized quick wins for immediate results",
      "Confidence to invest in the right automation solutions"
    ]
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
            End-to-end AI automation solutions built for modern businesses
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0f0f17]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#F0F6FF]">
        <div className="section-container px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 text-center border border-[#2E6DB4]/30 shadow-2xl max-w-5xl mx-auto"
            style={{
              background: "linear-gradient(135deg, #0D2247 0%, #1A3C6E 50%, #0D2247 100%)",
            }}
          >
            {/* Advanced Glowing Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(46,109,180,0.2)_0%,transparent_70%)] rounded-full pointer-events-none z-0 mix-blend-screen" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] rounded-full pointer-events-none z-0 mix-blend-screen" />

            {/* Grid Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none z-0"
              style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
            />

            <div className="relative z-10">
              <div className="inline-block bg-[#2E6DB4]/20 border border-[#2E6DB4]/40 text-[#93c5fd] text-sm font-medium px-5 py-2 rounded-full mb-8">
                Custom Solutions
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
                Not sure which service you need?
              </h2>

              <p className="text-blue-100/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Every business is unique. Let us analyze your workflows and build a custom automation plan tailored specifically to your goals.
              </p>

              <Link
                href="/contact"
                className="bg-[#2E6DB4] hover:bg-white hover:text-[#1A3C6E] border-2 border-transparent hover:border-white text-white font-bold px-12 py-5 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(46,109,180,0.6)] inline-block"
              >
                Book a Free Discovery Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesClient;
