import React from 'react';
import { Calculator, FileText, Truck, CheckCircle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const QuoteHero = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Industrial Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)` 
          }}
        />
        
        {/* Warehouse/Logistics Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/162568/steel-mill-factory-industry-162568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)` 
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>
      
      {/* Animated Quote Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pricing Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              boxShadow: '0 0 8px #4ade80'
            }}
          />
        ))}
        
        {/* Business Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className={`mb-6 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="bg-green-600 text-white p-3 rounded-full animate-pulse">
              <Calculator size={32} />
            </div>
            <div className="bg-blue-600 text-white p-3 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}>
              <FileText size={32} />
            </div>
            <div className="bg-orange-600 text-white p-3 rounded-full animate-pulse" style={{ animationDelay: '1s' }}>
              <Truck size={32} />
            </div>
          </div>
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 transition-all duration-1500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <span className="bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
            Get a Custom Quote
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent animate-pulse">
            for Certified Rebar
          </span>
        </h1>
        
        <div className={`text-2xl md:text-3xl text-gray-200 mb-8 transition-all duration-1500 delay-500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="text-green-300 font-bold">Fill out the form below</span>
          <span className="text-white"> and our team will respond with </span>
          <span className="text-blue-300 font-bold">accurate pricing, delivery options, and technical details</span>
        </div>

        {/* Quote Benefits */}
        <div className={`flex flex-wrap justify-center gap-8 mb-8 transition-all duration-1500 delay-700 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {[
            { icon: <CheckCircle size={20} />, label: "24h Response", value: "Guaranteed" },
            { icon: <Calculator size={20} />, label: "Competitive Pricing", value: "Best Rates" },
            { icon: <Truck size={20} />, label: "Delivery Included", value: "Nationwide" }
          ].map((benefit, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
              <div className="text-green-400 mb-2 flex justify-center">{benefit.icon}</div>
              <div className="text-sm text-gray-300 mb-1">{benefit.label}</div>
              <div className="font-bold text-white">{benefit.value}</div>
            </div>
          ))}
        </div>

        <div className={`text-3xl md:text-4xl font-bold text-orange-400 mb-8 transition-all duration-1500 delay-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="animate-pulse">TRUSTED BY 500+ CONSTRUCTION COMPANIES</span>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1500 delay-1200 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button 
            onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3"
          >
            <Calculator size={24} />
            <span>Start Your Quote</span>
            <div className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="text-xs text-gray-300 tracking-wider">GET YOUR QUOTE</div>
        </div>
      </div>

      {/* Corner Quote Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-green-400 opacity-60" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-blue-400 opacity-60" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-blue-400 opacity-60" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-green-400 opacity-60" />
    </section>
  );
};

export default QuoteHero;