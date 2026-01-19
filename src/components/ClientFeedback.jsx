import React from "react";

import CardCarousel from "../ui/CardCarousel";
import { motion } from "framer-motion";
import { useRef } from "react";

function ClientFeedback() {
  const scrollRef = useRef(null)
  return (
    <div className=" rounded-t-[60px] px-10 ">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="w-12 h-0.5 bg-black "></div>
        </div>
        <span className=" text-sm font-medium tracking-wide">Testimonial</span>
        <div className="flex items-center gap-2">
          <div className="w-12 h-0.5 bg-black"></div>
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className=" text-4xl font-bold">Client feedback And reviews</h2>
        <p className="text-gray-800 py-3 mb-10">What Our Investors Say</p>
      </div>
      <motion.div
        ref={scrollRef}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <CardCarousel />
      </motion.div>
    </div>
  );
}

export default ClientFeedback;
