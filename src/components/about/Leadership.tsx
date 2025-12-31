import React from 'react';
import { Crown, Award, Users, Target } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const Leadership = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const leadershipQualities = [
    { icon: <Crown size={24} />, title: "Transformative Leadership", description: "Decades of excellence in steel manufacturing" },
    { icon: <Award size={24} />, title: "Quality Commitment", description: "Elevating global benchmarks locally" },
    { icon: <Users size={24} />, title: "Inclusive Growth", description: "Employment for thousands, technical capacity building" },
    { icon: <Target size={24} />, title: "Strategic Vision", description: "Long-term focus on national progress" }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Leadership Excellence
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Visionary leadership driving Angola's industrial transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Leadership Profile */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-600">
              {/* Profile Header */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">KR</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Kishen Raval</h3>
                <p className="text-blue-600 text-lg font-semibold">Chief Executive Officer, AISCO</p>
              </div>

              {/* Leadership Description */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  With a legacy rooted in excellence and vision, Mr. Kishen Raval brings a decade of transformative leadership in the steel manufacturing industry to his role as CEO of AISCO – Angola Iron and Steel Corporation, LDA. Renowned for his commitment to quality, customer focus, and strategic innovation, Mr. Raval has consistently championed the idea that locally produced steel not only meets but elevates global benchmarks.
                </p>
                
                <p>
                  His journey has been marked by a steadfast belief in inclusive industrial growth, having scaled operations that generated employment for thousands and nurtured technical capacity across the region. Under his guidance, AISCO is poised to redefine Angola's steel landscape—merging cutting-edge European technology, stringent quality control, and a deep commitment to community development and sustainability.
                </p>
                
                <p>
                  Mr. Raval's leadership style is grounded in transparency, empowerment, and long-term vision. With an eye on a steel industry future and a heart tuned to national progress, he envisions AISCO not merely as a steel producer, but as a catalyst for Angola's infrastructure evolution, economic resilience, and industrial pride.
                </p>
                
                <p>
                  As AISCO embarks on a bold new chapter, Mr. Raval stands ready to forge durable partnerships, unlock capacity, and deliver world-class steel solutions that support Angola's growth with integrity and purpose.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Qualities */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Leadership Philosophy</h3>
            
            <div className="space-y-6">
              {leadershipQualities.map((quality, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 600}ms` }}
                >
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg flex-shrink-0">
                    {quality.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{quality.title}</h4>
                    <p className="text-gray-600">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Vision Statement */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">Vision Statement</h4>
              <p className="text-blue-100 leading-relaxed">
                "Our steel is not just a material—it's a foundation for Angola's resilience, independence, and sustainable future."
              </p>
              <cite className="block mt-4 text-sm text-blue-200">— Mr. Kishen Raval, CEO</cite>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
