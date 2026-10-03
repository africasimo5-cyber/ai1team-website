"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaAddressBook, FaFileInvoice, FaReceipt, FaGears, FaChartLine } from "react-icons/fa6";

// Navbar and Footer are rendered by app/layout.js (ConditionalNavbar and
// ConditionalFooter) on this route, so they are not rendered again here.

const globalStyles = `
  /* ── FONTS ── */
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

  /* ── DESIGN TOKENS ── */
  :root {
    --brand: #1A3C6E;
    --accent: #2E6DB4;
    --accent-gold: #E0A526;
    --bg: #ffffff;
    --bg-2: #F4F6F8;
    --bg-3: #E8ECF0;
    --night: #0f0f17;
    --ink: #1A1A2E;
    --ink-2: #2A3B4A;
    --muted: #555577;
    --line: rgba(10,28,43,.11);
    --go: #1B8A5A;
    --go-soft: #E3F1E9;
    --stop: #B23A2E;
    --stop-soft: #F8E6E3;
    --warn: #C08A2E;
    --warn-soft: #F6EEDC;
    --mint: #E6F0EA;
    --peach: #F7EAE6;
    --sky: #E7EEF3;
    --butter: #F6EFDF;
    --lilac: #ECEBF2;
    --font: "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
    --mono: "JetBrains Mono", ui-monospace, Menlo, monospace;
    --r-xs: 8px;
    --r-sm: 12px;
    --r: 22px;
    --r-lg: 32px;
    --pill: 999px;
    --shadow:
      0 1px 2px rgba(10,28,43,.05),
      0 10px 30px -14px rgba(10,28,43,.18);
    --shadow-lift:
      0 2px 4px rgba(10,28,43,.04),
      0 24px 60px -24px rgba(10,28,43,.30);
    --shadow-float:
      0 1px 2px rgba(10,28,43,.06),
      0 18px 40px -12px rgba(10,28,43,.28);
    --page: 76rem;
    --gutter: clamp(1.1rem, 4vw, 3rem);
    --ease: cubic-bezier(.22,.72,.28,1);
    --ease-out: cubic-bezier(.16,1,.3,1);
    --spring: cubic-bezier(.34,1.56,.64,1);
  }

  /* ── GLOBAL RESETS ── */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font);
    color: var(--ink);
    background: var(--bg);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* The layout's font-sans class on <body> outranks the body rule above,
     so the page wrapper sets the font itself. */
  .bv2-page {
    font-family: var(--font);
    color: var(--ink);
  }

  /* ── TYPOGRAPHY ── */
  .bv2-headline {
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.05;
    font-size: clamp(2.2rem, 5vw, 4.2rem);
    color: var(--ink);
  }

  .bv2-headline-white {
    color: #ffffff;
  }

  .bv2-subtext {
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    line-height: 1.7;
    color: var(--muted);
    max-width: 38rem;
  }

  .bv2-mono {
    font-family: var(--mono);
    font-size: 0.8rem;
  }

  /* ── EYEBROW PILL ── */
  .bv2-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    background: var(--bg-2);
    border: 1px solid var(--line);
    border-radius: var(--pill);
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--ink-2);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }

  .bv2-eyebrow-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    animation: pulse-dot 2s ease-in-out infinite;
  }

  /* ── BUTTONS ── */
  .bv2-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    background: var(--brand);
    color: #fff;
    border: none;
    border-radius: var(--pill);
    font-family: var(--font);
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    transition:
      transform 0.2s var(--ease),
      box-shadow 0.2s var(--ease),
      background 0.2s var(--ease);
    box-shadow: var(--shadow);
  }

  .bv2-btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-lift);
    background: #0f2a52;
  }

  .bv2-btn-primary:active {
    transform: scale(0.97);
    transition: transform 0.1s var(--spring);
  }

  .bv2-btn-primary .bv2-arrow {
    display: inline-block;
    transition: transform 0.2s var(--ease);
  }

  .bv2-btn-primary:hover .bv2-arrow {
    transform: translateX(3px);
  }

  .bv2-btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 26px;
    background: transparent;
    color: var(--ink);
    border: 1.5px solid var(--line);
    border-radius: var(--pill);
    font-family: var(--font);
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition:
      transform 0.2s var(--ease),
      border-color 0.2s var(--ease),
      background 0.2s var(--ease);
  }

  .bv2-btn-secondary:hover {
    transform: translateY(-1px);
    border-color: var(--accent);
    background: var(--bg-2);
  }

  .bv2-btn-secondary:active {
    transform: scale(0.97);
    transition: transform 0.1s var(--spring);
  }

  .bv2-btn-white {
    background: #ffffff;
    color: var(--brand);
    border-color: transparent;
  }

  .bv2-btn-white:hover {
    background: var(--bg-2);
    border-color: transparent;
  }

  /* ── SECTION WRAPPER ── */
  .bv2-section {
    padding: clamp(4rem, 8vw, 8rem) var(--gutter);
  }

  .bv2-container {
    max-width: var(--page);
    margin: 0 auto;
  }

  .bv2-section-top {
    text-align: center;
    margin-bottom: clamp(3rem, 6vw, 5rem);
  }

  /* ── STICKY HEADER ── */
  .bizos-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    transition:
      background 0.3s var(--ease),
      box-shadow 0.3s var(--ease),
      backdrop-filter 0.3s var(--ease);
  }

  .bizos-header.scrolled {
    background: rgba(255,255,255,0.86);
    backdrop-filter: saturate(1.6) blur(14px);
    -webkit-backdrop-filter: saturate(1.6) blur(14px);
    border-bottom: 1px solid var(--line);
    box-shadow: 0 1px 0 rgba(10,28,43,.04);
  }

  /* ── STATUS PILLS ── */
  .bv2-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 10px;
    border-radius: var(--pill);
    font-size: 0.72rem;
    font-weight: 600;
  }

  .bv2-pill-go {
    background: var(--go-soft);
    color: var(--go);
  }

  .bv2-pill-stop {
    background: var(--stop-soft);
    color: var(--stop);
  }

  .bv2-pill-warn {
    background: var(--warn-soft);
    color: var(--warn);
  }

  /* ── CARD ── */
  .bv2-card {
    background: var(--bg);
    border-radius: var(--r);
    box-shadow: var(--shadow);
    transition:
      transform 0.5s var(--ease-out),
      box-shadow 0.5s var(--ease-out);
  }

  .bv2-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lift);
  }

  /* ── MOCKUP CHROME ── */
  .bv2-browser {
    background: #1a1a2e;
    border-radius: var(--r);
    overflow: hidden;
    box-shadow: var(--shadow-float);
    border: 1px solid rgba(255,255,255,0.08);
  }

  .bv2-browser-bar {
    background: #0f0f17;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .bv2-browser-dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }

  .bv2-browser-address {
    flex: 1;
    height: 18px;
    background: rgba(255,255,255,0.06);
    border-radius: var(--pill);
    margin-left: 8px;
  }

  .bv2-phone {
    background: #1a1a2e;
    border-radius: 28px;
    border: 6px solid #2a2a40;
    box-shadow: var(--shadow-float);
    overflow: hidden;
    width: 220px;
    min-height: 380px;
  }

  .bv2-phone-notch {
    width: 80px;
    height: 20px;
    background: #0f0f17;
    border-radius: 0 0 14px 14px;
    margin: 0 auto;
  }

  /* ── MOCKUP UI ELEMENTS ── */
  .bv2-mock-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid var(--line);
    font-size: 0.82rem;
  }

  .bv2-mock-row:last-child {
    border-bottom: none;
  }

  .bv2-mock-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.7rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  .bv2-mock-label {
    font-size: 0.78rem;
    color: var(--muted);
  }

  .bv2-mock-value {
    font-family: var(--mono);
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--ink);
  }

  .bv2-mock-amount-large {
    font-family: var(--mono);
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--ink);
    letter-spacing: -0.02em;
  }

  /* ── CHAT BUBBLE ── */
  .bv2-chat-bubble {
    padding: 8px 12px;
    border-radius: 14px;
    font-size: 0.82rem;
    line-height: 1.4;
    max-width: 80%;
    margin-bottom: 6px;
  }

  .bv2-chat-in {
    background: #f0f0f0;
    color: var(--ink);
    border-bottom-left-radius: 4px;
    align-self: flex-start;
  }

  .bv2-chat-out {
    background: var(--accent);
    color: white;
    border-bottom-right-radius: 4px;
    align-self: flex-end;
  }

  .bv2-chat-time {
    font-size: 0.65rem;
    color: var(--muted);
    margin-bottom: 4px;
  }

  .bv2-typing-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--muted);
    display: inline-block;
    animation: typing-bounce 1.1s ease-in-out infinite;
  }

  .bv2-typing-dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .bv2-typing-dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  /* ── MARQUEE ── */
  .bv2-marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-left 28s linear infinite;
  }

  .bv2-marquee-track:hover {
    animation-play-state: paused;
  }

  /* ── AMBIENT GLOW ── */
  .bv2-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    animation: glow-drift 16s ease-in-out infinite alternate;
  }

  /* ── STATUS DOT (live pulse) ── */
  .bv2-live-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--go);
    animation: pulse-dot 2s ease-in-out infinite;
  }

  /* ── KEYFRAMES ── */
  @keyframes marquee-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }

  @keyframes typing-bounce {
    0%, 60%, 100% { transform: translateY(0); }
    30% { transform: translateY(-6px); }
  }

  @keyframes glow-drift {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(40px, -30px) scale(1.1); }
  }

  @keyframes ring-pulse {
    0% { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(1.6); opacity: 0; }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(200%); }
  }

  @keyframes fade-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── REDUCED MOTION ── */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    .bv2-marquee-track {
      animation: none;
    }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .bv2-grid-2 {
      grid-template-columns: 1fr !important;
    }
    .bv2-phone {
      width: 180px;
    }
  }

  @media (max-width: 480px) {
    .bv2-btn-primary,
    .bv2-btn-secondary {
      width: 100%;
      justify-content: center;
    }
  }

  /* ── FAQ ACCORDION ── */
  .bv2-faq-item {
    border-bottom: 1px solid var(--line);
    padding: 20px 0;
  }

  .bv2-faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    color: var(--ink);
    font-size: 1rem;
    gap: 16px;
    user-select: none;
    list-style: none;
  }

  .bv2-faq-chevron {
    font-size: 1.2rem;
    color: var(--accent);
    font-weight: 700;
    flex-shrink: 0;
    transition: transform 0.25s var(--ease);
    display: inline-block;
  }

  .bv2-faq-chevron.open {
    transform: rotate(45deg);
  }

  .bv2-faq-answer {
    overflow: hidden;
    transition: height 0.3s var(--ease-out), opacity 0.3s var(--ease);
    opacity: 0;
    height: 0;
  }

  .bv2-faq-answer.open {
    opacity: 1;
  }

  .bv2-faq-answer-inner {
    padding-top: 12px;
    color: var(--muted);
    font-size: 0.93rem;
    line-height: 1.8;
  }

  /* ── COMPARISON ── */
  .bv2-compare-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 0;
    border-bottom: 1px solid var(--line);
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--muted);
  }

  .bv2-compare-item:last-child {
    border-bottom: none;
  }

  .bv2-compare-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .bv2-compare-icon-no {
    background: var(--stop-soft);
    color: var(--stop);
  }

  .bv2-compare-icon-yes {
    background: var(--go-soft);
    color: var(--go);
  }

  /* ── STEP NUMBER ── */
  .bv2-step-num {
    font-family: var(--mono);
    font-size: 5rem;
    font-weight: 700;
    color: var(--accent);
    opacity: 0.12;
    line-height: 1;
    margin-bottom: 4px;
    letter-spacing: -0.04em;
  }

  /* ── TIMELINE ROW ── */
  .bv2-timeline-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px 0;
    opacity: 0;
    transform: translateY(8px);
    transition:
      opacity 0.4s var(--ease-out),
      transform 0.4s var(--ease-out);
  }

  .bv2-timeline-row.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .bv2-timeline-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
    margin-top: 4px;
  }

  .bv2-timeline-line {
    position: absolute;
    left: 4px;
    top: 14px;
    bottom: 0;
    width: 2px;
    background: var(--line);
  }

  /* ── HERO ── */
  .bv2-hero {
    position: relative;
    min-height: 100vh;
    background: var(--night);
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: clamp(6rem, 12vw, 10rem) var(--gutter) clamp(4rem, 8vw, 7rem);
  }

  .bv2-hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem, 5vw, 5rem);
    align-items: center;
    max-width: var(--page);
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 900px) {
    .bv2-hero-grid {
      grid-template-columns: 1fr;
    }
    .bv2-hero-right {
      display: none;
    }
  }

  /* Rotating word highlight */
  .bv2-hero-word {
    position: relative;
    display: inline-block;
    color: #ffffff;
  }

  .bv2-hero-word-inner {
    position: relative;
    z-index: 1;
  }

  .bv2-hero-word::after {
    content: '';
    position: absolute;
    inset: -2px -6px;
    background: var(--accent);
    border-radius: 6px;
    z-index: 0;
    transform: skewX(-3deg);
    opacity: 0;
    transition: opacity 0.4s var(--ease);
  }

  .bv2-hero-word.active::after {
    opacity: 1;
  }

  /* Glow orbs */
  .bv2-glow-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(46,109,180,0.25) 0%, transparent 70%);
    top: -100px;
    right: -80px;
  }

  .bv2-glow-2 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(26,60,110,0.30) 0%, transparent 70%);
    bottom: 0;
    left: -60px;
    animation-delay: -8s;
  }

  /* Dashboard mockup */
  .bv2-dash-wrap {
    position: relative;
  }

  .bv2-dash-phone {
    position: absolute;
    bottom: -24px;
    right: -20px;
    z-index: 10;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5));
  }

  /* Stat cards inside dashboard */
  .bv2-stat-card {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 12px 16px;
  }

  /* The dashboard body is light (#f8fafc), so the white stat text above
     would be invisible there. Give the cards the navy brand ground. */
  .bv2-browser .bv2-stat-card {
    background: var(--brand);
    border-color: transparent;
  }

  .bv2-stat-label {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 4px;
  }

  .bv2-stat-value {
    font-family: var(--mono);
    font-size: 1.3rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.02em;
  }

  .bv2-stat-change {
    font-size: 0.7rem;
    margin-top: 2px;
  }

  .bv2-stat-up { color: #4ade80; }
  .bv2-stat-down { color: #f87171; }

  /* Mini bar chart */
  .bv2-bar-group {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    height: 40px;
  }

  .bv2-bar {
    flex: 1;
    background: rgba(46,109,180,0.4);
    border-radius: 3px 3px 0 0;
    transition: background 0.3s;
  }

  .bv2-bar.active {
    background: #2E6DB4;
  }

  /* Invoice row in mockup */
  .bv2-inv-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    font-size: 0.78rem;
    color: rgba(255,255,255,0.8);
  }

  .bv2-inv-row:last-child {
    border-bottom: none;
  }

  /* Chat messages in phone mockup */
  .bv2-phone-header {
    background: rgba(255,255,255,0.06);
    padding: 10px 12px;
    font-size: 0.78rem;
    color: rgba(255,255,255,0.9);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .bv2-phone-chat {
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
  }

  .bv2-notification-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background: var(--accent);
    border-radius: 50%;
    font-size: 0.65rem;
    color: white;
    font-weight: 700;
  }

  /* ── MARQUEE STRIP ── */
  .bv2-marquee-strip {
    background: var(--brand);
    padding: 14px 0;
    overflow: hidden;
    position: relative;
  }

  .bv2-marquee-item {
    display: inline-flex;
    align-items: center;
    gap: 0;
    white-space: nowrap;
    font-size: 0.82rem;
    font-weight: 600;
    color: rgba(255,255,255,0.75);
    padding: 0 8px;
  }

  .bv2-marquee-sep {
    color: rgba(255,255,255,0.25);
    margin: 0 16px;
    font-size: 1rem;
  }

  /* ── PROBLEM SECTION ── */
  .bv2-problem {
    background: var(--bg);
    padding: clamp(5rem, 9vw, 8rem) var(--gutter);
  }

  .bv2-problem-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(3rem, 6vw, 6rem);
    align-items: center;
    max-width: var(--page);
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    .bv2-problem-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Chaos inbox mockup */
  .bv2-chaos-wrap {
    position: relative;
    height: 480px;
  }

  .bv2-chaos-phone {
    position: absolute;
    width: 240px;
    background: #1a1a2e;
    border-radius: 28px;
    border: 6px solid #2a2a40;
    overflow: hidden;
    box-shadow: var(--shadow-float);
  }

  .bv2-chaos-phone-1 {
    top: 0;
    left: 0;
    z-index: 3;
    transform: rotate(-3deg);
  }

  .bv2-chaos-phone-2 {
    top: 40px;
    right: 0;
    z-index: 2;
    transform: rotate(2deg);
  }

  .bv2-chaos-phone-3 {
    bottom: 0;
    left: 40px;
    z-index: 1;
    transform: rotate(-1deg);
    opacity: 0.7;
  }

  .bv2-chaos-notch {
    width: 70px;
    height: 16px;
    background: #0f0f17;
    border-radius: 0 0 12px 12px;
    margin: 0 auto;
  }

  .bv2-chaos-header {
    padding: 8px 12px;
    background: rgba(255,255,255,0.04);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .bv2-chaos-header-text {
    font-size: 0.75rem;
    font-weight: 600;
    color: rgba(255,255,255,0.85);
  }

  .bv2-chaos-msg {
    padding: 8px 12px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .bv2-chaos-msg-avatar {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    font-weight: 700;
    color: white;
  }

  .bv2-chaos-msg-body {
    flex: 1;
    min-width: 0;
  }

  .bv2-chaos-msg-name {
    font-size: 0.7rem;
    font-weight: 600;
    color: rgba(255,255,255,0.8);
    margin-bottom: 2px;
  }

  .bv2-chaos-msg-text {
    font-size: 0.65rem;
    color: rgba(255,255,255,0.4);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bv2-chaos-msg-time {
    font-size: 0.6rem;
    color: rgba(255,255,255,0.25);
    flex-shrink: 0;
  }

  .bv2-unread-badge {
    width: 16px;
    height: 16px;
    background: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    font-weight: 700;
    color: white;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* Problem cards */
  .bv2-problem-card {
    border-left: 3px solid var(--line);
    padding: 16px 0 16px 20px;
    margin-bottom: 24px;
    transition: border-color 0.3s var(--ease);
  }

  .bv2-problem-card:hover {
    border-left-color: var(--accent);
  }

  .bv2-problem-card-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 6px;
  }

  .bv2-problem-card-text {
    font-size: 0.88rem;
    line-height: 1.7;
    color: var(--muted);
  }

  /* ── MEET BIZOS (feature cards) ── */
  .bv2-features {
    background: var(--bg-2);
    padding: clamp(5rem, 9vw, 8rem) var(--gutter);
  }

  .bv2-feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    max-width: var(--page);
    margin: 0 auto;
  }

  .bv2-feature-card {
    background: var(--bg);
    border-radius: var(--r);
    padding: 28px;
    border: 1px solid var(--line);
    transition:
      transform 0.4s var(--ease-out),
      box-shadow 0.4s var(--ease-out),
      border-color 0.3s var(--ease);
    cursor: default;
  }

  .bv2-feature-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lift);
    border-color: var(--accent);
  }

  .bv2-feature-icon {
    width: 44px;
    height: 44px;
    border-radius: var(--r-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    margin-bottom: 16px;
  }

  .bv2-feature-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 8px;
  }

  .bv2-feature-text {
    font-size: 0.85rem;
    line-height: 1.7;
    color: var(--muted);
  }

  .bv2-feature-tag {
    display: inline-block;
    margin-top: 14px;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--accent);
    background: var(--sky);
    padding: 3px 10px;
    border-radius: var(--pill);
  }

  /* ── WATCH A SALE HAPPEN ── */
  .bv2-demo {
    background: var(--night);
    padding: clamp(5rem, 9vw, 8rem) var(--gutter);
    /* clip, not hidden: overflow hidden would stop the sticky mockup sticking */
    overflow-x: clip;
  }

  .bv2-demo-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: clamp(3rem, 6vw, 6rem);
    align-items: start;
    max-width: var(--page);
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    .bv2-demo-grid {
      grid-template-columns: 1fr;
    }
  }

  .bv2-demo-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .bv2-demo-tab {
    padding: 7px 16px;
    border-radius: var(--pill);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    border: 1.5px solid rgba(255,255,255,0.12);
    background: transparent;
    color: rgba(255,255,255,0.45);
    font-family: var(--font);
    transition:
      background 0.2s var(--ease),
      color 0.2s var(--ease),
      border-color 0.2s var(--ease);
  }

  .bv2-demo-tab.active {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
  }

  .bv2-demo-timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .bv2-tl-row {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    opacity: 0;
    transform: translateY(10px);
    transition:
      opacity 0.45s var(--ease-out),
      transform 0.45s var(--ease-out);
  }

  .bv2-tl-row.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .bv2-tl-row:last-child {
    border-bottom: none;
  }

  .bv2-tl-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(46,109,180,0.2);
    border: 1px solid rgba(46,109,180,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 0.75rem;
    color: var(--accent);
    font-weight: 700;
    margin-top: 2px;
  }

  .bv2-tl-icon.done {
    background: rgba(27,138,90,0.2);
    border-color: rgba(27,138,90,0.4);
    color: #4ade80;
  }

  .bv2-tl-content {
    flex: 1;
  }

  .bv2-tl-label {
    font-size: 0.72rem;
    color: rgba(255,255,255,0.35);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 3px;
  }

  .bv2-tl-value {
    font-size: 0.88rem;
    font-weight: 600;
    color: rgba(255,255,255,0.85);
    margin-bottom: 2px;
  }

  .bv2-tl-meta {
    font-size: 0.72rem;
    color: rgba(255,255,255,0.35);
    font-family: var(--mono);
  }

  .bv2-demo-mockup-wrap {
    position: sticky;
    /* clears the 100px fixed site navbar */
    top: 120px;
  }

  /* ── HOW IT WORKS ── */
  .bv2-how {
    background: var(--bg);
    padding: clamp(5rem, 9vw, 8rem) var(--gutter);
    /* keeps the heading clear of the fixed navbar when scrolled to */
    scroll-margin-top: 100px;
  }

  .bv2-how-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    max-width: var(--page);
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    .bv2-how-grid {
      grid-template-columns: 1fr;
    }
  }

  .bv2-how-card {
    position: relative;
    padding: 32px 28px;
    background: var(--bg-2);
    border-radius: var(--r);
    border: 1px solid var(--line);
  }

  .bv2-how-num {
    font-family: var(--mono);
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--accent);
    opacity: 0.15;
    line-height: 1;
    margin-bottom: 8px;
    letter-spacing: -0.04em;
  }

  .bv2-how-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 10px;
  }

  .bv2-how-text {
    font-size: 0.88rem;
    line-height: 1.75;
    color: var(--muted);
  }

  .bv2-how-connector {
    position: absolute;
    top: 48px;
    right: -20px;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), transparent);
    opacity: 0.3;
    z-index: 1;
  }

  @media (max-width: 700px) {
    .bv2-how-connector {
      display: none;
    }
  }

  /* ── BEFORE VS AFTER ── */
  .bv2-compare {
    background: var(--bg-2);
    padding: clamp(5rem, 9vw, 8rem) var(--gutter);
  }

  .bv2-compare-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    max-width: 860px;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    .bv2-compare-grid {
      grid-template-columns: 1fr;
    }
  }

  .bv2-compare-card {
    border-radius: var(--r);
    padding: 32px;
  }

  .bv2-compare-card-no {
    background: var(--stop-soft);
    border: 1px solid rgba(178,58,46,0.15);
  }

  .bv2-compare-card-yes {
    background: var(--go-soft);
    border: 1px solid rgba(27,138,90,0.15);
  }

  .bv2-compare-card-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    margin-bottom: 20px;
    display: block;
  }

  .bv2-compare-card-label-no {
    color: var(--stop);
  }

  .bv2-compare-card-label-yes {
    color: var(--go);
  }

  /* ── PHOTO STRIP ── */
  .bv2-photos {
    background: var(--night);
    padding: clamp(5rem, 9vw, 8rem) var(--gutter);
  }

  .bv2-photos-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    max-width: var(--page);
    margin: 0 auto 12px;
  }

  @media (max-width: 700px) {
    .bv2-photos-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .bv2-photo-img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: var(--r-sm);
    display: block;
    transition:
      transform 0.5s var(--ease-out),
      filter 0.5s var(--ease-out);
    filter: saturate(0.85);
  }

  .bv2-photo-img:hover {
    transform: scale(1.03);
    filter: saturate(1.1);
  }

  .bv2-photo-wide {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: center 30%;
    border-radius: var(--r-sm);
    display: block;
    filter: saturate(0.85);
    transition: filter 0.5s var(--ease-out);
  }

  .bv2-photo-wide:hover {
    filter: saturate(1.1);
  }

  /* ── PRICING ── */
  .bv2-pricing {
    background: var(--bg);
    padding: clamp(5rem, 9vw, 8rem) var(--gutter);
    /* keeps the heading clear of the fixed navbar when scrolled to */
    scroll-margin-top: 100px;
  }

  .bv2-pricing-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 3rem;
  }

  .bv2-toggle-label {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--muted);
    cursor: pointer;
    transition: color 0.2s var(--ease);
  }

  .bv2-toggle-label.active {
    color: var(--ink);
  }

  .bv2-toggle-track {
    width: 52px;
    height: 28px;
    background: var(--bg-3);
    border-radius: var(--pill);
    position: relative;
    cursor: pointer;
    transition: background 0.25s var(--ease);
    border: 1px solid var(--line);
  }

  .bv2-toggle-track.annual {
    background: var(--accent);
    border-color: var(--accent);
  }

  .bv2-toggle-knob {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0,0,0,0.18);
    transition: transform 0.25s var(--spring);
  }

  .bv2-toggle-track.annual .bv2-toggle-knob {
    transform: translateX(24px);
  }

  .bv2-savings-pill {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    background: var(--go-soft);
    color: var(--go);
    border-radius: var(--pill);
    font-size: 0.72rem;
    font-weight: 700;
  }

  .bv2-pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
    align-items: start;
  }

  @media (max-width: 800px) {
    .bv2-pricing-grid {
      grid-template-columns: 1fr;
      max-width: 420px;
    }
  }

  .bv2-plan-card {
    border-radius: var(--r);
    padding: 32px 28px;
    border: 1.5px solid var(--line);
    background: var(--bg);
    position: relative;
    transition:
      transform 0.4s var(--ease-out),
      box-shadow 0.4s var(--ease-out);
  }

  .bv2-plan-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lift);
  }

  .bv2-plan-card-featured {
    border-color: var(--accent);
    background: var(--bg);
    box-shadow: var(--shadow-lift);
    transform: scale(1.03);
  }

  .bv2-plan-card-featured:hover {
    transform: scale(1.03) translateY(-4px);
  }

  .bv2-plan-card-dark {
    background: var(--night);
    border-color: rgba(46,109,180,0.3);
  }

  .bv2-popular-badge {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--accent);
    color: white;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 4px 14px;
    border-radius: var(--pill);
    white-space: nowrap;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .bv2-plan-name {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted);
    margin-bottom: 8px;
  }

  .bv2-plan-name-dark {
    color: rgba(255,255,255,0.4);
  }

  .bv2-plan-price {
    font-family: var(--mono);
    font-size: 2.6rem;
    font-weight: 700;
    color: var(--ink);
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: 4px;
    transition:
      opacity 0.2s var(--ease),
      transform 0.2s var(--ease);
  }

  .bv2-plan-price-dark {
    color: white;
  }

  .bv2-plan-period {
    font-size: 0.8rem;
    color: var(--muted);
    margin-bottom: 4px;
  }

  .bv2-plan-period-dark {
    color: rgba(255,255,255,0.35);
  }

  .bv2-plan-saving {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--go);
    margin-bottom: 20px;
    min-height: 1.2em;
  }

  .bv2-plan-desc {
    font-size: 0.83rem;
    color: var(--muted);
    line-height: 1.6;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--line);
  }

  .bv2-plan-desc-dark {
    color: rgba(255,255,255,0.4);
    border-bottom-color: rgba(255,255,255,0.08);
  }

  .bv2-plan-features {
    list-style: none;
    margin-bottom: 24px;
  }

  .bv2-plan-feature {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 6px 0;
    font-size: 0.83rem;
    color: var(--ink-2);
    line-height: 1.5;
  }

  .bv2-plan-feature-dark {
    color: rgba(255,255,255,0.7);
  }

  .bv2-plan-feature-check {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--go-soft);
    color: var(--go);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .bv2-plan-feature-check-dark {
    background: rgba(27,138,90,0.2);
    color: #4ade80;
  }

  .bv2-plan-credit {
    background: var(--sky);
    border-left: 3px solid var(--accent);
    border-radius: 0 8px 8px 0;
    padding: 8px 12px;
    font-size: 0.75rem;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .bv2-plan-credit-dark {
    background: rgba(46,109,180,0.12);
    color: rgba(46,109,180,0.9);
    border-left-color: rgba(46,109,180,0.5);
  }

  /* ── TESTIMONIALS ── */
  .bv2-testimonials {
    background: var(--bg-2);
    padding: clamp(5rem, 9vw, 8rem) var(--gutter);
  }

  .bv2-testi-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: var(--page);
    margin: 0 auto;
  }

  @media (max-width: 800px) {
    .bv2-testi-grid {
      grid-template-columns: 1fr;
      max-width: 480px;
    }
  }

  .bv2-testi-card {
    background: var(--bg);
    border-radius: var(--r);
    padding: 32px;
    border: 1px solid var(--line);
    display: flex;
    flex-direction: column;
    transition:
      transform 0.4s var(--ease-out),
      box-shadow 0.4s var(--ease-out);
  }

  .bv2-testi-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lift);
  }

  .bv2-testi-quote-mark {
    font-size: 4rem;
    line-height: 1;
    color: var(--accent);
    opacity: 0.15;
    font-family: Georgia, serif;
    margin-bottom: 4px;
    display: block;
  }

  .bv2-testi-text {
    font-size: 0.9rem;
    line-height: 1.75;
    color: var(--muted);
    font-style: italic;
    flex: 1;
    margin-bottom: 24px;
  }

  .bv2-testi-divider {
    height: 1px;
    background: var(--line);
    margin-bottom: 16px;
  }

  .bv2-testi-name {
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--ink);
  }

  .bv2-testi-role {
    font-size: 0.78rem;
    color: var(--muted);
    margin-top: 2px;
  }

  /* ── FAQ ── */
  .bv2-faq-section {
    background: var(--bg);
    padding: clamp(5rem, 9vw, 8rem) var(--gutter);
  }

  .bv2-faq-wrap {
    max-width: 680px;
    margin: 0 auto;
  }

  /* The question is a real <button> so it works with the keyboard; strip the
     browser's default button styling so it looks like the design. */
  button.bv2-faq-question {
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    font-family: inherit;
  }

  /* ── FINAL CTA ── */
  .bv2-cta {
    background: var(--night);
    padding: clamp(5rem, 10vw, 9rem) var(--gutter);
    position: relative;
    overflow: hidden;
  }

  .bv2-cta-glow-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(46,109,180,0.2) 0%, transparent 70%);
    top: -200px;
    left: -150px;
  }

  .bv2-cta-glow-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(26,60,110,0.25) 0%, transparent 70%);
    bottom: -100px;
    right: -80px;
    animation-delay: -10s;
  }

  .bv2-cta-inner {
    max-width: 680px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .bv2-cta-partner {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: var(--r);
    padding: 20px 28px;
    margin-top: 4rem;
    text-align: center;
  }
`;

