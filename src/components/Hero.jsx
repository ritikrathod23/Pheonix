import React from "react";

const Hero = () => {
  return (
    <section className="py-20 bg-white rounded-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-gray-900">
              Boosting Your Company
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              We provide comprehensive financial solutions and strategic
              planning to help your business reach new heights with smart
              financing options.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Finance Support Online
                  </h3>
                  <p className="text-gray-600">
                    Access expert financial guidance anytime, anywhere
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Strategic Goal Planning
                  </h3>
                  <p className="text-gray-600">
                    Customized strategies for long-term success
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg inline-flex items-center space-x-2 transition-colors">
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
              <div class="w-20 h-40 bg-green-500 rounded-r-full"></div>
              <div class="w-30 h-60 bg-green-500 rounded-r-full"></div>
              <div className="flex items-center justify-center">
                <div class="w-40 h-80 bg-green-500 rounded-r-full overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Business professional with tablet"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="w-50 h-100 bg-green-500 rounded-r-full overflow-hidden">
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
