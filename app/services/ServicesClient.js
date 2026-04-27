"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import {
  FaMagnet,
  FaUsers,
  FaCogs,
  FaRobot,
  FaChartBar,
  FaPuzzlePiece,
  FaBrain,
  FaClipboardCheck,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMicrophone,
  FaPhoneVolume,
  FaGlobe,
  FaShareAlt,
  FaNewspaper,
  FaVideo,
  FaFilm,
  FaEnvelope,
  FaFileAlt,
  FaProjectDiagram,
  FaMicrochip,
  FaPen,
  FaCalendarCheck,
  FaTelegramPlane,
  FaChartLine,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

/* ── Keep this export — used by ServicesPreview on the home page ── */
export const servicesData = [
  {
    icon: FaMagnet,
    title: "Lead Generation & Nurturing",
    description:
      "Never chase a lead manually again. We build automated funnels and follow-up sequences that capture, nurture, and convert prospects for you — 24 hours a day, 7 days a week.",
    features: [
      "Leads captured automatically from every channel",
      "Follow-ups sent without you lifting a finger",
      "Prospects nurtured until they're ready to buy",
      "More conversions with zero extra manual effort",
    ],
  },
  {
    icon: FaUsers,
    title: "Customer Relationship Management (CRM)",
    description:
      "Stop losing track of clients and conversations. We set up a fully organized CRM system so you always know where every lead stands and what to do next — automatically.",
    features: [
      "Every client and lead organized in one place",
      "Never forget a follow-up or miss an opportunity",
      "Your entire sales pipeline visible at a glance",
      "Automated reminders and client updates",
    ],
  },
  {
    icon: FaCogs,
    title: "Workflow Automation",
    description:
      "Reclaim hours every single day. We eliminate the manual, repetitive tasks draining your time by building smart workflows that run your operations on autopilot using Zapier, Make.com, and n8n.",
    features: [
      "Hours saved every week on manual tasks",
      "Zero data entry errors across your platforms",
      "Your tools all talking to each other seamlessly",
      "More time to focus on what actually grows revenue",
    ],
  },
  {
    icon: FaRobot,
    title: "AI-Powered Chatbots & Support",
    description:
      "Your business never sleeps. Our AI chatbots answer customer questions, qualify leads, and book appointments 24/7 — so no opportunity is ever missed, even outside business hours.",
    features: [
      "Instant responses to customers at any hour",
      "Leads qualified automatically before they reach you",
      "Appointments booked without back-and-forth emails",
      "Better customer experience without extra staff",
    ],
  },
  {
    icon: FaChartBar,
    title: "Data Analytics & Reporting",
    description:
      "Stop guessing what's working. We build real-time dashboards that show you exactly where your revenue comes from, what's underperforming, and what to do next — so every decision is backed by data.",
    features: [
      "See your most profitable channels at a glance",
      "Spot problems before they cost you money",
      "Reports delivered automatically — no manual compiling",
      "Confident decisions backed by real numbers",
    ],
  },
  {
    icon: FaPuzzlePiece,
    title: "Custom Integrations",
    description:
      "Make all your tools work as one. We connect your entire software stack so data flows seamlessly between platforms — eliminating duplication, saving time, and giving you a single source of truth.",
    features: [
      "All your business tools connected and in sync",
      "No more copying data between platforms manually",
      "One unified view of your entire operation",
      "A tech stack that works harder for your business",
    ],
  },
  {
    icon: FaBrain,
    title: "AIOS — AI Operating System",
    description:
      "Run your entire business on autopilot. AIOS is a fully integrated AI hub that connects all your tools, workflows, and data into one intelligent system — making decisions and taking actions so you don't have to.",
    features: [
      "Your entire business connected in one smart system",
      "Decisions made and actions taken automatically",
      "Operations running 24/7 without manual input",
      "Scale your business without scaling your workload",
    ],
  },
  {
    icon: FaClipboardCheck,
    title: "Automation Audit Service",
    description:
      "Find out exactly where your business is leaking time and money. Our automation audit identifies every manual process that should be automated and gives you a clear, actionable roadmap to fix it fast.",
    features: [
      "Discover hidden time and money drains in your business",
      "A clear roadmap of exactly what to automate first",
      "Prioritized quick wins for immediate results",
      "Confidence to invest in the right automation solutions",
    ],
  },
];

