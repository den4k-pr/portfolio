'use client';

import { motion } from 'framer-motion';

export const LayoutAnimationSkroll = ({
  children,
  className,
  transform,
}: {
  children: React.ReactNode;
  className: string;
  transform: string;
}) => {
  return (
    <motion.div
      initial={{ transform: transform, opacity: 0 }}
      whileInView={{ transform: 'translate(0px)', opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={className}>
      {children}
    </motion.div>
  );
};
