import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.png";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[450px] bg-green-950/80">
        <img className="absolute inset-0 w-full h-full object-cover" src={aboutImage} alt="about" />
        <div className="absolute inset-0 bg-green-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl text-white mt-28 font-bold text-center">
            About Us / Our Identity
          </h1>
          <p className="text-2xl text-white mt-8 font-bold text-center">
            Trusted SEBI-Registered Investment Research
          </p>
        </div>
      </div>

      {/* Main Content - Overlapping Hero */}
      <div className="relative -mt-16 z-20">
        <div className="bg-gray-50 rounded-t-[60px] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section 1: Who We Are */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>
              <span className="text-black text-sm font-medium tracking-wide">
                Who We Are
              </span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-black"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
            </div>

            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12">
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Pheonix Capital Research
                </motion.h2>
                <motion.p
                  className="text-gray-700 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  We are a{" "}
                  <span className="font-semibold text-green-600">
                    SEBI-registered investment research firm{" "}
                  </span>
                  dedicated to providing professional services for trading stocks and commodities, aiming to maximize client profits through market knowledge, expertise, fundamental monetary concepts, and fair, knowledgeable training.
                </motion.p>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.2
                      }
                    }
                  }}
                >
                  <motion.div
                    className="text-center"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 30 },
                      visible: { opacity: 1, scale: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="w-16 h-16 p-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">
                        15+
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Years Experience
                    </h3>
                    <p className="text-gray-600">Market expertise</p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 30 },
                      visible: { opacity: 1, scale: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="w-16 h-16 p-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">
                        500+
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Research Reports
                    </h3>
                    <p className="text-gray-600">Published insights</p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 30 },
                      visible: { opacity: 1, scale: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="w-16 h-16 p-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">
                        98%
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Success Rate
                    </h3>
                    <p className="text-gray-600">Client satisfaction</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Section 2: Our Values */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="w-12 h-0.5 bg-black"></div>
                </div>
                <span className="text-black text-sm font-medium tracking-wide">
                  Our Values
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-black"></div>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.15
                      }
                    }
                  }}
                >
                  <motion.div
                    className="flex items-start space-x-4"
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-green-600">
                        ✓
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Research-Driven
                      </h3>
                      <p className="text-gray-700">
                        Data-backed analysis, not speculation
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-green-600">
                        ✓
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Client-Focused
                      </h3>
                      <p className="text-gray-700">
                        Your success is our priority
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-green-600">
                        ✓
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Transparent
                      </h3>
                      <p className="text-gray-700">
                        Clear, honest communication
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Section 3: Our Expertise */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="w-12 h-0.5 bg-black"></div>
                </div>
                <span className="text-black text-sm font-medium tracking-wide">
                  Our Expertise
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-black"></div>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.2
                      }
                    }
                  }}
                >
                  <motion.div
                    className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Equity Research
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Deep stock analysis with entry/exit points
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Multi-Asset Coverage
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Stocks, commodities, forex & more
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Market Commentary
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Daily insights & trend analysis
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;