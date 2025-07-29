'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Palette, Shield } from 'lucide-react';
import { Card3D } from '../utility/Card3D';

export const ProductsSection = () => {
  const products = [
    {
      name: "Premium White PVC Boards",
      tagline: "Professional Grade Construction Material",
      specs: "3-25mm thickness • UV Resistant • Fire Retardant",
      image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
      features: ["High density foam core", "Smooth finish surface", "Easy fabrication"],
      icon: <Palette className="w-6 h-6" />
    },
    {
      name: "Colored PVC Sheets",
      tagline: "Customizable Solutions for Every Project",
      specs: "Multiple colors • 2-20mm • Weather Resistant",
      image: "https://images.unsplash.com/photo-1562113530-57ba467cea38?w=800&q=80",
      features: ["20+ color options", "Color consistency", "Scratch resistant surface"],
      icon: <Palette className="w-6 h-6" />
    },
    {
      name: "Industrial Grade PVC",
      tagline: "Heavy-Duty Performance Materials",
      specs: "Chemical Resistant • 5-50mm • Commercial Grade",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
      features: ["Chemical resistance", "Impact resistant", "Temperature stable"],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Professional Product Range
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Engineered for excellence, designed for performance. Our comprehensive range of PVC boards meets the highest industry standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-slate-900/20"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-slate-700">
                  {product.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-600 mb-3 text-sm">{product.tagline}</p>
                <p className="text-xs text-slate-500 mb-4 font-medium">{product.specs}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-green-600" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <motion.button 
                  className="w-full bg-slate-800 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};