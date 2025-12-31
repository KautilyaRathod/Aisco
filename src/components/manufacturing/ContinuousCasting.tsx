import React from 'react';
import { Cog, Settings, BarChart3, Award } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ContinuousCasting = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const castingFeatures = [
    {
      icon: <Settings size={32} />,
      title: "Precision Billet Dimensions",
      description: "Exact dimensional control for consistent quality",
      color: "text-blue-600"
    },
    {
      icon: <Cog size={32} />,
      title: "Fully Automated Casting",
      description: "Computer-controlled process for optimal efficiency",
      color: "text-green-600"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Reduced Material Loss",
      description: "Minimal waste through advanced casting technology",
      color: "text-purple-600"
    },
    {
      icon: <Award size={32} />,
      title: "Advanced Technology",
      description: "Italian engineering excellence in steel casting",
      color: "text-orange-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Casting with Advanced CCM
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Advanced Continuous Casting Machine from Italian engineering leader
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* CCM Visualization */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              {/* Main CCM Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Continuous Casting Machine"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                
                {/* Advanced Technology Badge */}
                <div className="absolute top-6 left-6 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Award size={20} />
                    <span className="font-bold">Advanced CCM</span>
                  </div>
                </div>
                
                {/* Temperature Indicator */}
                <div className="absolute top-6 right-6 bg-orange-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <div className="text-center">
                    <div className="font-bold">1200°C</div>
                    <div className="text-xs">Casting Temp</div>
                  </div>
                </div>
                
                {/* Billet Output Indicator */}
                <div className="absolute bottom-6 left-6 bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <div className="text-center">
                    <div className="font-bold">Continuous</div>
                    <div className="text-xs">Billet Output</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Animation */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-600 text-white p-4 rounded-xl">
                <Cog size={48} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Continuous Casting Excellence</h3>
                <p className="text-blue-600 text-lg font-semibold">Advanced Technology</p>
              </div>
            </div>
            
            <div className="text-lg text-gray-700 mb-8 leading-relaxed space-y-4">
              <p>
                Our <span className="text-blue-600 font-bold">Continuous Casting Machine (CCM)</span> from 
                Advanced continuous casting technology transforms molten steel into 
                high-quality billets with exceptional precision and consistency.
              </p>
              
              <p>
                The advanced CCM technology ensures <span className="text-green-600 font-bold">dimensional accuracy</span>, 
                <span className="text-purple-600 font-bold"> reduced material waste</span>, and 
                <span className="text-orange-600 font-bold"> superior surface quality</span> in every billet produced.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {castingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 600}ms` }}
                >
                  <div className={`${feature.color} mb-4 flex justify-center`}>
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">{feature.title}</h4>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Technical Specs */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">CCM Specifications</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Casting Speed:</strong> Variable Control</div>
                <div><strong>Billet Size:</strong> Multiple Dimensions</div>
                <div><strong>Cooling System:</strong> Water Spray</div>
                <div><strong>Control System:</strong> Automated PLC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Visualization */}
        <div className={`mt-20 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Continuous Casting Process</h3>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-wrap justify-center items-center space-x-6 space-y-4">
              {[
                { step: "Molten Steel Input", temp: "1550°C", color: "bg-red-500" },
                { step: "Mold Cooling", temp: "1200°C", color: "bg-orange-500" },
                { step: "Secondary Cooling", temp: "800°C", color: "bg-yellow-500" },
                { step: "Billet Formation", temp: "600°C", color: "bg-green-500" },
                { step: "Cutting & Handling", temp: "Ambient", color: "bg-blue-500" }
              ].map((process, index) => (
                <React.Fragment key={index}>
                  <div className="text-center">
                    <div className={`w-16 h-16 ${process.color} rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto`}>
                      {index + 1}
                    </div>
                    <div className="font-semibold text-gray-900 text-sm">{process.step}</div>
                    <div className="text-gray-600 text-xs">{process.temp}</div>
                  </div>
                  {index < 4 && (
                    <div className="text-gray-400 text-2xl">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinuousCasting;