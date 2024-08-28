"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  offsetY?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, offsetY = 100 }) => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  // Transform scrollY into y and opacity values
  const y = useTransform(scrollY, [0, offsetY], [0, 100]);
  const opacity = useTransform(scrollY, [0, offsetY], [1, 0]);

  useEffect(() => {
    // Subscribe to scroll changes and start animation
    const unsubscribe = scrollY.onChange(latestY => {
      controls.start({
        y: y.get(),         // Use .get() to get the current value
        opacity: opacity.get(), // Use .get() to get the current values
        transition: { duration: 0.5 },
      });
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, [controls, scrollY, y, opacity]);

  return (
    <motion.div
      animate={controls}
      initial={{ y: 100, opacity: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
