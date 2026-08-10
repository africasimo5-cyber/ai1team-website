"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// UPDATE THIS when the real date is confirmed
const EVENT_DATE = "Saturday 15 August 2026 at 6:00pm WAT";

// UPDATE THIS to match the real event date and time exactly
const COUNTDOWN_TARGET = new Date("2026-08-15T18:00:00");

const scrollToRegister = () => {
  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
};

const hosts = [
  {
    photo: "/images/robert_img.jpg",
    initials: "RM",
    badge: "HOST",
    badgeBg: "#1A3C6E",
    name: "Robert Mrak",
    title: "CEO and Founder, AI1team",
    description: "Robert leads AI1team's strategy and business development. He built the BizOS Partner Program and will be hosting this session.",
  },
  {
    photo: "/images/emman_img.jpeg",
    initials: "EO",
    badge: "PRESENTER",
    badgeBg: "#2E6DB4",
    name: "Emmanuel Oyebode",
    title: "Co-Founder and Technical Director, AI1team",
    description: "Emmanuel built and runs the technical side of BizOS. He will be walking you through exactly how the partner program works and how to get started.",
  },
];

const HostPhoto = ({ src, alt, initials }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-28 h-28 rounded-full bg-[#1A3C6E] mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl">
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={120}
      height={120}
      className="w-28 h-28 rounded-full mx-auto object-cover mb-6"
      style={{ border: "3px solid #2E6DB4" }}
      onError={() => setImgError(true)}
    />
  );
};

const sessionBlocks = [
  {
    number: "01",
    title: "How the program works",
    text: "A clear walkthrough of the partner program structure, who it is for, and what being a partner actually involves.",
  },
  {
    number: "02",
    title: "How commission is calculated",
    text: "We will go through exactly how commission is worked out, when it is paid, and what happens when a referred business upgrades or changes their plan.",
  },
  {
    number: "03",
    title: "How referral links work",
    text: "A practical look at how your referral link tracks signups, what counts as a successful referral, and how to share the link effectively.",
  },
  {
    number: "04",
    title: "How to get started",
    text: "By the end of the session you will know exactly what to do next. We will also take questions live at the end of the call.",
  },
];

