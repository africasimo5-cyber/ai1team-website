"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const HIDDEN_ON = ["/bizos", "/bizos-partner-event"];

export default function ConditionalNavbar() {
  const pathname = usePathname();

  if (HIDDEN_ON.some((path) => pathname === path || pathname?.startsWith(`${path}/`))) {
    return null;
  }

  return <Navbar />;
}
