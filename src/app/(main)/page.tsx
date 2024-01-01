import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Services from "@/components/Services";
import CartContanter from "@/components/CartContanter";
import Footer from "@/components/Footer";
import MobileCart from "@/components/MobileCart";

const page = () => {
  return (
    <div className="w-full mx-auto h-full">
      
      <div className="relative">
        <Banner />
        <div className="max-w-7xl hidden lg:block w-full mx-auto">
        <div className="w-80 h-96 bg-white z-50 relative inset-0 left-0 -mt-96">
          <Category />
        </div>
        </div>
      </div>
      <Services />
      <MobileCart/>
      <CartContanter />
      <Footer/>
    </div>
  );
};

export default page;
