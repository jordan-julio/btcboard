'use client';
import React, { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Navigation } from '@/components/sections/Navigation';
import Loader from '@/components/utility/Loader';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import CarouselProductSection from '@/components/sections/CarouselProductSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudies';
import { InnovationSection } from '@/components/sections/InnovationSection';

import { Footer } from '@/components/sections/Footer';
import CTASection from '@/components/sections/CTASection';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  const products = [
    {
      id: 1,
      name: (t.raw('productsHomePage.0.name')),
      specs: (t.raw('productsHomePage.0.specs')),
      color: (t.raw('productsHomePage.0.color')),
      image: (t.raw('productsHomePage.0.image'))
    },
    {
      id: 2,
      name: (t('productsHomePage.1.name')),
      specs: (t.raw('productsHomePage.1.specs')),
      color: (t.raw('productsHomePage.1.color')),
      image: (t.raw('productsHomePage.1.image'))
    },
    {
      id: 3,
      name: (t.raw('productsHomePage.2.name')),
      specs: (t.raw('productsHomePage.2.specs')),
      color: (t.raw('productsHomePage.2.color')),
      image: (t.raw('productsHomePage.2.image'))
    },
    {
      id: 4,
      name: (t.raw('productsHomePage.3.name')),
      specs: (t.raw('productsHomePage.3.specs')),
      color: (t.raw('productsHomePage.3.color')),
      image: (t.raw('productsHomePage.3.image'))
    },
    {
      id: 5,
      name: (t.raw('productsHomePage.4.name')),
      specs: (t.raw('productsHomePage.4.specs')),
      color: (t.raw('productsHomePage.4.color')),
      image: (t.raw('productsHomePage.4.image'))
    },
    {
      id: 6,
      name: (t.raw('productsHomePage.5.name')),
      specs: (t.raw('productsHomePage.5.specs')),
      color: (t.raw('productsHomePage.5.color')),
      image: (t.raw('productsHomePage.5.image'))
    },
    {
      id: 7,
      name: (t.raw('productsHomePage.6.name')),
      specs: (t.raw('productsHomePage.6.specs')),
      color: (t.raw('productsHomePage.6.color')),
      image: (t.raw('productsHomePage.6.image'))
    },
    {
      id: 8,
      name: (t.raw('productsHomePage.7.name')),
      specs: (t.raw('productsHomePage.7.specs')),
      color: (t.raw('productsHomePage.7.color')),
      image: (t.raw('productsHomePage.7.image'))
    },
    {
      id: 9,
      name: (t.raw('productsHomePage.8.name')),
      specs: (t.raw('productsHomePage.8.specs')),
      color: (t.raw('productsHomePage.8.color')),
      image: (t.raw('productsHomePage.8.image'))
    },
    {
      id: 10,
      name: (t.raw('productsHomePage.9.name')),
      specs: (t.raw('productsHomePage.9.specs')),
      color: (t.raw('productsHomePage.9.color')),
      image: (t.raw('productsHomePage.9.image'))
    }
  ];
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

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navigation
        scrolled={scrolled} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      <HeroSection 
        heroParallax={heroParallax} 
        heroOpacity={heroOpacity} 
      />
      <StatisticsSection />
      <ProductsSection />
      <CarouselProductSection products={products} />
      <CaseStudiesSection />
      <InnovationSection />
      {/**<CTASection />**/}
      <Footer />
    </div>
  );
}