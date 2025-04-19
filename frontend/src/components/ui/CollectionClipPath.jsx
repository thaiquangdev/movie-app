import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardMovieNormal from "./CardMovieNormal";
import CardMovieClipPath from "./CardMovieClipPath";

const CollectionClipPath = (props) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    draggable: true, // bật kéo chuột
    swipe: true, // bật vuốt (cảm ứng)
    touchMove: true, // bật drag trên mobile
  };
  return (
    <div className="effect-fade-in">
      <div className="px-[20px] mx-auto">
        <div className="flex items-center justify-start gap-4 relative min-h-[44px] mb-[1.2rem]">
          <h2 className="text-[1.8em] leading-[1.4] font-semibold text-white shadow-md">
            {props.title}
          </h2>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <CardMovieClipPath index={1} />
            </div>
            <div>
              <CardMovieClipPath index={2} />
            </div>
            <div>
              <CardMovieClipPath index={3} />
            </div>
            <div>
              <CardMovieClipPath index={4} />
            </div>
            <div>
              <CardMovieClipPath index={5} />
            </div>
            <div>
              <CardMovieClipPath index={6} />
            </div>
            <div>
              <CardMovieClipPath index={7} />
            </div>
            <div>
              <CardMovieClipPath index={8} />
            </div>
            <div>
              <CardMovieClipPath index={9} />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CollectionClipPath;
