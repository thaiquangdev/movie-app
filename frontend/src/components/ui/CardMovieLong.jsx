import React from "react";
import { Link } from "react-router-dom";

const CardMovieLong = () => {
  return (
    <div className="relative w-full pr-4">
      <Link className="pb-[56%] w-full h-0 relative rounded-[0.5rem] overflow-hidden block bg-bg3">
        <div className="left-[1rem] transform-none absolute bottom-0 z-30 flex justify-between items-stretch rounded-tl-[0.3rem] rounded-tr-[0.3rem] overflow-hidden shadow-md">
          <div className="flex-1 gap-[0.2rem] justify-center py-[0.2rem] px-2 text-[11px] font-normal bg-[#5e6070] text-white">
            <span className="text-[11px] font-normal text-white pr-1">PĐ.</span>
            <strong>3</strong>
          </div>
          <div className="flex-1 gap-[0.2rem] justify-center py-[0.2rem] px-2 text-[11px] font-normal bg-[#2ca35d] text-white">
            <span className="text-[11px] font-normal text-white pr-1">TM.</span>
            <strong>3</strong>
          </div>
        </div>
        <div>
          <img
            className="absolute w-full h-full top-0 right-0 bottom-0 object-cover"
            src="https://static.nutscdn.com/vimg/400-0/f6e87017767109accfb6cd4b5e70d91c.jpg"
            alt="Xem Phim Hội Bạn Trai của Bunny Vietsub HD Online - Rophim"
          />
        </div>
      </Link>
      <div className="flex flex-row justify-between items-start gap-5 z-20 relative py-3 px-4">
        <div className="flex-grow">
          <h4 className="font-medium leading-[1.5] text-white text-[1em] line-clamp-1">
            Hội bạn trai của Bunny
          </h4>
          <h4 className="text-[0.9em] mt-[5px] text-textBase font-normal leading-[1.5]">
            <Link className="text-textBase">Crushology 101</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CardMovieLong;
