import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Users, Bell, Database, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
    const sections = [
        {
            id: 1,
            icon: Shield,
            title: "1. Acknowledgment of Services",
            content: [
                "1. Phoenix Capital Research provides independent research and recommendations related to securities.",
                "2. Services are limited to research insights and market analysis; no portfolio management, advisory, or direct trading assistance is offered.",
                "3. No guarantee of fixed returns or profits from recommendations."
            ]
        },
        {
            id: 2,
            icon: Database,
            title: "2. Investment Risks",
            content: [
                "1. Investing in securities markets involves inherent risks and potential financial losses.",
                "2. Past performance does not guarantee future results; investment decisions are at user's discretion.",
                "3. Phoenix Capital Research is not liable for losses from market movements, system outages, or communication delays.",
                "4. Investors should consider their risk appetite and financial situation.",
            ]
        },
        {
            id: 3,
            icon: Eye,
            title: "3. Data Collection & Use",
            content: [
                "1. Consent to collecting, processing, and using information for research, analysis, and service improvements.",
                "2. Data will be kept confidential and used by privacy policies.",
            ]
        },
        {
            id: 4,
            icon: Users,
            title: "4. Accuracy of Information",
            content: [
                "1. User confirms registration details are accurate and up to date.",
                "2. Service effectiveness may depend on the accuracy of personal and financial information.",
            ]
        },
        {
            id: 5,
            icon: Lock,
            title: "5. Communication Consent",
            content: [
                "1. By using services, user agrees to receive communications via:<br/> a. Email<br/>b. SMS<br/>c. WhatsApp<br/>d. App Notifications"
            ]
        },
        {
            id: 6,
            icon: Bell,
            title: "6.  Independent Decision-Making",
            content: [
                "1. All investment decisions are user's responsibility.",
                "2. Recommendations are based on independent research and not financial advice.",
                "3. Users are encouraged to consult a qualified financial advisor."
            ]
        },
        {
            id: 7,
            icon: FileText,
            title: "7. Liability Disclaimer",
            content: [
                "1. Phoenix Capital Research is not responsible for financial losses from acting on research insights.",
                "2. No guarantee of research/recommendation accuracy, completeness, or timeliness.",
                "3. Phoenix Capital Research, its affiliates, and employees are not liable for:<br/> a. Market fluctuations<br/> b. System failures<br/> c. Delays in service delivery"
            ]
        },
        {
            id: 8,
            icon: Globe,
            title: "8. Disclosures & Conflicts of Interest",
            content: [
                "1. Phoenix Capital Research and its employees do not trade in securities that are part of recommendations.",
                "2. No actual or potential conflicts of interest.",
                "3. No compensation from subject companies.",
                "4. Research analysts do not hold positions as officers, directors, or employees in subject companies.",
                "5. Phoenix Capital Research has not engaged in market- making activities for subject companies."
            ]
        },
        {
            id: 9,
            icon: Shield,
            title: "9. Disciplinary History",
            content: [
                "1. No pending legal proceedings or material litigations against Phoenix Capital Research.",
                "2. SEBI has not issued penalties or directions related to research services."
            ]
        },
        {
            id: 10,
            icon: FileText,
            title: "10.  Free Trial Terms",
            content: [
                "1. Free trial includes up to three sessions or an extension.",
                "2. Usage data may be collected to evaluate engagement and improve services.",
                "3. User may cancel the free trial anytime before it ends to avoid subscription charges.",
                "4. Trial recommendations are for informational purposes only and not investment advice."
            ]
        },
        {
            id: 11,
            icon: Globe,
            title: "11. Consent to Contact",
            content: [
                "1. By opting for the free trial, user consents to be contacted by Phoenix Capital Research via:<br/> a. WhatsApp<br/> b. App notifications<br/> c. SMS"
            ]
        },
        {
            id: 12,
            icon: Globe,
            title: "12. Service Termination",
            content: [
                "1. Services may be discontinued by providing written notice.",
                "2. Agreement continues to govern actions taken before termination."
            ]
        },
        {
            id: 13,
            icon: Globe,
            title: "13. Disclaimer",
            content: [
                "1. SEBI registration does not guarantee performance or assurance of returns.",
                "2. Phoenix Capital Research is not responsible for individual investment decisions based on research."
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
                        Privacy Policy
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
                        {/* Introduction Alert */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-12 shadow-sm"
                        >
                            <div className="flex items-start">
                                <Shield className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <p className="text-blue-800 text-sm leading-relaxed">
                                        This User Agreement ("Agreement") governs the use of research and recommendation services provided by Phoenix Capital Research Pvt Ltd ("Phoenix Capital Research"), a SEBI-registered Research Analyst (INH000017082). By accessing or using our services, you acknowledge that you have read, understood, and agreed to the terms below.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

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
                                                dangerouslySetInnerHTML={{ __html: paragraph }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className='mt-12 bg-red-100 space-y-2 p-6 rounded-lg border-red-200 border '>
                            <h1 className='text-xl font-bold'>Standard Warning</h1>
                            <p className='text-sm font-bold text-gray-600'>"Investments in securities markets are subject to market risks. Read all related documents carefully before investing."</p>
                        </div>


                        <div className='mt-12 bg-green-100 space-y-2 p-6 rounded-lg border-green-200 border '>
                            <h1 className='text-xl font-bold'>Agreement Acceptance</h1>
                            <p className='text-sm text-gray-600'>By using our services, you acknowledge that you have read, understood, and agree to be bound by this User Agreement. This agreement is governed by the laws of India and SEBI regulations.</p>
                        </div>

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