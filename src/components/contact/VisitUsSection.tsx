import React from 'react';
import { MapPin, Car, Plane, Ship, Clock, Shield } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import InteractiveMap from '../InteractiveMap';

const VisitUsSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const transportOptions = [
  {
      icon: <Car size={32} />,
      title: "By Car",
      description: "Located near Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola. Ample parking available for visitors.",
      notranslateAddress: true,
      details: "45 minutes from Luanda city center",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      icon: <Plane size={32} />,
      title: "By Air",
      description: "Helicopter landing pad available for VIP visits. Coordinate with our team in advance.",
      details: "Private aviation facilities",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500"
    },
    {
      icon: <Ship size={32} />,
      title: "By Sea",
      description: "Direct access to port facilities for international visitors and cargo operations.",
      details: "Deep water port access",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500"
    }
  ];

  const visitInfo = [
    {
      icon: <Clock size={24} />,
      title: "Visit Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 2:00 PM", "Advance booking required"]
    },
    {
      icon: <Shield size={24} />,
      title: "Safety Requirements",
      details: ["Safety equipment provided", "Guided tours only", "Valid ID required"]
    },
    {
      icon: <MapPin size={24} />,
      title: "What You'll See",
      details: ["Manufacturing facility", "Quality control lab", "Product showcase"]
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Visit Our Facility
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Experience AISCO's world-class manufacturing facility firsthand
          </p>
        </div>

        {/* Interactive Map Section */}
        <div className={`mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <InteractiveMap
            latitude={-8.5829096}
            longitude={13.405045}
            zoom={16}
            height="400px"
            showControls={true}
            markers={[
              {
                lat: -8.5829096,
                lng: 13.405045,
                title: 'Main Plant',
                description: 'Primary Manufacturing Facility',
                color: '#dc2626'
              },
              {
                lat: -8.5835,
                lng: 13.4055,
                title: 'Quality Lab',
                description: 'Advanced Testing & Quality Control',
                color: '#059669'
              },
              {
                lat: -8.5825,
                lng: 13.4045,
                title: 'Visitor Center',
                description: 'Welcome & Information Center',
                color: '#2563eb'
              }
            ]}
          />
        </div>

        {/* Transportation Options */}
        <div className={`mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Getting to AISCO</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                {/* Icon Container */}
                <div className={`relative w-16 h-16 ${option.bgColor} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mx-auto`}>
                  {option.icon}
                  
                  {/* Pulse Effect */}
                  <div className={`absolute inset-0 ${option.bgColor} rounded-xl animate-ping opacity-20 group-hover:opacity-40`} />
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {option.title}
                  </h4>
                  <p className={`text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors ${option.notranslateAddress ? 'notranslate' : ''}`}>
                    {option.description}
                  </p>
                  <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {option.details}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Information */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          {visitInfo.map((info, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-blue-600">{info.icon}</div>
                <h4 className="text-lg font-bold text-gray-900">{info.title}</h4>
              </div>
              <ul className="space-y-2">
                {info.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Facility Tour CTA */}
        <div className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <h3 className="text-3xl font-bold mb-4">Book Your Facility Tour</h3>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
            Experience our world-class manufacturing processes, meet our technical team, 
            and see firsthand how AISCO produces premium steel for Africa's infrastructure.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="font-bold mb-3">Standard Tour (2 hours)</h4>
              <ul className="text-blue-100 text-sm space-y-1 text-left">
                <li>• Manufacturing facility walkthrough</li>
                <li>• Quality control laboratory</li>
                <li>• Product showcase and samples</li>
                <li>• Q&A with technical team</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="font-bold mb-3">VIP Tour (Half day)</h4>
              <ul className="text-blue-100 text-sm space-y-1 text-left">
                <li>• Complete facility access</li>
                <li>• Executive briefing session</li>
                <li>• Technical documentation package</li>
                <li>• Lunch with management team</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-3 group">
              <MapPin size={24} className="group-hover:scale-110 transition-transform" />
              <span>Schedule Standard Tour</span>
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3 group">
              <Plane size={24} className="group-hover:scale-110 transition-transform" />
              <span>Book VIP Experience</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;