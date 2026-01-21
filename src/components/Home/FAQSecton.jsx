import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What Investment Services Do You Provide?",
        answer:
            "We offer equity investments, portfolio management, mutual funds, IPO advisory, long-term wealth planning, and risk assessment services tailored to individual and institutional investors.",
    },
    {
        question: "Which Markets And Regions Do You Invest In?",
        answer:
            "We invest across global markets including equities, indices, commodities, and emerging markets, providing diversified opportunities worldwide.",
    },
    {
        question: "How Can I Track My Investments And Portfolio Performance?",
        answer:
            "You can track your investments in real time through our secure investor dashboard, detailed reports, and regular performance updates.",
    },
    {
        question: "What Is The Minimum Investment And Expected Returns?",
        answer:
            "Minimum investment requirements vary by plan. Returns depend on market conditions, investment horizon, and risk profile, with a focus on sustainable long-term growth.",
    },
    {
        question: "How Do I Get Started With Your Investment Team?",
        answer:
            "Getting started is easy—schedule a consultation, complete your risk assessment, and our experts will create a personalized investment strategy for you.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(3);

    return (
        <section className="bg-gray-150">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">
                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-start gap-3 mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-black rounded-full"></div>
                            <div className="w-12 h-0.5 bg-black "></div>
                        </div>
                        <span className=" text-sm font-medium tracking-wide">Investor FAQs</span>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-0.5 bg-black"></div>
                            <div className="w-3 h-3 bg-black rounded-full"></div>
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-green-900 leading-snug mb-6">
                        Frequently Asked <br />
                        Questions About Our <br />
                        Investment Services
                    </h2>

                    <p className="text-green-700 max-w-md mb-10">
                        Smart investing focuses on disciplined strategy, risk management,
                        and sustainable growth guided by experienced financial experts.
                    </p>

                    <div className="flex items-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition"
                        >
                            Start Investing
                            <span className="bg-white text-green-600 p-2 rounded-full">
                                <ArrowRight size={16} />
                            </span>
                        </motion.button>

                        <div className="flex items-center gap-3">
                            <div className="bg-green-600 text-white p-3 rounded-full">
                                <Phone size={18} />
                            </div>
                            <div>
                                <p className="text-sm text-green-700">Talk to an Advisor</p>
                                <p className="font-semibold text-green-900">
                                    +91 98 76 54 3210
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT ACCORDION */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-green-100"
                        >
                            <button
                                onClick={() =>
                                    setActiveIndex(activeIndex === index ? null : index)
                                }
                                className="w-full flex justify-between items-center text-left px-6 py-5"
                            >
                                <span className="font-semibold text-lg text-green-900">
                                    {index + 1}. {faq.question}
                                </span>

                                <motion.span
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                >
                                    <ChevronDown className="text-green-700" />
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 text-green-700 text-sm leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
