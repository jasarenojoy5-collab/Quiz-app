import { useState, useEffect } from 'react';

/**
 * Custom hook to smoothly animate a number counting up from 0 to a target value.
 * Respects 'prefers-reduced-motion'.
 */
export function useCountUp(target: number, duration: number = 1000): number {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // If target is 0 or less, no animation needed
    if (target <= 0) {
      setCount(0);
      return;
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Cubic ease-out curve for smooth deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(easeProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration]);

  return count;
}

