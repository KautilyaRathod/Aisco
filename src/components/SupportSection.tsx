import React from 'react';
import { MessageCircle, Truck, FileText, Phone, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const SupportSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const supportServices = [
    {
      icon: <MessageCircle size={32} />,
      title: "Technical Consultation",
      description: "Expert advice on product selection and application"
    },
    {
      icon: <Truck size={32} />,
      title: "Logistics Support",
      description: "Efficient delivery and supply chain management"
    },
    {
      icon: <FileText size={32} />,
      title: "Documentation",
      description: "Complete certification and traceability records"
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Customer Support
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-blue-100 mb-4 sm:mb-8 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Need help choosing the right rebar?
          </p>
          <p className={`text-sm sm:text-base md:text-lg text-blue-100 transition-all duration-1000 delay-400 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Contact our experts for technical advice, logistics, and after-sales support.
          </p>
        </div>

        {/* Support Services */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {supportServices.map((service, index) => (
            <div
              key={index}
              className={`text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200 + 600}ms` }}
            >
              <div className="text-white mb-3 sm:mb-4 flex justify-center">
                <div className="w-8 h-8 sm:w-[32px] sm:h-[32px] flex items-center justify-center">{service.icon}</div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-blue-100">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
            <span>Get Support</span>
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </button>
          <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
            <Phone size={18} className="sm:w-5 sm:h-5" />
            <span>Contact Sales</span>
          </button>
        </div>

        {/* Quick Contact */}
        <div className={`text-center mt-6 sm:mt-8 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1400ms' }}>
          <p className="text-blue-100 mb-2 text-sm sm:text-base">Quick Contact:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-white text-sm sm:text-base">
            <span>📞 +244 931977848</span>
            <span>📱 WhatsApp Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;