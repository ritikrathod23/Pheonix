import React from 'react';

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80",
      alt: "Beautiful landscape 1"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      alt: "Beautiful landscape 2"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
      alt: "Beautiful landscape 3"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
      alt: "Beautiful landscape 4"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Carousel Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Slides */}
          <div className="relative h-[600px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Pagination Dots - Bottom Center */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'bg-white w-10 h-3'
                    : 'bg-white/50 w-3 h-3 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Info Text */}
        <div className="text-center mt-8 text-white">
          <p className="text-lg">
            Slide {currentSlide + 1} of {slides.length}
          </p>
        </div>
      </div>
    </div>
  );
}