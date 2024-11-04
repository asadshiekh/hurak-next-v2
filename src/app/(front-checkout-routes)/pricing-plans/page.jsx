import PricingHeader from "@/components/global/PricingHeader";
import ProgressSteps from "@/components/global/ProgressSteps";
import React from "react";
import SupportSection from "@/components/global/SupportSection";
import Packages from "@/components/frontend-panel/pricing-page/Packages";
import PackagesCarousel from "@/components/frontend-panel/pricing-page/PackagesCarousel";

function page() {
  return (
    <div>
      <Packages></Packages>
      <SupportSection></SupportSection>

      {/* <PackagesCarousel></PackagesCarousel> */}

    </div>
  );
}

export default page;
