import React from "react";
import ImageCarousel from "../ui/ImageCarousel";

function ShowcasingBestWork() {
  return (
    <div className="py-12 px-10">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-bold  mb-4">Showcasing Our Best Work</h3>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
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
