import React from "react";

import CardCarouselForFinancialInsight from "../ui/CardCarouselForFinancialInsight";

function FinancialInsight() {
  return (
    <div className=" bg-black rounded-4xl px-10 py-20">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-4xl font-bold">
          Why Choose Us / Built With Your Needs
        </h2>
        <p className="text-gray- my-5 text-white mb-10">
        Why Investors Trust Us
        </p>
      </div>
      <CardCarouselForFinancialInsight />
    </div>
  );
}

export default FinancialInsight;