const rotatingWords = ["invoices", "payments", "tax records", "payroll", "cash flow"];

const heroInvoices = [
  { name: "Amaka O.", inv: "INV-041", amount: "₦15,588", status: "paid" },
  { name: "Tolu B.", inv: "INV-040", amount: "₦45,000", status: "overdue" },
  { name: "Chioma K.", inv: "INV-039", amount: "₦12,500", status: "overdue" },
];

const heroNotifications = [
  { color: "#4ade80", title: "INV-041 paid", subtitle: "₦15,588 received · Amaka O." },
  { color: "#E0A526", title: "INV-040 overdue", subtitle: "Reminder sent to Tolu B." },
  { color: "#2E6DB4", title: "VAT report ready", subtitle: "Q3 export available" },
];

const statusPill = {
  paid: "bv2-pill-go",
  pending: "bv2-pill-warn",
  overdue: "bv2-pill-stop",
};

const marqueeQuestions = [
  "Who owes me money?",
  "Where is my VAT report?",
  "Did they pay yet?",
  "What did I make this month?",
  "How do I prove this to the bank?",
  "Which invoice is overdue?",
  "Do I have enough for PAYE?",
  "Where did I write that down?",
  "I need a financial statement",
  "Has my stock run out?",
];

const whatsappMessages = [
  { init: "A", color: "#2E6DB4", name: "amaka.o", msg: "how much for the green one?", time: "9:02", unread: true },
  { init: "T", color: "#1B8A5A", name: "Tobi", msg: "do you deliver to Yaba?", time: "9:02", unread: true },
  { init: "C", color: "#C08A2E", name: "chioma.k", msg: "abeg last price", time: "9:03", unread: true },
  { init: "K", color: "#8B5CF6", name: "Kemi", msg: "I've paid, sending receipt", time: "9:04", unread: false },
  { init: "F", color: "#B23A2E", name: "Funke", msg: "where is my order??", time: "9:05", unread: true },
];

