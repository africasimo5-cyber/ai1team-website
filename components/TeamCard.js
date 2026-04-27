"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const TeamCard = ({ name, role, bio, linkedIn, imageSrc }) => {
  const initials = name
    ? name.split(" ").map((n) => n[0]).join("").toUpperCase().substring(0, 2)
    : "AI";

  return (
    <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden
      flex flex-col items-center text-center
      transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(46,109,180,0.12)]">

      {/* Gradient top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2E6DB4] to-[#818cf8]" />

      {/* Light hero band behind photo */}
      <div className="w-full bg-gradient-to-b from-[#F0F6FF] to-white pt-10 pb-6 px-8 flex flex-col items-center">
        {imageSrc ? (
          <div className="relative mb-4">
            {/* Gradient ring */}
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-[#2E6DB4] to-[#818cf8]" />
            <Image
              src={imageSrc}
              alt={`${name} — ${role}`}
              width={128}
              height={128}
              className="relative w-32 h-32 rounded-full object-cover border-[3px] border-white"
            />
          </div>
        ) : (
          <div className="relative mb-4">
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-[#2E6DB4] to-[#818cf8]" />
            <div className="relative w-32 h-32 rounded-full bg-[#EEF4FF] border-[3px] border-white flex items-center justify-center">
              <span className="text-[#1A3C6E] font-bold text-3xl tracking-widest">{initials}</span>
            </div>
          </div>
        )}

        <h3 className="text-lg font-bold text-[#1A1A2E]">{name}</h3>
        <p className="text-xs font-bold uppercase tracking-widest text-[#2E6DB4] mt-1">{role}</p>
      </div>

      {/* Body */}
      <div className="px-8 pb-8 flex flex-col items-center flex-1">
        <div className="w-8 h-px bg-gradient-to-r from-[#2E6DB4] to-[#818cf8] mb-5" />

        <p className="text-[#555577] text-sm leading-relaxed mb-7 flex-grow">{bio}</p>

        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}'s LinkedIn profile`}
            className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182]
              text-white text-xs font-semibold px-5 py-2.5 rounded-full
              transition-colors duration-200"
          >
            <FaLinkedin size={14} />
            Connect on LinkedIn
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
