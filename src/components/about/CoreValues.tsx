import React from 'react';
import { Shield, Award, Users, Leaf, Lightbulb, Heart, Zap } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const CoreValues = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const values = [
    {
      icon: <Shield size={32} />,
      title: "Safety First",
      description: "Uncompromising commitment to workplace safety and employee wellbeing",
      color: "bg-red-500"
    },
    {
      icon: <Award size={32} />,
      title: "Quality Excellence", 
      description: "Delivering products that exceed international standards and expectations",
      color: "bg-blue-500"
    },
    {
      icon: <Leaf size={32} />,
      title: "Environmental Responsibility",
      description: "Sustainable practices that protect our planet for future generations",
      color: "bg-green-500"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "Embracing cutting-edge technology and continuous improvement",
      color: "bg-yellow-500"
    },
    {
      icon: <Heart size={32} />,
      title: "Integrity",
      description: "Honest, transparent, and ethical business practices in all we do",
      color: "bg-purple-500"
    },
    {
      icon: <Users size={32} />,
      title: "Community Development",
      description: "Investing in local communities and fostering economic growth",
      color: "bg-indigo-500"
    },
    {
      icon: <Zap size={32} />,
      title: "Operational Excellence",
      description: "Maximizing efficiency while maintaining the highest quality standards",
      color: "bg-orange-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-gray-50/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Our Core Values
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            The principles that guide every decision and action at AISCO
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 hover:scale-105 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
                {/* Steel Texture Overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-50/0 via-gray-100/20 to-gray-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Container */}
                <div className={`relative w-16 h-16 ${value.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  {value.icon}
                  
                  {/* Pulse Effect */}
                  <div className={`absolute inset-0 ${value.color} rounded-lg animate-ping opacity-20 group-hover:opacity-40`} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                  {value.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;