import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Layers, Palette } from 'lucide-react';
import Image from 'next/image';

const CarouselProductSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const products = [
    {
      id: 1,
      name: "Premium White PVC Board",
      specs: "15mm • UV Resistant",
      color: "142, 249, 252",
      image: "/1.jpg"
    },
    {
      id: 2,
      name: "Colored PVC Sheets",
      specs: "10mm • Multiple Colors",
      color: "142, 252, 204",
      image: "/2.jpg"
    },
    {
      id: 3,
      name: "Industrial Grade PVC",
      specs: "25mm • Chemical Resistant",
      color: "142, 252, 157",
      image: "/3.jpg"
    },
    {
      id: 4,
      name: "Wood Grain Finish",
      specs: "18mm • Natural Look",
      color: "215, 252, 142",
      image: "/4.jpg"
    },
    {
      id: 5,
      name: "High Density Core",
      specs: "20mm • Superior Strength",
      color: "252, 252, 142",
      image: "/5.jpg"
    },
    {
      id: 6,
      name: "Fire Retardant PVC",
      specs: "12mm • Safety Certified",
      color: "252, 208, 142",
      image: "/6.jpg"
    },
    {
      id: 7,
      name: "Textured Surface",
      specs: "16mm • Anti-Slip",
      color: "252, 142, 142",
      image: "/7.jpg"
    },
    {
      id: 8,
      name: "Decorative Panels",
      specs: "8mm • Pattern Design",
      color: "252, 142, 239",
      image: "/8.jpg"
    },
    {
      id: 9,
      name: "Marine Grade PVC",
      specs: "22mm • Waterproof",
      color: "204, 142, 252",
      image: "/a.jpg"
    },
    {
      id: 10,
      name: "Foam Core Boards",
      specs: "14mm • Lightweight",
      color: "142, 202, 252",
      image: "/b.jpg"
    }
  ];

  const galleryStyles = `
    .gallery-wrapper {
      width: 100%;
      height: 600px;
      position: relative;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .gallery-inner {
      --w: 220px;
      --h: 200px;
      --translateZ: calc((var(--w) + var(--h)) + 120px);
      --rotateX: -5deg;
      --perspective: 1600px;
      position: absolute;
      width: var(--w);
      height: var(--h);
      top: 30%;
      left: calc(50% - (var(--w) / 2) - 2.5px);
      z-index: 2;
      transform-style: preserve-3d;
      transform: perspective(var(--perspective));
      animation: rotating 30s linear infinite;
    }

    .gallery-inner.paused {
      animation-play-state: paused;
    }

    @keyframes rotating {
      from {
        transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
      }
      to {
        transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
      }
    }

    .gallery-card {
      position: absolute;
      border: none;
      border-radius: 20px;
      overflow: hidden;
      inset: 0;
      transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
        translateZ(var(--translateZ));
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    }

    .gallery-card:hover {
      border-color: rgba(var(--color-card), 1);
      transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
        translateZ(calc(var(--translateZ) + 30px));
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.25);
    }

    .gallery-img {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .product-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.4) 50%,
        rgba(0, 0, 0, 0.8) 100%
      );
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 2;
      display: none;
    }

    .gallery-card:hover .product-overlay {
      opacity: 1;
    }

    .product-info {
      text-align: center;
    }

    .product-name {
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 8px;
      line-height: 1.3;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    }

    .product-specs {
      font-size: 13px;
      color: #e2e8f0;
      font-weight: 500;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    }

    .product-actions {
      display: flex;
      justify-content: center;
    }

    .view-btn {
      background: rgba(59, 130, 246, 0.9);
      color: white;
      border: none;
      border-radius: 12px;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      backdrop-filter: blur(10px);
    }

    .view-btn:hover {
      background: rgba(37, 99, 235, 1);
      transform: scale(1.1);
    }

    /* Tablet Optimizations */
    @media (max-width: 1024px) {
      .gallery-wrapper {
        height: 550px;
      }
      
      .gallery-inner {
        --w: 200px;
        --h: 170px;
        --translateZ: calc((var(--w) + var(--h)) + 100px);
        --perspective: 1400px;
      }
      
      .product-name {
        font-size: 15px;
      }
      
      .product-specs {
        font-size: 12px;
      }
      
      .view-btn {
        width: 40px;
        height: 40px;
      }
    }

    /* Mobile Landscape */
    @media (max-width: 768px) {
      .gallery-wrapper {
        height: 450px;
        padding: 0 10px;
      }
      
      .gallery-inner {
        --w: 170px;
        --h: 170px;
        --translateZ: calc((var(--w) + var(--h)) + 70px);
        --perspective: 1200px;
        --rotateX: -8deg;
        animation-duration: 35s;
      }
      
      .gallery-card {
        border-width: 2px;
        border-radius: 16px;
      }
      
      .product-overlay {
        padding: 16px;
        opacity: 1;
        background: linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0.3) 50%,
          rgba(0, 0, 0, 0.7) 100%
        );
      }
      
      .product-name {
        font-size: 13px;
        margin-bottom: 6px;
      }
      
      .product-specs {
        font-size: 11px;
      }
      
      .view-btn {
        width: 36px;
        height: 36px;
      }
    }

    /* Mobile Portrait */
    @media (max-width: 640px) {
      .gallery-wrapper {
        height: 400px;
        padding: 0 15px;
      }
      
      .gallery-inner {
        --w: 160px;
        --h: 160px;
        --translateZ: calc((var(--w) + var(--h)) + 50px);
        --perspective: 1000px;
        --rotateX: -5deg;
        animation-duration: 40s;
        top: 25%;
      }
      
      .gallery-card {
        border-width: 2px;
        border-radius: 14px;
      }
      
      .gallery-card:hover {
        transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
          translateZ(calc(var(--translateZ) + 15px));
      }
      
      .product-overlay {
        padding: 12px;
        opacity: 1;
      }
      
      .product-name {
        font-size: 11px;
        margin-bottom: 4px;
        line-height: 1.2;
      }
      
      .product-specs {
        font-size: 9px;
      }
      
      .view-btn {
        width: 32px;
        height: 32px;
        border-radius: 10px;
      }
    }

    /* Small Mobile */
    @media (max-width: 480px) {
      .gallery-wrapper {
        height: 350px;
        padding: 0 20px;
      }
      
      .gallery-inner {
        --w: 140px;
        --h: 140px;
        --translateZ: calc((var(--w) + var(--h)) + 40px);
        --perspective: 900px;
        animation-duration: 45s;
      }
      
      .product-overlay {
        padding: 10px;
      }
      
      .product-name {
        font-size: 10px;
        margin-bottom: 3px;
      }
      
      .product-specs {
        font-size: 8px;
      }
      
      .view-btn {
        width: 28px;
        height: 28px;
      }
    }

    /* Touch Device Improvements */
    @media (hover: none) and (pointer: coarse) {
      .gallery-card:hover {
        transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
          translateZ(var(--translateZ));
      }
      
      .product-overlay {
        opacity: 1;
      }
      
      .gallery-inner {
        animation-duration: 50s;
      }
    }
  `;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: galleryStyles }} />
      <div className="max-w-7xl mx-0 sm:mx-auto px-0 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            <Layers className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Product Showcase</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-800">
            Explore Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Product Range</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of premium PVC materials, engineered for excellence across various applications.
          </p>
        </motion.div>

        {/* 3D Rotating Gallery */}
        <div className="relative">
          <motion.div 
            className="gallery-wrapper"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div 
              className={`gallery-inner ${isPaused ? 'paused' : ''}`}
              style={{ '--quantity': products.length }}
              onMouseEnter={() => !isMobile && setIsPaused(true)}
              onMouseLeave={() => !isMobile && setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="gallery-card"
                  style={{ 
                    '--index': index, 
                  }}
                >
                  <div className="gallery-img">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="object-cover"
                      style={{ borderRadius: '5px' }}
                    />
                    <div className="product-overlay">
                      <div className="product-info">
                        <h4 className="product-name">{product.name}</h4>
                        <p className="product-specs">{product.specs}</p>
                      </div>
                      <div className="product-actions">
                        <button className="view-btn">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product Features Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: "🏗️", title: "Construction Grade", desc: "Built for demanding applications" },
            { icon: "🎨", title: "Custom Colors", desc: "Wide range of color options" },
            { icon: "💧", title: "Waterproof", desc: "100% moisture resistant" },
            { icon: "🔥", title: "Fire Retardant", desc: "Safety certified materials" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="font-bold text-slate-800 mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CarouselProductSection;