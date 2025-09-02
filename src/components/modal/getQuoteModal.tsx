import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Building2, Calculator, FileText, Mail, MapPin, MessageCircle, Phone, User, X } from 'lucide-react';
import { useTranslations } from 'next-intl';


export const GetQuoteModal = ({ isQuoteModalOpen, setIsQuoteModalOpen }) => {
    const tQuote = useTranslations('quote');
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
        tQuote('projectTypes.bathroom'),
        tQuote('projectTypes.office'),
        tQuote('projectTypes.commercial'),
        tQuote('projectTypes.residential'),
        tQuote('projectTypes.industrial'),
        tQuote('projectTypes.custom')
    ];

    const handleInputChange = (field, value) => {
        setQuoteForm(prev => ({ ...prev, [field]: value }));
    };

    const openWhatsApp = () => {
        // Build the message with proper translations
        const greeting = tQuote('whatsapp.greeting');
        const projectLabel = tQuote('whatsapp.project');
        const quantityLabel = tQuote('whatsapp.quantity');
        const locationLabel = tQuote('whatsapp.location');
        const notSpecified = tQuote('whatsapp.notSpecified');
        const contactMessage = tQuote('whatsapp.contact');
        
        const message = `${greeting}

        ${projectLabel}: ${quoteForm.projectType || notSpecified}
        ${quantityLabel}: ${quoteForm.quantity || notSpecified}
        ${locationLabel}: ${quoteForm.location || notSpecified}

        ${contactMessage}
        `;
        const whatsappUrl = `https://wa.me/+62811307418?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        };

        const callForQuote = () => {
        window.location.href = 'tel:+62811307418';
        };

    const emailQuote = () => {
        const subject = tQuote('email.subject');
        const greeting = tQuote('email.greeting');
        const request = tQuote('email.request');
        const nameLabel = tQuote('form.fullName');
        const companyLabel = tQuote('form.company');
        const projectTypeLabel = tQuote('form.projectType');
        const quantityLabel = tQuote('form.quantity');
        const specificationsLabel = tQuote('form.specifications');
        const locationLabel = tQuote('form.location');
        const contactMessage = tQuote('email.contact');
        const regards = tQuote('email.regards');
        
        const body = `
        ${greeting}
        ${request}

        ${nameLabel}: ${quoteForm.name}
        ${companyLabel}: ${quoteForm.company}
        ${projectTypeLabel}: ${quoteForm.projectType}
        ${quantityLabel}: ${quoteForm.quantity}
        ${specificationsLabel}: ${quoteForm.specifications}
        ${locationLabel}: ${quoteForm.location}

        ${contactMessage}

        ${regards}
        ${quoteForm.name}
        `;
            
        window.location.href = `mailto:teknindocemerlang@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
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
                    {tQuote('title')}
                    </h3>
                    <p className="text-slate-600 mt-1">{tQuote('subtitle')}</p>
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
                    <span className="hidden sm:inline">{tQuote('callNow')}</span>
                </motion.button>
                
                <motion.button
                    onClick={openWhatsApp}
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">{tQuote('whatsappNow')}</span>
                </motion.button>
                
                <motion.button
                    onClick={emailQuote}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">{tQuote('emailNow')}</span>
                </motion.button>
                </div>

                <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px bg-slate-300 flex-1"></div>
                    <span className="text-sm text-slate-500 font-medium">{tQuote('form.orFillForm')}</span>
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
                        {tQuote('form.fullName')}
                    </label>
                    <input
                        type="text"
                        value={quoteForm.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder={tQuote('form.placeholders.name')}
                    />
                    </div>
                    
                    <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Building2 className="w-4 h-4 inline mr-1" />
                        {tQuote('form.company')}
                    </label>
                    <input
                        type="text"
                        value={quoteForm.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder={tQuote('form.placeholders.company')}
                    />
                    </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        {tQuote('form.email')}
                    </label>
                    <input
                        type="email"
                        value={quoteForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder={tQuote('form.placeholders.email')}
                    />
                    </div>
                    
                    <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        {tQuote('form.phone')}
                    </label>
                    <input
                        type="tel"
                        value={quoteForm.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder={tQuote('form.placeholders.phone')}
                    />
                    </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        {tQuote('form.projectType')}
                    </label>
                    <select
                        value={quoteForm.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                        <option value="">{tQuote('form.placeholders.selectProject')}</option>
                        {projectTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                    </div>
                    
                    <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        {tQuote('form.quantity')}
                    </label>
                    <input
                        type="text"
                        value={quoteForm.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder={tQuote('form.placeholders.quantity')}
                    />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {tQuote('form.location')}
                    </label>
                    <input
                    type="text"
                    value={quoteForm.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder={tQuote('form.placeholders.location')}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-1" />
                    {tQuote('form.specifications')}
                    </label>
                    <textarea
                    value={quoteForm.specifications}
                    onChange={(e) => handleInputChange('specifications', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder={tQuote('form.placeholders.specifications')}
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
                    {tQuote('submit.whatsapp')}
                    </motion.button>
                    
                    <motion.button
                    onClick={emailQuote}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    >
                    <Mail className="w-4 h-4" />
                    {tQuote('submit.email')}
                    </motion.button>
                </div>

                <div className="text-center text-sm text-slate-500 pt-2">
                    {tQuote('submit.response')}
                </div>
                </div>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    )
}