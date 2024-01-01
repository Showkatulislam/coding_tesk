import CategoryDropdown from "./CategoryDropdown";
import NavigationInfoItem from "./NavigationInfoItem";

const NavigationInfo = () => {
    return (
        <div className="h-12 py-4 hidden lg:flex items-center gap-x-[6px]">
            <CategoryDropdown/>
            <NavigationInfoItem text="Electronic Devices"/>
            <NavigationInfoItem text="bag and travel"/>
            <NavigationInfoItem text="travel and sports"/>
            <NavigationInfoItem text="bag and travel"/>
            <NavigationInfoItem text="Valvet Travel Neck Pillow Folding U-Shaped..."/>
        </div>
    );
};

export default NavigationInfo;