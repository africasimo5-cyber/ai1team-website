"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "JC",
    avatarBg: "#1A3C6E",
    name: "James Carter",
    role: "CEO, NovaTech Solutions",
    quote: "AI1team completely transformed our lead generation. We went from manual follow-ups to a fully automated pipeline in under 2 weeks. Absolutely game-changing."
  },
  {
    initials: "SM",
    avatarBg: "#2E6DB4",
    name: "Sarah Mitchell",
    role: "Operations Manager, ScaleUp Co.",
    quote: "The workflow automations they built saved us 20+ hours every single week. The ROI was obvious within the first month of going live."
  },
  {
    initials: "DO",
    avatarBg: "#1A3C6E",
    name: "Daniel Okonkwo",
    role: "Founder, BrightPath Agency",
    quote: "Exceptional team. They understood our CRM needs immediately and delivered a system that actually works perfectly for our sales team."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[#F0F6FF]">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A3C6E]"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#555577] mt-2 text-lg"
          >
            Real results from real businesses
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white rounded-2xl p-8 border border-[#1A3C6E]/[0.08] hover:-translate-y-[6px] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,60,110,0.12)] overflow-hidden flex flex-col"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1A3C6E] to-[#2E6DB4]"></div>
              
              {/* Large quote mark */}
              <div className="absolute top-4 left-4 text-[80px] leading-none font-serif text-[#2E6DB4] opacity-20 select-none pointer-events-none">
                &ldquo;
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: testimonial.avatarBg }}
                  >
                    {testimonial.initials}
                  </div>
                </div>

                <div className="text-yellow-400 text-lg mb-4 tracking-widest">
                  ★★★★★
                </div>

                <p className="italic text-[#555577] text-sm leading-relaxed mb-6 flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="mt-auto">
                  <h4 className="font-bold text-[#1A1A2E] text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
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
