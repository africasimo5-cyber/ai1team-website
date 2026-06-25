"use client";
import { useEffect, useRef } from "react";

export default function AboutIllustration() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    fetch("/illustrations/about.svg")
      .then((r) => r.text())
      .then((html) => {
        if (!wrapperRef.current) return;
        wrapperRef.current.innerHTML = html;
        const svg = wrapperRef.current.querySelector("svg");
        if (!svg) return;
        svg.classList.remove("animated");

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              svg.classList.add("animated");
              observer.disconnect();
            }
          },
          { threshold: 0.2 }
        );
        observer.observe(wrapperRef.current);
      });

    return () => {};
  }, []);

  return <div ref={wrapperRef} className="w-full" />;
}
