import React from 'react';
import { useInView } from '../hooks/useInView';

const ClientsSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const clients = [
    "Institutional buyers",
    "Government agencies",
    "International buyers"
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Trusted by Industry Leaders
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Building partnerships across Africa and beyond
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <div className="text-gray-700 font-semibold text-center text-sm">
                {client}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className={`bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <blockquote className="text-xl text-gray-700 italic mb-6">
            "AISCO's Grade A500 NR rebar has been instrumental in our major construction projects. The quality consistency and reliable delivery have made them our preferred steel supplier in Angola."
          </blockquote>
          <div className="text-gray-900 font-semibold">Construction Industry Partner</div>
          <div className="text-gray-600">Major Infrastructure Project</div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;