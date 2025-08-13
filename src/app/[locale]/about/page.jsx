'use client';
import React, { useState, useEffect } from 'react';
import { 
  Award,
  Users,
  Target,
  Heart,
  Factory,
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Lightbulb,
  Handshake,
  TrendingUp,
  Eye,
  Zap,
  Building,
  ChevronRight,
  Quote
} from 'lucide-react';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { useRouter } from 'next/navigation';

export default function AboutUsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const missionValues = [
    {
      letter: 'B',
      title: 'Breakthrough',
      description: 'Selalu berinovasi dalam menghadirkan produk PVC Board yang berkualitas dan dapat menjadi Solusi dalam hal desain dan pembangunan',
      icon: Lightbulb,
      color: 'blue'
    },
    {
      letter: 'T',
      title: 'Teamwork',
      description: 'Mempererat hubungan antar karyawan dengan cara saling menghargai dan menciptakan suasana kerja yang aman',
      icon: Users,
      color: 'emerald'
    },
    {
      letter: 'C',
      title: 'Customer Excellence',
      description: 'Selalu memberikan yang terbaik untuk pelanggan dalam hal produk dan pelayanan',
      icon: Star,
      color: 'amber'
    },
    {
      letter: 'B',
      title: 'Best Selling',
      description: 'Menjadi brand no 1 dan mendominasi pasar PVC Board dengan memberikan produk yang berkualitas dengan harga yang kompetitif',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      letter: 'O',
      title: 'Outstanding',
      description: 'Selalu menjaga performa kerja yang baik dalam inovasi produk, kualitas dan efisiensi kerja',
      icon: Award,
      color: 'rose'
    },
    {
      letter: 'A',
      title: 'Accountability',
      description: 'Menjadi brand yang dapat dipercaya dan diandalkan oleh masyarakat',
      icon: Shield,
      color: 'indigo'
    },
    {
      letter: 'R',
      title: 'Responsible',
      description: 'Bertanggung jawab dan peduli terhadap kesejahteraan Masyarakat dan lingkungan',
      icon: Heart,
      color: 'teal'
    },
    {
      letter: 'D',
      title: 'Development',
      description: 'Selalu mengembangkan inovasi produk yang relevan dengan kebutuhan pelanggan',
      icon: Building,
      color: 'orange'
    }
  ];

  const stats = [
    { label: 'Tahun Pengalaman', value: '7', suffix: '+', icon: Calendar },
    { label: 'Standar Kualitas', value: '100', suffix: '%', icon: CheckCircle },
    { label: 'Tingkat Kepuasan', value: '99', suffix: '%', icon: Star },
    // { label: 'Tim Profesional', value: '50', suffix: '+', icon: Users }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', icon: 'bg-blue-600' },
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', icon: 'bg-emerald-600' },
      amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', icon: 'bg-amber-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', icon: 'bg-purple-600' },
      rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200', icon: 'bg-rose-600' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', icon: 'bg-indigo-600' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', icon: 'bg-teal-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', icon: 'bg-orange-600' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <Navigation
              scrolled={scrolled} 
              isMenuOpen={isMenuOpen} 
              setIsMenuOpen={setIsMenuOpen} 
        />

      {/* Hero Section - Clean Typography Focused */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Content Side */}
            <div className="lg:col-span-7 max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <span onClick={() => {
                    router.push('/')
                }}>Beranda</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-blue-600 font-medium">Tentang Kami</span>
              </div>

              {/* Main Content */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                    <Factory className="w-4 h-4" />
                    Sejak 2018
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                    Tentang
                    <span className="block text-blue-600">BTC Board</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                    CV. Bagong Teknindo Cemerlang telah memproduksi PVC Board berkualitas tinggi sejak 2018, 
                    menggunakan material pilihan dan teknologi canggih untuk memberikan solusi terbaik.
                  </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center lg:text-left">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-3">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {stat.value}<span className="text-blue-600">{stat.suffix}</span>
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div className="relative">
                {/* 3D Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-gray-900/20 rounded-2xl transform rotate-3 translate-x-4 translate-y-4 blur-xl"></div>
                
                {/* Main Image Container */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                  <div className="aspect-[4/5]">
                    <img 
                      src="/lampiran Foto/1.jpg" 
                      alt="BTC Board Production Facility" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gray-900/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Perjalanan Kami
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded-full mb-8"></div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  <strong className="text-gray-900">BTC Board</strong> merupakan produk PVC Board yang diproduksi oleh 
                  <strong className="text-gray-900"> CV. Bagong Teknindo Cemerlang</strong> sejak tahun 2018.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Kami menggunakan <strong className="text-gray-900">material pilihan yang berkualitas tinggi </strong> 
                  untuk memberikan produk terbaik bagi customer kami. Selain menggunakan material pilihan, 
                  BTC Board pun diproses dengan <strong className="text-gray-900">mesin yang canggih </strong> 
                  dan dapat dibentuk sesuai dengan keinginan customer.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Teknologi Canggih</h3>
                  <p className="text-sm text-gray-600">Mesin modern untuk hasil optimal</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl mb-4">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Material Berkualitas</h3>
                  <p className="text-sm text-gray-600">Bahan pilihan terbaik</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                    <Handshake className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Komitmen Pelayanan</h3>
                  <p className="text-sm text-gray-600">Customer adalah prioritas</p>
                </div>
              </div>
            </div>
            
            {/* Side Image */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl overflow-hidden">
                  <img
                    src="/lampiran Foto/2.jpg"
                    alt="Fasilitas Produksi BTC Board"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-64">
                  <h4 className="font-semibold text-gray-900 mb-2">Fasilitas Modern</h4>
                  <p className="text-sm text-gray-600">Teknologi terdepan untuk kualitas terbaik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visi Kami</h2>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 left-8 w-1 h-full bg-blue-200"></div>
            <div className="relative bg-white rounded-2xl shadow-sm border border-gray-200 p-8 ml-16">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <blockquote className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
                Menjadi Solusi bagi Kontraktor dan Arsitek dalam hal menyediakan material PVC Board yang berkualitas.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-2xl mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Misi <span className="text-gray-900">BTC</span> <span className="text-blue-600">BOARD</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Setiap huruf dari nama <span className="font-semibold text-gray-900">BTC</span> <span className="font-semibold text-blue-600">BOARD</span> merepresentasikan nilai-nilai fundamental yang menjadi landasan dalam setiap langkah kami
            </p>

            {/* Visual Separator */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-sm">B</div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-sm">T</div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-sm">C</div>
              </div>
              <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">B</div>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">O</div>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">A</div>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">R</div>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">D</div>
              </div>
            </div>
          </div>
          
          {/* Mission Grid - Split into two groups */}
          <div className="space-y-12">
            {/* BTC Group */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                <span className="text-gray-800">BTC</span> Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {missionValues.slice(0, 3).map((mission, index) => {
                  const IconComponent = mission.icon;
                  
                  return (
                    <div key={index} className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:bg-gray-100 transition-all duration-300 group">
                      {/* Letter Badge */}
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-800 text-white text-lg font-bold rounded-xl mb-4">
                        {mission.letter}
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-gray-700" />
                          <h3 className="font-semibold text-gray-900 text-sm">{mission.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {mission.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* BOARD Group */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                <span className="text-blue-600">BOARD</span> Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {missionValues.slice(3).map((mission, index) => {
                  const IconComponent = mission.icon;
                  
                  return (
                    <div key={index} className="relative bg-blue-50 border border-blue-200 rounded-2xl p-6 hover:shadow-lg hover:bg-blue-100 transition-all duration-300 group">
                      {/* Letter Badge */}
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white text-lg font-bold rounded-xl mb-4">
                        {mission.letter}
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-blue-700" />
                          <h3 className="font-semibold text-gray-900 text-sm">{mission.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {mission.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Mari wujudkan proyek impian Anda bersama solusi PVC Board terbaik dari BTC Board
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
              <span>Mulai Konsultasi</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 bg-transparent border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300">
              Lihat Produk
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}