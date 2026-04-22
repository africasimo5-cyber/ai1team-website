"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const TeamCard = ({ name, role, bio, linkedIn, imageSrc }) => {
  // Extract initials for the placeholder avatar.
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2)
    : "AI";

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center group">
      {/* Avatar or Placeholder */}
      {imageSrc ? (
        <div className="mb-6 flex justify-center">
          <Image
            src={imageSrc}
            alt={`${name} - ${role}`}
            width={160}
            height={160}
            className="rounded-full ring-4 ring-[#2E6DB4] object-cover aspect-square"
          />
        </div>
      ) : (
        <div className="w-40 h-40 rounded-full bg-blue-50 flex items-center justify-center mb-6 border-4 border-white shadow-sm ring-4 ring-[#2E6DB4] group-hover:ring-accent transition-all duration-300">
          <span className="text-primary font-bold text-3xl tracking-widest">{initials}</span>
        </div>
      )}

      <h3 className="text-xl font-bold text-[#1A3C6E] mb-1">{name}</h3>
      <p className="text-[#2E6DB4] text-sm font-semibold mb-5 uppercase tracking-wider">{role}</p>
      
      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
        {bio}
      </p>

      {linkedIn && (
        <a 
          href={linkedIn} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2E6DB4] hover:bg-[#2E6DB4] hover:text-white transition-colors duration-200 mt-auto"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <FaLinkedin size={20} />
        </a>
      )}
    </div>
  );
};

export default TeamCard;
