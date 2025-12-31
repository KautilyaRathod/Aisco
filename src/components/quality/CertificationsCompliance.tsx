import React, { useState } from 'react';
import { Award, Shield, CheckCircle, FileCheck, Globe, Star } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const CertificationsCompliance = () => {
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
      validity: "Ongoing compliance monitoring",
      badge: "LNEC",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "NA 34:2016", 
      country: "Angola",
      flag: "🇦🇴",
      description: "Angolan National Standard Compliance for Construction Steel",
      details: "Full compliance with Angola's national standards for reinforcing steel bars in construction applications",
      scope: "Local market requirements, safety standards, quality assurance",
      validity: "Certified for domestic and regional markets",
      badge: "NA 34",
      color: "from-green-500 to-green-600"
    },
    {
      name: "ISO 9001 Aligned",
      country: "International",
      flag: "🌍",
      description: "Quality Management System Standards",
      details: "Our processes are designed to meet ISO 9001 requirements for quality management systems",
      scope: "Process control, customer satisfaction, continuous improvement",
      validity: "Systematic implementation and monitoring",
      badge: "ISO",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const complianceFeatures = [
    {
      icon: <FileCheck size={24} />,
      title: "Documentation Control",
      description: "Complete record keeping and traceability"
    },
    {
      icon: <Globe size={24} />,
      title: "International Standards",
      description: "Compliance with global quality requirements"
    },
    {
      icon: <Star size={24} />,
      title: "Continuous Monitoring",
      description: "Regular audits and compliance verification"
    },
    {
      icon: <Shield size={24} />,
      title: "Quality Assurance",
      description: "Systematic approach to quality management"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Certifications & Compliance
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            International standards ensuring quality and reliability
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-300 hover:scale-105 cursor-pointer ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${selectedCert === index ? 'ring-4 ring-blue-300 scale-105' : ''}`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
              onClick={() => setSelectedCert(index)}
            >
              {/* Rotating Flag Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-2xl group-hover:rotate-360 transition-transform duration-1000">
                {cert.flag}
              </div>
              
              {/* Certification Badge */}
              <div className={`w-20 h-20 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {cert.badge}
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {cert.name}
                </h3>
                <div className="text-blue-600 font-semibold mb-3">{cert.country}</div>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                
                {selectedCert === index && (
                  <div className="animate-fadeIn">
                    <p className="text-gray-700 mb-3 text-sm">{cert.details}</p>
                    <div className="space-y-2 text-xs">
                      <div><strong>Scope:</strong> {cert.scope}</div>
                      <div><strong>Status:</strong> {cert.validity}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Compliance Features */}
        <div className={`grid md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          {complianceFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-300 hover:scale-105"
            >
              <div className="text-blue-600 mb-3 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Certification Process */}
        <div className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Certification Process</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                AISCO maintains rigorous certification standards through continuous monitoring, 
                regular audits, and compliance verification with international and local standards.
              </p>
              <div className="space-y-3">
                {[
                  "Regular third-party audits and inspections",
                  "Continuous compliance monitoring systems",
                  "Documentation control and record keeping",
                  "Staff training on quality standards"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-300" />
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <Award size={64} className="text-yellow-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Quality Excellence</h4>
                <p className="text-blue-200 text-sm">
                  Certified quality management ensuring every product meets the highest standards
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Gallery */}
        <div className={`mt-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1400ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certificate Gallery</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "LNEC Certificate", image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" },
              { title: "NA 34 Compliance", image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" },
              { title: "Quality Documentation", image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" }
            ].map((cert, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-bold text-lg">{cert.title}</h4>
                  <div className="flex items-center space-x-1 mt-2">
                    <CheckCircle size={16} className="text-green-400" />
                    <span className="text-sm">Verified & Current</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsCompliance;