"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export default function PixelTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "PageView");
      console.log("Meta Pixel PageView disparado:", pathname);
    }
  }, [pathname]);

  return null;
}