export default function BizOSPartnerEventPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    document.title = "BizOS Partner Program Live Session | AI1team";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = COUNTDOWN_TARGET - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/partner-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen -mt-[6.25rem]">
      {/* Announcement bar */}
      <div className="py-3 px-6" style={{ backgroundColor: "#2E6DB4" }}>
        <p className="text-center text-sm text-white font-medium">
          You are invited to a live session on the BizOS Partner Program. Register below to reserve your spot.
        </p>
      </div>

      {/* Section 1 — Hero */}
      <section className="relative bg-[#0f0f17] flex items-center justify-center overflow-hidden pt-24 pb-24 md:pt-24 md:pb-32">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Image
            src="/crm_logo.png"
            alt="BizOS"
            height={72}
            width={240}
            className="h-16 md:h-[72px] w-auto mx-auto mb-8 block"
            priority
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase text-[#2E6DB4] text-xs font-semibold tracking-widest"
          >
            Live session
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white font-bold text-4xl md:text-5xl mt-4 max-w-3xl mx-auto text-center leading-tight"
          >
            Learn how to earn recurring commission by referring businesses to BizOS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#94a3b8] text-lg mt-6 max-w-2xl mx-auto text-center"
            style={{ lineHeight: 1.8 }}
          >
            AI1team is hosting a one hour live session walking through the BizOS Partner Program. If you refer a business and they subscribe, you earn commission every month they stay on. This call explains exactly how it works and how to get started.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white font-semibold text-lg mt-8 text-center"
          >
            Date and time: {EVENT_DATE}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="flex gap-4 justify-center mt-6">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl px-5 py-4 text-center min-w-16"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <p className="text-white font-bold text-4xl" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {item.value}
                  </p>
                  <p className="text-[#94a3b8] text-xs uppercase tracking-widest mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#555577] text-center mt-4">
              Countdown to the live session
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#94a3b8] text-sm mt-2 text-center"
          >
            One hour. Hosted on Google Meet. Free to attend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <button
              onClick={scrollToRegister}
              className="bg-white text-[#1A3C6E] rounded-full px-8 py-4 font-bold text-base hover:bg-[#F0F6FF] transition-all mx-auto block w-fit"
            >
              Reserve Your Spot Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Video placeholder section */}
      <section className="py-20" style={{ backgroundColor: "#F0F6FF" }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="uppercase text-[#2E6DB4] text-xs font-bold tracking-widest text-center mb-4">
            Introduction
          </p>
          <h2 className="text-[#1A1A2E] font-bold text-2xl text-center mb-3">
            Watch this before the session.
          </h2>
          <p className="text-[#555577] text-sm text-center mb-10">
            A short introduction to the BizOS Partner Program and what the live session will cover.
          </p>

          {/*
            Note for Emmanuel: When the video is ready, replace this entire placeholder div with:

            <div style={{position:'relative',paddingBottom:'56.25%',height:0,overflow:'hidden',borderRadius:'16px'}}>
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:'none'}}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="BizOS Partner Program Introduction"
              />
            </div>
          */}
          <div
            className="relative w-full aspect-video rounded-2xl overflow-hidden"
            style={{ backgroundColor: "#1a1a2e", border: "1px solid rgba(46,109,180,0.3)" }}
          >
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ border: "2px solid rgba(255,255,255,0.3)" }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderLeft: "18px solid white",
                    marginLeft: "4px",
                  }}
                />
              </div>
              <p className="text-[#94a3b8] text-sm mt-4">Introduction video coming soon.</p>
              <p className="text-[#555577] text-xs mt-1">We will update this page once the video is ready.</p>
            </div>
          </div>

          <button
            onClick={scrollToRegister}
            className="bg-[#2E6DB4] text-white rounded-full px-8 py-4 font-bold text-base hover:bg-[#1A3C6E] transition-all mt-10 mx-auto block w-fit"
          >
            Reserve Your Spot Now
          </button>
        </div>
      </section>

      {/* Meet Your Hosts section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase text-[#2E6DB4] text-xs font-bold tracking-widest text-center mb-4">
            Your hosts
          </p>
          <h2 className="text-[#1A1A2E] font-bold text-3xl text-center mb-4">
            Meet the people running this session.
          </h2>
          <p className="text-[#555577] text-base text-center max-w-xl mx-auto mb-12" style={{ lineHeight: 1.8 }}>
            This is a live, interactive session. You will be speaking directly with the people who built BizOS and run the partner program.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {hosts.map((host, index) => (
              <motion.div
                key={host.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-2xl p-8 text-center shadow-sm"
                style={{ backgroundColor: "#F0F6FF" }}
              >
                <HostPhoto src={host.photo} alt={host.name} initials={host.initials} />

                <span
                  className="text-white text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1 inline-block mb-4"
                  style={{ backgroundColor: host.badgeBg }}
                >
                  {host.badge}
                </span>

                <h3 className="text-[#1A1A2E] font-bold text-xl mb-1">{host.name}</h3>
                <p className="text-[#2E6DB4] text-sm font-semibold mb-3">{host.title}</p>
                <p className="text-[#555577] text-sm" style={{ lineHeight: 1.8 }}>
                  {host.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — What the program is */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#2E6DB4] mb-4">
            The partner program
          </p>
          <h2 className="text-[#1A1A2E] font-bold text-3xl max-w-2xl mx-auto text-center">
            You refer businesses. They subscribe. You earn every month they stay.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-12">
            <div>
              <h3 className="font-bold text-[#1A1A2E] text-xl mb-4">How it works</h3>
              <p className="text-[#555577] text-base" style={{ lineHeight: 1.9 }}>
                You refer a business to BizOS using your partner referral link. If they sign up and subscribe to a paid plan, you earn a percentage of their monthly subscription for as long as they remain a subscriber. The commission is recurring, meaning it continues month after month, not just on the first payment.
                <br /><br />
                This is not a passive income claim. It requires actually referring real businesses that go on to subscribe. The more businesses you refer and retain, the more the commission adds up over time.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#1A1A2E] text-xl mb-4">Commission rates</h3>
              <div className="flex flex-col gap-4">
                <div
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "#F0F6FF", borderLeft: "4px solid #2E6DB4" }}
                >
                  <p className="uppercase text-[#2E6DB4] text-xs font-bold tracking-widest mb-2">
                    Founding partner rate
                  </p>
                  <p className="font-bold text-[#1A1A2E] text-4xl">20%</p>
                  <p className="text-[#555577] text-sm mt-2" style={{ lineHeight: 1.7 }}>
                    Available for the first six months of the program. Partners who join during this period lock in the founding rate for their existing referrals.
                  </p>
                </div>

                <div
                  className="bg-white rounded-2xl p-6"
                  style={{ border: "1px solid #e2e8f0" }}
                >
                  <p className="uppercase text-[#555577] text-xs font-semibold tracking-widest mb-2">
                    Standard rate
                  </p>
                  <p className="font-bold text-[#1A1A2E] text-4xl">10%</p>
                  <p className="text-[#555577] text-sm mt-2" style={{ lineHeight: 1.7 }}>
                    The ongoing rate after the founding period closes. Still recurring on every active subscriber you referred.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={scrollToRegister}
            className="bg-[#2E6DB4] text-white rounded-full px-8 py-4 font-bold text-base hover:bg-[#1A3C6E] transition-all mt-12 mx-auto block w-fit"
          >
            Register for the Session
          </button>
        </div>
      </section>

      {/* Section 3 — What the session covers */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F0F6FF" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#2E6DB4] mb-4">
            What we will cover
          </p>
          <h2 className="text-[#1A1A2E] font-bold text-3xl text-center max-w-2xl mx-auto">
            One hour. Everything you need to know to get started.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {sessionBlocks.map((block) => (
              <div key={block.number} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-[#2E6DB4] text-3xl mb-3">{block.number}</p>
                <h3 className="font-bold text-[#1A1A2E] text-lg mb-2">{block.title}</h3>
                <p className="text-[#555577] text-sm" style={{ lineHeight: 1.8 }}>
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Registration form */}
      <section id="register" className="bg-white py-20 px-6">
        <div className="max-w-lg mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#2E6DB4] mb-4">
            Register
          </p>
          <h2 className="text-[#1A1A2E] font-bold text-3xl text-center">
            Reserve your spot for the live session.
          </h2>
          <p className="text-[#555577] text-center mt-4 max-w-lg mx-auto">
            Enter your name and email below. We will confirm your registration and send the Google Meet link separately, closer to the date.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-lg mx-auto mt-12">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <h3 className="font-bold text-[#1A1A2E] text-2xl">
                    You are registered.
                  </h3>
                  <p className="text-[#555577] text-base mt-3 max-w-sm mx-auto" style={{ lineHeight: 1.7 }}>
                    A confirmation email is on its way to {formData.email}. If you do not see it in your inbox within a few minutes, please check your promotions tab or your spam folder. The Google Meet link will be sent separately, closer to the date of the session.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4">
                    <label className="font-semibold text-sm text-[#1A1A2E] mb-1 block">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Amara Okonkwo"
                      className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#2E6DB4] focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="font-semibold text-sm text-[#1A1A2E] mb-1 block">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. amara@company.com"
                      className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#2E6DB4] focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <p className="text-xs text-[#555577] text-center mb-4 max-w-sm mx-auto" style={{ lineHeight: 1.7 }}>
                    After registering, you will receive a confirmation email from hello@ai1team.com. If you do not see it within a few minutes, check your promotions tab or spam folder.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#2E6DB4] text-white rounded-full py-4 font-semibold hover:bg-[#1A3C6E] transition-colors disabled:opacity-60"
                  >
                    {loading ? "Registering..." : "Register for this session"}
                  </button>

                  {error && (
                    <p style={{ color: "#f87171", fontSize: "13px", marginTop: "8px", textAlign: "center" }}>
                      {error}
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Section 5 — Final note */}
      <section className="py-16 px-6 text-center" style={{ backgroundColor: "#1A3C6E" }}>
        <h2 className="text-white font-bold text-3xl max-w-2xl mx-auto">
          This is a program for people willing to do the actual work of referring real businesses.
        </h2>
        <p className="text-[#94a3b8] text-base mt-6 max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
          The commission is real and it is recurring. But it comes from referring businesses that genuinely benefit from BizOS, not from sharing a link and hoping for the best. If that is the kind of partner program you are looking for, this session is for you.
        </p>
        <p className="mt-8">
          <a
            href="/bizos"
            className="text-[#94a3b8] text-sm underline hover:text-white transition-colors"
          >
            Learn more about BizOS at ai1team.com/bizos
          </a>
        </p>
      </section>

      {/* Earnings disclaimer */}
      <section
        className="py-10 px-6"
        style={{ backgroundColor: "#0f0f17", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase text-[#555577] text-xs font-semibold tracking-widest mb-4">
            Earnings disclaimer
          </p>
          <p className="text-[#555577] text-xs max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
            Participation in the AI1team BizOS Partner Program does not guarantee any specific level of earnings. Commission is earned only when a referred business signs up for a paid BizOS subscription and remains subscribed. Earnings depend entirely on the number of qualifying referrals made, the plans those businesses subscribe to, and how long they remain active subscribers. Individual results will vary. AI1team makes no representation that any particular level of income can or will be achieved through participation in this program.
          </p>
        </div>
      </section>
    </div>
  );
}
