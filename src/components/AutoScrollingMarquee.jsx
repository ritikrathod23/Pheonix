import React from 'react';
import logo1 from "../assets/logo1.png"


export default function AutoScrollingMarquee({ logo }) {
  const scrollingText = "• Featured insights in major newsletters •  Trusted by hundreds of subscribers ";

  return (
    <div className="w-full bg-white py-4 overflow-hidden group">
      <div className="relative flex">
        {/* First copy of text */}
        <div className="flex animate-scroll whitespace-nowrap">
          {scrollingText.split(' • ').map((item, index) => (
            <span key={`first-${index}`} className="flex items-center">
              {/* Logo before each text item */}
              {/* <img 
                src={logo1} 
                alt="Logo" 
                className="h-12 w-12 bg-black sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain mr-3 sm:mr-4 lg:mr-6"
              /> */}
              <span className="text-gray-300 text-4xl sm:text-6xl lg:text-[100px] font-medium mx-4 sm:mx-6 lg:mx-8 hover:bg-gradient-to-r hover:from-green-400 hover:to-lime-200 hover:bg-clip-text hover:text-transparent transition-all duration-300">
                {item}
              </span>
              {index < scrollingText.split(' • ').length - 1 && (
                <span className="text-green-400 mx-2 sm:mx-3 lg:mx-4">•</span>
              )}
            </span>
          ))}
        </div>

        {/* Second copy of text for seamless loop */}
        <div className="flex animate-scroll whitespace-nowrap">
          {scrollingText.split(' • ').map((item, index) => (
            <span key={`second-${index}`} className="flex items-center">
              {/* Logo before each text item */}
              <img 
                src={logo} 
                alt="Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain mr-3 sm:mr-4 lg:mr-6"
              />
              <span className="text-gray-300 text-4xl sm:text-6xl lg:text-[100px] font-medium mx-4 sm:mx-6 lg:mx-8 hover:bg-gradient-to-r hover:from-green-400 hover:to-lime-200 hover:bg-clip-text hover:text-transparent transition-all duration-300">
                {item}
              </span>
              {index < scrollingText.split(' • ').length - 1 && (
                <span className="text-green-400 mx-2 sm:mx-3 lg:mx-4">•</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Add the animation CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

// Alternative version with different styling
export function AutoScrollingMarqueeAlt({ logo }) {
  const items = [
    "Latest Updates",
    "Breaking News", 
    "Technology Trends",
    "Market Analysis",
    "Financial Insights",
    "Expert Advice",
    "Premium Services"
  ];

  return (
    <div className="w-full bg-black py-3 overflow-hidden border-y border-gray-800 group">
      <div className="relative flex">
        {/* First copy */}
        <div className="flex animate-scroll-alt whitespace-nowrap">
          {items.map((item, index) => (
            <div key={`alt-first-${index}`} className="flex items-center mx-6">
              {/* Logo before each text item */}
              <img 
                src={logo} 
                alt="Logo" 
                className="h-8 w-8 object-contain mr-3"
              />
              <span className="text-white text-base font-medium hover:bg-gradient-to-r hover:from-green-400 hover:to-lime-200 hover:bg-clip-text hover:text-transparent transition-all duration-300">
                {item}
              </span>
              <span className="text-green-400 text-3xl ml-6">•</span>
            </div>
          ))}
        </div>

        {/* Second copy for seamless loop */}
        <div className="flex animate-scroll-alt whitespace-nowrap">
          {items.map((item, index) => (
            <div key={`alt-second-${index}`} className="flex items-center mx-6">
              {/* Logo before each text item */}
              <img 
                src={logo} 
                alt="Logo" 
                className="h-8 w-8 object-contain mr-3"
              />
              <span className="text-white text-base font-medium hover:bg-gradient-to-r hover:from-green-400 hover:to-lime-200 hover:bg-clip-text hover:text-transparent transition-all duration-300">
                {item}
              </span>
              <span className="text-green-400 text-3xl ml-6">•</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-alt {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-alt {
          animation: scroll-alt 25s linear infinite;
        }

        .group:hover .animate-scroll-alt {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}