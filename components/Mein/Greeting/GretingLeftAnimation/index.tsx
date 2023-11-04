'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const GretingLeftAnimation = ({ children, time, transform }) => {
  const [animatedComponent, setAnimatedComponent] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const AnimatedComponent = (
        <motion.div
          initial={{ transform: `translateX(${transform}px)`, opacity: 0 }}
          whileInView={{ transform: 'translateX(0px)', opacity: 1 }}
          transition={{ duration: 0.8 }}>
          {children}
        </motion.div>
      );

      setAnimatedComponent(AnimatedComponent);
    }, time);

    return () => clearTimeout(timeout);
  }, [children, time, transform]);

  return animatedComponent;
};
