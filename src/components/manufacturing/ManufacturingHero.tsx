import { ArrowRight, Zap, Factory } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ManufacturingHero = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Industrial Background with Video Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/162568/steel-mill-factory-industry-162568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)` 
          }}
        />
        
        {/* Secondary Industrial Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-multiply"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)` 
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>
      
      {/* Animated Industrial Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Molten Steel Sparks */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
              boxShadow: '0 0 8px #f97316, 0 0 16px #ea580c'
            }}
          />
        ))}
        
        {/* Heat Waves */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-orange-600/30 via-red-600/20 to-transparent animate-pulse" />
        
        {/* Steel Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`steel-${i}`}
            className="absolute w-2 h-2 bg-gray-300 rounded-full animate-pulse opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className={`mb-6 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="bg-orange-600 text-white p-3 rounded-full animate-pulse">
              <Factory size={32} />
            </div>
            <div className="bg-blue-600 text-white p-3 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}>
              <Zap size={32} />
            </div>
          </div>
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 transition-all duration-1500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
            Precision-Driven
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
            Steel Manufacturing
          </span>
        </h1>
        
        <div className={`text-2xl md:text-3xl text-gray-200 mb-8 transition-all duration-1500 delay-500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="text-orange-300 font-bold">From scrap to rebar</span>
          <span className="text-white"> – </span>
          <span className="text-blue-300 font-bold">fully automated, fully certified</span>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1500 delay-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3">
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            <span>Explore the Process</span>
            <div className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="text-xs text-gray-300 tracking-wider">DISCOVER MANUFACTURING</div>
        </div>
      </div>

      {/* Industrial Corner Elements */}
      <div className="absolute top-4 left-4 w-20 h-20 border-l-4 border-t-4 border-orange-400 opacity-60" />
      <div className="absolute top-4 right-4 w-20 h-20 border-r-4 border-t-4 border-blue-400 opacity-60" />
      <div className="absolute bottom-4 left-4 w-20 h-20 border-l-4 border-b-4 border-blue-400 opacity-60" />
      <div className="absolute bottom-4 right-4 w-20 h-20 border-r-4 border-b-4 border-orange-400 opacity-60" />
    </section>
  );
};

export default ManufacturingHero;