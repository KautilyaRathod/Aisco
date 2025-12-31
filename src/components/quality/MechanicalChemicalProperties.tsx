import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const MechanicalChemicalProperties = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [activeProperty, setActiveProperty] = useState(0);
  const [animatedValues, setAnimatedValues] = useState<{[key: string]: number}>({});

  const mechanicalProperties = [
    {
      property: "Yield Strength",
      value: 500,
      unit: "MPa",
      minimum: 500,
      typical: 520,
      description: "Minimum stress at which permanent deformation begins",
      color: "bg-blue-500"
    },
    {
      property: "Tensile Strength",
      value: 550,
      unit: "MPa", 
      minimum: 550,
      typical: 580,
      description: "Maximum stress the material can withstand before breaking",
      color: "bg-green-500"
    },
    {
      property: "Elongation",
      value: 12,
      unit: "%",
      minimum: 12,
      typical: 15,
      description: "Percentage increase in length before fracture",
      color: "bg-orange-500"
    },
    {
      property: "Bend Test",
      value: 180,
      unit: "°",
      minimum: 180,
      typical: 180,
      description: "Angle of bend without cracking or breaking",
      color: "bg-purple-500"
    }
  ];

  const chemicalComposition = [
    {
      element: "Carbon (C)",
      range: "≤ 0.22",
      typical: "0.18-0.20",
      purpose: "Provides strength and hardness",
      color: "from-gray-600 to-gray-800"
    },
    {
      element: "Manganese (Mn)",
      range: "≤ 1.60",
      typical: "1.20-1.40",
      purpose: "Improves hardenability and strength",
      color: "from-red-500 to-red-700"
    },
    {
      element: "Phosphorus (P)",
      range: "≤ 0.050",
      typical: "0.020-0.035",
      purpose: "Controlled for ductility",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      element: "Sulfur (S)",
      range: "≤ 0.050",
      typical: "0.015-0.025",
      purpose: "Minimized for better workability",
      color: "from-green-500 to-green-700"
    },
    {
      element: "Silicon (Si)",
      range: "≤ 0.55",
      typical: "0.20-0.40",
      purpose: "Deoxidizer and strength enhancer",
      color: "from-blue-500 to-blue-700"
    },
    {
      element: "Nitrogen (N)",
      range: "≤ 0.012",
      typical: "0.008-0.010",
      purpose: "Controlled for optimal properties",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const complianceStandards = [
    {
      standard: "LNEC E 450-2017",
      requirement: "Yield ≥ 500 MPa",
      status: "Compliant",
      icon: <CheckCircle size={20} className="text-green-600" />
    },
    {
      standard: "NA 34:2016",
      requirement: "Tensile ≥ 550 MPa",
      status: "Compliant", 
      icon: <CheckCircle size={20} className="text-green-600" />
    },
    {
      standard: "ISO 6935-2",
      requirement: "Elongation ≥ 12%",
      status: "Compliant",
      icon: <CheckCircle size={20} className="text-green-600" />
    },
    {
      standard: "ASTM A615",
      requirement: "Bend Test 180°",
      status: "Compliant",
      icon: <CheckCircle size={20} className="text-green-600" />
    }
  ];

  useEffect(() => {
    if (isInView) {
      mechanicalProperties.forEach((prop, index) => {
        setTimeout(() => {
          let currentValue = 0;
          const increment = prop.value / 50;
          const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= prop.value) {
              currentValue = prop.value;
              clearInterval(timer);
            }
            setAnimatedValues(prev => ({
              ...prev,
              [prop.property]: Math.floor(currentValue)
            }));
          }, 20);
        }, index * 200);
      });
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Mechanical & Chemical Properties
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Comprehensive property analysis ensuring superior performance
          </p>
        </div>

        {/* Mechanical Properties */}
        <div className={`mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Mechanical Properties</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {mechanicalProperties.map((prop, index) => (
              <div
                key={index}
                className={`group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                  activeProperty === index ? 'ring-4 ring-blue-300 scale-105' : ''
                }`}
                onClick={() => setActiveProperty(index)}
              >
                {/* Circular Progress */}
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
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - (animatedValues[prop.property] || 0) / prop.value)}`}
                      className={`${prop.color.replace('bg-', 'text-')} transition-all duration-1000`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">
                        {animatedValues[prop.property] || 0}
                      </div>
                      <div className="text-xs text-gray-600">{prop.unit}</div>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-bold text-gray-900 mb-2">{prop.property}</h4>
                <p className="text-gray-600 text-sm">{prop.description}</p>
                
                {activeProperty === index && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg animate-fadeIn">
                    <div className="text-sm space-y-1">
                      <div><strong>Minimum:</strong> {prop.minimum} {prop.unit}</div>
                      <div><strong>Typical:</strong> {prop.typical} {prop.unit}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chemical Composition */}
        <div className={`mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Chemical Composition (% by weight)</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chemicalComposition.map((element, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className={`w-full h-2 bg-gradient-to-r ${element.color} rounded-full mb-4 group-hover:h-3 transition-all duration-300`} />
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">{element.element}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Range:</span>
                    <span className="font-semibold text-gray-900">{element.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Typical:</span>
                    <span className="font-semibold text-blue-600">{element.typical}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-xs mt-3 leading-relaxed">{element.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Table */}
        <div className={`bg-white rounded-2xl shadow-lg p-8 mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Standards Compliance</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-gray-900 font-semibold">Standard</th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Requirement</th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Status</th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Compliance</th>
                </tr>
              </thead>
              <tbody>
                {complianceStandards.map((standard, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">{standard.standard}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{standard.requirement}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {standard.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">{standard.icon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Property Comparison Chart */}
        <div className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1600ms' }}>
          <h3 className="text-2xl font-bold mb-8 text-center">AISCO vs Standard Requirements</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Mechanical Properties Comparison</h4>
              <div className="space-y-4">
                {mechanicalProperties.slice(0, 2).map((prop, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{prop.property}</span>
                      <span>{prop.typical} {prop.unit}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white rounded-full h-2 transition-all duration-1000"
                        style={{ 
                          width: `${(prop.typical / (prop.typical * 1.2)) * 100}%`,
                          transitionDelay: `${index * 200 + 1800}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Quality Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Consistency", value: "99.8%" },
                  { label: "Compliance", value: "100%" },
                  { label: "Reliability", value: "99.9%" },
                  { label: "Traceability", value: "100%" }
                ].map((metric, index) => (
                  <div key={index} className="text-center p-3 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-blue-200 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicalChemicalProperties;