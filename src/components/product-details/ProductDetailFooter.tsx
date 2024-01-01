import React from "react";

import PersonInfo from "./PersonInfo";
import FooterService from "./FooterService";
import FooterDeliverySection from "./FooterDeliverySection";

const ProductDetailFooter = () => {
  return (
    <div className="border border-zinc-500 p-12 bg-white flex items-center justify-between">
      {/* profile info */}
      <PersonInfo/>
      <FooterService/>
      <FooterDeliverySection/>
    </div>
  );
};

export default ProductDetailFooter;
