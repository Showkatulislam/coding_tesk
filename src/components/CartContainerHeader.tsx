import { ChevronRight } from "lucide-react";

const CartContainerHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="max-w-sm w-full flex justify-between items-center">
        <div>
          <p
            className="text-xl font-semibold text-[#F97316]
"
          >
            FlashSale
          </p>
        </div>
        <div className="flex space-x-5 items-center">
          <div>
            <p>Ending In</p>
          </div>
          <div className="flex items-center justify-center bg-[#F97316] text-white p-2">
            12
          </div>
          <div className="flex items-center justify-center bg-[#F97316] text-white p-2">
            12
          </div>
          <div className="flex items-center justify-center bg-[#F97316] text-white p-2">
            12
          </div>
        </div>
      </div>
      <div className="flex">
        <p className="text-[#F97316]">See More </p>
        <ChevronRight className="text-[#F97316]" />
      </div>
    </div>
  );
};

export default CartContainerHeader;
