import React from 'react';
import { Award, Shield, CheckCircle, Microscope, Camera, FileCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const QualitySection = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const certifications = [
    { name: "LNEC E 450-2017", description: "Portuguese National Laboratory Certification" },
    { name: "NA 34:2016", description: "Angolan National Standard Compliance" }
  ];

  const qualityFeatures = [
    {
      icon: <Microscope size={32} />,
      title: "LECO + Spectrometry Testing",
      description: "Advanced chemical composition analysis for consistent quality"
    },
    {
      icon: <Camera size={32} />,
      title: "Geometric Accuracy",
      description: "Camera monitoring systems ensure precise dimensional control"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "PDCA Cycle",
      description: "Plan-Do-Check-Act methodology for continuous improvement"
    },
    {
      icon: <FileCheck size={32} />,
      title: "Traceability",
      description: "Complete documentation from raw materials to finished products"
    }
  ];

  return (
    <section id="quality" ref={ref} className="py-20 bg-white">
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
              className={`bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <Award size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {qualityFeatures.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150 + 800}ms` }}
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Quality Process Image */}
        <div className={`relative rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <img
            src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
            alt="Quality Control Laboratory"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="text-white p-8">
              <h3 className="text-3xl font-bold mb-4">In-House Laboratory Testing</h3>
              <p className="text-xl mb-6">State-of-the-art equipment ensuring every batch meets our exacting standards</p>
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                See Our Quality Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;