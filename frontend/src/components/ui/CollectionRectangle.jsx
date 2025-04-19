import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardMovieNormal from "./CardMovieNormal";
import CardMovieRectangle from "./CardMovieRectangle";

const CollectionRectangle = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: props.view ? 3 : 7,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    touchMove: true,
  };
  return (
    <div className="effect-fade-in">
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
            <Slider {...settings}>
              <div>
                <CardMovieRectangle />
              </div>
              <div>
                <CardMovieRectangle />
              </div>
              <div>
                <CardMovieRectangle />
              </div>
              <div>
                <CardMovieRectangle />
              </div>
            </Slider>
          ) : (
            <Slider {...settings}>
              <div>
                <CardMovieNormal />
              </div>
              <div>
                <CardMovieNormal />
              </div>
              <div>
                <CardMovieNormal />
              </div>
              <div>
                <CardMovieNormal />
              </div>
              <div>
                <CardMovieNormal />
              </div>
              <div>
                <CardMovieNormal />
              </div>
              <div>
                <CardMovieNormal />
              </div>
              <div>
                <CardMovieNormal />
              </div>
              <div>
                <CardMovieNormal />
              </div>
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionRectangle;
