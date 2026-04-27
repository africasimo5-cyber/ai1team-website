"use client";

import Link from "next/link";
import ServiceCard from "./ServiceCard";
import { servicesData } from "@/app/services/ServicesClient";

const ServicesPreview = () => {
  return (
    <section 
      className="py-20 bg-[#0f0f17]" 
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#60a5fa] mb-4 block">
            What We Build
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            AI Automation{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">
              Built for Results
            </span>
          </h2>
          <p className="text-[#94a3b8] text-center mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            End-to-end systems that capture leads, nurture clients, and run your business — without you lifting a finger.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {servicesData.slice(0, 4).map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/services" 
            className="btn-outline px-12 py-4 inline-block"
          >
            View Full Service Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