const instagramMessages = [
  { init: "S", color: "#E1306C", name: "seyi.o", msg: "is this still available?", time: "9:05" },
  { init: "N", color: "#8B5CF6", name: "ngozi__", msg: "price? DM me", time: "9:06" },
  { init: "B", color: "#C08A2E", name: "bello.k", msg: "abeg I want 3 pieces", time: "9:07" },
];

const notebookLines = [
  { text: "Chioma: 2 dresses, pay Fri??" },
  { text: "Tola owes ₦45k (since when?)" },
  { text: "VAT: end of month????" },
  { text: "Call rider about TJ-036", done: true },
  { text: "who sent ₦17k yesterday?" },
];

const problemPoints = [
  {
    title: "No financial record to show anyone",
    text: "The business is real. The money is real. But when a bank asks for statements, there is nothing to show. A notebook is not a financial record.",
  },
  {
    title: "Tax compliance feels impossible",
    text: "VAT, withholding tax, PAYE. They are legal obligations. Tracking them manually across bank alerts and spreadsheets means errors are almost guaranteed.",
  },
  {
    title: "Clients owe you and you cannot track it",
    text: "You know someone paid. You know someone promised to pay. You are not always sure which is which, or how long ago you sent the invoice.",
  },
];

const featureCards = [
  {
    Icon: FaAddressBook,
    bg: "var(--sky)",
    title: "Contacts and Pipeline",
    text: "Every customer, lead, and supplier in one place. Your sales pipeline shows exactly where each deal stands.",
    tag: "CRM",
  },
  {
    Icon: FaFileInvoice,
    bg: "var(--mint)",
    title: "Invoicing and Payments",
    text: "Generate Naira invoices with automatic VAT. Track exactly who has paid and who has not. No more chasing.",
    tag: "Invoicing",
  },
  {
    Icon: FaReceipt,
    bg: "var(--butter)",
    title: "Tax and Compliance",
    text: "VAT, withholding tax, and PAYE tracked automatically to the Nigeria Tax Act 2025. Export reports whenever you need them.",
    tag: "Tax",
  },
  {
    Icon: FaGears,
    bg: "var(--lilac)",
    title: "Automations",
    text: "Build workflows that follow up with contacts and send emails without anyone touching them. Visual and drag and drop.",
    tag: "Automation",
  },
  {
    Icon: FaChartLine,
    bg: "var(--peach)",
    title: "Financial Health Score",
    text: "A bank ready report built from your real income and expense data. Export as PDF, CSV, or a shareable link.",
    tag: "Apex plan",
  },
];

