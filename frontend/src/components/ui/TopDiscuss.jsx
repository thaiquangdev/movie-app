import React from "react";
import { FaMedal } from "react-icons/fa6";
import CardDiscuss from "./CardDiscuss";
import CustomSlider from "./CustomSlider";

const TopDiscuss = () => {
  const discuss = [...Array(10).keys()].map((i) => (
    <div>{<CardDiscuss key={i} />}</div>
  ));

  return (
    <div className="py-6 px-8 border-b border-[#fff2]">
      <div className="inline-flex items-center gap-2 mb-[1.2rem] font-medium uppercase tracking-[1.5px] text-white cursor-default leading-[1.5] text-[16px]">
        <FaMedal className="text-primary" />
        <span>Top bình luận</span>
      </div>
      <div className="relative">
        <CustomSlider
          items={discuss}
          slidesPerView={5}
          spaceBetween={16}
          btnView={false}
        />
      </div>
    </div>
  );
};

export default TopDiscuss;
