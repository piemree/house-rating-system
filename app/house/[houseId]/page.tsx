import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Avatar, Image } from "@nextui-org/react";
import HouseDetailSldier from "@/components/house-detail-sldier";
import { FcApproval } from "react-icons/fc";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";

const data = {
  id: "1",
  title: "Modern House",
  rate: 5,
  images: ["/home.jpeg", "/home.jpeg", "/home.jpeg"],
};

const rateProps = [
  {
    name: "Safety",
    rate: 5,
  },
  {
    name: "Location",
    rate: 4,
  },
  {
    name: "Cleanliness",
    rate: 3,
  },
  {
    name: "Facilities",
    rate: 2,
  },
  {
    name: "Service",
    rate: 1,
  },
];

const commets = [
  {
    name: "Martin Doe",
    comment: "Lorem ipsum dolor sit amet",
    isOwner: true,
    isApproved: true,
    likes: 10,
    dislikes: 2,
  },
  {
    name: "Hulo Doe",
    comment: "Lorem ipsum dolor sit amet",
    isOwner: false,
    isApproved: true,
    likes: 10,
    dislikes: 2,
  },
  {
    name: "John Doe",
    comment: "Lorem ipsum dolor sit amet",
    isOwner: false,
    isApproved: false,
    likes: 10,
    dislikes: 2,
  },
];

export default function Page({ params }: { params: { houseId: string } }) {
  return (
    <div>
      <HouseDetailSldier />
      <div className="flex flex-col gap-y-4">
        <section className="flex flex-col gap-y-2">
          <div className="flex justify-between w-full">
            <h1 className="text-xl font-bold">{data.title}</h1>
            <div className="flex items-center gap-1">
              {data.rate}
              <span className="text-yellow-500">★</span>
            </div>
          </div>
          <p className="text-default-600 text-xs">Lorem ipsum dolor sit amet</p>
        </section>
        <section className="border-y-1 border-gray-100 flex py-3 mt-2 gap-2">
          <Avatar />{" "}
          <div className="text-xs">
            <b>Owner</b> : John Doe
          </div>
        </section>

        <section className="border-1 border-gray-100 p-3 flex flex-col gap-2 mt-2">
          <h4>Ratings</h4>
          <div className="flex flex-col gap-2">
            {rateProps.map((rate, index) => (
              <div
                key={index}
                className="flex justify-between w-full text-default-600 text-xs border-b-1 border-gray-100 py-1 last:border-b-0"
              >
                <div>{rate.name}</div>
                <div className="flex items-center gap-1">
                  {rate.rate}
                  <span className="text-yellow-500">★</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className=" flex flex-col gap-2 mt-2">
          <h4>
            Comments{" "}
            <span className="text-default-600 text-xs">({commets.length})</span>
          </h4>
          <div className="flex flex-col gap-2">
            {commets.map((comment, index) => (
              <div key={index} className="flex gap-2">
                <Avatar size="sm" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-default-900 text-xs">
                    <b>{comment.name}</b>
                    {comment.isApproved && <FcApproval />}
                    {comment.isOwner && (
                      <BsFillHouseCheckFill color="#8BC34A" />
                    )}
                  </div>
                  <div className="text-default-600 text-xs">
                    {comment.comment}
                  </div>
                  <div
                  className="flex gap-4 text-xs text-default-600"
                  >
                    <button className="text-default-600 flex flex-nowrap gap-1">
                      <BiLike />{" "}
                      <span className=" text-xs">{comment.likes}</span>
                    </button>
                    <button className="text-default-600 flex flex-nowrap gap-1">
                      <BiDislike />{" "}
                      <span className=" text-xs">{comment.dislikes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* write new comment */}
          <div className="flex gap-2">
            <Avatar size="sm" radius="full" />
            <textarea
              className="border-1 border-gray-100 flex-1  p-2 text-xs"
              placeholder="Write a comment"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
