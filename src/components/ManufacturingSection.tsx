import React from 'react';
import { Flame, Zap, Cog, BarChart3, Factory } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ManufacturingSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const processes = [
    {
      icon: <Flame size={32} />,
      title: "Melting Shop",
      description: "Advanced induction furnaces for precise steel melting",
      step: "01"
    },
    {
      icon: <Zap size={32} />,
      title: "Ladle Furnace",
      description: "Advanced refining for optimal steel composition",
      step: "02"
    },
    {
      icon: <Cog size={32} />,
      title: "CCM",
      description: "Continuous casting machine for superior billets",
      step: "03"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Rolling Mill",
      description: "High-speed rolling mill for precision rebar production",
      step: "04"
    },
    {
      icon: <Factory size={32} />,
      title: "Quality Control",
      description: "Comprehensive testing and certification",
      step: "05"
    }
  ];

  return (
    <section id="manufacturing" ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Manufacturing Excellence
          </h2>
          <p className={`text-xl text-gray-600 mb-8 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Featuring Oxygen Blowing System (OBS) - one of only two steel manufacturing plants globally with this advanced technology, and LRF for cleaner steel production
          </p>
        </div>

        {/* Process Timeline - No horizontal line */}
        <div className="relative mb-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {processes.map((process, index) => (
              <div
                key={index}
                className={`relative text-center transition-all duration-1000 hover:scale-105 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                {/* Step Circle */}
                <div className="relative z-10 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-700">
                  {process.step}
                </div>
                
                {/* Icon */}
                <div className="text-blue-600 mb-4 flex justify-center transform hover:scale-110 transition-transform duration-300">
                  {process.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-700 transition-colors">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Intelligence Preview */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Smart Automation</h4>
              <p className="text-gray-600 text-sm">Level 2 automation with AI-based quality prediction</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-green-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Inspection</h4>
              <p className="text-gray-600 text-sm">Online surface inspection and thermal imaging</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-emerald-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
              <p className="text-gray-600 text-sm">Green energy and waste heat recovery systems</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-orange-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Smart Logistics</h4>
              <p className="text-gray-600 text-sm">Automated guided vehicles and gantry cranes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;