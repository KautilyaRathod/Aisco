import React from 'react';
import { MapPin, Users, Calendar, Award } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const WhoWeAre = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const stats = [
    { icon: <Calendar size={32} />, value: "30+", label: "Years Experience" },
    { icon: <Users size={32} />, value: "500+", label: "Employees" }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Video */}
          <div className={`relative transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="AISCO Steel Plant"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 border-4 border-blue-400/30 rounded-2xl animate-pulse" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-600">ISO 9001</div>
              <div className="text-gray-600">Certified Quality</div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Who We Are
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                AISCO – Angola Iron and Steel Corporation, LDA stands as Angola's premier steel manufacturer, 
                combining over three decades of group experience with cutting-edge European technology 
                to deliver world-class reinforcing steel bars.
              </p>
              
              <p>
                Located at <span className="notranslate">Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola</span>, our 
                state-of-the-art 400-hectare facility represents the pinnacle of modern steel 
                manufacturing in Africa. We are committed to building the infrastructure that 
                will support Angola's growth for generations to come.
              </p>
              
              <p>
                Our advanced manufacturing processes, including induction furnaces and 
                continuous casting technology, enable us to produce 300,000 metric tons 
                of premium Grade A500 NR reinforcing steel bars annually.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 800}ms` }}
                >
                  <div className="text-blue-600 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;