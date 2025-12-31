import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ProductOverview = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const features = [
    "High yield strength for superior structural integrity",
    "International compliance with LNEC and NA standards", 
    "Traceable, standardized production with full documentation",
    "Consistent quality through advanced manufacturing processes",
    "Suitable for all reinforced concrete applications"
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className={`relative transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="AISCO Grade A500 NR Rebar"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              
              {/* Product Label Overlay */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-gray-900 font-bold text-lg">Grade A500 NR</div>
                <div className="text-blue-600 font-semibold">Reinforcing Steel Bars</div>
                <div className="text-sm text-gray-600 mt-1">Heat #: AS240125-001</div>
              </div>

              {/* Certification Badge */}
              <div className="absolute top-6 right-6 bg-green-600 text-white px-3 py-2 rounded-full text-sm font-bold">
                CERTIFIED
              </div>
            </div>
            
            {/* Rebar Pattern Background */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-orange-600 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Product Details */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-lg">Our Flagship Product</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              AISCO's Reinforcing Steel Bars
              <span className="block text-2xl text-blue-600 mt-2">(Grade A500 NR)</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Engineered for structural durability in reinforced concrete, AISCO's Grade A500 NR 
              reinforcing steel bars are the backbone of residential, commercial, and infrastructure 
              projects across Africa. Our rebars combine superior strength with consistent quality, 
              ensuring your structures stand the test of time.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-500 ${
                    isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Applications */}
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Primary Applications:</h4>
              <div className="grid grid-cols-2 gap-3 text-gray-700">
                <div>• High-rise buildings</div>
                <div>• Bridge construction</div>
                <div>• Industrial facilities</div>
                <div>• Infrastructure projects</div>
                <div>• Residential complexes</div>
                <div>• Commercial structures</div>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3 group">
              <span>See Manufacturing Process</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;