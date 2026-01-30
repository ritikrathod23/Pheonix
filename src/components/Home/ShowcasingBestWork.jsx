import React from "react";
import CardCarouselForShowingWork from "../../ui/CardCarouselForShowingWork";

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
          <h3 className="text-3xl sm:text-5xl font-semibold">
            Showcasing Our Best
          </h3>
          <h3 className="text-3xl sm:text-5xl font-semibold mb-4">Work</h3>
        </div>
      </div>

      <div>
        <CardCarouselForShowingWork />
        {/* <ImageCarousel /> */}
      </div>
    </div>
  );
}

export default ShowcasingBestWork;
