"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Image } from "@nextui-org/react";

const data = {
  id: "1",
  title: "Modern House",
  rate: 5,
  images: ["/home.jpeg", "/home.jpeg", "/home.jpeg"],
};

export default function HouseDetailSldier() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="house-detail-slider w-full object-cover h-[250px]"
    >
      {data.images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image radius="lg" width="100%" alt={data.title} src={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
