import React from 'react';
import { BarChart3, Zap, Settings, Target } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const RollingMill = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const rollingFeatures = [
    {
      icon: <BarChart3 size={32} />,
      title: "16 Rolling Stands",
      description: "Sequential reduction for precise dimensions",
      metric: "High Precision"
    },
    {
      icon: <Zap size={32} />,
      title: "High-Speed Operation",
      description: "Optimized for maximum throughput efficiency",
      metric: "Fast Production"
    },
    {
      icon: <Settings size={32} />,
      title: "Computer Control",
      description: "Automated tension and speed management",
      metric: "Smart Control"
    },
    {
      icon: <Target size={32} />,
      title: "8-32mm Range",
      description: "Multiple diameter capabilities in one mill",
      metric: "Versatile Output"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Rolling Motion Effect */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Heat Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-orange-600/20 via-red-600/10 to-transparent animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-white mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            High-Speed Rolling Mill
          </h2>
          <p className={`text-xl text-gray-300 mb-8 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Transforming billets into precision rebars with advanced rolling technology
          </p>
          <div className={`text-3xl font-bold text-orange-400 transition-all duration-1000 delay-400 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            16 Rolling Stands • Computer Controlled
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-orange-600 text-white p-4 rounded-xl">
                <BarChart3 size={48} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Precision Rolling Process</h3>
                <p className="text-orange-200 text-lg">Advanced Mill Technology</p>
              </div>
            </div>
            
            <div className="text-lg text-gray-200 mb-8 leading-relaxed space-y-4">
              <p>
                Our state-of-the-art rolling mill features <span className="text-orange-300 font-bold">16 high-speed rolling stands</span> 
                that progressively reduce billet diameter to produce rebars ranging from 8mm to 32mm with exceptional precision.
              </p>
              
              <p>
                The mill operates under <span className="text-blue-300 font-bold">computer-controlled tension and speed management</span>, 
                ensuring consistent mechanical properties and dimensional accuracy throughout the rolling process.
              </p>
              
              <p>
                Advanced cooling systems and precise temperature control guarantee optimal metallurgical properties 
                in the finished rebars.
              </p>
            </div>

            {/* Process Highlights */}
            <div className="space-y-4 mb-8">
              {[
                "Progressive diameter reduction through 16 stands",
                "Computer-controlled speed and tension",
                "Optimal temperature management during rolling",
                "Superior surface finish and dimensional accuracy"
              ].map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                  <span className="text-gray-200">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rolling Mill Visualization */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Rolling Mill Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Rolling Mill"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/40 to-transparent" />
                
                {/* Speed Indicator */}
                <div className="absolute top-6 left-6 bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Zap size={20} />
                    <span className="font-bold">High Speed</span>
                  </div>
                </div>
                
                {/* Temperature Display */}
                <div className="absolute top-6 right-6 bg-orange-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <div className="text-center">
                    <div className="font-bold">1000°C</div>
                    <div className="text-xs">Rolling Temp</div>
                  </div>
                </div>
                
                {/* Motion Blur Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
              </div>
              
              {/* Floating Indicators */}
              <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="text-orange-300 font-bold text-lg">16 Stands</div>
                <div className="text-gray-200 text-sm">Sequential Rolling</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rolling Features */}
        <div className={`mt-20 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-2xl font-bold text-white text-center mb-12">Rolling Mill Capabilities</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {rollingFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="text-orange-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{feature.description}</p>
                <div className="text-xs font-semibold bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full">
                  {feature.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rolling Process Diagram */}
        <div className={`mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h4 className="text-xl font-bold text-white mb-6 text-center">Diameter Reduction Process</h4>
          
          <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
            {[
              { size: "150mm", stage: "Billet Input", color: "bg-red-500" },
              { size: "100mm", stage: "Rough Rolling", color: "bg-orange-500" },
              { size: "60mm", stage: "Intermediate", color: "bg-yellow-500" },
              { size: "32mm", stage: "Pre-Finish", color: "bg-green-500" },
              { size: "8-32mm", stage: "Final Product", color: "bg-blue-500" }
            ].map((stage, index) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <div className={`w-16 h-16 ${stage.color} rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto`}>
                    {stage.size}
                  </div>
                  <div className="text-white text-sm font-semibold">{stage.stage}</div>
                </div>
                {index < 4 && (
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

export default RollingMill;