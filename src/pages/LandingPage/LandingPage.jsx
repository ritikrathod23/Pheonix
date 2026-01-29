import React, { useRef, useState } from "react";
import MissionGoalsSection from "../../components/Home/MissionGoalsSection";
import HeroImage from "../../assets/HeroImage.png";
import ShowcasingBestWork from "../../components/Home/ShowcasingBestWork";
import ClientFeedback from "../../components/Home/ClientFeedback";
import LatestInsight from "../../components/Home/LatestInsight";
import {
  ArrowUp,
  ArrowRight,
  HandCoins,
  Clock,
  Coins,
  Monitor,
  TrendingUp,
  BanknoteArrowUp,
  Star,
} from "lucide-react";
import AutoScrollingMarquee from "../../components/Home/AutoScrollingMarquee";
import OurServicesSection from "../../components/Home/OurBestServices";
import HeroSection from "../../components/Home/HeroSection";
import InvestmentStrategy from "../../components/Home/InvestmentStrategy";
import WorkProcessSection from "../../components/Home/WorkProcessSection";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import FAQSection from "../../components/Home/FAQSecton";
import InvestorStats from "../../components/Home/InvestorStats";
import ReelsSection from "../../components/Home/ReelsSection";
import ContainerVariants from "../../components/Home/ContainerVariants";
import { BiSupport } from "react-icons/bi";
import { IconCoin } from "@tabler/icons-react";
import { BsCoin } from "react-icons/bs";
import { BsDatabaseFillGear } from "react-icons/bs";
import { carouselItems } from "../../data/carouselData";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

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

const LandingPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  const [currentIndex, setCurrentIndex] = useState(0);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    toast.success("Form submitted successfully! We'll get back to you soon.", {
      position: "top-right",
      autoClose: 3000,
    });
    reset();
  };

  const contentItems = [
    {
      id: 1,
      badge: "Expert Insights for Confident Investing",
      heading: "Research Calls For Every Investor",
      description:
        "India's Top SEBI-Registered (INH000022446) Investment Firm: Pay only for Successful Research Calls.",
      buttonText: "GET EXPERT ADVICE NOW",
    },
    {
      id: 2,
      badge: "Expert Insights to Power Investment Decisions",
      heading: "Research Calls For Every Trade",
      description:
        "With our trusted regulations and experience, you can easily & safely build your investment assets.",
      buttonText: "START YOUR JOURNEY",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  /* Animation Variants */
  const slideVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: 80, transition: { duration: 0.8 } },
  };

  const formContainer = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.08 },
    },
  };

  const formItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const scrollRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    {
      id: 1,
      icon: BanknoteArrowUp,
      title: "Intraday Trading Calls",
      description:
        "High-accuracy intraday calls with clear entry, defined targets, stop loss, and a disciplined risk-to-reward structure.",
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Positional & Swing Calls",
      description:
        "Well-researched positional and swing trading calls designed for stress-free holding with predefined risk management.",
    },
    {
      id: 3,
      icon: Monitor,
      title: "Equity Cash & Index Calls",
      description:
        "Equity cash and index-based trading calls shared with precise entry levels, targets, and strict stop loss.",
    },
    {
      id: 4,
      icon: Coins,
      title: "Commodity & Derivative Calls",
      description:
        "Commodity and derivative trading calls backed by data-driven analysis and a strong risk-to-reward framework.",
    },
    {
      id: 5,
      icon: Clock,
      title: "Options & Strategy-Based Calls",
      description:
        "Options and strategy-based calls structured with clear execution levels, controlled risk, and defined reward potential.",
    },
    {
      id: 6,
      icon: HandCoins,
      title: "Futures Trading Calls",
      description:
        "Futures trading calls with disciplined entries, predefined targets, strict stop loss, and a focus on capital protection.",
    },
  ];

  const text = "Our Services";

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Background Image - Empty for now */}
      <div className="absolute brightness-90 inset-0 z-0 bg-gray-900 h-full">
        <img
          src={HeroImage}
          alt=""
          className="w-full scale-x-[-1] h-full md:h-max object-cover object-right"
        />
      </div>
      {/* ------------- Hero section ------------- */}
      <div className="relative pt-20 w-full min-h-screen overflow-hidden">
        <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT SLIDER */}
            <div className="relative w-full h-[420px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={contentItems[currentIndex].id}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute inset-0 p-4 text-white space-y-6"
                >
                  <span className="inline-block text-xs font-bold uppercase bg-white/50 px-4 py-1.5 rounded-md">
                    {contentItems[currentIndex].badge}
                  </span>

                  <h1
                    className="text-3xl md:text-5xl font-bold"
                    style={{
                      textShadow:
                        "2px 2px 20px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.7)",
                    }}
                  >
                    {contentItems[currentIndex].heading}
                  </h1>

                  <p
                    className="text-gray-100 max-w-xl"
                    style={{
                      textShadow:
                        "2px 2px 20px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.9)",
                    }}
                  >
                    {contentItems[currentIndex].description}
                  </p>

                  <div className="flex gap-3 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-green-400 to-lime-200 text-gray-900 font-bold px-6 py-3 rounded-full shadow-lg"
                    >
                      {contentItems[currentIndex].buttonText}
                    </motion.button>

                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gradient-to-r from-green-400 to-lime-200 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                    >
                      <ArrowUpRight className="w-5 h-5 text-gray-900" />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                {contentItems.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    animate={{
                      width: index === currentIndex ? 28 : 8,
                      backgroundColor:
                        index === currentIndex
                          ? "#4ade80"
                          : "rgba(255,255,255,0.4)",
                    }}
                    className="h-2 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <motion.div
              variants={formContainer}
              initial="hidden"
              animate="visible"
              className="flex justify-center"
            >
              <motion.div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md">
                <motion.h2
                  variants={formItem}
                  className="text-2xl font-bold text-gray-900 mb-5"
                >
                  FREE CONSULTATION
                </motion.h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {["fullName", "email", "mobile"].map((field, i) => (
                    <motion.div key={i} variants={formItem}>
                      <input
                        placeholder={
                          field === "fullName"
                            ? "Full Name*"
                            : field === "email"
                              ? "Email Address*"
                              : "Mobile Number*"
                        }
                        {...register(field, { required: true })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                      />
                    </motion.div>
                  ))}

                  <motion.div variants={formItem}>
                    <textarea
                      rows={4}
                      placeholder="Message"
                      {...register("message", { required: true })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                    />
                  </motion.div>

                  <motion.div variants={formItem} className="flex gap-3 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-green-400 to-lime-200 text-gray-900 font-bold py-3 rounded-full shadow-lg"
                    >
                      SUBMIT NOW
                    </motion.button>

                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gradient-to-r from-green-400 to-lime-200 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                    >
                      <ArrowUpRight className="w-5 h-5 text-gray-900" />
                    </motion.div>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* -------- About Us Section -------------- */}
      <div className="relative -top-15 z-20">
        <div className="w-full bg-gray-100 rounded-t-[40px] sm:rounded-t-[60px] relative py-16 sm:py-20 md:py-24 lg:py-28 px-6 sm:px-12 md:px-48 lg:px-48 xl:px-48">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Left Side - Content */}
              <div className="order-2 lg:order-1">
                {/* Title */}
                <motion.h2
                  ref={scrollRef}
                  initial={{ opacity: 0, x: -80 }} // Start left + hidden
                  whileInView={{ opacity: 1, x: 0 }} // Slide to place when visible
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  // viewport={{ root: scrollRef, once: true }} // animates once (optional)
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6"
                >
                  Who We Are
                </motion.h2>

                {/* Description */}
                <motion.p
                  ref={scrollRef}
                  initial={{ opacity: 0, x: -80 }} // Start left + hidden
                  whileInView={{ opacity: 1, x: 0 }} // Slide to place when visible
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  // viewport={{ root: scrollRef, once: true }} // animates once (optional)
                  className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8"
                >
                  Phoenix Capital Research is a professional market research
                  firm providing high-accuracy trading calls backed by technical
                  analysis, market experience, and disciplined risk management.
                </motion.p>

                <motion.p
                  ref={scrollRef}
                  initial={{ opacity: 0, x: -80 }} // Start left + hidden
                  whileInView={{ opacity: 1, x: 0 }} // Slide to place when visible
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  // viewport={{ root: scrollRef, once: true }} // animates once (optional)
                  className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8"
                >
                  Our mission is simple: remove confusion from trading and make
                  it accessible to everyone — from beginners to experienced
                  traders.
                </motion.p>

                <motion.p
                  ref={scrollRef}
                  initial={{ opacity: 0, x: -80 }} // Start left + hidden
                  whileInView={{ opacity: 1, x: 0 }} // Slide to place when visible
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  // viewport={{ root: scrollRef, once: true }} // animates once (optional)
                  className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8"
                >
                  We don’t believe in hype, tips, or complicated jargon. We
                  believe in clarity, consistency, and confidence.
                </motion.p>

                {/* Get Started Button */}
                {/* <motion.button
                  ref={scrollRef}
                  initial={{ opacity: 0, x: -50 }} // Start left + hidden
                  whileInView={{ opacity: 1, x: 0 }} // Slide to place when visible
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  // viewport={{ root: scrollRef, once: true }} // animates once (optional)
                  className="flex items-center gap-2 sm:gap-3 bg-gradient-to-l from-lime-200 to-green-400/70 hover:from-lime-300 hover:to-green-500 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group text-sm sm:text-base"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button> */}
              </div>

              {/* Right Side - Video/Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                    alt="Team collaboration"
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                  />

                  {/* Optional: Corner accent */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-green-400/20 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 bg-lime-400/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AutoScrollingMarquee />

      {/* -------- Our Services Section -------------- */}
      <div className="w-full bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <div className="w-12 h-0.5 bg-black"></div>
            </div>
            <span className="text-black text-sm font-medium tracking-wide">
              Services
            </span>
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-black"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <motion.h1
              className="text-3xl md:text-6xl py-3 text-center font-bold flex flex-wrap justify-center"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <h4 className="text-center p-2 md:px-40">
              We provide clear buy/sell calls with defined entry, targets, and stop loss — no guesswork, no overthinking.
            </h4>
            <div className="w-16 sm:w-full mt-6 h-1 bg-green-500"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {services.map((service) => (
              <motion.div
                initial={{ opacity: 0, y: 80 }} // Start left + hidden
                whileInView={{ opacity: 1, y: 0 }} // Slide to place when visible
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={service.id}
                className="flex gap-4 sm:gap-5 items-start group"
              >
                {/* Icon Diamond */}
                <motion.div
                  transition={{ duration: 0.1, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ rotateY: 180 }}
                  className="flex-shrink-0 w-5 h-5 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-green-600 transform flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <div className="">
                    <service.icon
                      className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                      strokeWidth={2}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <div className="w-10 h-1 bg-green-500"></div>
                  <p className="text-sm pt-6  sm:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <WorkProcessSection />

      {/* -------- Why Choose Us Section -------------- */}
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
                <span className=" text-sm font-medium tracking-wide">
                  Why Choose Us
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-black"></div>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mt-6 text-black leading-tight">
                Why Traders Choose Phoenix Capital Research
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                Our focus is quality over quantity, delivering fewer but
                higher-probability calls.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="my-12 h-px w-full bg-gray-300/40"></div>

            {/* Stats */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-green-500">
                Up to
                <span className="text-5xl text-center justify-center font-bold text-green-500">
                  {" "}
                  90%
                </span>
                Accuracy
              </h2>
              <p className="text-gray-600 mt-2">
                Observed across past trading calls based on research-led
                analysis and risk management.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-10">
            {[
              {
                icon: <BsDatabaseFillGear />,
                title: "Strong & Diverse Client Base",
                desc: "We serve multiple client types — beginners, professionals, and seasoned traders — across India.",
              },
              {
                icon: <BsCoin />,
                title: "No Confusion, No Pressure",
                desc: "We keep trading simple. <br /> No complicated strategies. No emotional trading.",
              },
              {
                icon: <BiSupport />,
                title: " Trading Made Accessible",
                desc: "You don’t need years of experience.Our system is built to be easy, practical, and accessible for all.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { duration: 0.25 },
                }}
                className="bg-white p-8 rounded-md shadow-sm border border-gray-200 
                               hover:shadow-lg transition-all duration-300 cursor-pointer flex gap-6"
              >
                <div className="text-green-500 text-5xl">{item.icon}</div>

                <div>
                  <h3 className="text-xl font-semibold text-[#081A3B]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InvestorStats />

      <ShowcasingBestWork />

      <ContainerVariants />

      <ReelsSection />

      {/* --------------- client feedback section ------------ */}
      <section className="bg-gray-50 py-16 px-6">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-black rounded-full" />
            <span className="w-12 h-0.5 bg-black" />
          </div>

          <span className="text-sm font-medium tracking-wide text-black">
            Testimonials
          </span>

          <div className="flex items-center gap-2">
            <span className="w-12 h-0.5 bg-black" />
            <span className="w-3 h-3 bg-black rounded-full" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Client Feedback & Reviews
          </h2>
          <p className="text-gray-600 mt-2">What Our Investors Say</p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {/* <CardCarousel> */}
          {carouselItems?.map(({ key, ...item }, index) => (
            <Card key={key || index} {...item} />
          ))}
          {/* </CardCarousel> */}
        </motion.div>
      </section>

      <FAQSection />

      <LatestInsight />

      {/* Scroll to Top Button */}
      <div
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors shadow-lg z-50"
        onClick={scrollToTop}
      >
        <ArrowUp className="w-6 h-6 text-black" />
      </div>
    </div>
  );
};

export default LandingPage;
const Card = ({ title, description, review, name, avatar }) => {
  const rating = Number(review) || 0;

  return (
    <div className="w-[380px] h-[380px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 flex flex-col justify-between">
      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

        <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

        {/* Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      {/* User */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">Investor</p>
        </div>
      </div>
    </div>
  );
};
