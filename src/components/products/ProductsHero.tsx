import React from 'react';
import { ArrowRight, Shield, Award } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ProductsHero = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Industrial Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(/IMG-20250919-WA0005.jpg)` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        
        {/* Heat Shimmer Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                boxShadow: '0 0 8px #fb923c'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className={`mb-6 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Shield size={32} />
            </div>
            <div className="bg-orange-600 text-white p-3 rounded-full">
              <Award size={32} />
            </div>
          </div>
        </div>

        <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
            Strong. Certified. Trusted.
          </span>
        </h1>
        
        <div className={`text-2xl md:text-3xl text-gray-200 mb-8 transition-all duration-1500 delay-500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="text-blue-400 font-bold">AISCO Grade A500 NR Rebars</span>
          <br />
          <span className="text-orange-300">Powering Africa's Infrastructure</span>
        </div>

        {/* Product Highlights */}
        <div className={`flex flex-wrap justify-center gap-6 mb-8 transition-all duration-1500 delay-700 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {[
            "8-32mm Diameter",
            "2MT Bundles", 
            "Traceability",
            "International Standards"
          ].map((highlight, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="text-white font-medium">{highlight}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1500 delay-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button className="group border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3">
            <span>Get a Quote</span>
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="text-xs text-gray-300 tracking-wider">EXPLORE PRODUCTS</div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;