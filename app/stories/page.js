'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaQuoteLeft, FaClock, FaPlus } from 'react-icons/fa';
import { sarahMitchellStory } from '@/data/stories/sarah-mitchell';
import { jamesCarterStory } from '@/data/stories/james-carter';
import { lenaOkaforStory } from '@/data/stories/lena-okafor';

export default function StoriesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-24 pb-24 md:pt-24 md:pb-32 text-center overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #0a0a0f 0%, #0f0f17 40%, #1A3C6E 100%)' 
        }}
      >
        {/* Decorative Grid Background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Ambient Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-30 blur-[120px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #2E6DB4 0%, transparent 70%)'
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#2E6DB4' }}
          >
            CLIENT STORIES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Real Businesses. Real Results.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            These are not case studies. These are the real stories of business owners who stopped
            doing manually what a system could do for them — and what happened next.
          </motion.p>
        </div>
      </section>

      {/* ── Stories Grid ── */}
      <section style={{ backgroundColor: '#F0F6FF' }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center"
            style={{ color: '#1A1A2E' }}
          >
            Stories So Far
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mt-3 mb-12"
            style={{ color: '#555577' }}
          >
            Every story is different. Every business is unique. But the turning point is always the same.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* ── Story Card: Sarah Mitchell ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/stories/sarah-mitchell" className="block group">
                <div className="bg-white rounded-2xl shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Banner */}
                  <div
                    className="h-48 relative flex flex-col justify-between p-6"
                    style={{ background: 'linear-gradient(135deg, #1A3C6E, #0f0f17)' }}
                  >
                    <span
                      className="text-xs font-semibold text-white rounded-full px-3 py-1 w-fit"
                      style={{ backgroundColor: 'rgba(46,109,180,0.2)' }}
                    >
                      Story #{sarahMitchellStory.number}
                    </span>
                    <FaQuoteLeft className="text-white text-6xl mt-3" style={{ opacity: 0.2 }} />
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p
                      className="text-xs uppercase font-semibold tracking-wide mb-3"
                      style={{ color: '#2E6DB4' }}
                    >
                      {sarahMitchellStory.category}
                    </p>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1A1A2E' }}>
                      {sarahMitchellStory.title}
                    </h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: '#2E6DB4' }}>
                      {sarahMitchellStory.client} — {sarahMitchellStory.role}
                    </p>
                    <p className="text-sm mb-4" style={{ color: '#555577' }}>
                      {sarahMitchellStory.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="flex items-center gap-1.5 text-xs"
                        style={{ color: '#94a3b8' }}
                      >
                        <FaClock />
                        {sarahMitchellStory.readTime}
                      </span>
                      <span className="text-sm font-semibold" style={{ color: '#2E6DB4' }}>
                        Read Story →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* ── Story Card: James Carter ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/stories/james-carter" className="block group">
                <div className="bg-white rounded-2xl shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Banner */}
                  <div
                    className="h-48 relative flex flex-col justify-between p-6"
                    style={{ background: 'linear-gradient(135deg, #1A3C6E, #0f0f17)' }}
                  >
                    <span
                      className="text-xs font-semibold text-white rounded-full px-3 py-1 w-fit"
                      style={{ backgroundColor: 'rgba(46,109,180,0.2)' }}
                    >
                      Story #02
                    </span>
                    <FaQuoteLeft className="text-white text-6xl mt-3" style={{ opacity: 0.2 }} />
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p
                      className="text-xs uppercase font-semibold tracking-wide mb-3"
                      style={{ color: '#2E6DB4' }}
                    >
                      {jamesCarterStory.category}
                    </p>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1A1A2E' }}>
                      {jamesCarterStory.title}
                    </h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: '#2E6DB4' }}>
                      {jamesCarterStory.client} — {jamesCarterStory.role}
                    </p>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#555577' }}>
                      {jamesCarterStory.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="flex items-center gap-1.5 text-xs"
                        style={{ color: '#94a3b8' }}
                      >
                        <FaClock />
                        {jamesCarterStory.readTime}
                      </span>
                      <span className="text-sm font-semibold" style={{ color: '#2E6DB4' }}>
                        Read Story →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* ── Story Card: Lena Okafor ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/stories/lena-okafor" className="block group">
                <div className="bg-white rounded-2xl shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Banner */}
                  <div
                    className="h-48 relative flex flex-col justify-between p-6"
                    style={{ background: 'linear-gradient(135deg, #1A3C6E, #0f0f17)' }}
                  >
                    <span
                      className="text-xs font-semibold text-white rounded-full px-3 py-1 w-fit"
                      style={{ backgroundColor: 'rgba(46,109,180,0.2)' }}
                    >
                      Story #03
                    </span>
                    <FaQuoteLeft className="text-white text-6xl mt-3" style={{ opacity: 0.2 }} />
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p
                      className="text-xs uppercase font-semibold tracking-wide mb-3"
                      style={{ color: '#2E6DB4' }}
                    >
                      {lenaOkaforStory.category}
                    </p>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1A1A2E' }}>
                      {lenaOkaforStory.title}
                    </h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: '#2E6DB4' }}>
                      {lenaOkaforStory.client} — {lenaOkaforStory.role}
                    </p>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#555577' }}>
                      {lenaOkaforStory.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="flex items-center gap-1.5 text-xs"
                        style={{ color: '#94a3b8' }}
                      >
                        <FaClock />
                        {lenaOkaforStory.readTime}
                      </span>
                      <span className="text-sm font-semibold" style={{ color: '#2E6DB4' }}>
                        Read Story →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* ── Placeholder Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="border-2 border-dashed border-gray-300 bg-white rounded-2xl min-h-64 flex items-center justify-center flex-col p-8 text-center">
                <FaPlus className="text-3xl mb-3" style={{ color: '#d1d5db' }} />
                <p className="text-sm" style={{ color: '#9ca3af' }}>
                  More stories coming soon
                </p>
                <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>
                  Every week, a new transformation.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ backgroundColor: '#1A3C6E' }} className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white"
          >
            Is Your Story Next?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            Every business has a turning point. Let AI1team help you find yours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              data-cal-link="emmanuel-ai1team/15min"
              data-cal-namespace="15min"
              data-cal-config='{"layout":"month_view"}'
              className="bg-white font-bold rounded-full px-8 py-4 mt-8 cursor-pointer hover:bg-gray-100 transition-colors duration-200 inline-block"
              style={{ color: '#1A3C6E' }}
            >
              Book Your Free Discovery Call
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
