import React from "react";

import PersonInfo from "./PersonInfo";
import FooterService from "./FooterService";
import FooterDeliverySection from "./FooterDeliverySection";

const ProductDetailFooter = () => {
  return (
    <div className="border border-zinc-500 p-4 lg:p-12 bg-white lg:flex space-y-6 lg:space-y-0  lg:items-center justify-between">
      {/* profile info */}
      <PersonInfo/>
      <FooterService/>
      <FooterDeliverySection/>
    </div>
  );
};

export default ProductDetailFooter;
