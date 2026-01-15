import React from "react";

const Stats = () => {
  return (
    <div className="w-full flex items-center justify-center py-8 lg:py-0">
      {/* Circle - Only visible on large screens */}
      <div className="absolute hidden lg:flex left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-56 h-56 items-center justify-center z-20">
        {/* Outer Border Circle */}
        <div className="absolute w-56 h-56 rounded-full border-2 border-white opacity-40"></div>

        {/* Inner Gradient Circle */}
        <div className="w-48 h-48 rounded-full bg-gradient-to-l from-lime-200 to-green-400/70 flex items-center justify-center text-gray-900 font-semibold text-xl text-center leading-tight shadow-lg">
          <span className="animate-bounce">Scroll For More</span>
        </div>
      </div>

      {/* Curve Container */}
      <div className="inner-curve grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 relative z-0">
        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <p className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            1000<span className="text-green-400">+</span>
          </p>
          <p className="text-white text-xs md:text-sm mt-2">
            Successful Research Calls

          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <p className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            500<span className="text-green-400">K</span>
          </p>
          <p className="text-white text-xs md:text-sm mt-2">
            Active Subscribers
          </p>
        </div>

        {/* Empty space for circle - Only on large screens */}
        <div className="hidden lg:flex"></div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <p className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            10<span className="text-green-400">+</span>
          </p>
          <p className="text-white text-xs md:text-sm mt-2">Asset Classes Covered</p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <p className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
             100<span className="text-green-400">%</span>
          </p>
          <p className="text-white text-xs md:text-sm mt-2">
            SEBI-Registered Investment Research Firm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
