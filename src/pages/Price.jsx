import { Check, CreditCard, Building2, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Price() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[450px] ">
        <img className="absolute inset-0 w-full h-full object-cover" src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/50/a1/81/af/38/v1_E10/E10FSVNH.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=4247f267c575aa42a6b7d8cd4b3c880cd7914909c4bb3e7db5d26643ccd36152" alt="about" />
        <div className="absolute inset-0 bg-green-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl text-white mt-28 font-bold text-center">
            Pricing / Plans
          </h1>
          <p className="text-2xl text-white mt-8 font-bold text-center">
            Choose Your Research Plan
          </p>
        </div>
      </div>
      <div className=" bg-green-950/80 ">
        <div className="rounded-t-[60px] py-10 bg-gray-50">
          <div className="flex items-center rounded-full justify-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <div className="w-12 h-0.5 bg-black"></div>
            </div>
            <span className="text-black text-sm font-medium tracking-wide">
              Choose Your Plan
            </span>
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-black"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col space-y-4  justify-center items-center">
            <h1 className="text-4xl px-4 sm:px-2 font-bold">
              Flexible Pricing That fits You
            </h1>
            <h5 className="text-gray-600 text-lg">Choose Your Research Plan</h5>
          </div>

          <div className="w-full bg-gray-50 px-4 sm:px-6 lg:px-6  py-20 flex justify-center">
            <motion.div
              className="w-full max-w-7xl shadow-2xl bg-white rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Top Section */}
              <motion.div
                className="grid grid-cols-1  md:grid-cols-3  divide-gray-200 divide-y md:divide-y-0 md:divide-x  border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                {/* ----- BASIC PLAN ----- */}
                <motion.div
                  className="p-10 text-center"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p className="text-lg font-semibold">• Basic Plan</p>

                  <p className="text-5xl font-bold my-3">
                    $25 <span className="-mt-2 font-normal text-lg">/Week</span>
                  </p>

                  <button className="mt-6 w-full bg-white border border-gray-300 px-6 py-3 rounded-xl text-gray-800 font-medium hover:bg-gray-100 transition">
                    Get Started Now →
                  </button>

                  {/* Basic Plan Features */}
                  <div className="space-y-4 flex flex-col items-start px-10 py-5">
                    {["Daily Market Briefs", " Weekly Equity Picks"].map(
                      (item, i) => (
                        <Feature key={i} text={item} />
                      ),
                    )}
                  </div>
                </motion.div>

                {/* ----- STANDARD PLAN ----- */}
                <motion.div
                  className="p-10 text-center"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p className="text-lg font-semibold">• Premium Plan</p>
                  <p className="text-5xl font-bold my-3">
                    $100{" "}
                    <span className="-mt-2 font-normal text-lg">/Week</span>
                  </p>
                  <button className="mt-6 w-full bg-green-300 hover:bg-green-400 px-6 py-3 rounded-xl text-gray-900 font-medium transition">
                    Get Started Now →
                  </button>

                  {/* Standard Plan Features */}
                  <div className="space-y-4 flex flex-col items-start px-10 py-5">
                    {[
                      "Advanced Multi-Asset Research",
                      "Personalized Portfolio Advice",
                    ].map((item, i) => (
                      <Feature key={i} text={item} />
                    ))}
                  </div>
                </motion.div>

                {/* ----- UNLIMITED PLAN ----- */}
                <motion.div
                  className="p-10 text-center"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p className="text-lg font-semibold">• Elite Plan</p>
                  <p className="text-5xl font-bold my-3">
                    $999{" "}
                    <span className="-mt-2 font-normal text-lg">/Week</span>
                  </p>
                  <button className="mt-6 w-full bg-white border border-gray-300 px-6 py-3 rounded-xl text-gray-800 font-medium hover:bg-gray-100 transition">
                    Get Started Now →
                  </button>

                  {/* Unlimited Plan Features */}
                  <div className="space-y-4 flex flex-col items-start px-10 py-5">
                    {[
                      "Direct Analyst Support",
                      "Priority Alerts & Chat Access",
                    ].map((item, i) => (
                      <Feature key={i} text={item} />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <PaymentSection />
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <Check className="w-4 h-4 text-black" />
      <span>{text}</span>
    </div>
  );
}

function PaymentSection() {
  const [copiedField, setCopiedField] = useState(null);

  const bankDetails = {
    bankName: "IDIB",
    accountName: "Pheonix capital research",
    accountNumber: "8113044045",
    ifscCode: "IDIB000H053",
    branch: "02644",
  };

  const paymentMethods = [
    { name: "Bank Transfer", icon: "🏦", color: "bg-green-600" },
    { name: "UPI Payment", icon: "📱", color: "bg-purple-600" },
    { name: "Credit/Debit Card", icon: "💳", color: "bg-blue-600" },
    { name: "Digital Wallets", icon: "💰", color: "bg-orange-500" },
  ];
  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="bg-gray-50 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center rounded-full justify-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <div className="w-12 h-0.5 bg-black"></div>
            </div>
            <span className=" text-sm font-medium tracking-wide">
              Payment Information
            </span>
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-black"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Methods & Bank Details
          </h2>
          <p className="text-gray-600 text-lg">
            Choose your preferred payment method or use our bank details for
            direct transfer
          </p>
        </div>

        {/* Bank Details */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Bank Transfer Details
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            Use these details for direct bank transfers
          </p>
          <div className="space-y-4">
            {Object.entries(bankDetails).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium mb-1 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                    <p className="text-gray-900 font-semibold text-lg">
                      {value}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(value, key)}
                    className="ml-4 p-2 hover:bg-white rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    {copiedField === key ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Note:</strong> Please include your order reference number
              in the payment description
            </p>
          </div>
        </motion.div>

        {/* Accepted Payment Methods */}
        <motion.div
          className="bg-white my-5 rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Accepted Payment Methods
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            We accept multiple payment methods for your convenience
          </p>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                className="border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`${method.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform`}
                  >
                    {method.icon}
                  </div>
                  <span className="font-semibold text-gray-800">
                    {method.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-8 bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            Payment Instructions
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">
                  Include Client ID
                </h5>
                <p className="text-sm text-gray-600">
                  Always mention your client ID in the payment reference/description
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">
                  Payment Confirmation
                </h5>
                <p className="text-sm text-gray-600">
                  Send payment confirmation to info@pheonixcapitalresearch.com with transaction details
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Processing Time</h5>
                <p className="text-sm text-gray-600">
                  Bank transfers take 1-2 business days, UPI payments are instant
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">
                  Minimum Amount
                </h5>
                <p className="text-sm text-gray-600">
                  Minimum investment amount is ₹10,000 for new accounts
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">
                  Currency & Tax
                </h5>
                <p className="text-sm text-gray-600">
                  All payments in Indian Rupees (INR). GST applicable as per government regulations
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Receipt</h5>
                <p className="text-sm text-gray-600">
                  Payment receipts will be sent to your registered email within 24 hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
