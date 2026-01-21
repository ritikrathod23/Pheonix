import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import {
    ThumbsUp,
    Award,
    Handshake,
    Percent,
} from "lucide-react";

/* Counter Hook */
function AnimatedCounter({ value, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
                    }
                },
            });
            return () => controls.stop();
        }
    }, [isInView, value, suffix]);

    return (
        <span ref={ref} className="text-5xl font-bold text-green-600">
            0{suffix}
        </span>
    );
}

export default function InvestorStats() {
    const stats = [
        {
            icon: ThumbsUp,
            value: 652,
            suffix: "K+",
            label: "Happy Investors",
        },
        {
            icon: Award,
            value: 2863,
            suffix: "+",
            label: "Successful Research Calls",
        },
        {
            icon: Handshake,
            value: 878,
            suffix: "%",
            label: "Portfolio Growth",
            highlight: true,
        },
        {
            icon: Percent,
            value: 856,
            suffix: "%",
            label: "Annual ROI Performance",
        },
    ];

    return (
        <section className="bg-green-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 text-center">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center gap-4"
                            >
                                {/* Icon */}
                                <div className="text-green-500">
                                    <Icon size={44} strokeWidth={1.5} />
                                </div>

                                {/* Counter */}
                                <AnimatedCounter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                />

                                {/* Label */}
                                <p className="text-green-900 font-medium tracking-wide">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
