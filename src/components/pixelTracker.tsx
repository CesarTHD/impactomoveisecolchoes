"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

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
        event_id: `pageview-${pathname}`, // ID para deduplicação
        user_data: {}, // aqui você pode mandar infos hashed (ex: email, IP)
      }),
    });
  }, [pathname]);

  return null;
}
