import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A3C6E] text-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: About */}
          <div>
            <Image src="/logo.png" alt="AI1team Logo" width={180} height={40} className="w-auto h-10 mb-4" />
            <p className="text-blue-200 text-sm italic mb-6">
              AI-Powered Marketing for Modern Businesses
            </p>
            <p className="text-sm text-gray-100 leading-relaxed max-w-xs">
              AI1team is a leading intelligence-driven automation & marketing agency. We leverage cutting-edge artificial intelligence to scale brand growth and optimize digital strategies for ambitious teams worldwide.
            </p>
            <div className="flex gap-6 mt-8">
              <a href="https://www.linkedin.com/company/ai1team/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300 transition-colors" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-12">
            <h3 className="text-lg font-semibold mb-8 uppercase tracking-widest text-blue-200">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-300 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-300 transition-colors">Terms & Privacy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-8 uppercase tracking-widest text-blue-200">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="font-bold text-blue-100">Email</span>
                <span className="text-gray-100">hello@ai1team.com</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-blue-100">Location</span>
                <span className="text-gray-100">USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8 text-center text-sm md:text-base font-medium text-white tracking-wide">
          <p>© 2026 AI1team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
