import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Price from "./pages/Price";
import LoadingSpinner from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import TermsConditions from "./components/Footer/TermsConditions";
import Disclosure from "./components/Footer/Disclosure";
import UserAgreement from "./components/Footer/UserAgreement";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - adjust duration as needed
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 0.5 seconds

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="services" element={<Services />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="price" element={<Price />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="disclosure" element={<Disclosure />} />
          <Route path="terms-and-condition" element={<TermsConditions />} />
          <Route path="user-agreement" element={<UserAgreement />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
