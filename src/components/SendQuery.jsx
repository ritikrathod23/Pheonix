import { MapPin, Phone, Clock, Mail, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function SendQuery() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    toast.success("Query submitted successfully! We'll get back to you soon.", {
      position: "top-right",
      autoClose: 3000,
    });
    reset();
  };



  return (
    <div className="w-full bg-gray-100 rounded-t-[60px] py-16 sm:py-6 px-2 sm:px-8 relative">
      <div className="max-w-7xl mx-auto  p-6 sm:p-12 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="w-12 h-0.5 bg-black"></div>
                </div>
                <span className="text-black text-sm font-medium tracking-wide">Let's Start Talking</span>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-black"></div>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Send Us Your Query
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Porta elementum a enim euismod quam justo lectus. Dis parturient montes nascetur ridiculus mus donec rhoncus.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Company Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-l from-lime-200 to-green-400/70 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Company Address</h3>
                  <p className="text-gray-600">
                    230 Neville Street New<br />
                    Albany, IN 71520
                  </p>
                </div>
              </div>

              {/* Talk To Us */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-l from-lime-200 to-green-400/70 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Talk To Us</h3>
                  <p className="text-gray-600">
                    +919752011727<br />
                  </p>
                </div>
              </div>

              {/* Office Days */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-l from-lime-200 to-green-400/70 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Office Days</h3>
                  <p className="text-gray-600">
                    Mon to Sat: 09:00am-<br />
                    07:00pm<br />
                    <span className="text-gray-500">Sunday : Closed</span>
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-l from-lime-200 to-green-400/70 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Email Us</h3>
                  <p className="text-gray-600">
                    info@pheonixcapital<br />research.com<br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-black mb-8">
              Book Your Free Consultation
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name*"
                    {...register("firstName", {
                      required: "First name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className={`px-4 py-3 bg-gray-100 border ${errors.firstName ? "border-red-400" : "border-transparent"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400 w-full`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name*"
                    {...register("lastName", {
                      required: "Last name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className={`px-4 py-3 bg-gray-100 border ${errors.lastName ? "border-red-400" : "border-transparent"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400 w-full`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4">
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
                    className={`px-4 py-3 bg-gray-100 border ${errors.email ? "border-red-400" : "border-transparent"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400 w-full`}
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
                    placeholder="Phone Number*"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Phone number must be 10 digits",
                      },
                    })}
                    className={`px-4 py-3 bg-gray-100 border ${errors.phone ? "border-red-400" : "border-transparent"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400 w-full`}
                    maxLength="10"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Additional Message"
                  {...register("message")}
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-100 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 placeholder-gray-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-l from-lime-200 to-green-400/70 hover:bg-green-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 group"
              >
                Submit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>


    </div>
  );
}