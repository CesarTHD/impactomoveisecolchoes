"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollCardProps {
    children: ReactNode;
    offsetTop?: number;
}

export default function ScrollCard({
    children,
    offsetTop = 96, // distância do topo (px)
}: ScrollCardProps) {
    return (
        <div className="relative h-[130vh]">
            <motion.div
                className="sticky"
                style={{ top: offsetTop }}
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1], // easing premium
                }}
                viewport={{ once: true, margin: "-160px" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
