"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GclidProvider({ children }: any) {
  const searchParams = useSearchParams();
  const gclidParam = searchParams?.get("gclid");

  useEffect(() => {
    if (gclidParam) {
      localStorage.setItem("gclid", gclidParam);
    }
  }, [gclidParam]);

  return children;
}
