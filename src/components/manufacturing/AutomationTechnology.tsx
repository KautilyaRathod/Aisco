import React from 'react';
import { Cpu, Settings, Monitor, Zap, Globe, Shield } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const AutomationTechnology = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const automationFeatures = [
    {
      icon: <Cpu size={32} />,
      title: "PLC Automation",
      description: "Advanced programmable logic controllers for real-time process control",
      origin: "Germany",
      flag: "🇩🇪"
    },
    {
      icon: <Monitor size={32} />,
      title: "SCADA Systems",
      description: "Supervisory control and data acquisition for comprehensive monitoring",
      origin: "Italy",
      flag: "🇮🇹"
    },
    {
      icon: <Settings size={32} />,
      title: "Process Tracking",
      description: "Real-time monitoring of temperature, pressure, and chemical composition",
      origin: "European Tech",
      flag: "🇪🇺"
    },
    {
      icon: <Shield size={32} />,
      title: "Safety Interlocks",
      description: "Automated safety systems preventing operational hazards",
      origin: "International",
      flag: "🌍"
    }
  ];

  const controlSystems = [
    { system: "Temperature Control", accuracy: "±2°C", response: "< 1 second" },
    { system: "Chemical Composition", accuracy: "±0.01%", response: "Real-time" },
    { system: "Rolling Speed", accuracy: "±0.1%", response: "Instant" },
    { system: "Dimensional Control", accuracy: "±0.1mm", response: "Continuous" }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        {/* Digital Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-white mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Automation & European Technology
          </h2>
          <p className={`text-xl text-gray-300 mb-8 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Advanced control systems from leading European manufacturers
          </p>
          <div className={`text-3xl font-bold text-blue-400 transition-all duration-1000 delay-400 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            95% Automation Level • Real-Time Control
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Control Room Visualization */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Control Room Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Control Room"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent" />
                
                {/* Control System Overlays */}
                <div className="absolute top-6 left-6 bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="font-bold">System Online</span>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <div className="text-center">
                    <div className="font-bold">95%</div>
                    <div className="text-xs">Automation</div>
                  </div>
                </div>
                
                {/* Animated UI Elements */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-4 text-white text-xs">
                      <div className="text-center">
                        <div className="text-green-400 font-bold">1600°C</div>
                        <div>Furnace Temp</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-400 font-bold">34 TPH</div>
                        <div>Output Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-orange-400 font-bold">98%</div>
                        <div>Efficiency</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Digital Grid Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-pulse" />
              </div>
              
              {/* Floating Tech Indicators */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-600 text-white p-4 rounded-xl">
                <Cpu size={48} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Smart Manufacturing</h3>
                <p className="text-blue-200 text-lg">European Engineering Excellence</p>
              </div>
            </div>
            
            <div className="text-lg text-gray-200 mb-8 leading-relaxed space-y-4">
              <p>
                Our manufacturing facility integrates <span className="text-blue-300 font-bold">advanced PLC automation</span> 
                and <span className="text-green-300 font-bold">SCADA systems</span> from leading European manufacturers, 
                ensuring precise control over every aspect of the steel production process.
              </p>
              
              <p>
                <span className="text-purple-300 font-bold">Real-time monitoring</span> and 
                <span className="text-orange-300 font-bold"> automated safety interlocks</span> guarantee 
                consistent quality while maintaining the highest safety standards.
              </p>
            </div>

            {/* Technology Highlights */}
            <div className="space-y-4 mb-8">
              {[
                "Real-time process control and monitoring",
                "Automated quality assurance systems",
                "Predictive maintenance algorithms",
                "Integrated safety and emergency protocols"
              ].map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-gray-200">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automation Features */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          {automationFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
            >
              {/* Flag Badge */}
              <div className="absolute -top-2 -right-2 text-2xl">{feature.flag}</div>
              
              <div className="text-blue-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">{feature.description}</p>
              <div className="text-xs font-semibold bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                {feature.origin}
              </div>
            </div>
          ))}
        </div>

        {/* Control Systems Table */}
        <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Control System Specifications</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-6 text-white font-semibold">Control System</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Accuracy</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Response Time</th>
                </tr>
              </thead>
              <tbody>
                {controlSystems.map((system, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-200">{system.system}</td>
                    <td className="py-4 px-6 text-center font-bold text-green-400">{system.accuracy}</td>
                    <td className="py-4 px-6 text-center text-blue-400">{system.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technology Partners */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1600ms' }}>
          <h3 className="text-2xl font-bold text-white mb-8">Technology Partners</h3>
          
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            {[
              { name: "Advanced Technology", country: "Italy", specialty: "Casting Technology" },
              { name: "Siemens", country: "Germany", specialty: "Automation Systems" },
              { name: "ABB", country: "Switzerland", specialty: "Control Systems" },
              { name: "Schneider", country: "France", specialty: "Industrial Software" }
            ].map((partner, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="font-bold text-white">{partner.name}</div>
                <div className="text-blue-300 text-sm">{partner.country}</div>
                <div className="text-gray-400 text-xs">{partner.specialty}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationTechnology;