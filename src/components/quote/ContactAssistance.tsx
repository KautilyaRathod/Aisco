import React from 'react';
import { Phone, MessageCircle, Mail, Clock, Headphones, Users } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ContactAssistance = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const contactOptions = [
    {
      icon: <Phone size={32} />,
      title: "Call Our Sales Team",
      subtitle: "+244 950 300 000",
      description: "Speak directly with our sales experts for immediate assistance",
      action: "tel:+244950300000",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      available: "Mon-Fri 8AM-6PM"
    },
    {
      icon: <MessageCircle size={32} />,
      title: "WhatsApp Support",
      subtitle: "Instant Messaging",
      description: "Quick responses for urgent questions and clarifications",
      action: "https://wa.me/244923456789",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      available: "24/7 Available"
    },
    {
      icon: <Mail size={32} />,
      title: "Email Sales Team",
      subtitle: "sales@aisco.com.co",
      description: "Detailed inquiries and document sharing",
      action: "mailto:sales@aisco.com.co",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      available: "24h Response"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sticky Help Banner */}
        <div className={`bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 mb-16 text-white text-center transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Headphones size={32} className="animate-bounce" />
            <h2 className="text-2xl font-bold">Need Help with This Form?</h2>
          </div>
          <p className="text-orange-100 text-lg mb-4">
            Speak with our sales team directly for personalized assistance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+244950300000"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>+244 950 300 000</span>
            </a>
            <a 
              href="https://wa.me/244923456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Get Expert Assistance
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Our experienced sales team is ready to help with your quote request
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.action}
              target={option.action.startsWith('http') ? '_blank' : undefined}
              rel={option.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className={`relative w-20 h-20 ${option.bgColor} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mx-auto`}>
                {option.icon}
                
                {/* Pulse Effect */}
                <div className={`absolute inset-0 ${option.bgColor} rounded-xl animate-ping opacity-20 group-hover:opacity-40`} />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {option.title}
                </h3>
                <div className={`text-lg font-semibold text-blue-600 mb-3 ${option.subtitle.includes('@') ? 'notranslate' : ''}`}>{option.subtitle}</div>
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {option.description}
                </p>
                <div className="text-sm font-semibold bg-gray-100 text-gray-600 px-4 py-2 rounded-full inline-block group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                  {option.available}
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          ))}
        </div>

        {/* Support Team Information */}
        <div className={`bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <div className="text-center mb-8">
            <Users size={48} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Sales Support Team</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our experienced sales professionals understand the construction industry and can help you 
              select the right steel products for your specific project requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Consultation",
                description: "Expert guidance on product specifications and applications",
                icon: "🔧"
              },
              {
                title: "Project Planning",
                description: "Assistance with quantity calculations and delivery scheduling",
                icon: "📋"
              },
              {
                title: "Competitive Pricing",
                description: "Best rates for bulk orders and long-term partnerships",
                icon: "💰"
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time Guarantee */}
        <div className={`mt-16 bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <Clock size={48} className="text-green-600 mx-auto mb-4 animate-bounce" />
          <h3 className="text-2xl font-bold text-green-800 mb-4">24-Hour Response Guarantee</h3>
          <p className="text-green-700 mb-6 max-w-3xl mx-auto text-lg">
            We guarantee a response to all quote requests within 24 hours with detailed pricing, 
            technical specifications, and delivery options tailored to your project needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">24h</div>
              <div className="text-green-700 text-sm">Response Time</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-green-700 text-sm">Quote Accuracy</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">30</div>
              <div className="text-green-700 text-sm">Days Valid</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAssistance;