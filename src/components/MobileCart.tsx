import React from 'react';
import Cart from './Cart';
import pc from '../../public/images/pc.png'
import MobileCartItems from './MobileCartItems';
const MobileCart = () => {
    return (
        <div className='lg:hidden flex items-center'>
            <div className='bg-white'>
            <Cart 
                description="Soft Newborn Baby Wrap Blankets Baby Sleeping"
                img={pc}
                price={1990}
                discount={200}
                percentace={21} />
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <MobileCartItems/>
                <MobileCartItems/>
                <MobileCartItems/>
                <MobileCartItems/>
            </div>
        </div>
    );
};

export default MobileCart;