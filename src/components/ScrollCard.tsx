"use client";
import { ReactNode } from "react";

export default function ScrollCard({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  return (
    <div
      className="sticky top-0 h-screen w-full overflow-hidden"
      style={{ zIndex: index + 1 }}
    >
      {children}
    </div>
  );
}
