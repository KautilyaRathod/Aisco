import React from 'react';
import { Microscope, Camera, FileCheck, Shield, Award, CheckCircle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const QualityControl = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const testingMethods = [
    {
      icon: <Microscope size={32} />,
      title: "LECO Analyzers",
      description: "Advanced carbon and sulfur analysis for chemical composition",
      frequency: "Every batch",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      icon: <Camera size={32} />,
      title: "Optical Spectrometry",
      description: "Precise elemental analysis and composition verification",
      frequency: "Continuous",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500"
    },
    {
      icon: <Shield size={32} />,
      title: "Geometric Accuracy",
      description: "Camera-based monitoring for dimensional precision",
      frequency: "Real-time",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500"
    },
    {
      icon: <FileCheck size={32} />,
      title: "Mechanical Testing",
      description: "Tensile strength and yield point verification",
      frequency: "Per standard",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500"
    }
  ];

  const qualityStandards = [
    { standard: "LNEC E 450-2017", description: "Portuguese National Laboratory Certification" },
    { standard: "NA 34:2016", description: "Angolan National Standard Compliance" },
    { standard: "ISO 9001", description: "Quality Management System" },
    { standard: "PDCA Cycle", description: "Continuous Improvement Methodology" }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            In-House Quality Control
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Advanced testing systems ensuring every product meets international standards
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Laboratory Image */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Quality Control Laboratory"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              
              {/* Lab Equipment Indicators */}
              <div className="absolute top-6 left-6 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Microscope size={20} />
                  <span className="font-bold">LECO Lab</span>
                </div>
              </div>
              
              <div className="absolute top-6 right-6 bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="font-bold">24/7</div>
                  <div className="text-xs">Testing</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-purple-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="font-bold">100%</div>
                  <div className="text-xs">Batch Tested</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-600 text-white p-4 rounded-xl">
                <Award size={48} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Advanced Testing Laboratory</h3>
                <p className="text-blue-600 text-lg font-semibold">State-of-the-Art Equipment</p>
              </div>
            </div>
            
            <div className="text-lg text-gray-700 mb-8 leading-relaxed space-y-4">
              <p>
                Our in-house laboratory features <span className="text-blue-600 font-bold">LECO analyzers</span> and 
                <span className="text-green-600 font-bold"> optical spectrometry systems</span> for precise 
                chemical composition analysis of every steel batch.
              </p>
              
              <p>
                <span className="text-purple-600 font-bold">Camera-based geometric monitoring</span> ensures 
                dimensional accuracy, while comprehensive mechanical testing verifies tensile strength 
                and yield properties according to international standards.
              </p>
            </div>

            {/* Quality Highlights */}
            <div className="space-y-4 mb-8">
              {[
                "Real-time chemical composition monitoring",
                "Automated dimensional accuracy verification",
                "Comprehensive mechanical property testing",
                "Traceability documentation system"
              ].map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testing Methods Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          {testingMethods.map((method, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className={`relative w-16 h-16 ${method.bgColor} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mx-auto`}>
                {method.icon}
                
                {/* Pulse Effect */}
                <div className={`absolute inset-0 ${method.bgColor} rounded-xl animate-ping opacity-20 group-hover:opacity-40`} />
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-blue-700 transition-colors">
                {method.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">
                {method.description}
              </p>
              <div className="text-center">
                <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  {method.frequency}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Standards */}
        <div className={`bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quality Standards & Certifications</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                  <Award size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{standard.standard}</h4>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PDCA Cycle */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1600ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">PDCA Continuous Improvement Cycle</h3>
          
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            {[
              { step: "PLAN", description: "Quality objectives and processes", color: "bg-blue-500" },
              { step: "DO", description: "Implement quality procedures", color: "bg-green-500" },
              { step: "CHECK", description: "Monitor and measure results", color: "bg-orange-500" },
              { step: "ACT", description: "Take corrective actions", color: "bg-purple-500" }
            ].map((phase, index) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <div className={`w-20 h-20 ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto shadow-lg`}>
                    {phase.step}
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{phase.step}</div>
                  <div className="text-gray-600 text-sm max-w-32">{phase.description}</div>
                </div>
                {index < 3 && (
                  <div className="text-gray-400 text-3xl">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;