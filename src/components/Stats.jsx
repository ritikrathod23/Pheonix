import React from "react";

const Stats = () => {
  return (
    <div className="w-full flex items-center justify-center">

      {/* circles */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 flex items-center justify-center z-10">
        {/* Outer Border Circle */}
        <div className="absolute w-56 h-56 rounded-full border-2 border-white opacity-40"></div>

        {/* Inner Gradient Circle */}
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center text-gray-900 font-semibold text-xl text-center leading-tight shadow-lg">
          Scroll For More
        </div>
      </div>
      {/* curve */}
      <div className="inner-curve  bg-black/25 backdrop-blur-sm relative z-0"></div>
    </div>
  );
};

export default Stats;
