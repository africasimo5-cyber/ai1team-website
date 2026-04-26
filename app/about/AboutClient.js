"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import CTABanner from "@/components/CTABanner";
import { FaLightbulb, FaEye, FaChartLine } from "react-icons/fa";

const AboutClient = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Mission & Vision Section */}
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

      {/* 2. Meet The Team Section */}
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
                role="Founder & Lead Strategist"
                bio="With a deep passion for AI and automation, Robert Mrak founded AI1team to bring enterprise-level automation intelligence to businesses of all sizes."
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
                role="CTO & Co-Founder"
                bio="Based in Nigeria, Oyebode Emmanuel leads business development and client operations, ensuring every client receives tailored strategies and exceptional results."
                linkedIn="https://www.linkedin.com/in/oyebode-emmanuel-6bb936242"
                imageSrc="/images/emman_img.jpeg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Our Values Section */}
      <section className="py-24 bg-[#0f0f17]">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We embrace the latest AI tools and technologies to stay ahead.",
                icon: <FaLightbulb />
              },
              {
                title: "Transparency",
                description: "We keep clients informed at every step of the journey.",
                icon: <FaEye />
              },
              {
                title: "Results",
                description: "We measure success by your growth and ROI.",
                icon: <FaChartLine />
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#16161f] rounded-2xl border border-white/5 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2E6DB4]/35 hover:shadow-[0_0_30px_rgba(46,109,180,0.25)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E6DB4] to-[#9333ea] flex items-center justify-center mb-6">
                  <div className="text-white text-2xl">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTABanner */}
      <CTABanner bgImage="/images/hero-about.jpg" />
    </div>
  );
};

export default AboutClient;
