import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ContactHero = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Industrial Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/162568/steel-mill-factory-industry-162568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)` 
          }}
        />
        
        {/* Secondary Industrial Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)` 
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>
      
      {/* Animated Communication Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Communication Signals */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              boxShadow: '0 0 8px #60a5fa'
            }}
          />
        ))}
        
        {/* Connection Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className={`mb-6 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="bg-blue-600 text-white p-3 rounded-full animate-pulse">
              <Phone size={32} />
            </div>
            <div className="bg-green-600 text-white p-3 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}>
              <MessageCircle size={32} />
            </div>
            <div className="bg-orange-600 text-white p-3 rounded-full animate-pulse" style={{ animationDelay: '1s' }}>
              <Mail size={32} />
            </div>
          </div>
        </div>

        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 transition-all duration-1500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            We're Ready to Support
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Your Steel Needs
          </span>
        </h1>
        
        <div className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 mb-6 sm:mb-8 transition-all duration-1500 delay-500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="text-blue-300 font-bold">Connect with our technical experts,</span>
          <br />
          <span className="text-green-300 font-bold">sales team, or customer service</span>
        </div>

        {/* Contact Highlights */}
        <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 transition-all duration-1500 delay-700 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {[
            { icon: <Phone size={20} />, label: "24/7 Support", value: "+244 931977848" },
            { icon: <MessageCircle size={20} />, label: "WhatsApp Ready", value: "Instant Chat" },
            { icon: <Mail size={20} />, label: "Quick Response", value: "info@aisco.com.co" }
          ].map((contact, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-lg border border-white/20">
              <div className="text-blue-400 mb-2 flex justify-center">{contact.icon}</div>
              <div className="text-xs sm:text-sm text-gray-300 mb-1">{contact.label}</div>
              <div className={`font-bold text-white text-sm sm:text-base ${contact.value.includes('@') ? 'notranslate break-all sm:break-normal' : ''}`}>{contact.value}</div>
            </div>
          ))}
        </div>

        <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-400 mb-6 sm:mb-8 transition-all duration-1500 delay-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="animate-pulse">LET'S BUILD TOGETHER</span>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1500 delay-1200 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3"
          >
            <MessageCircle size={24} />
            <span>Get in Touch</span>
            <div className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="text-xs text-gray-300 tracking-wider">CONNECT WITH US</div>
        </div>
      </div>

      {/* Corner Communication Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-blue-400 opacity-60" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-green-400 opacity-60" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-green-400 opacity-60" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-blue-400 opacity-60" />
    </section>
  );
};

export default ContactHero;