import React from "react";

const TrustedPartners = () => {
  const partners = [
    { name: "Forbes", width: "w-24" },
    { name: "Bloomberg", width: "w-32" },
    { name: "Reuters", width: "w-28" },
    { name: "Wall ", width: "w-36" },
    { name: "Financial ", width: "w-32" },
    { name: "CNBC", width: "w-20" },
  ];
  const partners2 = [
    { name: "Forbes", width: "w-24" },
    { name: "Bloomberg", width: "w-32" },
    { name: "Reuters", width: "w-28" },
    { name: "Wall ", width: "w-36" },
    { name: "Financial", width: "w-32" },
    { name: "CNBC", width: "w-20" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600">
            Partnered with industry leaders worldwide
          </p>
        </div>
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="marquee">
            <div className="marquee-content">
              {partners.concat(partners).map((partner, index) => (
                <div
                  key={index}
                  className="flex mx-4  border border-gray-200 rounded-2xl text-xl p-4 items-center justify-center transform transition-all duration-1000 hover:scale-105"
                >
                  <div
                    className={`${partner.width} h-12 flex items-center justify-center`}
                  >
                    <div className="text-gray-400 font-bold text-lg uppercase tracking-wider">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="marquee reverse">
            <div className="marquee-content">
              {partners2.concat(partners2).map((partner, index) => (
                <div
                  key={index}
                  className="flex mx-4  border border-gray-200 rounded-2xl text-xl p-4 items-center justify-center transform transition-all duration-1000 hover:scale-105"
                >
                  <div
                    className={`${partner.width} h-12 flex items-center justify-center`}
                  >
                    <div className="text-gray-400 font-bold text-lg uppercase tracking-wider">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
