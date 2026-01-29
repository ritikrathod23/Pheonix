import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  const [currentIndex, setCurrentIndex] = useState(0);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    toast.success("Form submitted successfully! We'll get back to you soon.", {
      position: "top-right",
      autoClose: 3000,
    });
    reset();
  };

  const contentItems = [
    {
      id: 1,
      badge: "Professional Market Research & Trading Calls",
      heading:
        "Research-Driven Trading Calls with a Focus on Accuracy, Discipline & Risk Management",
      description:
        "Phoenix Capital Research is a SEBI-registered research firm providing high-accuracy trading calls across multiple market segments, trusted by a growing and diverse client base.",
      buttonText: "GET EXPERT TRADING CALLS",
    },
    {
      id: 2,
      badge: "A Research-First Approach to Trading",
      heading: "Trading Backed by Structure, Clarity & Discipline",
      description:
        "At Phoenix Capital Research, our focus is on delivering structured, data-driven trading calls designed to simplify market participation. Our goal is to remove uncertainty, reduce emotional decision-making, and help traders operate with clarity and confidence.",
      buttonText: "LEARN HOW WE WORK",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  /* Animation Variants */
  const slideVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: 80, transition: { duration: 0.8 } },
  };

  const formContainer = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.08 },
    },
  };

  const formItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="relative pt-20 w-full min-h-screen overflow-hidden">
      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className=" items-center">
          {/* LEFT SLIDER */}
          <div className="relative w-full h-[420px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={contentItems[currentIndex].id}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 p-4 text-white space-y-6 flex flex-col items-center justify-center text-center"
              >
                <span className="inline-block text-xs font-bold uppercase bg-white/50 px-4 py-1.5 rounded-md">
                  {contentItems[currentIndex].badge}
                </span>

                <h1
                  className="text-3xl md:text-5xl font-bold"
                  style={{
                    textShadow:
                      "2px 2px 20px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.7)",
                  }}
                >
                  {contentItems[currentIndex].heading}
                </h1>

                <p
                  className="text-gray-100 max-w-xl"
                  style={{
                    textShadow:
                      "2px 2px 20px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.9)",
                  }}
                >
                  {contentItems[currentIndex].description}
                </p>

                <div className="flex gap-3 pt-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-400 to-lime-200 text-gray-900 font-bold px-6 py-3 rounded-full shadow-lg"
                  >
                    {contentItems[currentIndex].buttonText}
                  </motion.button>

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-r from-green-400 to-lime-200 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                  >
                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {contentItems.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  animate={{
                    width: index === currentIndex ? 28 : 8,
                    backgroundColor:
                      index === currentIndex
                        ? "#4ade80"
                        : "rgba(255,255,255,0.4)",
                  }}
                  className="h-2 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
