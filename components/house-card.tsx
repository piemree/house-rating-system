"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";

type HouseCardProps = {
  item: {
    id: string;
    title: string;
    rate: number;
    images: string[];
  };
  className?: string;
};

export default function HouseCard({ item, className }: HouseCardProps) {
  return (
    <Link href={`/house/${item.id}`} className={clsx("house-card", className)}>
      <Card className="border-1 border-gray-100 shadow-none">
        <CardBody className="overflow-visible p-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="w-full object-cover h-[250px]"
          >
            {item.images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="object-cover bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
        <CardFooter className="flex flex-col justify-between">
          <div className="flex justify-between w-full">
            <b>{item.title}</b>
            <span className="flex items-center justify-center  gap-1 ">
              {item.rate} <FaStar className="text-yellow-500" />
            </span>
          </div>
          <div className="text-default-600 text-xs w-full">
            <b>Owner</b> : John Doe
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
