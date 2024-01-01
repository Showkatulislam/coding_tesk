'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

import { Pagination } from 'swiper/modules';
import Image from "next/image";
const Banner = () => {
  return (
    <>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full h-96">
      <SwiperSlide>
        <Image className="object-fill" src="/images/bannar.png" alt="banner" fill/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/bannar.png" alt="banner" fill/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/slide banner.jpg" alt="banner" fill/>
      </SwiperSlide>
    </Swiper>
  </>
  );
};

export default Banner;
