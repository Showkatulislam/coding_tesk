import { Clock } from 'lucide-react';
import React from 'react';

const FooterDeliverySection = () => {
    return (
        <div className="flex flex-col justify-center  gap-y-3">
        <h2>Service</h2>
        <div className="flex items-center gap-x-3">
          <Clock />
          <p>7 day return</p>
        </div>
        <div>
          <p>Change of mind is not applicable</p>
        </div>
        <div className="flex items-center gap-x-3">
          <Clock />
          <p> Warranty Not Available</p>
        </div>
      </div>
    );
};

export default FooterDeliverySection;