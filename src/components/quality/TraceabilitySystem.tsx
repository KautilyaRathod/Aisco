import React, { useState } from 'react';
import { QrCode, Tag, FileText, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const TraceabilitySystem = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  const labelComponents = [
    {
      id: "heat-number",
      icon: <Tag size={20} />,
      title: "Heat Number",
      value: "AS240125-001",
      description: "Unique identifier linking to production batch and furnace data",
      position: { top: "20%", left: "15%" }
    },
    {
      id: "grade",
      icon: <CheckCircle size={20} />,
      title: "Grade",
      value: "A500 NR",
      description: "Steel grade specification meeting international standards",
      position: { top: "20%", right: "15%" }
    },
    {
      id: "diameter",
      icon: <FileText size={20} />,
      title: "Diameter",
      value: "16 mm",
      description: "Precise diameter specification for construction applications",
      position: { bottom: "30%", left: "15%" }
    },
    {
      id: "standard",
      icon: <QrCode size={20} />,
      title: "Standard",
      value: "LNEC E 450-2017",
      description: "Compliance certification and testing standard reference",
      position: { bottom: "30%", right: "15%" }
    }
  ];

  const traceabilitySteps = [
    {
      icon: <MapPin size={24} />,
      title: "Raw Material Source",
      description: "Track origin and quality of recycled steel materials",
      stage: "Input"
    },
    {
      icon: <Clock size={24} />,
      title: "Production Timeline",
      description: "Complete time-stamped record of manufacturing process",
      stage: "Process"
    },
    {
      icon: <FileText size={24} />,
      title: "Quality Testing",
      description: "All test results and quality control measurements",
      stage: "Testing"
    },
    {
      icon: <Tag size={24} />,
      title: "Final Documentation",
      description: "Comprehensive labeling and certification package",
      stage: "Output"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Traceability & Labeling System
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Complete end-to-end tracking from furnace to finished bar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Interactive Label */}
          <div className={`relative transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative bg-white p-8 rounded-2xl shadow-2xl border-4 border-blue-200">
              {/* Sample Rebar Bundle Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Labeled Rebar Bundle"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Interactive Label Points */}
                {labelComponents.map((component) => (
                  <div
                    key={component.id}
                    className="absolute cursor-pointer z-20"
                    style={component.position}
                    onMouseEnter={() => setHoveredLabel(component.id)}
                    onMouseLeave={() => setHoveredLabel(null)}
                  >
                    <div className="relative">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      
                      {/* Fixed Hover Tooltip */}
                      {hoveredLabel === component.id && (
                        <div 
                          className="fixed z-50 p-4 bg-white rounded-lg shadow-2xl border border-gray-200 w-80 animate-fadeIn"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            maxWidth: '320px',
                            minWidth: '280px'
                          }}
                        >
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="text-blue-600">{component.icon}</div>
                            <h4 className="font-bold text-gray-900 text-lg">{component.title}</h4>
                          </div>
                          <div className="text-xl font-semibold text-blue-600 mb-2">{component.value}</div>
                          <p className="text-sm text-gray-600 leading-relaxed">{component.description}</p>
                          
                          {/* Close indicator */}
                          <div className="absolute top-2 right-2 text-gray-400 text-xs">
                            ✕
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Label Information */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-3">Example Product Label</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div><strong>Heat Number:</strong> AS240125-001</div>
                  <div><strong>Grade:</strong> A500 NR</div>
                  <div><strong>Diameter:</strong> 16 mm</div>
                  <div><strong>Standard:</strong> LNEC E 450-2017</div>
                  <div><strong>Bundle Weight:</strong> 2.0 MT</div>
                  <div><strong>Production Date:</strong> 25/01/2024</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Product Traceability
            </h3>
            
            <div className="text-lg text-gray-700 mb-8 leading-relaxed space-y-4">
              <p>
                Every AISCO rebar is labeled with a <span className="text-blue-600 font-bold">unique heat number</span>, 
                grade specification, diameter, and compliance standard. This comprehensive labeling system 
                ensures traceability from raw materials to finished products.
              </p>
              
              <p>
                Our <span className="text-green-600 font-bold">end-to-end tracking system</span> maintains 
                detailed records of production parameters, quality test results, and shipping information, 
                providing customers with complete confidence in product authenticity and quality.
              </p>
            </div>

            {/* Traceability Features */}
            <div className="space-y-4 mb-8">
              {[
                "Unique heat number for each production batch",
                "Complete chemical composition documentation",
                "Mechanical property test results",
                "Production date and facility information",
                "Quality control checkpoint records"
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-500 ${
                    isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* QR Code Integration */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <QrCode size={24} className="text-blue-600" />
                <h4 className="text-xl font-semibold text-gray-900">Digital Traceability</h4>
              </div>
              <p className="text-gray-700">
                Advanced QR code integration allows instant access to complete product history, 
                test certificates, and compliance documentation through mobile scanning.
              </p>
            </div>
          </div>
        </div>

        {/* Traceability Process */}
        <div className={`transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Traceability Process Flow</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {traceabilitySteps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto shadow-lg">
                  {step.icon}
                </div>
                <div className="text-sm font-semibold text-blue-600 mb-2">{step.stage}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className={`mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Benefits of Our Traceability System</h3>
            <p className="text-green-100 max-w-3xl mx-auto">
              Complete transparency and accountability in every aspect of our manufacturing process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description: "Immediate access to all quality control data and test results",
                icon: "🔍"
              },
              {
                title: "Compliance Verification",
                description: "Easy verification of standards compliance and certifications",
                icon: "✅"
              },
              {
                title: "Supply Chain Transparency",
                description: "Complete visibility into material sourcing and production history",
                icon: "🔗"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-green-100 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraceabilitySystem;