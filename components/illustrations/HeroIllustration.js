"use client";
import { useEffect, useRef } from "react";

export default function HeroIllustration() {
  const ref = useRef(null);

  useEffect(() => {
    fetch("/illustrations/hero.svg")
      .then((r) => r.text())
      .then((html) => {
        if (ref.current) ref.current.innerHTML = html;
      });
  }, []);

  return <div ref={ref} className="w-full" />;
}
