"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const problemCards = [
  {
    title: "No financial records",
    text: "When everything lives in your head or across different notebooks and apps, it is nearly impossible to know whether the business is actually profitable, let alone prove it to anyone else.",
  },
  {
    title: "Tax compliance pressure",
    text: "VAT, withholding tax, and PAYE payroll are legal obligations, but keeping up with them manually is time consuming and easy to get wrong. The penalties for errors are real.",
  },
  {
    title: "No path to a business loan",
    text: "Banks and lenders want to see organized financial records before they will consider a loan application. Without them, even a healthy business can look unbankable on paper.",
  },
];

const featureBlocks = [
  {
    module: "Contacts and pipeline",
    text: "You can store every customer, lead, and supplier in one place, with a sales pipeline that shows you exactly where each deal stands. Pipelines are customizable, so the stages reflect how your business actually works rather than a generic template someone else designed.",
    image: null,
  },
  {
    module: "Invoicing and payments",
    text: "BizOS generates invoices in Naira, calculates VAT automatically, and lets customers pay directly from the invoice using Paystack. You can set a default VAT rate, default due days, and a custom invoice prefix, so every invoice that leaves your business looks consistent and professional.",
    image: {
      src: "/images/bizos_Invoice.png",
      alt: "BizOS invoice showing Naira amount with payment tracking",
      position: "right",
    },
  },
  {
    module: "Tax and compliance",
    text: "BizOS tracks VAT, withholding tax, and PAYE payroll in line with the Nigeria Tax Act 2025. At any point you can export a full tax summary report or a standalone VAT report. Payroll includes payslip generation and email delivery to staff.",
    image: {
      src: "/images/bizos_vat.png",
      alt: "BizOS VAT report showing tax summary and compliance data",
      position: "left",
    },
  },
  {
    module: "Automations",
    text: "The automation builder is visual and drag and drop. You set a trigger and define what happens next, without writing any code. You can use it to follow up with contacts, update pipeline stages, send emails, or chain multiple actions together. Apex plans support advanced conditions and branching for more complex workflows.",
    image: {
      src: "/images/bizos_automation.png",
      alt: "BizOS visual automation builder showing drag and drop workflow canvas",
      position: "right",
    },
  },
];

const financialHealthBlock = {
  module: "Financial Health Score",
  text: "BizOS generates a Financial Health Score based on your business's own income, expenses, and payment history inside the app. The score is accompanied by a bank ready financial report that you can export as a PDF, download as a CSV, or share via a secure link. It is designed to give a lender a clear picture of your business's standing, not a score about your customers. This feature is available on the Apex plan.",
  image: {
    src: "/images/bizos_financialhealth.png",
    alt: "BizOS Financial Health Score showing creditworthiness dashboard and bank ready report",
    position: "left",
    caption: "The Financial Health Score and bank ready report are available on the Apex plan.",
  },
};

const foundationFeatures = [
  "200 contacts",
  "50 invoices per month",
  "3 pipelines, up to 5 stages each",
  "Payroll and PAYE for up to 3 staff",
  "3 automations",
  "Basic email sending via BizOS default address",
  "Full exportable tax summary report",
  "VAT report",
  "Product and inventory tracking for up to 30 products",
  "Standard invoice branding with your logo",
  "Community and email support",
];

const momentumFeatures = [
  "1,000 contacts",
  "200 invoices per month",
  "Unlimited pipelines and custom stages",
  "Payroll and PAYE for up to 10 staff, with payslip email delivery",
  "10 automations",
  "Custom SMTP so email sends from your own business address",
  "Rich email composer with templates, attachments, and images",
  "Bulk contact actions including tagging, emailing, deleting, and adding to a pipeline",
  "CSV contact import",
  "VAT and withholding tax tracker",
  "Full exportable tax summary report",
  "Unlimited products with stock tracking",
  "Paystack payment collection on invoices",
  "Custom invoice prefix",
  "Default VAT rate and default due days",
  "Priority email support",
];

const apexFeatures = [
  "Unlimited contacts",
  "Unlimited invoices",
  "Unlimited pipelines and stages",
  "Unlimited staff members",
  "Unlimited automations",
  "Everything included in Momentum",
  "Creditworthiness Dashboard with Financial Health Score",
  "Bank ready financial report as PDF, CSV, and shareable secure link",
  "Advanced automation conditions and branching",
  "White glove onboarding with priority support",
];