const demoTabs = [
  { key: "invoice", label: "Invoice lifecycle" },
  { key: "tax", label: "Tax record" },
  { key: "payroll", label: "Payroll run" },
];

const demoData = {
  invoice: [
    { num: "01", label: "Invoice created", value: "INV-041 to Amaka O. · ₦14,500", meta: "VAT calculated automatically at 7.5%", done: false },
    { num: "02", label: "VAT added", value: "₦1,088 output VAT recorded", meta: "Running total updated. No manual entry.", done: false },
    { num: "03", label: "Invoice sent", value: "Payment link delivered to client", meta: "Link shows item, quantity, and total", done: false },
    { num: "04", label: "Payment confirmed", value: "₦15,588 settled to your bank account", meta: "INV-041 marked paid automatically", done: true },
    { num: "05", label: "Record saved", value: "Sale added to income tracker", meta: "Available in your tax summary report", done: true },
  ],
  tax: [
    { num: "01", label: "VAT tracked", value: "₦1,088 output VAT on this sale", meta: "Nigeria Tax Act 2025. 7.5% applied.", done: false },
    { num: "02", label: "WHT recorded", value: "Withholding tax noted where applicable", meta: "Correct rate applied per transaction type", done: false },
    { num: "03", label: "PAYE calculated", value: "5 staff. Correct deductions this month.", meta: "Payslips generated and ready to send", done: false },
    { num: "04", label: "Report ready", value: "Full tax summary available to export", meta: "PDF or CSV. Any time.", done: true },
  ],
  payroll: [
    { num: "01", label: "Staff records loaded", value: "5 staff members. Salaries confirmed.", meta: "BizOS Momentum plan", done: false },
    { num: "02", label: "PAYE calculated", value: "Nigeria Tax Act 2025 rates applied", meta: "Each deduction broken down per staff", done: false },
    { num: "03", label: "Payslips generated", value: "5 payslips ready", meta: "Each shows gross, deductions, and net", done: false },
    { num: "04", label: "Payslips sent", value: "Delivered to each staff email", meta: "Sent automatically on your behalf", done: true },
    { num: "05", label: "PAYE recorded", value: "Added to your tax summary", meta: "Ready to export whenever you need it", done: true },
  ],
};

const demoMetrics = [
  { label: "Collected today", value: "₦717,000", change: "↑ 49%", up: true },
  { label: "Orders today", value: "18", change: "1 waiting for payment", up: null },
  { label: "Invoices this month", value: "47", change: "All tracked in one place", up: null },
  { label: "Overdue", value: "3", change: "▲ Oldest 21 days", up: false },
];

// Matches the "Overdue: 3" metric. INV-039 is the overdue invoice in the hero.
const demoOverdue = [
  { init: "T", name: "Tolu B. · INV-040", amount: "₦45,000", days: "3 days", color: "#1B8A5A" },
  { init: "C", name: "Chioma K. · INV-039", amount: "₦12,500", days: "9 days", color: "#C08A2E" },
  { init: "F", name: "Funke A. · INV-031", amount: "₦8,000", days: "21 days", color: "#B23A2E" },
];

