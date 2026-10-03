"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

// /bizos-old draws its own navbar; the current /bizos page uses this one.
const HIDDEN_ON = ["/bizos-old", "/bizos-partner-event"];

export default function ConditionalNavbar() {
  const pathname = usePathname();

  if (HIDDEN_ON.some((path) => pathname === path || pathname?.startsWith(`${path}/`))) {
    return null;
  }

  return <Navbar />;
}
