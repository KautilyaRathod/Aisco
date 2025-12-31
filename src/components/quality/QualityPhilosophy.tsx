import React from 'react';
import { RotateCcw, Target, CheckCircle, TrendingUp } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const QualityPhilosophy = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const pdcaSteps = [
    {
      icon: <Target size={32} />,
      title: "PLAN",
      description: "Set quality objectives and define processes for achieving them",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      icon: <RotateCcw size={32} />,
      title: "DO",
      description: "Implement quality procedures and execute planned processes",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "CHECK",
      description: "Monitor and measure results against quality standards",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "ACT",
      description: "Take corrective actions and implement improvements",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Our Quality Philosophy
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Built on the PDCA framework for continuous improvement and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* PDCA Wheel */}
          <div className={`relative transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative w-96 h-96 mx-auto">
              {/* Central Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl">PDCA</div>
                    <div className="text-xs">Cycle</div>
                  </div>
                </div>
              </div>
              
              {/* PDCA Segments */}
              {pdcaSteps.map((step, index) => {
                const angle = (index * 90) - 45; // Start from top-right
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={index}
                    className={`absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 hover:scale-110 ${
                      isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      left: `50%`,
                      top: `50%`,
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                      transitionDelay: `${index * 200 + 600}ms`
                    }}
                  >
                    <div className={`w-full h-full ${step.bgColor} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}>
                      <div className="text-center">
                        <div className="mb-1 group-hover:scale-110 transition-transform">
                          {step.icon}
                        </div>
                        <div className="text-xs font-bold">{step.title}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-45deg)' }}>
                <circle
                  cx="50%"
                  cy="50%"
                  r="140"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Continuous Quality Improvement
            </h3>
            
            <div className="text-lg text-gray-700 mb-8 leading-relaxed space-y-4">
              <p>
                At AISCO, we follow the <span className="text-blue-600 font-bold">PDCA (Plan-Do-Check-Act)</span> cycle 
                for continuous quality improvement. This systematic approach ensures that every stage of our 
                manufacturing process is tightly controlled and continuously optimized.
              </p>
              
              <p>
                From <span className="text-green-600 font-bold">raw material selection</span> to 
                <span className="text-purple-600 font-bold"> final packaging</span>, our quality strategy 
                is aligned with <span className="text-orange-600 font-bold">ISO methodologies</span> and 
                international best practices.
              </p>
            </div>

            {/* Quality Principles */}
            <div className="space-y-4 mb-8">
              {[
                "Every process stage is monitored and controlled",
                "Real-time data collection and analysis",
                "Continuous improvement through feedback loops",
                "Employee training and quality awareness programs"
              ].map((principle, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-500 ${
                    isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 800}ms` }}
                >
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">{principle}</span>
                </div>
              ))}
            </div>

            {/* ISO Alignment */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">ISO 9001 Alignment</h4>
              <p className="text-gray-700">
                Our quality management system is designed to meet ISO 9001 standards, 
                ensuring consistent delivery of products that meet customer and regulatory requirements.
              </p>
            </div>
          </div>
        </div>

        {/* PDCA Details */}
        <div className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          {pdcaSteps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center text-white mb-4 mx-auto shadow-lg`}>
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityPhilosophy;