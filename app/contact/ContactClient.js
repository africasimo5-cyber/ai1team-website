"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { FaLinkedin } from "react-icons/fa";
import { HiMail, HiLocationMarker, HiClock } from "react-icons/hi";

const ContactClient = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Page Hero */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[480px] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A193C] opacity-[0.85]" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#C8DCFF" }}
          >
            Ready to grow your business? Let&apos;s talk.
          </motion.p>
        </div>
      </section>

      {/* 2. Two-Column Layout */}
      <section className="py-24 bg-[#F8FAFF]">
        <div className="section-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-[#1A3C6E] mb-8">Contact Information</h2>
              <p className="text-gray-600 mb-12 text-lg">
                Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#2E6DB4] text-2xl group-hover:bg-[#1A3C6E] group-hover:text-white transition-all shadow-sm">
                    <HiMail />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-[#1A3C6E] font-semibold text-lg">hello@ai1team.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#2E6DB4] text-2xl group-hover:bg-[#1A3C6E] group-hover:text-white transition-all shadow-sm">
                    <HiLocationMarker />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-[#1A3C6E] font-semibold text-lg">30 N Gould St, Sheridan, Wyoming 82801, USA</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#2E6DB4] text-2xl group-hover:bg-[#1A3C6E] group-hover:text-white transition-all shadow-sm">
                    <HiClock />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Response Time</p>
                    <p className="text-[#1A3C6E] font-semibold text-lg">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/ai1team/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-[#2E6DB4] hover:text-white transition-all shadow-sm" aria-label="LinkedIn">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactClient;
