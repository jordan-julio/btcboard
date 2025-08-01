'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star, Shield, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export const HeroSection = ({ heroParallax, heroOpacity }) => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Enhanced Background with Mobile Optimization */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30"></div>
      
      {/* Refined Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='1'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 sm:py-16 lg:py-20">
          
          {/* Left Content - Mobile First Approach */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/60 rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-emerald-700">Industry Leading PVC Solutions</span>
            </motion.div>
            
            {/* Mobile-Optimized Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Professional Grade{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 relative">
                  PVC Materials
                  <motion.div
                    className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
              </h1>
            </motion.div>
            
            {/* Enhanced Description */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Premium quality PVC boards engineered for superior performance, 
              durability, and precision in modern construction projects. Built to exceed industry standards.
            </motion.p>
            
            {/* Mobile-Friendly Trust Indicators */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 py-4 max-w-lg mx-auto lg:max-w-none lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 p-2 sm:p-0">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-700">25+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 p-2 sm:p-0">
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-700">98% Client Satisfaction</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 p-2 sm:p-0">
                <Shield className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-700">ISO Certified Quality</span>
              </div>
            </motion.div>
            
            {/* Enhanced Mobile-First CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.button 
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 flex-1 sm:min-w-[200px]"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                Explore Products 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
              <motion.button 
                className="group border-2 border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold flex items-center justify-center gap-2 flex-1 sm:min-w-[200px] bg-white hover:bg-blue-50/50"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Mobile Contact Quick Access */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-200/60 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <span className="text-sm text-slate-600 font-medium">Need immediate assistance?</span>
              <div className="flex items-center gap-4">
                <motion.a 
                  href="tel:+1234567890" 
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-semibold">Call Now</span>
                </motion.a>
                <motion.a 
                  href="mailto:info@company.com" 
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-semibold">Email Us</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Content - Mobile Optimized */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              <motion.div 
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl"
                style={{ y: heroParallax }}
              >
                <Image
                  src="/5.jpg"
                  alt="Professional PVC Construction Materials"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
              </motion.div>
              
              {/* Mobile-Optimized Floating Stats Cards */}
              <motion.div
                className="absolute -left-2 sm:-left-6 top-15 sm:top-20 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-6 border border-slate-100/60"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl sm:text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-xs sm:text-sm text-slate-600 font-semibold">Projects Completed</div>
              </motion.div>
              
              <motion.div
                className="absolute -right-2 sm:-right-6 bottom-4 sm:bottom-20 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-6 border border-slate-100/60"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl sm:text-3xl font-bold text-emerald-600">1M+</div>
                <div className="text-xs sm:text-sm text-slate-600 font-semibold">Satisfied Customers</div>
              </motion.div>
              
              {/* Enhanced Quality Badge */}
              <motion.div
                className="absolute top-3 sm:top-6 left-3 sm:left-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                Premium Quality ⭐
              </motion.div>

              {/* Additional Trust Element */}
              <motion.div
                className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 bg-emerald-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                1 Year Warranty
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Enhanced Mobile-Friendly Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-slate-400/60 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
          <motion.div 
            className="w-1 h-2 sm:h-3 bg-slate-500 rounded-full mt-1.5 sm:mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};