import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function HeroSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
  });

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
      badge: "Expert Insights to Drive Business",
      heading: "Achieve Your Goals For Tailored Business Consulting Services",
      description:
        "Unlocking your business's potential starts with expert guidance. Our consultants at Advicx bring years of industry of experience.",
      buttonText: "GET EXPERT ADVICE NOW",
    },
    {
      id: 2,
      badge: "Strategic Growth Solutions",
      heading: "Transform Your Business With Professional Guidance",
      description:
        "Empowering businesses through innovative strategies and data-driven insights. Partner with experts who understand your vision.",
      buttonText: "START YOUR JOURNEY",
    },
  ];

  // Auto-switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  return (
    <div className="relative pt-20 w-full min-h-screen  overflow-hidden">
      {/* Content */}
      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE SLIDER */}
          <div className="relative w-full h-[380px] sm:h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden">
            {contentItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 p-2 sm:p-4 md:p-6 text-white space-y-4 sm:space-y-6 transition-all duration-1000 ease-in-out ${index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full pointer-events-none"
                  }`}
              >
                {/* Badge */}
                <span className="inline-block text-xs sm:text-sm tracking-wider font-bold uppercase text-white border bg-white/50 px-3 sm:px-4 py-1.5 rounded-md">
                  {item.badge}
                </span>

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight " style={{ textShadow: '2px 2px 20px rgba(0,0,0,0.7), -1px -1px 12px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.7)' }}>
                  {item.heading}
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-xl "
                  style={{ textShadow: '2px 2px 20px rgba(0,0,0,0.9), -1px -1px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.9)' }}>
                  {item.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-2 sm:pt-4">
                  <button className="bg-gradient-to-r from-green-400 to-lime-200 hover:from-green-500 hover:to-lime-300 text-gray-900 font-bold text-xs sm:text-sm md:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center gap-2">
                    {item.buttonText}
                  </button>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-lime-200 hover:from-green-500 hover:to-lime-300 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg">
                    <ArrowUpRight className="w-5 h-5 text-gray-900" strokeWidth={3} />
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${index === currentIndex
                    ? "bg-green-400 w-7 h-2"
                    : "bg-white/40 w-2 h-2 hover:bg-white/60"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full flex items-center justify-center">
            <div className="bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-xl w-full max-w-md">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                FREE CONSULTATION
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    {...register("fullName", {
                      required: "Full name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className={`w-full px-4 py-3 bg-gray-50 border ${errors.fullName ? "border-red-400" : "border-gray-200"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400 text-sm transition-all`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address*"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-4 py-3 bg-gray-50 border ${errors.email ? "border-red-400" : "border-gray-200"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400 text-sm transition-all`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number*"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Mobile number must be 10 digits",
                      },
                    })}
                    className={`w-full px-4 py-3 bg-gray-50 border ${errors.mobile ? "border-red-400" : "border-gray-200"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400 text-sm transition-all`}
                    maxLength="10"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    rows={4}
                    className={`w-full px-4 py-3 bg-gray-50 border ${errors.message ? "border-red-400" : "border-gray-200"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400 text-sm resize-none transition-all`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-400 to-lime-200 hover:from-green-500 hover:to-lime-300 text-gray-900 font-bold text-sm px-5 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                  >
                    SUBMIT NOW
                  </button>

                  <button
                    type="submit"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-lime-200 hover:from-green-500 hover:to-lime-300 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 shadow-lg"
                  >
                    <ArrowUpRight className="w-5 h-5 text-gray-900" strokeWidth={3} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
