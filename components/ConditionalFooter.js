"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

const HIDDEN_ON = ["/bizos-partner-event"];

export default function ConditionalFooter() {
  const pathname = usePathname();

  if (HIDDEN_ON.some((path) => pathname === path || pathname?.startsWith(`${path}/`))) {
    return null;
  }

  return <Footer />;
}
