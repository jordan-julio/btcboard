'use client';
import React, { useState, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import {
  Check, ArrowRight, Calendar, X, Phone,
  Grid3x3, Layers, Paintbrush, Square, Award, Eye, ChevronRight
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const ProductsSection = () => {
  const t = useTranslations('products');
  const tCommon = useTranslations('common');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // --- Helpers for scheduling ---
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let current = new Date(today);
    current.setDate(current.getDate() + 1);

    while (dates.length < 10) {
      const dow = current.getDay();
      if (dow !== 0 && dow !== 6) dates.push(new Date(current)); // weekdays only
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  const formatDate = (date) =>
    date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  const handleScheduleSubmit = () => {
    if (!selectedDate || !selectedTime) return;
    alert(`Consultation scheduled for ${selectedDate} at ${selectedTime}`);
    setIsModalOpen(false);
    setSelectedDate('');
    setSelectedTime('');
  };

  // ---- DATA with professional color schemes ----
  const pvcSolutions = [
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
        '/lampiran Foto/Edit/2D/CNC 2D.jpg',
        '/lampiran Foto/Edit/2D/file_00000000eef861f68d584816dbca0c64.png',
        '/lampiran Foto/Edit/2D/file_00000000ee7c61fb92adf3eff0ba2a68.png'
      ],
      icon: <Grid3x3 className="w-5 h-5 lg:w-6 lg:h-6" />,
      bgGradient: 'from-slate-50/80 via-blue-50/40 to-indigo-50/60',
      accentColor: 'slate',
      primaryColor: '#334155', // slate-700
      secondaryColor: '#64748b', // slate-500
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
        '/lampiran Foto/Edit/3D/CNC 3D.jpg',
        '/lampiran Foto/Edit/3D/file_00000000424061f88b22903e54ceeb91 (1).png',
        '/lampiran Foto/Edit/3D/file_000000009e4861f98708e932c778ea3a.png'
      ],
      icon: <Layers className="w-5 h-5 lg:w-6 lg:h-6" />,
      bgGradient: 'from-gray-50/80 via-emerald-50/40 to-teal-50/60',
      accentColor: 'emerald',
      primaryColor: '#059669', // emerald-600
      secondaryColor: '#10b981', // emerald-500
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
        '/lampiran Foto/Edit/Laminating/IMG_20231002_104209.jpg',
        '/lampiran Foto/Edit/Laminating/file_000000005a3061f7a309f284297a968d.png',
        '/lampiran Foto/Edit/Laminating/DB7FF596-3BCD-4A74-96EE-8D89EA99EC47.png'
      ],
      icon: <Paintbrush className="w-5 h-5 lg:w-6 lg:h-6" />,
      bgGradient: 'from-amber-50/80 via-orange-50/40 to-yellow-50/60',
      accentColor: 'amber',
      primaryColor: '#d97706', // amber-600
      secondaryColor: '#f59e0b', // amber-500
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
        '/lampiran Foto/Edit/Polos/file_0000000016e061f68fd233de68b39ad5.png',
        '/lampiran Foto/Edit/Polos/file_0000000009e062469df01559f01cb644.png',
        '/lampiran Foto/Edit/Polos/IMG-20250805-WA0019.jpg'
      ],
      icon: <Square className="w-5 h-5 lg:w-6 lg:h-6" />,
      bgGradient: 'from-indigo-50/80 via-purple-50/40 to-violet-50/60',
      accentColor: 'indigo',
      primaryColor: '#4f46e5', // indigo-600
      secondaryColor: '#6366f1', // indigo-500
      glowColor: 'rgba(79, 70, 229, 0.15)'
    }
  ];

  const currentSolution = pvcSolutions[selectedCategory];

  return (
    <section ref={sectionRef} id="products" className="relative min-h-screen py-16 lg:py-24 overflow-hidden bg-white">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50"></div>
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-gradient-to-r from-slate-200/30 to-gray-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-48 lg:w-80 h-48 lg:h-80 bg-gradient-to-r from-indigo-200/20 to-slate-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-40 lg:w-64 h-40 lg:h-64 bg-gradient-to-r from-emerald-200/20 to-gray-200/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <motion.div
          className="text-center mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 mb-6 lg:mb-8 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl lg:rounded-2xl shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Award className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600" />
            <span className="text-xs lg:text-sm font-semibold text-slate-700">
              {t('sectionLabel')}
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span>{t('title')}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-indigo-600 to-emerald-600">
              {t('titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            className="text-base lg:text-xl text-slate-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 lg:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {t('description')}
          </motion.p>
        </motion.div>

        {/* Professional Category Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12 lg:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {pvcSolutions.map((solution, index) => (
            <motion.button
              key={solution.id}
              onClick={() => setSelectedCategory(index)}
              className={`group relative flex items-center gap-2 lg:gap-3 px-3 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold text-sm lg:text-base transition-all duration-300 ${
                selectedCategory === index
                  ? 'bg-white/95 backdrop-blur-md shadow-lg scale-105 border border-slate-200'
                  : 'bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:scale-102 border border-slate-100'
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              style={{
                boxShadow: selectedCategory === index ? `0 10px 30px -8px ${solution.glowColor}` : 'none'
              }}
            >
              <div
                className={`relative p-2 lg:p-2.5 rounded-lg lg:rounded-xl transition-colors ${
                  selectedCategory === index
                    ? 'text-white'
                    : 'text-slate-500'
                }`}
                style={{
                  backgroundColor: selectedCategory === index ? solution.primaryColor : 'transparent',
                  border: selectedCategory === index ? 'none' : `1px solid ${solution.secondaryColor}30`
                }}
              >
                {solution.icon}
                {selectedCategory === index && (
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-lg lg:rounded-xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
              <span className={`${selectedCategory === index ? 'text-slate-900' : 'text-slate-600'} hidden sm:block`}>
                {solution.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected category content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative"
          >
            <div
              className={`relative bg-gradient-to-br ${currentSolution.bgGradient} backdrop-blur-md rounded-2xl lg:rounded-3xl border border-white/30 shadow-lg lg:shadow-xl overflow-hidden`}
            >
              <div
                className="absolute inset-0 opacity-20 blur-3xl"
                style={{
                  background: `radial-gradient(circle at 30% 40%, ${currentSolution.glowColor} 0%, transparent 60%)`
                }}
              />
              
              {/* Mobile-first responsive grid */}
              <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 p-6 lg:p-12">
                {/* Content column - full width on mobile */}
                <div className="lg:col-span-2 space-y-6 lg:space-y-8 order-2 lg:order-1">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.2 }}
                  >
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
                  </motion.div>

                  {/* Features */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.3 }} 
                    className="space-y-3 lg:space-y-4"
                  >
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
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="flex items-start gap-3 p-3 lg:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40"
                        >
                          <div 
                            className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: currentSolution.primaryColor }}
                          />
                          <span className="text-sm lg:text-base text-slate-700 font-medium leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Applications */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 lg:mb-4">{t('applicationsLabel')}</h4>
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                      {currentSolution.applications.map((app, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          className="px-3 lg:px-4 py-2 backdrop-blur-sm rounded-lg lg:rounded-xl font-medium text-xs lg:text-sm border"
                          style={{
                            backgroundColor: `${currentSolution.primaryColor}15`,
                            color: currentSolution.primaryColor,
                            borderColor: `${currentSolution.primaryColor}30`
                          }}
                        >
                          {app}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.7 }} 
                    className="flex flex-col sm:flex-row gap-3 lg:gap-4"
                  >
                    <motion.button
                      className="group flex-1 text-white py-3 lg:py-4 px-6 lg:px-8 rounded-xl lg:rounded-2xl font-semibold shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ backgroundColor: currentSolution.primaryColor }}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Eye className="w-4 h-4 lg:w-5 lg:h-5" />
                      <span className="text-sm lg:text-base">{t('viewDetails')}</span>
                      <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                      className="flex-1 bg-white/80 backdrop-blur-sm hover:bg-white/95 text-slate-800 py-3 lg:py-4 px-6 lg:px-8 rounded-xl lg:rounded-2xl font-semibold border border-slate-200 hover:border-slate-300 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      <span className="text-sm lg:text-base">{t('getQuote')}</span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Images column - responsive layout */}
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.3 }} 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 h-full"
                  >
                    {/* Main image - full width on mobile, spans both columns on larger screens */}
                    <motion.div
                      className="sm:col-span-2 relative aspect-video rounded-xl lg:rounded-2xl overflow-hidden shadow-lg"
                      onHoverStart={() => setHoveredImage(0)}
                      onHoverEnd={() => setHoveredImage(null)}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={currentSolution.images[0]}
                        alt={`${currentSolution.name} main example`}
                        fill
                        className="object-cover"
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <motion.div
                        className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <span className="text-xs lg:text-sm font-semibold text-slate-900">{t('exampleLabel')} 1</span>
                      </motion.div>
                    </motion.div>

                    {/* Secondary images */}
                    {currentSolution.images.slice(1, 3).map((image, idx) => (
                      <motion.div
                        key={idx}
                        className="relative aspect-square rounded-xl lg:rounded-2xl overflow-hidden shadow-md"
                        onHoverStart={() => setHoveredImage(idx + 1)}
                        onHoverEnd={() => setHoveredImage(null)}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image 
                          src={image} 
                          alt={`${currentSolution.name} example ${idx + 2}`} 
                          fill 
                          className="object-cover" 
                          quality={85} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <motion.div
                          className="absolute bottom-2 lg:bottom-3 left-2 lg:left-3 bg-white/80 backdrop-blur-sm rounded-md px-2 py-1"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                        >
                          <span className="text-xs font-semibold text-slate-800">
                            {t('exampleLabel')} {idx + 2}
                          </span>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Professional CTA */}
        <motion.div
          className="text-center mt-12 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-24 lg:w-32 h-24 lg:h-32 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-1/4 right-1/4 w-32 lg:w-40 h-32 lg:h-40 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <motion.h3 
                className="text-2xl lg:text-4xl font-bold mb-3 lg:mb-4" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.5 }}
              >
                {t('cta.title')}
              </motion.h3>
              <motion.p 
                className="text-base lg:text-xl text-slate-200 mb-6 lg:mb-8 max-w-2xl lg:max-w-3xl mx-auto px-4 lg:px-0" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.6 }}
              >
                {t('cta.description')}
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center px-4 lg:px-0" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.7 }}
              >
                <motion.button 
                  className="bg-white text-slate-800 hover:bg-slate-50 px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold flex items-center justify-center gap-2 lg:gap-3 shadow-md transition-colors" 
                  whileHover={{ scale: 1.02, y: -1 }} 
                  whileTap={{ scale: 0.98 }} 
                  onClick={() => setIsModalOpen(true)}
                >
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="text-sm lg:text-base">{t('cta.schedule')}</span>
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold backdrop-blur-sm transition-all duration-300" 
                  whileHover={{ scale: 1.02, y: -1 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-sm lg:text-base">{t('cta.catalog')}</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Professional Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 lg:p-8 w-full max-w-sm lg:max-w-md mx-auto shadow-2xl border border-white/20"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="schedule-title"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <h3 id="schedule-title" className="text-xl lg:text-2xl font-bold text-slate-900">
                  {t('modal.title')}
                </h3>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="p-2 hover:bg-slate-100 rounded-xl transition-colors" 
                  aria-label={t('modal.close')}
                >
                  <X className="w-5 h-5 lg:w-6 lg:h-6 text-slate-500" />
                </button>
              </div>

              {/* Quick Contact Section */}
              <div className="mb-6 lg:mb-8 p-4 lg:p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl lg:rounded-2xl border border-emerald-200/60">
                <h4 className="font-bold text-emerald-800 mb-2 lg:mb-3 flex items-center gap-2">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="text-sm lg:text-base">{t('modal.immediateHelp')}</span>
                </h4>
                <p className="text-xs lg:text-sm text-emerald-700 mb-3 lg:mb-4 leading-relaxed">
                  {t('modal.callExperts')}
                </p>
                <a 
                  href="tel:+1234567890" 
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl font-semibold transition-colors text-sm lg:text-base"
                >
                  <Phone className="w-4 h-4" />
                  {t('modal.callNow')}: (123) 456-7890
                </a>
              </div>

              {/* Online Scheduling Section */}
              <div className="border-t border-slate-200 pt-6 lg:pt-8">
                <h4 className="font-bold text-slate-900 mb-4 lg:mb-6 flex items-center gap-2">
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="text-sm lg:text-base">{t('modal.scheduleOnline')}</span>
                </h4>

                {/* Date Selection */}
                <div className="mb-4 lg:mb-6">
                  <label className="block text-xs lg:text-sm font-semibold text-slate-700 mb-2 lg:mb-3">
                    {t('modal.selectDate')}
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                    {getAvailableDates().slice(0, 6).map((d) => {
                      const label = formatDate(d);
                      const isActive = selectedDate === label;
                      return (
                        <button
                          key={label}
                          type="button"
                          onClick={() => setSelectedDate(label)}
                          className={`px-2 lg:px-3 py-2 lg:py-2.5 rounded-lg lg:rounded-xl text-xs lg:text-sm font-medium border transition-all duration-200 ${
                            isActive
                              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="mb-6 lg:mb-8">
                  <label className="block text-xs lg:text-sm font-semibold text-slate-700 mb-2 lg:mb-3">
                    {t('modal.selectTime')}
                  </label>
                  <div className="grid grid-cols-3 gap-2 lg:gap-3">
                    {availableTimes.map((time) => {
                      const isActive = selectedTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-2 lg:px-3 py-2 lg:py-2.5 rounded-lg lg:rounded-xl text-xs lg:text-sm font-medium border transition-all duration-200 ${
                            isActive
                              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={handleScheduleSubmit}
                    disabled={!selectedDate || !selectedTime}
                    className="w-full sm:flex-1 bg-slate-900 text-white font-semibold py-3 lg:py-3.5 px-4 lg:px-6 rounded-lg lg:rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-200 hover:bg-slate-800 disabled:hover:bg-slate-900 text-sm lg:text-base"
                  >
                    <span>{t('modal.confirm')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDate('');
                      setSelectedTime('');
                    }}
                    className="w-full sm:w-auto px-4 lg:px-6 py-3 lg:py-3.5 rounded-lg lg:rounded-xl font-medium border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-all duration-200 text-sm lg:text-base"
                  >
                    {tCommon('reset')}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};