const faqs = [
  {
    q: "Do I need a card to start the free trial?",
    a: "Yes. A card is required at signup, but you will not be charged until your 14 day trial ends. You can cancel at any time before that and you will not owe anything.",
  },
  {
    q: "Is BizOS built for Nigerian tax rules specifically?",
    a: "Yes. The tax module covers VAT, withholding tax, and PAYE payroll calculated to the Nigeria Tax Act 2025 bands. It is not a generic accounting tool adapted for Nigeria. It was built with Nigerian compliance requirements in mind from the start.",
  },
  {
    q: "What is the Financial Health Score and who is it for?",
    a: "The Financial Health Score is a summary of your business's financial standing based on the income, expenses, and payment data you have recorded in BizOS. It is meant to be shown to a bank or lender when you are applying for a loan or line of credit. It is available on the Apex plan.",
  },
  {
    q: "Can I upgrade or downgrade my plan later?",
    a: "Yes. You can change your plan at any time from inside the app. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "What happens when my trial ends?",
    a: "When your 14 day trial ends, your card is charged for the plan you signed up on. If you cancel before the trial ends, you will not be charged.",
  },
  {
    q: "Is there a help center or documentation?",
    a: "Yes. The BizOS help center is at help.ai1team.com. It covers every feature in plain language, the same way this page is written.",
  },
];

const SectionLabel = ({ children }) => (
  <p className="text-xs uppercase tracking-widest text-[#2E6DB4] font-semibold text-center">
    {children}
  </p>
);

const FeatureList = ({ items, textColor }) => (
  <ul
    className="border-l-2 border-[#2E6DB4] pl-5 flex flex-col gap-2.5"
    style={{ color: textColor || "#555577" }}
  >
    {items.map((item) => (
      <li key={item} className="text-sm leading-relaxed">
        {item}
      </li>
    ))}
  </ul>
);

