"use client";
import { useEffect, useRef } from "react";

export default function AgentsIllustration() {
  const ref = useRef(null);

  useEffect(() => {
    fetch("/illustrations/agents.svg")
      .then((r) => r.text())
      .then((html) => {
        if (ref.current) ref.current.innerHTML = html;
      });
  }, []);

  return <div ref={ref} className="w-full" />;
}
