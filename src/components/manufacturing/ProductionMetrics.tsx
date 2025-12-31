import React, { useState, useEffect } from 'react';
import { TrendingUp, Zap, Factory, Award, BarChart3, Clock } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ProductionMetrics = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [counters, setCounters] = useState({
    capacity: 0,
    output: 0,
    efficiency: 0,
    uptime: 0
  });

  const metrics = [
    {
      icon: <Factory size={48} />,
      title: "Annual Capacity",
      value: 300000,
      unit: "MT",
      suffix: "K",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      description: "Maximum production capacity per year"
    },
    {
      icon: <Zap size={48} />,
      title: "Furnace Output",
      value: 34,
      unit: "TPH",
      suffix: "",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500",
      description: "Tons per hour melting capacity"
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Production Efficiency",
      value: 95,
      unit: "%",
      suffix: "",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      description: "Overall equipment effectiveness"
    },
    {
      icon: <Clock size={48} />,
      title: "Operational Uptime",
      value: 98,
      unit: "%",
      suffix: "",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      description: "System availability and reliability"
    }
  ];

  const kpis = [
    { label: "💪 In-house Rebar Production", value: "100%" },
    { label: "🔎 Quality Monitoring", value: "24/7" },
    { label: "⚙️ Automation Level", value: "95%" },
    { label: "🌍 Export Ready", value: "Yes" }
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      metrics.forEach((metric, index) => {
        let currentValue = 0;
        const increment = metric.value / steps;
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= metric.value) {
            currentValue = metric.value;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [index === 0 ? 'capacity' : index === 1 ? 'output' : index === 2 ? 'efficiency' : 'uptime']: Math.floor(currentValue)
          }));
        }, stepDuration);

        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  const getCounterValue = (index: number) => {
    switch(index) {
      case 0: return counters.capacity;
      case 1: return counters.output;
      case 2: return counters.efficiency;
      case 3: return counters.uptime;
      default: return 0;
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Production Capacity & Metrics
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            World-class manufacturing performance and operational excellence
          </p>
        </div>

        {/* Main Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className={`relative w-20 h-20 ${metric.bgColor} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mx-auto`}>
                {metric.icon}
                
                {/* Pulse Effect */}
                <div className={`absolute inset-0 ${metric.bgColor} rounded-xl animate-ping opacity-20 group-hover:opacity-40`} />
              </div>
              
              {/* Counter */}
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {getCounterValue(index)}{metric.suffix}
                  <span className="text-2xl text-gray-600 ml-1">{metric.unit}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {metric.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 bg-gradient-to-r ${metric.color} rounded-full transition-all duration-2000 ease-out`}
                    style={{ 
                      width: isInView ? `${(getCounterValue(index) / metric.value) * 100}%` : '0%',
                      transitionDelay: `${index * 150 + 600}ms`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* KPI Grid */}
        <div className={`grid md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{kpi.value}</div>
              <div className="text-gray-600 text-sm">{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* Performance Indicators */}
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          {[
            {
              icon: <Award size={32} />,
              title: "Quality Excellence",
              description: "Zero defect manufacturing with continuous quality monitoring",
              color: "text-yellow-600"
            },
            {
              icon: <BarChart3 size={32} />,
              title: "Operational Efficiency",
              description: "Optimized processes delivering maximum output with minimal waste",
              color: "text-green-600"
            },
            {
              icon: <Factory size={32} />,
              title: "Advanced Automation",
              description: "State-of-the-art control systems ensuring consistent production",
              color: "text-blue-600"
            }
          ].map((indicator, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className={`${indicator.color} mb-4 flex justify-center`}>
                {indicator.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{indicator.title}</h4>
              <p className="text-gray-600 leading-relaxed">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionMetrics;