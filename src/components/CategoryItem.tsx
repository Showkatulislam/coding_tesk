interface CategoryItemProps{
    icon:any,
    title:string
}
const CategoryItem = ({icon:Icon,title}:CategoryItemProps) => {
    return (
        <div className="flex items-center px-4 py-2 ">
            <Icon className="text-[#2E2E2E] text-xs"/>
             <p className="pl-2 text-[#2E2E2E] text-xs">{title}</p>
        </div>
    );
};

export default CategoryItem;