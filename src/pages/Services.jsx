import React from "react";
import FinancialInsight from "../components/FinancialInsight";
import SendQuery from "../components/SendQuery";
import TailoredServices from "../components/TailoredServices";
import { ArrowUp, LineChart } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import {
  FileText,
  HandCoins,
  TrendingUp,
  Clock,
  Landmark,
  Monitor,
  BanknoteArrowUp,
  Globe,
  Coins,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: BanknoteArrowUp,
      title: "Cash Intraday",
      description:
        "Intraday Cash Segment Stocks for Small Traders (1-2 Trade Calls Per Day)",
    },
    {
      id: 2,
      icon: Monitor,
      title: "Index Options",
      description:
        "Options Trading Calls for F&O Traders (1-5 Trade Calls Per Day)",
    },
    {
      id: 3,
      icon: Clock,
      title: "Stock Options",
      description:
        "Options Trading Calls for F&O Traders (1-5 Trade Calls Per Day)",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Growth Stocks",
      description:
        "Growth Stock For Medium-Term Investors (5-10 Trade Calls Per Month)",
    },
    {
      id: 5,
      icon: Coins,
      title: "Penny Stocks",
      description:
        "Stocks with less than Rs.100 for a Fundamental Turnaround (1- 5 Trade Calls Per Week)",
    },
    {
      id: 6,
      icon: HandCoins,
      title: "Futures Intraday",
      description:
        "Intraday Stock Futures Segment Trading Calls for F&O Traders (1-2 Trade Calls Per Day)",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[450px] ">
        <img className="absolute inset-0 w-full h-full object-cover" src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/d9/e5/f2/c1/44/v1_E10/E10TCDP.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=feed81f890ddedcb53429bd1b56aefa445b936d7ed488fecf0bc2765ec212f5e" alt="about" />
        <div className="absolute inset-0 bg-green-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl text-white mt-28 font-bold text-center">
            Services
          </h1>
          <p className="text-2xl text-white mt-8 font-bold text-center">
            Our Research Services — Built for Better Investing
          </p>
        </div>
      </div>
      <div className="bg-green-950/80">
        <div className="grid bg-gray-50 rounded-t-[60px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 md:px-8 lg:px-40 py-20 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <TailoredServices />

      <div className="bg-gray-100 ">
        <FinancialInsight />
      </div>
      <div className="bg-white">
        <SendQuery />
      </div>

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
