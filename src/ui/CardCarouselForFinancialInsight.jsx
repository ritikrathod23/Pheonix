import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

const CardCarouselForFinancialInsight = ({ items }) => {
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
      const newSlidesQty =
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      setSlidesQty(newSlidesQty);
      setCurrentIndex((prev) => Math.min(prev, items?.length - newSlidesQty));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [items?.length]);

  useEffect(() => {
    if (isDragging) {
      document.body.style.userSelect = "none";
    } else {
      document.body.style.userSelect = "";
    }
    return () => {
      document.body.style.userSelect = "";
    };
  }, [isDragging]);

  const calculateTransform = () => {
    const baseTranslate = -(currentIndex * (100 / slidesQty));
    const dragOffset = isDragging ? currentTranslateX / slidesQty : 0;
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
          className={`flex transition-transform ${
            isDragging
              ? "duration-0 cursor-grabbing"
              : "duration-300 cursor-grab"
          }`}
          style={{
            transform: `translateX(${calculateTransform()}%)`,
            width: `${(items?.length / slidesQty) * 100}%`,
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
                  image={item?.image}
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
                ? "bg-gradient-to-l from-lime-200 to-green-400/70 w-8 h-3"
                : "bg-gray-400 w-3 h-3 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, description, image }) => {
  return (
    <div className="group w-[400px] h-[450px] text-white max-w-md bg-neutral-800 rounded-3xl shadow-lg hover:shadow-xl transition-all space-y-5  duration-500 p-4 py-6 overflow-hidden">
      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

      {/* Description/Review - Slides up from bottom, no space when hidden */}
      <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out">
        <p className="text-gray-100 text-md leading-relaxed transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          {description}
        </p>
      </div>

      {/* Image - Shrinks on hover */}
      <div className="relative mt-10 h-80 group-hover:mt-0 group-hover:h-64 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out">
        <img
          src={image}
          alt="User image"
          draggable="false"
          className="
        rounded-xl 
        object-cover 
        w-full 
        h-full 
        transition-transform 
        duration-500
      "
        />
      </div>
    </div>
  );
};

export const carouselItems = [
  {
    key: 1,
    title: "Research-First Approach",
    description:
      "No guesswork, just data and disciplined analysis.",
    image:
      "https://images.unsplash.com/photo-1752659504296-16a5fd9fa86a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: 2,
    title: "Easy-to-Understand Guidance",
    description: "We simplify markets for smarter decisions.",
    image:
      "https://images.unsplash.com/photo-1758873271761-6cfe9b4f000c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: 3,
    title: "Actionable Recommendations",
    description: "Clear entry/exit signals and risk co",
    image:
      "https://images.unsplash.com/photo-1714974528796-e4e7a077d0cc?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

];

// Example Usage
export default function App() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <CardCarouselForFinancialInsight items={carouselItems} />
      </div>
    </div>
  );
}
