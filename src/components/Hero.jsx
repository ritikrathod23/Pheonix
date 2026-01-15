import React from "react";
import { Compass, LineChart, CheckCircle2, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 z-1 mt-10 relative bg-white rounded-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center justify-start gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-12 h-0.5 bg-black"></div>
              </div>
              <span className="text-sm font-medium tracking-wide">
                Our Mission
              </span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-black"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900">
              Boosting Your Company
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              We aim to empower investors — from beginners to seasoned traders —
              with research that unlocks clarity, confidence and long-term
              success in the financial markets.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Make research accessible and actionable
                  </h3>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <LineChart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Fuel disciplined investing with logic and data
                  </h3>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Deliver clarity in volatile markets
                  </h3>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-l from-lime-200 to-green-400/70 hover:bg-green-700  py-4 px-8 rounded-lg inline-flex items-center space-x-2 transition-colors">
              <span>Get Started</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="">
            {/* Decorative Circles */}
            <div className="flex items-center justify-center">
              <div class="w-20 h-40 hidden sm:block  bg-gradient-to-l from-lime-200 to-green-400/70 rounded-r-full"></div>
              <div class="w-30 h-60 hidden sm:block bg-gradient-to-l from-lime-200 to-green-400/70 rounded-r-full"></div>
              <div className="flex items-center justify-center">
                <div class="w-40 h-80 bg-gradient-to-l from-lime-200 to-green-400/70 rounded-r-full overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Business professional with tablet"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="w-50 h-100 bg-gradient-to-l from-lime-200 to-green-400/70 rounded-r-full overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Business professional with tablet"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
