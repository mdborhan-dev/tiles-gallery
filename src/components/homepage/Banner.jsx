"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import slide1 from "@/assets/tileinBathroom.jpg"
import { getTileBannerImages } from '@/lib/dataFetch';
import { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';

const Banner = () => {
  const [images,setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
    getTileBannerImages()
      .then((data) => {
        setImages(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

 isLoading && <span className='spinner'></span>

  return (
<div className=" mx-auto relative aspect-video">
  <Swiper
    // pagination={{
    //   dynamicBullets: false,
    // }}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper h-full"
  >
    {images.map((image) => (
      <SwiperSlide key={image.id} className="relative">
        <Image
          src={image.image}
          alt={image.title}
          fill
          className="object-cover"
          priority
        />
      </SwiperSlide>
    ))}
  </Swiper>

  <div className="absolute inset-0 bg-black/50 pointer-events-none z-10" />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10 gap-5">
    <h2 className="text-3xl md:text-7xl font-bold text-primary">Discover Your Perfect Aesthetic</h2>
    <Link href={"/all-tiles"} className='btn btn-primary border-0 btn-xl cursor-pointer hover:gap-3'>Browse Now <span>|</span> <FaArrowRightLong/></Link>
  </div>
</div>
  );
}

export default Banner;