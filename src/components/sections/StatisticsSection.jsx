'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Star, Layers, Award } from 'lucide-react';
import { AnimatedCounter } from '../utility/AnimatedCounter';
import { useTranslations } from 'next-intl';

export const StatisticsSection = () => {
  const t = useTranslations();
  const stats = [
    { number: "10000", suffix: "+", label: t('hero.stats.pvcBoardsMade'), icon: <Building2 /> },
    { number: "98", suffix: "%", label: t('hero.clientSatisfaction'), icon: <Star /> },
    { number: "7", suffix: "+", label: t('hero.yearsOfExcellence'), icon: <Award /> }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Layout: 1 column on mobile, 2 columns on small screens, 3 columns on medium+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center text-white ${
                // Center the third item across the full width when it's alone on the second row
                index === 2 ? 'sm:col-span-2 sm:justify-self-center md:col-span-1 md:justify-self-auto' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-400 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};