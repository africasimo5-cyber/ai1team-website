"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home",     href: "/" },
  { name: "Services", href: "/services" },
  { name: "About",    href: "/about" },
  { name: "Contact",  href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const pathname                  = usePathname();

  /* ── Add shadow on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white border-b border-blue-50
        transition-shadow duration-300 ${scrolled ? "shadow-navbar" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2 select-none"
          aria-label="AI1team home"
        >
          <Image src="/logo.png" alt="AI1team Logo" width={180} height={40} className="w-auto h-8 md:h-9" priority />
        </Link>

        {/* ── Desktop nav links ── */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150
                  ${isActive
                    ? "text-accent bg-blue-50 font-semibold"
                    : "text-darkText hover:text-accent hover:bg-blue-50"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* CTA button */}
          <Link
            href="/contact"
            id="navbar-cta"
            className="ml-4 btn-primary"
          >
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

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-blue-50 px-6 pb-6 pt-4 flex flex-col gap-1
            animate-[fadeDown_0.2s_ease-out]"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
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
