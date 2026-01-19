import React from 'react';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import InteractiveMap from '../InteractiveMap';

const OfficeLocation = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const contactDetails = [
    {
      icon: <MapPin size={24} />,
      title: "Corporate Address",
      details: [
        "Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola.",
      ],
      notranslate: true
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Numbers",
      details: [
        "+244 941475798",
        "+244 931977848"
      ]
    },
    {
      icon: <Mail size={24} />,
      title: "Email Addresses",
      details: [
        "info@aisco.com.co",
        "sales@aisco.com.co",
        "quality@aisco.com.co"
      ],
      notranslate: true
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 8:00 AM - 2:00 PM",
        "24/7 Emergency Support Available"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            AISCO Corporate Office
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Visit us at our state-of-the-art facility in <span className="notranslate">Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map Visualization */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <InteractiveMap
              latitude={-8.5829096}
              longitude={13.405045}
              zoom={15}
              height="400px"
              showControls={true}
              markers={[
                {
                  lat: -8.5829096,
                  lng: 13.405045,
                  title: 'AISCO Main Facility',
                  description: 'State-of-the-Art Steel Manufacturing',
                  color: '#dc2626'
                },
                {
                  lat: -8.5835,
                  lng: 13.4055,
                  title: 'Quality Control Lab',
                  description: 'Advanced Testing Facility',
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
            
            {/* Facility Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-blue-600">Advanced</div>
                <div className="text-gray-600 text-sm">Annual Capacity</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-gray-600 text-sm">Employees</div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="space-y-8">
              {contactDetails.map((contact, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 600}ms` }}
                >
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform duration-500">
                      {contact.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {contact.title}
                      </h3>
                      <div className="space-y-2">
                        {contact.details.map((detail, idx) => (
                          <div key={idx} className={`text-gray-600 group-hover:text-gray-700 transition-colors ${contact.notranslate ? 'notranslate' : ''}`}>
                            {contact.title === "Phone Numbers" ? (
                              <a href={`tel:${detail.replace(/\s/g, '')}`} className="hover:text-blue-600 transition-colors">
                                {detail}
                              </a>
                            ) : contact.title === "Email Addresses" ? (
                              <a href={`mailto:${detail}`} className="hover:text-blue-600 transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Directions & Access */}
        <div className={`mt-16 bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Getting to AISCO</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">🚗</div>
              <h4 className="font-bold text-gray-900 mb-2">By Car</h4>
              <p className="text-gray-600 text-sm">
                Located near <span className="notranslate">Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola</span>. 
                Ample parking available for visitors.
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl mb-4">🚁</div>
              <h4 className="font-bold text-gray-900 mb-2">By Air</h4>
              <p className="text-gray-600 text-sm">
                Helicopter landing pad available for VIP visits. 
                Coordinate with our team in advance.
              </p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-4xl mb-4">🚢</div>
              <h4 className="font-bold text-gray-900 mb-2">By Sea</h4>
              <p className="text-gray-600 text-sm">
                Direct access to port facilities for 
                international visitors and cargo operations.
              </p>
            </div>
          </div>
          {/* Address QR Code Section */}
          <div className="mt-12 flex flex-col items-center border-t border-gray-100 pt-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Scan for Location</h4>
            <div className="p-3 bg-white rounded-xl shadow-md border border-gray-100 hover:scale-105 transition-transform duration-300">
              <img 
                src="/Address QR.png" 
                alt="AISCO Office Location QR Code" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500">Scan to open in Google Maps</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;