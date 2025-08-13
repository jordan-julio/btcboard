'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Download, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-10 text-slate-300 max-w-3xl mx-auto">
            Partner with industry leaders for your next construction project. 
            Get professional consultation and premium PVC solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" /> 
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              className="border-2 border-slate-400 text-slate-300 hover:bg-white hover:text-slate-800 hover:border-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Product Catalog
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};