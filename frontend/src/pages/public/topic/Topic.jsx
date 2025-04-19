import React from "react";
import { topicsData } from "@utils/data";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Topic = () => {
  return (
    <div className="pt-[7rem] xl:pt-[10rem] pb-[10rem] relative min-h-[calc(100vh-400px)]">
      <div className="flex flex-col gap-[50px]">
        <div className="px-[50px] w-full mx-auto max-w-[1900px] xl:px-[20px] relative">
          <div className="flex items-center justify-start gap-[1rem] relative min-h-[44px] mb-[1.2rem]">
            <h3 className="text-[1.8em] leading-[1.4] font-semibold text-white shadow-sm mr-4">
              Các chủ đề
            </h3>
          </div>
          <div>
            <div className="grid grid-cols-6 gap-4">
              {topicsData.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to="#"
                    className="relative top-0 py-[1.2rem] pr-[2.5rem] pl-[1.5rem] rounded-[0.75rem] overflow-hidden justify-between  hover:top-[-0.6rem] transition-all duration-300"
                  >
                    <div className="bg-[#324fd1] absolute top-0 left-0 right-0 bottom-0 z-[1] mask-liner-gradiant"></div>

                    <div className="relative z-10 min-h-[110px] w-full h-full gap-[0.7rem] flex flex-col items-start justify-end">
                      <div className="font-bold text-[1.6rem] leading-[1.3] text-white line-clamp-2">
                        {item.title}
                      </div>
                      <div className="text-[16px] text-white flex items-center gap-1">
                        <span>Xem chủ đề</span>
                        <IoIosArrowForward />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
