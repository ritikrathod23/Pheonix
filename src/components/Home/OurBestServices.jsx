import React from "react";
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
  Puzzle,
  Repeat,
  LineChart,
  Layers,
  AlertTriangle,
  ShieldCheck,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

export default function OurServicesSection() {
  const services = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Entry Levels",
    description:
      "Precise entry points shared for every call to help traders enter positions with clarity and confidence.",
  },
  {
    id: 2,
    icon: Target,
    title: "Target Prices",
    description:
      "Clearly defined target levels provided in advance, ensuring disciplined exits and profit booking.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Stop Loss Levels",
    description:
      "Predefined stop loss levels designed to limit downside risk and protect trading capital.",
  },
  {
    id: 4,
    icon: AlertTriangle,
    title: "Risk Considerations",
    description:
      "Each call includes a structured risk perspective to support controlled and responsible trading decisions.",
  },
  {
    id: 5,
    icon: Layers,
    title: "Market Segments Covered",
    description:
      "Calls are provided across multiple market segments to match different trading styles and preferences.",
  },
   {
    id: 6,
    icon: BanknoteArrowUp,
    title: "Equity Cash",
    description:
      "Equity cash market calls with defined levels, suitable for both short-term and positional traders.",
  },
  {
    id: 7,
    icon: LineChart,
    title: "Index Trading",
    description:
      "Index-based trading calls focused on major indices with clear execution and risk control.",
  },
  {
    id: 8,
    icon: Clock,
    title: "Intraday Trading",
    description:
      "Time-bound intraday trading calls designed for quick execution within the same trading session.",
  },
  {
    id: 9,
    icon: Repeat,
    title: "Positional & Swing Trading",
    description:
      "Positional and swing trading calls structured for holding periods ranging from days to weeks.",
  },
  {
    id: 10,
    icon: Coins,
    title: "Commodity & Derivatives",
    description:
      "Commodity and derivative trading calls backed by disciplined analysis and risk-managed strategies.",
  },
  {
    id: 11,
    icon: Puzzle,
    title: "Options Strategy-Based Calls",
    description:
      "Options strategy-based calls with defined structures, controlled risk, and planned reward potential.",
  },

  ];

  const text = "Our Services";

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-12 h-0.5 bg-black"></div>
          </div>
          <span className="text-black text-sm font-medium tracking-wide">
            Services
          </span>
          <div className="flex items-center gap-2">
            <div className="w-12 h-0.5 bg-black"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <motion.h1
            className="text-3xl md:text-6xl py-3 text-center font-bold flex flex-wrap justify-center"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <h4 className="text-center p-2 md:px-40">
            With over 15 years experience and real focus on customer
            satisfaction, you can rely on us for your next renovation, driveway
            sett or home repair. We provide a professional service for private
            and commercial customers.
          </h4>
          <div className="w-16 sm:w-full mt-6 h-1 bg-green-500"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {services.map((service) => (
            <motion.div
              initial={{ opacity: 0, y: 80 }} // Start left + hidden
              whileInView={{ opacity: 1, y: 0 }} // Slide to place when visible
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={service.id}
              className="flex gap-4 sm:gap-5 items-start group"
            >
              {/* Icon Diamond */}
              <motion.div
                transition={{ duration: 0.1, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateY: 180 }}
                className="flex-shrink-0 w-5 h-5 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-green-600 transform flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
              >
                <div className="">
                  <service.icon
                    className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                    strokeWidth={2}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <div className="w-10 h-1 bg-green-500"></div>
                <p className="text-sm pt-6  sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
