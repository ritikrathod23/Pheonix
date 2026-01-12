import React, { useState } from 'react';
import { ArrowRight, ArrowUp } from 'lucide-react';

export default function ExpandableCards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      number: "01",
      title: "Growth Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      description: "Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Interdum tortor ligula congue sollicitudin erat viverra ac."
    },
    {
      id: 2,
      number: "02",
      title: "Technology Upgrade",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
      description: "Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Interdum tortor ligula congue sollicitudin erat viverra ac."
    },
    {
      id: 3,
      number: "03",
      title: "Finance Advisory",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      description: "Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Interdum tortor ligula congue sollicitudin erat viverra ac."
    },
    {
      id: 4,
      number: "04",
      title: "Risk Planning",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
      description: "Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Interdum tortor ligula congue sollicitudin erat viverra ac."
    },
    {
      id: 5,
      number: "05",
      title: "Process Management",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
      description: "Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Interdum tortor ligula congue sollicitudin erat viverra ac."
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4 h-[750px]">
          {cards.map((card) => {
            const isHovered = hoveredCard === card.id;
            const isAnyHovered = hoveredCard !== null;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                  isHovered 
                    ? 'flex-[3] bg-gradient-to-l from-lime-200 to-green-400/70' 
                    : isAnyHovered 
                    ? 'flex-[0.8]' 
                    : 'flex-1'
                }`}
              >
                {/* Collapsed State - Vertical Text */}
                <div
                  className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-300 ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-l from-lime-200 to-green-400/70 rounded-full flex items-center justify-center text-black font-bold text-xl">
                      {card.number}
                    </div>
                    <h3
                      className="text-2xl font-bold text-black"
                      style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed'
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Expanded State - Full Content */}
                <div
                  className={`absolute inset-0 flex flex-col p-8 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* Number Badge */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl mb-6 border-2 border-black">
                    {card.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                    {card.title}
                  </h3>

                  {/* Image */}
                  <div className="flex-1 mb-6 rounded-2xl overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-black text-base mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Know More Button */}
                  <button className="self-start flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                    Know More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors shadow-lg z-50"
      >
        <ArrowUp className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}