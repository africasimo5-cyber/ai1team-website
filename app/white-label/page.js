"use client";

import { motion } from "framer-motion";
import {
  FaHandshake,
  FaFileLines,
  FaMagnifyingGlass,
  FaBoxOpen,
  FaCircleCheck,
  FaBullhorn,
  FaPenRuler,
  FaChartLine,
  FaBriefcase,
  FaLaptopCode,
  FaPeopleGroup,
} from "react-icons/fa6";
import Link from "next/link";

const WhiteLabelPage = () => {
  return (
    <>
      <title>White Label Audit Services | AI1team</title>
      
      {/* SECTION 1 — HERO */}
      <section className="bg-[#0f0f17] pt-32 pb-24 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="text-center"
          >
            <span className="inline-block bg-[rgba(46,109,180,0.15)] text-[#2E6DB4] text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1">
              PARTNER PROGRAM
            </span>
            <h1 className="text-white font-bold text-4xl md:text-5xl mt-4 max-w-3xl mx-auto leading-tight">
              Offer AI Automation Audits<br className="hidden md:block"/> Under Your Own Brand
            </h1>
            <p className="text-[#94a3b8] text-lg mt-4 max-w-2xl mx-auto">
              We do the work. You take the credit.<br className="hidden md:block"/>
              AI1team powers your audit service behind the scenes — your logo, your brand, your client relationship. We stay invisible.
            </p>
            
            <motion.div 
              className="flex gap-4 mt-8 justify-center flex-wrap"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
              }}
            >
              {[
                "🔒 100% White Labeled",
                "⚡ 14-Day Delivery",
                "🤝 You Keep Full Margin"
              ].map((pill, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full px-4 py-2 text-white text-sm"
                >
                  {pill}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <button
                data-cal-link="emmanuel-ai1team/discovery-call-white-label"
                data-cal-namespace="discovery-call-white-label"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="bg-[#2E6DB4] text-white rounded-full px-8 py-4 font-bold text-base hover:bg-[#1A3C6E] transition-colors"
              >
                Become a Partner
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — HOW IT WORKS */}
      <section className="bg-[#F0F6FF] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="uppercase text-[#2E6DB4] text-xs font-bold tracking-widest text-center mb-3">
              THE PROCESS
            </h3>
            <h2 className="font-bold text-[#1A1A2E] text-3xl text-center mb-4">
              Simple. Seamless. Invisible.
            </h2>
            <p className="text-[#555577] text-center max-w-xl mx-auto">
              Four steps between your client enquiry and a delivered audit report — branded entirely as yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                icon: <FaHandshake className="text-[#2E6DB4] text-2xl mb-3 mx-auto" />,
                title: "You Sign Up as a Partner",
                desc: "Book a discovery call. We align on your needs, your clients, and set up your white label agreement."
              },
              {
                num: "02",
                icon: <FaFileLines className="text-[#2E6DB4] text-2xl mb-3 mx-auto" />,
                title: "You Send Us the Brief",
                desc: "Share your client's business details with us using our simple intake form. No technical knowledge needed from your side."
              },
              {
                num: "03",
                icon: <FaMagnifyingGlass className="text-[#2E6DB4] text-2xl mb-3 mx-auto" />,
                title: "We Run the Full Audit",
                desc: "Our team conducts the complete business audit — process mapping, automation opportunities, ROI analysis, full roadmap."
              },
              {
                num: "04",
                icon: <FaBoxOpen className="text-[#2E6DB4] text-2xl mb-3 mx-auto" />,
                title: "You Deliver the Report",
                desc: "We hand you a fully branded report with your logo and colors. You present it to your client as your own work."
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm text-center border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#2E6DB4] text-white rounded-full font-bold text-lg mx-auto mb-4 flex items-center justify-center">
                  {step.num}
                </div>
                {step.icon}
                <h3 className="font-bold text-[#1A1A2E] text-lg mb-2">{step.title}</h3>
                <p className="text-[#555577] text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT THEY RECEIVE */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="uppercase text-[#2E6DB4] text-xs font-bold tracking-widest text-center mb-3">
              WHAT&apos;S INCLUDED
            </h3>
            <h2 className="font-bold text-[#1A1A2E] text-3xl text-center">
              Everything Your Client Gets.<br className="hidden md:block"/>Everything Branded as Yours.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Fully Branded Report",
                desc: "Your logo, your agency name, your colors — zero mention of AI1team anywhere in the document."
              },
              {
                title: "Complete Process Audit",
                desc: "A thorough review of your client's business operations identifying every automation opportunity available."
              },
              {
                title: "Custom Automation Roadmap",
                desc: "A prioritized, step-by-step roadmap showing exactly what to automate and in what order for maximum ROI."
              },
              {
                title: "ROI Projections",
                desc: "Clear projections showing your client the time and money they stand to save — making your recommendation easy to say yes to."
              },
              {
                title: "Delivered in 14 Days",
                desc: "Fast turnaround so you can keep your client relationships moving without delays."
              },
              {
                title: "Confidential Partnership",
                desc: "Our partnership is fully confidential. Your clients will never know AI1team is involved — that's a promise."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F0F6FF] rounded-2xl p-6"
              >
                <FaCircleCheck className="text-[#2E6DB4] text-xl mb-3" />
                <h3 className="font-bold text-[#1A1A2E] text-base mb-1">{item.title}</h3>
                <p className="text-[#555577] text-sm mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PRICING */}
      <section className="bg-[#F0F6FF] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="uppercase text-[#2E6DB4] text-xs font-bold tracking-widest text-center mb-3">
              PARTNER PROGRAM
            </h3>
            <h2 className="font-bold text-[#1A1A2E] text-3xl text-center mb-4">
              Become an Agency Partner
            </h2>
            <p className="text-[#555577] text-center max-w-xl mx-auto">
              Every agency is different. We&apos;ll create a custom arrangement that fits your specific needs and clientele.
            </p>
          </div>

          <div className="flex justify-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-[#0f0f17] border border-[rgba(46,109,180,0.3)] rounded-2xl p-8 shadow-sm text-center flex flex-col w-full"
            >
              <h3 className="font-bold text-white text-xl mb-2">Agency Partner</h3>
              <div className="font-extrabold text-white text-3xl mb-4 mt-2">Custom Partnership</div>
              <p className="text-[#94a3b8] text-sm mb-8">Let&apos;s discuss how we can integrate our automation audits into your agency&apos;s workflow.</p>
              <ul className="text-left space-y-4 mb-8 max-w-lg mx-auto w-full">
                {[
                  "Unlimited white label audits",
                  "Full automation build delivery for your clients",
                  "Dedicated account manager",
                  "Co-selling support available",
                  "Custom SLA & NDA included",
                  "First priority on all requests"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-base text-[#cbd5e1]">
                    <FaCircleCheck className="text-[#2E6DB4] flex-shrink-0 text-lg" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                data-cal-link="emmanuel-ai1team/discovery-call-white-label"
                data-cal-namespace="discovery-call-white-label"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="w-full sm:w-auto mx-auto bg-[#1A3C6E] text-white rounded-full px-12 py-4 font-bold hover:bg-[#2E6DB4] transition-colors"
              >
                Talk With Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHO IS THIS FOR */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-[#1A1A2E] text-3xl text-center mb-16">
            Built for Every Type of Agency
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaBullhorn className="text-white text-xl" />,
                title: "Marketing Agencies",
                desc: "Add automation audits to your service stack without hiring a single new team member."
              },
              {
                icon: <FaPenRuler className="text-white text-xl" />,
                title: "Web Design Agencies",
                desc: "Offer clients a powerful next step after their website launch — automated systems that drive results."
              },
              {
                icon: <FaChartLine className="text-white text-xl" />,
                title: "Growth & SEO Agencies",
                desc: "Give clients a complete growth picture — not just traffic, but the systems to convert and retain it."
              },
              {
                icon: <FaBriefcase className="text-white text-xl" />,
                title: "Business Consultants",
                desc: "Deliver deeper value with AI automation roadmaps backed by real technical expertise."
              },
              {
                icon: <FaLaptopCode className="text-white text-xl" />,
                title: "Tech & SaaS Agencies",
                desc: "Expand your service offering with done-for-you automation audits for your existing client base."
              },
              {
                icon: <FaPeopleGroup className="text-white text-xl" />,
                title: "Freelancers & Studios",
                desc: "Punch above your weight. Offer enterprise-level automation audits as a solo operator or small team."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-[#e2e8f0] p-6 text-center shadow-sm hover:border-[#2E6DB4] hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A3C6E] to-[#2E6DB4] mx-auto mb-4 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-bold text-[#1A1A2E] text-lg mb-2">{card.title}</h3>
                <p className="text-[#555577] text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BOTTOM CTA */}
      <section className="bg-[#1A3C6E] py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white font-bold text-4xl mb-4">
              Ready to Add Automation Audits to Your Agency?
            </h2>
            <p className="text-[#94a3b8] text-lg mb-8">
              Book a free 15-minute partner call. We&apos;ll explain exactly how the white label process works and answer every question you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                data-cal-link="emmanuel-ai1team/discovery-call-white-label"
                data-cal-namespace="discovery-call-white-label"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="bg-white text-[#1A3C6E] rounded-full px-8 py-4 font-bold hover:bg-gray-100 transition-colors w-full sm:w-auto"
              >
                Book a Partner Call
              </button>
              <Link
                href="/services"
                className="border border-white text-white rounded-full px-8 py-4 font-bold bg-transparent hover:bg-white hover:text-[#1A3C6E] transition-colors w-full sm:w-auto text-center"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhiteLabelPage;
