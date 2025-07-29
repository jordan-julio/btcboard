'use client';
import React, { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Navigation } from '@/components/sections/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudies';
import { InnovationSection } from '@/components/sections/InnovationSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { Loader } from '@/components/utility/Loader';

export default function PVCBoardWebsite() {
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
      <CaseStudiesSection />
      <InnovationSection />
      <CTASection />
      <Footer />
    </div>
  );
}