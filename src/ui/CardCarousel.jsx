import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const CardCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const [slidesQty, setSlidesQty] = useState(
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
  );
  const carouselRef = useRef(null);

  const maxIndex = Math.max(0, items?.length - slidesQty);

  const goToSlide = (index) => {
    const clampedIndex = Math.max(0, Math.min(maxIndex, index));
    setCurrentIndex(clampedIndex);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const x = e.clientX || e.touches[0].clientX;
    const diff = x - startX;
    const cardWidth = carouselRef.current.offsetWidth / slidesQty;
    const translateAmount = (diff / cardWidth) * 100;
    
    setCurrentTranslateX(translateAmount);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    const x = e.clientX || e.changedTouches?.[0]?.clientX || startX;
    const diff = x - startX;
    const threshold = carouselRef.current.offsetWidth / (slidesQty * 4);

    if (diff > threshold && currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else if (diff < -threshold && currentIndex < maxIndex) {
      goToSlide(currentIndex + 1);
    }
    
    setCurrentTranslateX(0);
  };

  useEffect(() => {
    const handleResize = () => {
      const newSlidesQty = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      setSlidesQty(newSlidesQty);
      setCurrentIndex(prev => Math.min(prev, items?.length - newSlidesQty));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [items?.length]);

  useEffect(() => {
    if (isDragging) {
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.userSelect = '';
    }
    return () => {
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  const calculateTransform = () => {
    const baseTranslate = -(currentIndex * (100 / slidesQty));
    const dragOffset = isDragging ? (currentTranslateX / slidesQty) : 0;
    return baseTranslate + dragOffset;
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl py-8">
      <div
        ref={carouselRef}
        className="relative min-h-[450px]"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        onMouseLeave={() => {
          if (isDragging) {
            handleMouseUp({ clientX: startX });
          }
        }}
      >
        <div
          className={`flex transition-transform ${isDragging ? 'duration-0 cursor-grabbing' : 'duration-300 cursor-grab'}`}
          style={{
            transform: `translateX(${calculateTransform()}%)`,
            width: `${(items?.length / slidesQty) * 100}%`
          }}
        >
          {items?.map((item, index) => (
            <div
              key={item.key || index}
              className="px-2"
              style={{ width: `${100 / items.length}%` }}
            >
              <div className="flex justify-center items-center w-full h-full">
                <Card 
                  title={item?.title} 
                  description={item?.description}
                  review={item?.review} 
                  name={item?.name} 
                  avatar={item?.avatar} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-x-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-gradient-to-l from-lime-200 to-green-400/70 w-8 h-3'
                : 'bg-gray-400 w-3 h-3 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, description, review, name, avatar }) => {
  const rating = parseInt(review) || 0;
  
  return (
    <div className="w-[400px] h-[400px] text-white space-y-8 max-w-md bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
  
      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3">
        {title}
      </h3>

      {/* Description/Review */}
      <p className="text-gray-100 text-md leading-relaxed mb-6">
        {description}
      </p>

          {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>


      {/* User Info */}
      <div className="flex items-center justify-left gap-8 pt-4 border-t border-gray-100">
        <div>
          <p className="font-semibold text-xl text-white">{name}</p>
          <p className="text-sm text-gray-100">Customer</p>
        </div>
      </div>
    </div>
  );
};

export const carouselItems = [
  {
    key: 1,
    title: "Strategic Trading Support",
    description: "Pheonix Capital’s insights have changed how I trade — clear, actionable & trustworthy.",
    review: "4",
    name: "Rahul S., Active Trader",
    avatar: "https://images.unsplash.com/photo-1554224154-260325c0594e?w=400&h=300&fit=crop"
  },
  {
    key: 2,
    title: "Investment Portfolio Management",
    description: "Their market calls help me stay ahead with confidence.",
    review: "5",
    name: " Priya M., Investor",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop"
  },
];

// Example Usage
export default function App() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <CardCarousel items={carouselItems} />
      </div>
    </div>
  );
}