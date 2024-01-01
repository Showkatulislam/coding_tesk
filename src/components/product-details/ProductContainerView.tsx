import Image from "next/image";
import ProductSlider from "./ProductSlider";

const ProductContainerView = () => {
  return (
    <div className="w-['450px'] hidden lg:block">
        <div>
        <Image
          style={{width:'450px',height:'430px'}}
          width={450}
          height={430}
          src="/images/Ractangle2.png"
          alt="Picture of the author"
        />
        </div>
        <div className="w-full mt-4">
            <ProductSlider/>
        </div>
    </div>
  );
};

export default ProductContainerView;
