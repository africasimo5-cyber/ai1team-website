"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "AI1team completely transformed our lead generation. We went from manual follow-ups to a fully automated pipeline in under 2 weeks. Absolutely game-changing.",
    name: "James Carter",
    title: "CEO, NovaTech Solutions",
    initials: "JC",
    avatarColor: "#2E6DB4",
  },
  {
    quote:
      "The workflow automations they built saved us 20+ hours every single week. The ROI was obvious within the first month of going live.",
    name: "Sarah Mitchell",
    title: "Operations Manager, ScaleUp Co.",
    initials: "SM",
    avatarColor: "#1A3C6E",
  },
  {
    quote:
      "Exceptional team. They understood our CRM needs immediately and delivered a system that actually works perfectly for our sales team.",
    name: "Daniel Osei",
    title: "Sales Director, BrightPath Agency",
    initials: "DO",
    avatarColor: "#2E6DB4",
  },
  {
    quote:
      "We were drowning in repetitive admin tasks. AI1team built us an automation system in 10 days that now handles everything. Our team finally has time to focus on what actually matters.",
    name: "Priya Nambiar",
    title: "Founder, Elevate HR Solutions",
    initials: "PN",
    avatarColor: "#1A3C6E",
  },
  {
    quote:
      "Our WhatsApp response time went from hours to seconds after AI1team set up our AI agent. We've seen a 40% increase in booked appointments since launch. Worth every penny.",
    name: "Marcus Webb",
    title: "Managing Director, Webb & Co. Consulting",
    initials: "MW",
    avatarColor: "#2E6DB4",
  },
  {
    quote:
      "The audit alone was worth it. They mapped out exactly where we were losing time and money. The roadmap they delivered was clear, actionable, and spot on. We implemented it within a month.",
    name: "Lena Hoffmann",
    title: "COO, Struktur Digital GmbH",
    initials: "LH",
    avatarColor: "#1A3C6E",
  },
];

// mr-6 on each card (not gap on track) ensures cell width = card + 24px
// so -50% translate lands exactly on card 7 — perfectly seamless loop
const TestimonialCard = ({ testimonial }) => (
  <div className="w-72 md:w-80 shrink-0 mr-6 bg-[#1a1a2e] border border-[rgba(46,109,180,0.3)] rounded-2xl p-6 shadow-md">
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-[#f59e0b] text-sm" />
      ))}
    </div>
    <p className="text-[#cbd5e1] text-sm italic leading-relaxed mb-4">
      &ldquo;{testimonial.quote}&rdquo;
    </p>
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
        style={{ backgroundColor: testimonial.avatarColor }}
      >
        {testimonial.initials}
      </div>
      <div>
        <div className="font-semibold text-white text-sm">{testimonial.name}</div>
        <div className="text-xs text-[#2E6DB4]">{testimonial.title}</div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-20 bg-[#0f0f17]">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
        .marquee-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section header */}
      <div className="text-center mb-12 px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#2E6DB4] mb-3 block">
          Client Results
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What Our Clients Say
        </h2>
        <p className="text-[#94a3b8] text-base mt-2">
          Real results from real businesses — no fluff.
        </p>
      </div>

      {/* Marquee container */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left fade overlay */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0f0f17, transparent)" }}
        />
        {/* Right fade overlay */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0f0f17, transparent)" }}
        />

        {/* Scrolling track — 6 cards duplicated = 12 total for seamless loop */}
        <div
          className={`marquee-track flex w-fit py-4 pl-6${paused ? " paused" : ""}`}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
