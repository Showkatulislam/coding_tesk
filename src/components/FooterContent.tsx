import Category from "./Category";
import FooterContentItem from "./FooterContentItem";

const FooterContent = () => {
    return (
        <div className="max-w-7xl h-full w-full mx-auto relative">
            <div className="h-full bg-white max-w-[690px] w-full absolute left-0 inset-y-0 z-20 flex">
                <div className="border-r w-1/3">
                    <Category/>
                </div>
                <div className="border-r w-1/3 p-3 flex flex-col space-y-2">
                    <FooterContentItem text="kids bags"/>
                    <FooterContentItem text="laptop bags & cases"/>
                    <FooterContentItem text="Luggage"/>
                    <FooterContentItem text="Travel Bags"/>
                    <FooterContentItem text="Men’s bag"/>
                    <FooterContentItem text="Women’s Bag"/>
                    <FooterContentItem text="Men’s Watches"/>
                    <FooterContentItem text="Women’s Watches"/>
                    <FooterContentItem text="Kids Watches"/>
                    <FooterContentItem text="women’s jewellery"/>
                    <FooterContentItem text="men’s jewellery"/>
                </div>
                <div className="w-1/3  p-3 flex flex-col space-y-2">
                    <FooterContentItem text="kids bags"/>
                    <FooterContentItem text="laptop bags & cases"/>
                    <FooterContentItem text="Luggage"/>
                    <FooterContentItem text="Travel Bags"/>
                    <FooterContentItem text="Men’s bag"/>
                    <FooterContentItem text="Women’s Bag"/>
                    <FooterContentItem text="Men’s Watches"/>
                </div>
            </div>
        </div>
    );
};

export default FooterContent;