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
      badge: "Expert Insights for Confident Investing",
      heading: "Research Calls For Every Investor",
      description:
        "India's Top SEBI-Registered (INH000022446) Investment Firm: Pay only for Successful Research Calls.",
      buttonText: "GET EXPERT ADVICE NOW",
    },
    {
      id: 2,
      badge: "Expert Insights to Power Investment Decisions",
      heading: "Research Calls For Every Trade",
      description:
        "With our trusted regulations and experience, you can easily & safely build your investment assets.",
      buttonText: "START YOUR JOURNEY",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SLIDER */}
          <div className="relative w-full h-[420px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={contentItems[currentIndex].id}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 p-4 text-white space-y-6"
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

                <div className="flex gap-3 pt-4">
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
                      index === currentIndex ? "#4ade80" : "rgba(255,255,255,0.4)",
                  }}
                  className="h-2 rounded-full"
                />
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            variants={formContainer}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <motion.div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md">
              <motion.h2
                variants={formItem}
                className="text-2xl font-bold text-gray-900 mb-5"
              >
                FREE CONSULTATION
              </motion.h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {["fullName", "email", "mobile"].map((field, i) => (
                  <motion.div key={i} variants={formItem}>
                    <input
                      placeholder={
                        field === "fullName"
                          ? "Full Name*"
                          : field === "email"
                            ? "Email Address*"
                            : "Mobile Number*"
                      }
                      {...register(field, { required: true })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                    />
                  </motion.div>
                ))}

                <motion.div variants={formItem}>
                  <textarea
                    rows={4}
                    placeholder="Message"
                    {...register("message", { required: true })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                  />
                </motion.div>

                <motion.div variants={formItem} className="flex gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-green-400 to-lime-200 text-gray-900 font-bold py-3 rounded-full shadow-lg"
                  >
                    SUBMIT NOW
                  </motion.button>

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-r from-green-400 to-lime-200 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                  >
                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