/* ── Category sections data ── */
const categories = [
  {
    id: "ai-agents",
    label: "AI Agents & Chatbots",
    variant: "dark",
    description:
      "AI-powered assistants that handle sales, bookings, and support — 24/7, without you lifting a finger.",
    services: [
      {
        icon: FaGlobe,
        title: "Website AI Sales Agent",
        description:
          "An intelligent agent on your website that qualifies leads and books calls automatically.",
      },
      {
        icon: FaWhatsapp,
        title: "WhatsApp AI Sales Assistant",
        description:
          "Handles customer questions, qualifies prospects and closes conversations on WhatsApp.",
      },
      {
        icon: FaCalendarCheck,
        title: "WhatsApp AI Booking Assistant",
        description:
          "Lets customers book appointments directly through WhatsApp — fully automated.",
      },
      {
        icon: FaMicrophone,
        title: "Voice AI Receptionist",
        description:
          "Answers calls, handles FAQs, and books appointments using AI voice technology.",
      },
      {
        icon: FaPhoneVolume,
        title: "AI Phone Agent",
        description:
          "Automatically calls leads from a spreadsheet and books them into your calendar.",
      },
      {
        icon: FaBrain,
        title: "AI Knowledge Assistant",
        description:
          "A custom AI trained on your content — podcasts, PDFs, blogs — to answer any question about your business.",
      },
      {
        icon: FaInstagram,
        title: "Instagram DM to Sales Agent",
        description:
          "Turns Instagram comments and DMs into booked sales calls automatically.",
      },
    ],
  },
  {
    id: "social-media",
    label: "Social Media & Content",
    variant: "light",
    description:
      "Stop creating content manually. We build systems that generate, schedule and publish content across every platform — automatically.",
    services: [
      {
        icon: FaShareAlt,
        title: "Social Media Post Automation",
        description:
          "Generates and publishes unique posts across all your platforms on a schedule.",
      },
      {
        icon: FaNewspaper,
        title: "Blog to Social Media",
        description:
          "Repurposes your blog articles into platform-ready social media posts automatically.",
      },
      {
        icon: FaYoutube,
        title: "YouTube to Clips Automation",
        description:
          "Turns your YouTube videos into Shorts, Reels and TikToks without editing.",
      },
      {
        icon: FaVideo,
        title: "Image to Reels & TikToks",
        description:
          "Converts static images into scroll-stopping short-form videos automatically.",
      },
      {
        icon: FaTiktok,
        title: "TikTok AI Clone Automation",
        description:
          "Clones the style of top-performing TikToks and recreates them for your brand.",
      },
      {
        icon: FaFilm,
        title: "Cinematic Video Ads",
        description:
          "Produces professional-quality video ads from your product images and copy.",
      },
      {
        icon: FaLinkedinIn,
        title: "Newsletter to LinkedIn Posts",
        description:
          "Transforms your email newsletters into expert-level LinkedIn content automatically.",
      },
    ],
  },
  {
    id: "business-automation",
    label: "Business Automation",
    variant: "dark",
    description:
      "We eliminate the repetitive tasks draining your team's time and connect all your business tools into one seamless operation.",
    services: [
      {
        icon: FaMagnet,
        title: "CRM & Lead Nurturing Setup",
        description:
          "Full GoHighLevel setup with automated email and SMS follow-up sequences.",
      },
      {
        icon: FaEnvelope,
        title: "Email Follow-Up Automation",
        description:
          "Never let a lead go cold. Automated email sequences that follow up until they convert.",
      },
      {
        icon: FaLinkedinIn,
        title: "LinkedIn Outreach Automation",
        description:
          "Automated LinkedIn prospecting that finds and messages your ideal clients.",
      },
      {
        icon: FaChartLine,
        title: "AI Lead Generation",
        description:
          "Extracts and qualifies business leads from Google Maps automatically.",
      },
      {
        icon: FaTelegramPlane,
        title: "Telegram Business Assistant",
        description:
          "Manage your calendar, reply to emails, and handle to-do lists via Telegram.",
      },
      {
        icon: FaPuzzlePiece,
        title: "Custom Integrations",
        description:
          "Connect any combination of tools — Make.com, Zapier, n8n — for seamless data flow.",
      },
    ],
  },
  {
    id: "claude-ai",
    label: "Claude AI Services",
    variant: "light",
    description:
      "Powered by Claude — Anthropic's leading AI — we build intelligent systems that think, write, and operate your business.",
    services: [
      {
        icon: FaPen,
        title: "AI Content Writer",
        description:
          "A Claude-powered writing system that produces on-brand content, emails, and copy consistently.",
      },
      {
        icon: FaFileAlt,
        title: "SOPs & Documentation AI",
        description:
          "Claude builds and maintains your standard operating procedures automatically.",
      },
      {
        icon: FaProjectDiagram,
        title: "Claude Cowork Workflow Setup",
        description:
          "We configure Claude Cowork as your team's AI operating environment.",
      },
      {
        icon: FaMicrochip,
        title: "AIOS — AI Operating System",
        description:
          "One central hub connecting all your tools, workflows and data into one intelligent system.",
      },
      {
        icon: FaClipboardCheck,
        title: "Business Audit & Roadmap",
        description:
          "A full audit of your operations with a clear AI automation implementation roadmap.",
      },
    ],
  },
];

const tabs = categories.map(({ id, label }) => ({ id, label }));

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const navbarHeight = window.innerWidth >= 768 ? 100 : 80;
  const tabBarHeight = 60;
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight - tabBarHeight;
  window.scrollTo({ top, behavior: "smooth" });
};

