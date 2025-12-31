import React from 'react';
import { Download, MessageCircle, Phone, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const QualityCTA = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const qualityServices = [
    {
      icon: <FileText size={24} />,
      title: "Compliance Documentation",
      description: "Complete test reports and certification packages"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Technical Consultation",
      description: "Expert guidance on quality requirements and standards"
    },
    {
      icon: <Download size={24} />,
      title: "Quality Reports",
      description: "Detailed quality control and testing documentation"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20" />
        {/* Quality Particles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Floating Quality Icons */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-300/40 rounded-full animate-pulse"
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
            Ask Our Quality Experts
          </h2>
          <p className={`text-xl text-green-100 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Need quality assurance documents or compliance reports? 
            We're ready to share test reports, certificates, and technical guidance.
          </p>
        </div>

        {/* Main CTA Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className={`group relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  <FileText size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-200 transition-colors">
                    Request Compliance Pack
                  </h3>
                </div>
              </div>
              
              <p className="text-green-100 mb-8 leading-relaxed group-hover:text-white transition-colors">
                Get comprehensive quality documentation including test certificates, 
                compliance reports, and technical specifications for your project requirements.
              </p>
              
              <button className="w-full bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center space-x-3 group/btn">
                <Download size={24} className="group-hover/btn:animate-bounce" />
                <span>Get Documentation</span>
              </button>
            </div>
          </div>

          <div className={`group relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    Contact Our Quality Team
                  </h3>
                </div>
              </div>
              
              <p className="text-blue-100 mb-8 leading-relaxed group-hover:text-white transition-colors">
                Speak directly with our quality assurance experts for technical consultation, 
                custom testing requirements, and project-specific quality guidance.
              </p>
              
              <button className="w-full bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center space-x-3 group/btn">
                <Phone size={24} className="group-hover/btn:scale-110 transition-transform" />
                <span>Contact Experts</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quality Services */}
        <div className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          {qualityServices.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-white mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="font-semibold text-white mb-2 group-hover:text-green-200 transition-colors">
                {service.title}
              </h4>
              <p className="text-green-100 text-sm group-hover:text-white transition-colors">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Quality Assurance Contact</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone size={20} />,
                label: "Quality Hotline",
                value: "+244 931977848",
                action: "tel:+244931977848"
              },
              {
                icon: <MessageCircle size={20} />,
                label: "Quality Email",
                value: "quality@aisco.com.co",
                action: "mailto:quality@aisco.com.co"
              },
              {
                icon: <FileText size={20} />,
                label: "Documentation",
                value: "24/7 Access",
                action: "#"
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.action}
                className="group block text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-green-300 mb-2 flex justify-center group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <h4 className="font-semibold text-white mb-1 group-hover:text-green-200 transition-colors">
                  {contact.label}
                </h4>
                <div className={`text-green-100 text-sm group-hover:text-white transition-colors ${contact.value.includes('@') ? 'notranslate' : ''}`}>{contact.value}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Quality Promise */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1600ms' }}>
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CheckCircle size={32} className="text-green-400" />
              <h3 className="text-2xl font-bold text-white">Our Quality Promise</h3>
            </div>
            <p className="text-green-100 mb-6 max-w-3xl mx-auto text-lg">
              Every AISCO product comes with complete quality documentation and our commitment 
              to excellence. We stand behind our quality with comprehensive support and transparency.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-green-200">Documented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-green-200">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-green-200">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCTA;