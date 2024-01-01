import React from 'react';
import Cart from './Cart';
import pc from '../../public/images/pc.png'
const MobileCart = () => {
    return (
        <div className='lg:hidden block'>
            <div>
            <Cart 
                description="Soft Newborn Baby Wrap Blankets Baby Sleeping"
                img={pc}
                price={1990}
                discount={200}
                percentace={21} />
            </div>
        </div>
    );
};

export default MobileCart;