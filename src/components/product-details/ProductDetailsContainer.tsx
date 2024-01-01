import React from 'react';
import ProductContainerView from './ProductContainerView';
import ProductDetailInfo from './ProductDetailInfo';

const ProductDetailsContainer = () => {
    return (
        <div className='w-full bg-white p-4 flex gap-x-5'>
            <ProductContainerView/>
            <ProductDetailInfo/>
        </div>
    );
};

export default ProductDetailsContainer;