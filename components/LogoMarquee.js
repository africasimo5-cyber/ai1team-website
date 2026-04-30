"use client";

import Image from "next/image";

const CDN = "https://cdn.simpleicons.org";

const row1 = [
  { name: "OpenAI", slug: "openai" },
  { name: "Claude AI", slug: "anthropic" },
  { name: "Gemini", slug: "googlegemini" },
  { name: "n8n", slug: "n8n" },
  { name: "Make.com", slug: "make" },
  { name: "Zapier", slug: "zapier" },
  { name: "Notion", slug: "notion" },
  { name: "Airtable", slug: "airtable" },
  { name: "Slack", slug: "slack" },
  { name: "HubSpot", slug: "hubspot" },
];

const row2 = [
  { name: "GitHub", slug: "github" },
  { name: "Vercel", slug: "vercel" },
  { name: "GoHighLevel", slug: "highlevel" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "Typeform", slug: "typeform" },
  { name: "Calendly", slug: "calendly" },
  { name: "Stripe", slug: "stripe" },
  { name: "Twilio", slug: "twilio" },
  { name: "WhatsApp", slug: "whatsapp" },
  { name: "Google Sheets", slug: "googlesheets" },
];

const edgeMask = {
  maskImage:
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
};

function LogoCard({ name, slug }) {
  return (
    <div className="flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/10 bg-white/5 shrink-0 mx-3">
      <Image
        src={`${CDN}/${slug}`}
        alt={name}
        width={18}
        height={18}
        unoptimized
        className="w-[18px] h-[18px] object-contain"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.65 }}
      />
      <span className="text-white/50 text-[13px] font-medium whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function MarqueeTrack({ tools, direction }) {
  const items = [...tools, ...tools];
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="overflow-hidden group py-1" style={edgeMask}>
      <div
        className={`flex w-max ${animClass} group-hover:[animation-play-state:paused]`}
      >
        {items.map((tool, i) => (
          <LogoCard key={`${tool.slug}-${i}`} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="bg-gray-950 py-14 overflow-hidden border-t border-white/5">
      <div className="text-center mb-10 px-6">
        <p className="text-[11px] text-white/30 uppercase tracking-[0.3em] font-bold mb-2">
          Powered by Industry-Leading Tools
        </p>
        <p className="text-white/20 text-sm">
          We integrate with the platforms you already trust
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <MarqueeTrack tools={row1} direction="left" />
        <MarqueeTrack tools={row2} direction="right" />
      </div>
    </section>
  );
}
