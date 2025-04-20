import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import CardMovieNormal from "./CardMovieNormal";
import CardMovieRectangle from "./CardMovieRectangle";
import CustomSlider from "./CustomSlider";

const CollectionRectangle = (props) => {
  const movies1 = [...Array(10).keys()].map((i) => (
    <div>{<CardMovieRectangle key={i} />}</div>
  ));
  const movies2 = [...Array(10).keys()].map((i) => (
    <div>{<CardMovieNormal key={i} />}</div>
  ));
  return (
    <div className="animate-fadeInUp">
      <div className="px-[20px] mx-auto">
        <div className="flex items-center justify-start gap-4 relative min-h-[44px] mb-[1.2rem]">
          <h2 className="text-[1.8em] leading-[1.4] font-semibold text-white shadow-md">
            {props.title}
          </h2>
          <div className="group">
            <Link className="h-[30px] w-[30px] rounded-[2rem] border border-[#fff5] text-[14px] text-white inline-flex items-center justify-center group-hover:w-auto group-hover:px-2 group-hover:text-primary transition-all duration-300">
              <span className="group-hover:block hidden">Xem thêm</span>
              <IoIosArrowForward size={20} />
            </Link>
          </div>
        </div>
        <div>
          {props.view ? (
            <CustomSlider
              items={movies1}
              slidesPerView={3}
              spaceBetween={16}
              btnView={false}
            />
          ) : (
            <CustomSlider
              items={movies2}
              slidesPerView={7}
              spaceBetween={16}
              btnView={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionRectangle;
