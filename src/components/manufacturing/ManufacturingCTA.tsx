import React from 'react';
import { ArrowRight, Calendar, Download, Phone, MapPin, Clock } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ManufacturingCTA = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const ctaOptions = [
    {
      icon: <Calendar size={24} />,
      title: "Request a Factory Tour",
      description: "Experience our world-class manufacturing facility firsthand",
      action: "Schedule Visit",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Download size={24} />,
      title: "Download Process Sheet",
      description: "Detailed technical documentation of our manufacturing process",
      action: "Get Document",
      color: "from-green-500 to-green-600"
    }
  ];

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      label: "Direct Line",
      value: "+244 931977848",
      action: "tel:+244931977848"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola.",
      action: "#"
    },
    {
      icon: <Clock size={20} />,
      label: "Tour Hours",
      value: "Mon-Fri 9AM-4PM",
      action: "#"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        {/* Spotlight Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Industrial Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Work with a World-Class Manufacturer
          </h2>
          <p className={`text-xl text-blue-100 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Need consistent, certified rebar for your next project? Explore our technical 
            capabilities or request a production tour to see our advanced manufacturing in action.
          </p>
        </div>

        {/* Main CTA Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`bg-gradient-to-r ${option.color} text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-500`}>
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                      {option.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-blue-100 mb-8 leading-relaxed group-hover:text-white transition-colors">
                  {option.description}
                </p>
                
                <button className="w-full bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center space-x-3 group/btn">
                  <span>{option.action}</span>
                  <ArrowRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.action}
              className="group block text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-blue-300 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {contact.icon}
              </div>
              <h4 className="font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                {contact.label}
              </h4>
              <div className={`text-blue-100 group-hover:text-white transition-colors ${contact.value.includes('Muceque') ? 'notranslate' : ''}`}>{contact.value}</div>
            </a>
          ))}
        </div>

        {/* Manufacturing Highlights */}
        <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Why Choose AISCO Manufacturing?</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "European Technology", description: "Advanced equipment from leading manufacturers", icon: "🇪🇺" },
              { title: "Full Automation", description: "95% automated production line", icon: "🤖" },
              { title: "Quality Assured", description: "100% batch testing & certification", icon: "✅" },
              { title: "High Capacity", description: "Advanced production capabilities", icon: "🏭" }
            ].map((highlight, index) => (
              <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-3xl mb-3">{highlight.icon}</div>
                <h4 className="font-bold text-white mb-2">{highlight.title}</h4>
                <p className="text-blue-200 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1600ms' }}>
          <p className="text-blue-200 mb-6 text-lg">
            Ready to partner with Angola's most advanced steel manufacturer?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3 group">
              <Calendar size={24} />
              <span>Schedule Factory Visit</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3 group">
              <Phone size={24} />
              <span>Contact Engineering Team</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingCTA;