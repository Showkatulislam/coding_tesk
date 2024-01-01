import React from 'react';
import img1 from '../../public/images/Alzaf-logo (6).png'
import img2 from '../../public/images/Alzaf-logo (2).png'
import img3 from '../../public/images/Alzaf-logo (3).png'
import img4 from '../../public/images/Alzaf-logo (3).png'
import img5 from '../../public/images/Alzaf-logo (4).png'
import img6 from '../../public/images/Alzaf-logo (5).png'
import Service from './Service';
const Services = () => {
    return (
        <div className='max-w-7xl lg:w-full mx-20 lg:mx-auto mt-4 flex items-center  lg:justify-between justify-around'>
            <Service img={img1} text='Mart'/>
            <Service img={img2} text='Mart'/>
            <Service img={img3} text='Mart'/>
            <Service img={img4} text='Mart'/>
            <Service img={img5} text='Mart'/>
            <Service img={img6} text='Mart'/>
        </div>
    );
};

export default Services;