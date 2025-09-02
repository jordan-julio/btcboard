'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Mail, FileText, Calculator, User, Building2, MapPin } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageSwitcher from '../LanguageSwitcher';
import { useRouter } from 'next/navigation';
import { GetQuoteModal } from '../modal/getQuoteModal';

export const Navigation = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('navigation');
  const tQuote = useTranslations('quote');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const navigationItems = [
    { key: 'home', href: '/'},
    { key: 'aboutus', href: '/about' },
    { key: 'products', href: '/products' },
    /**{ key: 'innovation', href: '/innovation' }**/
  ];

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
              onClick={() => {
                router.push('/')
              }}
            >
              <Image src={"/logo.png"} alt="Logo" width={150} height={50} className="h-10" />
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className="relative text-slate-600 hover:text-slate-900 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {t(item.key)}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              
              {/* Language Switcher */}
              <LanguageSwitcher />
              
              <motion.button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsQuoteModalOpen(true)}
              >
                <Calculator className="w-4 h-4" />
                {t('getQuote')}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
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
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    className="block text-xl font-medium text-slate-800 hover:text-blue-600 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </motion.a>
                ))}
                

                <LanguageSwitcher />                
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
                  {t('getQuote')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote Request Modal */}
      <GetQuoteModal isQuoteModalOpen={isQuoteModalOpen} setIsQuoteModalOpen={setIsQuoteModalOpen} />
    </>
  );
};