const howSteps = [
  {
    num: "01",
    title: "Connect your accounts",
    text: "Link your bank, set up your product catalogue, and add your staff. BizOS starts building your financial picture from day one.",
  },
  {
    num: "02",
    title: "Run your business normally",
    text: "Send invoices, record expenses, run payroll. BizOS tracks VAT, WHT, and PAYE automatically as you go. Nothing extra to fill in at the end.",
  },
  {
    num: "03",
    title: "See everything clearly",
    text: "Your dashboard shows what you are owed, what you have collected, and where your tax stands. Export any report whenever you need it.",
  },
];

const compareWithout = [
  "Invoices tracked across WhatsApp messages and notebooks",
  "No clear picture of who owes you or how much",
  "VAT and PAYE calculated manually under deadline pressure",
  "Bank asks for financial statements and there are none",
  "Stock levels kept in memory",
  "Payroll done by hand every month",
];

const compareWith = [
  "Every invoice sent, tracked, and followed up in one place",
  "Exactly who owes you and for how long, always visible",
  "VAT, WHT, and PAYE tracked automatically as you operate",
  "A bank ready financial report ready to export at any time",
  "Stock levels updated with every sale automatically",
  "Payroll and payslips generated with correct tax deductions",
];

const plans = {
  foundation: {
    monthly: { price: "$29", period: "per month", link: "https://app.ai1team.com/signup?plan=foundation", saving: null },
    annual: { price: "$290", period: "per year", link: "https://app.ai1team.com/signup?plan=foundation&interval=annual", saving: "Save $58. Two months free." },
  },
  momentum: {
    monthly: { price: "$59", period: "per month", link: "https://app.ai1team.com/signup?plan=momentum", saving: null },
    annual: { price: "$590", period: "per year", link: "https://app.ai1team.com/signup?plan=momentum&interval=annual", saving: "Save $118. Two months free." },
  },
  apex: {
    monthly: { price: "$99", period: "per month", link: "https://app.ai1team.com/signup?plan=apex", saving: null },
    annual: { price: "$990", period: "per year", link: "https://app.ai1team.com/signup?plan=apex&interval=annual", saving: "Save $198. Two months free." },
  },
};

const foundationFeatures = [
  "1,000 contacts",
  "100 invoices per month",
  "10 pipelines",
  "Payroll and PAYE for up to 5 staff",
  "5 automations",
  "Basic email via BizOS address",
  "Full exportable tax summary",
  "VAT report",
  "Up to 30 products with inventory",
  "Standard invoice branding",
  "Community and email support",
];

const momentumFeatures = [
  "10,000 contacts",
  "500 invoices per month",
  "Unlimited pipelines and stages",
  "Payroll and PAYE for up to 10 staff with payslip email delivery",
  "20 automations",
  "Custom SMTP from your own address",
  "Rich email composer with templates",
  "Bulk contact actions and CSV import",
  "VAT and withholding tax tracker",
  "Unlimited products with stock tracking",
  "Paystack payment collection",
  "Custom invoice prefix",
  "Priority email support",
];

const apexFeatures = [
  "Unlimited contacts",
  "Unlimited invoices",
  "Unlimited pipelines and stages",
  "Unlimited staff members",
  "Unlimited automations",
  "Everything in Momentum",
  "Creditworthiness Dashboard",
  "Financial Health Score",
  "Bank ready report as PDF, CSV, and shareable link",
  "Advanced automation conditions and branching",
  "White glove onboarding with priority support",
];

const testimonials = [
  {
    quote: "AI1team completely transformed our lead generation. We went from manual follow-ups to a fully automated pipeline in under 2 weeks. The results were immediate.",
    name: "James Carter",
    role: "CEO, NovaTech Solutions",
  },
  {
    quote: "The workflow automations they built saved us 20 plus hours every single week. The ROI was obvious within the first month of going live.",
    name: "Sarah Mitchell",
    role: "Operations Manager, ScaleUp Co.",
  },
  {
    quote: "The audit alone was worth it. They mapped out exactly where we were losing time and money. The roadmap was clear, actionable, and spot on.",
    name: "Lena Hoffmann",
    role: "COO, Struktur Digital GmbH",
  },
];

// The trial no longer needs a card, so the card answers follow that.
const faqs = [
  {
    q: "Do I need a card to start the free trial?",
    a: "No. You can start your 14 day free trial without entering a card. You only add a card when the trial ends and you choose to keep using BizOS.",
  },
  {
    q: "Is BizOS built for Nigerian tax rules specifically?",
    a: "Yes. The tax module covers VAT, withholding tax, and PAYE payroll calculated to the Nigeria Tax Act 2025 bands. It was built with Nigerian compliance requirements in mind from the start, not adapted from a generic tool.",
  },
  {
    q: "What is the Financial Health Score and who is it for?",
    a: "The Financial Health Score is a summary of your business financial standing based on the income, expenses, and payment data you have recorded in BizOS. It is meant to be shown to a bank or lender when you are applying for a loan or line of credit. It is available on the Apex plan.",
  },
  {
    q: "Can I upgrade or downgrade my plan later?",
    a: "Yes. You can change your plan at any time from inside the app. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "What happens when my trial ends?",
    a: "When your 14 day trial ends, you add a card to continue on the plan you signed up for. You are not charged anything during the trial.",
  },
  {
    q: "Is there a help center or documentation?",
    a: "Yes. The BizOS help center is at help.ai1team.com. It covers every feature in plain language.",
  },
];

