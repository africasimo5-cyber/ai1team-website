"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";

const inputClass = (hasError) =>
  `w-full border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors duration-200 ${
    hasError
      ? "border-red-400 focus:border-red-400"
      : "border-gray-200 focus:border-[#2E6DB4]"
  }`;

const SharedContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errors.message = 'Message is required.';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setFormData({ fullName: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F0F6FF] py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#2E6DB4] mb-3 text-center">
            Send Us a Message
          </p>
          <h2 className="font-extrabold text-[#1A1A2E] text-3xl md:text-4xl mb-8 leading-tight text-center">
            Get in Touch
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <FaCircleCheck className="text-[#2E6DB4] text-5xl mb-5" />
                  <h3 className="font-bold text-[#1A1A2E] text-2xl mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[#555577] text-sm leading-relaxed max-w-sm">
                    We&apos;ve received your message and will reply to{" "}
                    <span className="font-semibold text-[#1A3C6E]">{formData.email || "your email"}</span>{" "}
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Row 1: Full Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A2E] mb-1">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Smith"
                        className={inputClass(!!fieldErrors.fullName)}
                      />
                      {fieldErrors.fullName && (
                        <p className="text-red-400 text-xs mt-1">{fieldErrors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A2E] mb-1">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@company.com"
                        className={inputClass(!!fieldErrors.email)}
                      />
                      {fieldErrors.email && (
                        <p className="text-red-400 text-xs mt-1">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone + Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A2E] mb-1">
                        Phone Number <span className="text-[#94a3b8] font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +1 234 567 8900"
                        className={inputClass(false)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A2E] mb-1">
                        Company Name <span className="text-[#94a3b8] font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Corp"
                        className={inputClass(false)}
                      />
                    </div>
                  </div>

                  {/* Service dropdown */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-[#1A1A2E] mb-1">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClass(false)} bg-white text-[#1A1A2E]`}
                    >
                      <option value="">Select a service...</option>
                      <option value="AI Agents & Chatbots">AI Agents &amp; Chatbots</option>
                      <option value="Social Media & Content Automation">Social Media &amp; Content Automation</option>
                      <option value="Business & Workflow Automation">Business &amp; Workflow Automation</option>
                      <option value="CRM Setup & Lead Nurturing">CRM Setup &amp; Lead Nurturing</option>
                      <option value="Claude AI Services">Claude AI Services</option>
                      <option value="Business Audit & Roadmap">Business Audit &amp; Roadmap</option>
                      <option value="Not sure — I need guidance">Not sure — I need guidance</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-[#1A1A2E] mb-1">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your business and what you'd like to automate..."
                      className={inputClass(!!fieldErrors.message)}
                    />
                    {fieldErrors.message && (
                      <p className="text-red-400 text-xs mt-1">{fieldErrors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 bg-[#2E6DB4] hover:bg-[#1A3C6E] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-full transition-all duration-200"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="shrink-0" />
                        Send Message
                      </>
                    )}
                  </button>

                  {error && (
                    <p className="text-red-400 text-sm mt-3 text-center">{error}</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SharedContactForm;
