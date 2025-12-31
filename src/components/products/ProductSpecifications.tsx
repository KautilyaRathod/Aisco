import React, { useState } from 'react';
import { Ruler, Weight, Tag, Award, FileText, Zap } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ProductSpecifications = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [hoveredSpec, setHoveredSpec] = useState<number | null>(null);

  const specifications = [
    {
      icon: <Ruler size={32} />,
      title: "Diameter Range",
      value: "8 mm – 32 mm",
      description: "Available in standard construction diameters",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      icon: <Weight size={32} />,
      title: "Bundle Weight",
      value: "2 MT",
      description: "Optimized for efficient handling and transport",
      color: "from-green-500 to-green-600", 
      bgColor: "bg-green-500"
    },
    {
      icon: <Ruler size={32} />,
      title: "Bundle Length",
      value: "12 meters",
      description: "Standard length for construction applications",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500"
    },
    {
      icon: <Award size={32} />,
      title: "Standards",
      value: "LNEC E 450-2017 & NA 34:2016",
      description: "International and national compliance",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500"
    },
    {
      icon: <Tag size={32} />,
      title: "Labeling",
      value: "Traceability",
      description: "Diameter, Heat Number, Grade, Standard",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500"
    },
    {
      icon: <Zap size={32} />,
      title: "Material",
      value: "Recycled & Refined Steel",
      description: "Sustainable production with premium quality",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500"
    }
  ];

  const mechanicalProperties = [
    { property: "Yield Strength", value: "≥ 500 MPa", unit: "N/mm²" },
    { property: "Tensile Strength", value: "≥ 550 MPa", unit: "N/mm²" },
    { property: "Elongation", value: "≥ 12%", unit: "A₅" },
    { property: "Bend Test", value: "180°", unit: "No cracks" }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Product Specifications
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Detailed technical specifications for AISCO Grade A500 NR rebars
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specifications.map((spec, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
              onMouseEnter={() => setHoveredSpec(index)}
              onMouseLeave={() => setHoveredSpec(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className={`relative w-16 h-16 ${spec.bgColor} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                {spec.icon}
                
                {/* Pulse Effect */}
                <div className={`absolute inset-0 ${spec.bgColor} rounded-xl animate-ping opacity-20 group-hover:opacity-40`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {spec.title}
              </h3>
              <div className="text-2xl font-bold text-blue-600 mb-3">{spec.value}</div>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                {spec.description}
              </p>

              {/* Hover Tooltip */}
              {hoveredSpec === index && (
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-fadeIn">
                  Hover for details
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mechanical Properties Table */}
        <div className={`bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mechanical Properties</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-blue-200">
                  <th className="text-left py-4 px-6 text-gray-900 font-semibold">Property</th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Minimum Value</th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Unit</th>
                </tr>
              </thead>
              <tbody>
                {mechanicalProperties.map((prop, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-white/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">{prop.property}</td>
                    <td className="py-4 px-6 text-center font-bold text-blue-600">{prop.value}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{prop.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chemical Composition */}
        <div className={`mt-12 bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1400ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Chemical Composition (% by weight)</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { element: "Carbon (C)", range: "≤ 0.22" },
              { element: "Manganese (Mn)", range: "≤ 1.60" },
              { element: "Phosphorus (P)", range: "≤ 0.050" },
              { element: "Sulfur (S)", range: "≤ 0.050" }
            ].map((comp, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="font-bold text-gray-900 mb-2">{comp.element}</div>
                <div className="text-2xl font-bold text-blue-600">{comp.range}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecifications;