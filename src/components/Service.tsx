import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface ServiceProps {
  img: any;
  text: string;
}
const Service = ({ img, text }: ServiceProps) => {
  return (
    <div className="lg:hidden flex flex-col items-center">
      <div className="bg-white flex justify-between items-center lg:w-52 lg:px-5 px-2 py-2 rounded-2xl">
        <div className="flex items-center space-x-2">
          <Image src={img} width={36} height={36} alt="service-logo" />
          <p className="hidden lg:block">{text}</p>
        </div>
        <div className="hidden lg:block">
          <ChevronRight />
        </div>
      </div>
      <div className="lg:hidden block">
      <p className="">{text}</p>
      </div>
    </div>
  );
};

export default Service;
