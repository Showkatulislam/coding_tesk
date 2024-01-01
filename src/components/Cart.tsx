import { DollarSign, Heart } from "lucide-react";
import Image from "next/image";

interface CartProps {
  description: string;
  price: number;
  discount: number;
  percentace: number;
  img: any;
}
const Cart = ({ description, price, discount, percentace, img }: CartProps) => {
  return (
    <div className="lg:w-48 w-32 h-44 lg:h-72 p-1 flex flex-col items-center border border-zinc-200 gap-y-2">
      <div className="relative">
        <Image src={img} width={185} height={195} alt="card-image" />
        <div
          className="absolute w-6 h-6 p-0.5 flex items-start
         justify-center rounded-full bg-gray-600 z-20 top-4 right-2 "
        >
          <Heart className=" text-white" />
        </div>
        <div className="lg:w-14  lg:h-8 bg-orange-600 flex items-center justify-center text-white absolute bottom-2 left-2">
           <p className="lg:text-xs text-['8px']"> {percentace} of %</p>
        </div>
      </div>
      <div>
        <p className="text-[14px]">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-[#F97316]">
            <DollarSign className="text-[12px]" />
            <p className="text-xs">{price}</p>
          </div>
          <div className="flex items-center text-[#F97316]">
            <DollarSign className="text-[12px]" />
            <p className="text-xs  line-through">{discount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
