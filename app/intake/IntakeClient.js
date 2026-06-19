'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FaPaperPlane, FaCircleCheck } from 'react-icons/fa6'

const SECTION_NAMES = [
  'Contact Information',
  'Business Details',
  'Goals & Challenges',
  'Budget & Timeline'
]

const INDUSTRY_OPTIONS = [
  'E-commerce & Retail',
  'Real Estate',
  'Healthcare & Medical',
  'Legal Services',
  'Financial Services',
  'Marketing & Advertising',
  'Construction & Trades',
  'Hospitality & Tourism',
  'Education & Training',
  'Technology & SaaS',
  'Consulting & Coaching',
  'Food & Beverage',
  'Non-profit',
  'Other'
]

const BUSINESS_SIZE_OPTIONS = [
  'Just me (solopreneur)',
  '2 – 10 employees',
  '11 – 50 employees',
  '51 – 200 employees',
  '200+ employees'
]

const REVENUE_OPTIONS = [
  'Under $50K',
  '$50K – $200K',
  '$200K – $500K',
  '$500K – $1M',
  '$1M – $5M',
  '$5M+',
  'Prefer not to say'
]

const TRIED_AUTOMATION_OPTIONS = [
  'No — completely new to automation',
  'Yes — tried some tools but nothing stuck',
  'Yes — have some automations but need more',
  'Yes — have a full system but need help improving it'
]

const AUTOMATION_GOALS_OPTIONS = [
  'Lead Generation & Follow-Up',
  'CRM & Client Management',
  'Social Media & Content',
  'Email Marketing & Sequences',
  'Appointment Booking',
  'Customer Support & Chatbots',
  'Reporting & Analytics',
  'Invoicing & Payments',
  'Internal Workflows & Tasks',
  "I'm not sure — need guidance"
]

const BUDGET_OPTIONS = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,000',
  '$7,000 – $15,000',
  '$15,000+',
  'Not sure yet — need guidance'
]

const TIMELINE_OPTIONS = [
  'Immediately (this week)',
  'Within the next month',
  'Within 1 – 3 months',
  'Just exploring for now'
]

const HEAR_ABOUT_US_OPTIONS = [
  'Google Search',
  'Instagram',
  'Facebook',
  'LinkedIn',
  'Referral from someone',
  'YouTube',
  'Other'
]

const getInputClass = (hasError) =>
  `w-full border rounded-xl p-3 text-sm focus:outline-none focus:border-[#2E6DB4] focus:ring-2 focus:ring-blue-100 transition-all bg-white ${
    hasError ? 'border-red-400' : 'border-gray-200'
  }`

const labelClass = 'block font-semibold text-sm text-[#1A1A2E] mb-1'

function FieldError({ msg }) {
  if (!msg) return null
  return <p className="text-red-400 text-xs mt-1">{msg}</p>
}

function RadioPills({ options, value, onChange, name, error }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex items-center gap-2.5 border rounded-xl p-3 cursor-pointer text-sm transition-all ${
              value === opt
                ? 'border-[#2E6DB4] bg-[#F0F6FF] text-[#1A3C6E] font-semibold'
                : 'border-gray-200 text-gray-600 hover:border-[#2E6DB4]/50 hover:bg-gray-50'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="sr-only"
            />
            <span
              className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                value === opt ? 'border-[#2E6DB4]' : 'border-gray-300'
              }`}
            >
              {value === opt && (
                <span className="w-2 h-2 rounded-full bg-[#2E6DB4]" />
              )}
            </span>
            <span>{opt}</span>
          </label>
        ))}
      </div>
      <FieldError msg={error} />
    </div>
  )
}

function CheckboxCards({ options, values, onChange, error }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt) => {
          const checked = values.includes(opt)
          return (
            <label
              key={opt}
              className={`flex items-center gap-2.5 border rounded-xl p-3 cursor-pointer text-sm transition-all ${
                checked
                  ? 'border-[#2E6DB4] bg-[#F0F6FF] text-[#1A3C6E] font-semibold'
                  : 'border-gray-200 text-gray-600 hover:border-[#2E6DB4]/50 hover:bg-gray-50'
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onChange(opt)}
                className="sr-only"
              />
              <span
                className={`w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                  checked
                    ? 'border-[#2E6DB4] bg-[#2E6DB4]'
                    : 'border-gray-300'
                }`}
              >
                {checked && (
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M1.5 5L4 7.5L8.5 2.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span>{opt}</span>
            </label>
          )
        })}
      </div>
      <FieldError msg={error} />
    </div>
  )
}

