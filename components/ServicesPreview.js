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
          <h2 className="text-white font-bold text-3xl">
            Our Services
          </h2>
          <p className="text-[#94a3b8] text-center mt-2">
            End-to-end AI automation solutions built for modern businesses
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
