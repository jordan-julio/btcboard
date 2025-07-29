'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Star, Layers, Award } from 'lucide-react';
import { AnimatedCounter } from '../utility/AnimatedCounter';

export const StatisticsSection = () => {
  const stats = [
    { number: "50000", suffix: "+", label: "Projects Completed", icon: <Building2 /> },
    { number: "98", suffix: "%", label: "Client Satisfaction", icon: <Star /> },
    { number: "15", suffix: "M", label: "Square Meters Installed", icon: <Layers /> },
    { number: "25", suffix: "+", label: "Years of Excellence", icon: <Award /> }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center text-white"
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