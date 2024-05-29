'use client';
import { ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedOnScroll = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={variants} transition={{ duration: 0.6 }}>
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
