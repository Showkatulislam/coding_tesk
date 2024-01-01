import { ChevronRight } from "lucide-react";

interface NavigationInfoItemProps{
    text:string
}
const NavigationInfoItem = ({text}:NavigationInfoItemProps) => {
    return (
        <div className="flex items-center text-[#434343]">
            <p className="text-xs">{text}</p>
            <ChevronRight className="text-xs"/>
        </div>
    );
};

export default NavigationInfoItem;