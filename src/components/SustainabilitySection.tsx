import React from 'react';
import { Recycle, Zap, Users, GraduationCap, Heart, Leaf } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const SustainabilitySection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const initiatives = [
    {
      icon: <Recycle size={32} />,
      title: "Recycled Steel Use",
      description: "Utilizing recycled materials to reduce environmental impact and promote circular economy"
    },
    {
      icon: <Zap size={32} />,
      title: "Energy Efficiency",
      description: "Advanced technology reducing energy consumption and carbon footprint"
    },
    {
      icon: <Users size={32} />,
      title: "Local Job Creation",
      description: "Providing employment opportunities and skills development in Angola"
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Education & Training",
      description: "Investing in technical education and professional development programs"
    },
    {
      icon: <Heart size={32} />,
      title: "Community Welfare",
      description: "Supporting local communities through healthcare and infrastructure projects"
    },
    {
      icon: <Leaf size={32} />,
      title: "Environmental Protection",
      description: "Implementing sustainable practices and environmental management systems"
    }
  ];

  return (
    <section id="sustainability" ref={ref} className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              <div className="text-green-600 mb-6 flex justify-center">
                {initiative.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{initiative.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{initiative.description}</p>
            </div>
          ))}
        </div>

        {/* CSR Image Gallery */}
        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Community Development"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="text-white p-4">
                <h4 className="font-semibold">Community Development</h4>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Environmental Protection"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="text-white p-4">
                <h4 className="font-semibold">Environmental Protection</h4>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Education Programs"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="text-white p-4">
                <h4 className="font-semibold">Education Programs</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-16 grid md:grid-cols-4 gap-8 text-center transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1400ms' }}>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Local Jobs Created</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
            <div className="text-gray-600">Recycled Materials</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
            <div className="text-gray-600">Energy Reduction</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-600">Training Hours</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;