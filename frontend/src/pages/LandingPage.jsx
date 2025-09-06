import React from "react";
import HeroSection from "../components/HeroSection";
import SecondarySection from "../components/SecondarySection";
import TravelGallery from "../components/TravelGallery";
import Header from "../components/header";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <HeroSection />
        <SecondarySection />
        <TravelGallery />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
