
import React from 'react';
import FooterContent from './FooterContent';

const Footer = () => {
    return (
        <div   className="bg-[url('/images/bannar.png')] bg-cover bg-center h-96 w-full my-10 hidden lg:block">
            <FooterContent/>
        </div>
    );
};

export default Footer;