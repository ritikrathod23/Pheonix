import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const cards = [
  {
    id: 1,
    title: "Mountain View",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
    alt: "Professional woman",
  },
  {
    id: 2,
    title: "Business Strategy",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80",
    alt: "Business meeting",
  },
  {
    id: 3,
    title: "Night Desert",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    alt: "Team collaboration",
  },
  {
    id: 4,
    title: "Ocean Breeze",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    alt: "Financial analysis",
  },
];

// Triple the cards for seamless loop (3 sets visible)
const tripleCards = [...cards, ...cards, ...cards];

export default function AutoScrollReel() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 272; // w-64 (256px) + gap-6 (24px) = 280px, adjusted for calculation
  const gap = 24;

  // Auto-scroll with pause between cards
  useEffect(() => {
    const scrollSequence = async () => {
      while (true) {
        // Wait 2 seconds before scrolling
        await new Promise((resolve) => setTimeout(resolve, 2000));
        
        // Scroll to next card
        const nextIndex = currentIndex + 1;
        await controls.start({
          x: -(nextIndex * (cardWidth + gap)),
          transition: {
            duration: 0.8,
            ease: [0.32, 0.72, 0, 1],
          },
        });
        
        setCurrentIndex(nextIndex);
        
        // Reset position seamlessly when reaching the end of first set
        if (nextIndex >= cards.length) {
          // Instantly jump back to start (first set)
          await controls.set({ x: 0 });
          setCurrentIndex(0);
        }
      }
    };

    scrollSequence();
  }, [controls, currentIndex]);

  // Calculate center card (the middle of 3 visible cards)
  const getCenterIndex = (index) => {
    const adjustedIndex = index % cards.length;
    const currentAdjusted = currentIndex % cards.length;
    // Center card is currentIndex + 1 (if showing 3 cards, middle is the second one)
    const centerAdjusted = (currentAdjusted + 1) % cards.length;
    return adjustedIndex === centerAdjusted;
  };

  return (
    <div className="overflow-hidden w-full py-6">
      <div className="max-w-7xl mx-auto">
        {/* Show only 3 cards viewport */}
        <div className="overflow-hidden">
          <motion.div
            animate={controls}
            className="flex gap-6"
            style={{ width: "max-content" }}
          >
            {tripleCards.map((item, i) => {
              const isCenter = getCenterIndex(i);
              
              return (
                <motion.div
                  key={i}
                  animate={{
                    scale: isCenter ? 1.05 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="w-96 h-[500px] rounded-xl overflow-hidden relative flex-shrink-0"
                >
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                    alt={item.alt}
                  />

                  {/* Center Card Overlay */}
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-gray-800/30 backdrop-blur-[2px]"
                    />
                  )}

                  {/* Gradient + Title */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="p-4">
                      <motion.h2
                        animate={{
                          scale: isCenter ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                        className="text-white font-semibold text-lg drop-shadow-lg"
                      >
                        {item.title}
                      </motion.h2>
                    </div>
                  </div>

                  {/* Center Indicator */}
                  {isCenter && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full shadow-lg"
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-full ${
                index === (currentIndex % cards.length)
                  ? "bg-green-400 w-8 h-3"
                  : "bg-gray-500 w-3 h-3"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}