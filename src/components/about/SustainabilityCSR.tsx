import React from 'react';
import { Recycle, Zap, Users, GraduationCap, Heart, Leaf, TreePine, Droplets } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const SustainabilityCSR = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const initiatives = [
    {
      icon: <Recycle size={32} />,
      title: "Circular Economy",
      description: "75% recycled steel content reducing environmental impact",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-500"
    },
    {
      icon: <Zap size={32} />,
      title: "Energy Efficiency",
      description: "30% reduction in energy consumption through advanced technology",
      color: "from-yellow-400 to-orange-600",
      bgColor: "bg-yellow-500"
    },
    {
      icon: <Users size={32} />,
      title: "Local Employment",
      description: "500+ direct jobs created in Bengo Province",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Skills Development",
      description: "1000+ hours of technical training programs annually",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-500"
    },
    {
      icon: <Heart size={32} />,
      title: "Community Health",
      description: "Healthcare initiatives supporting local communities",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-500"
    },
    {
      icon: <TreePine size={32} />,
      title: "Reforestation",
      description: "Tree planting programs for carbon offset",
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-600"
    }
  ];

  const impactStats = [
    { value: "500+", label: "Local Jobs", icon: "👥" },
    { value: "75%", label: "Recycled Materials", icon: "♻️" },
    { value: "30%", label: "Energy Reduction", icon: "⚡" },
    { value: "1000+", label: "Training Hours", icon: "📚" }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <Leaf 
              size={20 + Math.random() * 20} 
              className="text-green-400 animate-pulse"
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Sustainability & CSR
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Building a sustainable future for Angola and beyond
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className={`relative w-16 h-16 ${initiative.bgColor} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                {initiative.icon}
                
                {/* Growing Effect */}
                <div className={`absolute inset-0 ${initiative.bgColor} rounded-xl animate-ping opacity-20 group-hover:opacity-40`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                {initiative.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {initiative.description}
              </p>

              {/* Leaf Animation */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Leaf size={20} className="text-green-400 animate-bounce" />
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className={`grid md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CSR Image Gallery */}
        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1400ms' }}>
          {[
            { 
              image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              title: "Community Development",
              description: "Supporting local infrastructure and education"
            },
            {
              image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              title: "Environmental Protection",
              description: "Sustainable manufacturing practices"
            },
            {
              image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              title: "Skills Training",
              description: "Technical education and capacity building"
            }
          ].map((item, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-xl font-bold mb-2 group-hover:text-green-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityCSR;