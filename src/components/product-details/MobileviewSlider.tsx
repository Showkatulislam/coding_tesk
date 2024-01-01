"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function ModbileViewSlider() {
    const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className='lg:hidden'>
      <Swiper
         centeredSlides={true}
         spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[450px] mx-auto"
      >
        <SwiperSlide>
            <Image src='/images/Ractangle2.png' alt="image" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/Ractangle2.png' alt="image" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/Ractangle2.png' alt="image" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/Ractangle2.png' alt="image" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/Ractangle2.png' alt="image" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/Ractangle2.png' alt="image"width={300} height={300}/>
        </SwiperSlide>
  
      </Swiper>
    </div>
  );
}
