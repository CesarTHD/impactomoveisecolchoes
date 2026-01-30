"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollCardProps {
  children: ReactNode;
  offsetTop?: number;
}

export default function ScrollCard({
  children,
  offsetTop = 96,
}: ScrollCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "-120px 0px",
        threshold: 0.25,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-[120vh]">
      {/* STICKY SEM TRANSFORM */}
      <div
        className="sticky"
        style={{ top: offsetTop }}
      >
        {/* ANIMAÇÃO ACONTECE AQUI */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={
            visible
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                  },
                }
              : {}
          }
          style={{
            willChange: "transform, opacity",
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
