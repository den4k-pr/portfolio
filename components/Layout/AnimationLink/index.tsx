'use client';

import { motion } from 'framer-motion';

export const AnimationLink = ({ children, time }: { children: React.ReactNode; time: number }) => {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0, textAlign: 'center', display: 'inline' }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: time }}>
      {children}
    </motion.div>
  );
};
