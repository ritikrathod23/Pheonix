import React from "react";
import Stats from "../components/Stats";
import Hero from "../components/Hero";
import TrustedPartners from "../components/TrustedPartners";
import Footer from "../components/Footer";
import ServiceHighlights from "../components/ServiceHighlights";
import MissionGoalsSection from "../components/MissionGoalsSection";
import HeroImage from "../assets/HeroImage.png";
import ShowcasingBestWork from "../components/ShowcasingBestWork";
import ClientFeedback from "../components/ClientFeedback";
import CardCarousel from "../ui/CardCarousel";
import { carouselItems } from "../data/carouselData";
import LatestInsight from "../components/LatestInsight";
import { ArrowUp } from "lucide-react";
import AutoScrollingMarquee from "../components/AutoScrollingMarquee";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Background Image - Empty for now */}
      <div className="absolute brightness-75 inset-0 z-0 bg-gray-900 h-full">
        <img src={HeroImage} alt="" className="w-full h-full md:h-max  object-fill md:object-cover" />
      </div>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        {/* Content */}
        <div className="relative pt-40 md:pt-5 z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl  md:text-6xl font-bold mb-8">
            Transform Your Investing With
            <br />
            Research-Driven Insights
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-12">
            <p className="text-xl text-white ">
              At Pheonix Capital Research, we turn deep financial analysis into
              clear,{" "}
              <span className="block">actionable investment strategies — </span>{" "}
              <span className="font-semibold">
                so you invest smarter, not harder
              </span>
              .
            </p>
          </div>

          <button className="bg-gradient-to-l from-lime-200 to-green-400/70 hover:bg-green-700 text-black font-semibold py-2 md:py-4 px-8 rounded-lg inline-flex items-center space-x-2 transition-colors">
            <span>Free Started</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Stats Section - Positioned on top of image */}
        <div className="absolute top-full lg:bottom-0 left-0 right-0 z-10">
          <Stats />
        </div>
      </section>

      <Hero />

      <TrustedPartners />

      <ServiceHighlights />

      <div className="bg-black">
        <MissionGoalsSection />
      </div>

      <AutoScrollingMarquee />

      <ShowcasingBestWork />

      <ClientFeedback items={carouselItems} />
      <div className="bg-black">
        <LatestInsight />
      </div>

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

export default Home;
