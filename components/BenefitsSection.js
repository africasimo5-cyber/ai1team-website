"use client";

import { motion } from "framer-motion";
import { 
  FaClock, 
  FaUserCheck, 
  FaMoneyBillWave, 
  FaHeadset, 
  FaChartLine, 
  FaRocket 
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaClock />,
    headline: "Save 20+ Hours Every Week",
    text: "We automate the repetitive tasks eating up your day — follow-ups, data entry, notifications, reporting. You focus on growing your business, we handle the rest."
  },
  {
    icon: <FaUserCheck />,
    headline: "Never Lose a Lead Again",
    text: "Every enquiry is automatically captured, followed up, and nurtured — even at 3am. No lead falls through the cracks, ever again."
  },
  {
    icon: <FaMoneyBillWave />,
    headline: "Turn More Leads Into Paying Clients",
    text: "Our automated follow-up systems keep your business top of mind for every prospect. More touchpoints means more conversions — without extra effort from you."
  },
  {
    icon: <FaHeadset />,
    headline: "Your Business is Open 24/7",
    text: "AI chatbots handle customer questions, qualify leads, and book appointments around the clock. Your clients get instant responses even when you're offline."
  },
  {
    icon: <FaChartLine />,
    headline: "Know Exactly What's Working",
    text: "Real-time dashboards show you what's driving revenue and what's not. Make smarter decisions backed by data — not guesswork."
  },
  {
    icon: <FaRocket />,
    headline: "Scale Without Hiring More Staff",
    text: "Automation does the work of multiple employees at a fraction of the cost. Grow your operations without growing your headcount."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-[#F0F6FF]">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#1A3C6E] mb-4"
          >
            What You Actually Gain Working With AI1team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Real results for real businesses. No technical jargon — just outcomes that matter to you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(46, 109, 180, 0.1), 0 10px 10px -5px rgba(46, 109, 180, 0.04)" }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-blue-50 transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-start"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl text-[#2E6DB4]">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A3C6E] mb-3">
                  {benefit.headline}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
