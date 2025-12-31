import React, { useState } from 'react';
import { Building, Grid as Bridge, Factory, Home, ArrowRight, MapPin } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ProductApplications = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [selectedProject, setSelectedProject] = useState(0);

  const applications = [
    {
      icon: <Building size={48} />,
      title: "High-Rise Buildings",
      description: "Skyscrapers and commercial towers requiring superior structural integrity",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      projects: ["Luanda Business Center", "Atlantic Tower Complex", "Central Plaza Development"]
    },
    {
      icon: <Bridge size={48} />,
      title: "Infrastructure Projects",
      description: "Bridges, highways, and major infrastructure requiring long-term durability",
      image: "https://images.pexels.com/photos/162568/steel-mill-factory-industry-162568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      projects: ["Bengo River Bridge", "Luanda-Malanje Highway", "Port Expansion Project"]
    },
    {
      icon: <Factory size={48} />,
      title: "Industrial Facilities",
      description: "Manufacturing plants and industrial complexes with heavy-duty requirements",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      projects: ["Cement Plant Expansion", "Oil Refinery Complex", "Mining Facility Construction"]
    },
    {
      icon: <Home size={48} />,
      title: "Residential Complexes",
      description: "Housing developments and residential towers for growing communities",
      image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      projects: ["Nova Vida Housing", "Talatona Residences", "Kilamba Development"]
    }
  ];

  const projectShowcase = [
    {
      name: "Luanda Commercial Complex",
      location: "Luanda, Angola",
      type: "Mixed-Use Development",
      rebarUsed: "2,500 MT",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      description: "Major commercial and residential complex using AISCO Grade A500 NR rebars for superior structural integrity.",
      completion: "2024"
    },
    {
      name: "Bengo Bridge Infrastructure",
      location: "Bengo Province, Angola", 
      type: "Transportation Infrastructure",
      rebarUsed: "1,800 MT",
      image: "https://images.pexels.com/photos/24426026/pexels-photo-24426026.jpeg",
      description: "Critical bridge infrastructure connecting communities with AISCO's certified reinforcing steel.",
      completion: "2023"
    },
    {
      name: "Industrial Complex Development",
      location: "Cabinda, Angola",
      type: "Industrial Facility",
      rebarUsed: "3,200 MT",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      description: "Large-scale industrial development utilizing AISCO rebars for heavy-duty structural requirements.",
      completion: "2024"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Where Our Rebars Are Used
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Powering construction projects across Africa with certified quality
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {applications.map((app, index) => (
            <div
              key={index}
              className={`group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              {/* Icon */}
              <div className="text-blue-600 mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {app.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                {app.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {app.description}
              </p>

              {/* Project Examples */}
              <div className="space-y-2 mb-6">
                <div className="text-sm font-semibold text-gray-700 mb-2">Recent Projects:</div>
                {app.projects.slice(0, 2).map((project, idx) => (
                  <div key={idx} className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                    {project}
                  </div>
                ))}
              </div>

              {/* Hover Image */}
              <div className="relative overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-600/20" />
              </div>
            </div>
          ))}
        </div>

        {/* Project Showcase */}
        <div className={`transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Project Showcase</h3>
          
          {/* Project Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-white p-2 rounded-xl shadow-lg">
              {projectShowcase.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProject(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedProject === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Project {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Project Display */}
          <div className="relative overflow-hidden">
            {projectShowcase.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index === selectedProject
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute inset-0 translate-x-full pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    {/* Project Image */}
                    <div className="relative h-96 lg:h-auto">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                          SUPPLIED BY AISCO
                        </div>
                        <div className="text-sm opacity-90">Completed {project.completion}</div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center space-x-2 text-blue-600 mb-4">
                        <MapPin size={20} />
                        <span className="font-semibold">{project.location}</span>
                      </div>
                      
                      <h4 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h4>
                      <div className="text-lg text-blue-600 font-semibold mb-6">{project.type}</div>
                      
                      <p className="text-gray-700 mb-8 leading-relaxed">{project.description}</p>
                      
                      {/* Project Stats */}
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{project.rebarUsed}</div>
                          <div className="text-gray-600 text-sm">Rebar Used</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{project.completion}</div>
                          <div className="text-gray-600 text-sm">Completed</div>
                        </div>
                      </div>

                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 group">
                        <span>View Project Details</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-20 text-center transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1400ms' }}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Next Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the growing list of successful projects using AISCO Grade A500 NR rebars. 
              Contact our team for project consultation and competitive pricing.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-3 group">
              <span>Start Your Project</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductApplications;