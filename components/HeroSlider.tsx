'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const slides = [
  {
    title: 'PREMIUM GROOM',
    subtitle: 'Experience Excellence',
    description: 'Where style meets sophistication',
    image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'MASTER BARBERS',
    subtitle: 'Expert Craftsmanship',
    description: 'Precision cuts by seasoned professionals',
    image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'MODERN STYLES',
    subtitle: 'Stay Ahead',
    description: 'Latest trends and timeless classics',
    image: 'https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-all duration-1000 ease-in-out',
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>

          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div
                className={cn(
                  'max-w-2xl transition-all duration-1000 delay-300',
                  index === currentSlide
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-20 opacity-0'
                )}
              >
                <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/20 border border-blue-800/50 rounded-full">
                  <span className="text-blue-800 text-sm font-semibold tracking-wider">
                    {slide.subtitle}
                  </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold text-blue-800 mb-6 leading-tight">
                  {slide.title.split(' ').map((word, i) => (
                    <span
                      key={i}
                      className={cn('inline-block mr-4', i === 1 && 'text-gray-300')}
                      style={{
                        animation:
                          index === currentSlide
                            ? `slideUp 0.8s ease-out ${i * 0.1}s both`
                            : 'none',
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </h1>

                <p className="text-xl text-gray-300 mb-8">
                  {slide.description}
                </p>

                <div className="flex gap-4">
                  <Link href="/contact">
                    <button className="px-8 py-4 bg-blue-800 text-gray-300 font-bold hover:bg-blue-600 transition">
                      Book Appointment
                    </button>
                  </Link>

                  <Link href="/services">
                    <button className="px-8 py-4 border-2 border-gray-300 text-blue-800 font-bold hover:bg-gray-300 transition">
                      Our Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ✅ PERFECT BOTTOM CORNER BUTTONS (HERO ONLY) */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-30
                   p-4 rounded-full bg-black/60 backdrop-blur-md
                   border border-white/20 text-white
                   hover:bg-blue-800 transition active:scale-95"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-30
                   p-4 rounded-full bg-black/60 backdrop-blur-md
                   border border-white/20 text-white
                   hover:bg-blue-800 transition active:scale-95"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