const ServicesClient = () => {
  const [activeSection, setActiveSection] = useState(categories[0].id);
  const tabContainerRef = useRef(null);
  const tabRefs = useRef({});

  /* Track which section is in the viewport */
  useEffect(() => {
    const observers = [];
    categories.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-30% 0px -65% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Keep the active tab scrolled into view on mobile */
  useEffect(() => {
    const tab = tabRefs.current[activeSection];
    const container = tabContainerRef.current;
    if (!tab || !container) return;
    container.scrollTo({
      left: tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [activeSection]);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f0f17] min-h-[88vh] flex items-center justify-center overflow-hidden pt-20 md:pt-[100px]">

        {/* Layered glow orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-20 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(26,60,110,0.55)_0%,transparent_65%)]" />
          <div className="absolute -bottom-32 -right-20 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.35)_0%,transparent_65%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.10)_0%,transparent_70%)]" />
        </div>

        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.055] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#2E6DB4]/20 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">

          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 bg-[#2E6DB4]/10 border border-[#2E6DB4]/25
              text-[#93c5fd] text-xs font-semibold uppercase tracking-widest
              px-5 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse" />
            End-to-End AI Automation Agency
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-[4.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            Everything Your Business<br className="hidden md:block" />
            Needs to Run on{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] via-[#2E6DB4] to-[#818cf8] bg-clip-text text-transparent">
              Autopilot
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            className="text-base md:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-12"
          >
            From AI agents and content automation to full business workflow systems —
            we build the infrastructure that scales your business without scaling your team.
          </motion.p>

          {/* Category chips */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {[
              { label: "AI Agents & Chatbots",   Icon: FaRobot,    id: "ai-agents" },
              { label: "Social Media & Content",  Icon: FaShareAlt, id: "social-media" },
              { label: "Business Automation",     Icon: FaCogs,     id: "business-automation" },
              { label: "Claude AI Services",      Icon: FaBrain,    id: "claude-ai" },
            ].map(({ label, Icon, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="group flex items-center gap-2 bg-white/5 hover:bg-[#2E6DB4]/20
                  border border-white/10 hover:border-[#2E6DB4]/50
                  text-[#94a3b8] hover:text-white
                  text-sm font-medium px-5 py-2.5 rounded-full
                  transition-all duration-200 backdrop-blur-sm"
              >
                <Icon className="text-[#2E6DB4] group-hover:text-[#60a5fa] text-sm transition-colors duration-200" />
                {label}
              </button>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.48 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-white/[0.07]"
          >
            {[
              { value: "25+",  label: "AI Services" },
              { value: "4",    label: "Specializations" },
              { value: "24/7", label: "Always On" },
              { value: "100%", label: "Custom Built" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{value}</div>
                <div className="text-[11px] text-[#94a3b8] mt-1 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#0f0f17] to-transparent pointer-events-none" />
      </section>

      {/* ── Sticky Category Nav ── */}
      <div className="sticky top-20 md:top-[100px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div
            ref={tabContainerRef}
            className="flex overflow-x-auto gap-1 py-3 scrollbar-hide"
          >
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                ref={(el) => (tabRefs.current[id] = el)}
                onClick={() => scrollToSection(id)}
                className={`relative shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                  activeSection === id
                    ? "text-white"
                    : "text-[#555577] hover:text-[#1A3C6E]"
                }`}
              >
                {activeSection === id && (
                  <motion.span
                    layoutId="active-tab-pill"
                    className="absolute inset-0 bg-[#2E6DB4] rounded-full shadow-md shadow-[#2E6DB4]/30"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Category Sections ── */}
      {categories.map((cat) => {
        const isDark = cat.variant === "dark";
        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`py-20 md:py-28 ${isDark ? "bg-[#0f0f17]" : "bg-[#F0F6FF]"}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Section header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mb-12 max-w-2xl"
              >
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full ${
                    isDark
                      ? "bg-[#2E6DB4]/20 text-[#93c5fd]"
                      : "bg-[#2E6DB4]/10 text-[#2E6DB4]"
                  }`}
                >
                  {cat.label}
                </span>
                <p className={`text-base md:text-lg leading-relaxed ${isDark ? "text-[#94a3b8]" : "text-[#555577]"}`}>
                  {cat.description}
                </p>
              </motion.div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((service, i) => (
                  <ServiceCard
                    key={i}
                    {...service}
                    index={i}
                    variant={cat.variant}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Bottom CTA ── */}
      <section className="py-24 bg-[#F0F6FF]">
        <div className="max-w-6xl mx-auto px-6">
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
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(46,109,180,0.2)_0%,transparent_70%)] rounded-full pointer-events-none z-0 mix-blend-screen" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] rounded-full pointer-events-none z-0 mix-blend-screen" />
            <div
              className="absolute inset-0 opacity-10 pointer-events-none z-0"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative z-10">
              <div className="inline-block bg-[#2E6DB4]/20 border border-[#2E6DB4]/40 text-[#93c5fd] text-sm font-medium px-5 py-2 rounded-full mb-8">
                Custom Solutions
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
                Not sure which service you need?
              </h2>
              <p className="text-blue-100/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Every business is unique. Let us analyze your workflows and build a custom automation
                plan tailored specifically to your goals.
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
