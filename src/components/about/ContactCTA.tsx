import React from 'react';
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ContactCTA = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        {/* Spotlight Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Partner with Angola's Steel Leader
          </h2>
          <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Ready to build your next project with premium Grade A500 NR reinforcing steel bars? 
            Contact our team for expert consultation and competitive pricing.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-400 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3">
            <span>Request Quote</span>
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            {/* Ripple Effect */}
            <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
          </button>
          
          <button className="group border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3">
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Phone size={32} />,
              title: "Call Us",
              info: "+244 931977848",
              subInfo: "Available 24/7",
              action: "tel:+244931977848"
            },
            {
              icon: <Mail size={32} />,
              title: "Email Us", 
              info: "info@aisco.com.co",
              subInfo: "Quick Response",
              action: "mailto:info@aisco.com.co"
            },
            {
              icon: <MapPin size={32} />,
              title: "Visit Us",
              info: "Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola.",
              subInfo: "Main Manufacturing Facility",
              action: "#"
            }
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.action}
              className={`group block text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200 + 600}ms` }}
            >
              {/* Icon with Pulse Effect */}
              <div className="relative text-blue-300 mb-4 flex justify-center">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <div className="absolute inset-0 text-blue-300 animate-ping opacity-20 group-hover:opacity-40">
                  {contact.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                {contact.title}
              </h3>
              <div className={`text-blue-200 font-semibold mb-1 ${contact.info.includes('@') || contact.info.includes('Muceque') ? 'notranslate' : ''}`}>{contact.info}</div>
              <div className="text-gray-400 text-sm">{contact.subInfo}</div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <p className="text-blue-200 mb-4">Quick Contact Options:</p>
          <div className="flex justify-center space-x-8 text-white">
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <span>Direct Line</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle size={20} />
              <span>WhatsApp Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;