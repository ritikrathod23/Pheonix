import { motion } from "framer-motion";
import {
    Leaf,
    BarChart3,
    Briefcase,
    UserCheck,
    PieChart,
    HandCoins,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        title: "Investing",
        desc: "A wide selection of investment products to build a diversified portfolio",
        icon: Leaf,
        bg: "bg-green-600",
    },
    {
        title: "Trading",
        desc: "Powerful trading tools, resources, insights and support",
        icon: BarChart3,
        bg: "bg-green-600",
    },
    {
        title: "Wealth management",
        desc: "Dedicated financial consultants to help reach your specific goals",
        icon: Briefcase,
        bg: "bg-green-600",
    },
    {
        title: "Investment advisory",
        desc: "Expert investing strategies from seasoned portfolio managers",
        icon: UserCheck,
        bg: "bg-green-600",
    },
    {
        title: "Smart portfolio",
        desc: "Fully-automated, data-driven investment advisory services",
        icon: PieChart,
        bg: "bg-green-600",
    },
    {
        title: "Mutual fund advisor",
        desc: "Specialized guidance from trusted independent fund advisors",
        icon: HandCoins,
        bg: "bg-green-600",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function InvestmentServices() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl font-bold text-gray-900">
                        A relationship on your terms.
                    </h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                        Work with us the way you want. Whether you invest on your own,
                        with an advisor, or a little of both — we support you.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`${item.bg} rounded-xl p-8 text-white cursor-pointer relative overflow-hidden`}
                            >
                                <div className="flex items-center justify-between mb-10">
                                    <div className="bg-white/20 p-3 rounded-full">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <ArrowRight className="w-5 h-5 opacity-80" />
                                </div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm opacity-90 leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* Decorative gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
