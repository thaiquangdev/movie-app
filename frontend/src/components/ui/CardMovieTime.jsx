import React from "react";
import { Link } from "react-router-dom";

const CardMovieTime = () => {
  return (
    <Link className="py-[10px] pr-[15px] pl-[10px] bg-[#363840] border border-[#ffffff20] rounded-[0.75rem] text-[13px] relative flex flex-row items-center justify-between gap-4 group hover:border-primary">
      <div className="text-white absolute top-[-12px] text-[12px] leading-[1] py-[2px] px-[4px] rounded-[3px] bg-bg group-hover:text-primary">
        21:30
      </div>
      <div className="flex-shrink-0 w-[50px]">
        <div className="rounded-[0.2rem] w-full pb-[150%] h-0 relative overflow-hidden block bg-bg3">
          <img
            loading="lazy"
            src="https://static.nutscdn.com/vimg/0-100/055875f8424f76d54b2a36feaa6edc07.jpg"
            alt="Xem Phim Chuyện Đời Bác Sĩ Nội Trú Vietsub HD Online - Rophim"
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-grow">
        <h4 className="mb-[0.4rem] font-normal leading-[1.5] text-white text-[1em] line-clamp-2">
          Chuyện Đời Bác Sĩ Nội Trú
        </h4>
        <div>
          <div className="text-[0.9em] text-textBase whitespace-nowrap inline">
            Tập 4
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardMovieTime;
