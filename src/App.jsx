import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProgramsSection from "./components/ProgramsSection";
import FacilitiesSection from "./components/FacilitiesSection";
import MembershipSection from "./components/MembershipSection";
import FaqSection from "./components/FaqSection";
import GallerySection from "./components/GallerySection";
import AboutSection from "./components/AboutSection";
import LocationSection from "./components/LocationSection";
import FinalCtaSection from "./components/FinalCtaSection";
import Footer from "./components/Footer";
import MobileCta from "./components/MobileCta";

export default function App() {
  return (
    <div className="synergy-app">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection />
        <ProgramsSection />
        <FacilitiesSection />
        <MembershipSection />
        <FaqSection />
        <GallerySection />
        <AboutSection />
        <LocationSection />
        <FinalCtaSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Non-intrusive Floating Mobile WhatsApp CTA */}
      <MobileCta />
    </div>
  );
}
