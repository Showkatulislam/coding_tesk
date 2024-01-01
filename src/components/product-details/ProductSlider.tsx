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

export default function ProductSlider() {
    const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      <Swiper
         slidesPerView={3}
         centeredSlides={true}
         spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[450px] mx-auto"
      >
        <SwiperSlide>
            <Image src='/images/Ractangle2.png' alt="image" width={84} height={84} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/Ractangle2.png' alt="image" width={84} height={84} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/Ractangle2.png' alt="image" width={84} height={84} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/Ractangle2.png' alt="image" width={84} height={84} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/Ractangle2.png' alt="image" width={84} height={84} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/Ractangle2.png' alt="image" width={84} height={84} />
        </SwiperSlide>
  
      </Swiper>
    </>
  );
}
