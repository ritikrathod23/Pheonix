import React from "react";

import CardCarousel from "../ui/CardCarousel";

function ClientFeedback() {
  return (
    <div className=" bg-black rounded-4xl px-10 py-20">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-4xl font-bold">
          Client feedback And reviews
        </h2>
        <p className="text-gray-100 mb-10">
          Semper vel class aptent taciti sociosqu ad litora. Curabitur facilisi
          cubilia curae hac habitasse platea dictumst.
        </p>
      </div>
      <CardCarousel />
    </div>
  );
}

export default ClientFeedback;