const sectionVariants = {
  enter: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0 })
}

export default function IntakeClient() {
  const [currentSection, setCurrentSection] = useState(1)
  const [direction, setDirection] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    businessSize: '',
    revenueRange: '',
    currentTools: '',
    triedAutomation: '',
    biggestChallenge: '',
    automationGoals: [],
    successIn90Days: '',
    budgetRange: '',
    timeline: '',
    hearAboutUs: '',
    additionalInfo: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [errors, setErrors] = useState({})

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const toggleGoal = (goal) => {
    setFormData((prev) => {
      const goals = prev.automationGoals.includes(goal)
        ? prev.automationGoals.filter((g) => g !== goal)
        : [...prev.automationGoals, goal]
      return { ...prev, automationGoals: goals }
    })
    if (errors.automationGoals)
      setErrors((prev) => ({ ...prev, automationGoals: '' }))
  }

  const validateSection = (section) => {
    const errs = {}
    if (section === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full name is required'
      if (!formData.email.trim()) {
        errs.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = 'Please enter a valid email address'
      }
      if (!formData.companyName.trim())
        errs.companyName = 'Company name is required'
      if (!formData.industry) errs.industry = 'Please select your industry'
    } else if (section === 2) {
      if (!formData.businessSize)
        errs.businessSize = 'Please select your business size'
      if (!formData.revenueRange)
        errs.revenueRange = 'Please select your revenue range'
      if (!formData.triedAutomation)
        errs.triedAutomation = 'Please select an option'
    } else if (section === 3) {
      if (!formData.biggestChallenge.trim())
        errs.biggestChallenge = 'Please describe your biggest challenge'
      if (formData.automationGoals.length === 0)
        errs.automationGoals = 'Please select at least one area'
    } else if (section === 4) {
      if (!formData.budgetRange) errs.budgetRange = 'Please select a budget range'
      if (!formData.timeline) errs.timeline = 'Please select a timeline'
      if (!formData.hearAboutUs)
        errs.hearAboutUs = 'Please let us know how you found us'
    }
    return errs
  }

  const goNext = () => {
    const errs = validateSection(currentSection)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setDirection(1)
    setCurrentSection((s) => s + 1)
  }

  const goBack = () => {
    setErrors({})
    setDirection(-1)
    setCurrentSection((s) => s - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validateSection(4)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setError('')

    try {
      const submitData = {
        ...formData,
        automationGoals: formData.automationGoals.join(', '),
        additionalInfo: [
          formData.successIn90Days
            ? `Success in 90 days: ${formData.successIn90Days}`
            : '',
          formData.additionalInfo
        ]
          .filter(Boolean)
          .join('\n\n')
      }

      console.log('Submitting form data:', JSON.stringify(submitData))

      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      })

      console.log('Response status:', res.status)
      const data = await res.json()
      console.log('Response data:', JSON.stringify(data))

      if (data.success) {
        setSuccess(true)
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Submit error:', err.message)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const progressPct = (currentSection / 4) * 100

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Hero ── */}
      <section className="relative bg-[#0f0f17] flex items-center justify-center overflow-hidden pt-24 pb-24 md:pt-24 md:pb-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-16 w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle,rgba(26,60,110,0.55)_0%,transparent_65%)]" />
          <div className="absolute -bottom-24 -right-16 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.28)_0%,transparent_65%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.07)_0%,transparent_70%)]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase text-[#2E6DB4] text-xs font-bold tracking-widest"
          >
            CLIENT INTAKE FORM
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-3"
          >
            Tell Us About Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-[#94a3b8] text-base mt-3 max-w-xl mx-auto"
          >
            The more we know, the better we can prepare for your discovery call.
            This takes about 5 minutes.
          </motion.p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#F0F6FF] to-transparent pointer-events-none" />
      </section>

      {/* ── Form Section ── */}
      <section className="bg-[#F0F6FF] py-16">
        <div className="max-w-3xl mx-auto px-6">
          {success ? (
            /* ── Success State ── */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2
                }}
                className="flex justify-center"
              >
                <FaCircleCheck className="text-7xl text-[#2E6DB4]" />
              </motion.div>
              <h2 className="font-bold text-3xl text-[#1A1A2E] mt-6">
                Intake Received, {formData.fullName.split(' ')[0]}! 🎉
              </h2>
              <p className="text-[#555577] text-base mt-3">
                We&apos;ve received all your business details. Our team will
                review everything and reach out within 24 hours.
              </p>
              <p className="text-[#555577] text-sm mt-2">
                Check your inbox — we&apos;ve sent you a confirmation email.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-[#2E6DB4] text-white rounded-full px-6 py-3 font-semibold text-sm hover:bg-[#1A3C6E] transition-colors"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/stories"
                  className="border border-[#2E6DB4] text-[#2E6DB4] rounded-full px-6 py-3 font-semibold text-sm hover:bg-[#F0F6FF] transition-colors"
                >
                  Read Client Stories
                </Link>
              </div>
            </motion.div>
          ) : (
            /* ── Multi-Section Form ── */
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {/* Progress Bar */}
              <div className="mb-8">
                <p className="text-sm text-[#2E6DB4] font-semibold mb-2">
                  Section {currentSection} of 4 —{' '}
                  {SECTION_NAMES[currentSection - 1]}
                </p>
                <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-[#2E6DB4] h-2 rounded-full"
                    initial={false}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentSection}
                  custom={direction}
                  variants={sectionVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                >
                  {/* ════════════════════════════════
                      SECTION 1 — Contact Information
                  ════════════════════════════════ */}
                  {currentSection === 1 && (
                    <div className="space-y-5">
                      <div>
                        <label className={labelClass}>
                          Full Name{' '}
                          <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. John Smith"
                          value={formData.fullName}
                          onChange={(e) =>
                            updateField('fullName', e.target.value)
                          }
                          className={getInputClass(!!errors.fullName)}
                        />
                        <FieldError msg={errors.fullName} />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Email Address{' '}
                          <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. john@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            updateField('email', e.target.value)
                          }
                          className={getInputClass(!!errors.email)}
                        />
                        <FieldError msg={errors.email} />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Phone Number{' '}
                          <span className="text-gray-400 font-normal">
                            (optional)
                          </span>
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. +1 234 567 8900"
                          value={formData.phone}
                          onChange={(e) =>
                            updateField('phone', e.target.value)
                          }
                          className={getInputClass(false)}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Company Name{' '}
                          <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Acme Corporation"
                          value={formData.companyName}
                          onChange={(e) =>
                            updateField('companyName', e.target.value)
                          }
                          className={getInputClass(!!errors.companyName)}
                        />
                        <FieldError msg={errors.companyName} />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Industry <span className="text-red-400">*</span>
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) =>
                            updateField('industry', e.target.value)
                          }
                          className={getInputClass(!!errors.industry)}
                        >
                          <option value="">Select your industry...</option>
                          {INDUSTRY_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <FieldError msg={errors.industry} />
                      </div>

                      <div className="flex justify-end pt-3">
                        <button
                          type="button"
                          onClick={goNext}
                          className="bg-[#2E6DB4] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#1A3C6E] transition-colors"
                        >
                          Next: Business Details →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ════════════════════════════════
                      SECTION 2 — Business Details
                  ════════════════════════════════ */}
                  {currentSection === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className={labelClass}>
                          Business Size{' '}
                          <span className="text-red-400">*</span>
                        </label>
                        <RadioPills
                          options={BUSINESS_SIZE_OPTIONS}
                          value={formData.businessSize}
                          onChange={(v) => updateField('businessSize', v)}
                          name="businessSize"
                          error={errors.businessSize}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Annual Revenue Range{' '}
                          <span className="text-red-400">*</span>
                        </label>
                        <RadioPills
                          options={REVENUE_OPTIONS}
                          value={formData.revenueRange}
                          onChange={(v) => updateField('revenueRange', v)}
                          name="revenueRange"
                          error={errors.revenueRange}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          What tools or software does your business currently
                          use?
                        </label>
                        <textarea
                          rows={3}
                          placeholder="e.g. HubSpot, Shopify, Mailchimp, spreadsheets, QuickBooks... or none at all"
                          value={formData.currentTools}
                          onChange={(e) =>
                            updateField('currentTools', e.target.value)
                          }
                          className={getInputClass(false)}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Tried Automation Before?{' '}
                          <span className="text-red-400">*</span>
                        </label>
                        <RadioPills
                          options={TRIED_AUTOMATION_OPTIONS}
                          value={formData.triedAutomation}
                          onChange={(v) => updateField('triedAutomation', v)}
                          name="triedAutomation"
                          error={errors.triedAutomation}
                        />
                      </div>

                      <div className="flex items-center justify-between pt-3 gap-4">
                        <button
                          type="button"
                          onClick={goBack}
                          className="text-sm font-semibold text-[#2E6DB4] hover:text-[#1A3C6E] transition-colors"
                        >
                          ← Back
                        </button>
                        <button
                          type="button"
                          onClick={goNext}
                          className="bg-[#2E6DB4] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#1A3C6E] transition-colors"
                        >
                          Next: Your Goals →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ════════════════════════════════
                      SECTION 3 — Goals & Challenges
                  ════════════════════════════════ */}
                  {currentSection === 3 && (
                    <div className="space-y-6">
                      <div>
                        <label className={labelClass}>
                          What is your biggest operational challenge right now?{' '}
                          <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          rows={4}
                          placeholder="e.g. We spend 3 hours daily on manual data entry. Leads come in but nobody follows up consistently. We have no idea which marketing is working..."
                          value={formData.biggestChallenge}
                          onChange={(e) =>
                            updateField('biggestChallenge', e.target.value)
                          }
                          className={getInputClass(!!errors.biggestChallenge)}
                        />
                        <FieldError msg={errors.biggestChallenge} />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Which areas do you want to automate?{' '}
                          <span className="text-[#555577] font-normal">
                            (Select all that apply)
                          </span>{' '}
                          <span className="text-red-400">*</span>
                        </label>
                        <CheckboxCards
                          options={AUTOMATION_GOALS_OPTIONS}
                          values={formData.automationGoals}
                          onChange={toggleGoal}
                          error={errors.automationGoals}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          What would success look like for your business in 90
                          days?
                        </label>
                        <textarea
                          rows={3}
                          placeholder="e.g. All leads are automatically followed up, we save 15 hours per week, our team focuses on high-value work..."
                          value={formData.successIn90Days}
                          onChange={(e) =>
                            updateField('successIn90Days', e.target.value)
                          }
                          className={getInputClass(false)}
                        />
                      </div>

                      <div className="flex items-center justify-between pt-3 gap-4">
                        <button
                          type="button"
                          onClick={goBack}
                          className="text-sm font-semibold text-[#2E6DB4] hover:text-[#1A3C6E] transition-colors"
                        >
                          ← Back
                        </button>
                        <button
                          type="button"
                          onClick={goNext}
                          className="bg-[#2E6DB4] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#1A3C6E] transition-colors"
                        >
                          Next: Final Details →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ════════════════════════════════
                      SECTION 4 — Budget & Timeline
                  ════════════════════════════════ */}
                  {currentSection === 4 && (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className={labelClass}>
                          What is your approximate budget for automation?{' '}
                          <span className="text-red-400">*</span>
                        </label>
                        <RadioPills
                          options={BUDGET_OPTIONS}
                          value={formData.budgetRange}
                          onChange={(v) => updateField('budgetRange', v)}
                          name="budgetRange"
                          error={errors.budgetRange}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          When are you looking to get started?{' '}
                          <span className="text-red-400">*</span>
                        </label>
                        <RadioPills
                          options={TIMELINE_OPTIONS}
                          value={formData.timeline}
                          onChange={(v) => updateField('timeline', v)}
                          name="timeline"
                          error={errors.timeline}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          How Did You Hear About AI1team?{' '}
                          <span className="text-red-400">*</span>
                        </label>
                        <select
                          value={formData.hearAboutUs}
                          onChange={(e) =>
                            updateField('hearAboutUs', e.target.value)
                          }
                          className={getInputClass(!!errors.hearAboutUs)}
                        >
                          <option value="">Select an option...</option>
                          {HEAR_ABOUT_US_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <FieldError msg={errors.hearAboutUs} />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Any other context, questions, or requirements?
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Feel free to share anything else that would help us understand your business better..."
                          value={formData.additionalInfo}
                          onChange={(e) =>
                            updateField('additionalInfo', e.target.value)
                          }
                          className={getInputClass(false)}
                        />
                      </div>

                      {error && (
                        <p className="text-red-400 text-sm text-center">
                          {error}
                        </p>
                      )}

                      <div className="flex flex-col sm:flex-row items-center justify-between pt-3 gap-4">
                        <button
                          type="button"
                          onClick={goBack}
                          className="text-sm font-semibold text-[#2E6DB4] hover:text-[#1A3C6E] transition-colors self-start sm:self-center"
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="flex items-center justify-center gap-2 w-full sm:flex-1 bg-[#2E6DB4] text-white rounded-full py-4 font-bold text-base hover:bg-[#1A3C6E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          <FaPaperPlane />
                          {loading
                            ? 'Submitting...'
                            : 'Submit My Business Intake'}
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
