import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
      alt: "Professional woman",
      card: {
        title: "Investor Dialogue",
        description: "Ea ipsam veniam vel numquam sunt vel quia debitis est modi voluptatibus ex quae nihil et galisum quia.",
        stats: [
          { value: "+50", label: "Margin Expansion" },
          { value: "+70%", label: "Order Booked" },
          { value: "+60%", label: "Strategy Output" },
          { value: "+40%", label: "Operating Profits" }
        ]
      }
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80",
      alt: "Business meeting",
      card: {
        title: "Business Growth",
        description: "Strategic planning and execution that delivers measurable results across all key performance indicators.",
        stats: [
          { value: "+85", label: "Client Satisfaction" },
          { value: "+92%", label: "Revenue Growth" },
          { value: "+75%", label: "Market Share" },
          { value: "+65%", label: "Team Efficiency" }
        ]
      }
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
      alt: "Team collaboration",
      card: {
        title: "Team Performance",
        description: "Collaborative excellence driving innovation and success through dedicated teamwork and strategic vision.",
        stats: [
          { value: "+95", label: "Project Success" },
          { value: "+80%", label: "Client Retention" },
          { value: "+70%", label: "Innovation Rate" },
          { value: "+88%", label: "Quality Score" }
        ]
      }
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      alt: "Financial analysis",
      card: {
        title: "Financial Excellence",
        description: "Comprehensive financial strategies that optimize performance and maximize shareholder value consistently.",
        stats: [
          { value: "+120", label: "ROI Increase" },
          { value: "+55%", label: "Cost Reduction" },
          { value: "+82%", label: "Profit Margin" },
          { value: "+67%", label: "Asset Growth" }
        ]
      }
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
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        {/* Carousel Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
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
                
                {/* Overlay Card - Changes with each slide */}
                <div className={`absolute top-1/2 left-1/2 md:left-auto md:right-4 sm:md:right-8 lg:right-12 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-full max-w-xs sm:max-w-md lg:max-w-lg bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}>
                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {slide.card.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {slide.card.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200 mb-6"></div>

                  {/* Stats Grid - 2x2 */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {slide.card.stats.map((stat, idx) => (
                      <div key={idx}>
                        <p className="text-4xl font-bold text-gray-900 mb-2">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-600">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Know Details Button */}
                  <button className="flex items-center gap-2 text-gray-900 font-semibold hover:gap-4 transition-all duration-300">
                    Know Details
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
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
      </div>
    </div>
  );
}