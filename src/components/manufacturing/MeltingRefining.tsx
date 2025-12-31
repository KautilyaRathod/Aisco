import React from 'react';
import { Flame, Zap, Thermometer, BarChart3 } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const MeltingRefining = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const furnaceSpecs = [
    { label: "Furnace Power", value: "Advanced MW", icon: <Zap size={24} /> },
    { label: "Melting Temperature", value: "1600°C", icon: <Thermometer size={24} /> },
    { label: "Output Capacity", value: "34 tons/hour", icon: <BarChart3 size={24} /> },
    { label: "Energy Efficiency", value: "95%+", icon: <Flame size={24} /> }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Heat Waves */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              boxShadow: '0 0 10px #fb923c'
            }}
          />
        ))}
        
        {/* Molten Steel Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-600/40 via-red-600/30 to-transparent animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-orange-600 text-white p-4 rounded-xl">
                <Flame size={48} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">Melting & Refining</h2>
                <p className="text-orange-200 text-lg">High-Temperature Steel Processing</p>
              </div>
            </div>
            
            <div className="text-lg text-gray-200 mb-8 leading-relaxed space-y-4">
              <p>
                Our steelmaking begins with high-grade recycled metal, melted in three powerful 
                <span className="text-orange-300 font-bold"> 14 MW induction furnaces</span>. 
                This advanced technology ensures precise temperature control and optimal energy efficiency.
              </p>
              
              <p>
                The molten steel then undergoes secondary refining in our 
                <span className="text-blue-300 font-bold"> Ladle Furnace system</span>, 
                where we remove impurities and optimize chemical composition for superior steel quality.
              </p>
              
              <p>
                This dual-stage process guarantees consistent metallurgical properties and 
                chemical composition that meets international standards.
              </p>
            </div>

            {/* Process Highlights */}
            <div className="space-y-4 mb-8">
              {[
                "Precise temperature control at 1600°C",
                "Advanced desulfurization and deoxidation",
                "Optimal chemical composition adjustment",
                "Energy-efficient induction technology"
              ].map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                  <span className="text-gray-200">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Furnace Visualization */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Furnace Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Induction Furnace"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/40 to-transparent" />
                
                {/* Temperature Overlay */}
                <div className="absolute top-6 left-6 bg-orange-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Thermometer size={20} />
                    <span className="font-bold">1600°C</span>
                  </div>
                </div>
                
                {/* Power Indicator */}
                <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Zap size={20} />
                    <span className="font-bold">42 MW</span>
                  </div>
                </div>
                
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-orange-400/20 animate-pulse" />
              </div>
              
              {/* Floating Specs */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="text-orange-300 font-bold text-lg">3 Furnaces</div>
                <div className="text-gray-200 text-sm">Simultaneous Operation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className={`mt-20 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-2xl font-bold text-white text-center mb-12">Furnace Specifications</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {furnaceSpecs.map((spec, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="text-orange-400 mb-4 flex justify-center">
                  {spec.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-2">{spec.value}</div>
                <div className="text-gray-300 text-sm">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div className={`mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h4 className="text-xl font-bold text-white mb-6 text-center">Melting & Refining Process Flow</h4>
          
          <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
            {[
              "Scrap Loading",
              "Induction Melting",
              "Temperature Control",
              "Ladle Transfer",
              "Chemical Refining",
              "Quality Testing"
            ].map((step, index) => (
              <React.Fragment key={index}>
                <div className="bg-orange-600/20 text-orange-200 px-4 py-2 rounded-lg border border-orange-400/30">
                  {step}
                </div>
                {index < 5 && (
                  <div className="text-orange-400 text-2xl">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeltingRefining;