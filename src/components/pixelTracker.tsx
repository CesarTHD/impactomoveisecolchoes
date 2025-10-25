"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// 👇 Declara o fbq no escopo global
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export default function PixelTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Dispara Pixel no client
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "PageView");
    }

    // Dispara API (server-side)
    fetch("/api/meta-conversions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_name: "PageView",
        event_id: `pageview-${pathname}`, // deduplicação
        user_data: {}, // pode incluir email/telefone hashed depois
      }),
    });
  }, [pathname]);

  return null;
}
