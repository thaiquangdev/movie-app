import React from "react";
import { RiCalendarScheduleFill } from "react-icons/ri";
import CustomSlider from "../../components/ui/CustomSlider";
import CardTime from "../../components/ui/CardTime";
import CardMovieTime from "../../components/ui/CardMovieTime";

const ShowTime = () => {
  const movies = [...Array(10).keys()].map((i) => (
    <div>{<CardTime key={i} />}</div>
  ));

  return (
    <div className="pt-[7rem] bg-bg 2xl:pt-[10rem] pb-[10rem] relative min-h-[calc(100vh-400px)]">
      <div className="flex flex-col gap-[50px]">
        <div className="px-[50px] w-full mx-auto max-w-[1400px] xl:px-[20px] relative">
          <div className="flex items-center justify-start gap-[1rem] relative min-h-[44px] mb-[1.2rem]">
            <div className="text-white w-[32px] h-[32px] xl:w-[30px] xl:h-[30px] flex-shrink-0 flex items-center justify-center">
              <RiCalendarScheduleFill size={25} />
            </div>
            <h3 className="text-[1.8em] leading-[1.4] font-semibold text-white shadow-sm mr-4">
              Lịch chiếu
            </h3>
          </div>
          <div className="flex flex-col gap-8 py-4">
            <div>
              <CustomSlider items={movies} slidesPerView={7} spaceBetween={6} />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="relative flex items-start justify-between min-h-[60px] before:content-[''] before:absolute before:left-0 before:right-0 before:top-[29px] before:h-[2px] before:bg-[#ffffff10]">
              <div className="grid grid-cols-4 gap-4 flex-grow p-4 relative z-[2]">
                <CardMovieTime />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTime;
