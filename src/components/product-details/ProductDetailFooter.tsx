import React from "react";

import PersonInfo from "./PersonInfo";
import FooterService from "./FooterService";
import FooterDeliverySection from "./FooterDeliverySection";

const ProductDetailFooter = () => {
  return (
    <div className="border border-zinc-500 p-4 lg:p-12 bg-white lg:flex space-y-6 lg:space-y-0  lg:items-center justify-between lg:space-x-5">
      {/* profile info */}
      <PersonInfo/>
      <div className="lg:border-r hidden lg:block border-zinc-500 h-36 w-['2px']"/>
      <FooterService/>
      <div className="border-r hidden lg:block border-zinc-500 h-36 w-['2px']"/>
      <hr className="bg-gray-500" />
      <FooterDeliverySection/>
    </div>
  );
};

export default ProductDetailFooter;
