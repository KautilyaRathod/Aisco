import React, { useState } from 'react';
import { Flame, Zap, Cog, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ManufacturingProcess = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [activeStep, setActiveStep] = useState(-1);

  const processes = [
    {
      icon: <Flame size={40} />,
      title: "Raw Material Sorting",
      description: "Careful selection and preparation of recycled steel materials",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      details: "High-quality scrap steel is sorted and prepared for melting, ensuring optimal chemical composition",
      temp: "Ambient",
      process: "Quality Control"
    },
    {
      icon: <Flame size={40} />,
      title: "Melting in Induction Furnaces",
      description: "Advanced induction furnaces melt steel to precise temperatures",
      image: "https://images.pexels.com/photos/162568/steel-mill-factory-industry-162568.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      details: "Advanced induction technology ensures uniform heating and precise temperature control",
      temp: "1600°C",
      process: "Melting"
    },
    {
      icon: <Zap size={40} />,
      title: "Refining via Ladle Furnace",
      description: "Secondary metallurgy for optimal steel composition and purity",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      details: "Fine-tuning of chemical composition and temperature for superior steel quality",
      temp: "1550°C",
      process: "Refining"
    },
    {
      icon: <Cog size={40} />,
      title: "Billet Casting via CCM",
      description: "Advanced continuous casting machine produces superior quality billets",
      image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      details: "Advanced continuous casting technology ensures consistent billet quality and dimensional accuracy",
      temp: "1200°C",
      process: "Casting"
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Rolling into Rebar",
      description: "High-speed rolling mill transforms billets into precision rebars",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      details: "Advanced rolling technology producing rebars with superior mechanical properties",
      temp: "1000°C",
      process: "Rolling"
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Cooling & Bundling",
      description: "Controlled cooling and precise bundling with complete labeling",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      details: "Final quality checks, bundling, and comprehensive labeling for traceability",
      temp: "Ambient",
      process: "Finishing"
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
            Manufacturing Process Journey
          </h2>
          <p className={`text-xl text-gray-300 mb-8 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            From raw materials to finished rebars - our step-by-step quality process
          </p>
        </div>

        {/* Process Timeline - Removed horizontal line */}
        <div className="relative mb-16">
          <div className="grid lg:grid-cols-6 gap-6 relative">
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
                <h3 className={`text-lg font-bold mb-2 transition-all duration-500 ${
                  activeStep === index ? 'text-orange-300' : 'text-white'
                }`}>
                  {process.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {process.description}
                </p>

                {/* Process Details */}
                <div className={`space-y-1 transition-all duration-500 ${
                  activeStep === index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
                }`}>
                  <div className="text-orange-400 font-semibold text-xs">{process.temp}</div>
                  <div className="text-blue-400 font-semibold text-xs">{process.process}</div>
                </div>

                {/* Hover Details Card - Fixed positioning */}
                {activeStep === index && (
                  <div className="fixed z-50 pointer-events-none" style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}>
                    <div className="bg-black/95 backdrop-blur-sm rounded-xl border border-orange-400/30 text-sm text-gray-200 w-80 p-6 shadow-2xl animate-fadeIn">
                      <img
                        src={process.image}
                        alt={process.title}
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                      <div className="text-orange-300 font-semibold mb-2">Process Details:</div>
                      <p className="leading-relaxed">{process.details}</p>
                      {/* Arrow pointer */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/95 border-r border-b border-orange-400/30 rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Statistics - Removed */}

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1800ms' }}>
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3 group">
            <span>Visit Our Facility</span>
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;