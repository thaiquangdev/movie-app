import React from "react";
import { BiSolidMovie } from "react-icons/bi";
import { FaArrowTrendUp, FaHeartCircleCheck, FaBolt } from "react-icons/fa6";
import { Link } from "react-router-dom";
import IrtCommentNew from "./IrtCommentNew";
import CustomSlider from "./CustomSlider";

const IrtTable = () => {
  const comments = [...Array(10).keys()].map((i) => (
    <div>{<IrtCommentNew key={i} />}</div>
  ));
  return (
    <div className="flex items-stretch justify-between">
      <div className="flex-1 py-6 px-8">
        <div className="inline-flex items-center gap-2 mb-[1.2rem] font-medium uppercase tracking-[1.5px] text-white">
          <BiSolidMovie className="text-primary" size={20} />
          <span>Sôi nổi nhất</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4 h-[50px]">
            <div className="w-[16px] text-[1.2em] font-semibold text-white opacity-30">
              1.
            </div>
            <div className="w-[16px] text-center flex-shrink-0 text-[#bedc33]">
              <FaArrowTrendUp />
            </div>
            <div className="w-[25px] h-0 pb-[36px] rounded-[0.1rem] flex-shrink-0 relative block overflow-hidden bg-bg3">
              <img
                loading="lazy"
                src="https://static.nutscdn.com/vimg/300-0/0b683c030893bc2bff6970e2c2c1a631.jpg"
                alt="Xem Phim Ăn, Chạy, Yêu Vietsub HD Online - Rophim"
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="text-[1em] font-normal flex-grow text-white line-clamp-1">
              <Link title="Ăn, Chạy, Yêu">Ăn, Chạy, Yêu</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 h-[50px]">
            <div className="w-[16px] text-[1.2em] font-semibold text-white opacity-30">
              1.
            </div>
            <div className="w-[16px] text-center flex-shrink-0 text-[#bedc33]">
              <FaArrowTrendUp />
            </div>
            <div className="w-[25px] h-0 pb-[36px] rounded-[0.1rem] flex-shrink-0 relative block overflow-hidden bg-bg3">
              <img
                loading="lazy"
                src="https://static.nutscdn.com/vimg/300-0/0b683c030893bc2bff6970e2c2c1a631.jpg"
                alt="Xem Phim Ăn, Chạy, Yêu Vietsub HD Online - Rophim"
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="text-[1em] font-normal flex-grow text-white line-clamp-1">
              <Link title="Ăn, Chạy, Yêu">Ăn, Chạy, Yêu</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 h-[50px]">
            <div className="w-[16px] text-[1.2em] font-semibold text-white opacity-30">
              1.
            </div>
            <div className="w-[16px] text-center flex-shrink-0 text-[#bedc33]">
              <FaArrowTrendUp />
            </div>
            <div className="w-[25px] h-0 pb-[36px] rounded-[0.1rem] flex-shrink-0 relative block overflow-hidden bg-bg3">
              <img
                loading="lazy"
                src="https://static.nutscdn.com/vimg/300-0/0b683c030893bc2bff6970e2c2c1a631.jpg"
                alt="Xem Phim Ăn, Chạy, Yêu Vietsub HD Online - Rophim"
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="text-[1em] font-normal flex-grow text-white line-clamp-1">
              <Link title="Ăn, Chạy, Yêu">Ăn, Chạy, Yêu</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 h-[50px]">
            <div className="w-[16px] text-[1.2em] font-semibold text-white opacity-30">
              1.
            </div>
            <div className="w-[16px] text-center flex-shrink-0 text-[#bedc33]">
              <FaArrowTrendUp />
            </div>
            <div className="w-[25px] h-0 pb-[36px] rounded-[0.1rem] flex-shrink-0 relative block overflow-hidden bg-bg3">
              <img
                loading="lazy"
                src="https://static.nutscdn.com/vimg/300-0/0b683c030893bc2bff6970e2c2c1a631.jpg"
                alt="Xem Phim Ăn, Chạy, Yêu Vietsub HD Online - Rophim"
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="text-[1em] font-normal flex-grow text-white line-clamp-1">
              <Link title="Ăn, Chạy, Yêu">Ăn, Chạy, Yêu</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 h-[50px]">
            <div className="w-[16px] text-[1.2em] font-semibold text-white opacity-30">
              1.
            </div>
            <div className="w-[16px] text-center flex-shrink-0 text-[#bedc33]">
              <FaArrowTrendUp />
            </div>
            <div className="w-[25px] h-0 pb-[36px] rounded-[0.1rem] flex-shrink-0 relative block overflow-hidden bg-bg3">
              <img
                loading="lazy"
                src="https://static.nutscdn.com/vimg/300-0/0b683c030893bc2bff6970e2c2c1a631.jpg"
                alt="Xem Phim Ăn, Chạy, Yêu Vietsub HD Online - Rophim"
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="text-[1em] font-normal flex-grow text-white line-clamp-1">
              <Link title="Ăn, Chạy, Yêu">Ăn, Chạy, Yêu</Link>
            </div>
          </div>
          <div className="mt-2">
            <Link className="text-[#fff5] text-[0.875em]">Xem thêm</Link>
          </div>
        </div>
      </div>
      <div className="flex-1 py-6 px-8 border-l border-[#fff1]">
        <div className="inline-flex items-center gap-2 mb-[1.2rem] font-medium uppercase tracking-[1.5px] text-white">
          <FaHeartCircleCheck className="text-primary" size={20} />
          <span>Yêu thích nhất</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4 h-[50px]">
            <div className="w-[16px] text-[1.2em] font-semibold text-white opacity-30">
              1.
            </div>
            <div className="w-[16px] text-center flex-shrink-0 text-[#bedc33]">
              <FaArrowTrendUp />
            </div>
            <div className="w-[25px] h-0 pb-[36px] rounded-[0.1rem] flex-shrink-0 relative block overflow-hidden bg-bg3">
              <img
                loading="lazy"
                src="https://static.nutscdn.com/vimg/300-0/0b683c030893bc2bff6970e2c2c1a631.jpg"
                alt="Xem Phim Ăn, Chạy, Yêu Vietsub HD Online - Rophim"
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="text-[1em] font-normal flex-grow text-white line-clamp-1">
              <Link title="Ăn, Chạy, Yêu">Ăn, Chạy, Yêu</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 h-[50px]">
            <div className="w-[16px] text-[1.2em] font-semibold text-white opacity-30">
              1.
            </div>
            <div className="w-[16px] text-center flex-shrink-0 text-[#bedc33]">
              <FaArrowTrendUp />
            </div>
            <div className="w-[25px] h-0 pb-[36px] rounded-[0.1rem] flex-shrink-0 relative block overflow-hidden bg-bg3">
              <img
                loading="lazy"
                src="https://static.nutscdn.com/vimg/300-0/0b683c030893bc2bff6970e2c2c1a631.jpg"
                alt="Xem Phim Ăn, Chạy, Yêu Vietsub HD Online - Rophim"
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="text-[1em] font-normal flex-grow text-white line-clamp-1">
              <Link title="Ăn, Chạy, Yêu">Ăn, Chạy, Yêu</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 h-[50px]">
            <div className="w-[16px] text-[1.2em] font-semibold text-white opacity-30">
              1.
            </div>
            <div className="w-[16px] text-center flex-shrink-0 text-[#bedc33]">
              <FaArrowTrendUp />
            </div>
            <div className="w-[25px] h-0 pb-[36px] rounded-[0.1rem] flex-shrink-0 relative block overflow-hidden bg-bg3">
              <img
                loading="lazy"
                src="https://static.nutscdn.com/vimg/300-0/0b683c030893bc2bff6970e2c2c1a631.jpg"
                alt="Xem Phim Ăn, Chạy, Yêu Vietsub HD Online - Rophim"
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="text-[1em] font-normal flex-grow text-white line-clamp-1">
              <Link title="Ăn, Chạy, Yêu">Ăn, Chạy, Yêu</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 h-[50px]">
            <div className="w-[16px] text-[1.2em] font-semibold text-white opacity-30">
              1.
            </div>
            <div className="w-[16px] text-center flex-shrink-0 text-[#bedc33]">
              <FaArrowTrendUp />
            </div>
            <div className="w-[25px] h-0 pb-[36px] rounded-[0.1rem] flex-shrink-0 relative block overflow-hidden bg-bg3">
              <img
                loading="lazy"
                src="https://static.nutscdn.com/vimg/300-0/0b683c030893bc2bff6970e2c2c1a631.jpg"
                alt="Xem Phim Ăn, Chạy, Yêu Vietsub HD Online - Rophim"
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="text-[1em] font-normal flex-grow text-white line-clamp-1">
              <Link title="Ăn, Chạy, Yêu">Ăn, Chạy, Yêu</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 h-[50px]">
            <div className="w-[16px] text-[1.2em] font-semibold text-white opacity-30">
              1.
            </div>
            <div className="w-[16px] text-center flex-shrink-0 text-[#bedc33]">
              <FaArrowTrendUp />
            </div>
            <div className="w-[25px] h-0 pb-[36px] rounded-[0.1rem] flex-shrink-0 relative block overflow-hidden bg-bg3">
              <img
                loading="lazy"
                src="https://static.nutscdn.com/vimg/300-0/0b683c030893bc2bff6970e2c2c1a631.jpg"
                alt="Xem Phim Ăn, Chạy, Yêu Vietsub HD Online - Rophim"
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="text-[1em] font-normal flex-grow text-white line-clamp-1">
              <Link title="Ăn, Chạy, Yêu">Ăn, Chạy, Yêu</Link>
            </div>
          </div>
          <div className="mt-2">
            <Link className="text-[#fff5] text-[0.875em]">Xem thêm</Link>
          </div>
        </div>
      </div>
      <div className="flex-1 py-6 px-8 max-w-[550px] border-l border-[#fff1]">
        <div className="inline-flex items-center gap-2 mb-[1.2rem] font-medium uppercase tracking-[1.5px] text-white">
          <FaBolt className="text-primary" size={20} />
          <span>Bình luận mới</span>
        </div>
        <div className="relative h-[282px] overflow-hidden">
          <CustomSlider
            items={comments}
            slidesPerView={4}
            spaceBetween={4}
            direction
            autoPlay
            btnView={false}
          />
        </div>
      </div>
    </div>
  );
};

export default IrtTable;
