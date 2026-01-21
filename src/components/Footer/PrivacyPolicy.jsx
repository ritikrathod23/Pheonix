import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Users, Bell, Database, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
    const sections = [
        {
            id: 1,
            icon: Shield,
            title: "1. Introduction",
            content: [
                "Welcome to Phoenix Capital Research. We are a SEBI-registered research analyst entity committed to protecting your privacy.",
                "This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Website [www.pheonixcapitalresearch.com]. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Website.",
                "By accessing or using our Website, you agree to the terms of this Privacy Policy."
            ]
        },
        {
            id: 2,
            icon: Database,
            title: "2. Information We Collect",
            content: [
                "We may collect the following types of information:",
                "• Personal Information: Name, email address, phone number, billing details, and other contact information when you register or subscribe to our services.",
                "• Financial Information: Payment details, transaction history, and related financial data for service purchases.",
                "• Technical Information: IP address, browser type, device information, and usage data through cookies and analytics tools.",
                "• Communication Information: Records of customer support interactions and inquiries."
            ]
        },
        {
            id: 3,
            icon: Eye,
            title: "3. How We Use Your Information",
            content: [
                "We use the collected information for the following purposes:",
                "• To provide, personalize, and improve our services.",
                "• To process transactions and manage your account.",
                "• To comply with regulatory requirements, including SEBI guidelines.",
                "• To send notifications, research updates, and promotional offers (only if you have opted-in).",
                "• To analyze and enhance Website performance and user experience.",
                "• To prevent fraud, security breaches, and ensure legal compliance."
            ]
        },
        {
            id: 4,
            icon: Users,
            title: "4. Sharing and Disclosure",
            content: [
                "We do not sell, rent, or trade your personal information. We may share your information with:",
                "• Regulatory Authorities: As required by SEBI or other legal entities.",
                "• Service Providers: Third-party vendors that assist with payment processing, analytics, and customer support.",
                "• Legal Compliance: When required by law, court orders, or to protect our rights and users."
            ]
        },
        {
            id: 5,
            icon: Lock,
            title: "5. Data Security",
            content: [
                "We implement industry-standard security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure.",
                "You are responsible for maintaining the confidentiality of your login credentials. We may retain your information for the duration permitted under applicable laws and as necessary to ensure seamless delivery of our services.",
                "If you wish to delete your data or revoke your consent, you may email us at support@pheonixcapitalresearch.com with details of the specific data/consent and the extent of deletion or revocation requested. Please note that withdrawing your consent or requesting deletion may result in your inability to access certain features or services."
            ]
        },
        {
            id: 6,
            icon: Bell,
            title: "6. Cookies and Tracking Technologies",
            content: [
                "We use cookies and tracking tools to enhance user experience, analyze traffic, and serve targeted content. You can manage your cookie preferences through your browser settings."
            ]
        },
        {
            id: 7,
            icon: FileText,
            title: "7. Your Rights and Choices",
            content: [
                "You have the following rights:",
                "• Access, update, or delete your personal information by contacting us.",
                "• Opt-out of marketing communications anytime.",
                "• Restrict or object to certain data processing activities."
            ]
        },
        {
            id: 8,
            icon: Globe,
            title: "8. Third-Party Links",
            content: [
                "Our Website may contain links to third-party sites. We are not responsible for their privacy practices. Please review their policies before providing any information."
            ]
        },
        {
            id: 9,
            icon: Shield,
            title: "9. Compliance with SEBI Regulations",
            content: [
                "As a SEBI-registered research analyst entity, we comply with applicable financial and data protection regulations. Our research services are provided with due diligence and in compliance with SEBI guidelines."
            ]
        },
        {
            id: 10,
            icon: FileText,
            title: "10. Changes to This Privacy Policy",
            content: [
                "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Effective Date\" at the top of this Privacy Policy.",
                "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
            ]
        },
        {
            id: 11,
            icon: Globe,
            title: "11. Jurisdiction",
            content: [
                "This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with this policy shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.",
                "Acknowledgement: By using our Website, you acknowledge that you have read and understood this Privacy Policy."
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
                            className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-12 shadow-sm"
                        >
                            <div className="flex items-start">
                                <Shield className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                                        SEBI-Registered Research Analyst
                                    </h3>
                                    <p className="text-green-800 text-sm leading-relaxed">
                                        Phoenix Capital Research is committed to maintaining the highest standards of data protection
                                        and privacy in compliance with SEBI regulations and Indian laws.
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
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
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