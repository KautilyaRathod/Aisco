import React from 'react';
import { Eye, Target, Lightbulb } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const VisionMission = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const cards = [
    {
      icon: <Eye size={48} />,
      title: "Our Vision",
      description: "To be Africa's premier steel manufacturer, setting the standard for quality, innovation, and sustainable development across the continent while building the infrastructure that will support generations of growth.",
      gradient: "from-blue-500 to-blue-700",
      iconColor: "text-blue-400"
    },
    {
      icon: <Target size={48} />,
      title: "Our Mission", 
      description: "Delivering world-class reinforcing steel through cutting-edge technology, rigorous quality control, and a deep commitment to our customers, communities, and a sustainable future.",
      gradient: "from-indigo-500 to-purple-700",
      iconColor: "text-indigo-400"
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Our Purpose",
      description: "To transform Angola's infrastructure and industry through high-quality steel, local empowerment, and global ambition.",
      gradient: "from-purple-500 to-pink-700", 
      iconColor: "text-purple-400"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-white mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Our Foundation
          </h2>
          <p className={`text-xl text-gray-300 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            The principles that drive our excellence and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 300 + 400}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:rotate-1">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`${card.iconColor} mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  {card.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {card.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;