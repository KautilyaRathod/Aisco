import React from 'react';
import { Brain, Microscope, Leaf, Truck, Zap, Eye, Thermometer, Target, Recycle, Droplets, Wind } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ManufacturingIntelligence = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const intelligenceCategories = [
    {
      icon: <Brain size={48} />,
      title: "🧠 Smart Automation & Digitalization",
      color: "from-blue-600 to-purple-600",
      bgColor: "bg-blue-600",
      items: [
        {
          icon: <Zap size={24} />,
          title: "Level 2 Automation Systems",
          description: "Integrate real-time process control, predictive maintenance, and energy optimization"
        },
        {
          icon: <Brain size={24} />,
          title: "Digital Twin Technology",
          description: "Simulates plant operations for scenario testing and continuous improvement"
        },
        {
          icon: <Target size={24} />,
          title: "AI-based Quality Prediction Models",
          description: "Use machine learning to forecast defects and optimize rolling parameters"
        }
      ]
    },
    {
      icon: <Microscope size={48} />,
      title: "🧪 Quality & Inspection Upgrades",
      color: "from-green-600 to-teal-600",
      bgColor: "bg-green-600",
      items: [
        {
          icon: <Eye size={24} />,
          title: "Online Surface Inspection Systems",
          description: "Detect surface defects in real time during rolling or casting"
        },
        {
          icon: <Thermometer size={24} />,
          title: "Thermal Imaging & Pyrometry",
          description: "Enhance temperature control in ladle furnace and CCM discharge zones"
        },
        {
          icon: <Target size={24} />,
          title: "Laser-based Dimensional Control",
          description: "Ensures tight tolerances in finished products"
        }
      ]
    },
    {
      icon: <Leaf size={48} />,
      title: "🌱 Sustainability & Efficiency",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500",
      items: [
        {
          icon: <Zap size={24} />,
          title: "Green Energy & Sustainable Environment",
          description: "Using Hydro power plants' energy with Energy efficient technology. Sustainable environment consciousness through scrap recycling"
        },
        {
          icon: <Recycle size={24} />,
          title: "Waste Heat Recovery Systems",
          description: "Capture and reuse energy from EAF and ladle furnace operations"
        },
        {
          icon: <Droplets size={24} />,
          title: "Water Treatment & Recycling Units",
          description: "Advanced water-treatment systems for sustainable operations"
        },
        {
          icon: <Wind size={24} />,
          title: "Low-NOx Burners & Eco-Friendly Refractories",
          description: "Reduce emissions and improve furnace longevity"
        }
      ]
    },
    {
      icon: <Truck size={48} />,
      title: "🏭 Logistics & Material Handling",
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-600",
      items: [
        {
          icon: <Truck size={24} />,
          title: "Automated Guided Vehicles (AGVs)",
          description: "For ladle and billet transport, improving safety and throughput"
        },
        {
          icon: <Zap size={24} />,
          title: "Semi-Gantry Cranes for Maintenance",
          description: "Advanced setups for efficient maintenance operations"
        }
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Manufacturing Intelligence
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Advanced technologies driving the future of steel manufacturing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {intelligenceCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 hover:shadow-2xl hover:scale-105 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200 + 400}ms` }}
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="text-white/90">Advanced manufacturing solutions</p>
                  </div>
                </div>
              </div>

              {/* Category Items */}
              <div className="p-6">
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105 ${
                        isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                      }`}
                      style={{ transitionDelay: `${categoryIndex * 200 + itemIndex * 100 + 600}ms` }}
                    >
                      <div className={`${category.bgColor} text-white p-2 rounded-lg flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Manufacturing Excellence?</h3>
            <p className="text-xl mb-6">Discover how our intelligent manufacturing systems can transform your steel production</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More About Our Technology
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingIntelligence;