export default function BizOSPage() {
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);
  const progressRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordActive, setWordActive] = useState(true);

  const [activeTab, setActiveTab] = useState("invoice");
  const [visibleRows, setVisibleRows] = useState(0);
  const [timelineInView, setTimelineInView] = useState(false);
  const timelineRef = useRef(null);

  // Start the timeline only once it scrolls into view, not on page load.
  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Stagger the rows in, and replay the stagger whenever the tab changes.
  useEffect(() => {
    if (!timelineInView) return;
    const count = demoData[activeTab].length;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleRows(count);
      return;
    }
    setVisibleRows(0);
    const timers = Array.from({ length: count }, (_, i) =>
      setTimeout(() => setVisibleRows(i + 1), 50 + i * 180)
    );
    return () => timers.forEach(clearTimeout);
  }, [activeTab, timelineInView]);

  useEffect(() => {
    let swap;
    const interval = setInterval(() => {
      setWordActive(false);
      swap = setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setWordActive(true);
      }, 350);
    }, 2200);
    return () => {
      clearInterval(interval);
      clearTimeout(swap);
    };
  }, []);

  useEffect(() => {
    document.title = "BizOS — Run Your Business | AI1team";

    let ctx;
    let cancelled = false;

    // GSAP is imported dynamically so it only ever runs on the client.
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { SplitText } = await import("gsap/SplitText");
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger, SplitText);

      // If the user prefers reduced motion, skip all scroll and loop
      // animations and show every animated element in its final state.
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        document.querySelectorAll("[data-reveal], [data-split], [data-fill]").forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
        // Count-up numbers start at 0 in the markup, so show their end value.
        document.querySelectorAll("[data-count]").forEach((el) => {
          el.textContent = (el.dataset.prefix || "") + (+el.dataset.count).toLocaleString("en-NG");
        });
        return;
      }

      // Everything created inside the context is reverted on unmount, so
      // ScrollTriggers and SplitText wrappers do not pile up between visits.
      ctx = gsap.context(() => {
        // Headline word by word rise
        document.querySelectorAll("[data-split]").forEach((h) => {
          try {
            const split = new SplitText(h, { type: "words", mask: "words" });
            gsap.from(split.words, {
              yPercent: 110,
              opacity: 0,
              duration: 0.9,
              ease: "expo.out",
              stagger: 0.06,
              scrollTrigger: { trigger: h, start: "top 85%", once: true },
            });
          } catch (e) {}
        });

        // Paragraph reading fill
        document.querySelectorAll("[data-fill]").forEach((p) => {
          try {
            const split = new SplitText(p, { type: "words" });
            gsap.fromTo(
              split.words,
              { opacity: 0.18 },
              {
                opacity: 1,
                stagger: 0.05,
                ease: "none",
                scrollTrigger: { trigger: p, start: "top 80%", end: "bottom 55%", scrub: true },
              }
            );
          } catch (e) {}
        });

        // Generic reveal
        gsap.utils.toArray("[data-reveal]").forEach((el) => {
          const rot = el.dataset.rot || 0;
          gsap.from(el, {
            y: 28,
            opacity: 0,
            rotate: rot,
            duration: 0.9,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        // Count up numbers
        document.querySelectorAll("[data-count]").forEach((el) => {
          const end = +el.dataset.count;
          const pre = el.dataset.prefix || "";
          const obj = { v: 0 };
          gsap.to(obj, {
            v: end,
            duration: 1.6,
            ease: "power3.out",
            onUpdate: () => {
              el.textContent = pre + Math.round(obj.v).toLocaleString("en-NG");
            },
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        // Scroll progress bar
        if (progressRef.current) {
          gsap.to(progressRef.current, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          });
        }

        // Sticky header shadow
        const header = document.querySelector(".bizos-header");
        if (header) {
          ScrollTrigger.create({
            start: 8,
            onEnter: () => header.classList.add("scrolled"),
            onLeaveBack: () => header.classList.remove("scrolled"),
          });
        }
      });
    };

    initGSAP();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <>
      {/* Injected raw: as a text child, the server escapes the quotes in the CSS,
          which garbles it and causes a hydration mismatch. globalStyles is a
          fixed string in this file, so this is safe. */}
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      {/* ── SCROLL PROGRESS BAR ── */}
      <div
        ref={progressRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, var(--brand), var(--accent))",
          transformOrigin: "left center",
          transform: "scaleX(0)",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />

      {/* app/layout.js already wraps every page in <main>, so this is a div. */}
      <div className="bv2-page">
        {/* ══ HERO ══ */}
        <section className="bv2-hero">
          {/* Ambient glow orbs */}
          <div className="bv2-glow bv2-glow-1" style={{ position: "absolute" }} aria-hidden="true" />
          <div className="bv2-glow bv2-glow-2" style={{ position: "absolute" }} aria-hidden="true" />

          <div className="bv2-hero-grid">
            {/* ── LEFT: Copy ── */}
            <div className="bv2-hero-left">
              <div
                className="bv2-eyebrow"
                data-reveal
                style={{
                  color: "rgba(255,255,255,0.7)",
                  background: "rgba(255,255,255,0.07)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                <span className="bv2-eyebrow-dot" />
                BizOS. Built for Nigerian Businesses
              </div>

              <h1
                style={{
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  color: "#ffffff",
                  marginBottom: "1.5rem",
                }}
              >
                Your business runs on{" "}
                <span className={`bv2-hero-word ${wordActive ? "active" : ""}`}>
                  <span className="bv2-hero-word-inner">{rotatingWords[wordIndex]}</span>
                </span>
                <br />
                you should be able to see all of it.
              </h1>

              <p
                className="bv2-subtext"
                style={{ color: "rgba(255,255,255,0.55)", marginBottom: "2.5rem" }}
                data-reveal
              >
                BizOS gives Nigerian businesses one place to invoice clients, track what they are
                owed, handle VAT and payroll, and show a bank what their finances actually look
                like.
              </p>

              <div
                style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "2rem" }}
                data-reveal
              >
                <a
                  href="https://app.ai1team.com/signup?plan=momentum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bv2-btn-primary"
                >
                  Start free trial
                  <span className="bv2-arrow">→</span>
                </a>
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bv2-btn-secondary"
                  style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.2)" }}
                >
                  See how it works
                </button>
              </div>

              {/* Social proof strip */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }} data-reveal>
                <div style={{ display: "flex", marginRight: "4px" }} aria-hidden="true">
                  {["AO", "BK", "CI", "DM"].map((init, i) => (
                    <div
                      key={init}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: ["#2E6DB4", "#1B8A5A", "#C08A2E", "#8B5CF6"][i],
                        border: "2px solid #0f0f17",
                        marginLeft: i > 0 ? -8 : 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        color: "white",
                        zIndex: 4 - i,
                        position: "relative",
                      }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
                  14 day free trial. No charge until it ends.
                </span>
              </div>
            </div>

            {/* ── RIGHT: Dashboard Mockup ── */}
            <div className="bv2-hero-right bv2-dash-wrap" data-reveal aria-hidden="true">
              <div className="bv2-browser">
                <div className="bv2-browser-bar">
                  <div className="bv2-browser-dot" style={{ background: "#ff5f57" }} />
                  <div className="bv2-browser-dot" style={{ background: "#febc2e" }} />
                  <div className="bv2-browser-dot" style={{ background: "#28c840" }} />
                  <div className="bv2-browser-address" />
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.25)",
                      marginLeft: "8px",
                      fontFamily: "var(--mono)",
                    }}
                  >
                    app.ai1team.com
                  </span>
                </div>

                <div style={{ padding: "16px", background: "#f8fafc" }}>
                  {/* Top bar */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.7rem", color: "var(--muted)", marginBottom: "2px" }}>
                        Good morning, Adaeze
                      </div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--ink)" }}>
                        Dashboard
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      <span className="bv2-live-dot" />
                      <span style={{ fontSize: "0.7rem", color: "var(--go)", fontWeight: 600 }}>
                        Live
                      </span>
                    </div>
                  </div>

                  {/* Stat cards */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "8px",
                      marginBottom: "14px",
                    }}
                  >
                    <div className="bv2-stat-card">
                      <div className="bv2-stat-label">Collected</div>
                      <div
                        className="bv2-stat-value"
                        style={{ fontSize: "1rem" }}
                        data-count="717000"
                        data-prefix="₦"
                      >
                        ₦0
                      </div>
                      <div className="bv2-stat-change bv2-stat-up">↑ 49%</div>
                    </div>

                    <div className="bv2-stat-card">
                      <div className="bv2-stat-label">Overdue</div>
                      <div className="bv2-stat-value" style={{ fontSize: "1rem" }} data-count="3">
                        0
                      </div>
                      <div
                        className="bv2-stat-change"
                        style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.68rem" }}
                      >
                        ₦65,500 owed
                      </div>
                    </div>

                    <div className="bv2-stat-card">
                      <div className="bv2-stat-label">Invoices sent</div>
                      <div className="bv2-stat-value" style={{ fontSize: "1rem" }} data-count="47">
                        0
                      </div>
                      <div
                        className="bv2-stat-change"
                        style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.68rem" }}
                      >
                        this month
                      </div>
                    </div>
                  </div>

                  {/* Mini bar chart */}
                  <div
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      marginBottom: "10px",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--muted)",
                        marginBottom: "8px",
                        fontWeight: 600,
                      }}
                    >
                      Revenue this week
                    </div>
                    <div className="bv2-bar-group">
                      {[35, 55, 40, 70, 60, 85, 100].map((h, i) => (
                        <div
                          key={i}
                          className={`bv2-bar ${i === 6 ? "active" : ""}`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: "0.6rem",
                            color: "var(--muted)",
                            flex: 1,
                            textAlign: "center",
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recent invoices */}
                  <div
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--muted)",
                        marginBottom: "8px",
                        fontWeight: 600,
                      }}
                    >
                      Recent invoices
                    </div>

                    {heroInvoices.map((row, i) => (
                      <div key={row.inv} className="bv2-inv-row" style={{ color: "var(--ink)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div
                            style={{
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              background: ["#2E6DB4", "#1B8A5A", "#C08A2E"][i],
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.6rem",
                              fontWeight: 700,
                              color: "white",
                              flexShrink: 0,
                            }}
                          >
                            {row.name[0]}
                          </div>
                          <div>
                            <div style={{ fontSize: "0.75rem", fontWeight: 600 }}>{row.name}</div>
                            <div style={{ fontSize: "0.65rem", color: "var(--muted)" }}>{row.inv}</div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            gap: "3px",
                          }}
                        >
                          <span
                            style={{ fontSize: "0.78rem", fontFamily: "var(--mono)", fontWeight: 600 }}
                          >
                            {row.amount}
                          </span>
                          <span className={`bv2-pill ${statusPill[row.status]}`}>{row.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Phone mockup overlapping ── */}
              <div className="bv2-phone bv2-dash-phone" style={{ minHeight: "unset" }}>
                <div className="bv2-phone-notch" />
                <div className="bv2-phone-header">
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "var(--brand)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    B
                  </div>
                  <span>BizOS · Notifications</span>
                  <div className="bv2-notification-badge" style={{ marginLeft: "auto" }}>
                    3
                  </div>
                </div>
                <div className="bv2-phone-chat">
                  {heroNotifications.map((n) => (
                    <div
                      key={n.title}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        padding: "8px 4px",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: n.color,
                          flexShrink: 0,
                          marginTop: 4,
                        }}
                      />
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                          {n.title}
                        </div>
                        <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
                          {n.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end hero */}

        {/* ══ MARQUEE ══ */}
        <div className="bv2-marquee-strip" aria-hidden="true">
          <div className="bv2-marquee-track">
            {[...marqueeQuestions, ...marqueeQuestions].map((item, i) => (
              <span key={i} className="bv2-marquee-item">
                {item}
                <span className="bv2-marquee-sep">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ══ PROBLEM ══ */}
        <section className="bv2-problem">
          <div className="bv2-problem-grid">
            {/* LEFT: Chaos mockup */}
            <div className="bv2-chaos-wrap" data-reveal aria-hidden="true">
              {/* Phone 1: WhatsApp */}
              <div className="bv2-chaos-phone bv2-chaos-phone-1">
                <div className="bv2-chaos-notch" />
                <div className="bv2-chaos-header">
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#25D366",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.55rem",
                      color: "white",
                      fontWeight: 700,
                    }}
                  >
                    W
                  </div>
                  <span className="bv2-chaos-header-text">WhatsApp</span>
                  <span
                    style={{
                      marginLeft: "auto",
                      background: "#25D366",
                      color: "white",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      padding: "1px 6px",
                      borderRadius: "10px",
                    }}
                  >
                    27
                  </span>
                </div>
                {whatsappMessages.map((m) => (
                  <div key={m.name} className="bv2-chaos-msg">
                    <div className="bv2-chaos-msg-avatar" style={{ background: m.color }}>
                      {m.init}
                    </div>
                    <div className="bv2-chaos-msg-body">
                      <div className="bv2-chaos-msg-name">{m.name}</div>
                      <div className="bv2-chaos-msg-text">{m.msg}</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "4px",
                      }}
                    >
                      <span className="bv2-chaos-msg-time">{m.time}</span>
                      {m.unread && <div className="bv2-unread-badge">1</div>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Phone 2: Instagram DMs */}
              <div className="bv2-chaos-phone bv2-chaos-phone-2">
                <div className="bv2-chaos-notch" />
                <div className="bv2-chaos-header">
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.55rem",
                      color: "white",
                      fontWeight: 700,
                    }}
                  >
                    IG
                  </div>
                  <span className="bv2-chaos-header-text">Instagram DMs</span>
                  <span
                    style={{
                      marginLeft: "auto",
                      background: "#E1306C",
                      color: "white",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      padding: "1px 6px",
                      borderRadius: "10px",
                    }}
                  >
                    14
                  </span>
                </div>
                {instagramMessages.map((m) => (
                  <div key={m.name} className="bv2-chaos-msg">
                    <div className="bv2-chaos-msg-avatar" style={{ background: m.color }}>
                      {m.init}
                    </div>
                    <div className="bv2-chaos-msg-body">
                      <div className="bv2-chaos-msg-name">{m.name}</div>
                      <div className="bv2-chaos-msg-text">{m.msg}</div>
                    </div>
                    <span className="bv2-chaos-msg-time">{m.time}</span>
                  </div>
                ))}
              </div>

              {/* Phone 3: Notebook */}
              <div
                className="bv2-chaos-phone bv2-chaos-phone-3"
                style={{ background: "#fffbf0", border: "6px solid #e8e0d0", minHeight: "140px" }}
              >
                <div
                  style={{
                    padding: "12px",
                    fontFamily: "var(--mono)",
                    fontSize: "0.65rem",
                    color: "#666",
                    lineHeight: 1.8,
                  }}
                >
                  <div style={{ fontWeight: 700, color: "#333", marginBottom: "6px", fontSize: "0.7rem" }}>
                    To track (maybe):
                  </div>
                  {notebookLines.map((line) => (
                    <div
                      key={line.text}
                      style={line.done ? { textDecoration: "line-through", opacity: 0.4 } : undefined}
                    >
                      {line.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Problem copy */}
            <div>
              <div className="bv2-eyebrow" data-reveal>
                <span className="bv2-eyebrow-dot" />
                The Reality
              </div>

              <h2 className="bv2-headline" data-split style={{ marginBottom: "1.5rem" }}>
                Most Nigerian businesses run on memory, paper, and promises.
              </h2>

              <p className="bv2-subtext" data-fill style={{ marginBottom: "2.5rem" }}>
                Not because the business is not doing well. Because there has never been a tool
                built for how Nigerian businesses actually work.
              </p>

              {problemPoints.map((card) => (
                <div key={card.title} className="bv2-problem-card" data-reveal>
                  <div className="bv2-problem-card-title">{card.title}</div>
                  <div className="bv2-problem-card-text">{card.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ MEET BIZOS ══ */}
        <section className="bv2-features">
          <div className="bv2-container">
            <div className="bv2-section-top" data-reveal>
              <div className="bv2-eyebrow">
                <span className="bv2-eyebrow-dot" />
                Meet BizOS
              </div>
              <h2 className="bv2-headline" data-split style={{ marginBottom: "1rem" }}>
                One place for every number that matters.
              </h2>
              <p className="bv2-subtext" style={{ margin: "0 auto" }}>
                Five things BizOS handles so you do not have to keep track of them in your head.
              </p>
            </div>

            <div className="bv2-feature-grid">
              {featureCards.map(({ Icon, ...f }, i) => (
                // The reveal sits on a wrapper: GSAP leaves an inline transform
                // behind, which would block the card's CSS hover lift.
                <div key={f.title} data-reveal data-rot={i % 2 === 0 ? -0.5 : 0.5}>
                  <div className="bv2-feature-card" style={{ height: "100%" }}>
                    <div className="bv2-feature-icon" style={{ background: f.bg }}>
                      <Icon color="var(--brand)" aria-hidden="true" />
                    </div>
                    <div className="bv2-feature-title">{f.title}</div>
                    <div className="bv2-feature-text">{f.text}</div>
                    <span className="bv2-feature-tag">{f.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ DEMO ══ */}
        <section className="bv2-demo">
          <div className="bv2-demo-grid">
            {/* LEFT: Copy + tabs + timeline */}
            <div>
              <div
                className="bv2-eyebrow"
                data-reveal
                style={{
                  color: "rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <span className="bv2-eyebrow-dot" />
                Watch it work
              </div>

              <h2 className="bv2-headline bv2-headline-white" data-split style={{ marginBottom: "1rem" }}>
                Every sale, every tax record, every payroll run. One place.
              </h2>

              <p
                className="bv2-subtext"
                style={{ color: "rgba(255,255,255,0.45)", marginBottom: "2rem" }}
                data-fill
              >
                Follow what happens when a sale is made, a tax record is updated, or payroll runs.
                Every step, one place.
              </p>

              <div className="bv2-demo-tabs" role="tablist">
                {demoTabs.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.key}
                    className={`bv2-demo-tab ${activeTab === tab.key ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="bv2-demo-timeline" ref={timelineRef} role="tabpanel">
                {demoData[activeTab].map((row, i) => (
                  <div
                    key={`${activeTab}-${i}`}
                    className={`bv2-tl-row ${i < visibleRows ? "visible" : ""}`}
                  >
                    <div className={`bv2-tl-icon ${row.done ? "done" : ""}`}>
                      {row.done ? "✓" : row.num}
                    </div>
                    <div className="bv2-tl-content">
                      <div className="bv2-tl-label">{row.label}</div>
                      <div className="bv2-tl-value">{row.value}</div>
                      <div className="bv2-tl-meta">{row.meta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Sticky mockup */}
            <div className="bv2-demo-mockup-wrap" aria-hidden="true">
              <div className="bv2-browser">
                <div className="bv2-browser-bar">
                  <div className="bv2-browser-dot" style={{ background: "#ff5f57" }} />
                  <div className="bv2-browser-dot" style={{ background: "#febc2e" }} />
                  <div className="bv2-browser-dot" style={{ background: "#28c840" }} />
                  <div className="bv2-browser-address" />
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.25)",
                      marginLeft: "8px",
                      fontFamily: "var(--mono)",
                    }}
                  >
                    app.ai1team.com/dashboard
                  </span>
                </div>

                <div style={{ padding: "20px", background: "#f8fafc" }}>
                  {/* Greeting */}
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginBottom: "2px" }}>
                      Good evening, Adaeze. Here is your business today.
                    </div>
                    <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--go)",
                          background: "var(--go-soft)",
                          padding: "2px 10px",
                          borderRadius: "var(--pill)",
                          fontWeight: 600,
                        }}
                      >
                        Close the day
                      </span>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--accent)",
                          background: "var(--sky)",
                          padding: "2px 10px",
                          borderRadius: "var(--pill)",
                          fontWeight: 600,
                        }}
                      >
                        Take a payment
                      </span>
                    </div>
                  </div>

                  {/* Key metrics */}
                  {demoMetrics.map((m, i) => (
                    <div
                      key={m.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 0",
                        borderBottom: i < demoMetrics.length - 1 ? "1px solid var(--line)" : "none",
                      }}
                    >
                      <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{m.label}</span>
                      <div style={{ textAlign: "right" }}>
                        <div
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            fontFamily: "var(--mono)",
                            color: "var(--ink)",
                          }}
                        >
                          {m.value}
                        </div>
                        <div
                          style={{
                            fontSize: "0.65rem",
                            color: m.up === true ? "var(--go)" : m.up === false ? "var(--stop)" : "var(--muted)",
                          }}
                        >
                          {m.change}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Waiting section */}
                  <div
                    style={{
                      marginTop: "14px",
                      background: "white",
                      borderRadius: "10px",
                      padding: "12px",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--muted)",
                        fontWeight: 600,
                        marginBottom: "10px",
                      }}
                    >
                      Overdue invoices
                    </div>
                    {demoOverdue.map((w, i) => (
                      <div
                        key={w.name}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "6px 0",
                          borderBottom: i < demoOverdue.length - 1 ? "1px solid var(--line)" : "none",
                        }}
                      >
                        <div
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            background: w.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.55rem",
                            color: "white",
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          {w.init}
                        </div>
                        <span style={{ fontSize: "0.75rem", color: "var(--ink)", flex: 1 }}>{w.name}</span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontFamily: "var(--mono)",
                            fontWeight: 600,
                            color: "var(--ink)",
                          }}
                        >
                          {w.amount}
                        </span>
                        <span
                          style={{
                            fontSize: "0.65rem",
                            color: "var(--stop)",
                            background: "var(--stop-soft)",
                            padding: "2px 7px",
                            borderRadius: "var(--pill)",
                            fontWeight: 600,
                          }}
                        >
                          {w.days}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ HOW IT WORKS ══ */}
        <section className="bv2-how" id="how-it-works">
          <div className="bv2-container">
            <div className="bv2-section-top" data-reveal>
              <div className="bv2-eyebrow">
                <span className="bv2-eyebrow-dot" />
                How it works
              </div>
              <h2 className="bv2-headline" data-split style={{ marginBottom: "1rem" }}>
                Three steps to a clear financial picture.
              </h2>
              <p className="bv2-subtext" style={{ margin: "0 auto" }}>
                Set it up once. Run your business as normal. See where you stand at any time.
              </p>
            </div>

            <div className="bv2-how-grid">
              {howSteps.map((step, i) => (
                <div key={step.num} className="bv2-how-card" data-reveal>
                  {i < howSteps.length - 1 && <div className="bv2-how-connector" aria-hidden="true" />}
                  <div className="bv2-how-num">{step.num}</div>
                  <div className="bv2-how-title">{step.title}</div>
                  <div className="bv2-how-text">{step.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COMPARE ══ */}
        <section className="bv2-compare">
          <div className="bv2-container">
            <div className="bv2-section-top" data-reveal>
              <div className="bv2-eyebrow">
                <span className="bv2-eyebrow-dot" />
                The difference
              </div>
              <h2 className="bv2-headline" data-split style={{ marginBottom: "1rem" }}>
                What changes when your business has one place for everything.
              </h2>
            </div>

            <div className="bv2-compare-grid">
              <div className="bv2-compare-card bv2-compare-card-no" data-reveal>
                <span className="bv2-compare-card-label bv2-compare-card-label-no">Without BizOS</span>
                {compareWithout.map((item) => (
                  <div key={item} className="bv2-compare-item">
                    <div className="bv2-compare-icon bv2-compare-icon-no" aria-hidden="true">
                      ✕
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="bv2-compare-card bv2-compare-card-yes" data-reveal>
                <span className="bv2-compare-card-label bv2-compare-card-label-yes">With BizOS</span>
                {compareWith.map((item) => (
                  <div key={item} className="bv2-compare-item">
                    <div className="bv2-compare-icon bv2-compare-icon-yes" aria-hidden="true">
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PHOTOS ══ */}
        <section className="bv2-photos">
          <div className="bv2-container">
            <div className="bv2-section-top" data-reveal style={{ marginBottom: "3rem" }}>
              <div
                className="bv2-eyebrow"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <span className="bv2-eyebrow-dot" />
                Built for businesses like yours
              </div>
              <h2 className="bv2-headline bv2-headline-white" data-split style={{ marginBottom: "1rem" }}>
                Nigerian businesses that know their numbers grow faster.
              </h2>
              <p className="bv2-subtext" style={{ color: "rgba(255,255,255,0.45)", margin: "0 auto" }}>
                BizOS was built with Nigerian business owners in mind. The tax rules, the currency, the
                way business actually happens here.
              </p>
            </div>

            {/* One photo at its natural shape: height follows the width, so
                nothing is cropped. */}
            <div
              data-reveal
              style={{ overflow: "hidden", borderRadius: "var(--r-sm)", maxWidth: "1000px", margin: "0 auto" }}
            >
              <Image
                src="/bizos/business_owners.jpg"
                alt="Nigerian shop owner handing a delivery of produce to a customer"
                width={4000}
                height={2667}
                sizes="(max-width: 1000px) 100vw, 1000px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* ══ PRICING ══ */}
        <section className="bv2-pricing" id="pricing">
          <div className="bv2-container">
            <div className="bv2-section-top" data-reveal>
              <div className="bv2-eyebrow">
                <span className="bv2-eyebrow-dot" />
                Pricing
              </div>
              <h2 className="bv2-headline" data-split style={{ marginBottom: "1rem" }}>
                Three plans. One for where you are now, one for where you are going.
              </h2>
              <p className="bv2-subtext" style={{ margin: "0 auto 2rem" }}>
                Every plan includes a 14 day free trial. No card is needed at signup.
              </p>
            </div>

            {/* Billing toggle */}
            <div className="bv2-pricing-toggle">
              <span
                className={`bv2-toggle-label ${billing === "monthly" ? "active" : ""}`}
                onClick={() => setBilling("monthly")}
              >
                Monthly
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={billing === "annual"}
                aria-label="Bill annually"
                className={`bv2-toggle-track ${billing === "annual" ? "annual" : ""}`}
                style={{ padding: 0 }}
                onClick={() => setBilling((b) => (b === "monthly" ? "annual" : "monthly"))}
              >
                <span className="bv2-toggle-knob" />
              </button>
              <span
                className={`bv2-toggle-label ${billing === "annual" ? "active" : ""}`}
                onClick={() => setBilling("annual")}
              >
                Annual
              </span>
              {billing === "annual" && <span className="bv2-savings-pill">2 months free</span>}
            </div>

            {/* Plan cards. Each card sits inside its own reveal wrapper so GSAP's
                leftover inline transform does not block the hover lift or the
                featured card's scale. */}
            <div className="bv2-pricing-grid">
              {/* Foundation */}
              <div data-reveal>
                <div className="bv2-plan-card">
                  <div className="bv2-plan-name">Foundation</div>
                  <div className="bv2-plan-price">{plans.foundation[billing].price}</div>
                  <div className="bv2-plan-period">{plans.foundation[billing].period}</div>
                  <div className="bv2-plan-saving">{plans.foundation[billing].saving || " "}</div>
                  <div className="bv2-plan-desc">
                    For a solo operator or a small business getting organized for the first time.
                  </div>
                  <ul className="bv2-plan-features">
                    {foundationFeatures.map((f) => (
                      <li key={f} className="bv2-plan-feature">
                        <span className="bv2-plan-feature-check" aria-hidden="true">
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plans.foundation[billing].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bv2-btn-secondary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Start with Foundation
                  </a>
                </div>
              </div>

              {/* Momentum: featured */}
              <div data-reveal>
                <div className="bv2-plan-card bv2-plan-card-featured">
                  <div className="bv2-popular-badge">Most Popular</div>
                  <div className="bv2-plan-name">Momentum</div>
                  <div className="bv2-plan-price">{plans.momentum[billing].price}</div>
                  <div className="bv2-plan-period">{plans.momentum[billing].period}</div>
                  <div className="bv2-plan-saving">{plans.momentum[billing].saving || " "}</div>
                  <div className="bv2-plan-desc">
                    For a business actively managing customers, staff, and cash flow.
                  </div>
                  <ul className="bv2-plan-features">
                    {momentumFeatures.map((f) => (
                      <li key={f} className="bv2-plan-feature">
                        <span className="bv2-plan-feature-check" aria-hidden="true">
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {billing === "annual" && (
                    <div className="bv2-plan-credit">Save $118. Two months free when billed annually.</div>
                  )}
                  <a
                    href={plans.momentum[billing].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bv2-btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Start with Momentum
                    <span className="bv2-arrow">→</span>
                  </a>
                </div>
              </div>

              {/* Apex: dark */}
              <div data-reveal>
                <div className="bv2-plan-card bv2-plan-card-dark">
                  <div className="bv2-plan-name bv2-plan-name-dark">Apex</div>
                  <div className="bv2-plan-price bv2-plan-price-dark">{plans.apex[billing].price}</div>
                  <div className="bv2-plan-period bv2-plan-period-dark">{plans.apex[billing].period}</div>
                  <div className="bv2-plan-saving">{plans.apex[billing].saving || " "}</div>
                  <div className="bv2-plan-desc bv2-plan-desc-dark">
                    For a business ready to scale, apply for financing, or manage a larger team.
                  </div>
                  <ul className="bv2-plan-features">
                    {apexFeatures.map((f) => (
                      <li key={f} className="bv2-plan-feature bv2-plan-feature-dark">
                        <span className="bv2-plan-feature-check bv2-plan-feature-check-dark" aria-hidden="true">
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {billing === "annual" && (
                    <div className="bv2-plan-credit bv2-plan-credit-dark">
                      Save $198. Two months free when billed annually.
                    </div>
                  )}
                  <a
                    href={plans.apex[billing].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bv2-btn-secondary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.7)",
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    Start with Apex
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section className="bv2-testimonials">
          <div className="bv2-container">
            <div className="bv2-section-top" data-reveal>
              <div className="bv2-eyebrow">
                <span className="bv2-eyebrow-dot" />
                What clients say
              </div>
              <h2 className="bv2-headline" data-split style={{ marginBottom: "1rem" }}>
                Real businesses. Real results.
              </h2>
            </div>

            <div className="bv2-testi-grid">
              {testimonials.map((t) => (
                <div key={t.name} data-reveal>
                  <div className="bv2-testi-card" style={{ height: "100%" }}>
                    <span className="bv2-testi-quote-mark" aria-hidden="true">
                      &ldquo;
                    </span>
                    <p className="bv2-testi-text">{t.quote}</p>
                    <div className="bv2-testi-divider" />
                    <div className="bv2-testi-name">{t.name}</div>
                    <div className="bv2-testi-role">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="bv2-faq-section" id="faq">
          <div className="bv2-container">
            <div className="bv2-section-top" data-reveal>
              <div className="bv2-eyebrow">
                <span className="bv2-eyebrow-dot" />
                Common questions
              </div>
              <h2 className="bv2-headline" data-split style={{ marginBottom: "1rem" }}>
                A few things people want to know before signing up.
              </h2>
            </div>

            <div className="bv2-faq-wrap">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={faq.q} className="bv2-faq-item" data-reveal>
                    <button
                      type="button"
                      className="bv2-faq-question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                    >
                      <span>{faq.q}</span>
                      <span className={`bv2-faq-chevron ${isOpen ? "open" : ""}`} aria-hidden="true">
                        +
                      </span>
                    </button>
                    <div
                      className={`bv2-faq-answer ${isOpen ? "open" : ""}`}
                      style={{ height: isOpen ? "auto" : 0 }}
                    >
                      <div className="bv2-faq-answer-inner">{faq.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ══ */}
        <section className="bv2-cta">
          <div className="bv2-glow bv2-cta-glow-1" style={{ position: "absolute" }} aria-hidden="true" />
          <div className="bv2-glow bv2-cta-glow-2" style={{ position: "absolute" }} aria-hidden="true" />

          <div className="bv2-cta-inner" data-reveal>
            <div
              className="bv2-eyebrow"
              style={{
                color: "rgba(255,255,255,0.6)",
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.1)",
                marginBottom: "1.5rem",
              }}
            >
              <span className="bv2-eyebrow-dot" />
              Start today
            </div>

            <h2 className="bv2-headline bv2-headline-white" data-split style={{ marginBottom: "1.5rem" }}>
              Your business deserves better records than a notebook and memory.
            </h2>

            <p
              className="bv2-subtext"
              style={{ color: "rgba(255,255,255,0.45)", margin: "0 auto 2.5rem" }}
              data-fill
            >
              BizOS gives you invoicing, tax compliance, payroll, and a financial record that actually
              means something. Start your free trial and see what two weeks changes.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "1rem",
              }}
            >
              <a
                href="https://app.ai1team.com/signup?plan=momentum"
                target="_blank"
                rel="noopener noreferrer"
                className="bv2-btn-primary"
                style={{ fontSize: "1rem", padding: "16px 32px" }}
              >
                Start your free trial
                <span className="bv2-arrow">→</span>
              </a>
              <button
                type="button"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                className="bv2-btn-secondary"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  borderColor: "rgba(255,255,255,0.2)",
                  fontSize: "1rem",
                  padding: "16px 32px",
                }}
              >
                View all plans
              </button>
            </div>

            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", marginBottom: "0" }}>
              14 days free. No card needed to start your trial.
            </p>

            <div className="bv2-cta-partner">
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  marginBottom: "10px",
                }}
              >
                Know other businesses that could use BizOS? AI1team runs a partner program where you
                can earn recurring commission by referring businesses to BizOS.
              </p>
              <a
                href="https://partner.ai1team.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.82rem",
                  color: "var(--accent)",
                  fontWeight: 600,
                  textDecoration: "underline",
                }}
              >
                Learn about the partner program
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
