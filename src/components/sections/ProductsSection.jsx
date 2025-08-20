'use client';
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import {
  Check, ArrowRight, Calendar, Phone,
  Grid3x3, Layers, Paintbrush, Square, Award, Eye, ChevronRight
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Clean Calendly integration using official embed
export const CalendlyWidget = ({ 
  url = 'https://calendly.com/z5376268/30min',
  text = 'Schedule Meeting',
  className = '',
  variant = 'popup' // 'popup' or 'inline'
}) => {
  useEffect(() => {
    // Only load Calendly scripts once
    if (!window.Calendly && !document.querySelector('script[src*="calendly"]')) {
      // Load Calendly CSS
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      // Load Calendly JS
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const openCalendly = useCallback(() => {
    // Check if Calendly is available when clicked, not during render
    if (window.Calendly) {
      if (variant === 'popup') {
        window.Calendly.initPopupWidget({ url });
      }
    } else {
      // Fallback: redirect to Calendly page if script not loaded
      window.open(url, '_blank');
    }
  }, [url, variant]);

  if (variant === 'inline') {
    return (
      <div 
        className={`calendly-inline-widget ${className}`}
        data-url={url}
        style={{ minWidth: '320px', height: '700px' }}
      />
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onFocus={() => window.Calendly && window.Calendly.initPopupWidget({ url })}
      onClick={openCalendly}
      className={className}
    >
      {text}
    </motion.button>
  );
};

export const ProductsSection = () => {
  const t = useTranslations('products');
  const tCommon = useTranslations('common');
  const [selectedCategory, setSelectedCategory] = useState(0);
  const sectionRef = useRef(null);

  const pvcSolutions = useMemo(() => [
    {
      id: '2d',
      name: t('categories.2d.name'),
      tagline: t('categories.2d.tagline'),
      description: t('categories.2d.description'),
      specs: t('categories.2d.specs'),
      features: [
        t('categories.2d.features.0'),
        t('categories.2d.features.1'),
        t('categories.2d.features.2')
      ],
      applications: [
        t('categories.2d.applications.0'),
        t('categories.2d.applications.1'),
        t('categories.2d.applications.2')
      ],
      images: [
        '/lampiran Foto/Edit/2D/CNC 2D.webp',
        '/lampiran Foto/Edit/2D/file_00000000eef861f68d584816dbca0c64.webp',
        '/lampiran Foto/Edit/2D/file_00000000ee7c61fb92adf3eff0ba2a68.webp'
      ],
      icon: <Grid3x3 className="w-5 h-5 lg:w-6 lg:h-6" />,
      bgGradient: 'from-slate-50/80 via-blue-50/40 to-indigo-50/60',
      primaryColor: '#334155',
      secondaryColor: '#64748b',
      glowColor: 'rgba(51, 65, 85, 0.15)'
    },
    {
      id: '3d',
      name: t('categories.3d.name'),
      tagline: t('categories.3d.tagline'),
      description: t('categories.3d.description'),
      specs: t('categories.3d.specs'),
      features: [
        t('categories.3d.features.0'),
        t('categories.3d.features.1'),
        t('categories.3d.features.2')
      ],
      applications: [
        t('categories.3d.applications.0'),
        t('categories.3d.applications.1'),
        t('categories.3d.applications.2')
      ],
      images: [
        '/lampiran Foto/Edit/3D/CNC 3D.webp',
        '/lampiran Foto/Edit/3D/file_00000000424061f88b22903e54ceeb91 (1).webp',
        '/lampiran Foto/Edit/3D/file_000000009e4861f98708e932c778ea3a.webp'
      ],
      icon: <Layers className="w-5 h-5 lg:w-6 lg:h-6" />,
      bgGradient: 'from-gray-50/80 via-emerald-50/40 to-teal-50/60',
      primaryColor: '#059669',
      secondaryColor: '#10b981',
      glowColor: 'rgba(5, 150, 105, 0.15)'
    },
    {
      id: 'laminating',
      name: t('categories.laminating.name'),
      tagline: t('categories.laminating.tagline'),
      description: t('categories.laminating.description'),
      specs: t('categories.laminating.specs'),
      features: [
        t('categories.laminating.features.0'),
        t('categories.laminating.features.1'),
        t('categories.laminating.features.2')
      ],
      applications: [
        t('categories.laminating.applications.0'),
        t('categories.laminating.applications.1'),
        t('categories.laminating.applications.2')
      ],
      images: [
        '/lampiran Foto/Edit/Laminating/IMG_20231002_104209.webp',
        '/lampiran Foto/Edit/Laminating/file_000000005a3061f7a309f284297a968d.webp',
        '/lampiran Foto/Edit/Laminating/DB7FF596-3BCD-4A74-96EE-8D89EA99EC47.webp'
      ],
      icon: <Paintbrush className="w-5 h-5 lg:w-6 lg:h-6" />,
      bgGradient: 'from-amber-50/80 via-orange-50/40 to-yellow-50/60',
      primaryColor: '#d97706',
      secondaryColor: '#f59e0b',
      glowColor: 'rgba(217, 119, 6, 0.15)'
    },
    {
      id: 'polos',
      name: t('categories.polos.name'),
      tagline: t('categories.polos.tagline'),
      description: t('categories.polos.description'),
      specs: t('categories.polos.specs'),
      features: [
        t('categories.polos.features.0'),
        t('categories.polos.features.1'),
        t('categories.polos.features.2')
      ],
      applications: [
        t('categories.polos.applications.0'),
        t('categories.polos.applications.1'),
        t('categories.polos.applications.2')
      ],
      images: [
        '/lampiran Foto/Edit/Polos/file_0000000016e061f68fd233de68b39ad5.webp',
        '/lampiran Foto/Edit/Polos/file_0000000009e062469df01559f01cb644.webp',
        '/lampiran Foto/Edit/Polos/IMG-20250805-WA0019.webp'
      ],
      icon: <Square className="w-5 h-5 lg:w-6 lg:h-6" />,
      bgGradient: 'from-indigo-50/80 via-purple-50/40 to-violet-50/60',
      primaryColor: '#4f46e5',
      secondaryColor: '#6366f1',
      glowColor: 'rgba(79, 70, 229, 0.15)'
    }
  ], [t]);
  
  // Optimize scroll performance
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
    layoutEffect: false
  });
  
  const backgroundY = useTransform(
    scrollYProgress, 
    [0, 1], 
    ['0%', '30%'],
    { damping: 30, stiffness: 100 }
  );

  // Memoize category change handler
  const handleCategoryChange = useCallback((index) => {
    setSelectedCategory(index);
  }, []);

  const currentSolution = pvcSolutions[selectedCategory];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section ref={sectionRef} id="products" className="relative min-h-screen py-16 lg:py-24 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50"></div>
        <motion.div 
          style={{ y: backgroundY }} 
          className="absolute inset-0 opacity-20 will-change-transform"
        >
          <div className="absolute top-1/4 left-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-gradient-to-r from-slate-200/30 to-gray-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-48 lg:w-80 h-48 lg:h-80 bg-gradient-to-r from-indigo-200/20 to-slate-200/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 mb-6 lg:mb-8 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl lg:rounded-2xl shadow-sm"
            variants={itemVariants}
          >
            <Award className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600" />
            <span className="text-xs lg:text-sm font-semibold text-slate-700">
              {t('sectionLabel')}
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight text-slate-900"
            variants={itemVariants}
          >
            <span>{t('title')}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-indigo-600 to-emerald-600">
              {t('titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            className="text-base lg:text-xl text-slate-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 lg:px-0"
            variants={itemVariants}
          >
            {t('description')}
          </motion.p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12 lg:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {pvcSolutions.map((solution, index) => (
            <motion.button
              key={solution.id}
              onClick={() => handleCategoryChange(index)}
              className={`group relative flex items-center gap-2 lg:gap-3 px-3 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold text-sm lg:text-base will-change-transform ${
                selectedCategory === index
                  ? 'bg-white/95 backdrop-blur-md shadow-lg scale-105 border border-slate-200'
                  : 'bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-slate-100'
              }`}
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                boxShadow: selectedCategory === index ? `0 10px 30px -8px ${solution.glowColor}` : 'none'
              }}
            >
              <div
                className={`relative p-2 lg:p-2.5 rounded-lg lg:rounded-xl transition-colors ${
                  selectedCategory === index ? 'text-white' : 'text-slate-500'
                }`}
                style={{
                  backgroundColor: selectedCategory === index ? solution.primaryColor : 'transparent',
                  border: selectedCategory === index ? 'none' : `1px solid ${solution.secondaryColor}30`
                }}
              >
                {solution.icon}
              </div>
              <span className={`${selectedCategory === index ? 'text-slate-900' : 'text-slate-600'} hidden sm:block`}>
                {solution.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.4, 0, 0.2, 1]
            }}
            className="relative"
          >
            <div className={`relative bg-gradient-to-br ${currentSolution.bgGradient} backdrop-blur-md rounded-2xl lg:rounded-3xl border border-white/30 shadow-lg lg:shadow-xl overflow-hidden`}>
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 30% 40%, ${currentSolution.glowColor} 0%, transparent 60%)`
                }}
              />
              
              <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 p-6 lg:p-12">
                {/* Content column */}
                <div className="lg:col-span-2 space-y-6 lg:space-y-8 order-2 lg:order-1">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                      <div 
                        className="p-2.5 lg:p-3 rounded-xl lg:rounded-2xl text-white shadow-md self-start"
                        style={{ backgroundColor: currentSolution.primaryColor }}
                      >
                        {currentSolution.icon}
                      </div>
                      <div className="px-3 lg:px-4 py-1.5 lg:py-2 bg-white/70 backdrop-blur-sm rounded-lg lg:rounded-full">
                        <span className="text-xs lg:text-sm font-semibold text-slate-700">
                          {currentSolution.specs}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-2 lg:mb-3">
                      {currentSolution.name}
                    </h3>
                    <p className="text-lg lg:text-xl text-slate-700 font-medium mb-3 lg:mb-4">
                      {currentSolution.tagline}
                    </p>
                    <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                      {currentSolution.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 lg:space-y-4">
                    <h4 className="text-lg lg:text-xl font-bold text-slate-900 flex items-center gap-2">
                      <div 
                        className="p-1.5 rounded-lg"
                        style={{ backgroundColor: `${currentSolution.primaryColor}20` }}
                      >
                        <Check className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: currentSolution.primaryColor }} />
                      </div>
                      {t('featuresLabel')}
                    </h4>
                    <div className="space-y-2 lg:space-y-3">
                      {currentSolution.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 lg:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40"
                        >
                          <div 
                            className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: currentSolution.primaryColor }}
                          />
                          <span className="text-sm lg:text-base text-slate-700 font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 lg:mb-4">{t('applicationsLabel')}</h4>
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                      {currentSolution.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 lg:px-4 py-2 backdrop-blur-sm rounded-lg lg:rounded-xl font-medium text-xs lg:text-sm border"
                          style={{
                            backgroundColor: `${currentSolution.primaryColor}15`,
                            color: currentSolution.primaryColor,
                            borderColor: `${currentSolution.primaryColor}30`
                          }}
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                    <motion.button
                      className="group flex-1 text-white py-3 lg:py-4 px-6 lg:px-8 rounded-xl lg:rounded-2xl font-semibold shadow-md flex items-center justify-center gap-2"
                      style={{ backgroundColor: currentSolution.primaryColor }}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Eye className="w-4 h-4 lg:w-5 lg:h-5" />
                      <span className="text-sm lg:text-base">{t('viewDetails')}</span>
                      <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <CalendlyWidget 
                      url="https://calendly.com/z5376268/30min"
                      text={t('getQuote')}
                      className="flex-1 bg-white/80 backdrop-blur-sm hover:bg-white/95 text-slate-800 py-3 lg:py-4 px-6 lg:px-8 rounded-xl lg:rounded-2xl font-semibold border border-slate-200 hover:border-slate-300 transition-all duration-300 text-sm lg:text-base flex items-center justify-center gap-2"
                    />
                  </div>
                </div>

                {/* Images column */}
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 h-full">
                    {/* Main image */}
                    <motion.div
                      className="sm:col-span-2 relative aspect-video rounded-xl lg:rounded-2xl overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={currentSolution.images[0]}
                        alt={`${currentSolution.name} main example`}
                        fill
                        className="object-cover"
                        quality={85}
                        priority={selectedCategory === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                        <span className="text-xs lg:text-sm font-semibold text-slate-900">{t('exampleLabel')} 1</span>
                      </div>
                    </motion.div>

                    {/* Secondary images */}
                    {currentSolution.images.slice(1, 3).map((image, idx) => (
                      <motion.div
                        key={idx}
                        className="relative aspect-square rounded-xl lg:rounded-2xl overflow-hidden shadow-md"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image 
                          src={image} 
                          alt={`${currentSolution.name} example ${idx + 2}`} 
                          fill 
                          className="object-cover" 
                          quality={80}
                          loading="lazy"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute bottom-2 lg:bottom-3 left-2 lg:left-3 bg-white/80 backdrop-blur-sm rounded-md px-2 py-1">
                          <span className="text-xs font-semibold text-slate-800">
                            {t('exampleLabel')} {idx + 2}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-24 lg:w-32 h-24 lg:h-32 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-1/4 right-1/4 w-32 lg:w-40 h-32 lg:h-40 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <h3 className="text-2xl lg:text-4xl font-bold mb-3 lg:mb-4">
                {t('cta.title')}
              </h3>
              <p className="text-base lg:text-xl text-slate-200 mb-6 lg:mb-8 max-w-2xl lg:max-w-3xl mx-auto px-4 lg:px-0">
                {t('cta.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center px-4 lg:px-0">
                <CalendlyWidget 
                  url="https://calendly.com/z5376268/30min"
                  text={
                    <span className="flex items-center gap-2 lg:gap-3">
                      <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                      {t('cta.schedule')}
                    </span>
                  }
                  className="bg-white text-slate-800 hover:bg-slate-50 px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold shadow-md transition-colors flex items-center justify-center gap-2"
                />
                
                <motion.a 
                  href="tel:+6281130741"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2" 
                  whileHover={{ scale: 1.02, y: -1 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="text-sm lg:text-base">{t('cta.call')}</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};