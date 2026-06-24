"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import CTABanner from "@/components/CTABanner";
import {
  FaLightbulb, FaEye, FaChartLine,
  FaRocket, FaGlobe, FaBrain,
  FaCogs, FaUsers, FaCheck,
} from "react-icons/fa";

const stats = [
  { value: "25+",  label: "AI Services" },
  { value: "2",    label: "Continents" },
  { value: "24/7", label: "Always On" },
  { value: "100%", label: "Custom Built" },
];

const values = [
  {
    icon: FaLightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of the curve by continuously adopting the latest AI tools and automation frameworks — so your business always runs on what actually works today, not last year.",
  },
  {
    icon: FaEye,
    title: "Full Transparency",
    description:
      "No black boxes. We explain what we build, why it works, and show you exactly how it performs at every stage. You own the system — we just make it exceptional.",
  },
  {
    icon: FaChartLine,
    title: "Results Driven",
    description:
      "Every system we deploy is measured by one metric: your growth. If it doesn't move numbers, we fix it. Deliverables mean nothing — outcomes mean everything.",
  },
];

const AboutClient = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── 1. Hero ── */}
      <section className="relative bg-[#0f0f17] min-h-[82vh] flex items-center justify-center overflow-hidden pt-24 pb-24 md:pt-24 md:pb-32">

        {/* Glow orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-16 w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle,rgba(26,60,110,0.55)_0%,transparent_65%)]" />
          <div className="absolute -bottom-24 -right-16 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.3)_0%,transparent_65%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.08)_0%,transparent_70%)]" />
        </div>

        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-[#2E6DB4]/10 border border-[#2E6DB4]/25
              text-[#93c5fd] text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse" />
            Who We Are
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl md:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Built by Practitioners.
            <br />
            <span className="bg-gradient-to-r from-[#60a5fa] via-[#2E6DB4] to-[#818cf8] bg-clip-text text-transparent">
              Powered by AI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-base md:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;re not consultants who hand you a report. We&apos;re builders who
            automate your business — and prove it works.
          </motion.p>
        </div>

        {/* Fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ── 2. Our Story ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left: narrative */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#2E6DB4] mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] leading-tight mb-6">
                Why We Built AI1team
              </h2>
              <div className="space-y-4 text-[#555577] leading-relaxed text-[15px]">
                <p>
                  AI1team was born from one observation: most businesses are drowning in
                  manual work they shouldn&apos;t be doing. Repetitive tasks, missed
                  follow ups, disconnected tools. All eating away at growth.
                </p>
                <p>
                  Robert, Emmanuel, and a growing team of specialists spread across the
                  globe came together with a shared conviction: AI automation should be
                  practical, affordable, and proven. Not theoretical. Not enterprise only.
                </p>
                <p>
                  Every system we build is something we&apos;d use ourselves. That&apos;s
                  the standard we hold ourselves to.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-5">
                {[
                  { icon: FaGlobe,  text: "Operating across 2 continents" },
                  { icon: FaBrain,  text: "25+ AI services deployed" },
                  { icon: FaCogs,   text: "End-to-end custom builds" },
                  { icon: FaUsers,  text: "Clients from solo to scale-up" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F0F6FF] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="text-[#2E6DB4] text-sm" />
                    </div>
                    <p className="text-sm text-[#1A1A2E] font-medium leading-snug">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: dark stats card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative bg-[#0f0f17] rounded-3xl p-10 overflow-hidden border border-white/5 shadow-[0_0_60px_rgba(46,109,180,0.12)]"
            >
              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.3)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] pointer-events-none" />

              <p className="text-[10px] uppercase tracking-widest text-[#60a5fa] font-bold mb-8">
                By The Numbers
              </p>

              <div className="grid grid-cols-2 gap-8 relative">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-4xl font-extrabold text-white tracking-tight mb-1">{value}</div>
                    <div className="text-[#94a3b8] text-xs uppercase tracking-widest">{label}</div>
                  </div>
                ))}
              </div>

              <div className="relative mt-10 pt-8 border-t border-white/[0.08] space-y-3">
                {[
                  "AI-first approach to every project",
                  "No templates — every build is custom",
                  "We measure results, not deliverables",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheck className="text-[#2E6DB4] text-xs shrink-0" />
                    <span className="text-[#94a3b8] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. Mission & Vision ── */}
      <section className="py-24 bg-[#F0F6FF]">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E6DB4] mb-3 block">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E]">
              Mission &amp; Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: FaRocket,
                label: "Our Mission",
                heading: "Automation for Every Business",
                text: "To empower businesses of all sizes with AI-driven automation strategies that deliver measurable, sustainable growth — without requiring a massive tech team or enterprise budget.",
              },
              {
                icon: FaEye,
                label: "Our Vision",
                heading: "AI as the Standard, Not the Exception",
                text: "A world where every business — from solopreneurs to enterprises — has access to world-class automation powered by artificial intelligence, operating around the clock.",
              },
            ].map(({ icon: Icon, label, heading, text }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="relative bg-white rounded-3xl p-10 border border-blue-50 shadow-sm overflow-hidden
                  hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Gradient top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2E6DB4] to-[#818cf8] rounded-t-3xl" />

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E6DB4] to-[#9333ea] flex items-center justify-center mb-6">
                  <Icon className="text-white text-xl" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2E6DB4] mb-2">{label}</p>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{heading}</h3>
                <p className="text-[#555577] leading-relaxed text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Meet The Team ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E6DB4] mb-3 block">
              GLOBAL TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E]">Meet The Team</h2>
            <p className="text-[#555577] mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              A specialist team spread across the globe, united by one goal: making your business run smarter with AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mx-auto">
            {[
              {
                name: "Robert Mrak",
                role: "Founder & Lead Strategist",
                bio: "With a deep passion for AI and automation, Robert Mrak founded AI1team to bring enterprise-level automation intelligence to businesses of all sizes.",
                imageSrc: "/images/robert_img.jpg",
                delay: 0,
              },
              {
                name: "Oyebode Emmanuel",
                role: "CTO & Co-Founder",
                bio: "Oyebode Emmanuel is the technical force behind AI1team, architecting and deploying the AI systems that power every client engagement, from intelligent chatbots to comprehensive workflow automation.",
                imageSrc: "/images/emman_img.jpeg",
                delay: 0.1,
              },
              {
                name: "Sophia Reyes",
                role: "Senior Automation Specialist",
                bio: "Sophia designs and deploys complete workflow automation systems for clients across ecommerce, real estate, and professional services, turning manual bottlenecks into automated pipelines.",
                imageSrc: "/images/team_01.jpg",
                imagePosition: "object-top",
                delay: 0.2,
              },
              {
                name: "Daniel Osei",
                role: "AI Chatbot Engineer",
                bio: "Daniel builds intelligent conversational agents that handle lead capture, customer support, and appointment booking around the clock, without human input.",
                imageSrc: "/images/team_02.jpg",
                imagePosition: "object-top",
                delay: 0.3,
              },
              {
                name: "Priya Nair",
                role: "Automation Consultant & Onboarding Lead",
                bio: "Priya guides new clients through the audit process, maps their current workflows, and translates business goals into actionable automation roadmaps.",
                imageSrc: "/images/team_03.jpg",
                imagePosition: "object-top",
                delay: 0.4,
              },
              {
                name: "Marcus Webb",
                role: "Systems Integration Engineer",
                bio: "Marcus specialises in connecting tools, CRMs, and data pipelines, ensuring every automation we deploy works seamlessly with the client's existing stack.",
                imageSrc: "/images/team_04.jpg",
                imagePosition: "object-top",
                delay: 0.5,
              },
            ].map(({ delay, ...props }) => (
              <motion.div
                key={props.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className="h-full"
              >
                <TeamCard {...props} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Values ── */}
      <section className="py-24 bg-[#0f0f17]">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#60a5fa] mb-3 block">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-[#16161f] rounded-2xl border border-white/5 p-8
                  transition-all duration-300 hover:-translate-y-1.5
                  hover:border-[#2E6DB4]/35 hover:shadow-[0_0_30px_rgba(46,109,180,0.2)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E6DB4] to-[#9333ea] flex items-center justify-center mb-6">
                  <Icon className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <CTABanner bgImage="/images/hero-about.jpg" />
    </div>
  );
};

export default AboutClient;
