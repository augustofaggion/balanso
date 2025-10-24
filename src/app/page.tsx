import React from "react";
import NavbarHome from "./components/NavbarHome";
import CtaSection from "./components/CtaSection";
import FeaturesSection from "./components/FeaturesSection";
import InstallSection from "./components/InstallSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavbarHome />
      <div className="mt-20">
        <CtaSection />
        <FeaturesSection />
        <InstallSection />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
}
