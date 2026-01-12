import React from "react";

import CardCarouselForFinancialInsight from "../ui/CardCarouselForFinancialInsight";

function FinancialInsight() {
  return (
    <div className=" bg-black rounded-4xl px-10 py-20">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-4xl font-bold">
          Financial Insight
        </h2>
        <p className="text-gray-100 mb-10">
          Semper vel class aptent taciti sociosqu ad litora. Curabitur facilisi
          cubilia curae hac habitasse platea dictumst.
        </p>
      </div>
      <CardCarouselForFinancialInsight />
    </div>
  );
}

export default FinancialInsight;
