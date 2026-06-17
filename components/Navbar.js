"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";

const serviceCategories = [
  { label: "AI Agents & Chatbots", href: "/services#ai-agents" },
  { label: "Social Media & Content", href: "/services#social-media" },
  { label: "Business Automation", href: "/services#business-automation" },
  { label: "Claude AI Services", href: "/services#claude-ai" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Stories", href: "/stories" },
  { name: "Demos", href: "/demos" },
  { name: "White Label", href: "/white-label" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [servicesAccordion, setServicesAccordion] = useState(false);
  const pathname = usePathname();

  /* ── Add shadow on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close everything on route change ── */
  useEffect(() => {
    setMenuOpen(false);
    setServicesAccordion(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white border-b border-blue-50
        transition-shadow duration-300 ${scrolled ? "shadow-navbar" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-[100px]">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center select-none group"
          aria-label="AI1team home"
        >
          <div className="relative">
            <Image
              src="/logo.png"
              alt="AI1team Logo"
              width={240}
              height={80}
              className="w-auto h-14 md:h-[80px] object-contain transition-transform group-hover:scale-105"
              priority
              quality={100}
            />
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith("/services");

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesHover(true)}
                  onMouseLeave={() => setServicesHover(false)}
                >
                  {/* Trigger button */}
                  <button
                    aria-haspopup="true"
                    aria-expanded={servicesHover}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium
                      transition-colors duration-150
                      ${isActive
                        ? "text-accent bg-blue-50 font-semibold"
                        : "text-darkText hover:text-accent hover:bg-blue-50"
                      }`}
                  >
                    {link.name}
                    <motion.span
                      animate={{ rotate: servicesHover ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="flex items-center"
                    >
                      <FaChevronDown className="text-[10px] opacity-50" />
                    </motion.span>
                  </button>

                  {/* Dropdown panel */}
                  <AnimatePresence>
                    {servicesHover && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl
                          shadow-[0_8px_32px_rgba(26,60,110,0.12)] border border-gray-100
                          py-2 z-50 overflow-hidden"
                      >
                        {serviceCategories.map((cat) => (
                          <Link
                            key={cat.href}
                            href={cat.href}
                            className="block pl-5 pr-6 py-2.5 text-sm font-medium text-[#1A1A2E]
                              border-l-2 border-transparent
                              hover:border-[#2E6DB4] hover:text-[#2E6DB4] hover:bg-[#F0F6FF]
                              transition-all duration-150"
                          >
                            {cat.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150
                  ${pathname === link.href
                    ? "text-accent bg-blue-50 font-semibold"
                    : "text-darkText hover:text-accent hover:bg-blue-50"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* CTA button */}
          <Link href="/contact" id="navbar-cta" className="ml-4 btn-primary">
            Get Started
          </Link>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 rounded-md text-darkText hover:text-accent hover:bg-blue-50
            transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-blue-50 px-6 pb-6 pt-4 flex flex-col gap-1
            animate-[fadeDown_0.2s_ease-out]"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div key={link.name}>
                  {/* Accordion trigger */}
                  <button
                    onClick={() => setServicesAccordion((prev) => !prev)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg
                      text-sm font-medium transition-colors duration-150
                      ${isActive
                        ? "text-accent bg-blue-50 font-semibold"
                        : "text-darkText hover:text-accent hover:bg-blue-50"
                      }`}
                  >
                    {link.name}
                    <motion.span
                      animate={{ rotate: servicesAccordion ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="flex items-center"
                    >
                      <FaChevronDown className="text-[11px] opacity-50" />
                    </motion.span>
                  </button>

                  {/* Accordion body */}
                  <AnimatePresence initial={false}>
                    {servicesAccordion && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-1 mb-1 flex flex-col border-l-2 border-[#2E6DB4]/20 pl-4">
                          {serviceCategories.map((cat) => (
                            <Link
                              key={cat.href}
                              href={cat.href}
                              onClick={() => setMenuOpen(false)}
                              className="py-2.5 text-sm font-medium text-[#555577]
                                hover:text-[#2E6DB4] transition-colors duration-150"
                            >
                              {cat.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150
                  ${isActive
                    ? "text-accent bg-blue-50 font-semibold"
                    : "text-darkText hover:text-accent hover:bg-blue-50"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="mt-3 btn-primary text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
