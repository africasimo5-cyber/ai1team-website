'use client'

import { demos } from '@/data/demos';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { FaCircleCheck } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Script from 'next/script';

export default function DemoDetailPage() {
  const params = useParams();
  const demo = demos.find(d => d.slug === params.slug);

  if (!demo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section
        className="relative pt-32 pb-16 text-center overflow-hidden"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <Link href="/demos" className="text-sm hover:underline mb-6 inline-block" style={{ color: '#2E6DB4' }}>
            &larr; All Demos
          </Link>

          <p className="uppercase text-xs tracking-widest mt-3" style={{ color: '#94a3b8' }}>
            {demo.category}
          </p>

          <h1 className="text-white font-bold text-4xl md:text-5xl mt-4 max-w-3xl mx-auto">
            {demo.title}
          </h1>

          <p className="text-lg font-semibold mt-4" style={{ color: '#2E6DB4' }}>
            {demo.subtitle}
          </p>
        </motion.div>
      </section>

      {/* 2. VIDEO EMBED SECTION */}
      <section className="bg-white py-16 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div style={{
            position: 'relative', 
            paddingBottom: '56.25%', 
            height: 0, 
            overflow: 'hidden', 
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
          }}>
            <iframe
              src={`https://www.youtube.com/embed/${demo.youtubeId}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              title={demo.title}
            />
          </div>
        </motion.div>
      </section>

      {/* 3. WHAT IT DOES SECTION */}
      <section className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#F0F6FF] rounded-2xl p-10 my-12 max-w-4xl mx-auto"
        >
          <h2 className="uppercase text-[#2E6DB4] text-xs font-bold tracking-widest mb-4">
            WHAT THIS AUTOMATION DOES
          </h2>
          
          <p className="text-[#555577] text-base mb-8 leading-[1.8]">
            {demo.description}
          </p>

          <div className="flex flex-col gap-4">
            {demo.whatItDoes.map((feature, index) => (
              <div key={index} className="flex flex-row items-start gap-3">
                <FaCircleCheck className="text-[#2E6DB4] flex-shrink-0 mt-1" />
                <span className="text-[#1A1A2E] text-base">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#1A3C6E] py-16 px-6 text-center max-w-4xl mx-auto rounded-2xl flex flex-col items-center"
        >
          <h2 className="text-white font-bold text-3xl">
            Want This Built for Your Business?
          </h2>
          
          <p className="text-[#94a3b8] mt-4 max-w-lg mx-auto">
            This exact automation — or something tailored specifically to your business — 
            can be built and running within days.
          </p>

          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <button
              data-cal-link="emmanuel-ai1team/30-mins-free-discovery-call"
              data-cal-namespace="30-mins-free-discovery-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="bg-white text-[#1A3C6E] rounded-full px-8 py-4 font-bold hover:bg-gray-100 transition-colors"
            >
              Book a Free Discovery Call
            </button>
            
            <Link 
              href="/demos"
              className="border border-white text-white rounded-full px-8 py-4 bg-transparent hover:bg-white hover:text-[#1A3C6E] transition-colors font-bold"
            >
              &larr; See More Demos
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Ensure Cal element script loads if not handled globally */}
      <Script
        id="cal-demo-slug"
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
