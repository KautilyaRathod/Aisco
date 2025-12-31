import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ClientsTestimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "AISCO's Grade A500 NR rebar has been instrumental in our major construction projects. The quality consistency and reliable delivery have made them our preferred steel supplier in Angola.",
      author: "João Silva",
      position: "Project Manager",
      company: "OMATAPALO Construction",
      rating: 5,
      project: "Luanda Commercial Complex"
    },
    {
      quote: "The technical support and documentation provided by AISCO is exceptional. Their commitment to quality and traceability gives us confidence in every project.",
      author: "Maria Santos",
      position: "Chief Engineer", 
      company: "Ferforte Engineering",
      rating: 5,
      project: "Bengo Bridge Infrastructure"
    },
    {
      quote: "Working with AISCO has transformed our construction capabilities. Their steel quality and professional service are unmatched in the region.",
      author: "Chen Wei",
      position: "Operations Director",
      company: "China Huashi Angola",
      rating: 5,
      project: "Industrial Complex Development"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Trusted by Industry Leaders
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Building partnerships across Africa and beyond
          </p>
        </div>

        {/* Testimonials Section */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          
          {/* Testimonial Cards */}
          <div className="relative h-96 overflow-hidden rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentTestimonial 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white p-12 rounded-2xl shadow-2xl h-full flex flex-col justify-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full translate-y-12 -translate-x-12 opacity-50" />
                  
                  {/* Quote Icon */}
                  <div className="text-blue-600 mb-6">
                    <Quote size={48} />
                  </div>
                  
                  {/* Quote Text */}
                  <blockquote className="text-xl text-gray-700 italic mb-8 leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Rating */}
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsTestimonials;