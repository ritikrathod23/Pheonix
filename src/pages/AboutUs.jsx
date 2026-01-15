import React from "react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-950/80 h-[450px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl text-white mt-28 font-bold text-center">
            About Us / Our Identity
          </h1>
          <p className="text-2xl text-white mt-8 font-bold text-center">
            Trusted SEBI-Registered Investment Research
          </p>
        </div>
      </div>

      <div className="bg-green-950/80">
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-t-[60px]">
          <div className="max-w-7xl mx-auto ">
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

            <div className="mb-16 ">
              <div className="bg-white rounded-3xl shadow-lg p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Pheonix Capital Research
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We are a{" "}
                  <span className="font-semibold text-green-600">
                    SEBI-registered investment research firm
                  </span>
                  dedicated to providing investors and traders with{" "}
                  <span className="font-semibold">
                    clarity, confidence, and intelligent market perspective
                  </span>
                  . Our mission is to break down market complexity and deliver
                  research that's
                  <span className="font-semibold">
                    easy to understand and easy to act on
                  </span>
                  .
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 p-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">
                        10+
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Years Experience
                    </h3>
                    <p className="text-gray-600">Market expertise</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 p-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">
                        500+
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Research Reports
                    </h3>
                    <p className="text-gray-600">Published insights</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 p-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">
                        98%
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Success Rate
                    </h3>
                    <p className="text-gray-600">Client satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Our Values */}
            <div className="mb-16">
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

              <div className="bg-white rounded-3xl shadow-lg p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
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
                  </div>

                  <div className="flex items-start space-x-4">
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
                  </div>

                  <div className="flex items-start space-x-4">
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
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Our Expertise */}
            <div className="mb-16">
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

              <div className="bg-white rounded-3xl shadow-lg p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Equity Research
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Deep stock analysis with entry/exit points
                    </p>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Multi-Asset Coverage
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Stocks, commodities, forex & more
                    </p>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Market Commentary
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Daily insights & trend analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
