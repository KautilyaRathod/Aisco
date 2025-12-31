import React, { useState } from 'react';
import { Flame, Zap, Cog, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ManufacturingFacility = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [activeStep, setActiveStep] = useState(0);

  const processes = [
    {
      icon: <Flame size={40} />,
      title: "Melting Shop",
      description: "Advanced induction furnaces for precise steel melting with advanced temperature control",
      details: "State-of-the-art induction furnaces ensure optimal melting temperatures and chemical composition control",
      temp: "1600°C",
      capacity: "42 MW Total"
    },
    {
      icon: <Zap size={40} />,
      title: "Ladle Furnace", 
      description: "Advanced refining process for optimal steel composition and purity",
      details: "Secondary metallurgy station for fine-tuning chemical composition and temperature",
      temp: "1550°C",
      capacity: "Precise Control"
    },
    {
      icon: <Cog size={40} />,
      title: "CCM",
      description: "Continuous casting machine producing superior quality billets",
      details: "Advanced continuous casting technology ensuring consistent billet quality and dimensional accuracy",
      temp: "1200°C",
      capacity: "High Speed"
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Rolling Mill",
      description: "High-speed rolling mill for precision rebar production",
      details: "Advanced rolling technology producing rebars with superior mechanical properties",
      temp: "1000°C",
      capacity: "High Speed"
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Quality Control",
      description: "Comprehensive testing and certification processes",
      details: "In-house laboratory with LECO and spectrometry testing for quality assurance",
      temp: "Ambient",
      capacity: "100% Tested"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-white mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Manufacturing Excellence
          </h2>
          <p className={`text-xl text-gray-300 mb-8 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Featuring Oxygen Blowing System (OBS) - one of only two steel manufacturing plants globally with this advanced technology, and LRF for cleaner steel production
          </p>
        </div>

        {/* Interactive Process Timeline - Removed horizontal line */}
        <div className="relative mb-16">
          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {processes.map((process, index) => (
              <div
                key={index}
                className={`relative text-center cursor-pointer transition-all duration-700 hover:scale-105 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                } ${activeStep === index ? 'scale-110' : ''}`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(-1)}
              >
                {/* Step Circle */}
                <div className={`relative z-20 w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                  activeStep === index 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl' 
                    : 'bg-white/10 text-white border-2 border-white/30'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                  
                  {/* Pulse Effect */}
                  {activeStep === index && (
                    <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-30" />
                  )}
                </div>
                
                {/* Icon */}
                <div className={`text-white mb-4 flex justify-center transition-all duration-500 ${
                  activeStep === index ? 'text-orange-300 scale-110' : ''
                }`}>
                  {process.icon}
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 transition-all duration-500 ${
                  activeStep === index ? 'text-orange-300' : 'text-white'
                }`}>
                  {process.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {process.description}
                </p>

                {/* Specs */}
                <div className={`space-y-2 transition-all duration-500 ${
                  activeStep === index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
                }`}>
                  <div className="text-orange-400 font-semibold text-sm">{process.temp}</div>
                  <div className="text-blue-400 font-semibold text-sm">{process.capacity}</div>
                </div>

                {/* Hover Details */}
                {activeStep === index && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-black/90 backdrop-blur-sm rounded-lg border border-orange-400/30 text-sm text-gray-200 w-72 z-50 animate-fadeIn shadow-2xl">
                    <div className="text-orange-300 font-semibold mb-2">Process Details:</div>
                    <p className="leading-relaxed">{process.details}</p>
                    {/* Arrow pointer */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/90 border-l border-t border-orange-400/30 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ManufacturingFacility;