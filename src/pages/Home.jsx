import React, { useState } from "react";
import MissionGoalsSection from "../components/Home/MissionGoalsSection";
import HeroImage from "../assets/HeroImage.png";
import ShowcasingBestWork from "../components/Home/ShowcasingBestWork";
import ClientFeedback from "../components/Home/ClientFeedback";
import { carouselItems } from "../data/carouselData";
import LatestInsight from "../components/Home/LatestInsight";
import { ArrowUp, ArrowRight } from "lucide-react";
import AutoScrollingMarquee from "../components/Home/AutoScrollingMarquee";
import OurServicesSection from "../components/Home/OurBestServices";
import HeroSection from "../components/Home/HeroSection";
import InvestmentStrategy from "../components/Home/InvestmentStrategy";
import WorkProcessSection from "../components/Home/WorkProcessSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import FAQSection from "../components/Home/FAQSecton";
import InvestorStats from "../components/Home/InvestorStats";
import ReelsSection from "../components/Home/ReelsSection";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Background Image - Empty for now */}
      <div className="absolute brightness-90 inset-0 z-0 bg-gray-900 h-full">
        <img src={HeroImage} alt="" className="w-full scale-x-[-1] h-full md:h-max object-cover object-right" />
      </div>

      <HeroSection />

      <div className="relative -top-15 z-20">
        <MissionGoalsSection />
      </div>

      <AutoScrollingMarquee />

      <OurServicesSection />

      {/* <InvestmentStrategy /> */}

      <WorkProcessSection />

      <WhyChooseUs />

      <InvestorStats />

      <ShowcasingBestWork />

      <ReelsSection />

      <ClientFeedback items={carouselItems} />

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

export default Home;
