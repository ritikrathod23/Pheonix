import { ArrowRight, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import FormImage from "../assets/FormImg.jpg";

function ContactUSForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all", // Validate on blur
  });

  const onSubmit = async (data) => {
    console.log("formData", data);
    setLoading(true);

    // Simulate API Call
    setTimeout(() => {
      toast.success("Form Submitted Successfully! We'll contact you within 12 hours.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
      reset(); // Reset form after successful submission
    }, 2000);
  };

  return (
    <div className="rounded-t-[60px] mt-70">
      <div className="relative">
        <img
          src={FormImage}
          alt=""
          className="w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[800px] xl:h-[800px] object-cover rounded-t-[60px] brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/20 to-transparent rounded-t-[60px]"></div>
        {/* Form overlay */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-end px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-4 sm:py-8 mb-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3   sm:space-y-2 md:space-y-5 w-full p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl h-full min-h-[150px] max-h-[500px] sm:max-h-[580px] sm:min-h-[500px] md:min-h-[500px] md:max-h-[670px] lg:min-h-[500px] lg:max-h[670px]"
          >
            <h2 className="text-sm sm:text-lg md:text-xl font-bold">
              Contact
            </h2>
            <h1 className="text-x sm:text-4xl font-bold text-gray-800">
             Request a Call back
            </h1>

            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                placeholder="Name*"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border ${
                  errors.name ? "border-red-500" : "border-white/30"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  errors.name ? "focus:ring-red-400" : "focus:ring-green-400"
                } text-gray-600 placeholder-gray-400 text-sm sm:text-base`}
              />
              {errors.name && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-xs sm:text-sm">
                  <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{errors.name.message}</span>
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
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
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border ${
                  errors.email ? "border-red-500" : "border-white/30"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-400" : "focus:ring-green-400"
                } text-gray-600 placeholder-gray-400 text-sm sm:text-base`}
              />
              {errors.email && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-xs sm:text-sm">
                  <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{errors.email.message}</span>
                </div>
              )}
            </div>

            {/* Phone Field */}
            <div className="relative">
              <input
                type="tel"
                placeholder="Phone Number*"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border ${
                  errors.phone ? "border-red-500" : "border-white/30"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  errors.phone ? "focus:ring-red-400" : "focus:ring-green-400"
                } text-gray-600 placeholder-gray-400 text-sm sm:text-base`}
              />
              {errors.phone && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-xs sm:text-sm">
                  <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{errors.phone.message}</span>
                </div>
              )}
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                placeholder="Message*"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                rows={3}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border ${
                  errors.message ? "border-red-500" : "border-white/30"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "focus:ring-red-400"
                    : "focus:ring-green-400"
                } text-gray-600 placeholder-gray-400 resize-vertical text-sm sm:text-base`}
              />
              {errors.message && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-xs sm:text-sm">
                  <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{errors.message.message}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 w-full bg-gradient-to-l from-lime-200 to-green-400/70 hover:bg-green-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 group text-sm sm:text-base ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUSForm;
