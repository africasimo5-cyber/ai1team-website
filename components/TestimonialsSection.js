"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    initials: "JC",
    gradient: "from-[#1A3C6E] to-[#2E6DB4]",
    name: "James Carter",
    role: "CEO, NovaTech Solutions",
    quote: "AI1team completely transformed our lead generation. We went from manual follow-ups to a fully automated pipeline in under 2 weeks. Absolutely game-changing."
  },
  {
    initials: "SM",
    gradient: "from-[#2E6DB4] to-[#818cf8]",
    name: "Sarah Mitchell",
    role: "Operations Manager, ScaleUp Co.",
    quote: "The workflow automations they built saved us 20+ hours every single week. The ROI was obvious within the first month of going live."
  },
  {
    initials: "DO",
    gradient: "from-[#1A3C6E] to-[#9333ea]",
    name: "Daniel Okonkwo",
    role: "Founder, BrightPath Agency",
    quote: "Exceptional team. They understood our CRM needs immediately and delivered a system that actually works perfectly for our sales team."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#0f0f17] relative overflow-hidden">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#60a5fa] mb-3 block">
            Client Results
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            What Our Clients Say
          </h2>
          <p className="text-[#94a3b8] mt-4 text-sm">
            Real results from real businesses — no fluff.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-[#16161f] rounded-2xl p-8 border border-white/[0.06]
                hover:-translate-y-1.5 transition-all duration-300
                hover:border-[#2E6DB4]/30 hover:shadow-[0_0_40px_rgba(46,109,180,0.15)]
                overflow-hidden flex flex-col"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2E6DB4] to-[#818cf8]" />

              {/* Large decorative quote */}
              <div className="absolute top-3 right-5 text-[72px] leading-none font-serif text-[#2E6DB4] opacity-10 select-none pointer-events-none">
                &ldquo;
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                {/* Avatar + stars row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {testimonial.initials}
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#facc15] text-xs" />
                    ))}
                  </div>
                </div>

                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 flex-grow italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-auto pt-5 border-t border-white/[0.06]">
                  <h4 className="font-bold text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#60a5fa]/70 mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
