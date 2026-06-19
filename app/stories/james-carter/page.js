'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaClock, FaBuilding, FaUsers } from 'react-icons/fa';
import { jamesCarterStory } from '@/data/stories/james-carter';

const CHUNK_SIZE = 7;

function renderPartContent(content, pullQuotes) {
  const elements = [];
  let quoteIdx = 0;

  for (let i = 0; i < content.length; i += CHUNK_SIZE) {
    const chunk = content.slice(i, i + CHUNK_SIZE);

    chunk.forEach((para, j) => {
      elements.push(
        <p
          key={`p-${i}-${j}`}
          className="mb-5 text-base"
          style={{ color: '#555577', lineHeight: '1.9' }}
        >
          {para}
        </p>
      );
    });

    const hasMoreParagraphs = i + CHUNK_SIZE < content.length;
    const hasMoreQuotes = quoteIdx < pullQuotes.length;

    if (hasMoreParagraphs && hasMoreQuotes) {
      const quote = pullQuotes[quoteIdx++];
      elements.push(
        <blockquote
          key={`q-${quoteIdx}`}
          className="my-8 py-5 px-6 flex items-start gap-3 italic font-semibold text-lg"
          style={{
            backgroundColor: '#F0F6FF',
            borderLeft: '4px solid #2E6DB4',
            borderRadius: '0 12px 12px 0',
            color: '#1A3C6E',
          }}
        >
          <FaQuoteLeft className="shrink-0 mt-1" style={{ color: '#2E6DB4' }} />
          <span>{quote}</span>
        </blockquote>
      );
    }
  }

  return elements;
}

export default function JamesCarterPage() {
  const story = jamesCarterStory;

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Link
              href="/stories"
              className="text-sm hover:underline"
              style={{ color: '#2E6DB4' }}
            >
              ← All Stories
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6"
          >
            <span
              className="text-xs font-semibold text-white rounded-full px-3 py-1"
              style={{ backgroundColor: 'rgba(46,109,180,0.2)' }}
            >
              Story #{story.number}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs font-semibold tracking-widest uppercase mt-3"
            style={{ color: '#94a3b8' }}
          >
            {story.category}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold mt-4 max-w-3xl mx-auto leading-tight text-white"
          >
            {story.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xl font-semibold mt-4"
            style={{ color: '#2E6DB4' }}
          >
            The Story of {story.client}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-6 mt-6 flex-wrap"
          >
            <span className="flex items-center gap-2 text-sm" style={{ color: '#94a3b8' }}>
              <FaClock />
              {story.readTime}
            </span>
            <span className="flex items-center gap-2 text-sm" style={{ color: '#94a3b8' }}>
              <FaBuilding />
              {story.industry}
            </span>
            <span className="flex items-center gap-2 text-sm" style={{ color: '#94a3b8' }}>
              <FaUsers />
              {story.teamSize}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Story Content ── */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {story.parts.map((part, partIndex) => (
            <div key={partIndex}>
              {partIndex > 0 && <hr className="border-gray-100 my-12" />}

              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: '#2E6DB4' }}
              >
                {part.number}
              </p>

              <h2
                className="text-2xl font-bold mb-8 pl-4"
                style={{
                  color: '#1A1A2E',
                  borderLeft: '4px solid #2E6DB4',
                }}
              >
                {part.title}
              </h2>

              {renderPartContent(part.content, part.pullQuotes)}
            </div>
          ))}
        </div>
      </div>

      {/* ── Results Section ── */}
      <div className="max-w-3xl mx-auto px-6 my-12">
        <div className="rounded-2xl p-10" style={{ backgroundColor: '#F0F6FF' }}>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: '#2E6DB4' }}
          >
            THE RESULTS
          </p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#1A1A2E' }}>
            What Changed for James
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {story.results.map((result, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-4xl font-bold" style={{ color: '#1A3C6E' }}>
                  {result.number}
                </p>
                <p className="font-semibold text-sm mt-1" style={{ color: '#1A1A2E' }}>
                  {result.label}
                </p>
                <p className="text-xs mt-1" style={{ color: '#555577' }}>
                  {result.timeframe}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Closing Section ── */}
      <div className="bg-white max-w-3xl mx-auto px-6 pb-16 text-center">
        <div
          className="w-16 h-1 rounded-full mx-auto mb-8"
          style={{ backgroundColor: '#2E6DB4' }}
        />
        <p
          className="text-base italic max-w-xl mx-auto"
          style={{ color: '#555577', lineHeight: '1.8' }}
        >
          {story.closing}
        </p>
      </div>

      {/* ── CTA Section ── */}
      <section style={{ backgroundColor: '#1A3C6E' }} className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white">Is Your Story Next?</h2>
          <p className="mt-4 max-w-lg mx-auto" style={{ color: '#94a3b8' }}>
            Every business has a turning point. Let AI1team help you find yours.
          </p>
          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <button
              data-cal-link="emmanuel-ai1team/15min"
              data-cal-namespace="15min"
              data-cal-config='{"layout":"month_view"}'
              className="bg-white font-bold rounded-full px-8 py-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              style={{ color: '#1A3C6E' }}
            >
              Book Your Free Call
            </button>
            <Link
              href="/stories"
              className="border border-white text-white rounded-full px-8 py-4 bg-transparent hover:bg-white hover:text-[#1A3C6E] transition-colors duration-200"
            >
              ← Read More Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
