import React from "react";

import CardCarouselForFinancialInsight from "../../ui/CardCarouselForFinancialInsight";

function FinancialInsight() {
  return (
    <div className="bg-white rounded-t-[60px] px-10 pt-10">
      <div className="flex flex-col items-center">
        <h2 className=" text-4xl font-bold">
          Why Choose Us / Built With Your Needs
        </h2>
        <p className="text-gray- my-5  mb-10">
          Why Investors Trust Us
        </p>
      </div>
      <CardCarouselForFinancialInsight />
    </div>
  );
}

export default FinancialInsight;
