import NavigationInfo from '@/components/product-details/NavigationInfo';
import ProductDetailFooter from '@/components/product-details/ProductDetailFooter';
import ProductDetailsContainer from '@/components/product-details/ProductDetailsContainer';
import React from 'react';

const ProductDetailsById = () => {
    return (
        <div className='max-w-7xl w-full mx-auto gap-y-8'>
           <NavigationInfo/>
           <ProductDetailsContainer/>
           <ProductDetailFooter/>
        </div>
    );
};

export default ProductDetailsById;