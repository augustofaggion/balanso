import React from "react";
import NavbarHome from "./components/NavbarHome";
import CtaSection from "./components/CtaSection";
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
  return (
    <>
      <NavbarHome />
      <div className="mt-20">
        <CtaSection />
      </div>
      <FeaturesSection />
    </>
  );
}
