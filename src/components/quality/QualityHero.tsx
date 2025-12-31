import React from 'react';
import { Shield, Award, Microscope, CheckCircle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const QualityHero = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Laboratory Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)` 
          }}
        />
        
        {/* Secondary Lab Equipment Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)` 
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>
      
      {/* Animated Quality Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Quality Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              boxShadow: '0 0 8px #60a5fa'
            }}
          />
        ))}
        
        {/* Precision Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className={`mb-6 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="bg-blue-600 text-white p-3 rounded-full animate-pulse">
              <Shield size={32} />
            </div>
            <div className="bg-green-600 text-white p-3 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}>
              <Award size={32} />
            </div>
            <div className="bg-purple-600 text-white p-3 rounded-full animate-pulse" style={{ animationDelay: '1s' }}>
              <Microscope size={32} />
            </div>
          </div>
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 transition-all duration-1500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            AISCO Quality
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Assurance
          </span>
        </h1>
        
        <div className={`text-2xl md:text-3xl text-gray-200 mb-8 transition-all duration-1500 delay-500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="text-blue-300 font-bold">Built on Precision.</span>
          <span className="text-white"> • </span>
          <span className="text-green-300 font-bold">Certified by Excellence.</span>
        </div>

        {/* Quality Metrics */}
        <div className={`flex flex-wrap justify-center gap-8 mb-8 transition-all duration-1500 delay-700 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {[
            { value: "100%", label: "Batch Testing", icon: "🧪" },
            { value: "24/7", label: "Quality Monitoring", icon: "📊" },
            { value: "2", label: "International Standards", icon: "🏆" }
          ].map((metric, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
              <div className="text-2xl mb-2">{metric.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400">{metric.value}</div>
              <div className="text-sm text-gray-300">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className={`text-3xl md:text-4xl font-bold text-green-400 mb-8 transition-all duration-1500 delay-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="animate-pulse">DELIVERING STRENGTH, CONSISTENCY & TRUST</span>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1500 delay-1200 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3">
            <CheckCircle size={24} />
            <span>Explore Certifications</span>
            <div className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
          </button>
          
          <button className="group border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3">
            <Microscope size={24} className="group-hover:scale-110 transition-transform" />
            <span>Our Testing Process</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="text-xs text-gray-300 tracking-wider">DISCOVER QUALITY</div>
        </div>
      </div>

      {/* Corner Quality Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-blue-400 opacity-60" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-green-400 opacity-60" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-green-400 opacity-60" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-blue-400 opacity-60" />
    </section>
  );
};

export default QualityHero;