import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionGoalsSection() {
  const scrollRef = useRef(null);

  return (
    <div className="w-full bg-gray-100 rounded-t-[40px] sm:rounded-t-[60px] relative py-16 sm:py-20 md:py-24 lg:py-28 px-6 sm:px-12 md:px-48 lg:px-48 xl:px-48">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">

            {/* Title */}
            <motion.h2
              ref={scrollRef}
              initial={{ opacity: 0, x: -80 }} // Start left + hidden
              whileInView={{ opacity: 1, x: 0 }} // Slide to place when visible
              transition={{ duration: 0.8, ease: "easeOut" }}
              // viewport={{ root: scrollRef, once: true }} // animates once (optional)
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6"
            >
              Trusted Research Calls for Confident Trading.
            </motion.h2>

            {/* Description */}
            <motion.p
              ref={scrollRef}
              initial={{ opacity: 0, x: -80 }} // Start left + hidden
              whileInView={{ opacity: 1, x: 0 }} // Slide to place when visible
              transition={{ duration: 0.8, ease: "easeOut" }}
              // viewport={{ root: scrollRef, once: true }} // animates once (optional)
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8"
            >
              Pheonix Capital Research is a financial company providing professional services for trading stocks and commodities, aiming to maximize client profits through market knowledge, expertise, fundamental monetary concepts, and fair, knowledgeable training.
            </motion.p>

            {/* Get Started Button */}
            <motion.button
              ref={scrollRef}
              initial={{ opacity: 0, x: -50 }} // Start left + hidden
              whileInView={{ opacity: 1, x: 0 }} // Slide to place when visible
              transition={{ duration: 0.8, ease: "easeOut" }}
              // viewport={{ root: scrollRef, once: true }} // animates once (optional)
              className="flex items-center gap-2 sm:gap-3 bg-gradient-to from-lime-200 to-green-400/70 hover:from-lime-300 hover:to-green-500 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group text-sm sm:text-base"
            >
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Right Side - Video/Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />

              {/* Optional: Corner accent */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-green-400/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 bg-lime-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
