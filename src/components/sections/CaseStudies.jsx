'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Sky Tower Complex",
      category: "Commercial",
      description: "42-floor mixed-use development featuring premium PVC board installations for interior cladding and architectural elements.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80",
      stats: { boards: "15,000", area: "25,000", time: "6" }
    },
    {
      title: "Metro Station Renovation",
      category: "Infrastructure",
      description: "Complete interior renovation using fire-retardant PVC solutions for public transportation facility upgrades.",
      image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&q=80",
      stats: { boards: "8,500", area: "12,000", time: "3" }
    },
    {
      title: "Corporate Innovation Hub",
      category: "Office",
      description: "Modern workspace design featuring sustainable PVC board applications for flexible office environments.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      stats: { boards: "5,200", area: "8,500", time: "2" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Project Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how our professional PVC solutions have enhanced construction projects across various industries and applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-slate-900/20"></div>
                <div className="absolute top-4 left-4 bg-blue-600 rounded-lg px-3 py-1 text-sm font-medium text-white">
                  {study.category}
                </div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/20"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <ExternalLink className="w-6 h-6 text-slate-700" />
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-center border-t border-slate-100 pt-4">
                  <div>
                    <div className="text-lg font-bold text-slate-800">{study.stats.boards}</div>
                    <div className="text-xs text-slate-500">Boards Used</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">{study.stats.area}m²</div>
                    <div className="text-xs text-slate-500">Area Covered</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">{study.stats.time}mo</div>
                    <div className="text-xs text-slate-500">Timeline</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};