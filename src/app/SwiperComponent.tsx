'use client'
import Image from 'next/image'
import Link from 'next/link'
// import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './globals.css'

export default function SwiperComponent() {
  
  return (
    <div className="container mx-auto px-4">
      <div className="w-full max-w-7xl mx-auto px-4 py-6 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="rounded-lg shadow-lg"
        >
          {[1, 2, 3, 4].map((num) => (
            <SwiperSlide key={num}>
              <Link href="#">
                <div className="relative h-72 md:h-96 w-full">
                  <Image
                    src={`https://theme.hstatic.net/200000202353/1000633675/14/banner_silder_${num}.jpg?v=145`}
                    alt={`Banner ${num}`}
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}
