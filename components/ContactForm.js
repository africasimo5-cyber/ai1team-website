"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi";

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Validate (basic HTML5 validation handles most, but double check)
    const formData = new FormData(formRef.current);
    if (!formData.get("user_name") || !formData.get("user_email") || !formData.get("message")) {
      setStatus("error");
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY with actual EmailJS keys
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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-green-100 p-10 shadow-sm text-center"
      >
        <HiCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-[#1A3C6E] mb-2">Thank you!</h3>
        <p className="text-gray-600 mb-8">
          We will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[#2E6DB4] font-semibold hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

        {status === "error" && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-3 text-sm">
            <HiExclamationCircle className="text-lg shrink-0" />
            <p>{errorMsg}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="user_name" className="block text-sm font-semibold text-[#1A3C6E] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              placeholder="John Doe"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6DB4]/50 focus:border-[#2E6DB4] transition-all"
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block text-sm font-semibold text-[#1A3C6E] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              placeholder="john@company.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6DB4]/50 focus:border-[#2E6DB4] transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-[#1A3C6E] mb-2">
              Company Name (optional)
            </label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Acme Corp"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6DB4]/50 focus:border-[#2E6DB4] transition-all"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-[#1A3C6E] mb-2">
              Service Interested In
            </label>
            <select
              name="service"
              id="service"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6DB4]/50 focus:border-[#2E6DB4] transition-all appearance-none"
            >
              <option value="">Select a service...</option>
              <option value="AI Content Marketing">AI Content Marketing</option>
              <option value="SEO">SEO Optimization</option>
              <option value="Social Media">Social Media Management</option>
              <option value="Email Marketing">Email Marketing</option>
              <option value="PPC">Paid Advertising (PPC)</option>
              <option value="Brand Strategy">Brand Strategy</option>
              <option value="Analytics">Analytics</option>
              <option value="AI Chatbot">AI Chatbot</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#1A3C6E] mb-2">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            placeholder="Tell us about your project goals..."
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6DB4]/50 focus:border-[#2E6DB4] transition-all resize-y"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full py-4 text-white font-bold rounded-lg transition-all shadow-md ${status === "loading"
            ? "bg-[#2E6DB4]/70 cursor-not-allowed"
            : "bg-[#2E6DB4] hover:bg-[#1A3C6E] hover:shadow-lg hover:-translate-y-0.5"
            }`}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
