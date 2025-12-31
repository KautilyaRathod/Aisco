import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const VisionMissionSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const values = [
    {
      icon: <Eye size={48} />,
      title: "Our Vision",
      description: "To be Africa's premier steel manufacturer, setting the standard for quality, innovation, and sustainable development across the continent."
    },
    {
      icon: <Target size={48} />,
      title: "Our Mission",
      description: "Delivering world-class reinforcing steel bars through cutting-edge technology, exceptional quality control, and unwavering commitment to our customers and communities."
    },
    {
      icon: <Heart size={48} />,
      title: "Core Values",
      description: "Safety first, quality excellence, environmental responsibility, innovation, integrity, and community development guide everything we do."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Our Foundation
          </h2>
          <p className={`text-xl text-gray-300 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Built on principles that drive excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              <div className="text-blue-400 mb-6 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '1000ms' }}>
            Discover Our Standards
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;