import React from "react";
import { FaMedal } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardDiscuss from "./CardDiscuss";

const TopDiscuss = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="py-6 px-8 border-b border-[#fff2]">
      <div className="inline-flex items-center gap-2 mb-[1.2rem] font-medium uppercase tracking-[1.5px] text-white cursor-default leading-[1.5] text-[16px]">
        <FaMedal className="text-primary" />
        <span>Top bình luận</span>
      </div>
      <div className="relative">
        <Slider {...settings}>
          <div>
            <CardDiscuss />
          </div>
          <div>
            <CardDiscuss />
          </div>
          <div>
            <CardDiscuss />
          </div>
          <div>
            <CardDiscuss />
          </div>
          <div>
            <CardDiscuss />
          </div>
          <div>
            <CardDiscuss />
          </div>
          <div>
            <CardDiscuss />
          </div>
          <div>
            <CardDiscuss />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TopDiscuss;
