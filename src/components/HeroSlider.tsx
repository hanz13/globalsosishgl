import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { slides } from '../data';

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5000ms autoplay
    return () => clearInterval(interval);
  }, [handleNext, isHovered]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative h-[85vh] sm:h-[90vh] min-h-[550px] w-full bg-stone-950 overflow-hidden pt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Wrapper */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
              }`}
            >
              {/* Image Background */}
              <img
                src={slide.image}
                alt={slide.headline}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/60 to-stone-950/40" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl text-left">
                    
                    {/* Badge */}
                    <div 
                      className={`inline-flex items-center gap-1.5 bg-rose-600/90 text-white font-bold text-[10px] md:text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 sm:mb-6 border border-rose-400/30 shadow-lg ${
                        isActive ? 'animate-slide-up-1' : ''
                      }`}
                    >
                      
                    </div>

                    {/* Headline */}
                    <h1 
                      className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight sm:leading-none tracking-tight ${
                        isActive ? 'animate-slide-up-2' : ''
                      }`}
                    >
                      {slide.headline}
                    </h1>

                    {/* Subheading */}
                    <p 
                      className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-stone-200 leading-relaxed font-medium ${
                        isActive ? 'animate-slide-up-3' : ''
                      }`}
                    >
                      {slide.subheading}
                    </p>

                    {/* Buttons / CTA */}
                    <div className={`mt-8 sm:mt-10 flex flex-wrap gap-4 ${isActive ? 'animate-slide-up-4' : ''}`}>
                      <button
                        onClick={() => scrollToSection('produk')}
                        className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-xl shadow-lg shadow-rose-950/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 group focus:outline-none"
                      >
                        {slide.ctaText}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                      
                      
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Controllers (Prev/Next Arrows) */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-white/10 bg-black/20 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-rose-500 hover:scale-105 active:scale-95"
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-white/10 bg-black/20 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-rose-500 hover:scale-105 active:scale-95"
        aria-label="Slide berikutnya"
      >
        <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
      </button>

      {/* Bottom Dot Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              index === current 
                ? 'w-8 h-2.5 bg-rose-600' 
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Buka slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
