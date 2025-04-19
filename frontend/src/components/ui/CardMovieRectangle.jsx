import React from "react";
import { Link } from "react-router-dom";

const CardMovieRectangle = () => {
  return (
    <div className="pr-[16px] flex-shrink-0 h-full relative">
      <div className="relative">
        <Link className="pb-[45%] w-full h-0 relative rounded-[0.5rem] overflow-hidden block bg-bg3">
          <div className="absolute bottom-0 left-[120px] z-30 flex justify-between items-stretch rounded-tl-[0.3rem] rounded-tr-[0.3rem] overflow-hidden shadow-md">
            <div className="flex-1 gap-[0.2rem] justify-center py-[0.2rem] px-2 text-[11px] font-normal bg-[#5e6070] text-white">
              P.Đề
            </div>
            <div className="flex-1 gap-[0.2rem] justify-center py-[0.2rem] px-2 text-[11px] font-normal bg-[#2ca35d] text-white">
              T.Minh
            </div>
          </div>
          <div>
            <img
              src="https://static.nutscdn.com/vimg/500-0/979a39c552cbfea9fb2a4b21bc0d297d.jpg"
              alt="Mật Vụ Phụ Hồ"
              className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover"
            />
          </div>
        </Link>
        <div className="py-4 px-5 relative z-2 gap-5 items-start flex flex-row justify-between">
          <div className="mt-[-60px] w-[80px] flex-shrink-0">
            <Link className="shadow-md w-full pb-[150%] h-0 relative rounded-[0.5rem] overflow-hidden block bg-bg3">
              <img
                src="https://static.nutscdn.com/vimg/100-0/92db452d2b31b3f5bc048212edec6e8e.jpg"
                alt="Xem Phim Mật Vụ Phụ Hồ Vietsub HD Online - Rophim"
                className="absolute top-0 right-0 bottom-0 left-0 object-cover w-full h-full"
              />
            </Link>
          </div>
          <div className="flex-grow">
            <h4 className="line-clamp-1 font-medium mb-[0.4rem] leading-[1.5] text-white text-[0.875em]">
              <Link title="Mật Vụ Phụ Hồ">Mật Vụ Phụ Hồ</Link>
            </h4>
            <h4 className="line-clamp-1 font-medium mb-[0.4rem] leading-[1.5] text-textBase text-[0.7em]">
              <Link title="A Working Man">A Working Man</Link>
            </h4>
            <div>
              <div className="text-textBase text-[0.7em] whitespace-nowrap inline">
                T18
              </div>
              <div className="ml-[10px] pl-[10px] relative text-textBase text-[0.7em] whitespace-nowrap inline before:content-[''] before:w-[5px] before:h-[5px] before:inline-block before:bg-[#ffffff30] before:absolute before:left-[-3px] before:top-[calc(50%-3px)] before:rounded-[50%]">
                2025
              </div>
              <div className="ml-[10px] pl-[10px] relative text-textBase text-[0.7em] whitespace-nowrap inline before:content-[''] before:w-[5px] before:h-[5px] before:inline-block before:bg-[#ffffff30] before:absolute before:left-[-3px] before:top-[calc(50%-3px)] before:rounded-[50%]">
                1h 56m
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovieRectangle;
