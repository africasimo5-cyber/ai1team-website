"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import CTABanner from "@/components/CTABanner";

const AboutClient = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Page Hero */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[480px] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-about.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A193C] opacity-[0.85]" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About AI1team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#C8DCFF" }}
          >
            We are a team of AI automation specialists helping businesses grow through intelligent, data-driven strategies.
          </motion.p>
        </div>
      </section>

      {/* 2. Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-[#F8FAFF] p-10 rounded-3xl border border-blue-50"
            >
              <h2 className="text-2xl font-bold text-[#1A3C6E] mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses of all sizes with AI-driven automation strategies that deliver measurable, sustainable growth.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[#F8FAFF] p-10 rounded-3xl border border-blue-50"
            >
              <h2 className="text-2xl font-bold text-[#1A3C6E] mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where every business — from startups to enterprises — has access to world-class automation powered by artificial intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Meet The Team Section */}
      <section className="py-24 bg-[#F0F6FF]">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Meet The Team</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <TeamCard
                name="Robert Mrak"
                role="CEO & Lead Strategist"
                bio="With a deep passion for AI and digital marketing, Robert Mrak founded AI1team to bring enterprise-level  marketing and automation intelligence to businesses of all sizes."
                linkedIn="https://www.linkedin.com/in/mrakrobert/"
                imageSrc="/images/robert_img.jpg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <TeamCard
                name="Oyebode Emmanuel"
                role="Developer & Operations Director"
                bio="Based in Nigeria, Oyebode Emmanuel leads business development and client operations, ensuring every client receives tailored strategies and exceptional results."
                linkedIn="https://www.linkedin.com/in/oyebode-emmanuel-6bb936242"
                imageSrc="/images/emman_img.jpeg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Our Values Section */}
      <section
        className="py-24 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-values.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A193C] opacity-60" />
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
              <h3 className="text-xl font-bold text-[#1A3C6E] mb-3">Innovation</h3>
              <p className="text-gray-500 text-sm">We embrace the latest AI tools and technologies</p>
            </div>
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
              <h3 className="text-xl font-bold text-[#1A3C6E] mb-3">Transparency</h3>
              <p className="text-gray-500 text-sm">We keep clients informed at every step</p>
            </div>
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
              <h3 className="text-xl font-bold text-[#1A3C6E] mb-3">Results</h3>
              <p className="text-gray-500 text-sm">We measure success by your growth, not just our effort</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTABanner */}
      <CTABanner />
    </div>
  );
};

export default AboutClient;
