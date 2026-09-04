// components/LenisScroll.jsx
'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Connect lenis to RAF
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Integrate with Next.js router
    const handleRouteChange = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      {children}
    </div>
  );
}