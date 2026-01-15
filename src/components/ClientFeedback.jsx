import React from "react";

import CardCarousel from "../ui/CardCarousel";

function ClientFeedback() {
  return (
    <div className="bg-gradient-to-t from-black to-neutral-800 rounded-t-[60px] px-10 py-20">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-12 h-0.5 bg-white"></div>
        </div>
        <span className="text-white text-sm font-medium tracking-wide">
          Testimonial
        </span>
        <div className="flex items-center gap-2">
          <div className="w-12 h-0.5 bg-white"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-white text-4xl font-bold">
          Client feedback And reviews
        </h2>
        <p className="text-gray-100 py-3 mb-10">
         What Our Investors Say
        </p>
      </div>
      <CardCarousel />
    </div>
  );
}

export default ClientFeedback;
