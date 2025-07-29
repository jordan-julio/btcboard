'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElement = ({ delay, duration, children }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-20, 20, -20] }}
      transition={{
        duration: duration || 4,
        delay: delay || 0,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute"
    >
      {children}
    </motion.div>
  );
};