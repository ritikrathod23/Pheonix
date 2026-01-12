import React from "react";
import ImageCarousel from "../ui/ImageCarousel";

function ShowcasingBestWork() {
  return (
    <div className="py-16 px-8 md:px-16 lg:px-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="w-12 h-0.5 bg-black"></div>
        </div>
        <span className="text-black text-sm font-medium tracking-wide">
          Creative Project
        </span>
        <div className="flex items-center gap-2">
          <div className="w-12 h-0.5 bg-black"></div>
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-5xl font-semibold mb-4">Showcasing Our Best </h3>
          <h3 className="text-5xl font-semibold mb-4">Work</h3>
        </div>
        <button className="bg-gradient-to-l from-lime-200 to-green-400/70 rounded-2xl px-12 py-4 rounded-xl">
          <span>View All</span>
        </button>
      </div>

      <div>
        <ImageCarousel />
      </div>
    </div>
  );
}

export default ShowcasingBestWork;
