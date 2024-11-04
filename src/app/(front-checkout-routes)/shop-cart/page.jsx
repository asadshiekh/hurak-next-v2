import React from 'react'
import PricingHeader from "@/components/global/PricingHeader";
import ProgressSteps from "@/components/global/ProgressSteps";
import Cart from '@/components/frontend-panel/shop-cart/Cart';
import UpsellingSection from '@/components/global/UpsellingSection';
// import PackagesCarousel from '@/components/frontend-panel/pricing-page/PackagesCarousel';
function page() {
  return (
    <>
         <Cart></Cart>
         <UpsellingSection></UpsellingSection>

    </>
    
  )
}

export default page