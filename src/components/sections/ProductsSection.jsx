'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ArrowRight, Home, Building, Briefcase, Droplets, Calendar, X, Phone } from 'lucide-react';
import Image from 'next/image';

export const ProductsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() + 1); // Start from tomorrow
    
    while (dates.length < 10) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude weekends
        dates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const availableTimes = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const handleScheduleSubmit = () => {
    if (selectedDate && selectedTime) {
      // Here you would typically send the data to your backend
      alert(`Consultation scheduled for ${selectedDate} at ${selectedTime}`);
      setIsModalOpen(false);
      setSelectedDate('');
      setSelectedTime('');
    }
  };

  const products = [
    {
      name: "Bathroom & Kitchen Applications",
      tagline: "Water-Resistant PVC Solutions",
      specs: "3-25mm thickness • 100% Waterproof • Easy to Clean",
      image: "/1.jpg", // Replace with your bathroom vanity image
      realImage: "Image 1", // This represents your bathroom vanity image
      features: ["Moisture resistant core", "Smooth hygienic surface", "Easy fabrication & installation"],
      applications: ["Bathroom vanities", "Kitchen cabinets", "Wet area paneling"],
      icon: <Droplets className="w-6 h-6" />,
      bgColor: "from-blue-50 to-cyan-50",
      accentColor: "blue"
    },
    {
      name: "Office & Commercial Interiors",
      tagline: "Professional Grade Interior Solutions",
      specs: "Multiple finishes • 2-20mm • Fire Retardant",
      image: "/3.jpg", // Replace with your office space image
      realImage: "Image 2", // This represents your office interior image
      features: ["Seamless panel joints", "Durable finish coating", "Sound dampening properties"],
      applications: ["Office partitions", "Wall cladding", "Reception desks"],
      icon: <Briefcase className="w-6 h-6" />,
      bgColor: "from-slate-50 to-gray-50",
      accentColor: "blue"
    },
    {
      name: "Architectural & Decorative",
      tagline: "Premium Finishing Solutions",
      specs: "Wood grain textures • 5-50mm • UV Stable",
      image: "/7.jpg", // Replace with your door/architectural image
      realImage: "Image 3 & 4", // This represents your door and architectural images
      features: ["Natural wood appearance", "Dimensional stability", "Custom pattern options"],
      applications: ["Door panels", "Wall features", "Architectural accents"],
      icon: <Home className="w-6 h-6" />,
      bgColor: "from-amber-50 to-orange-50",
      accentColor: "blue"
    }
  ];

  return (
    <section id="products" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Building className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Real-World Applications</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-800">
            See Our PVC Solutions 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> In Action</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From luxury bathrooms to professional offices, discover how our premium PVC materials transform spaces with durability, style, and precision engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${product.bgColor} rounded-2xl sm:rounded-3xl overflow-hidden border border-white/60 shadow-lg hover:shadow-xl group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <motion.div
                  className="w-full h-full bg-slate-200 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Placeholder for actual images */}
                  <div className="text-center p-6">
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-${product.accentColor}-100 flex items-center justify-center`}>
                      {product.icon}
                    </div>
                    <p className="text-sm text-slate-600 font-medium">{product.realImage}</p>
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-2xl group-hover:scale-105 transition-transform duration-300"
                      placeholder="blur"
                      blurDataURL={product.image} // Use a low-quality image placeholder
                      quality={80}
                    />
                  </div>
                </motion.div>
                
                {/* Quality badge */}
                <div className={`absolute top-4 right-4 bg-${product.accentColor}-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg`}>
                  Premium Grade
                </div>
                
                {/* Application count badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <span className="text-xs font-semibold text-slate-700">{product.applications.length}+ Applications</span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-5 sm:p-6">
                <div className="mb-4">
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 text-slate-800 group-hover:text-${product.accentColor}-600 transition-colors`}>
                    {product.name}
                  </h3>
                  <p className="text-slate-600 mb-2 text-sm font-medium">{product.tagline}</p>
                  <p className="text-xs text-slate-500 font-medium bg-white/50 rounded-lg px-3 py-1.5 inline-block">
                    {product.specs}
                  </p>
                </div>
                
                {/* Key Features */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-bold text-slate-700 mb-2">Key Features:</h4>
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-700 mb-2">Perfect For:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app, idx) => (
                      <span 
                        key={idx} 
                        className={`text-xs px-2.5 py-1 bg-${product.accentColor}-100 text-${product.accentColor}-700 rounded-full font-medium`}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <motion.button 
                    className={`flex-1 bg-${product.accentColor}-600 hover:bg-${product.accentColor}-700 text-white py-2.5 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 group text-sm`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button 
                    className="flex-1 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 py-2.5 px-4 rounded-xl font-semibold bg-white hover:bg-slate-50 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Ready to Transform Your Space?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact our experts to discuss your specific requirements and get a customized solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mx-auto">
              <motion.button 
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
              >
                <Calendar className="w-4 h-4" />
                Schedule Consultation
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-xl font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Catalog
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
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
              className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">Schedule Consultation</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              {/* Quick Call Option */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Need Immediate Assistance?
                </h4>
                <p className="text-sm text-green-700 mb-3">
                  Call our experts now for instant consultation
                </p>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Now: (123) 456-7890
                </a>
              </div>

              {/* Online Scheduling */}
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule Online Consultation
                </h4>

                {/* Date Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Select Date
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {getAvailableDates().slice(0, 6).map((date, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(formatDate(date))}
                        className={`p-2 text-sm rounded-lg border transition-all ${
                          selectedDate === formatDate(date)
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400'
                        }`}
                      >
                        {formatDate(date)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Select Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-sm rounded-lg border transition-all ${
                          selectedTime === time
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleScheduleSubmit}
                    disabled={!selectedDate || !selectedTime}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedDate && selectedTime
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    Schedule Meeting
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