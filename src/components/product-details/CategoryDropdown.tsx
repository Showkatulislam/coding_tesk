import { ChevronDown, ChevronRight, List } from "lucide-react";

const CategoryDropdown = () => {
    return (
        <div className="flex items-center gap-x-2 text-[14px] font-semibold text-[#F97316]">
            <List/>
            <p>All Categories</p>
            <ChevronDown/>
        </div>
    );
};

export default CategoryDropdown;