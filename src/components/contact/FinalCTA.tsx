import React from 'react';
import { ArrowRight, Phone, MessageCircle, Calendar, FileText } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const FinalCTA = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20" />
        {/* Metallic Wave Animation */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse" />
        </div>
        
        {/* Industrial Particles */}
        {[...Array(20)].map((_, i) => (
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
          <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Let's Build the Future Together
          </h2>
          <p className={`text-2xl text-blue-100 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Need Certified Rebar for Your Project?
          </p>
          <p className={`text-lg text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Partner with Angola's most trusted steel manufacturer. From technical consultation 
            to delivery, we're here to support your construction success.
          </p>
        </div>

        {/* Main CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-600 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-4">
            <FileText size={28} />
            <span>Request a Quote</span>
            <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
            {/* Ripple Effect */}
            <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
          </button>
          
          <button className="group border-3 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-4">
            <Calendar size={28} className="group-hover:scale-110 transition-transform" />
            <span>Book a Plant Visit</span>
          </button>
        </div>

        {/* Quick Contact Options */}
        <div className={`grid md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          {[
            {
              icon: <Phone size={24} />,
              title: "Call Direct",
              subtitle: "+244 931977848",
              action: "tel:+244931977848",
              color: "bg-blue-600"
            },
            {
              icon: <MessageCircle size={24} />,
              title: "WhatsApp Now",
              subtitle: "Instant Response",
              action: "https://wa.me/244923456789",
              color: "bg-green-600"
            },
            {
              icon: <FileText size={24} />,
              title: "Email Sales",
              subtitle: "sales@aisco.com.co",
              action: "mailto:sales@aisco.com.co",
              color: "bg-purple-600"
            },
            {
              icon: <Calendar size={24} />,
              title: "Schedule Meeting",
              subtitle: "Book Consultation",
              action: "#",
              color: "bg-orange-600"
            }
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.action}
              className={`group block text-center p-6 ${contact.color} rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="text-white mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {contact.icon}
              </div>
              <h4 className="font-bold text-white mb-1">{contact.title}</h4>
              <p className={`text-blue-100 text-sm ${contact.subtitle.includes('@') ? 'notranslate' : ''}`}>{contact.subtitle}</p>
            </a>
          ))}
        </div>

        {/* Company Promise */}
        <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Why Choose AISCO?</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "30+ Years Experience", description: "Proven track record in steel manufacturing", icon: "🏭" },
              { title: "International Standards", description: "LNEC and NA certified quality", icon: "🏆" },
              { title: "24/7 Support", description: "Always available for your project needs", icon: "🕒" },
              { title: "Local Expertise", description: "Understanding Angola's construction requirements", icon: "🇦🇴" }
            ].map((promise, index) => (
              <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-3xl mb-3">{promise.icon}</div>
                <h4 className="font-bold text-white mb-2">{promise.title}</h4>
                <p className="text-blue-200 text-sm">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="text-4xl font-bold text-orange-400 mb-4 animate-pulse">
            BUILD FOR GENERATIONS
          </div>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Ready to start your next project with certified, premium steel? 
            Our team is standing by to support your construction success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;