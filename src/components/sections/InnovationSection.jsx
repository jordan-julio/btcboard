'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layers, Shield, Microscope, Award, Users } from 'lucide-react';

export const InnovationSection = () => {
  const innovations = [
    {
      title: "Advanced Material Science",
      description: "Cutting-edge polymer technology for superior performance and longevity in demanding applications.",
      icon: <Microscope className="w-8 h-8" />
    },
    {
      title: "Sustainable Manufacturing",
      description: "Eco-friendly production processes with 100% recyclable materials and minimal environmental impact.",
      icon: <Layers className="w-8 h-8" />
    },
    {
      title: "Enhanced Safety Standards",
      description: "Fire-retardant properties exceeding industry requirements for maximum safety in all applications.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing protocols ensuring consistent quality and performance across all product lines.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Technical Innovation",
      description: "Continuous R&D investment in next-generation PVC formulations and manufacturing techniques.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Expert Support",
      description: "Professional technical support and consultation services for optimal product selection and application.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <section id="innovation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Innovation & Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Leading the industry through advanced technology, sustainable practices, and unwavering commitment to quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 h-full hover:shadow-lg">
                <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-6">
                  {innovation.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {innovation.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {innovation.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};