import React, { useState } from 'react';
import { Award, Shield, FileCheck, Microscope, Camera, CheckCircle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ProductCertifications = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [selectedCert, setSelectedCert] = useState(0);

  const certifications = [
    {
      name: "LNEC E 450-2017",
      country: "Portugal",
      flag: "🇵🇹",
      description: "Portuguese National Laboratory Certification for Steel Quality",
      details: "Comprehensive testing and validation by Portugal's leading construction laboratory ensuring international quality standards",
      scope: "Chemical composition, mechanical properties, geometric characteristics",
      validity: "Ongoing compliance monitoring"
    },
    {
      name: "NA 34:2016", 
      country: "Angola",
      flag: "🇦🇴",
      description: "Angolan National Standard Compliance for Construction Steel",
      details: "Full compliance with Angola's national standards for reinforcing steel bars in construction applications",
      scope: "Local market requirements, safety standards, quality assurance",
      validity: "Certified for domestic and regional markets"
    }
  ];

  const traceabilityFeatures = [
    {
      icon: <FileCheck size={24} />,
      title: "Heat Number",
      description: "Unique identifier for each production batch"
    },
    {
      icon: <Award size={24} />,
      title: "Grade Marking",
      description: "Clear A500 NR grade identification"
    },
    {
      icon: <Shield size={24} />,
      title: "Diameter Marking",
      description: "Precise size specification labeling"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Standard Compliance",
      description: "LNEC and NA standard markings"
    }
  ];

  const qualityTests = [
    {
      icon: <Microscope size={32} />,
      title: "LECO Analysis",
      description: "Advanced carbon and sulfur analysis",
      frequency: "Every batch"
    },
    {
      icon: <Camera size={32} />,
      title: "Geometric Monitoring", 
      description: "Camera-based dimensional accuracy",
      frequency: "Continuous"
    },
    {
      icon: <Shield size={32} />,
      title: "Mechanical Testing",
      description: "Tensile and yield strength verification",
      frequency: "Per standard"
    },
    {
      icon: <FileCheck size={32} />,
      title: "Chemical Composition",
      description: "Spectrometry analysis verification",
      frequency: "Every heat"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Certifications & Traceability
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            International standards with complete product traceability
          </p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-blue-100 hover:border-blue-300 hover:scale-105 cursor-pointer ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${selectedCert === index ? 'ring-4 ring-blue-300 scale-105' : ''}`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
              onClick={() => setSelectedCert(index)}
            >
              {/* Rotating Flag Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-2xl group-hover:rotate-360 transition-transform duration-1000">
                {cert.flag}
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  <Award size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {cert.name}
                  </h3>
                  <div className="text-blue-600 font-semibold mb-3">{cert.country}</div>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  
                  {selectedCert === index && (
                    <div className="animate-fadeIn">
                      <p className="text-gray-700 mb-3">{cert.details}</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Scope:</strong> {cert.scope}</div>
                        <div><strong>Validity:</strong> {cert.validity}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Traceability Section */}
        <div className={`bg-white rounded-2xl shadow-lg p-8 mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Traceability: From Furnace to Finished Bar</h3>
          
          {/* Sample Label */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-4">Example Product Label</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><strong>Heat Number:</strong> AS240125-001</div>
                <div><strong>Grade:</strong> A500 NR</div>
                <div><strong>Diameter:</strong> 16 mm</div>
                <div><strong>Standard:</strong> LNEC E 450-2017</div>
                <div><strong>Bundle Weight:</strong> 2.0 MT</div>
                <div><strong>Production Date:</strong> 25/01/2024</div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
          </div>

          {/* Traceability Features */}
          <div className="grid md:grid-cols-4 gap-6">
            {traceabilityFeatures.map((feature, index) => (
              <div key={index} className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="text-blue-600 mb-3 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Testing */}
        <div className={`transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quality Testing & Verification</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityTests.map((test, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4 flex justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                  {test.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{test.title}</h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{test.description}</p>
                <div className="text-xs text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
                  {test.frequency}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Image */}
        <div className={`mt-16 relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1600ms' }}>
          <img
            src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
            alt="Quality Control Laboratory"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent flex items-center">
            <div className="text-white p-8 max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">Certified Quality Assurance</h3>
              <p className="text-xl mb-6">Every rebar undergoes rigorous testing to ensure compliance with international standards</p>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
                <span>Download Certificates</span>
                <FileCheck size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCertifications;