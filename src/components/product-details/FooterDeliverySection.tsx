
import Image from 'next/image';
import React from 'react';

const FooterDeliverySection = () => {
    return (
        <div className="flex flex-col justify-center  gap-y-3">
        <h2 className="text-zinc-500 text-2xl font-bold">Delivery</h2>
        <div className="flex items-center gap-x-3">
         <Image src="/images/Group.png" width={18} height={14} alt="Group"/>
         <p className="text-[#F97316] text-2xl font-bold">Free Delivery <span className='text-xl text-zinc-600'>4Nov - 8Nov 3- 5 days</span></p>
        </div>
        <div>
          <p>Change of mind is not applicable</p>
        </div>
        <div className="flex items-center gap-x-3">
        <Image src="/images/vector.png" width={18} height={14} alt="Group"/>
          <p className="text-[#F97316] text-2xl font-bold"> Cash on delivery available</p>
        </div>
      </div>
    );
};

export default FooterDeliverySection;