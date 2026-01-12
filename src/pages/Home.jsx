import React from "react";
import Navbar from "../components/Navbar";
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

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Background Image - Empty for now */}
      <div className="absolute brightness-75 inset-0 z-0 bg-gray-900">
        <img src={HeroImage} alt="" />
      </div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Boost Your Business
            <br />
            with Smart Financing
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xl">Easy To Learn</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xl">Best Result</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xl">Quick Support</span>
            </div>
          </div>

          <button className="bg-gradient-to-l from-lime-200 to-green-400/70 hover:bg-green-700 text-black font-semibold py-4 px-8 rounded-lg inline-flex items-center space-x-2 transition-colors">
            <span>Free Consultation</span>
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
      </section>

      {/* Stats Section */}
      <Stats />

      <Hero />

      <TrustedPartners />

      <ServiceHighlights />

      <div className="bg-black">
        <MissionGoalsSection />
      </div>

      <ShowcasingBestWork />

      <ClientFeedback items={carouselItems} />
      <div className="bg-black">
        <LatestInsight />
      </div>
    </div>
  );
};

export default Home;
