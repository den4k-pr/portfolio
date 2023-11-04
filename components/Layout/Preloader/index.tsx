'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export const Loading = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    const loadingTimeout = setTimeout(() => {
      tl.to('.loading-page', {
        opacity: 0,
        duration: 1.5,
        display: 'none',
        onComplete: () => {
          setLoading(false);
        },
      }).fromTo(
        '.logo-name',
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: 0.5,
        },
      );
    }, 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        <nav className="loader">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <span className="loading">Loading...</span>
        </nav>
      ) : (
        children
      )}
    </>
  );
};
