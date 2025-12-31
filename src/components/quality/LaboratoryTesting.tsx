import React from 'react';

const LaboratoryTesting = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            In-House Laboratory Testing
          </h2>
          <p className="text-xl text-gray-600">
            State-of-the-art equipment ensuring every product meets international standards
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Laboratory Visualization */}
          <div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="AISCO Quality Control Laboratory"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent" />
              
              {/* Lab Equipment Indicators */}
              <div className="absolute top-6 left-6 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="font-bold">Advanced Lab</span>
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
                  <div className="font-bold">99.9%</div>
                  <div className="text-xs">Accuracy</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-orange-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="font-bold">500+</div>
                  <div className="text-xs">Daily Tests</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-600 text-white p-4 rounded-xl">
                <span className="text-4xl">🧪</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Advanced Testing Facility</h3>
                <p className="text-blue-600 text-lg font-semibold">ISO-Standard Laboratory</p>
              </div>
            </div>
            
            <div className="text-lg text-gray-700 mb-8 leading-relaxed space-y-4">
              <p>
                Our in-house laboratory features <span className="text-blue-600 font-bold">state-of-the-art testing equipment</span> 
                including LECO analyzers, optical spectrometry systems, and automated dimensional inspection systems 
                for comprehensive quality control.
              </p>
              
              <p>
                Every batch undergoes <span className="text-green-600 font-bold">rigorous testing protocols</span> 
                covering chemical composition, mechanical properties, and geometric accuracy to ensure 
                compliance with international standards.
              </p>
            </div>

            {/* Lab Statistics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🧪</div>
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600 text-sm">Tests per Day</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-gray-600 text-sm">Testing Accuracy</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600 text-sm">Lab Equipment</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">👨‍🔬</div>
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-gray-600 text-sm">Quality Technicians</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Methods Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Comprehensive Testing Methods</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                🔬
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">LECO Analysis</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Advanced carbon and sulfur analysis for precise chemical composition</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Equipment:</span>
                  <span className="font-semibold text-gray-700">LECO CS844 Analyzer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Frequency:</span>
                  <span className="font-semibold text-gray-700">Every batch</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Accuracy:</span>
                  <span className="font-semibold text-green-600">±0.001%</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center text-white mb-4">
                📷
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Optical Spectrometry</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Comprehensive elemental analysis and composition verification</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Equipment:</span>
                  <span className="font-semibold text-gray-700">Advanced Spectrometer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Frequency:</span>
                  <span className="font-semibold text-gray-700">Continuous monitoring</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Accuracy:</span>
                  <span className="font-semibold text-green-600">±0.01%</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-4">
                ⚡
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Tensile Testing</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Mechanical property verification including yield and tensile strength</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Equipment:</span>
                  <span className="font-semibold text-gray-700">Universal Testing Machine</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Frequency:</span>
                  <span className="font-semibold text-gray-700">Per standard requirements</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Accuracy:</span>
                  <span className="font-semibold text-green-600">±1 MPa</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                📊
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Geometric Monitoring</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Camera-based dimensional accuracy and surface quality control</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Equipment:</span>
                  <span className="font-semibold text-gray-700">Vision Inspection System</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Frequency:</span>
                  <span className="font-semibold text-gray-700">Real-time</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Accuracy:</span>
                  <span className="font-semibold text-green-600">±0.1mm</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center text-white mb-4">
                🧪
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Bend Testing</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Ductility and workability assessment through controlled bending</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Equipment:</span>
                  <span className="font-semibold text-gray-700">Bend Test Apparatus</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Frequency:</span>
                  <span className="font-semibold text-gray-700">Sample basis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Accuracy:</span>
                  <span className="font-semibold text-green-600">180° standard</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center text-white mb-4">
                ⚙️
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Hardness Testing</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Surface hardness measurement for quality consistency</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Equipment:</span>
                  <span className="font-semibold text-gray-700">Rockwell Hardness Tester</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Frequency:</span>
                  <span className="font-semibold text-gray-700">Regular sampling</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Accuracy:</span>
                  <span className="font-semibold text-green-600">±2 HRC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Process Flow */}
        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quality Testing Process Flow</h3>
          
          <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="font-semibold text-gray-900">Sample Collection</div>
            </div>
            <div className="text-blue-400 text-2xl">→</div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="font-semibold text-gray-900">Chemical Analysis</div>
            </div>
            <div className="text-blue-400 text-2xl">→</div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="font-semibold text-gray-900">Mechanical Testing</div>
            </div>
            <div className="text-blue-400 text-2xl">→</div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="font-semibold text-gray-900">Dimensional Check</div>
            </div>
            <div className="text-blue-400 text-2xl">→</div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="font-semibold text-gray-900">Documentation</div>
            </div>
            <div className="text-blue-400 text-2xl">→</div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="font-semibold text-gray-900">Certification</div>
            </div>
          </div>
        </div>

        {/* Quality Assurance Promise */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Quality Promise</h3>
            <p className="text-green-100 mb-6 max-w-3xl mx-auto text-lg">
              Every AISCO rebar undergoes comprehensive testing to ensure it meets or exceeds 
              international standards. Our commitment to quality means you can trust our products 
              for your most critical construction projects.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-green-200">Batch Testing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-green-200">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-green-200">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaboratoryTesting;