import React from 'react';
import { useInView } from '../../hooks/useInView';

const AboutHero = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Industrial Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Primary Steel Plant Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(/IMG-20221130-WA0001.jpeg.jpg)` 
          }}
        />
        
        {/* Secondary Industrial Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)` 
          }}
        />
        
        {/* Industrial Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        
        {/* Steel Texture Pattern */}
        <div className="absolute inset-0 opacity-20 steel-texture" />
      </div>
      
      {/* Animated Industrial Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Sparks/Embers */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
              boxShadow: '0 0 6px #fb923c, 0 0 12px #f97316'
            }}
          />
        ))}
        
        {/* Steel Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`steel-${i}`}
            className="absolute w-2 h-2 bg-gray-400 rounded-full animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Heat Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-600/20 via-red-600/10 to-transparent animate-pulse" />
      </div>

      {/* Industrial Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 transition-all duration-1500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <span className="bg-gradient-to-r from-white via-blue-200 to-orange-200 bg-clip-text text-transparent">
            Welcome to
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent animate-pulse">
            AISCO
          </span>
        </h1>
        
        <div className={`text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 transition-all duration-1500 delay-500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="typing-animation">Angola's leading manufacturer of certified steel for Africa's infrastructure</span>
        </div>

        {/* Industrial Stats Bar */}
        <div className={`flex flex-wrap justify-center gap-8 mb-8 transition-all duration-1500 delay-700 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {[
            { value: "30+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={`text-3xl md:text-4xl font-bold text-orange-400 mb-8 transition-all duration-1500 delay-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="animate-pulse">BUILD FOR GENERATIONS</span>
        </div>

        {/* Industrial CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1500 delay-1200 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Explore Our Facility</span>
            <div className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
          </button>
          
          <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105">
            <span>Our Manufacturing Process</span>
          </button>
        </div>
      </div>

      {/* Industrial Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="text-xs text-gray-300 tracking-wider">SCROLL TO EXPLORE</div>
        </div>
      </div>

      {/* Corner Industrial Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-orange-400 opacity-60" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-blue-400 opacity-60" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-blue-400 opacity-60" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-orange-400 opacity-60" />
    </section>
  );
};

export default AboutHero;