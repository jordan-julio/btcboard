'use client';
import React, { useEffect, useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  X, 
  ChevronDown,
  Crown,
  TrendingUp,
  Menu,
  Package
} from 'lucide-react';
import { Footer } from '@/components/sections/Footer';
import { Navigation } from '@/components/sections/Navigation';
import { useScroll, useTransform } from 'framer-motion';
import Loader from '@/components/utility/Loader';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { GetQuoteModal } from '@/components/modal/getQuoteModal';

const BTCShowcase = () => {
  const t = useTranslations();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }


  const productShowcase = [
    // BTC Board Sheet Examples (6 items)
    {
      id: 1,
      category: '2D',
      image: '/lampiran Foto/Edit/2D/CNC 2D.webp',
      featured: false,
      trending: false
    },
    {
      id: 2,
      category: '2D',
      image: '/lampiran Foto/Edit/2D/file_00000000aa2c622f944bb7788d5bddde.webp',
      featured: false,
      trending: false
    },
    {
      id: 3,
      category: '2D',
      image: '/lampiran Foto/Edit/2D/file_00000000d46c61fdb018129b9e181e4e.webp',
      featured: false,
      trending: false
    },
    {
      id: 4,
      category: '2D',
      image: '/lampiran Foto/Edit/2D/file_00000000ee7c61fb92adf3eff0ba2a68.webp',
      featured: false,
      trending: false
    },
    {
      id: 6,
      category: '2D',
      image: '/lampiran Foto/Edit/2D/file_00000000950c6230b1273ce8e292476e.webp',
      featured: false,
      trending: false
    },
    {
      id: 7,
      category: '2D',
      image: '/lampiran Foto/Edit/2D/file_00000000424061f88b22903e54ceeb91 (1).webp',
      featured: false,
      trending: false
    },
    {
      id: 8,
      category: '2D',
      image: '/lampiran Foto/Edit/2D/file_0000000038206230ab25ff8e0b760327.webp',
      featured: false,
      trending: false
    },
    {
      id: 9,
      category: '3D',
      image: '/lampiran Foto/Edit/3D/CNC 3D.webp',
      featured: false,
      trending: false
    },
    {
      id: 10,
      category: '3D',
      image: '/lampiran Foto/Edit/3D/file_000000009e4861f98708e932c778ea3a.webp',
      featured: false,
      trending: false
    },
    {
      id: 11,
      category: '3D',
      image: '/lampiran Foto/Edit/3D/file_00000000057c61f7b155c3c82768aace.webp',
      featured: false,
      trending: false
    },
    {
      id: 12,
      category: '3D',
      image: '/lampiran Foto/Edit/3D/file_00000000921c61f5bdb3334751f44e4d.webp',
      featured: false,
      trending: false
    },
    {
      id: 13,
      category: '3D',
      image: '/lampiran Foto/Edit/3D/file_00000000424061f88b22903e54ceeb91 (1).webp',
      featured: false,
      trending: false
    },
    {
      id: 14,
      category: '3D',
      image: '/lampiran Foto/Edit/3D/IMG-20250801-WA0013.webp',
      featured: false,
      trending: false
    },
    {
      id: 15,
      category: '3D',
      image: '/lampiran Foto/Edit/3D/IMG-20250801-WA0014.webp',
      featured: false,
      trending: false
    },
    {
      id: 16,
      category: '3D',
      image: '/lampiran Foto/Edit/3D/IMG-20250804-WA0000.webp',
      featured: false,
      trending: false
    },
    {
      id: 17,
      category: '3D',
      image: '/lampiran Foto/Edit/3D/IMG-20250804-WA0001.webp',
      featured: false,
      trending: false
    },
    {
      id: 18,
      category: '3D',
      image: '/lampiran Foto/Edit/3D/IMG-20250804-WA0002.webp',
      featured: false,
      trending: false
    },
    {
      id: 19,
      category: 'Laminating',
      image: '/lampiran Foto/Edit/Laminating/DB7FF596-3BCD-4A74-96EE-8D89EA99EC47.webp',
      featured: false,
      trending: false
    },
    {
      id: 20,
      category: 'Laminating',
      image: '/lampiran Foto/Edit/Laminating/file_000000005a3061f7a309f284297a968d.webp',
      featured: false,
      trending: false
    },
    {
      id: 21,
      category: 'Laminating',
      image: '/lampiran Foto/Edit/Laminating/IMG-20250805-WA0017.webp',
      featured: false,
      trending: false
    },
    {
      id: 22,
      category: 'Laminating',
      image: '/lampiran Foto/Edit/Laminating/IMG_20231002_104209.webp',
      featured: false,
      trending: false
    },
    {
      id: 23,
      category: 'Plain Sheet',
      image: '/lampiran Foto/Edit/file_00000000cdbc61f98c08a554e0f2405a.webp',
      featured: false,
      trending: false
    },
    {
      id: 24,
      category: 'Plain Sheet',
      image: '/lampiran Foto/Edit/file_00000000f6e461f7870e257f7a13c812.webp',
      featured: false,
      trending: false
    },
    {
      id: 25,
      category: 'Plain Sheet',
      image: '/lampiran Foto/Edit/file_000000008db061f6a9aed16d9bb72203.webp',
      featured: false,
      trending: false
    },
    {
      id: 26,
      category: 'Plain Sheet',
      image: '/lampiran Foto/Edit/IMG-20250801-WA0020.webp',
      featured: false,
      trending: false
    },
    {
      id: 27,
      category: 'Plain Sheet',
      image: '/lampiran Foto/Edit/WhatsApp Image 2025-08-05 at 15.36.11.jpeg',
      featured: false,
      trending: false
    },
    {
      id: 28,
      category: 'Plain Sheet',
      image: '/lampiran Foto/Edit/WhatsApp Image 2025-08-05 at 15.43.45.jpeg',
      featured: false,
      trending: false
    },
  ];

  const getCategoryColor = (category) => {
    switch(category) {
      case '2D': return 'bg-green-700 text-white'; // Darker green for better contrast
      case '3D': return 'bg-orange-600 text-white'; // Darker orange
      case 'Laminating': return 'bg-purple-700 text-white'; // Darker purple
      case 'Plain Sheet': return 'bg-blue-700 text-white'; // Darker blue
      default: return 'bg-gray-700 text-white';
    }
  };

  const filteredShowcase = productShowcase.filter(item => {
    return item.category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const ProductCard = ({ item, index }) => {
    return (
      <div 
        className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl cursor-pointer"
        onClick={() => setSelectedImage(item)}
      >
        {/* Image Container */}
        <div className="relative w-full overflow-hidden">
          <Image
            src={item.image}
            alt={`BTC Board ${item.category}`}
            width={380}  // Max display width
            height={570} // Max display height (maintains aspect ratio)
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Chip - Top Left */}
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 ${getCategoryColor(item.category)} text-white text-xs font-semibold rounded-full`}>
              {item.category}
            </span>
          </div>
          
          {/* Status Badges - Top Right */}
          <div className="absolute top-3 right-3 flex flex-col gap-1">
            {item.featured && (
              <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                <Crown className="w-3 h-3" />
                Featured
              </span>
            )}
            {item.trending && (
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Hot
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ImageModal = () => {
    if (!selectedImage) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}
      >
        <div 
          className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={selectedImage.image}
              alt={`BTC Board ${selectedImage.category}`}
              className="w-full h-auto max-h-[70vh] object-contain bg-gray-100"
            />
            
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Category and Badges */}
            <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
              <span className={`px-3 py-1 ${getCategoryColor(selectedImage.category)} text-sm font-semibold rounded-full`}>
                {selectedImage.category}
              </span>
              {selectedImage.featured && (
                <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-bold rounded-full flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  Featured
                </span>
              )}
              {selectedImage.trending && (
                <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Trending
                </span>
              )}
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              BTC Board {selectedImage.category}
            </h2>
            <p className="text-gray-600 mb-6">
              Premium quality {selectedImage.category.toLowerCase()} board solution for architectural and design applications.
            </p>
            
            <div className="flex gap-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors">
                Request Quote
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl font-semibold transition-colors">
                Download Info
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      {/* Navigation */}
      <Navigation
        scrolled={true} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 pt-18">
        <div className="absolute inset-0 opacity-40">
          <Image
            fill
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=85"
            alt="Manufacturing facility background showcasing BTC Board production"
            className="object-cover object-center"
            priority={true}
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8A0XqoFwmjzuJdNvks7oEVBHvWjqNzLCs6FRgqGByCCOoI9jRRXGpNvY//2Q=="
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              BTC Board
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Gallery
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('Productspage.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
        </div>
          
          {filteredShowcase.length > 0 ? (
            <>
              {/* Mobile Layout - Single Column */}
              <div className="block md:hidden space-y-4">
                {filteredShowcase.map((item, index) => (
                  <ProductCard key={item.id} item={item} index={index} />
                ))}
              </div>
              
              {/* Desktop Layout - Masonry Grid */}
              <div className="hidden md:block">
                <div className="columns-2 lg:columns-3 xl:columns-4 gap-6">
                  {filteredShowcase.map((item, index) => (
                    <div key={item.id} className="break-inside-avoid mb-6">
                      <ProductCard item={item} index={index} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try a different search term</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Show All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('aboutPage.cta.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('aboutPage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2" onClick={() => {
              setIsQuoteModalOpen(true)
            }}>
              <span>{t('navigation.getQuote')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors disabled cursor-not-allowed">
              {t('products.cta.catalog')} (Belum Tersedia)
            </button>
          </div>
        </div>
      </section>

      <Footer />
      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center z-40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Scroll to top of page"
        title="Scroll to top"
        type="button"
      >
        <ChevronDown className="w-5 h-5 rotate-180" aria-hidden="true" />
      </button>
      <GetQuoteModal setIsQuoteModalOpen={setIsQuoteModalOpen} isQuoteModalOpen={isQuoteModalOpen} />
    </div>
  );
};

export default BTCShowcase;