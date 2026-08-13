"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
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
    imagePosition: "center 75%",
    alt: "Robert Mrak, Host",
    badge: "HOST",
    badgeBg: "#1A3C6E",
    name: "Robert Mrak",
    title: "Founder and CEO, AI1team",
    description: "Robert leads AI1team's strategy and built the BizOS Partner Program from the ground up. He will be opening the session and walking you through the bigger picture of where the program is going.",
  },
  {
    photo: "/images/emman_img.jpeg",
    imagePosition: "center top",
    alt: "Emmanuel Oyebode, Presenter",
    badge: "PRESENTER",
    badgeBg: "#2E6DB4",
    name: "Emmanuel Oyebode",
    title: "Co-Founder and Technical Director, AI1team",
    description: "Emmanuel built and runs the technical infrastructure behind BizOS. He will be taking you through exactly how the partner program works in practice, how commission is tracked, and how to get your first referral across the line.",
  },
];

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
      <section
        className="relative flex items-center overflow-hidden pt-24 pb-24 md:pt-24 md:pb-32 md:min-h-[90vh]"
        style={{ background: "linear-gradient(135deg, #0f0f17 0%, #1A3C6E 50%, #0f0f17 100%)" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center w-full">
          {/* Left column — text content */}
          <div className="text-center md:text-left">
            <Image
              src="/crm_logo.png"
              alt="BizOS"
              height={72}
              width={240}
              className="h-16 md:h-[72px] w-auto mx-auto md:mx-0 mb-8 block"
              priority
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="uppercase text-[#2E6DB4] text-xs font-semibold tracking-widest text-center md:text-left"
            >
              Live session
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white font-bold text-4xl md:text-5xl mt-4 text-center md:text-left leading-tight"
            >
              Learn how to earn recurring commission by referring businesses to BizOS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#94a3b8] text-lg mt-6 text-center md:text-left"
              style={{ lineHeight: 1.8 }}
            >
              AI1team is hosting a one hour live session walking through the BizOS Partner Program. If you refer a business and they subscribe, you earn commission every month they stay on. This call explains exactly how it works and how to get started.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white font-semibold text-lg mt-8 text-center md:text-left"
            >
              Date and time: {EVENT_DATE}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[#94a3b8] text-sm mt-4 text-center md:text-left"
            >
              One hour. Hosted on Google Meet. Free to attend.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 text-center md:text-left"
            >
              <button
                onClick={scrollToRegister}
                className="bg-white text-[#1A3C6E] rounded-full px-8 py-4 font-bold text-base hover:bg-[#F0F6FF] transition-all mx-auto md:mx-0 block w-fit"
              >
                Reserve Your Spot Now
              </button>
            </motion.div>
          </div>

          {/* Right column — image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full aspect-[4/5] md:max-h-[600px]">
              <Image
                src="/images/partner_bizos.jpg"
                alt="Two business partners shaking hands, representing the BizOS Partner Program"
                width={600}
                height={700}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countdown divider */}
      <section className="py-8 px-6" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="uppercase text-[#2E6DB4] text-xs font-semibold tracking-widest mb-4">
            Session starts in
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl px-5 py-4 text-center min-w-16"
                style={{ backgroundColor: "#F0F6FF", border: "1px solid rgba(26,60,110,0.12)" }}
              >
                <p className="text-[#1A3C6E] font-bold text-4xl" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {item.value}
                </p>
                <p className="text-[#555577] text-xs uppercase tracking-widest mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[#555577] text-xs text-center mt-4">
            {EVENT_DATE}
          </p>
        </div>
      </section>

      {/* Video placeholder section */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #0f0f17 0%, #111827 100%)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <p className="uppercase text-[#2E6DB4] text-xs font-bold tracking-widest text-center mb-4">
            Introduction
          </p>
          <h2 className="text-white font-bold text-2xl text-center mb-3">
            Watch this before the session.
          </h2>
          <p className="text-[#94a3b8] text-sm text-center mb-4">
            A short introduction to the BizOS Partner Program and what the live session will cover.
          </p>

          <div
            style={{
              width: "100%",
              padding: "75% 0 0 0",
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
              marginTop: "1rem",
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/1218005968?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="BizOS Partner Program Introduction"
            />
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
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #F0F6FF 0%, #ffffff 50%, #F0F6FF 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-[#2E6DB4] text-xs font-bold tracking-widest text-center mb-4">
            Your hosts
          </p>
          <h2 className="text-[#1A1A2E] font-bold text-4xl text-center mb-4">
            Meet the people behind this session.
          </h2>
          <p className="text-[#555577] text-base text-center max-w-xl mx-auto mb-16" style={{ lineHeight: 1.8 }}>
            This is a live, interactive session. You will be speaking directly with the people who built BizOS and run the partner program day to day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {hosts.map((host, index) => (
              <motion.div
                key={host.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              >
                <div className="relative w-full h-80">
                  <Image
                    src={host.photo}
                    alt={host.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: host.imagePosition }}
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-24"
                    style={{ background: "linear-gradient(to bottom, transparent 60%, white 100%)" }}
                  />
                </div>

                <div className="px-8 pb-8 pt-2">
                  <span
                    className="text-white text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1 inline-block mb-4"
                    style={{ backgroundColor: host.badgeBg }}
                  >
                    {host.badge}
                  </span>

                  <h3 className="text-[#1A1A2E] font-bold text-3xl mb-1">{host.name}</h3>
                  <p className="text-[#2E6DB4] font-semibold text-base mb-4">{host.title}</p>
                  <div className="w-12 h-0.5 bg-[#2E6DB4] mb-4" />
                  <p className="text-[#555577] text-base" style={{ lineHeight: 1.8 }}>
                    {host.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={scrollToRegister}
            className="bg-[#2E6DB4] text-white rounded-full px-10 py-4 font-bold text-base hover:bg-[#1A3C6E] transition-all shadow-lg mt-12 mx-auto block w-fit"
          >
            Reserve Your Spot Now
          </button>
        </div>
      </section>

      {/* Section 2 — What the program is */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #ffffff 0%, #F0F6FF 100%)" }}>
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
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #F0F6FF 0%, #EBF4FF 100%)" }}>
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
      <section id="register" className="py-20 px-6" style={{ background: "linear-gradient(180deg, #ffffff 0%, #F0F6FF 100%)" }}>
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
      <section
        className="py-16 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1A3C6E 0%, #2E6DB4 60%, #1A3C6E 100%)" }}
      >
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
        style={{
          background: "linear-gradient(180deg, #0f0f17 0%, #111827 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
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

      {/* Event footer */}
      <footer
        className="py-10 px-6"
        style={{
          backgroundColor: "#0f0f17",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <Image src="/crm_logo.png" alt="BizOS" height={32} width={120} className="h-8 w-auto mx-auto" />

          <div className="flex gap-8 justify-center flex-wrap">
            <span
              onClick={scrollToRegister}
              className="text-sm cursor-pointer transition-colors"
              style={{ color: "#94a3b8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              Register for the session
            </span>
            <a
              href="/bizos"
              target="_blank"
              className="text-sm transition-colors"
              style={{ color: "#94a3b8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              Learn about BizOS
            </a>
            <a
              href="https://help.ai1team.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors"
              style={{ color: "#94a3b8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              Help center
            </a>
          </div>

          <p className="text-xs text-center" style={{ color: "#555577" }}>
            BizOS is a product of AI1team.
          </p>
          <a
            href="mailto:hello@ai1team.com"
            className="text-xs transition-colors"
            style={{ color: "#555577" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555577")}
          >
            hello@ai1team.com
          </a>
        </div>
      </footer>

      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
