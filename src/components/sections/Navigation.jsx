'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Mail, FileText, Calculator, User, Building2, MapPin } from 'lucide-react';
import Image from 'next/image';

export const Navigation = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    quantity: '',
    specifications: '',
    location: ''
  });

  const projectTypes = [
    'Bathroom/Kitchen Renovation',
    'Office Interior',
    'Commercial Building',
    'Residential Project',
    'Industrial Application',
    'Custom Project'
  ];

  const handleInputChange = (field, value) => {
    setQuoteForm(prev => ({ ...prev, [field]: value }));
  };

  const openWhatsApp = () => {
    const message = `Hi! I'd like to get a quote for PVC materials:\n\nProject: ${quoteForm.projectType || 'Not specified'}\nQuantity: ${quoteForm.quantity || 'Not specified'}\nLocation: ${quoteForm.location || 'Not specified'}\n\nPlease contact me for detailed discussion.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const callForQuote = () => {
    window.location.href = 'tel:+1234567890';
  };

  const emailQuote = () => {
    const subject = 'PVC Materials Quote Request';
    const body = `Dear Team,\n\nI would like to request a quote for PVC materials with the following details:\n\nName: ${quoteForm.name}\nCompany: ${quoteForm.company}\nProject Type: ${quoteForm.projectType}\nQuantity: ${quoteForm.quantity}\nSpecifications: ${quoteForm.specifications}\nLocation: ${quoteForm.location}\n\nPlease contact me at your earliest convenience.\n\nBest regards,\n${quoteForm.name}`;
    
    window.location.href = `mailto:quote@company.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-lg py-3 shadow-lg border-b border-gray-100' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <Image src={"/logo.png"} alt="Logo" width={150} height={50} className="h-10" />
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Products', 'Projects', 'Innovation'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-slate-600 hover:text-slate-900 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              <motion.button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsQuoteModalOpen(true)}
              >
                <Calculator className="w-4 h-4" />
                Get Quote
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-white p-8 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="mt-20 space-y-6">
                {['Products', 'Projects', 'Innovation', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-xl font-medium text-slate-800 hover:text-blue-600 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium mt-8 flex items-center justify-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                >
                  <Calculator className="w-4 h-4" />
                  Get Quote
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote Request Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsQuoteModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-blue-600" />
                    Get Your Quote
                  </h3>
                  <p className="text-slate-600 mt-1">Fill in your project details for accurate pricing</p>
                </div>
                <button
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              {/* Quick Contact Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <motion.button
                  onClick={callForQuote}
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Call Now</span>
                </motion.button>
                
                <motion.button
                  onClick={openWhatsApp}
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </motion.button>
                
                <motion.button
                  onClick={emailQuote}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Email</span>
                </motion.button>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px bg-slate-300 flex-1"></div>
                  <span className="text-sm text-slate-500 font-medium">OR FILL THE FORM BELOW</span>
                  <div className="h-px bg-slate-300 flex-1"></div>
                </div>
              </div>

              {/* Quote Form */}
              <div className="space-y-4">
                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={quoteForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Building2 className="w-4 h-4 inline mr-1" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={quoteForm.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Company name (optional)"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={quoteForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={quoteForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      value={quoteForm.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      value={quoteForm.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="e.g., 100 sq meters"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Project Location
                  </label>
                  <input
                    type="text"
                    value={quoteForm.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="City, State/Country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-1" />
                    Project Specifications
                  </label>
                  <textarea
                    value={quoteForm.specifications}
                    onChange={(e) => handleInputChange('specifications', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder="Please describe your requirements, preferred thickness, colors, special features, or leave blank, etc."
                  />
                </div>

                {/* Submit Options */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <motion.button
                    onClick={openWhatsApp}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </motion.button>
                  
                  <motion.button
                    onClick={emailQuote}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-4 h-4" />
                    Send via Email
                  </motion.button>
                </div>

                <div className="text-center text-sm text-slate-500 pt-2">
                  We'll respond within 24 hours with a detailed quote
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};