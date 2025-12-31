import React from 'react';
import { Factory, Award, Truck, Wrench, Users, Zap } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const WhyChooseAISCO = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const advantages = [
    {
      icon: <Factory size={40} />,
      title: "Advanced Manufacturing Technology",
      description: "Large-scale production readiness for projects of any size",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      metric: "Scalable Production"
    },
    {
      icon: <Award size={40} />,
      title: "Certified Quality",
      description: "LNEC E 450-2017 & NA 34:2016 standards compliance",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      metric: "International Standards"
    },
    {
      icon: <Truck size={40} />,
      title: "Logistics Support",
      description: "Nationwide delivery across Angola and regional export",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500",
      metric: "Reliable Delivery"
    },
    {
      icon: <Wrench size={40} />,
      title: "Custom Sizes & Specs",
      description: "Reinforcing steel bars from 8mm to 32mm diameter",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      metric: "Flexible Options"
    },
    {
      icon: <Users size={40} />,
      title: "Expert Technical Support",
      description: "Dedicated team for consultation and project guidance",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500",
      metric: "Professional Service"
    },
    {
      icon: <Zap size={40} />,
      title: "Traceability System",
      description: "Complete documentation with heat numbers and batch data",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-500",
      metric: "Full Documentation"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Why Choose AISCO for Your Project?
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Trusted by 500+ construction companies across Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className={`relative w-20 h-20 ${advantage.bgColor} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mx-auto`}>
                {advantage.icon}
                
                {/* Pulse Effect */}
                <div className={`absolute inset-0 ${advantage.bgColor} rounded-xl animate-ping opacity-20 group-hover:opacity-40`} />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {advantage.description}
                </p>
                <div className="text-sm font-semibold bg-gray-100 text-gray-600 px-4 py-2 rounded-full inline-block group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                  {advantage.metric}
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className={`mt-16 bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">AISCO by the Numbers</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Completed", icon: "🏗️" },
              { value: "30+", label: "Years Group Experience", icon: "📅" },
              { value: "24/7", label: "Customer Support", icon: "🕒" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className={`mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1400ms' }}>
          <div className="text-center">
            <div className="text-6xl mb-4">💬</div>
            <blockquote className="text-2xl italic mb-6 max-w-4xl mx-auto">
              "AISCO's Grade A500 NR rebar has been instrumental in our major construction projects. 
              The quality consistency and reliable delivery have made them our preferred steel supplier in Angola."
            </blockquote>
            <div className="text-blue-200 font-semibold">Construction Industry Partner</div>
            <div className="text-blue-300 text-sm">Major Infrastructure Project</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAISCO;