import React from 'react';
import { Download, Ruler, Weight, Award, FileText } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ProductsSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const specifications = [
    { icon: <Ruler size={24} />, label: "Diameter", value: "8–32 mm" },
    { icon: <Weight size={24} />, label: "Bundle Weight", value: "2 MT" },
    { icon: <Award size={24} />, label: "Grade", value: "A500 NR" },
    { icon: <FileText size={24} />, label: "Traceability", value: "Documentation" }
  ];

  return (
    <section id="products" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Our Products
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Premium Grade A500 NR Reinforcing Steel Bars
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Grade A500 NR Rebar"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Grade A500 NR</h3>
                <p className="text-base sm:text-lg">Reinforcing Steel Bars</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Premium Reinforcing Steel Bars
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Our flagship Grade A500 NR reinforcing steel bars are manufactured using state-of-the-art European technology, ensuring superior strength, durability, and consistency for all construction applications.
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="text-blue-600 flex-shrink-0">{spec.icon}</div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{spec.label}</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Key Features:</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Fully traceable with heat number, grade & standard documentation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Superior mechanical properties and geometric accuracy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Consistent quality through advanced manufacturing processes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Meets international standards and local certifications</span>
                </li>
              </ul>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
              <Download size={18} className="sm:w-5 sm:h-5" />
              <span>Download Product Datasheet (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;