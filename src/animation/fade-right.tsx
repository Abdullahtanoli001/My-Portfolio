import { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { useAnimationGate } from "@/contexts/animation-gate";

export interface FadeRightProps {
  children: ReactNode;
  duration: number;
  delay?: number;
  className?: string;
  whileInView?: boolean;
}

export default function FadeRight({
  children,
  duration,
  delay,
  className,
  whileInView = false,
}: FadeRightProps) {
  const prefersReducedMotion = useReducedMotion();
  const { animationsReady } = useAnimationGate();

  const animation = {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: "easeOut" as const,
      delay,
    },
  };

  const initial = prefersReducedMotion
    ? { opacity: 0 }
    : { x: -60, opacity: 0 };
  const animate = prefersReducedMotion ? { opacity: 1 } : animation;

  // Avoid triggering any Framer Motion lifecycle before the global gate opens.
  if (!animationsReady) {
    return (
      <div className={className} key="not-ready">
        {children}
      </div>
    );
  }

  const MotionDiv = motion.div as any;
  return (
    <MotionDiv
      key="ready"
      initial={initial}
      whileInView={whileInView ? animate : {}}
      animate={!whileInView ? animate : {}}
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

