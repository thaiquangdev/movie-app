import React from "react";
import { Link } from "react-router-dom";

const CardMovieNormal = () => {
  return (
    <div className="w-full flex flex-col gap-3 relative">
      <Link className="w-full pb-[150%] relative rounded-[0.5rem] overflow-hidden block bg-bg3">
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] z-30 flex justify-between items-stretch rounded-tl-[0.3rem] rounded-tr-[0.3rem] overflow-hidden shadow-md">
          <div className="flex-1 gap-[0.2rem] justify-center py-[0.2rem] px-2 text-[11px] font-normal bg-[#5e6070] text-white">
            P.Đề
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            src="https://static.nutscdn.com/vimg/300-0/c02d19716c1ed2423593dc88eb9282ba.jpg"
            alt="Xem Phim iHostage: Con Tin Vietsub HD Online - Rophim"
            className="absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="min-h-[42px] text-center">
        <h4 className="line-clamp-1 font-normal leading-[1.5] text-white text-[1em]">
          <Link title="iHostage: Con Tin">iHostage: Con Tin</Link>
        </h4>
        <h4 className="line-clamp-1 mt-[5px] text-textBase font-normal leading-[1.5] text-[0.9em]">
          <Link title="iHostage: Con Tin">iHostage: Con Tin</Link>
        </h4>
      </div>
    </div>
  );
};

export default CardMovieNormal;
