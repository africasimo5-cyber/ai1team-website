"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLock, FaCheckCircle, FaSpinner, FaBolt, FaTimesCircle, FaChevronDown } from "react-icons/fa";

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(formRef.current);
    if (!formData.get("user_name") || !formData.get("user_email") || !formData.get("message")) {
      setStatus("error");
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_egfujc7",
        "template_pavwp4m",
        formRef.current,
        "2BIBgAVyIOcWD0LJt"
      )
      .then(
        (result) => {
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("error");
          setErrorMsg("Failed to send message. Please try again later.");
        }
      );
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-[#1A3C6E]/[0.08] rounded-3xl p-8 md:p-10 shadow-[0_4px_24px_rgba(26,60,110,0.06)] text-center h-full flex flex-col items-center justify-center min-h-[500px]"
      >
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-4xl" />
        </div>
        <h3 className="text-2xl font-bold text-[#1A3C6E] mb-3">Message Sent!</h3>
        <p className="text-[#555577] mb-8 max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out. We have received your message and will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[#2E6DB4] font-semibold hover:text-[#1A3C6E] transition-colors"
        >
          Send another message &rarr;
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white border border-[#1A3C6E]/[0.08] rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(26,60,110,0.06)]">
      <div className="mb-6">
        <h3 className="font-bold text-[#1A3C6E] text-xl">Send Us a Message</h3>
        <p className="text-[#555577] text-sm mt-1">
          Fill in the form and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-[#1A3C6E] mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              placeholder="John Doe"
              className="w-full bg-[#F8FAFF] border border-[#1A3C6E]/[0.12] rounded-xl px-4 py-3 text-[#1A1A2E] text-sm placeholder:text-[#94a3b8] focus:bg-white focus:outline-none focus:border-[#2E6DB4] focus:shadow-[0_0_0_3px_rgba(46,109,180,0.12)] transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-[#1A3C6E] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              placeholder="john@company.com"
              className="w-full bg-[#F8FAFF] border border-[#1A3C6E]/[0.12] rounded-xl px-4 py-3 text-[#1A1A2E] text-sm placeholder:text-[#94a3b8] focus:bg-white focus:outline-none focus:border-[#2E6DB4] focus:shadow-[0_0_0_3px_rgba(46,109,180,0.12)] transition-all duration-200"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-[#1A3C6E] mb-1.5">
              Company Name <span className="text-[#94a3b8] font-normal">(optional)</span>
            </label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Acme Corp"
              className="w-full bg-[#F8FAFF] border border-[#1A3C6E]/[0.12] rounded-xl px-4 py-3 text-[#1A1A2E] text-sm placeholder:text-[#94a3b8] focus:bg-white focus:outline-none focus:border-[#2E6DB4] focus:shadow-[0_0_0_3px_rgba(46,109,180,0.12)] transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-[#1A3C6E] mb-1.5">
              Service Interested In
            </label>
            <div className="relative">
              <select
                name="service"
                id="service"
                className="w-full bg-[#F8FAFF] border border-[#1A3C6E]/[0.12] rounded-xl px-4 py-3 pr-10 text-[#1A1A2E] text-sm focus:bg-white focus:outline-none focus:border-[#2E6DB4] focus:shadow-[0_0_0_3px_rgba(46,109,180,0.12)] transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Select a service...</option>
                <option value="Lead Generation & Nurturing">Lead Generation &amp; Nurturing</option>
                <option value="CRM Setup (GoHighLevel)">CRM Setup (GoHighLevel)</option>
                <option value="Workflow Automation">Workflow Automation</option>
                <option value="AI-Powered Chatbots & Support">AI-Powered Chatbots &amp; Support</option>
                <option value="Data Analytics & Reporting">Data Analytics &amp; Reporting</option>
                <option value="Custom Integrations">Custom Integrations</option>
                <option value="AIOS">AIOS</option>
                <option value="Audit Service">Audit Service</option>
                <option value="Other">Other</option>
              </select>
              <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8] text-[10px] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-[#1A3C6E] mb-1.5">
            Budget Range
          </label>
          <div className="relative">
            <select
              name="budget"
              id="budget"
              className="w-full bg-[#F8FAFF] border border-[#1A3C6E]/[0.12] rounded-xl px-4 py-3 pr-10 text-[#1A1A2E] text-sm focus:bg-white focus:outline-none focus:border-[#2E6DB4] focus:shadow-[0_0_0_3px_rgba(46,109,180,0.12)] transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="">Select a range...</option>
              <option value="Under $500">Under $500</option>
              <option value="$500 - $1,000">$500 – $1,000</option>
              <option value="$1,000 - $5,000">$1,000 – $5,000</option>
              <option value="$5,000+">$5,000+</option>
              <option value="Let's Discuss">Let&apos;s Discuss</option>
            </select>
            <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8] text-[10px] pointer-events-none" />
          </div>
        </div>

        {/* Row 4 */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#1A3C6E] mb-1.5">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            placeholder="Tell us about your business, current challenges, and what you're hoping to automate..."
            className="w-full bg-[#F8FAFF] border border-[#1A3C6E]/[0.12] rounded-xl px-4 py-3 text-[#1A1A2E] text-sm placeholder:text-[#94a3b8] focus:bg-white focus:outline-none focus:border-[#2E6DB4] focus:shadow-[0_0_0_3px_rgba(46,109,180,0.12)] transition-all duration-200 resize-y"
          ></textarea>
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-50 border border-red-100 rounded-xl px-4 py-3">
            <FaTimesCircle className="shrink-0 text-base" />
            {errorMsg || "Something went wrong. Please try again or email us directly."}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full mt-6 bg-gradient-to-br from-[#1A3C6E] to-[#2E6DB4] text-white font-semibold text-base py-4 rounded-xl transition-all duration-300 hover:opacity-[0.92] hover:shadow-[0_8px_24px_rgba(46,109,180,0.35)] hover:-translate-y-[1px] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
        >
          {status === "loading" ? (
            <>
              <FaSpinner className="animate-spin mr-2" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {/* Trust Strip */}
        <div className="flex justify-center items-center gap-6 mt-4 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
            <FaLock className="text-[10px]" /> 100% Confidential
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
            <FaBolt className="text-[10px]" /> 24hr Response
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
            <FaCheckCircle className="text-[10px]" /> No Obligation
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
