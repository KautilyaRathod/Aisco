import React, { useState } from 'react';
import { Recycle, Flame, Zap, Cog, BarChart3, Package, CheckCircle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ProcessOverview = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [activeStep, setActiveStep] = useState(-1);

  const processes = [
    {
      icon: <Recycle size={40} />,
      title: "Raw Material Sorting",
      description: "Careful selection and preparation of recycled steel scrap",
      metric: "Quality Control",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      details: "High-grade recycled steel is meticulously sorted and prepared for optimal melting efficiency"
    },
    {
      icon: <Flame size={40} />,
      title: "Induction Melting",
      description: "Advanced induction furnaces melt steel to precise temperatures",
      metric: "Tons per hour",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500",
      details: "Advanced induction technology ensures uniform heating and precise temperature control at 1600°C"
    },
    {
      icon: <Zap size={40} />,
      title: "Ladle Refining",
      description: "Secondary metallurgy for optimal steel composition",
      metric: "Chemical Control",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-500",
      details: "Fine-tuning of chemical composition and temperature for superior steel quality and purity"
    },
    {
      icon: <Cog size={40} />,
      title: "Continuous Casting",
      description: "Advanced CCM produces superior quality billets",
      metric: "Precision Casting",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      details: "Advanced continuous casting technology ensures consistent billet quality and dimensional accuracy"
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Rolling Mill",
      description: "Transform billets into precision rebars",
      metric: "High Speed",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      details: "Advanced rolling technology producing rebars with superior mechanical properties"
    },
    {
      icon: <Package size={40} />,
      title: "Cooling & Finishing",
      description: "Controlled cooling and precise bundling with labeling",
      metric: "Quality Assurance",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500",
      details: "Final quality checks, bundling, and comprehensive labeling for traceability"
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Bundling & Labeling",
      description: "Complete documentation and quality certification",
      metric: "100% Traced",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-500",
      details: "Every bundle receives complete documentation including heat number, grade, and certifications"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            End-to-End Process Overview
          </h2>
          <p className={`text-xl text-gray-600 mb-8 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            From raw materials to finished rebars - our integrated manufacturing process
          </p>
          <div className={`text-3xl font-bold text-blue-600 transition-all duration-1000 delay-400 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            7-Step Quality Process
          </div>
        </div>

        {/* Interactive Process Timeline - No horizontal line */}
        <div className="relative mb-16">
          <div className="grid lg:grid-cols-7 gap-6">
            {processes.map((process, index) => (
              <div
                key={index}
                className={`relative text-center cursor-pointer transition-all duration-700 hover:scale-105 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                } ${activeStep === index ? 'scale-110' : ''}`}
                style={{ transitionDelay: `${index * 150 + 600}ms` }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(-1)}
              >
                {/* Step Circle */}
                <div className={`relative z-10 w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                  activeStep === index 
                    ? `bg-gradient-to-r ${process.color} text-white shadow-2xl` 
                    : 'bg-white text-gray-700 border-2 border-gray-300 shadow-lg'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                  
                  {/* Pulse Effect */}
                  {activeStep === index && (
                    <div className={`absolute inset-0 ${process.bgColor} rounded-full animate-ping opacity-30`} />
                  )}
                </div>
                
                {/* Icon */}
                <div className={`text-gray-700 mb-4 flex justify-center transition-all duration-500 ${
                  activeStep === index ? `text-white scale-110` : ''
                }`}>
                  <div className={`p-3 rounded-xl transition-all duration-500 ${
                    activeStep === index ? `${process.bgColor} text-white shadow-lg` : 'bg-white shadow-md'
                  }`}>
                    {process.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className={`text-lg font-bold mb-2 transition-all duration-500 ${
                  activeStep === index ? 'text-blue-700' : 'text-gray-900'
                }`}>
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {process.description}
                </p>

                {/* Metric */}
                <div className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-500 ${
                  activeStep === index 
                    ? `${process.bgColor} text-white` 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {process.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Details Card - Positioned at bottom */}
        {activeStep !== -1 && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 animate-fadeIn">
              <div className={`w-full h-1 ${processes[activeStep].bgColor} rounded-full mb-4`} />
              <h4 className="font-bold text-gray-900 mb-2 text-lg">{processes[activeStep].title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{processes[activeStep].details}</p>
              
              {/* Close indicator */}
              <div className="absolute top-3 right-3 text-gray-400 text-sm cursor-pointer hover:text-gray-600">
                ✕
              </div>
              
              {/* Arrow pointer */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
            </div>
          </div>
        )}

        {/* Process Metrics */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { value: "7", label: "Process Steps", icon: "🔄", color: "text-blue-600" },
            { value: "1600°C", label: "Max Temperature", icon: "🔥", color: "text-orange-600" },
            { value: "100%", label: "Quality Tested", icon: "✅", color: "text-purple-600" }
          ].map((metric, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200 + 1400}ms` }}
            >
              <div className="text-4xl mb-4">{metric.icon}</div>
              <div className={`text-4xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
              <div className="text-gray-600 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;