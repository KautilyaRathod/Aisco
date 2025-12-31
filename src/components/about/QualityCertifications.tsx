import React, { useState } from 'react';
import { Award, Microscope, Camera, FileCheck, RotateCcw, TrendingUp } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const QualityCertifications = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [activeTab, setActiveTab] = useState(0);

  const certifications = [
    { 
      name: "LNEC E 450-2017", 
      description: "Portuguese National Laboratory Certification for Steel Quality",
      badge: "🇵🇹",
      details: "Comprehensive testing and validation by Portugal's leading construction laboratory"
    },
    { 
      name: "NA 34:2016", 
      description: "Angolan National Standard Compliance for Construction Steel",
      badge: "🇦🇴",
      details: "Full compliance with Angola's national standards for reinforcing steel bars"
    }
  ];

  const qualityMetrics = [
    { label: "Chemical Accuracy", value: 99.8, color: "bg-blue-500" },
    { label: "Dimensional Precision", value: 99.5, color: "bg-green-500" },
    { label: "Traceability", value: 100, color: "bg-purple-500" },
    { label: "Testing Coverage", value: 100, color: "bg-orange-500" }
  ];

  const labEquipment = [
    {
      icon: <Microscope size={32} />,
      title: "LECO Analysis",
      description: "Advanced carbon and sulfur analysis for precise chemical composition"
    },
    {
      icon: <Camera size={32} />,
      title: "Geometric Monitoring",
      description: "Camera-based systems ensuring dimensional accuracy and surface quality"
    },
    {
      icon: <FileCheck size={32} />,
      title: "Traceability",
      description: "Complete documentation from raw materials to finished products"
    },
    {
      icon: <RotateCcw size={32} />,
      title: "PDCA Methodology",
      description: "Plan-Do-Check-Act cycle for continuous quality improvement"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Quality & Certifications
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Uncompromising standards backed by international certifications
          </p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-blue-100 hover:border-blue-300 hover:scale-105 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              {/* Rotating Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-2xl group-hover:rotate-360 transition-transform duration-1000">
                {cert.badge}
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  <Award size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{cert.description}</p>
                  <p className="text-sm text-gray-500">{cert.details}</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Quality Metrics */}
        <div className={`mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Quality Performance Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {qualityMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - metric.value / 100)}`}
                      className={`${metric.color.replace('bg-', 'text-')} transition-all duration-1000`}
                      style={{ transitionDelay: `${index * 200 + 1000}ms` }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900">{metric.value}%</span>
                  </div>
                </div>
                <div className="font-semibold text-gray-700">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lab Equipment */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {labEquipment.map((equipment, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150 + 1200}ms` }}
            >
              <div className="text-blue-600 mb-4 flex justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                {equipment.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{equipment.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{equipment.description}</p>
            </div>
          ))}
        </div>

        {/* Lab Image */}
        <div className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1600ms' }}>
          <img
            src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
            alt="Quality Control Laboratory"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent flex items-center">
            <div className="text-white p-8 max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">Advanced Testing Laboratory</h3>
              <p className="text-xl mb-6">State-of-the-art equipment ensuring every batch meets our exacting standards</p>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
                <span>See Our Quality Process</span>
                <TrendingUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCertifications;