import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertTriangle, RotateCcw, TrendingUp } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const QualityProcessFlow = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [activeStep, setActiveStep] = useState(0);

  const qualitySteps = [
    {
      title: "Raw Material Inspection",
      description: "Incoming material quality verification and documentation",
      checkpoints: ["Chemical composition check", "Visual inspection", "Supplier certification"],
      icon: "🔍",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      title: "Melting Process Control",
      description: "Real-time monitoring of furnace operations and chemistry",
      checkpoints: ["Temperature monitoring", "Chemical analysis", "Process parameters"],
      icon: "🔥",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500"
    },
    {
      title: "Casting Quality Check",
      description: "Continuous casting machine monitoring and billet inspection",
      checkpoints: ["Dimensional accuracy", "Surface quality", "Cooling control"],
      icon: "⚙️",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500"
    },
    {
      title: "Rolling Mill Monitoring",
      description: "Real-time dimensional and surface quality control",
      checkpoints: ["Diameter control", "Surface finish", "Mechanical properties"],
      icon: "📏",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500"
    },
    {
      title: "Final Testing & Certification",
      description: "Comprehensive testing and quality documentation",
      checkpoints: ["Mechanical testing", "Chemical verification", "Certification"],
      icon: "✅",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500"
    },
    {
      title: "Packaging & Labeling",
      description: "Final quality check and complete traceability labeling",
      checkpoints: ["Bundle inspection", "Label verification", "Documentation"],
      icon: "📦",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-500"
    }
  ];

  const nonConformanceProcess = [
    {
      step: "Detection",
      description: "Automated systems and manual inspection identify issues",
      icon: <AlertTriangle size={24} />,
      color: "bg-red-500"
    },
    {
      step: "Isolation",
      description: "Non-conforming material is immediately segregated",
      icon: <CheckCircle size={24} />,
      color: "bg-yellow-500"
    },
    {
      step: "Analysis",
      description: "Root cause analysis and corrective action planning",
      icon: <RotateCcw size={24} />,
      color: "bg-blue-500"
    },
    {
      step: "Resolution",
      description: "Implementation of corrective measures and verification",
      icon: <TrendingUp size={24} />,
      color: "bg-green-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-white mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Quality in Every Process
          </h2>
          <p className={`text-xl text-gray-300 mb-8 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            From furnace to dispatch - comprehensive quality control at every stage
          </p>
        </div>

        {/* Quality Process Timeline - Removed horizontal line */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-6 gap-6">
            {qualitySteps.map((step, index) => (
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
                <div className={`relative z-10 w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                  activeStep === index 
                    ? `bg-gradient-to-r ${step.color} text-white shadow-2xl` 
                    : 'bg-white/10 text-white border-2 border-white/30'
                }`}>
                  <div className="text-2xl">{step.icon}</div>
                  
                  {/* Pulse Effect */}
                  {activeStep === index && (
                    <div className={`absolute inset-0 ${step.bgColor} rounded-full animate-ping opacity-30`} />
                  )}
                </div>
                
                {/* Content */}
                <h3 className={`text-lg font-bold mb-3 transition-all duration-500 ${
                  activeStep === index ? 'text-blue-300' : 'text-white'
                }`}>
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Checkpoints */}
                <div className={`space-y-2 transition-all duration-500 ${
                  activeStep === index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
                }`}>
                  {step.checkpoints.map((checkpoint, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                      <CheckCircle size={12} className="text-green-400" />
                      <span>{checkpoint}</span>
                    </div>
                  ))}
                </div>

                {/* Fixed Hover Details - Better positioning */}
                {activeStep === index && (
                  <div className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-black/95 backdrop-blur-sm rounded-lg border border-white/20 text-sm text-gray-200 w-80 shadow-2xl animate-fadeIn"
                       style={{ 
                         top: '100%',
                         maxWidth: '320px',
                         minWidth: '280px'
                       }}>
                    <div className="font-semibold mb-2 text-blue-300">Quality Checkpoints:</div>
                    <ul className="space-y-1 text-left">
                      {step.checkpoints.map((checkpoint, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                          <span className="text-gray-200">{checkpoint}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Arrow pointer */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/95 border-l border-t border-white/20 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Non-Conformance Process */}
        <div className={`transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1400ms' }}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Non-Conformance & Feedback Loop</h3>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-4 gap-8">
              {nonConformanceProcess.map((process, index) => (
                <div key={index} className="text-center relative">
                  <div className={`w-16 h-16 ${process.color} rounded-full flex items-center justify-center text-white mb-4 mx-auto shadow-lg`}>
                    {process.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{process.step}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
                  
                  {index < nonConformanceProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 transform translate-x-1/2">
                      <ArrowRight size={24} className="text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-red-600/20 border border-red-400/30 rounded-lg p-4 inline-block">
                <h4 className="text-red-300 font-bold mb-2">Zero Defect Goal</h4>
                <p className="text-gray-300 text-sm">
                  Continuous improvement through systematic quality management
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className={`mt-16 grid md:grid-cols-4 gap-8 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1800ms' }}>
          {[
            { value: "99.8%", label: "Process Accuracy", icon: "🎯" },
            { value: "24/7", label: "Monitoring", icon: "👁️" },
            { value: "<0.1%", label: "Defect Rate", icon: "📉" },
            { value: "100%", label: "Traceability", icon: "🔗" }
          ].map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
            >
              <div className="text-4xl mb-3">{metric.icon}</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{metric.value}</div>
              <div className="text-gray-300">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityProcessFlow;