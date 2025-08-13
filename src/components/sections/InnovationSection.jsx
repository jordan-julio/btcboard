'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Bug, Recycle, Sparkles, Scissors, Wrench, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const InnovationSection = () => {
  const t = useTranslations('innovation');
  const keunggulan = [
    {
      title: t('features.title1'),
      description: t('features.description1'),
      icon: <Droplets className="w-8 h-8" />
    },
    {
      title: t('features.title2'),
      description: t('features.description2'),
      icon: <Bug className="w-8 h-8" />
    },
    {
      title: t('features.title3'),
      description: t('features.description3'),
      icon: <Recycle className="w-8 h-8" />
    },
    {
      title: t('features.title4'),
      description: t('features.description4'),
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: t('features.title5'),
      description: t('features.description5'),
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: t('features.title7'),
      description: t('features.description7'),
      icon: <Clock className="w-8 h-8" />
    }
  ];

  return (
    <section id="keunggulan-produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keunggulan.map((item, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 h-full hover:shadow-lg">
                <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};