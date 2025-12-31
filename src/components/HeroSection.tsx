import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/IMG-20221130-WA0009.jpeg.jpg",
      title: "Building Africa's Future with Stronger Steel",
      subtitle: "Leading Angola's steel industry with cutting-edge technology and uncompromising quality",
      cta: "Explore Our Products"
    },
    {
      image: "/dji_fly_20240328_152040_0129_1712060248798_photo.jpg",
      title: "State-of-the-Art European Technology",
      subtitle: "Advanced manufacturing processes delivering world-class reinforcing steel bars",
      cta: "View Manufacturing"
    },
    {
      image: "/IMG-20231005-WA0015.jpg",
      title: "Strength Through Safety, Innovation & Integrity",
      subtitle: "30+ years of group experience building for generations",
      cta: "Request a Quote"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Preload next slide image for smoother transitions (only on desktop)
  useEffect(() => {
    if (window.innerWidth >= 768) {
      const nextIndex = (currentSlide + 1) % slides.length;
      if (nextIndex !== 0) {
        const img = new Image();
        img.src = slides[nextIndex].image;
      }
    }
  }, [currentSlide, slides]);

  return (
    <section id="home" className="relative h-screen min-h-[500px] sm:min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center w-full">
              <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 transition-all duration-1000 delay-300 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {slide.title}
              </h1>
              <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 sm:mb-6 transition-all duration-1000 delay-500 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {slide.subtitle}
              </p>
              <button className={`bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '700ms' }}>
                <span>{slide.cta}</span>
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Tagline */}
      <div className="absolute bottom-4 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-center px-4 z-10">
        <p className="text-white text-sm sm:text-base md:text-lg font-medium tracking-wider">BUILD FOR GENERATIONS</p>
      </div>
    </section>
  );
};

export default HeroSection;