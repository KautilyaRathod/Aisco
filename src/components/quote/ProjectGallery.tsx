import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Package } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ProjectGallery = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      name: "Luanda Commercial Complex",
      location: "Luanda, Angola",
      type: "Mixed-Use Development",
      rebarUsed: "2,500 MT",
      completion: "2024",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      description: "Major commercial and residential complex using AISCO Grade A500 NR rebars for superior structural integrity.",
      highlights: ["High-rise construction", "Seismic resistance", "Premium grade steel"]
    },
    {
      name: "Bengo Bridge Infrastructure",
      location: "Bengo Province, Angola",
      type: "Transportation Infrastructure",
      rebarUsed: "1,800 MT",
      completion: "2023",
      image: "https://images.pexels.com/photos/162568/steel-mill-factory-industry-162568.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      description: "Critical bridge infrastructure connecting communities with AISCO's certified reinforcing steel.",
      highlights: ["Long-span bridge", "Heavy load capacity", "Weather resistance"]
    },
    {
      name: "Industrial Complex Development",
      location: "Cabinda, Angola",
      type: "Industrial Facility",
      rebarUsed: "3,200 MT",
      completion: "2024",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      description: "Large-scale industrial development utilizing AISCO rebars for heavy-duty structural requirements.",
      highlights: ["Heavy industrial loads", "Chemical resistance", "Extended durability"]
    },
    {
      name: "Residential Tower Complex",
      location: "Talatona, Angola",
      type: "Residential Development",
      rebarUsed: "1,200 MT",
      completion: "2023",
      image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      description: "Modern residential towers providing quality housing with AISCO's reliable steel reinforcement.",
      highlights: ["Multi-story construction", "Residential safety", "Cost-effective solution"]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Real Project Gallery
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            See AISCO steel in action across major construction projects
          </p>
        </div>

        {/* Main Project Display */}
        <div className={`relative transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index === currentProject
                    ? 'opacity-100 translate-x-0'
                    : index < currentProject
                      ? 'opacity-0 -translate-x-full absolute inset-0'
                      : 'opacity-0 translate-x-full absolute inset-0'
                }`}
              >
                <div className="grid lg:grid-cols-2 bg-white">
                  {/* Project Image */}
                  <div className="relative h-96 lg:h-auto">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* AISCO Badge */}
                    <div className="absolute top-6 left-6 bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                      <div className="font-bold text-sm">SUPPLIED BY AISCO</div>
                    </div>
                    
                    {/* Completion Badge */}
                    <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                      <div className="text-center">
                        <div className="font-bold">{project.completion}</div>
                        <div className="text-xs">Completed</div>
                      </div>
                    </div>
                    
                    {/* Project Stats */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-4 text-white text-sm">
                          <div className="text-center">
                            <div className="text-green-400 font-bold">{project.rebarUsed}</div>
                            <div>Rebar Used</div>
                          </div>
                          <div className="text-center">
                            <div className="text-blue-400 font-bold">{project.type}</div>
                            <div>Project Type</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 text-blue-600 mb-4">
                      <MapPin size={20} />
                      <span className="font-semibold">{project.location}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h3>
                    <div className="text-lg text-blue-600 font-semibold mb-6">{project.type}</div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-lg">{project.description}</p>
                    
                    {/* Project Highlights */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4">Project Highlights:</h4>
                      <div className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Package size={24} className="text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600">{project.rebarUsed}</div>
                        <div className="text-gray-600 text-sm">Steel Supplied</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Calendar size={24} className="text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">{project.completion}</div>
                        <div className="text-gray-600 text-sm">Completed</div>
                      </div>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 group">
                      <span>View Project Details</span>
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentProject
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Project Grid Preview */}
        <div className={`mt-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More AISCO Projects</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  index === currentProject ? 'ring-4 ring-blue-300' : ''
                }`}
                onClick={() => setCurrentProject(index)}
              >
                <div className="relative h-32">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-white">
                    <div className="font-bold text-sm truncate">{project.name}</div>
                    <div className="text-xs opacity-90">{project.rebarUsed}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;