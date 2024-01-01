import { Clock } from "lucide-react";

const FooterService = () => {
  return (
    <div className="flex flex-col justify-center  gap-y-3">
      <h2 className="text-zinc-500 text-2xl font-bold">Service</h2>
      <div className="flex items-center gap-x-3">
        <Clock />
        <p className="text-[#F97316] text-2xl font-bold">7 day return</p>
      </div>
      <div>
        <p>Change of mind is not applicable</p>
      </div>
      <div className="flex items-center gap-x-3">
        <Clock />
        <p className="text-zinc-500 text-2xl font-bold"> Warranty Not Available</p>
        
      </div>
    </div>
  );
};

export default FooterService;
