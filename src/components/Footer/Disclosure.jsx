import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Users, Bell, Database, Globe } from 'lucide-react';

export default function Disclosure() {
    const sections = [
        {
            id: 1,
            icon: Shield,
            title: "Disclosure",
            content: [
                "The purpose of the document is to provide essential information about the Research Services in a manner to assist and enable the prospective client/client in making an informed decision for engaging in Research services before onboarding."
            ]
        },
        {
            id: 2,
            icon: Database,
            title: "History, Present business and Background",
            content: [
                "Phoenix Capital Research Private Limited is registered with SEBI as Research Analyst with registration no. INH000017082. The Research Analyst got its registration on June 28, 2024 and is engaged in offering research and recommendation services."
            ]
        },
        {
            id: 3,
            icon: Eye,
            title: "Terms and conditions of Research Services",
            content: [
                "The Research Services will be limited to providing independent research recommendation and shall not be involved in any advisory or portfolio allocation services. The Research Analyst never guarantees the returns on the recommendation provided. Investor shall take note that Investment/trading in stocks/Index or other securities is always subject to market risk. Past performance is never a guarantee of same future results. The Research Analyst shall not be responsible for any loss to the Investors."
            ]
        },
        {
            id: 4,
            icon: Users,
            title: "Disciplinary history",
            content: [
                "There are no pending material litigations or legal proceedings against the Research Analyst. As on date, no penalties / directions have been issued by SEBI under the SEBI Act or Regulations made there under against the Research Analyst relating to Research Analyst services."
            ]
        },
        {
            id: 5,
            icon: Lock,
            title: "Details of its associates",
            content: [
                "No associates"
            ]
        },
        {
            id: 6,
            icon: Bell,
            title: "Disclosures with respect to Research and Recommendations Services",
            content: [
                "The Research Analyst or any of its officer/employee does not trade in securities which are subject matter of recommendation.",
                "✅ There are no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/ securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflict of interest shall be disclosed to the client as and when they arise.",
                "✅ Research Analyst or its employee or its associates have not received any compensation from the company which is subject matter of recommendation.",
                "✅ Research Analyst or its employee or its associates have not managed or co-managed the public offering of any company.",
                "✅ Research Analyst or its employee or its associates have not received any compensation for investment banking or merchant banking of brokerage services from the subject company.",
                "✅ Research Analyst or its employee or its associates have not received any compensation for products or services other than above from the subject company.",
                "✅ Research Analyst or its employee or its associates have not received any compensation or other benefits from the Subject Company or 3rd party in connection with the research report/ recommendation.",
                "✅ The subject company was not a client of Research Analyst or its employee or its associates during twelve months preceding the date of recommendation services provided.",
                "✅ Research Analysts or its employee or its associates has not served as an officer, director or employee of the subject company.",
                "✅ Research Analysts has not been engaged in market making activity of the subject company."

            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-green-600 to-teal-600 py-20 sm:py-24 md:py-28">
                <div className="absolute inset-0 bg-black/20"></div>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >
                    <div className="inline-block mb-4">
                        <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Desclosure & Desclaimer
                    </h1>
                    <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                        Your privacy is important to us. Learn how we protect and manage your data.
                    </p>
                    <p className="text-sm sm:text-base text-white/80 mt-4">
                        Last Updated: January 2025
                    </p>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative -mt-12 z-20">
                <div className="bg-gray-50 rounded-t-[60px] pt-16 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        {/* Sections */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="space-y-8"
                        >
                            {sections.map((section) => (
                                <motion.div
                                    key={section.id}
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <section.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-2">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <div className="ml-0 sm:ml-16 space-y-4">
                                        {section.content.map((paragraph, index) => (
                                            <p
                                                key={index}
                                                className="text-gray-700 leading-relaxed text-sm sm:text-base"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Desclaimer Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-yellow-50 border-l-4 mt-10 border-yellow-500 p-6 rounded-lg mb-12 shadow-sm"
                        >
                            <div className="flex items-start">
                                <Shield className="w-6 h-6 text-yellow-600 mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                                        Desclaimer
                                    </h3>
                                    <p className="text-yellow-800 text-sm leading-relaxed">
                                        Investments in securities market are subject to market risks. Read all the related documents carefully before investing
                                    </p>
                                    <p className="text-yellow-800 text-sm leading-relaxed">Registration granted by SEBI, certification from NISM, and membership of BASL in no way guarantee performance of the intermediary or provide any assurance of returns to investors.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Important Note */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-blue-50 border-l-4 mt-10 border-blue-500 p-6 rounded-lg mb-12 shadow-sm"
                        >
                            <div className="flex items-start">
                                <Shield className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                        Important Note
                                    </h3>
                                    <p className="text-blue-800 text-sm leading-relaxed">
                                        This document contains important disclosures and disclaimers regarding our research services. Please read this document carefully before making any investment decisions.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 sm:p-10 text-center shadow-xl"
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Questions About Privacy?
                            </h3>
                            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                                If you have any questions or concerns about our Privacy Policy, please don't hesitate to contact us.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:support@pheonixcapitalresearch.com"
                                    className="inline-flex items-center justify-center bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                                >
                                    Contact Support
                                </a>
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-green-600 transition-colors"
                                >
                                    Back to Home
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}