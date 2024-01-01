import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import Image from "next/image";

const Mainnav = () => {
  return (
    <div
      className="
        max-w-7xl
        lg:mx-auto
        flex 
        items-center
        justify-between
        h-full
        w-full
        "
    >
      <div className="hidden h-full lg:flex items-center">
        <Image
          src="/images/Alzaf-logo.png"
          width={129}
          height={36}
          alt="logo"
        />
      </div>
      <div className="bg-[#EFF0F5] h-11 lg:w-[700px] w-full  lg:mx-0 mx-2  flex items-center justify-between">
        <input
          type="text"
          className="
                 bg-transparent
                 border-none
                 lg:px-5
                 px-2
                 outline-none
                 lg:w-96
                 "
          placeholder="Search Product"
        />
        <div className="bg-[#F97316] p-3">
          <Search className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="flex items-center lg:mr-0 mr-1 space-x-5">
        <div className="lg:block hidden">
          <UserRound className="w-5 h-5" />
        </div>
        <div>
          <Heart className="w-5 h-5" />
        </div>
        <div className="lg:block hidden">
          <ShoppingCart className="w-5 h-5" />
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/images/cloud-service.png"
          width={177}
          height={44}
          alt="cloud image"
        />
      </div>
    </div>
  );
};

export default Mainnav;
