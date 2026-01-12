import React from "react";
import FinancialInsight from "../components/FinancialInsight";
import SendQuery from "../components/SendQuery";
import TailoredServices from "../components/TailoredServices";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-950/80 h-[450px] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl text-white mt-28 font-bold text-center mb-8">Services</h1>
        </div>
      </div>

      <TailoredServices />

      <FinancialInsight />

      <SendQuery />
    </div>
  );
};

export default Services;
