import React from "react";
import SendQuery from "../components/SendQuery";
import TrustedPartners from "../components/TrustedPartners";

function Contact() {
  return (
    <div className="bg-gray-100 rounded-4xl">
      <div className="bg-green-950/80 h-[450px] ">
        <h1 className="text-5xl py-44 text-white font-bold text-center mb-8">
          Contact Us
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative -mt-16 z-20">
        <SendQuery />
      </div>

      <TrustedPartners />
    </div>
  );
}

export default Contact;
