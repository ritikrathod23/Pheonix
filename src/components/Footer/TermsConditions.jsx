import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShoppingCart, Globe, Shield, AlertTriangle, UserCheck, Lock, RefreshCw, FileCheck, Scale, TrendingUp } from 'lucide-react';

export default function TermsConditions() {
  const sections = [
    {
      id: 1,
      icon: ShoppingCart,
      title: "I. PRODUCTS",
      subsections: [
        {
          subtitle: "Terms of Offer",
          content: "This agreement governs your use of this website and your purchase of products from this website. Phoenix Capital Research may revise these terms at any time, and your continued use of the website constitutes acceptance of such revisions. By ordering products from this website, you agree to be bound by these terms and conditions."
        },
        {
          subtitle: "Customer Solicitation",
          content: "Unless you opt out from receiving our solicitations, you agree to receive communications from us regarding our products and services."
        },
        {
          subtitle: "Opt Out Procedure",
          content: "You may opt out of future solicitations by:\n• Following the unsubscribe instructions in any email communication\n• Contacting us directly at research@pheonixcapitalresearch.com\n• Updating your preferences in your account settings"
        },
        {
          subtitle: "Proprietary Rights",
          content: "Phoenix Capital Research owns all proprietary rights, trade secrets, trademarks, and copyrights in the website layout, design, and content. You may not copy, modify, or distribute any content without written permission."
        },
        {
          subtitle: "Sales Tax",
          content: "You are responsible for any applicable sales tax on product purchases as required by law."
        }
      ]
    },
    {
      id: 2,
      icon: Globe,
      title: "II. WEBSITE",
      subsections: [
        {
          subtitle: "Content, Intellectual Property, Third Party Links",
          content: "This website provides information, some of which may be gathered from other sources. All content is protected by intellectual property laws. Third-party links are provided for convenience only, and we are not responsible for their content or privacy practices."
        },
        {
          subtitle: "Use of Website",
          content: "You agree not to use the website for:\n• Illegal purposes or activities\n• Spamming or sending unsolicited communications\n• Harassment or abuse of other users\n• Attempting to gain unauthorized access to our systems"
        },
        {
          subtitle: "License",
          content: "We grant you a limited, non-exclusive, non-transferable right to use the website content for noncommercial purposes only. You may not copy, distribute, or create derivative works without authorization."
        },
        {
          subtitle: "Posting",
          content: "By posting content on our website, you grant Phoenix Capital Research a license to use, modify, and display such content. You are responsible for your interactions and the content you post."
        }
      ]
    },
    {
      id: 3,
      icon: AlertTriangle,
      title: "III. DISCLAIMER OF WARRANTIES",
      subsections: [
        {
          subtitle: "",
          content: "THE USE OF THIS WEBSITE AND PRODUCTS IS AT YOUR SOLE RISK. PRODUCTS ARE OFFERED \"AS IS\" AND \"AS AVAILABLE.\" PHOENIX CAPITAL RESEARCH EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:\n• Warranties of merchantability and fitness for a particular purpose\n• Warranties of non-infringement\n• Accuracy, reliability, completeness, or timeliness of information\n• Warranties regarding third-party links\n• Warranties created by advice or information provided\n• Results from the use of products\n• Correction of defects or errors\n• Products purchased through the website\n\nSome jurisdictions may not allow certain exclusions of warranties, so some of the above exclusions may not apply to you."
        }
      ]
    },
    {
      id: 4,
      icon: Shield,
      title: "IV. LIMITATION OF LIABILITY",
      subsections: [
        {
          subtitle: "",
          content: "PHOENIX CAPITAL RESEARCH' ENTIRE LIABILITY AND YOUR EXCLUSIVE REMEDY SHALL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS, LESS SHIPPING AND HANDLING.\n\nPHOENIX CAPITAL RESEARCH SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM:\n• Use of or inability to use the website\n• Cost of substitute products\n• Products purchased through the website\n• Lost profits or business interruption\n\nSome jurisdictions may not allow certain limitations of liability, so some of the above limitations may not apply to you."
        }
      ]
    },
    {
      id: 5,
      icon: UserCheck,
      title: "V. INDEMNIFICATION",
      subsections: [
        {
          subtitle: "",
          content: "You agree to release, indemnify, defend, and hold harmless Phoenix Capital Research from any liabilities, claims, damages, costs, and expenses arising from:\n• Breach of this agreement\n• Use of the website or products\n• Violation of intellectual property rights\n• Information supplied by you\n\nPhoenix Capital Research may seek assurances from you and participate in the defense of any claim."
        }
      ]
    },
    {
      id: 6,
      icon: Lock,
      title: "VI. PRIVACY",
      subsections: [
        {
          subtitle: "",
          content: "Please refer to our Privacy Policy for details on how we collect, use, and protect your personal information."
        }
      ]
    },
    {
      id: 7,
      icon: FileCheck,
      title: "VII. AGREEMENT TO BE BOUND",
      subsections: [
        {
          subtitle: "",
          content: "By using this website or ordering products, you agree to be bound by this agreement and all its terms and conditions."
        }
      ]
    },
    {
      id: 8,
      icon: Scale,
      title: "VIII. GENERAL",
      subsections: [
        {
          subtitle: "Force Majeure",
          content: "Phoenix Capital Research shall not be liable for non-performance due to uncontrollable events including natural disasters, war, terrorism, or labor strikes."
        },
        {
          subtitle: "Cessation of Operation",
          content: "Phoenix Capital Research reserves the right to cease website operation and product distribution without notice."
        },
        {
          subtitle: "Entire Agreement",
          content: "This document constitutes the complete agreement between the parties and supersedes all prior agreements."
        },
        {
          subtitle: "Effect of Waiver",
          content: "Failure to enforce any provision does not constitute a waiver. Invalid provisions will be given effect to the parties' intentions."
        },
        {
          subtitle: "Governing Law",
          content: "This agreement is governed by the laws of Bengaluru, Karnataka, India. Any legal actions shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka."
        },
        {
          subtitle: "Statute of Limitation",
          content: "Any claims related to the website or products must be filed within one year of the occurrence."
        },
        {
          subtitle: "Waiver of Class Action Rights",
          content: "You irrevocably waive the right to join class action claims. All claims must be asserted individually."
        },
        {
          subtitle: "Termination",
          content: "Phoenix Capital Research may terminate your access for breach of terms, cancel outstanding orders, and the terms of this agreement shall survive termination."
        },
        {
          subtitle: "Assignment",
          content: "Users from outside India access at their own risk. You cannot assign your rights, but Phoenix Capital Research may assign its rights."
        }
      ]
    },
    {
      id: 9,
      icon: RefreshCw,
      title: "IX. REFUND POLICY",
      subsections: [
        {
          subtitle: "All sales are final",
          content: "No refunds or cancellations are provided due to the free evaluation being offered."
        },
        {
          subtitle: "Free trial",
          content: "We advise users to take the free trial before subscribing, as no refunds are offered for taken subscriptions."
        }
      ]
    },
    {
      id: 10,
      icon: UserCheck,
      title: "X. Know Your Customer (KYC)",
      subsections: [
        {
          subtitle: "Regulatory adherence",
          content: "Customer details must adhere to prevailing regulatory requirements. KYC information will be gathered and verified as per regulatory guidelines."
        },
        {
          subtitle: "Service hold",
          content: "Services will be held until KYC verification is completed satisfactorily."
        }
      ]
    },
    {
      id: 11,
      icon: TrendingUp,
      title: "XI. Research Services",
      subsections: [
        {
          subtitle: "1. Acknowledgment of Risk",
          content: "Trading involves substantial risks, and there are no guaranteed profits. Clients take full responsibility for their trading decisions and outcomes."
        },
        {
          subtitle: "2. Nature of Services",
          content: "Phoenix Capital Research provides technical analysis-based research, which is informational and not personal investment advice. The client is responsible for final trading decisions."
        },
        {
          subtitle: "3. Accuracy of Services",
          content: "Accuracy levels are indicative and not guaranteed, varying with market conditions and other factors beyond our control."
        },
        {
          subtitle: "4. Liability",
          content: "Clients accept full responsibility for trading outcomes and agree not to hold Phoenix Capital Research liable for financial losses."
        },
        {
          subtitle: "5. Confidentiality",
          content: "Phoenix Capital Research does not request or manage client Demat/Trading account credentials. Clients must keep their login details confidential."
        },
        {
          subtitle: "6. Subscription and Refund Policy",
          content: "Fees for research services are strictly non-refundable and are for alerts only, not market investments by Phoenix Capital Research."
        },
        {
          subtitle: "7. Declaration of Independent Decision Making",
          content: "Clients confirm they are not using borrowed or third-party funds for trading activities."
        },
        {
          subtitle: "8. No Legal Action for Losses",
          content: "Clients agree not to take legal action against Phoenix Capital Research for losses incurred from trades based on our services."
        },
        {
          subtitle: "9. Phoenix Capital Research Technology",
          content: "Recommendations are provided for a broad audience and are not tailored to individual clients."
        },
        {
          subtitle: "10. No Guarantee of Success",
          content: "Phoenix Capital Research does not guarantee accuracy, profitability, or success of recommendations."
        },
        {
          subtitle: "11. Informational Purpose",
          content: "Recommendations are for informational purposes only and do not constitute personalized investment advice."
        },
        {
          subtitle: "12. Transparency",
          content: "Research alerts include clear entry price, stop loss, and target levels for transparency."
        },
        {
          subtitle: "13. Client Responsibility",
          content: "The decision to act on recommendations is at the client's discretion. Clients must assess their risk tolerance and financial situation."
        },
        {
          subtitle: "14. Risk Awareness",
          content: "Clients acknowledge substantial risk in stock market trading and accept full responsibility for their actions."
        },
        {
          subtitle: "15. No Assurance of Returns",
          content: "Phoenix Capital Research does not offer guaranteed returns. Clients are advised to exercise caution and due diligence."
        },
        {
          subtitle: "16. Compliance with SEBI Regulations",
          content: "All research recommendations comply with SEBI guidelines and regulations."
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
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
            <FileText className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
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
            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-12 shadow-sm"
            >
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">
                    PLEASE READ CAREFULLY
                  </h3>
                  <p className="text-red-800 text-sm leading-relaxed">
                    BY USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sections */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="space-y-8"
            >
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-2">
                      {section.title}
                    </h2>
                  </div>

                  <div className="ml-0 sm:ml-16 space-y-6">
                    {section.subsections.map((subsection, index) => (
                      <div key={index}>
                        {subsection.subtitle && (
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {subsection.subtitle}
                          </h3>
                        )}
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Final Agreement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 sm:p-10 shadow-xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <FileCheck className="w-8 h-8 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Final Agreement
                  </h3>
                  <p className="text-white/95 mb-6 leading-relaxed">
                    By using our website or services, you acknowledge that you have read, understood, and agree to be bound by all terms and conditions of this agreement.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="mailto:research@pheonixcapitalresearch.com"
                  className="inline-flex items-center justify-center bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Contact Us
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