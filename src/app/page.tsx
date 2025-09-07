'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/layout/HeroSection';
import MastersSection from '@/components/layout/MastersSection';
import PillarsSection from '@/components/layout/PillarsSection';

export default function HomePage() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <HeroSection />
        <PillarsSection />
        <MastersSection />
      </motion.div>
    </main>
  );
}