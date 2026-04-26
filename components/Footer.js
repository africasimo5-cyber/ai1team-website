"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaFacebook, FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full relative bg-[#111827]">
      {/* Top Gradient Accent Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(to right, transparent 0%, #2E6DB4 30%, #9333ea 70%, transparent 100%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Brand */}
          <div>
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="AI1team Logo" 
                width={160} 
                height={50} 
                className="w-[160px] h-auto object-contain" 
                quality={100}
              />
            </div>
            
            <p className="text-[#94a3b8] text-sm leading-relaxed mt-4 max-w-[220px]">
              Automating businesses with intelligent systems that save time, capture leads, and drive real growth.
            </p>
            
            {/* Social Icons Row */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/ai1team/" },
                { icon: <FaXTwitter />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaFacebook />, link: "#" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#94a3b8] text-[16px] transition-all duration-300 hover:bg-[#2E6DB4]/20 hover:border-[#2E6DB4]/40 hover:text-white hover:shadow-[0_0_12px_rgba(46,109,180,0.3)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest pb-4 border-b border-white/10 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-1">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Terms & Privacy", href: "/terms" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-[#94a3b8] text-sm py-1.5 transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    <span className="opacity-0 -ml-4 mr-2 text-[#2E6DB4] transition-all duration-200 group-hover:opacity-100 group-hover:ml-0">
                      &rarr;
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest pb-4 border-b border-white/10 mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#94a3b8] transition-colors duration-200 group-hover:text-[#2E6DB4] group-hover:border-[#2E6DB4]/30">
                  <FaEnvelope size={14} />
                </div>
                <div className="flex flex-col mt-0.5">
                  <span className="text-xs text-[#94a3b8] mb-0.5">Email</span>
                  <a href="mailto:hello@ai1team.com" className="text-white text-sm font-medium transition-colors duration-200 group-hover:text-[#2E6DB4]">
                    hello@ai1team.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#94a3b8]">
                  <FaLocationDot size={14} />
                </div>
                <div className="flex flex-col mt-0.5">
                  <span className="text-xs text-[#94a3b8] mb-0.5">Address</span>
                  <span className="text-white text-sm leading-snug max-w-[180px]">
                    30 N Gould St, Sheridan,<br />Wyoming 82801, USA
                  </span>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#94a3b8]">
                  <FaClock size={14} />
                </div>
                <div className="flex flex-col mt-0.5">
                  <span className="text-xs text-[#94a3b8] mb-0.5">Response Time</span>
                  <span className="text-white text-sm">Within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                Available for New Projects
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest pb-4 border-b border-white/10 mb-4">
              Stay Updated
            </h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
              Get the latest AI automation insights, case studies, and strategies delivered directly to your inbox.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#2E6DB4] transition-colors"
                required
              />
              <button 
                type="submit"
                className="w-full bg-[#2E6DB4] hover:bg-[#1A3C6E] border border-transparent hover:border-[#2E6DB4]/50 text-white text-sm font-medium py-3 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(46,109,180,0.15)] hover:shadow-[0_0_20px_rgba(46,109,180,0.3)]"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
          
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-sm text-center md:text-left">
            © {new Date().getFullYear()} AI1team. All rights reserved.
          </p>
          <div className="flex gap-6 text-[#94a3b8] text-sm">
            <Link href="/terms" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
