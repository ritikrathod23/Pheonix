import React from "react";

const Stats = () => {
  return (
    <div className="w-full flex items-center justify-center">
      {/* circles */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 flex items-center justify-center z-10">
        {/* Outer Border Circle */}
        <div className="absolute w-56 h-56 rounded-full border-2 border-white opacity-40"></div>

        {/* Inner Gradient Circle */}
        <div className="w-48 h-48 rounded-full bg-gradient-to-l from-lime-200 to-green-400/70 flex items-center justify-center text-gray-900 font-semibold text-xl text-center leading-tight shadow-lg">
          <span className="animate-bounce">Scroll For More</span>
        </div>
      </div>
      {/* curve */}
      <div className="inner-curve grid grid-cols-5  bg-black/25 backdrop-blur-sm relative z-0">
        <div className="inset-1 flex flex-col items-center justify-center">
          <p className="text-white text-6xl font-bold">10<span className="text-6xl text-green-400">+</span></p>
          <p className="text-white text-sm">Years of Experience</p>
        </div>
        <div className="  flex flex-col items-center justify-center">
          <p className="text-white text-6xl font-bold">15<span className="text-6xl text-green-400">K</span></p>
          <p className="text-white text-sm">Years of Experience</p>
        </div>
        <div className="  flex flex-col items-center justify-center"></div>
        <div className="  flex flex-col items-center justify-center">
          <p className="text-white text-6xl font-bold">97<span className="text-6xl text-green-400">%</span></p>
          <p className="text-white text-sm">Client Retention Rate</p>
        </div>
        <div className="  flex flex-col items-center justify-center">
          <p className="text-white text-6xl font-bold"><span className="text-6xl text-green-400">$</span>25</p>
          <p className="text-white text-sm">High-Value Growth</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
