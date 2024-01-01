import Cart from "./Cart";
import CartContainerHeader from "./CartContainerHeader";
import headphone from '../../public/images/headphone.png'
const CartContanter = () => {
    return (
        <div className="max-w-7xl w-full h-[360] py-4 px-8 bg-white mt-5 mx-auto hidden lg:block">
            <CartContainerHeader/>
            <div className="m-8 flex items-center justify-between">
                <Cart 
                description="Soft Newborn Baby Wrap Blankets Baby Sleeping"
                img={headphone}
                price={1990}
                discount={200}
                percentace={21} />
                <Cart 
                description="Soft Newborn Baby Wrap Blankets Baby Sleeping"
                img={headphone}
                price={1990}
                discount={200}
                percentace={21} />
                <Cart 
                description="Soft Newborn Baby Wrap Blankets Baby Sleeping"
                img={headphone}
                price={1990}
                discount={200}
                percentace={21} />
                <Cart 
                description="Soft Newborn Baby Wrap Blankets Baby Sleeping"
                img={headphone}
                price={1990}
                discount={200}
                percentace={21} />
                <Cart 
                description="Soft Newborn Baby Wrap Blankets Baby Sleeping"
                img={headphone}
                price={1990}
                discount={200}
                percentace={21} />
            </div>
        </div>
    );
};

export default CartContanter;