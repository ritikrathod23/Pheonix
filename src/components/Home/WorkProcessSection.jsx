import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, UserCheck, TrendingUp, ShieldCheck, BarChart } from 'lucide-react';

export default function WorkProcessSection() {
    const processes = [
        {
            id: 1,
            number: "01",
            icon: FileText,
            title: "Technical Analysis",
            description:
                "In-depth technical analysis using charts and indicators to identify high-probability trading opportunities.",
        },
        {
            id: 2,
            number: "02",
            icon: TrendingUp,
            title: "Market Structure & Trend Identification",
            description:
                "Analysis of market structure and trend direction to align trades with overall market momentum.",
        },
        {
            id: 3,
            number: "03",
            icon: BarChart,
            title: "Price Action & Volume Analysis",
            description:
                "Price action and volume-based analysis to confirm strength, weakness, and potential reversals.",
        },
        {
            id: 4,
            number: "04",
            icon: ShieldCheck,
            title: "Risk-Reward Optimization",
            description:
                "Every trade is planned with optimized risk-to-reward ratios to prioritize capital protection and consistency.",
        },
    ];


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const arrowVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.3
            }
        }
    };

    return (
        <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <div className="flex justify-center items-center gap-3 mb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-black rounded-full"></div>
                            <div className="w-12 h-0.5 bg-black"></div>
                        </div>
                        <span className="text-black text-sm font-medium tracking-wide">
                            Work Process
                        </span>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-0.5 bg-black"></div>
                            <div className="w-3 h-3 bg-black rounded-full"></div>
                        </div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Our Research Approach
                    </h2>
                </motion.div>

                {/* Process Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative"
                >
                    {processes.map((process, index) => (
                        <React.Fragment key={process.id}>
                            {/* Process Card */}
                            <motion.div
                                variants={itemVariants}
                                className="relative flex flex-col items-center text-center"
                            >
                                {/* Icon Container */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative mb-8"
                                >
                                    {/* Number Badge */}
                                    <div className="absolute -top-2 -left-2 w-10 h-10 bg-green-600 text-white font-bold rounded-md flex items-center justify-center text-sm z-10 shadow-lg">
                                        {process.number}
                                    </div>

                                    {/* Icon Circle */}
                                    <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center">
                                        <process.icon className="w-10 h-10 text-green-600" strokeWidth={1.5} />
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                    {process.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {process.description}
                                </p>
                            </motion.div>

                            {/* Arrow Between Steps (Hidden on last item and mobile) */}
                            {index < processes.length - 1 && (
                                <motion.div
                                    variants={arrowVariants}
                                    className="hidden lg:flex absolute items-center justify-center"
                                    style={{
                                        left: `calc(${(index + 1) * 25}% - 40px)`,
                                        top: '28px',
                                        width: '80px'
                                    }}
                                >
                                    <svg
                                        className="w-full h-6 text-gray-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 80 24"
                                    >
                                        <defs>
                                            <marker
                                                id={`arrowhead-${index}`}
                                                markerWidth="10"
                                                markerHeight="10"
                                                refX="9"
                                                refY="3"
                                                orient="auto"
                                            >
                                                <polygon
                                                    points="0 0, 10 3, 0 6"
                                                    fill="currentColor"
                                                />
                                            </marker>
                                        </defs>
                                        <line
                                            x1="0"
                                            y1="12"
                                            x2="70"
                                            y2="12"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeDasharray="4 4"
                                            markerEnd={`url(#arrowhead-${index})`}
                                        />
                                    </svg>
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}