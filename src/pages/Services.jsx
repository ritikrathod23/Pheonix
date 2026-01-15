import React from "react";
import FinancialInsight from "../components/FinancialInsight";
import SendQuery from "../components/SendQuery";
import TailoredServices from "../components/TailoredServices";
import { ArrowUp } from "lucide-react";

const Services = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-950/80 h-[450px] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl text-white mt-28 font-bold text-center">
            Services
          </h1>
          <p className="text-2xl text-white mt-8 font-bold text-center">
            Our Research Services — Built for Better Investing
          </p>
        </div>
      </div>

      <TailoredServices />

      <FinancialInsight />

      <SendQuery />

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors shadow-lg z-50"
      >
        <ArrowUp className="w-6 h-6 text-black" />
      </button>
    </div>
  );
};

export default Services;
