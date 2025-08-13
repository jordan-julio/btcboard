'use client';
import React, { useState, useEffect } from 'react';

export const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isPageReady, setIsPageReady] = useState(false);
  const [shouldAccelerate, setShouldAccelerate] = useState(false);

  useEffect(() => {
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, 50);

    return () => clearTimeout(readyTimer);
  }, []);

  // Listen for page readiness
  useEffect(() => {
    const checkPageReady = () => {
      // Check if DOM is loaded
      if (document.readyState === 'complete') {
        setIsPageReady(true);
        return;
      }

      // Also check for key elements or resources
      const criticalElements = [
        // Add selectors for your critical page elements
        'nav', 'main', '.hero-section'
      ];

      const allElementsLoaded = criticalElements.every(selector => 
        document.querySelector(selector) !== null
      );

      if (allElementsLoaded) {
        setIsPageReady(true);
      }
    };

    // Check immediately
    checkPageReady();

    // Listen for DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', checkPageReady);
      window.addEventListener('load', checkPageReady);
    }

    // Fallback check every 100ms
    const interval = setInterval(checkPageReady, 100);

    return () => {
      document.removeEventListener('DOMContentLoaded', checkPageReady);
      window.removeEventListener('load', checkPageReady);
      clearInterval(interval);
    };
  }, []);

  // Accelerate when page is ready
  useEffect(() => {
    if (isPageReady && progress < 90) {
      setShouldAccelerate(true);
    }
  }, [isPageReady, progress]);

  useEffect(() => {
    if (!isReady) return;
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete?.();
          }, 300); // Shorter delay when complete
          return 100;
        }

        // Dynamic progress speed based on page readiness
        let increment = 1.5; // Base speed

        if (shouldAccelerate) {
          // Accelerate to 90% quickly when page is ready
          if (prev < 90) {
            increment = 2; // Much faster
          } else {
            increment = 1.5; // Normal speed for final 10%
          }
        } else if (isPageReady) {
          // Page is ready but we haven't started accelerating yet
          increment = 2.5;
        }

        return Math.min(prev + increment, 100);
      });
    }, shouldAccelerate ? 40 : 80); // Faster updates when accelerating

    return () => clearInterval(timer);
  }, [onLoadingComplete, isReady, shouldAccelerate, isPageReady]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center"
      style={{ 
        visibility: isReady ? 'visible' : 'hidden',
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      <div className="text-center space-y-8">
        {/* Title 
        <div 
          className={`transition-all duration-600 ease-out ${
            isReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-2">BTC Board</h1>
          <p className="text-slate-600">Manufacturing Premium PVC Boards</p>
        </div>
*/}
        {/* PVC Board Container */}
        <div className="relative">
          {/* Board Shadow */}
          <div className="absolute top-4 left-4 w-80 h-48 bg-slate-500/25 rounded-lg blur-lg"></div>
          {/* Main PVC Board */}
          <div 
            className={`relative w-80 h-48 bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-lg overflow-hidden transition-all duration-800 ease-out ${
              isReady ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ 
              transitionDelay: '400ms',
              boxShadow: `
                rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
              `,
              zIndex: 10
            }}
          >
            {/* Board Texture Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(148, 163, 184, 0.1) 2px,
                    rgba(148, 163, 184, 0.1) 4px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 2px,
                    rgba(148, 163, 184, 0.1) 2px,
                    rgba(148, 163, 184, 0.1) 4px
                  )
                `
              }}></div>
            </div>

            {/* Progress Fill */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/20 rounded-lg transition-all duration-300"
              style={{ 
                clipPath: `inset(0 ${100 - progress}% 0 0)`,
              }}
            />

            {/* Logo Drawing Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                width="280" 
                height="120" 
                viewBox="0 0 1024 266"
                className="overflow-visible"
              >
                <g transform="translate(0, 266) scale(0.1, -0.1)">

                  {/* Building structures */}
                  <path
                    d="M1674 2358 c-23 -24 -62 -69 -87 -101 l-47 -59 0 -479 0 -479 180 0 180 0 0 478 0 477 -85 103 c-47 56 -89 102 -93 102 -4 0 -26 -19 -48 -42z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 8 ? 0 : 1 - Math.max(0, (progress - 5) / 3)}
                    className={`transition-all duration-200 ${progress > 6 ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  <path
                    d="M1120 2025 l0 -125 185 0 185 0 0 125 0 125 -185 0 -185 0 0 -125z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 12 ? 0 : 1 - Math.max(0, (progress - 8) / 4)}
                    className={`transition-all duration-150 ${progress > 10 ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  <path
                    d="M1947 2143 c-10 -9 -8 -215 1 -231 7 -9 51 -12 188 -10 l179 3 3 123 3 122 -184 0 c-101 0 -187 -3 -190 -7z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 16 ? 0 : 1 - Math.max(0, (progress - 12) / 4)}
                    className={`transition-all duration-150 ${progress > 14 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M1027 1844 c-4 -4 -7 -142 -7 -306 l0 -298 235 0 236 0 -3 143 -3 142 -37 3 c-37 3 -38 4 -38 43 0 39 0 39 40 39 l41 0 -3 118 -3 117 -226 3 c-124 1 -228 -1 -232 -4z m303 -154 l0 -50 -85 0 -85 0 0 50 0 50 85 0 85 0 0 -50z m0 -255 l0 -55 -85 0 -85 0 0 55 0 55 85 0 85 0 0 -55z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 20 ? 0 : 1 - Math.max(0, (progress - 16) / 4)}
                    className={`transition-all duration-150 ${progress > 18 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M1947 1844 c-4 -4 -7 -142 -7 -306 l0 -298 235 0 235 0 0 105 0 104 -147 3 -148 3 -3 97 -3 97 148 3 148 3 0 95 0 95 -226 3 c-124 1 -228 -1 -232 -4z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 24 ? 0 : 1 - Math.max(0, (progress - 20) / 4)}
                    className={`transition-all duration-150 ${progress > 22 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  {/* Industrial elements */}
                  <path
                    d="M750 1445 l0 -205 115 0 115 0 0 205 0 205 -115 0 -115 0 0 -205z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 28 ? 0 : 1 - Math.max(0, (progress - 24) / 4)}
                    className={`transition-all duration-150 ${progress > 26 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M2460 1445 l0 -205 115 0 115 0 0 205 0 205 -115 0 -115 0 0 -205z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 32 ? 0 : 1 - Math.max(0, (progress - 28) / 4)}
                    className={`transition-all duration-150 ${progress > 30 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  {/* Gear mechanism */}
                  <path
                    d="M933 1155 c6 -39 12 -36 -97 -55 -33 -5 -61 -11 -62 -13 -5 -5 53 -167 65 -181 10 -12 22 -10 74 14 l61 28 34 -66 c18 -36 37 -71 42 -77 7 -9 -6 -23 -45 -49 -30 -20 -55 -40 -55 -45 0 -4 34 -44 75 -89 l75 -80 49 51 49 51 33 -25 c19 -14 55 -36 81 -49 l47 -23 -45 -62 -44 -63 35 -21 c20 -12 38 -21 40 -21 3 0 30 -12 61 -26 64 -29 81 -27 90 13 3 15 12 52 20 82 13 47 18 52 37 47 12 -3 52 -6 89 -6 l67 0 3 -97 3 -98 45 -3 c46 -4 166 13 188 27 11 6 4 64 -20 172 -2 8 24 20 73 34 l76 22 49 -61 c26 -34 51 -65 55 -70 11 -13 189 109 189 130 0 5 -25 33 -55 64 l-55 56 54 53 54 54 74 -41 74 -40 57 93 c31 51 57 97 57 102 0 11 -65 37 -117 48 -48 10 -52 22 -30 93 l19 62 103 0 103 0 7 33 c4 17 9 40 11 50 5 16 -12 17 -248 17 l-254 0 -27 -85 c-28 -85 -90 -185 -145 -233 -231 -203 -562 -166 -735 81 -36 52 -76 137 -101 220 -5 15 -21 17 -147 17 l-142 0 6 -35z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 40 ? 0 : 1 - Math.max(0, (progress - 32) / 8)}
                    className={`transition-all duration-200 ${progress > 35 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  {/* BTC Text */}
                  <path
                    d="M3252 1353 l3 -318 160 -3 c267 -5 358 18 401 100 38 74 11 190 -52 224 -19 10 -34 20 -34 21 0 2 16 18 36 36 70 64 54 175 -34 229 -35 22 -48 23 -260 26 l-222 3 2 -318z m326 156 c37 -13 45 -30 26 -58 -13 -18 -25 -21 -95 -21 l-79 0 0 45 0 45 59 0 c32 0 72 -5 89 -11z m32 -222 c34 -17 39 -60 8 -81 -16 -12 -46 -16 -105 -16 l-83 0 0 55 0 55 78 0 c42 0 88 -6 102 -13z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 50 ? 0 : 1 - Math.max(0, (progress - 40) / 10)}
                    className={`transition-all duration-200 ${progress > 45 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M3960 1595 l0 -75 100 0 100 0 0 -245 0 -245 95 0 95 0 2 243 3 242 103 3 102 3 0 74 0 75 -300 0 -300 0 0 -75z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 60 ? 0 : 1 - Math.max(0, (progress - 50) / 10)}
                    className={`transition-all duration-200 ${progress > 55 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M4922 1675 c-72 -20 -106 -39 -152 -85 -62 -62 -73 -97 -74 -235 -1 -106 2 -125 22 -167 32 -65 111 -134 175 -153 86 -26 251 -15 296 19 60 46 107 115 113 166 3 18 -7 25 -71 46 -40 13 -79 24 -86 24 -6 0 -19 -18 -28 -40 -40 -102 -184 -105 -217 -4 -15 44 -18 134 -7 184 4 19 19 49 34 65 23 26 33 30 79 30 42 0 58 -5 78 -24 14 -14 26 -30 26 -38 0 -7 8 -13 18 -13 37 0 182 33 182 42 0 19 -41 87 -70 116 -63 64 -216 96 -318 67z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 70 ? 0 : 1 - Math.max(0, (progress - 60) / 10)}
                    className={`transition-all duration-200 ${progress > 65 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  {/* BOARD Text */}
                  <path
                    d="M5802 1353 l3 -318 170 -3 c94 -1 200 2 237 9 118 19 171 75 171 178 0 69 -22 112 -70 138 l-34 18 24 20 c81 66 72 185 -16 243 -40 27 -41 27 -264 30 l-223 3 2 -318z m328 155 c40 -15 49 -37 24 -62 -11 -12 -36 -16 -95 -16 l-79 0 0 38 c0 21 3 42 6 45 10 9 115 5 144 -5z m30 -221 c34 -17 39 -60 8 -81 -16 -12 -46 -16 -105 -16 l-83 0 0 55 0 55 78 0 c42 0 88 -6 102 -13z"
                    fill="#000000"
                    stroke="#0f766e"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 78 ? 0 : 1 - Math.max(0, (progress - 70) / 8)}
                    className={`transition-all duration-150 ${progress > 72 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M6772 1675 c-76 -21 -104 -38 -153 -93 -59 -66 -79 -125 -79 -237 0 -78 4 -98 28 -150 57 -118 133 -166 277 -173 75 -3 100 0 149 18 74 28 128 77 163 147 24 50 27 66 26 162 -1 131 -17 179 -81 244 -78 80 -216 114 -330 82z m171 -176 c36 -33 47 -69 46 -147 0 -88 -16 -131 -58 -159 -40 -27 -78 -29 -124 -7 -54 26 -67 58 -67 164 0 102 13 140 58 165 39 22 113 14 145 -16z"
                    fill="#000000"
                    stroke="#0f766e"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 85 ? 0 : 1 - Math.max(0, (progress - 78) / 7)}
                    className={`transition-all duration-150 ${progress > 80 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M7471 1493 c-35 -98 -70 -191 -77 -208 -36 -89 -90 -245 -86 -250 3 -3 49 -5 103 -5 l98 0 17 55 18 55 107 0 108 0 11 -42 c6 -24 13 -49 15 -55 3 -9 33 -13 105 -13 l102 0 -7 33 c-4 17 -13 43 -20 57 -7 14 -18 43 -25 65 -7 22 -18 54 -25 70 -20 47 -95 252 -95 260 0 4 -7 21 -15 38 -8 18 -21 50 -28 72 l-14 40 -114 3 -114 2 -64 -177z m212 -100 c15 -49 27 -91 27 -95 0 -11 -108 -10 -114 1 -3 5 1 28 8 52 8 24 19 63 26 87 7 23 16 42 19 42 4 0 19 -39 34 -87z"
                    fill="#000000"
                    stroke="#0f766e"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 91 ? 0 : 1 - Math.max(0, (progress - 85) / 6)}
                    className={`transition-all duration-150 ${progress > 87 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M8132 1353 l3 -318 88 -3 87 -3 0 121 0 120 33 0 c17 0 39 -6 48 -13 13 -10 67 -92 136 -204 13 -22 20 -23 118 -23 58 0 105 4 105 9 0 4 -11 25 -25 45 -14 20 -25 39 -25 42 0 17 -105 157 -122 163 -19 7 -16 10 26 30 146 71 123 304 -34 340 -25 6 -134 11 -243 11 l-197 0 2 -317z m331 156 c35 -9 37 -12 37 -48 0 -48 -7 -51 -111 -51 l-79 0 0 55 0 55 58 0 c31 0 74 -5 95 -11z"
                    fill="#000000"
                    stroke="#0f766e"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 96 ? 0 : 1 - Math.max(0, (progress - 91) / 5)}
                    className={`transition-all duration-150 ${progress > 93 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M8892 1353 l3 -318 145 -3 c184 -4 267 9 323 52 66 50 94 100 106 189 21 151 -21 290 -104 346 -64 44 -108 51 -299 51 l-176 0 2 -317z m338 139 c32 -24 49 -72 49 -142 2 -122 -31 -160 -138 -160 l-61 0 0 166 0 167 63 -7 c35 -3 73 -14 87 -24z"
                    fill="#000000"
                    stroke="#0f766e"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 100 ? 0 : 1 - Math.max(0, (progress - 96) / 4)}
                    className={`transition-all duration-150 ${progress > 98 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  {/* BTC Text */}
                  <path
                    d="M3252 1353 l3 -318 160 -3 c267 -5 358 18 401 100 38 74 11 190 -52 224 -19 10 -34 20 -34 21 0 2 16 18 36 36 70 64 54 175 -34 229 -35 22 -48 23 -260 26 l-222 3 2 -318z m326 156 c37 -13 45 -30 26 -58 -13 -18 -25 -21 -95 -21 l-79 0 0 45 0 45 59 0 c32 0 72 -5 89 -11z m32 -222 c34 -17 39 -60 8 -81 -16 -12 -46 -16 -105 -16 l-83 0 0 55 0 55 78 0 c42 0 88 -6 102 -13z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 50 ? 0 : 1 - Math.max(0, (progress - 40) / 10)}
                    className={`transition-all duration-600 ${progress > 45 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M3960 1595 l0 -75 100 0 100 0 0 -245 0 -245 95 0 95 0 2 243 3 242 103 3 102 3 0 74 0 75 -300 0 -300 0 0 -75z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 60 ? 0 : 1 - Math.max(0, (progress - 50) / 10)}
                    className={`transition-all duration-600 ${progress > 55 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M4922 1675 c-72 -20 -106 -39 -152 -85 -62 -62 -73 -97 -74 -235 -1 -106 2 -125 22 -167 32 -65 111 -134 175 -153 86 -26 251 -15 296 19 60 46 107 115 113 166 3 18 -7 25 -71 46 -40 13 -79 24 -86 24 -6 0 -19 -18 -28 -40 -40 -102 -184 -105 -217 -4 -15 44 -18 134 -7 184 4 19 19 49 34 65 23 26 33 30 79 30 42 0 58 -5 78 -24 14 -14 26 -30 26 -38 0 -7 8 -13 18 -13 37 0 182 33 182 42 0 19 -41 87 -70 116 -63 64 -216 96 -318 67z"
                    fill="#000000"
                    stroke="#1e40af"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 70 ? 0 : 1 - Math.max(0, (progress - 60) / 10)}
                    className={`transition-all duration-600 ${progress > 65 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  {/* BOARD Text */}
                  <path
                    d="M5802 1353 l3 -318 170 -3 c94 -1 200 2 237 9 118 19 171 75 171 178 0 69 -22 112 -70 138 l-34 18 24 20 c81 66 72 185 -16 243 -40 27 -41 27 -264 30 l-223 3 2 -318z m328 155 c40 -15 49 -37 24 -62 -11 -12 -36 -16 -95 -16 l-79 0 0 38 c0 21 3 42 6 45 10 9 115 5 144 -5z m30 -221 c34 -17 39 -60 8 -81 -16 -12 -46 -16 -105 -16 l-83 0 0 55 0 55 78 0 c42 0 88 -6 102 -13z"
                    fill="#000000"
                    stroke="#0f766e"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 78 ? 0 : 1 - Math.max(0, (progress - 70) / 8)}
                    className={`transition-all duration-500 ${progress > 72 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M6772 1675 c-76 -21 -104 -38 -153 -93 -59 -66 -79 -125 -79 -237 0 -78 4 -98 28 -150 57 -118 133 -166 277 -173 75 -3 100 0 149 18 74 28 128 77 163 147 24 50 27 66 26 162 -1 131 -17 179 -81 244 -78 80 -216 114 -330 82z m171 -176 c36 -33 47 -69 46 -147 0 -88 -16 -131 -58 -159 -40 -27 -78 -29 -124 -7 -54 26 -67 58 -67 164 0 102 13 140 58 165 39 22 113 14 145 -16z"
                    fill="#000000"
                    stroke="#0f766e"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 85 ? 0 : 1 - Math.max(0, (progress - 78) / 7)}
                    className={`transition-all duration-400 ${progress > 80 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M7471 1493 c-35 -98 -70 -191 -77 -208 -36 -89 -90 -245 -86 -250 3 -3 49 -5 103 -5 l98 0 17 55 18 55 107 0 108 0 11 -42 c6 -24 13 -49 15 -55 3 -9 33 -13 105 -13 l102 0 -7 33 c-4 17 -13 43 -20 57 -7 14 -18 43 -25 65 -7 22 -18 54 -25 70 -20 47 -95 252 -95 260 0 4 -7 21 -15 38 -8 18 -21 50 -28 72 l-14 40 -114 3 -114 2 -64 -177z m212 -100 c15 -49 27 -91 27 -95 0 -11 -108 -10 -114 1 -3 5 1 28 8 52 8 24 19 63 26 87 7 23 16 42 19 42 4 0 19 -39 34 -87z"
                    fill="#000000"
                    stroke="#0f766e"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 91 ? 0 : 1 - Math.max(0, (progress - 85) / 6)}
                    className={`transition-all duration-400 ${progress > 87 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M8132 1353 l3 -318 88 -3 87 -3 0 121 0 120 33 0 c17 0 39 -6 48 -13 13 -10 67 -92 136 -204 13 -22 20 -23 118 -23 58 0 105 4 105 9 0 4 -11 25 -25 45 -14 20 -25 39 -25 42 0 17 -105 157 -122 163 -19 7 -16 10 26 30 146 71 123 304 -34 340 -25 6 -134 11 -243 11 l-197 0 2 -317z m331 156 c35 -9 37 -12 37 -48 0 -48 -7 -51 -111 -51 l-79 0 0 55 0 55 58 0 c31 0 74 -5 95 -11z"
                    fill="#000000"
                    stroke="#0f766e"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 96 ? 0 : 1 - Math.max(0, (progress - 91) / 5)}
                    className={`transition-all duration-400 ${progress > 93 ? 'opacity-100' : 'opacity-0'}`}
                  />

                  <path
                    d="M8892 1353 l3 -318 145 -3 c184 -4 267 9 323 52 66 50 94 100 106 189 21 151 -21 290 -104 346 -64 44 -108 51 -299 51 l-176 0 2 -317z m338 139 c32 -24 49 -72 49 -142 2 -122 -31 -160 -138 -160 l-61 0 0 166 0 167 63 -7 c35 -3 73 -14 87 -24z"
                    fill="#000000"
                    stroke="#0f766e"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={progress > 100 ? 0 : 1 - Math.max(0, (progress - 96) / 4)}
                    className={`transition-all duration-400 ${progress > 98 ? 'opacity-100' : 'opacity-0'}`}
                  /> -80 49 51 49 51 33 -25 
                </g>
              </svg> 

            {/* Manufacturing Laser Effect */}
            {progress > 0 && progress < 100 && (
              <div
                className="absolute top-0 w-1 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-80 animate-pulse"
                style={{ 
                  left: `${(progress / 100) * 320}px`,
                  filter: 'blur(1px)',
                  boxShadow: '0 0 10px #ef4444'
                }}
              />
            )}

            {/* Board Edge Highlights for realistic thickness */}
            <div className="absolute inset-0 rounded-lg border0 pointer-events-none"></div>
            
            {/* Top Surface Highlight */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/60 to-transparent rounded-t-lg"></div>
            
            {/* Left Surface Highlight */}
            <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-white/50 to-transparent rounded-l-lg"></div>
            
            {/* Subtle surface texture for realism */}
            <div className="absolute inset-2 rounded-md bg-gradient-to-br from-transparent via-white/10 to-slate-100/20"></div>
          </div>
        </div>

        {/* Progress Info */}
        <div 
          className={`mt-4 space-y-3 transition-all duration-600 ease-out ${
            isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="text-slate-700 font-medium">
            {progress < 20 && "Preparing PVC material..."}
            {progress >= 20 && progress < 50 && "Etching building structure..."}
            {progress >= 50 && progress < 75 && "Drawing BTC lettering..."}
            {progress >= 75 && progress < 95 && "Adding BOARD text..."}
            {progress >= 95 && "BTC Board manufacturing complete!"}
          </div>
          
          {/* Progress Percentage */}
          <div className="text-2xl font-bold text-blue-600">
            {Math.floor(progress)}%
          </div>

          {/* Manufacturing Status Bar */}
          <div className="w-80 h-2 bg-slate-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full relative transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_ease-in-out_infinite]" />
            </div>
          </div>

          {/* Company Info */}
          <div className="text-xs text-slate-500 mt-4">
            Professional PVC Board Manufacturing
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  </div>
);
}

export default Loader;