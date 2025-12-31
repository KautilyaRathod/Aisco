import React from 'react';
import { MessageCircle, Linkedin, Instagram, Mail, Globe, Phone } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const SocialChannels = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const socialChannels = [
    {
      icon: <MessageCircle size={32} />,
      name: "WhatsApp",
      handle: "+244 931977848",
      description: "Instant messaging for quick questions and support",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      action: "https://wa.me/244923456789",
      highlight: true
    },
    {
      icon: <Linkedin size={32} />,
      name: "LinkedIn",
      handle: "@aisco-angola",
      description: "Professional updates and industry insights",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600",
      action: "#"
    },
    {
      icon: <Instagram size={32} />,
      name: "Instagram",
      handle: "@aisco_official",
      description: "Behind-the-scenes content and company culture",
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-pink-500",
      action: "#"
    },
    {
      icon: <Mail size={32} />,
      name: "Newsletter",
      handle: "Subscribe",
      description: "Monthly updates on products and industry news",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500",
      action: "#"
    }
  ];

  const quickActions = [
    {
      icon: <Phone size={24} />,
      title: "Call Now",
      subtitle: "+244 931977848",
      action: "tel:+244931977848",
      color: "bg-blue-600"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp Chat",
      subtitle: "Instant Response",
      action: "https://wa.me/244923456789",
      color: "bg-green-600"
    },
    {
      icon: <Mail size={24} />,
      title: "Send Email",
      subtitle: "info@aisco.com.co",
      action: "mailto:info@aisco.com.co",
      color: "bg-purple-600"
    },
    {
      icon: <Globe size={24} />,
      title: "Visit Website",
      subtitle: "aisco.co.ao",
      action: "#",
      color: "bg-orange-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Social Media & Messaging Channels
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Stay connected with AISCO across multiple platforms
          </p>
        </div>

        {/* Social Channels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {socialChannels.map((channel, index) => (
            <a
              key={index}
              href={channel.action}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              } ${channel.highlight ? 'ring-4 ring-green-300 animate-pulse' : ''}`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Highlight Badge */}
              {channel.highlight && (
                <div className="absolute -top-3 -right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  INSTANT
                </div>
              )}
              
              {/* Icon Container */}
              <div className={`relative w-16 h-16 ${channel.bgColor} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mx-auto`}>
                {channel.icon}
                
                {/* Pulse Effect */}
                <div className={`absolute inset-0 ${channel.bgColor} rounded-xl animate-ping opacity-20 group-hover:opacity-40`} />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {channel.name}
                </h3>
                <div className="text-blue-600 font-semibold mb-3">{channel.handle}</div>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                  {channel.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          ))}
        </div>

        {/* Quick Actions */}
        <div className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <h3 className="text-2xl font-bold mb-8 text-center">Quick Contact Actions</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.action}
                className={`group block text-center p-6 ${action.color} rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="text-white mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {action.icon}
                </div>
                <h4 className="font-bold text-white mb-1">{action.title}</h4>
                <p className={`text-blue-100 text-sm ${action.subtitle.includes('@') ? 'notranslate' : ''}`}>{action.subtitle}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Social Media Benefits */}
        <div className={`mt-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Follow AISCO?</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📰",
                title: "Industry Updates",
                description: "Latest news on steel industry trends and AISCO developments"
              },
              {
                icon: "🏭",
                title: "Behind the Scenes",
                description: "Exclusive content from our manufacturing facility and team"
              },
              {
                icon: "🤝",
                title: "Community Engagement",
                description: "CSR initiatives and community development projects"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Highlight */}
        <div className={`mt-16 bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1400ms' }}>
          <MessageCircle size={48} className="text-green-600 mx-auto mb-4 animate-bounce" />
          <h3 className="text-2xl font-bold text-green-800 mb-4">WhatsApp Available!</h3>
          <p className="text-green-700 mb-6 max-w-2xl mx-auto">
            Get instant responses to your questions. Our WhatsApp support is available during business hours 
            for quick assistance with quotes, technical questions, and general inquiries.
          </p>
          <a
            href="https://wa.me/244923456789"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-3 group"
          >
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            <span>Start WhatsApp Chat</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialChannels;