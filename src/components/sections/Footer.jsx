'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations();
  const solutionLinks = t.raw('footer.solutionLinks');
  const resourceLinks = t.raw('footer.resourceLinks');
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Brand lockup: responsive, never distorted */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-6 w-full">
                <div className="relative h-10 w-40 md:h-12 md:w-48">
                  <Image
                    src="/logo.svg"
                    alt="BTC Board logo"
                    fill
                    className="w-auto object-contain [filter:brightness(0)_invert(1)]" // ← makes black → white
                    priority
                    sizes="(min-width:1024px) 192px, 160px"
                  />
                </div>
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed text-base max-w-md">
                {t('footer.description')}
              </p>

              {/* Socials */}
              <div className="flex space-x-4">
                <motion.a href="#" className="group relative w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-pink-400/60" whileHover={{ scale: 1.06 }} aria-label={t('footer.social.instagram')}>
                  <Instagram className="w-6 h-6 text-white" />
                  <span className="sr-only">{t('footer.social.instagram')}</span>
                </motion.a>
                <motion.a href="#" className="group relative w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-slate-300/60" whileHover={{ scale: 1.06 }} aria-label={t('footer.social.x')}>
                  {/* X icon */}
                  <svg role="img" className="w-6 h-6 text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                  <span className="sr-only">{t('footer.social.x')}</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Solutions & Resources */}
            <motion.div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              {/*<div>
                <h4 className="text-xl font-semibold mb-6 text-white flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  {t('footer.columns.solutions')}
                </h4>
                <ul className="space-y-3">
                  {solutionLinks.map((label) => (
                    <li key={label}>
                      <motion.a href="#" className="group flex items-center text-slate-400 hover:text-white transition" whileHover={{ x: 4 }}>
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm underline-offset-4 group-hover:underline">{label}</span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>*/}

              <div>
                <h4 className="text-xl font-semibold mb-6 text-white flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  {t('footer.columns.resources')}
                </h4>
                <ul className="space-y-3">
                  {resourceLinks.map((label) => (
                    <li key={label}>
                      <motion.a href="#" className="group flex items-center text-slate-400 hover:text-white transition" whileHover={{ x: 4 }}>
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm underline-offset-4 group-hover:underline">{label}</span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
              <h4 className="text-xl font-semibold mb-6 text-white flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                {t('footer.columns.contact')}
              </h4>

              <div className="space-y-5">
                <motion.a href={`tel:${t('footer.contact.phoneValue')}`} className="group flex items-start gap-4 p-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition border border-slate-700/60 hover:border-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60" whileHover={{ scale: 1.02 }}>
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg grid place-items-center shrink-0"><Phone className="w-5 h-5 text-blue-400" /></div>
                  <div>
                    <div className="text-white text-sm font-medium">{t('footer.contact.phoneLabel')}</div>
                    <div className="text-slate-300 text-sm group-hover:text-blue-300 transition-colors">{t('footer.contact.phoneValue')}</div>
                  </div>
                </motion.a>

                <motion.a href={`mailto:${t('footer.contact.emailValue')}`} className="group flex items-start gap-4 p-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition border border-slate-700/60 hover:border-green-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/60" whileHover={{ scale: 1.02 }}>
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg grid place-items-center shrink-0"><Mail className="w-5 h-5 text-green-400" /></div>
                  <div>
                    <div className="text-white text-sm font-medium">{t('footer.contact.emailLabel')}</div>
                    <div className="text-slate-300 text-sm group-hover:text-green-300 transition-colors">{t('footer.contact.emailValue')}</div>
                  </div>
                </motion.a>

                <div className="group flex items-start gap-4 p-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition border border-slate-700/60 hover:border-yellow-500/50">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg grid place-items-center shrink-0"><MapPin className="w-5 h-5 text-yellow-400" /></div>
                  <div>
                    <div className="text-white text-sm font-medium">{t('footer.contact.addressLabel')}</div>
                    <div className="text-slate-300 text-sm">
                      {t('footer.contact.addressLine1')}<br />
                      {t('footer.contact.addressLine2')}<br />
                      {t('footer.contact.addressLine3')}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <motion.div className="border-t border-slate-700/60 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
            <p className="text-slate-400 text-sm text-center md:text-left">
              {t('footer.legal.copyright', { year })}
            </p>
            <div className="flex flex-wrap gap-6">
              {[{ k: 'privacy' }, { k: 'terms' }, { k: 'quality' }].map(({ k }) => (
                <motion.a key={k} href="#" className="text-slate-400 hover:text-white text-sm transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded" whileHover={{ y: -2 }}>
                  {t(`footer.legal.${k}`)}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};