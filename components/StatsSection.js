"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaClock, FaBuilding, FaStar, FaChartLine } from "react-icons/fa";

function useCountUp(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    
    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [shouldStart, target, duration]);

  return count;
}

const StatsSection = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const count1 = useCountUp(500, 2000, hasStarted);
  const count2 = useCountUp(50, 2000, hasStarted);
  const count3 = useCountUp(98, 2000, hasStarted);
  const count4 = useCountUp(3, 2000, hasStarted);

  const stats = [
    { count: count1, suffix: "+", label: "Hours Saved Per Client", icon: FaClock },
    { count: count2, suffix: "+", label: "Businesses Automated", icon: FaBuilding },
    { count: count3, suffix: "%", label: "Client Satisfaction Rate", icon: FaStar },
    { count: count4, suffix: "x", label: "Average ROI Increase", icon: FaChartLine },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#0A193C] w-full relative overflow-hidden z-10">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(46,109,180,0.15)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] rounded-full pointer-events-none" />
      
      {/* Top Gradient Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(to right, transparent 0%, #2E6DB4 25%, #9333ea 75%, transparent 100%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-1 ${
                    index !== stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-[#93c5fd] group-hover:text-white group-hover:bg-[#2E6DB4]/30 transition-all duration-300">
                    <Icon className="text-xl" />
                  </div>
                  
                  <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 text-5xl mb-2">
                    {stat.count}{stat.suffix}
                  </div>
                  
                  <div className="text-white/60 text-sm font-medium tracking-wide max-w-[140px] mx-auto leading-snug">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
