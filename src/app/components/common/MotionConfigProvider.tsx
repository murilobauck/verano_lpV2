"use client";

import { LazyMotion, domAnimation, MotionConfig } from "motion/react";

export function MotionConfigProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
