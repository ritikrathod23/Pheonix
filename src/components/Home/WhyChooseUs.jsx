import { motion } from "framer-motion";
import { BiSupport } from "react-icons/bi";
import { IconCoin } from '@tabler/icons-react';
import { BsCoin } from "react-icons/bs";
import { BsDatabaseFillGear } from "react-icons/bs";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariant = {
    hidden: { opacity: 0, x: 40 },
    show: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

const WhyChooseUs = () => {
    return (
        <section className="w-full py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6">

                {/* LEFT SECTION */}
                <div>
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-start gap-3 mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                                <div className="w-12 h-0.5 bg-black "></div>
                            </div>
                            <span className=" text-sm font-medium tracking-wide">Why Choose Us</span>
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-0.5 bg-black"></div>
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mt-6 text-black leading-tight">
                            Unlock Smarter Wealth Growth <br />
                            Investing Made Strategic
                        </h1>

                        <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                            At Pheonix Capital Research combines deep market analysis with SEBI-registered expertise to guide investors toward consistent, sustainable wealth creation.
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <div className="my-12 h-px w-full bg-gray-300/40"></div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-10">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-bold text-green-500">+98%</h2>
                            <p className="text-gray-600 mt-2">
                                Enhanced portfolio efficiency through data-driven investment models.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-bold text-green-500">+67%</h2>
                            <p className="text-gray-600 mt-2">
                                Growth in client capital driven by strategic equity allocation and long-term compounding.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="space-y-10">

                    {[
                        {
                            icon: <BsDatabaseFillGear />,
                            title: "Driven By Data Based",
                            desc: "Our investment strategies are built on deep market research, technical analysis, and reliable financial data, ensuring informed and confident decision-making.",
                        },
                        {
                            icon: <BsCoin />,
                            title: "Reduce Investment Risks",
                            desc: "We minimize risks through disciplined research and curated, well-analyzed stock recommendations designed for stable growth.",
                        },
                        {
                            icon: <BiSupport />,
                            title: "24/7 Client Support",
                            desc: "Our dedicated support team ensures timely guidance, market updates, and assistance whenever you need clarity or confidence in your investment journey.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={cardVariant}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.25 } }}
                            className="bg-white p-8 rounded-md shadow-sm border border-gray-200 
                         hover:shadow-lg transition-all duration-300 cursor-pointer flex gap-6"
                        >
                            <div className="text-green-500 text-5xl">{item.icon}</div>

                            <div>
                                <h3 className="text-xl font-semibold text-[#081A3B]">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
