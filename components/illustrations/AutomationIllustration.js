"use client";
import { useEffect, useRef } from "react";

export default function AutomationIllustration() {
  const ref = useRef(null);

  useEffect(() => {
    fetch("/illustrations/automation.svg")
      .then((r) => r.text())
      .then((html) => {
        if (ref.current) ref.current.innerHTML = html;
      });
  }, []);

  return <div ref={ref} className="w-full" />;
}
