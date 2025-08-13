'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Layers, 
  Palette,
  Shield,
  Droplets,
  Flame,
  Ruler,
  Award,
  ChevronDown,
  Filter,
  Grid,
  List,
  Search,
  ArrowRight,
  Zap,
  Star,
  Download,
  Play,
  X
} from 'lucide-react';

const ProductsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "Premium White PVC Foam Board",
      category: "standard",
      specs: "15mm • UV Resistant • Lightweight",
      description: "High-quality white PVC foam board perfect for signage, displays, and architectural applications. Features excellent printability and weather resistance.",
      applications: ["Signage", "Display Boards", "Architecture", "Exhibition"],
      thickness: "3-25mm",
      density: "0.55 g/cm³",
      features: ["UV Resistant", "Lightweight", "Easy to Cut", "Printable"],
      image: "/1.jpg",
      price: "From $24.99/sheet",
      inStock: true,
      rating: 4.9
    },
    {
      id: 2,
      name: "Colored PVC Foam Sheets",
      category: "colored",
      specs: "10mm • Multiple Colors • Fade Resistant",
      description: "Vibrant colored PVC foam sheets available in 20+ colors. Perfect for creative projects and decorative applications.",
      applications: ["Arts & Crafts", "Displays", "Decorative Panels", "Model Making"],
      thickness: "3-20mm",
      density: "0.50 g/cm³",
      features: ["20+ Colors", "Fade Resistant", "Smooth Surface", "Easy Fabrication"],
      image: "/2.jpg",
      price: "From $29.99/sheet",
      inStock: true,
      rating: 4.8
    },
    {
      id: 3,
      name: "Industrial Grade PVC Board",
      category: "industrial",
      specs: "25mm • Chemical Resistant • Heavy Duty",
      description: "Robust industrial-grade PVC board designed for harsh environments. Excellent chemical resistance and durability.",
      applications: ["Chemical Plants", "Marine", "Industrial Equipment", "Protective Panels"],
      thickness: "15-30mm",
      density: "0.65 g/cm³",
      features: ["Chemical Resistant", "High Impact", "Corrosion Proof", "FDA Approved"],
      image: "/3.jpg",
      price: "From $45.99/sheet",
      inStock: true,
      rating: 4.7
    },
    {
      id: 4,
      name: "Wood Grain Textured PVC",
      category: "textured",
      specs: "18mm • Natural Wood Look • Maintenance Free",
      description: "Realistic wood grain texture PVC boards that combine the beauty of wood with PVC's durability and low maintenance.",
      applications: ["Furniture", "Interior Design", "Cabinetry", "Wall Panels"],
      thickness: "8-25mm",
      density: "0.58 g/cm³",
      features: ["Wood Grain Texture", "Multiple Finishes", "Weather Proof", "No Maintenance"],
      image: "/4.jpg",
      price: "From $39.99/sheet",
      inStock: true,
      rating: 4.9
    },
    {
      id: 5,
      name: "High Density PVC Core",
      category: "specialty",
      specs: "20mm • Superior Strength • Rigid Construction",
      description: "High-density PVC boards offering exceptional strength and rigidity for structural applications.",
      applications: ["Structural Components", "Heavy-duty Signs", "Machine Parts", "Building Materials"],
      thickness: "10-40mm",
      density: "0.75 g/cm³",
      features: ["High Strength", "Rigid", "Precision Cut", "Load Bearing"],
      image: "/5.jpg",
      price: "From $52.99/sheet",
      inStock: false,
      rating: 4.8
    },
    {
      id: 6,
      name: "Fire Retardant PVC Board",
      category: "specialty",
      specs: "12mm • Fire Rated • Safety Certified",
      description: "Self-extinguishing PVC boards meeting strict fire safety standards. Perfect for public buildings and safety-critical applications.",
      applications: ["Public Buildings", "Transportation", "Hospitals", "Schools"],
      thickness: "5-25mm",
      density: "0.62 g/cm³",
      features: ["Fire Retardant", "Self-Extinguishing", "Low Smoke", "Safety Certified"],
      image: "/6.jpg",
      price: "From $48.99/sheet",
      inStock: true,
      rating: 4.6
    },
    {
      id: 7,
      name: "Anti-Slip Textured PVC",
      category: "textured",
      specs: "16mm • Non-Slip Surface • Safety Grade",
      description: "Specialized anti-slip textured PVC boards designed for safety flooring and walkways in wet conditions.",
      applications: ["Safety Flooring", "Walkways", "Pool Decks", "Industrial Floors"],
      thickness: "8-20mm",
      density: "0.60 g/cm³",
      features: ["Anti-Slip", "Wet Safe", "Easy Clean", "Durable"],
      image: "/7.jpg",
      price: "From $42.99/sheet",
      inStock: true,
      rating: 4.7
    },
    {
      id: 8,
      name: "Decorative Pattern Panels",
      category: "decorative",
      specs: "8mm • Unique Patterns • Designer Collection",
      description: "Elegant decorative PVC panels with sophisticated patterns for premium interior applications.",
      applications: ["Interior Design", "Wall Cladding", "Retail Displays", "Luxury Finishes"],
      thickness: "6-15mm",
      density: "0.52 g/cm³",
      features: ["Unique Patterns", "Designer Collection", "Easy Install", "Premium Finish"],
      image: "/8.jpg",
      price: "From $58.99/sheet",
      inStock: true,
      rating: 4.8
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'standard', name: 'Standard', count: products.filter(p => p.category === 'standard').length },
    { id: 'colored', name: 'Colored', count: products.filter(p => p.category === 'colored').length },
    { id: 'industrial', name: 'Industrial', count: products.filter(p => p.category === 'industrial').length },
    { id: 'textured', name: 'Textured', count: products.filter(p => p.category === 'textured').length },
    { id: 'specialty', name: 'Specialty', count: products.filter(p => p.category === 'specialty').length },
    { id: 'decorative', name: 'Decorative', count: products.filter(p => p.category === 'decorative').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 3D Carousel Component
  const Carousel3D = () => {
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
        border: 2px solid rgba(59, 130, 246, 0.3);
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
        border-color: rgba(59, 130, 246, 1);
        transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
          translateZ(calc(var(--translateZ) + 30px));
        box-shadow: 0 12px 48px rgba(59, 130, 246, 0.25);
      }

      .product-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 2;
      }

      .gallery-card:hover .product-overlay {
        opacity: 1;
      }

      @media (max-width: 768px) {
        .gallery-wrapper { height: 450px; }
        .gallery-inner {
          --w: 170px;
          --h: 170px;
          --translateZ: calc((var(--w) + var(--h)) + 70px);
          --perspective: 1200px;
          animation-duration: 35s;
        }
        .product-overlay { opacity: 1; padding: 16px; }
      }
    `;

    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: galleryStyles }} />
        <div className="gallery-wrapper">
          <div 
            className={`gallery-inner ${isPaused ? 'paused' : ''}`}
            style={{ '--quantity': Math.min(products.length, 8) }}
            onMouseEnter={() => !isMobile && setIsPaused(true)}
            onMouseLeave={() => !isMobile && setIsPaused(false)}
          >
            {products.slice(0, 8).map((product, index) => (
              <div
                key={product.id}
                className="gallery-card"
                style={{ '--index': index }}
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="product-overlay">
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-sm mb-2">{product.name}</h4>
                    <p className="text-gray-200 text-xs">{product.specs}</p>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Product Card Component
  const ProductCard = ({ product, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        whileHover={{ y: -8 }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
              product.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium">{product.rating}</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white w-full">
              <p className="text-sm font-medium mb-2">Quick Preview</p>
              <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                onClick={() => setSelectedProduct(product)}
              >
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <span className="text-blue-600 font-bold text-sm">{product.price}</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {product.features.slice(0, 3).map((feature, idx) => (
              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                {feature}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Thickness: {product.thickness}
            </span>
            <button 
              className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 transition-colors"
              onClick={() => setSelectedProduct(product)}
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  // Product Modal
  const ProductModal = () => {
    if (!selectedProduct) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedProduct(null)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/90 hover:bg-white text-gray-600 rounded-full flex items-center justify-center"
              >
                ×
              </button>
            </div>
            <div className="p-8 overflow-y-auto">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h2>
                  <p className="text-blue-600 font-semibold">{selectedProduct.specs}</p>
                </div>
                <span className="text-2xl font-bold text-blue-600">{selectedProduct.price}</span>
              </div>
              
              <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Specifications</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Thickness: {selectedProduct.thickness}</li>
                    <li>Density: {selectedProduct.density}</li>
                    <li>Stock: {selectedProduct.inStock ? 'Available' : 'Out of Stock'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Applications</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {selectedProduct.applications.map((app, idx) => (
                      <li key={idx}>• {app}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Request Quote
                </button>
                <button className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-semibold transition-colors">
                  <Download className="w-4 h-4 inline mr-2" />
                  Specs
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-blue-600 font-medium">Loading Products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
        style={{ y: heroParallax, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/hero-pattern.svg')] opacity-10"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Premium <span className="text-blue-400">PVC Foam</span> Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Discover our comprehensive range of high-quality PVC foam boards, engineered for excellence across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Products Delivered", icon: Award },
              { number: "15+", label: "Years Experience", icon: Star },
              { number: "50+", label: "Industry Applications", icon: Layers },
              { number: "99%", label: "Customer Satisfaction", icon: Shield }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Carousel Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Layers className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Featured Products</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Explore Our <span className="text-blue-600">Product Range</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interactive 3D showcase of our premium PVC foam board collection
            </p>
          </motion.div>
          
          <Carousel3D />
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                All Products
              </h2>
              <p className="text-gray-600">
                Browse our complete catalog of PVC foam products
              </p>
            </div>
            
            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Categories Filter
          <div className="flex flex-wrap gap-2 mb-8">
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
          </div>
           */}

          {/* Products Grid */}
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-8`}>
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our PVC Products?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Industry-leading quality, innovation, and performance in every board
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Premium Quality",
                description: "Rigorous testing ensures consistent, high-quality products"
              },
              {
                icon: Droplets,
                title: "Weather Resistant",
                description: "UV stable and waterproof for outdoor applications"
              },
              {
                icon: Flame,
                title: "Fire Safety",
                description: "Self-extinguishing materials meeting safety standards"
              },
              {
                icon: Zap,
                title: "Easy Processing",
                description: "Simple cutting, shaping, and fabrication"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get expert advice and custom solutions for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Download Catalog</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/90 hover:bg-white text-gray-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-8 overflow-y-auto">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h2>
                      <p className="text-blue-600 font-semibold">{selectedProduct.specs}</p>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{selectedProduct.price}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Specifications</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Thickness: {selectedProduct.thickness}</li>
                        <li>Density: {selectedProduct.density}</li>
                        <li>Stock: {selectedProduct.inStock ? 'Available' : 'Out of Stock'}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Applications</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {selectedProduct.applications.map((app, idx) => (
                          <li key={idx}>• {app}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                      Request Quote
                    </button>
                    <button className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Specs</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </motion.button>
    </div>
  );
};

export default ProductsPage;