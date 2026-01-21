import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import CardCarousel from "../../ui/CardCarousel";

function ClientFeedback({ items }) {
  const data = items || carouselItems;
  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-black rounded-full" />
          <span className="w-12 h-0.5 bg-black" />
        </div>

        <span className="text-sm font-medium tracking-wide text-black">
          Testimonials
        </span>

        <div className="flex items-center gap-2">
          <span className="w-12 h-0.5 bg-black" />
          <span className="w-3 h-3 bg-black rounded-full" />
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Client Feedback & Reviews
        </h2>
        <p className="text-gray-600 mt-2">
          What Our Investors Say
        </p>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6"
      >
        {/* <CardCarousel> */}
        {data?.map(({ key, ...item }, index) => (
          <Card key={key || index} {...item} />
        ))}
        {/* </CardCarousel> */}
      </motion.div>
    </section>
  );
}

export default ClientFeedback;


const Card = ({ title, description, review, name, avatar }) => {
  const rating = Number(review) || 0;

  return (
    <div className="w-[380px] h-[380px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 flex flex-col justify-between">
      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          {description}
        </p>

        {/* Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      {/* User */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">Investor</p>
        </div>
      </div>
    </div>
  );
};


export const carouselItems = [
  {
    key: 1,
    title: "Strategic Trading Support",
    description:
      "Phoenix Capital’s insights have changed how I trade — clear, actionable & trustworthy.",
    review: "4",
    name: "Rahul S., Active Trader",
    avatar:
      "https://images.unsplash.com/photo-1554224154-260325c0594e?w=200",
  },
  {
    key: 2,
    title: "Investment Portfolio Management",
    description:
      "Their market calls help me stay ahead with confidence.",
    review: "5",
    name: "Priya M., Long-Term Investor",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200",
  },
  {
    key: 3,
    title: "Reliable Market Insights",
    description:
      "Consistent research and disciplined strategy made investing stress-free.",
    review: "5",
    name: "Amit K., Equity Investor",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
  },
];

