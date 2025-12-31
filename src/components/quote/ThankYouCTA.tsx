import React from 'react';
import { Download, Calendar, Phone, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ThankYouCTA = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20" />
        {/* Success Particles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Floating Success Icons */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-300/60 rounded-full animate-pulse"
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
          <div className={`mb-6 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <CheckCircle size={80} className="text-green-300 mx-auto animate-bounce" />
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Thank You for Choosing AISCO!
          </h2>
          <p className={`text-xl text-blue-100 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Your quote request is being processed. Our sales team will contact you within 24 hours 
            with detailed pricing, technical specifications, and delivery options.
          </p>
        </div>

        {/* Next Steps */}
        <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Download size={28} className="mr-3 text-green-300" />
              While You Wait
            </h3>
            <div className="space-y-4">
              <button className="w-full bg-white text-blue-600 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-3 group">
                <Download size={24} />
                <span>Download Company Profile</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-3 group">
                <Calendar size={24} />
                <span>View Product Catalog</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MessageCircle size={28} className="mr-3 text-green-300" />
              Need Immediate Help?
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:+244950300000"
                className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center space-x-3 group"
              >
                <Phone size={24} />
                <span>Call Sales Team</span>
              </a>
              <a 
                href="https://wa.me/244923456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-6 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-3 group"
              >
                <MessageCircle size={24} />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-2xl font-bold text-white text-center mb-8">What Happens Next?</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Quote Processing",
                description: "Our team reviews your requirements and prepares a detailed quote",
                time: "Within 2 hours",
                icon: "📋"
              },
              {
                step: "2", 
                title: "Technical Review",
                description: "Engineering team validates specifications and delivery options",
                time: "Within 12 hours",
                icon: "🔧"
              },
              {
                step: "3",
                title: "Quote Delivery",
                description: "Comprehensive quote with pricing and technical details sent",
                time: "Within 24 hours",
                icon: "📧"
              },
              {
                step: "4",
                title: "Follow-up Call",
                description: "Sales representative contacts you to discuss the quote",
                time: "Within 48 hours",
                icon: "📞"
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                  {step.step}
                </div>
                <div className="text-2xl mb-3">{step.icon}</div>
                <h4 className="font-bold text-white mb-2">{step.title}</h4>
                <p className="text-blue-200 text-sm mb-3">{step.description}</p>
                <div className="text-green-300 text-xs font-semibold">{step.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-white mb-6">Questions? We're Here to Help</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
              <div className="text-green-300 font-semibold">Sales Hotline</div>
              <div className="text-white text-lg">+244 950 300 000</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
              <div className="text-green-300 font-semibold">Email Support</div>
              <div className="text-white text-lg notranslate">sales@aisco.com.co</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
              <div className="text-green-300 font-semibold">WhatsApp</div>
              <div className="text-white text-lg">24/7 Available</div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1400ms' }}>
          <div className="text-4xl font-bold text-green-300 mb-4 animate-pulse">
            BUILD FOR GENERATIONS
          </div>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Thank you for considering AISCO for your construction project. 
            We look forward to partnering with you to build something extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYouCTA;