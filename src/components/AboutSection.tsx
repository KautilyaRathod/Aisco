import React from 'react';
import { useInView } from '../hooks/useInView';

const AboutSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section id="about" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <img
              src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="AISCO Steel Plant"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              About <span className="text-blue-600">AISCO</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              AISCO – Angola Iron and Steel Corporation, LDA is Angola's leading steel manufacturer with 30+ years of group experience. Our high-tech plant at <span className="notranslate">Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola</span>, is redefining construction-grade steel with precision, performance, and purpose.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Located on a sprawling 400-hectare facility, we combine European technology with African expertise to deliver world-class reinforcing steel bars that meet international standards while supporting local development.
            </p>
            
            {/* Stats with Animation and Border */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-steel-glow"></div>
                <div className="relative text-center p-3 sm:p-4 bg-white rounded-lg border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2 animate-pulse">30+</div>
                  <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-400"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-400"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400"></div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-steel-glow"></div>
                <div className="relative text-center p-3 sm:p-4 bg-white rounded-lg border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2 animate-pulse">400</div>
                  <div className="text-sm sm:text-base text-gray-600">Hectare Facility</div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-400"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-400"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400"></div>
                </div>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="relative">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-float-up"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${4 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>

            <button className="relative group bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors overflow-hidden">
              <span className="relative z-10">Read More</span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;