const ImageFrame = ({ src, alt, priority, className, onOpen }) => (
  <div
    className={`bg-white rounded-2xl p-2 md:p-3 shadow-xl w-full ${className || ""}`}
    style={{ border: "1px solid #e2e8f0" }}
  >
    <button
      type="button"
      onClick={() => onOpen({ src, alt })}
      className="w-full block cursor-zoom-in"
      aria-label={`View larger version of ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={750}
        priority={priority}
        className="rounded-2xl shadow-xl w-full h-auto object-cover overflow-hidden"
        style={{ border: "1px solid rgba(0,0,0,0.08)" }}
      />
    </button>
  </div>
);

const Lightbox = ({ image, onClose }) => (
  <AnimatePresence>
    {image && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-6 cursor-zoom-out"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="absolute -top-10 right-0 text-white text-sm font-semibold hover:text-[#94a3b8] transition-colors"
          >
            Close
          </button>
          <Image
            src={image.src}
            alt={image.alt}
            width={1600}
            height={1000}
            className="rounded-2xl w-full h-auto object-contain"
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const FeatureBlock = ({ module, text, image, idx, onOpenImage }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
    className="max-w-5xl mx-auto w-full bg-white rounded-2xl p-8 md:p-12 shadow-sm"
  >
    {image ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className={image.position === "left" ? "md:order-2" : ""}>
          <h3 className="font-semibold text-[#1A3C6E] text-base uppercase tracking-wide mb-3">
            {module}
          </h3>
          <p className="text-[#555577] text-base" style={{ lineHeight: 1.8 }}>
            {text}
          </p>
        </div>
        <div className={image.position === "left" ? "md:order-1" : ""}>
          <ImageFrame src={image.src} alt={image.alt} onOpen={onOpenImage} />
          {image.caption && (
            <p className="text-xs text-[#555577] text-center mt-2">{image.caption}</p>
          )}
        </div>
      </div>
    ) : (
      <>
        <h3 className="font-semibold text-[#1A3C6E] text-base uppercase tracking-wide mb-3">
          {module}
        </h3>
        <p className="text-[#555577] text-base" style={{ lineHeight: 1.8 }}>
          {text}
        </p>
      </>
    )}
  </motion.div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#e2e8f0]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center text-left py-5 gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#1A1A2E] text-base">{question}</span>
        <span className="shrink-0 text-[#2E6DB4] text-xl font-semibold w-5 text-center">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#555577] text-sm leading-relaxed pb-5" style={{ lineHeight: 1.8 }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function BizOSPage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    document.title = "BizOS: Run Your Business | AI1team";
  }, []);

  useEffect(() => {
    if (!lightboxImage) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxImage]);

  return (
    <div className="flex flex-col min-h-screen">
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

      {/* Hero */}
      <section className="relative bg-[#0f0f17] flex items-center justify-center overflow-hidden pt-24 pb-24 md:pt-24 md:pb-32">
        <div
          className="absolute inset-0 z-0 opacity-[0.16] mix-blend-screen bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url('/images/workflow-bg.png')" }}
        />
        <div
          className="absolute inset-0 opacity-[0.14] z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(96, 165, 250, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(96, 165, 250, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "4.5rem 4.5rem",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_15%,#0f0f17_75%)] z-0 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(46,109,180,0.18)_0%,transparent_70%)] blur-2xl pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.12)_0%,transparent_70%)] blur-2xl pointer-events-none" />
        </div>
        <div className="relative z-10 px-6 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-[#2E6DB4] font-semibold text-center"
          >
            AI1team BizOS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white font-bold text-4xl md:text-6xl leading-tight max-w-4xl mx-auto text-center mt-4"
          >
            Run your business. We handle the rest.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#94a3b8] text-lg mt-6 max-w-2xl mx-auto text-center"
            style={{ lineHeight: 1.8 }}
          >
            BizOS is a business operating system built for Nigerian small businesses. It handles your contacts, invoices, tax records, payroll, and cash flow in one place, so you can spend less time on admin and more time on the work that actually grows your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex justify-center"
          >
            <a
              href="https://app.ai1team.com/signup?plan=momentum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E6DB4] text-white rounded-full px-8 py-4 font-bold text-base hover:bg-[#1A3C6E] transition-all"
            >
              Start your free trial
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs text-[#555577] mt-3 text-center"
          >
            14 days free. A card is required to start your trial.
          </motion.p>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <ImageFrame
            src="/images/bizos_dashboard.png"
            alt="BizOS business dashboard showing contacts, invoices, and cash flow"
            priority
            onOpen={setLightboxImage}
          />
          <p className="text-sm text-[#555577] text-center mt-4 max-w-xl mx-auto">
            The BizOS dashboard gives you a single view of your business, contacts, invoices, cash flow, and tasks, all in one place.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Why BizOS exists</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#1A1A2E] font-bold text-3xl text-center max-w-2xl mx-auto mt-4"
          >
            Most small businesses in Nigeria are run on memory, paper, and WhatsApp threads.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#555577] text-base max-w-2xl mx-auto text-center mt-4"
            style={{ lineHeight: 1.8 }}
          >
            That works until it does not. Tax season arrives and there are no records to show. A bank asks for financial statements and there are none. A customer disputes an invoice and nobody can find it. BizOS exists because these are not small problems. They are the reason good businesses stay small.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {problemCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F0F6FF] rounded-2xl p-8 shadow-sm"
              >
                <h3 className="font-bold text-[#1A1A2E] text-lg mb-3">{card.title}</h3>
                <p className="text-[#555577] text-sm" style={{ lineHeight: 1.8 }}>
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="bg-[#F0F6FF] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>What BizOS does</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#1A1A2E] font-bold text-3xl text-center max-w-2xl mx-auto mt-4"
          >
            Everything your business needs to stay organized and move forward.
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 mt-12">
            {featureBlocks.map((block, idx) => (
              <FeatureBlock
                key={block.module}
                module={block.module}
                text={block.text}
                image={block.image}
                idx={idx}
                onOpenImage={setLightboxImage}
              />
            ))}

            <FeatureBlock
              module={financialHealthBlock.module}
              text={financialHealthBlock.text}
              image={financialHealthBlock.image}
              idx={featureBlocks.length}
              onOpenImage={setLightboxImage}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Pricing</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#1A1A2E] font-bold text-3xl text-center mt-4"
          >
            Three plans. One for where you are now, one for where you are going.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#555577] text-center mt-4 max-w-xl mx-auto"
          >
            Every plan includes a 14 day free trial. A card is required at signup.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto items-start">
            {/* Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <h3 className="font-bold text-[#1A1A2E] text-xl mb-2">Foundation</h3>
              <p className="text-[#1A1A2E] text-3xl font-bold mb-3">
                $29<span className="text-base font-medium text-[#555577]">/month</span>
              </p>
              <p className="text-[#555577] text-sm mb-6" style={{ lineHeight: 1.8 }}>
                For a solo operator or a very small business that is getting organized for the first time.
              </p>
              <FeatureList items={foundationFeatures} />
              <a
                href="https://app.ai1team.com/signup?plan=foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block text-center border border-[#2E6DB4] text-[#2E6DB4] rounded-full px-6 py-3 font-semibold w-full hover:bg-[#2E6DB4] hover:text-white transition-all"
              >
                Start with Foundation
              </a>
            </motion.div>

            {/* Momentum */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl md:scale-105 relative z-10"
              style={{ border: "2px solid #2E6DB4" }}
            >
              <span className="bg-[#2E6DB4] text-white text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1 inline-block mb-4">
                Most Popular
              </span>
              <h3 className="font-bold text-[#1A1A2E] text-xl mb-2">Momentum</h3>
              <p className="text-[#1A1A2E] text-3xl font-bold mb-3">
                $59<span className="text-base font-medium text-[#555577]">/month</span>
              </p>
              <p className="text-[#555577] text-sm mb-6" style={{ lineHeight: 1.8 }}>
                For a business that is actively managing customers, staff, and cash flow and needs the tools to do it properly.
              </p>
              <FeatureList items={momentumFeatures} />
              <a
                href="https://app.ai1team.com/signup?plan=momentum"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block text-center bg-[#2E6DB4] text-white rounded-full px-6 py-3 font-bold w-full hover:bg-[#1A3C6E] transition-all"
              >
                Start with Momentum
              </a>
            </motion.div>

            {/* Apex */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0f0f17] text-white rounded-2xl p-8 shadow-sm"
              style={{ border: "1px solid rgba(46,109,180,0.3)" }}
            >
              <h3 className="font-bold text-white text-xl mb-2">Apex</h3>
              <p className="text-white text-3xl font-bold mb-3">
                $99<span className="text-base font-medium text-[#94a3b8]">/month</span>
              </p>
              <p className="text-[#94a3b8] text-sm mb-6" style={{ lineHeight: 1.8 }}>
                For a business that is ready to scale, apply for financing, or manage a larger team.
              </p>
              <FeatureList items={apexFeatures} textColor="#94a3b8" />
              <a
                href="https://app.ai1team.com/signup?plan=apex"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block text-center bg-[#1A3C6E] text-white rounded-full px-6 py-3 font-semibold w-full hover:bg-[#2E6DB4] transition-all"
              >
                Start with Apex
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner program mention */}
      <section className="bg-[#F0F6FF] py-16 px-6">
        <div className="max-w-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#1A1A2E] font-bold text-2xl text-center"
          >
            Know other businesses that could use this?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#555577] text-base max-w-xl mx-auto text-center mt-4"
            style={{ lineHeight: 1.8 }}
          >
            AI1team runs a partner program where you can refer other businesses to BizOS and earn for every successful signup. It is open to BizOS customers and to anyone who wants to participate.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="https://partner.ai1team.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E6DB4] font-semibold text-sm underline mt-4 block text-center"
          >
            Learn about the partner program
          </motion.a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Common questions</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#1A1A2E] font-bold text-3xl text-center max-w-2xl mx-auto mt-4"
          >
            A few things people usually want to know before signing up.
          </motion.h2>

          <div className="mt-12">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1A3C6E] py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white font-bold text-4xl max-w-2xl mx-auto leading-tight"
        >
          Your business deserves better than a spreadsheet.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#94a3b8] text-lg mt-6 max-w-xl mx-auto"
          style={{ lineHeight: 1.8 }}
        >
          BizOS gives you the records, the compliance, and the financial picture that serious businesses need. Start your free trial today and see what a difference two weeks makes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="https://app.ai1team.com/signup?plan=momentum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1A3C6E] rounded-full px-8 py-4 font-bold hover:bg-[#F0F6FF] transition-all inline-block"
          >
            Start your free trial
          </a>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="https://app.ai1team.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#94a3b8] text-sm underline mt-4 block hover:text-white"
        >
          Go to the app
        </motion.a>
      </section>

      {/* Page footer links */}
      <section className="bg-[#0f0f17] py-8 px-6">
        <div className="flex gap-8 justify-center flex-wrap">
          <a
            href="https://app.ai1team.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] text-sm hover:text-white transition-colors"
          >
            Go to app
          </a>
          <a
            href="https://help.ai1team.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] text-sm hover:text-white transition-colors"
          >
            Help center
          </a>
          <a
            href="https://partner.ai1team.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] text-sm hover:text-white transition-colors"
          >
            Partner program
          </a>
        </div>
        <p className="text-[#555577] text-xs text-center mt-6">
          BizOS is a product of AI1team.
        </p>
      </section>
    </div>
  );
}
