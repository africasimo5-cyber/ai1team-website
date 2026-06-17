'use client'

import { demos } from '@/data/demos';
import Link from 'next/link';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Script from 'next/script';

export default function DemosPage() {
  return (
    <div className="min-h-screen">

      {/* ── 1. HERO ── */}
      <section
        className="relative pt-32 pb-20 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #0f0f17 40%, #1A3C6E 100%)' }}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-30 blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2E6DB4 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#2E6DB4' }}
          >
            SEE IT IN ACTION
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Automation Demos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            Real automations, recorded live. Watch exactly how AI1team builds
            systems that run your business without you lifting a finger.
          </motion.p>
        </div>
      </section>

      {/* ── 2. DEMOS GRID ── */}
      <section style={{ backgroundColor: '#F0F6FF' }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-3"
            style={{ color: '#1A1A2E' }}
          >
            Live Demos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
            style={{ color: '#555577' }}
          >
            Click any demo to watch it in full.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <Link href={`/demos/${demo.slug}`} className="block h-full group">
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

                    {/* Thumbnail */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={demo.thumbnail || `https://img.youtube.com/vi/${demo.youtubeId}/maxresdefault.jpg`}
                        alt={demo.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Dark overlay + play button on hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: '#2E6DB4' }}
                        >
                          <FaPlay className="text-white text-xl ml-1" />
                        </div>
                      </div>
                      {/* Category pill always visible */}
                      <span
                        className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: 'rgba(26,60,110,0.85)', backdropFilter: 'blur(4px)' }}
                      >
                        {demo.category}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="font-bold text-xl mb-2" style={{ color: '#1A1A2E' }}>
                        {demo.title}
                      </h2>
                      <p className="text-sm mb-4 flex-grow" style={{ color: '#555577' }}>
                        {demo.subtitle}
                      </p>
                      <span
                        className="text-sm font-semibold mt-auto group-hover:underline"
                        style={{ color: '#2E6DB4' }}
                      >
                        Watch Demo &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. BOTTOM CTA ── */}
      <section style={{ backgroundColor: '#1A3C6E' }} className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white"
          >
            Want This Built for Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            Every demo you see is a real system we can customize and build for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              data-cal-link="emmanuel-ai1team/30-mins-free-discovery-call"
              data-cal-namespace="30-mins-free-discovery-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="font-bold rounded-full px-8 py-4 mt-8 cursor-pointer hover:bg-gray-100 transition-colors duration-200 inline-block"
              style={{ backgroundColor: '#FFFFFF', color: '#1A3C6E' }}
            >
              Book a Free Discovery Call
            </button>
          </motion.div>
        </div>
      </section>

      <Script
        id="cal-demos"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal; let ar = arguments;
                if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "30-mins-free-discovery-call", { origin: "https://app.cal.com" });
            Cal.ns["30-mins-free-discovery-call"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
          `
        }}
      />
    </div>
  );
}
