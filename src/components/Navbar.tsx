import Mainnav from "./Mainnav";
import SubNav from "./SubNav";

const Navbar = () => {
  return (
    <div
      className="
        h-24 
        md:flex 
        flex-col"
    >
      <div
        className="
           bg-[#F0F1F1] hidden lg:block"
      >
        <SubNav />
      </div>
      <div
        className="bg-white 
           h-[70px] 
           w-full"
      >
        <Mainnav />
      </div>
    </div>
  );
};

export default Navbar;
